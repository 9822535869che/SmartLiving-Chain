// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// RentalDeposit v8 (v6 + ห้องที่สัญญาเดิมคืนเงินครบแล้ว (Settled) กลับมาให้เช่าซ้ำได้)
/// เก็บทรัพย์สิน คำขอเช่า สัญญาเช่า ธุรกรรม และรายชื่อบทบาททั้งหมดบนเชน
/// ผู้ deploy จะเป็น admin (ต้องเป็นแอดเดรส Super Admin ที่ตั้งไว้บนหน้าเว็บ)
contract RentalDeposit {
    enum Status { Draft, Confirmed, Active, Ended, Disputed, Settled, Cancelled }
    enum ReqStatus { Open, Accepted, Rejected }
    enum Kind {
        OwnerApproved,       // 0
        OwnerRevoked,        // 1
        ArbiterAppointed,    // 2
        ArbiterRevoked,      // 3
        PropertyRegistered,  // 4
        RequestCreated,      // 5
        RequestClosed,       // 6
        AgreementCreated,    // 7
        AgreementSigned,     // 8
        DepositPaid,         // 9
        RentPaid,            // 10
        AgreementEnded,      // 11
        InspectionRecorded,  // 12
        DisputeOpened,       // 13
        DisputeResolved,     // 14
        Refunded,            // 15
        PropertyUpdated,     // 16
        AgreementCancelled,  // 17
        DepositClaimed       // 18
    }

    struct Property {
        uint256 id;
        address owner;
        string name;
        string location;
        string docRef;      // เลขโฉนด / เอกสารอ้างอิง
        string photoUri;    // ไม่บังคับ (CID หรือ URL)
        string desc;
        uint256 rent;       // wei ต่อเดือน
        uint256 deposit;    // wei
        uint16 bed;
        uint16 bath;
        uint16 area;        // ตารางเมตร
        bool listed;        // true = เปิดให้เช่า, false = ปิดให้เช่าชั่วคราว
        uint64 createdAt;
    }

    struct PropertyInput {
        string name;
        string location;
        string docRef;
        string photoUri;
        string desc;
        uint256 rent;
        uint256 deposit;
        uint16 bed;
        uint16 bath;
        uint16 area;
        bool listed;
    }

    struct Request {
        uint256 id;
        uint256 propertyId;
        address tenant;
        string note;
        ReqStatus status;
        uint64 createdAt;
    }

    struct Agreement {
        uint256 id;
        uint256 propertyId;
        address landlord;
        address tenant;
        uint256 rentAmount;       // คัดลอกจากทรัพย์สินตอนสร้างสัญญา
        uint256 depositAmount;    // คัดลอกจากทรัพย์สินตอนสร้างสัญญา
        uint256 depositRemaining; // ยอดมัดจำที่ยังค้างอยู่ในสัญญา
        uint256 rentReceived;     // รวมค่าเช่าที่โอนให้เจ้าของแล้ว
        uint256 deducted;         // รวมยอดที่หักจากมัดจำ
        uint256 refunded;         // รวมยอดที่คืนให้ผู้เช่า
        uint256 disputeClaim;     // ยอดที่เจ้าของขอหัก
        uint256 disputeApproved;  // ยอดที่ผู้จัดการข้อพิพาทอนุมัติ
        uint64 start;
        uint64 end;
        uint16 totalMonths;
        uint16 paidMonths;
        bool landlordSigned;
        bool tenantSigned;
        bool inspected;
        bool inspectionPassed;
        bool disputeResolved;
        string terms;
        string inspectionNote;
        string disputeType;
        string disputeReason;
        string decisionReason;
        Status status;
        uint64 createdAt;
        uint64 settleBy;          // เส้นตายที่ต้องดำเนินการต่อ ถ้าเลยแล้วผู้เช่าเรียกคืนได้
    }

    struct AgreementInput {
        uint256 propertyId;
        address tenant;
        uint64 start;
        uint64 end;
        uint16 totalMonths;
        string terms;
        uint256 requestId;        // คำขอเช่าที่ตอบรับพร้อมกัน หรือ NO_REQUEST
    }

    struct Entry {
        address actor;   // ผู้ทำรายการ
        address target;  // ผู้เกี่ยวข้อง (ถ้ามี)
        uint256 refId;   // ไอดีของทรัพย์ / คำขอ / สัญญา
        Kind kind;
        uint256 amount;  // wei (หรือ 1/0 สำหรับผลตรวจและการตอบรับคำขอ)
        uint64 ts;
    }

    address public admin;
    uint64 public constant CLAIM_WINDOW = 30 days;
    uint256 private constant NO_REQUEST = type(uint256).max;
    Property[] private properties;
    Request[] private requests;
    Agreement[] private agreements;
    Entry[] private history;
    address[] private ownerList;
    address[] private arbiterList;
    mapping(address => bool) public isOwner;
    mapping(address => bool) public isArbiter;
    mapping(address => string) public ownerName;
    mapping(address => string) public ownerDoc;
    mapping(address => uint64) public ownerSince;
    mapping(address => string) public arbiterName;
    mapping(address => uint64) public arbiterSince;
    uint256 private _lock = 1;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin");
        _;
    }
    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not approved owner");
        _;
    }
    modifier onlyArbiter() {
        require(isArbiter[msg.sender], "Not arbiter");
        _;
    }
    modifier nonReentrant() {
        require(_lock == 1, "Reentrant call");
        _lock = 2;
        _;
        _lock = 1;
    }

    constructor() {
        admin = msg.sender;
    }

    // ---------- บทบาท ----------

    function approveOwner(address a, string calldata name_, string calldata doc_) external onlyAdmin {
        require(a != address(0), "Zero address");
        require(a != admin, "Admin cannot be owner");
        require(!isOwner[a], "Already owner");
        require(!isArbiter[a], "Arbiter cannot be owner");
        isOwner[a] = true;
        ownerName[a] = name_;
        ownerDoc[a] = doc_;
        ownerSince[a] = uint64(block.timestamp);
        ownerList.push(a);
        _log(Kind.OwnerApproved, 0, a, 0);
    }

    function revokeOwner(address a) external onlyAdmin {
        require(isOwner[a], "Not owner");
        isOwner[a] = false;
        _remove(ownerList, a);
        _log(Kind.OwnerRevoked, 0, a, 0);
    }

    function appointArbiter(address a, string calldata name_) external onlyAdmin {
        require(a != address(0), "Zero address");
        require(a != admin, "Admin cannot be arbiter");
        require(!isOwner[a], "Owner cannot be arbiter");
        require(!isArbiter[a], "Already arbiter");
        isArbiter[a] = true;
        arbiterName[a] = name_;
        arbiterSince[a] = uint64(block.timestamp);
        arbiterList.push(a);
        _log(Kind.ArbiterAppointed, 0, a, 0);
    }

    function revokeArbiter(address a) external onlyAdmin {
        require(isArbiter[a], "Not arbiter");
        isArbiter[a] = false;
        _remove(arbiterList, a);
        _log(Kind.ArbiterRevoked, 0, a, 0);
    }

    // ---------- ทรัพย์สินและคำขอเช่า ----------

    function registerProperty(PropertyInput calldata inp) external onlyOwner returns (uint256 id) {
        id = properties.length;
        Property storage p = properties.push();
        p.id = id;
        p.owner = msg.sender;
        p.createdAt = uint64(block.timestamp);
        _setProperty(p, inp);
        _log(Kind.PropertyRegistered, id, address(0), 0);
    }

    /// แก้ไขข้อมูลทรัพย์สิน รวมค่าเช่า มัดจำ และสถานะการให้เช่า
    /// การแก้ค่าเช่าหรือมัดจำมีผลเฉพาะสัญญาที่สร้างหลังจากนี้ สัญญาเดิมใช้ยอดที่คัดลอกไว้
    function updateProperty(uint256 id, PropertyInput calldata inp) external {
        require(id < properties.length, "Property not found");
        Property storage p = properties[id];
        require(p.owner == msg.sender, "Not property owner");
        _setProperty(p, inp);
        _log(Kind.PropertyUpdated, id, address(0), 0);
    }

    function _setProperty(Property storage p, PropertyInput calldata inp) private {
        require(bytes(inp.name).length > 0, "Name required");
        require(inp.rent > 0, "Rent must be > 0");
        require(inp.deposit > 0, "Deposit must be > 0");
        p.name = inp.name;
        p.location = inp.location;
        p.docRef = inp.docRef;
        p.photoUri = inp.photoUri;
        p.desc = inp.desc;
        p.rent = inp.rent;
        p.deposit = inp.deposit;
        p.bed = inp.bed;
        p.bath = inp.bath;
        p.area = inp.area;
        p.listed = inp.listed;
    }

    function requestRental(uint256 propertyId, string calldata note_) external returns (uint256 id) {
        require(propertyId < properties.length, "Property not found");
        address owner_ = properties[propertyId].owner;
        require(owner_ != msg.sender, "Owner cannot request own property");
        require(properties[propertyId].listed, "Property not listed");
        id = requests.length;
        Request storage r = requests.push();
        r.id = id;
        r.propertyId = propertyId;
        r.tenant = msg.sender;
        r.note = note_;
        r.status = ReqStatus.Open;
        r.createdAt = uint64(block.timestamp);
        _log(Kind.RequestCreated, id, owner_, 0);
    }

    function closeRequest(uint256 reqId, bool accepted) external {
        require(reqId < requests.length, "Request not found");
        Request storage r = requests[reqId];
        require(properties[r.propertyId].owner == msg.sender, "Not property owner");
        require(r.status == ReqStatus.Open, "Request is closed");
        r.status = accepted ? ReqStatus.Accepted : ReqStatus.Rejected;
        _log(Kind.RequestClosed, reqId, r.tenant, accepted ? 1 : 0);
    }

    // ---------- สัญญาเช่าและมัดจำ ----------

    function createAgreement(AgreementInput calldata inp) external onlyOwner returns (uint256 id) {
        require(inp.propertyId < properties.length, "Property not found");
        Property storage pr = properties[inp.propertyId];
        require(pr.owner == msg.sender, "Not property owner");
        require(pr.listed, "Property not listed");
        require(!_roomHasContract(inp.propertyId), "Room is occupied");
        require(inp.tenant != address(0) && inp.tenant != msg.sender, "Invalid tenant");
        require(inp.end > inp.start, "End must be after start");
        require(inp.totalMonths > 0, "Months must be > 0");
        if (inp.requestId != NO_REQUEST) {
            require(inp.requestId < requests.length, "Request not found");
            Request storage rq = requests[inp.requestId];
            require(rq.propertyId == inp.propertyId, "Request is for another property");
            require(rq.tenant == inp.tenant, "Request is from another tenant");
            require(rq.status == ReqStatus.Open, "Request is closed");
        }
        id = agreements.length;
        Agreement storage a = agreements.push();
        a.id = id;
        a.propertyId = inp.propertyId;
        a.landlord = msg.sender;
        a.tenant = inp.tenant;
        a.rentAmount = pr.rent;
        a.depositAmount = pr.deposit;
        a.start = inp.start;
        a.end = inp.end;
        a.totalMonths = inp.totalMonths;
        a.terms = inp.terms;
        a.status = Status.Draft;
        a.createdAt = uint64(block.timestamp);
        _log(Kind.AgreementCreated, id, inp.tenant, pr.deposit);
        if (inp.requestId != NO_REQUEST) {
            requests[inp.requestId].status = ReqStatus.Accepted;
            _log(Kind.RequestClosed, inp.requestId, inp.tenant, 1);
        }
    }

    /// เจ้าของยกเลิกสัญญาที่ยังเป็นฉบับร่าง (ก่อนลงนาม) ได้เท่านั้น
    function cancelAgreement(uint256 id) external {
        Agreement storage a = _agr(id);
        require(a.landlord == msg.sender, "Only landlord");
        require(a.status == Status.Draft, "Not in draft");
        a.status = Status.Cancelled;
        _log(Kind.AgreementCancelled, id, a.tenant, 0);
    }

    function sign(uint256 id) external {
        Agreement storage a = _agr(id);
        require(a.status == Status.Draft, "Not in draft");
        if (msg.sender == a.landlord) {
            require(!a.landlordSigned, "Already signed");
            a.landlordSigned = true;
        } else if (msg.sender == a.tenant) {
            require(!a.tenantSigned, "Already signed");
            a.tenantSigned = true;
        } else {
            revert("Not a party");
        }
        if (a.landlordSigned && a.tenantSigned) {
            a.status = Status.Confirmed;
        }
        _log(Kind.AgreementSigned, id, address(0), 0);
    }

    function payDeposit(uint256 id) external payable {
        Agreement storage a = _agr(id);
        require(msg.sender == a.tenant, "Only tenant");
        require(a.status == Status.Confirmed, "Not confirmed");
        require(msg.value == a.depositAmount, "Amount must equal deposit");
        a.depositRemaining = msg.value;
        a.status = Status.Active;
        _log(Kind.DepositPaid, id, a.landlord, msg.value);
    }

    function payRent(uint256 id) external payable nonReentrant {
        Agreement storage a = _agr(id);
        require(msg.sender == a.tenant, "Only tenant");
        require(a.status == Status.Active, "Not active");
        require(a.paidMonths < a.totalMonths, "All months paid");
        require(msg.value == a.rentAmount, "Amount must equal rent");
        a.paidMonths += 1;
        a.rentReceived += msg.value;
        (bool ok, ) = a.landlord.call{value: msg.value}("");
        require(ok, "Transfer failed");
        _log(Kind.RentPaid, id, a.landlord, msg.value);
    }

    function endAgreement(uint256 id) external {
        Agreement storage a = _agr(id);
        require(msg.sender == a.landlord || msg.sender == a.tenant, "Not a party");
        require(a.status == Status.Active, "Not active");
        require(block.timestamp >= a.end, "Not ended yet");
        a.status = Status.Ended;
        a.settleBy = uint64(block.timestamp + CLAIM_WINDOW);
        _log(Kind.AgreementEnded, id, a.tenant, 0);
    }

    function recordInspection(uint256 id, bool passed, string calldata note) external {
        Agreement storage a = _agr(id);
        require(msg.sender == a.landlord, "Only landlord");
        require(a.status == Status.Ended, "Not ended");
        require(!a.inspected, "Already inspected");
        require(block.timestamp <= a.settleBy, "Deadline passed");
        a.inspected = true;
        a.inspectionPassed = passed;
        a.inspectionNote = note;
        a.settleBy = uint64(block.timestamp + CLAIM_WINDOW);
        _log(Kind.InspectionRecorded, id, a.tenant, passed ? 1 : 0);
    }

    // ---------- ข้อพิพาทและการหักมัดจำ ----------

    function openDispute(uint256 id, string calldata dtype, uint256 claim, string calldata reason) external {
        Agreement storage a = _agr(id);
        require(msg.sender == a.landlord, "Only landlord");
        require(a.status == Status.Ended, "Not ended");
        require(a.inspected && !a.inspectionPassed, "Inspection must fail");
        require(block.timestamp <= a.settleBy, "Deadline passed");
        require(!a.disputeResolved, "Dispute already resolved");
        require(claim > 0, "Claim must be > 0");
        require(claim <= a.depositRemaining, "Claim exceeds balance");
        require(bytes(reason).length > 0, "Reason required");
        a.status = Status.Disputed;
        a.disputeType = dtype;
        a.disputeClaim = claim;
        a.disputeReason = reason;
        _log(Kind.DisputeOpened, id, a.tenant, claim);
    }

    /// ผู้จัดการข้อพิพาทตัดสิน ยอดที่อนุมัติต้องไม่เกินยอดที่ขอและยอดคงเหลือ
    /// approved = 0 คือปฏิเสธการหัก
    function resolveDispute(uint256 id, uint256 approved, string calldata decisionReason_) external onlyArbiter nonReentrant {
        Agreement storage a = _agr(id);
        require(a.status == Status.Disputed, "Not disputed");
        require(msg.sender != a.landlord && msg.sender != a.tenant, "Party cannot resolve");
        require(bytes(decisionReason_).length > 0, "Reason required");
        require(approved <= a.disputeClaim, "Exceeds claim");
        require(approved <= a.depositRemaining, "Exceeds balance");
        a.depositRemaining -= approved;
        a.deducted += approved;
        a.disputeApproved = approved;
        a.disputeResolved = true;
        a.decisionReason = decisionReason_;
        a.status = a.depositRemaining == 0 ? Status.Settled : Status.Ended;
        a.settleBy = uint64(block.timestamp + CLAIM_WINDOW);
        if (approved > 0) {
            (bool ok, ) = a.landlord.call{value: approved}("");
            require(ok, "Transfer failed");
        }
        _log(Kind.DisputeResolved, id, a.landlord, approved);
    }

    // ---------- คืนมัดจำ ----------

    /// คืนมัดจำที่เหลือให้ผู้เช่า ทำได้เมื่อผ่านการตรวจ หรือข้อพิพาทถูกตัดสินแล้ว
    function refundDeposit(uint256 id) external nonReentrant {
        Agreement storage a = _agr(id);
        require(a.status == Status.Ended, "Not ended");
        require((a.inspected && a.inspectionPassed) || a.disputeResolved, "Inspection or dispute not cleared");
        require(msg.sender == a.landlord || isArbiter[msg.sender], "Not allowed");
        uint256 amount = a.depositRemaining;
        require(amount > 0, "Nothing to refund");
        a.depositRemaining = 0;
        a.refunded += amount;
        a.status = Status.Settled;
        (bool ok, ) = a.tenant.call{value: amount}("");
        require(ok, "Transfer failed");
        _log(Kind.Refunded, id, a.tenant, amount);
    }

    /// ผู้เช่าเรียกคืนมัดจำเองได้ เมื่อเจ้าของไม่ดำเนินการภายในกำหนด
    function claimDeposit(uint256 id) external nonReentrant {
        Agreement storage a = _agr(id);
        require(msg.sender == a.tenant, "Only tenant");
        require(a.status == Status.Ended, "Not ended");
        require(block.timestamp > a.settleBy, "Deadline not passed");
        uint256 amount = a.depositRemaining;
        require(amount > 0, "Nothing to refund");
        a.depositRemaining = 0;
        a.refunded += amount;
        a.status = Status.Settled;
        (bool ok, ) = a.tenant.call{value: amount}("");
        require(ok, "Transfer failed");
        _log(Kind.DepositClaimed, id, a.tenant, amount);
    }

    // ---------- อ่านข้อมูลทั้งหมด ----------

    function getProperties() external view returns (Property[] memory) { return properties; }
    function getRequests() external view returns (Request[] memory) { return requests; }
    function getAgreements() external view returns (Agreement[] memory) { return agreements; }
    function getHistory() external view returns (Entry[] memory) { return history; }
    function getOwners() external view returns (address[] memory) { return ownerList; }
    function getArbiters() external view returns (address[] memory) { return arbiterList; }

    // ---------- ฟังก์ชันภายใน ----------

    function _agr(uint256 id) private view returns (Agreement storage) {
        require(id < agreements.length, "Agreement not found");
        return agreements[id];
    }

    /// ห้องหนึ่งห้องมีสัญญาที่ยังค้างได้หนึ่งฉบับ (ไม่นับสัญญาที่ยกเลิกหรือคืนเงินครบแล้ว)
    function _roomHasContract(uint256 propId) private view returns (bool) {
        for (uint256 i = 0; i < agreements.length; i++) {
            Agreement storage a = agreements[i];
            if (a.propertyId == propId && a.status != Status.Cancelled && a.status != Status.Settled) {
                return true;
            }
        }
        return false;
    }

    function _log(Kind kind, uint256 refId, address target, uint256 amount) private {
        Entry storage e = history.push();
        e.actor = msg.sender;
        e.target = target;
        e.refId = refId;
        e.kind = kind;
        e.amount = amount;
        e.ts = uint64(block.timestamp);
    }

    function _remove(address[] storage list, address who) private {
        for (uint256 i = 0; i < list.length; i++) {
            if (list[i] == who) {
                list[i] = list[list.length - 1];
                list.pop();
                return;
            }
        }
    }
}
