/* ===== RentalChain · ข้อมูลทั้งหมดอยู่บน Smart Contract (v3) ===== */
const RENTAL_CONTRACT='0x4C2D108F265A3B299354780641e7D84e254FBeB0';
const RENTAL_ABI=[{"inputs":[{"internalType":"address","name":"a","type":"address"},{"internalType":"string","name":"name_","type":"string"}],"name":"appointArbiter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"doc_","type":"string"}],"name":"approveOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cancelAgreement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reqId","type":"uint256"},{"internalType":"bool","name":"accepted","type":"bool"}],"name":"closeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"propertyId","type":"uint256"},{"internalType":"address","name":"tenant","type":"address"},{"internalType":"uint64","name":"start","type":"uint64"},{"internalType":"uint64","name":"end","type":"uint64"},{"internalType":"uint16","name":"totalMonths","type":"uint16"},{"internalType":"string","name":"terms","type":"string"},{"internalType":"uint256","name":"requestId","type":"uint256"}],"internalType":"struct RentalDeposit.AgreementInput","name":"inp","type":"tuple"}],"name":"createAgreement","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"endAgreement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"dtype","type":"string"},{"internalType":"uint256","name":"claim","type":"uint256"},{"internalType":"string","name":"reason","type":"string"}],"name":"openDispute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"payDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"payRent","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"passed","type":"bool"},{"internalType":"string","name":"note","type":"string"}],"name":"recordInspection","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"refundDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"string","name":"docRef","type":"string"},{"internalType":"string","name":"photoUri","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"uint256","name":"rent","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint16","name":"bed","type":"uint16"},{"internalType":"uint16","name":"bath","type":"uint16"},{"internalType":"uint16","name":"area","type":"uint16"},{"internalType":"bool","name":"listed","type":"bool"}],"internalType":"struct RentalDeposit.PropertyInput","name":"inp","type":"tuple"}],"name":"registerProperty","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"propertyId","type":"uint256"},{"internalType":"string","name":"note_","type":"string"}],"name":"requestRental","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"approved","type":"uint256"},{"internalType":"string","name":"decisionReason_","type":"string"}],"name":"resolveDispute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"revokeArbiter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"revokeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"sign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"string","name":"docRef","type":"string"},{"internalType":"string","name":"photoUri","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"uint256","name":"rent","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint16","name":"bed","type":"uint16"},{"internalType":"uint16","name":"bath","type":"uint16"},{"internalType":"uint16","name":"area","type":"uint16"},{"internalType":"bool","name":"listed","type":"bool"}],"internalType":"struct RentalDeposit.PropertyInput","name":"inp","type":"tuple"}],"name":"updateProperty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"arbiterName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"arbiterSince","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_WINDOW","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAgreements","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"propertyId","type":"uint256"},{"internalType":"address","name":"landlord","type":"address"},{"internalType":"address","name":"tenant","type":"address"},{"internalType":"uint256","name":"rentAmount","type":"uint256"},{"internalType":"uint256","name":"depositAmount","type":"uint256"},{"internalType":"uint256","name":"depositRemaining","type":"uint256"},{"internalType":"uint256","name":"rentReceived","type":"uint256"},{"internalType":"uint256","name":"deducted","type":"uint256"},{"internalType":"uint256","name":"refunded","type":"uint256"},{"internalType":"uint256","name":"disputeClaim","type":"uint256"},{"internalType":"uint256","name":"disputeApproved","type":"uint256"},{"internalType":"uint64","name":"start","type":"uint64"},{"internalType":"uint64","name":"end","type":"uint64"},{"internalType":"uint16","name":"totalMonths","type":"uint16"},{"internalType":"uint16","name":"paidMonths","type":"uint16"},{"internalType":"bool","name":"landlordSigned","type":"bool"},{"internalType":"bool","name":"tenantSigned","type":"bool"},{"internalType":"bool","name":"inspected","type":"bool"},{"internalType":"bool","name":"inspectionPassed","type":"bool"},{"internalType":"bool","name":"disputeResolved","type":"bool"},{"internalType":"string","name":"terms","type":"string"},{"internalType":"string","name":"inspectionNote","type":"string"},{"internalType":"string","name":"disputeType","type":"string"},{"internalType":"string","name":"disputeReason","type":"string"},{"internalType":"string","name":"decisionReason","type":"string"},{"internalType":"enum RentalDeposit.Status","name":"status","type":"uint8"},{"internalType":"uint64","name":"createdAt","type":"uint64"},{"internalType":"uint64","name":"settleBy","type":"uint64"}],"internalType":"struct RentalDeposit.Agreement[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getArbiters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHistory","outputs":[{"components":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"refId","type":"uint256"},{"internalType":"enum RentalDeposit.Kind","name":"kind","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint64","name":"ts","type":"uint64"}],"internalType":"struct RentalDeposit.Entry[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProperties","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"string","name":"docRef","type":"string"},{"internalType":"string","name":"photoUri","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"uint256","name":"rent","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint16","name":"bed","type":"uint16"},{"internalType":"uint16","name":"bath","type":"uint16"},{"internalType":"uint16","name":"area","type":"uint16"},{"internalType":"bool","name":"listed","type":"bool"},{"internalType":"uint64","name":"createdAt","type":"uint64"}],"internalType":"struct RentalDeposit.Property[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRequests","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"propertyId","type":"uint256"},{"internalType":"address","name":"tenant","type":"address"},{"internalType":"string","name":"note","type":"string"},{"internalType":"enum RentalDeposit.ReqStatus","name":"status","type":"uint8"},{"internalType":"uint64","name":"createdAt","type":"uint64"}],"internalType":"struct RentalDeposit.Request[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isArbiter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownerDoc","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownerName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownerSince","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}];
const SEPOLIA_ID='0xaa36a7';
const CHAINS={'0x1':'Ethereum Mainnet','0xaa36a7':'Sepolia Testnet'};
const ROLE={landlord:'เจ้าของทรัพย์สิน',tenant:'ผู้เช่า',admin:'ผู้จัดการข้อพิพาท',super:'ผู้ดูแลระบบ'};
const NAMES={landlord:'LL',tenant:'TN',admin:'AD',super:'SA'};
const PAGES=[
 {id:'home',t:'หน้าหลัก',roles:['landlord','tenant','admin','super'],ic:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>'},
 {id:'stay',t:'ที่พัก',roles:['landlord','tenant'],ic:'<path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-5h6v5"/>'},
 {id:'tx',t:'ธุรกรรม',roles:['tenant','landlord'],ic:'<path d="M7 4 3 8l4 4"/><path d="M3 8h14"/><path d="m17 20 4-4-4-4"/><path d="M21 16H7"/>'},
 {id:'dispute',t:'ข้อพิพาท',roles:['landlord','tenant','admin'],ic:'<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7 2 14h6z"/><path d="M19 7l-3 7h6z"/>'},
 {id:'report',t:'รายงาน',roles:['landlord','admin','super'],ic:'<path d="M5 20V10"/><path d="M12 20V4"/><path d="M19 20v-7"/>'},
 {id:'props',t:'ทรัพย์สินของฉัน',roles:['landlord'],ic:'<path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-6h6v6"/>'},
 {id:'agr',t:'สัญญาเช่า',roles:['landlord','tenant'],ic:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>'},
 {id:'access',t:'จัดการสิทธิ์',roles:['super'],ic:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>'}
];
const STATUS_NAMES=['Draft','Confirmed','Active','Ended','Disputed','Settled','Cancelled'];
const KIND_TH=['เพิ่มเจ้าของทรัพย์สิน','เพิกถอนเจ้าของทรัพย์สิน','แต่งตั้งผู้จัดการข้อพิพาท','เพิกถอนผู้จัดการข้อพิพาท','ลงทะเบียนทรัพย์สิน','ส่งคำขอเช่า','ตอบรับคำขอเช่า','สร้างสัญญาเช่า','ลงนามสัญญา','ฝากเงินประกัน','ชำระค่าเช่า','สิ้นสุดสัญญา','บันทึกผลตรวจห้อง','เปิดข้อพิพาท','ตัดสินข้อพิพาท','คืนเงินประกัน','แก้ไขข้อมูลทรัพย์สิน','ยกเลิกฉบับร่างสัญญา','เรียกคืนมัดจำเกินกำหนด'];
const REQ_OPEN='รอดำเนินการ',REQ_DONE='สร้างสัญญาแล้ว',REQ_NO='ปฏิเสธแล้ว';
const ST={Draft:['ฉบับร่าง','n'],Confirmed:['ยืนยันแล้ว','y'],Active:['ใช้งานอยู่',''],Ended:['สิ้นสุดแล้ว','y'],Disputed:['มีข้อพิพาท','r'],Settled:['คืนเงินครบ','b'],Cancelled:['ยกเลิกแล้ว','r']};
const ERR_TH={
 'Installments not complete':'ต้องชำระค่าเช่าครบทุกงวดก่อนจึงเปิดข้อพิพาทได้','Deadline passed':'เลยกำหนดดำเนินการแล้ว','Deadline not passed':'ยังไม่ถึงกำหนดให้เรียกคืนมัดจำเอง','Request not found':'ไม่พบคำขอเช่านี้','Request is for another property':'คำขอนี้เป็นของทรัพย์สินอื่น','Request is from another tenant':'คำขอนี้เป็นของผู้เช่าอีกคน','Not in draft':'สัญญาไม่ได้อยู่ในสถานะฉบับร่างแล้ว','Transfer failed':'การโอนเงินไม่สำเร็จ','Already inspected':'บันทึกผลตรวจห้องไปแล้ว',
 'Only landlord':'เฉพาะเจ้าของทรัพย์สินของสัญญานี้','Only tenant':'เฉพาะผู้เช่าของสัญญานี้','Not approved owner':'บัญชีนี้ยังไม่ได้รับอนุมัติเป็นเจ้าของทรัพย์สิน',
 'Only admin':'เฉพาะผู้ดูแลระบบ','Not arbiter':'เฉพาะผู้จัดการข้อพิพาท','Not property owner':'เฉพาะเจ้าของทรัพย์สินนี้',
 'Not ended yet':'ยังไม่ถึงวันสิ้นสุดสัญญา','Not ended':'สัญญายังไม่สิ้นสุด','Not active':'สัญญายังไม่อยู่ในสถานะใช้งาน','Not confirmed':'ทั้งสองฝ่ายยังลงนามไม่ครบ',
 'Room is occupied':'ห้องนี้มีสัญญาที่ยังไม่ปิดอยู่แล้ว','Amount must equal deposit':'จำนวนเงินประกันไม่ตรงกับสัญญา','Amount must equal rent':'จำนวนค่าเช่าไม่ตรงกับสัญญา',
 'Inspection must fail':'เปิดข้อพิพาทได้เมื่อผลตรวจไม่ผ่าน','Claim exceeds balance':'ยอดที่ขอหักเกินยอดคงเหลือ','Exceeds claim':'ยอดที่อนุมัติเกินยอดที่ขอหัก',
 'Exceeds balance':'ยอดที่อนุมัติเกินยอดคงเหลือ','Nothing to refund':'ไม่มียอดคงเหลือให้คืน','Inspection or dispute not cleared':'ต้องผ่านการตรวจหรือตัดสินข้อพิพาทก่อนคืนเงิน',
 'Party cannot resolve':'คู่สัญญาตัดสินข้อพิพาทของตัวเองไม่ได้','Not disputed':'สัญญานี้ไม่อยู่ในสถานะข้อพิพาท','Request is closed':'คำขอนี้ปิดไปแล้ว',
 'Owner cannot request own property':'เจ้าของไม่สามารถขอเช่าทรัพย์สินของตัวเอง','Already signed':'คุณลงนามไปแล้ว','Not a party':'บัญชีนี้ไม่ใช่คู่สัญญา',
 'user rejected':'คุณปฏิเสธธุรกรรมใน MetaMask','insufficient funds':'ยอด ETH ไม่พอ (รวมค่า gas)'
};

// ===== State: ทุกค่าดึงมาจากสัญญา ไม่เก็บใน localStorage =====
const state={role:'landlord',page:'home',props:[],agr:[],txs:[],eth:0,chainName:'',roomId:null};
let reqs=[],agrPrefill=null;
const acl={owners:[],arbiters:[],log:[]};
let SUPER='';
let mmAccount=null,provider=null,coveRO=null,coveW=null,lastSig='',manualOff=false;
let stayFilter='all',txQ='',txF='all',reqDone=false,depAsk=false,pendingImg=null;

// ===== ตัวช่วย =====
const N=v=>Number(String(v));
const ethNum=w=>Number(ethers.utils.formatEther(w));
const ethT=n=>Number(n).toLocaleString('en-US',{maximumFractionDigits:4})+' ETH';
const eth=n=>Number(n).toFixed(3)+' ETH';
const pad=n=>'CT-2026-'+String(n).padStart(3,'0');
const $g=id=>document.getElementById(id);
const val=id=>$g(id).value.trim();
const esc=t=>String(t==null?'':t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isAddr=a=>/^0x[0-9a-fA-F]{40}$/.test(a||'');
const eqA=(a,b)=>String(a||'').toLowerCase()===String(b||'').toLowerCase();
const shortAddr=a=>a?a.slice(0,6)+'…'+a.slice(-4):'-';
const me=()=>mmAccount||'';
let galIdx={};
const photosOf=id=>{try{const a=JSON.parse(localStorage.getItem('rc-photos-'+id)||'null');if(Array.isArray(a)&&a.length)return a;}catch(e){}const one=localStorage.getItem('rc-photo-'+id);return one?[one]:['assets/photo-v3.svg'];};
const photo=p=>photosOf(p.id)[0];
const galHTML=(p,cls)=>{const ph=photosOf(p.id);const i=(galIdx[p.id]||0)%ph.length;return `<div class="gal ${cls||''}" data-pid="${p.id}"><div class="gal-track">${ph.map((u,k)=>`<div class="gal-slide${k===i?' on':''}" style="background-image:url('${u}')"></div>`).join('')}</div>${ph.length>1?`<span class="gal-nav prev" onclick="galStep(${p.id},-1,event)" aria-label="ก่อนหน้า">‹</span><span class="gal-nav next" onclick="galStep(${p.id},1,event)" aria-label="ถัดไป">›</span><span class="gal-dots">${ph.map((_,k)=>`<i class="${k===i?'on':''}" onclick="galGo(${p.id},${k},event)"></i>`).join('')}</span><span class="gal-count">${i+1}/${ph.length}</span>`:''}</div>`;};
function galUpdate(id){const el=document.querySelector(`.gal[data-pid="${id}"]`);if(!el)return;const i=galIdx[id]||0;el.querySelectorAll('.gal-slide').forEach((x,k)=>x.classList.toggle('on',k===i));el.querySelectorAll('.gal-dots i').forEach((x,k)=>x.classList.toggle('on',k===i));const c=el.querySelector('.gal-count');if(c)c.textContent=(i+1)+'/'+el.querySelectorAll('.gal-slide').length;}
window.galStep=(id,d,ev)=>{if(ev){ev.stopPropagation();ev.preventDefault();}const n=photosOf(id).length;galIdx[id]=(((galIdx[id]||0)+d)%n+n)%n;galUpdate(id);};
window.galGo=(id,k,ev)=>{if(ev){ev.stopPropagation();ev.preventDefault();}galIdx[id]=k;galUpdate(id);};
let galTouch=null;
document.addEventListener('touchstart',e=>{const g=e.target.closest&&e.target.closest('.gal');galTouch=g?{x:e.touches[0].clientX,y:e.touches[0].clientY,id:+g.dataset.pid}:null;},{passive:true});
document.addEventListener('touchend',e=>{if(!galTouch)return;const dx=e.changedTouches[0].clientX-galTouch.x,dy=e.changedTouches[0].clientY-galTouch.y;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.3)galStep(galTouch.id,dx<0?1:-1);galTouch=null;},{passive:true});
const fdate=d=>String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear();
const dstr=ts=>fdate(new Date(N(ts)*1000));
const parseD=s=>{const str=String(s),iso=str.includes('-');const [a,b,c]=str.split(iso?'-':'/').map(Number);return iso?new Date(a,b-1,c):new Date(c,b-1,a);};
const tsOf=ymd=>Math.floor(new Date(ymd+'T00:00:00').getTime()/1000);
const monthsBetween=(s,e)=>{const a=new Date(s+'T00:00:00'),b=new Date(e+'T00:00:00');return Math.max(1,(b.getFullYear()-a.getFullYear())*12+(b.getMonth()-a.getMonth())+1);};
const visibleAgrs=()=>state.agr.filter(a=>a.status!=='Cancelled'&&(state.role==='tenant'?eqA(a.tenantAddr,me()):state.role==='landlord'?eqA(a.landlordAddr,me()):true));
const ROOM_BLOCK=['Draft','Confirmed','Active','Ended','Disputed'];
const roomUsed=pid=>state.agr.some(x=>x.propId===pid&&ROOM_BLOCK.includes(x.status));
const act=()=>{const l=visibleAgrs();return l.find(x=>x.id===state.agrSel)||l[l.length-1];};
const canUse=p=>{const x=PAGES.find(y=>y.id===p);return !x||x.roles.includes(state.role);};
const lockMsg=()=>state.role!=='landlord'?'บทบาทนี้ดูได้อย่างเดียว ผู้ดำเนินการคือ เจ้าของทรัพย์สิน':'บัญชีนี้ยังไม่ได้รับอนุมัติเป็นเจ้าของทรัพย์สิน';
const tag=s=>`<span class="pill ${ST[s][1]}">${ST[s][0]}</span>`;
const IDX={Draft:0,Confirmed:1,Active:2,Ended:3,Disputed:3,Settled:4};
const CHECK='<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>';
const ico=(d,cls='')=>`<span class="ico ${cls}"><svg viewBox="0 0 24 24">${d}</svg></span>`;
function note(id,msg,cls){const el=$g(id);if(!el)return;el.className='note '+(cls||'');el.textContent=msg||'';el.style.display=msg?'block':'none';}
function endReached(a){const n=new Date();n.setHours(0,0,0,0);return n>=parseD(a.end);}
function ownerOK(){return !!mmAccount&&acl.owners.some(o=>eqA(o.addr,mmAccount));}
function roleByAddr(a){
  if(!a)return null;
  if(eqA(a,SUPER))return 'super';
  if(acl.owners.some(o=>eqA(o.addr,a)))return 'landlord';
  if(acl.arbiters.some(o=>eqA(o.addr,a)))return 'admin';
  return null;
}
function errTH(e){
  if(e&&(e.code===4001||e.code==='ACTION_REJECTED'))return 'คุณปฏิเสธธุรกรรมใน MetaMask';
  const raw=[e&&e.reason,e&&e.error&&e.error.message,e&&e.data&&e.data.message,e&&e.message].filter(Boolean).join(' | ');
  for(const k in ERR_TH)if(raw.includes(k))return ERR_TH[k];
  return 'ธุรกรรมไม่สำเร็จ: '+raw.slice(0,160);
}
function busy(msg){
  let el=$g('txbar');
  if(!el){el=document.createElement('div');el.id='txbar';el.style.cssText='position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:#111A3B;color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;z-index:99;box-shadow:0 8px 24px #0004;display:none';document.body.appendChild(el);}
  el.textContent=msg;el.style.display=msg?'block':'none';
}

// ===== อ่านข้อมูลจากสัญญาทั้งหมด =====
function mapAgr(x,props,hist){
  const id=N(x.id),pid=N(x.propertyId),p=props.find(q=>q.id===pid);
  const payments=hist.filter(h=>h.kind===10&&h.refId===id).map((h,i)=>({period:'งวดที่ '+(i+1),date:dstr(h.ts),amount:h.amtE,tx:'#TX-'+h.idx}));
  const st=N(x.status);
  let dispute=null;
  if(x.disputeClaim.gt(0)){
    const claim=ethNum(x.disputeClaim),approved=ethNum(x.disputeApproved);
    dispute={type:x.disputeType,amount:claim,reason:x.disputeReason,open:st===4,approved,decisionReason:x.decisionReason,
      result:approved===claim?'อนุมัติตามที่ขอ':approved===0?'ปฏิเสธการหัก':'อนุมัติบางส่วน'};
  }
  return {id,propId:pid,propName:p?p.name:'#'+pid,created:dstr(x.createdAt),tenantAddr:x.tenant,landlordAddr:x.landlord,settleBy:N(x.settleBy),
    rent:ethNum(x.rentAmount),deposit:ethNum(x.depositAmount),rentWei:x.rentAmount,depositWei:x.depositAmount,
    start:dstr(x.start),end:dstr(x.end),totalMonths:N(x.totalMonths),terms:x.terms,
    landlordOk:x.landlordSigned,tenantOk:x.tenantSigned,status:STATUS_NAMES[st],
    balance:ethNum(x.depositRemaining),deducted:ethNum(x.deducted),refunded:ethNum(x.refunded),
    payments,dispute,inspected:x.inspected,inspectionPassed:x.inspectionPassed,inspectionNote:x.inspectionNote};
}
async function chainSync(){
  if(!coveRO)return false;
  const [pr,ag,rq,hs,ow,ar,adm]=await Promise.all([coveRO.getProperties(),coveRO.getAgreements(),coveRO.getRequests(),coveRO.getHistory(),coveRO.getOwners(),coveRO.getArbiters(),coveRO.admin()]);
  SUPER=adm;
  const hist=hs.map((h,i)=>({idx:i,actor:h.actor,target:h.target,refId:N(h.refId),kind:N(h.kind),amount:h.amount,amtE:ethNum(h.amount),ts:N(h.ts)}));
  const props=pr.map(p=>{const id=N(p.id);return {id,owner:p.owner,name:p.name,addr:p.location,docRef:p.docRef,desc:p.desc,
    rent:ethNum(p.rent),deposit:ethNum(p.deposit),rentWei:p.rent,depositWei:p.deposit,bed:N(p.bed),bath:N(p.bath),area:N(p.area),
    img:localStorage.getItem('rc-photo-'+id)||null,listed:p.listed};});
  const agrs=ag.map(x=>mapAgr(x,props,hist));
  const rqs=rq.map(r=>{const pid=N(r.propertyId),p=props.find(q=>q.id===pid);
    return {id:N(r.id),propId:pid,propName:p?p.name:'#'+pid,landlordAddr:p?p.owner:'',tenantAddr:r.tenant,date:dstr(r.createdAt),note:r.note,
      deposit:p?p.deposit:0,rent:p?p.rent:0,status:[REQ_OPEN,REQ_DONE,REQ_NO][N(r.status)]};}).reverse();
  const owners=await Promise.all(ow.map(async a=>({addr:a,name:await coveRO.ownerName(a),doc:await coveRO.ownerDoc(a),date:dstr(await coveRO.ownerSince(a))})));
  const arbs=await Promise.all(ar.map(async a=>({addr:a,name:await coveRO.arbiterName(a),date:dstr(await coveRO.arbiterSince(a))})));
  state.props=props;state.agr=agrs;reqs=rqs;acl.owners=owners;acl.arbiters=arbs;
  acl.log=hist.filter(h=>h.kind<=3).reverse().map(h=>({t:dstr(h.ts),text:KIND_TH[h.kind]+' · '+shortAddr(h.target)}));
  const LEDGER={9:['ฝากเงินประกัน',1],10:['รับค่าเช่า',1],14:['หักเงินประกัน (ข้อพิพาท)',-1],15:['คืนเงินประกัน',-1]};
  state.txs=hist.filter(h=>LEDGER[h.kind]&&!(h.kind===14&&h.amtE===0)).reverse().map(h=>({label:LEDGER[h.kind][0],amount:ethT(h.amtE),dir:LEDGER[h.kind][1],ref:'#TX-'+h.idx,addr:h.target,date:dstr(h.ts)}));
  const sig=[hist.length,props.length,rqs.length,owners.length,arbs.length,SUPER].join('|');
  const changed=sig!==lastSig;lastSig=sig;
  return changed;
}
function bindContracts(){
  if(!window.ethereum){coveRO=null;coveW=null;return;}
  provider=new ethers.providers.Web3Provider(window.ethereum,'any');
  coveRO=new ethers.Contract(RENTAL_CONTRACT,RENTAL_ABI,provider);
  coveW=mmAccount?new ethers.Contract(RENTAL_CONTRACT,RENTAL_ABI,provider.getSigner()):null;
}
async function refreshChain(force){
  try{const changed=await chainSync();if(force||changed){applyConnectedRole();render();}}
  catch(e){console.warn(e);}
}
// ส่งธุรกรรมไปยังสัญญา รอยืนยันบนเชน แล้วโหลดข้อมูลใหม่
let txLock=false;
async function sendTx(label,fn){
  if(!coveW){alert('กรุณาเชื่อมต่อ MetaMask ก่อน');return false;}
  if(txLock){alert('มีรายการกำลังดำเนินการอยู่ กรุณารอให้เสร็จก่อนกดซ้ำ');return false;}
  txLock=true;
  try{
    busy(label+' · กรุณายืนยันใน MetaMask');
    const t=await fn(coveW);
    busy(label+' · รอยืนยันบนเชน…');
    await t.wait();
    busy('');
    await refreshChain(true);
    return true;
  }catch(e){busy('');console.warn(e);alert(errTH(e));return false;}
  finally{txLock=false;}
}

// ===== บทบาทและหน้าจอ =====
function setRole(r){
  state.role=r;
  document.querySelectorAll('.roles button').forEach(b=>b.classList.toggle('on',b.dataset.role===r));
  walletUI();
  $g('avt').textContent=NAMES[r];
  $g('rolename').textContent=ROLE[r];
  if(!canUse(state.page)){state.page=PAGES.find(p=>p.roles.includes(r)).id;}
  render();
}
document.querySelectorAll('.roles button').forEach(b=>b.onclick=()=>setRole(b.dataset.role));
function go(p){state.page=p;render();}
window.go=go;

function navBadges(){
  const b={};
  const openDisp=visibleAgrs().filter(x=>x.dispute&&x.dispute.open).length;
  if(state.role==='landlord'){
    b.agr=state.agr.filter(a=>a.status==='Ended'&&!a.inspected).length+reqs.filter(r=>r.status===REQ_OPEN).length;
    b.tx=state.agr.filter(a=>['late','soon'].includes(rentStatus(a).key)).length;
    b.dispute=openDisp;
  }
  if(state.role==='tenant'){
    b.agr=visibleAgrs().filter(x=>!x.tenantOk&&x.status==='Draft').length;
    b.tx=visibleAgrs().filter(a=>rentStatus(a).key==='late').length;
    b.dispute=openDisp;
  }
  if(state.role==='admin')b.dispute=openDisp;
  return b;
}
function renderNav(){
  const nb=navBadges();
  $g('nav').innerHTML=PAGES.filter(p=>canUse(p.id)).map(p=>`<button class="${p.id===state.page?'on':''}" onclick="go('${p.id}')"><i><svg viewBox="0 0 24 24">${p.ic}</svg></i>${p.t}${nb[p.id]?`<em class="nb">${nb[p.id]}</em>`:''}</button>`).join('');
}
function renderStats(){
  if(['stay','room','confirm','access'].includes(state.page)){$g('stats').innerHTML='';return;}
  const active=visibleAgrs().filter(x=>x.status==='Active').length;
  const locked=visibleAgrs().reduce((s,x)=>s+x.balance,0);
  const cells=[
   {v:state.props.length,l:'ห้องเช่าทั้งหมด',d:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>'},
   {v:active,l:'สัญญาที่ใช้งานอยู่',d:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>'},
   {v:locked.toFixed(3),u:'ETH',l:'เงินประกันคงเหลือ',d:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M16 15h2"/>'},
   {v:visibleAgrs().filter(x=>x.status==='Active'&&endReached(x)).length,l:'ถึงกำหนดสิ้นสุดแล้ว',d:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>'}
  ];
  const shown=cells.filter(c=>!(state.role==='tenant'&&state.page==='tx'&&c.l==='ห้องเช่าทั้งหมด'));
  $g('stats').innerHTML=shown.map(c=>`<div class="stat"><div class="ic"><svg viewBox="0 0 24 24">${c.d}</svg></div><div><div class="v">${c.v}${c.u?`<small>${c.u}</small>`:''}</div><div class="l">${c.l}</div></div><button class="go" aria-label="ดูเพิ่มเติม" onclick="go('${c.l.includes('ETH')||c.l.includes('คงเหลือ')?'report':'agr'}')">›</button></div>`).join('');
}
function renderHome(){
  const plist=state.props;
  const homePc=p=>`
    <div class="pc">
      <div class="pic">${galHTML(p,'')}</div>
      <div class="pinfo">
        <div class="main">
        <div class="ptitle"><p class="nm">${esc(p.name)}</p></div>
        <div class="loc"><svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>${esc(p.addr)}<span class="chipg">${!p.listed?'ปิดให้เช่า':roomUsed(p.id)?'มีสัญญา':'พร้อมให้เช่า'}</span></div>
        <div class="feat">
          <span><svg viewBox="0 0 24 24"><path d="M3 18V7M3 13h18v5M21 13v-2a3 3 0 0 0-3-3h-7v5"/></svg>${p.bed} ห้องนอน</span>
          <span><svg viewBox="0 0 24 24"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 12V6a2 2 0 0 1 4 0"/></svg>${p.bath} ห้องน้ำ</span>
          <span><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>${p.area} ตร.ม.</span>
        </div>
        </div>
        <div class="pprice"><small>ค่าเช่าต่อเดือน</small><div class="price">${ethT(p.rent)} <small>/ เดือน</small></div></div>
      </div>
    </div>`;
  if(plist.length){
    $g('propcard').innerHTML=`<div class="stay-grid">${plist.map(p=>{const b=roomUsed(p.id);return `<div class="stay-card">`+
      `<div class="stay-pic">${galHTML(p,'')}</div>`+
      `<div class="stay-body"><div class="stay-top"><b>${esc(p.name)}</b><span class="pill ${b||!p.listed?'n':''}">${!p.listed?'ปิดให้เช่า':b?'มีผู้เช่า':'ว่าง'}</span></div>`+
      `<div class="mini">${esc(p.addr)} · ${p.area} ตร.ม.</div><div class="stay-price">${ethT(p.rent)} <small>/ เดือน</small></div><div class="mini">เงินประกัน ${eth(p.deposit)}</div>`+
      `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn ghost sm" onclick="showRoom(${p.id})">ดูรายละเอียด</button></div></div></div>`;}).join('')}</div>`;
  }else{
    $g('propcard').innerHTML=`<div class="note" style="margin-top:0">ยังไม่มีทรัพย์สินบนเชน เจ้าของทรัพย์สินที่ได้รับอนุมัติลงทะเบียนได้จากเมนูทรัพย์สินของฉัน</div>`;
  }
  const a=act();
  const steps=['ยืนยันสัญญา','ฝากเงินประกัน','ใช้งานสัญญา','สิ้นสุดสัญญา'];
  const idx=a?IDX[a.status]:0;
  {const open=visibleAgrs().filter(a=>a.dispute&&a.dispute.open).length;const wh=$g('warn-h'),wt=$g('warn-txt'),wb=$g('warn-btn');
    if(wh&&wt&&wb){
      if(state.role==='admin'){wh.textContent='จัดการข้อพิพาท';wt.textContent=open?`มี ${open} ข้อพิพาทที่รอคุณตัดสิน`:'ยังไม่มีข้อพิพาทที่รอการตัดสิน';wb.style.display='';}
      else{wh.textContent='การแจ้งเตือนข้อพิพาท';wt.textContent=open?`ตอนนี้มี ${open} ข้อพิพาทที่รอการตัดสิน ระบบจะแจ้งผลเมื่อมีการบันทึกผล`:'ยังไม่มีข้อพิพาทที่รอดำเนินการ';wb.style.display='none';}
    }}
  {const lc=$g('lastcard');lc.style.display=(state.role==='admin'||state.role==='super')?'none':'';lc.parentElement.style.gridTemplateColumns=(state.role==='admin'||state.role==='super'||state.role==='landlord')?'1fr':'';}
  const recent=visibleAgrs().slice().sort((x,y)=>y.id-x.id).slice(0,5);
  $g('lastcard').innerHTML=`
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/></svg></span><h2>สัญญาล่าสุด</h2><button class="more" onclick="go('agr')">ดูทั้งหมด →</button></div>
    <div class="hd-line"></div>
    ${recent.length?`<div class="recent">${recent.map(x=>`<button class="recent-item" onclick="pickAgr(${x.id})"><span class="ri-no">#${pad(x.id)}</span><span class="ri-main"><b>${esc(x.propName)}</b><small>${x.start} – ${x.end}</small></span>${tag(x.status)}<span class="ri-go">→</span></button>`).join('')}</div>`:`<div class="note" style="background:#22305E;color:#D5DCF3">ยังไม่มีสัญญา เริ่มจากการสร้างสัญญาเช่า</div>`}`;
  const rows=state.txs.slice(0,3);
  $g('txlist').innerHTML=rows.length?rows.map(t=>`
    <div class="txr"><div class="ti ${t.dir>0?'g':'o'}"><svg viewBox="0 0 24 24">${t.dir>0?'<path d="M12 5v14M6 13l6 6 6-6"/>':'<path d="M12 19V5M6 11l6-6 6 6"/>'}</svg></div>
    <div><div class="nm">${t.label}</div></div><div class="h mono">${t.ref}</div><div class="am ${t.dir>0?'g':'r'}">${t.dir>0?'+':'-'} ${t.amount}</div><div class="dt">${t.date}</div></div>`).join(''):
    `<div class="note" style="margin-top:0">ยังไม่มีธุรกรรม</div>`;
}

function renderProps(){
  $g('pg-props').dataset.mode=state.propMode||'list';
  $g('proptbody').innerHTML=state.props.length?state.props.map(p=>{const busy_=roomUsed(p.id);const st=!p.listed?'<span class="pill r">ปิดให้เช่า</span>':busy_?'<span class="pill">มีสัญญา</span>':'<span class="pill n">ว่าง</span>';return `<div class="pcard${editId===p.id?' editing':''}" role="button" tabindex="0" onclick="editProp(${p.id})"><div class="pcard-img">${galHTML(p,'')}</div><div class="pcard-body"><div class="pcard-top"><b>${esc(p.name)}</b>${st}</div><small class="pcard-addr">${esc(p.addr||'')}</small><div class="pcard-price"><span>${ethT(p.rent)}</span><small>ประกัน ${eth(p.deposit)}</small></div><span class="pcard-edit">แก้ไขรายละเอียด →</span></div></div>`;}).join(''):'<div class="note" style="margin-top:0;grid-column:1 / -1">ยังไม่มีทรัพย์สินบนเชน ลงทะเบียนห้องแรกได้จากฟอร์มด้านซ้าย</div>';
  const lock=state.role!=='landlord'||!ownerOK();
  $g('b-props').disabled=lock;
  note('n-props',lock?lockMsg():'',lock?'warn2':'');
}
let editId=null;
function resetPropForm(){
  editId=null;pendingImg=null;
  $g('p-name').value='';$g('p-desc').value='';$g('p-img').value='';$g('p-preview').style.backgroundImage='';
  $g('b-props').textContent='บันทึกทรัพย์สิน';$g('b-cancel').style.display='none';
}
window.newProp=()=>{resetPropForm();state.propMode='form';$g('pg-props').dataset.mode='form';window.scrollTo({top:0,behavior:'smooth'});};
window.closePropForm=()=>{resetPropForm();state.propMode='list';$g('pg-props').dataset.mode='list';window.scrollTo({top:0,behavior:'smooth'});};
window.editProp=id=>{
  const p=state.props.find(x=>x.id===id);if(!p)return;
  if(state.page!=='props'){state.page='props';render();}
  editId=id;pendingImg=null;
  $g('p-name').value=p.name;$g('p-addr').value=p.addr;$g('p-area').value=p.area;
  $g('p-bed').value=String(p.bed);$g('p-bath').value=String(p.bath);
  $g('p-rent').value=p.rent;$g('p-dep').value=p.deposit;$g('p-desc').value=p.desc||'';
  $g('p-listed').value=p.listed?'1':'0';
  $g('p-preview').style.backgroundImage="url('"+photo(p)+"')";
  $g('b-props').textContent='บันทึกการแก้ไข';$g('b-cancel').style.display='';
  note('n-props','กำลังแก้ไข '+p.name+' · การแก้ค่าเช่าและเงินประกันมีผลเฉพาะสัญญาที่สร้างหลังจากนี้','warn2');
  state.propMode='form';$g('pg-props').dataset.mode='form';
  window.scrollTo({top:0,behavior:'smooth'});
};
window.addProp=async()=>{
  if(!ownerOK()){alert('บัญชีนี้ยังไม่ได้รับอนุมัติเป็นเจ้าของทรัพย์สิน');return;}
  const name=val('p-name'),addr=val('p-addr'),area=+val('p-area'),rent=+val('p-rent'),dep=+val('p-dep');
  const bed=+val('p-bed'),bath=+val('p-bath'),desc=$g('p-desc').value.trim(),listed=val('p-listed')!=='0';
  if(!name||!addr){alert('กรุณากรอกชื่อห้องและที่อยู่');return;}
  if(!(area>0)){alert('กรุณากรอกพื้นที่ให้ถูกต้อง');return;}
  if(!(rent>0)||!(dep>0)){alert('กรุณากรอกค่าเช่าและเงินประกันให้ถูกต้อง (ETH)');return;}
  const input={name,location:addr,docRef:'',photoUri:'',desc,rent:ethers.utils.parseEther(String(rent)),deposit:ethers.utils.parseEther(String(dep)),bed,bath,area,listed};
  const wasEdit=editId!==null;
  const ok=wasEdit
    ? await sendTx('แก้ไขข้อมูลทรัพย์สิน',c=>c.updateProperty(editId,input))
    : await sendTx('ลงทะเบียนทรัพย์สิน',c=>c.registerProperty(input));
  if(!ok)return;
  const targetId=wasEdit?editId:state.props.reduce((m,p)=>Math.max(m,p.id),-1);
  if(pendingImg&&targetId>=0){
    try{localStorage.setItem('rc-photos-'+targetId,JSON.stringify(pendingImg));localStorage.setItem('rc-photo-'+targetId,pendingImg[0]);const pr=state.props.find(x=>x.id===targetId);if(pr)pr.img=pendingImg[0];}
    catch(e){alert('รูปใหญ่เกินไปที่จะเก็บในเครื่องนี้ ข้อมูลบนเชนบันทึกแล้ว');}
  }
  resetPropForm();
  state.propMode='list';
  alert(wasEdit?'บันทึกการแก้ไขบนเชนแล้ว':'บันทึกทรัพย์สิน '+name+' บนเชนแล้ว');
  render();
};

const AGR_PER_PAGE=5;
const agrPg={};
window.pgAgr=(key,p)=>{agrPg[key]=p;renderAgr();};
window.pickAgr=id=>{state.agrFocus=id;state.agrSel=id;go('agr');window.scrollTo({top:0,behavior:'smooth'});};
window.clearAgrFocus=()=>{state.agrFocus=null;renderAgr();};

function agrCardHTML(a){
  return `<div class="card sec" style="margin-top:0" id="agr-card-${a.id}">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7z"/></svg></span><h2>สัญญา #${pad(a.id)}</h2><span class="mono" style="margin-left:auto;font-size:21px;font-weight:600;color:#4B5577;word-break:break-all;text-align:right">ผู้เช่า: ${a.tenantAddr||'-'}</span>${tag(a.status)}</div>
    <div class="kv"><div><small>ทรัพย์สิน</small><b>${esc(a.propName)}</b></div><div><small>ระยะเวลา</small><b style="font-size:15px">${a.start} – ${a.end}</b></div><div><small>ค่าเช่า/เดือน</small><b>${ethT(a.rent)}</b></div><div><small>เงินประกัน</small><b>${eth(a.deposit)}</b></div></div>
    <div class="note">เงื่อนไข: ${esc(a.terms)}</div>
    <div class="kv" style="margin-top:12px"><div><small>เจ้าของทรัพย์สิน (Wallet)</small><b class="mono" style="font-size:12px;word-break:break-all">${a.landlordAddr||'-'}</b></div><div><small>ผู้เช่า (Wallet)</small><b class="mono" style="font-size:12px;word-break:break-all">${a.tenantAddr||'-'}</b></div></div>
    <div class="hd" style="margin-top:20px"><h2 style="font-size:17px">การลงนาม</h2></div>
    <div class="kv" style="margin-top:0"><div><small>เจ้าของห้อง</small><b style="font-size:15px;color:${a.landlordOk?'#16A34A':'#6B7396'}">${a.landlordOk?'ลงนามแล้ว':'รอดำเนินการ'}</b></div><div><small>ผู้เช่า</small><b style="font-size:15px;color:${a.tenantOk?'#16A34A':'#6B7396'}">${a.tenantOk?'ลงนามแล้ว':'รอดำเนินการ'}</b></div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
      <button class="btn blue" onclick="signAgr(${a.id})" ${(state.role==='tenant'&&a.status==='Draft'&&!a.tenantOk)?'':'disabled'}>ลงนามด้วย Wallet ของผู้เช่า</button>
      <button class="btn blue" onclick="signAgr(${a.id})" ${(state.role==='landlord'&&a.status==='Draft'&&!a.landlordOk)?'':'disabled'}>ลงนามด้วย Wallet ของเจ้าของ</button>
      <button class="btn ghost" onclick="endAgr(${a.id})" ${(state.role==='landlord'&&a.status==='Active'&&endReached(a))?'':'disabled'}>สิ้นสุดสัญญา</button>
      ${(state.role==='landlord'&&a.status==='Draft')?`<button class="btn ghost" onclick="cancelAgr(${a.id})">ยกเลิกสัญญา</button>`:''}
    </div>
    ${a.status==='Draft'&&a.landlordOk&&!a.tenantOk?'<div class="note warn2">เจ้าของลงนามแล้ว รอผู้เช่าลงนาม</div>':''}
    ${a.status==='Confirmed'?'<div class="note ok">ทั้งสองฝ่ายลงนามแล้ว ผู้เช่าไปที่หน้าธุรกรรมเพื่อฝากเงินประกัน</div>':''}
    ${a.status==='Settled'?'<div class="note ok">คืนเงินประกันเรียบร้อยแล้ว</div>':''}
    ${(a.status==='Ended'||a.status==='Settled'||a.status==='Disputed')?`<div class="hd" style="margin-top:20px"><h2 style="font-size:17px">คืนเงินประกัน</h2></div>
    <div class="kv" style="margin-top:0"><div><small>ยอดคงเหลือในสัญญา</small><b>${eth(a.balance)}</b></div><div><small>คืนให้ผู้เช่าแล้ว</small><b>${eth(a.refunded)}</b></div></div>
    <p class="mini" style="margin:8px 0 14px">คืนได้เมื่อผ่านการตรวจห้อง หรือข้อพิพาทถูกตัดสินแล้ว และยอดคืนต้องไม่เกินยอดคงเหลือ</p>
    ${a.status==='Ended'&&!a.inspected&&state.role==='landlord'?`<div class="note warn2" style="margin-top:0">สัญญาสิ้นสุดแล้ว กรุณาบันทึกผลตรวจห้องก่อนคืนเงินประกัน</div>
      <div class="fields" style="margin-top:12px">
        <label>ผลตรวจห้อง<select id="ins-res-${a.id}"><option value="pass">ผ่าน ไม่พบความเสียหาย</option><option value="damage">พบความเสียหาย</option></select></label>
        <label>หมายเหตุหรือเลขรายงาน<input id="ins-note-${a.id}" placeholder="เช่น รายงานตรวจห้องวันที่ 14/11/2026"></label>
      </div>
      `:''}
    ${a.inspected&&!a.inspectionPassed&&!a.dispute?'<div class="note bad" style="margin-top:12px">พบความเสียหาย เจ้าของเปิดข้อพิพาทได้ที่หน้าข้อพิพาท</div>':''}
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:12px">${(a.status==='Ended'&&!a.inspected&&state.role==='landlord')?`<button class="btn" onclick="recordInspection(${a.id})">บันทึกผลตรวจห้อง</button>`:''}<button class="btn" onclick="refundAgr(${a.id})" ${(state.role!=='tenant'&&a.status==='Ended'&&a.balance>0&&((a.inspected&&a.inspectionPassed)||(a.dispute&&!a.dispute.open)))?'':'disabled'}>ปล่อยเงินคืนผู้เช่า ${eth(a.balance)}</button></div>
    ${a.status==='Ended'?`<div class="mini" style="margin-top:10px">กำหนดดำเนินการภายใน ${dstr(a.settleBy)} หลังจากนั้นผู้เช่าเรียกคืนมัดจำได้เอง</div>`:''}
    ${(state.role==='tenant'&&a.status==='Ended'&&Math.floor(Date.now()/1000)>a.settleBy)?`<button class="btn" onclick="claimAgr(${a.id})">เรียกคืนมัดจำ ${eth(a.balance)}</button>`:''}
    ${a.status==='Disputed'?'<div class="note bad">มีข้อพิพาทที่ยังไม่ตัดสิน จึงระงับการคืนเงิน</div>':''}
    `:''}
  </div>`;
}

function renderAgrList(){
  let box=$g('agr-list');
  if(!box){box=document.createElement('div');box.id='agr-list';$g('agr-detail').before(box);}
  const list=visibleAgrs().slice().sort((x,y)=>y.id-x.id);
  if(!list.length){box.innerHTML='';return;}
  const focusItem=state.agrFocus&&list.find(x=>x.id===state.agrFocus);
  if(focusItem){box.innerHTML=`<div style="margin-top:8px"><button class="btn ghost sm" onclick="clearAgrFocus()">‹ กลับไปรายการสัญญาทั้งหมด</button></div><div style="margin-top:14px">${agrCardHTML(focusItem)}</div>`;return;}
  const groups={};
  list.forEach(x=>{const k=String(x.landlordAddr||'').toLowerCase();(groups[k]=groups[k]||[]).push(x);});
  box.innerHTML=Object.keys(groups).map(k=>{
    const items=groups[k];
    const pages=Math.max(1,Math.ceil(items.length/AGR_PER_PAGE));
    const p=Math.min(Math.max(1,agrPg[k]||1),pages);
    const rows=items.slice((p-1)*AGR_PER_PAGE,p*AGR_PER_PAGE);
    return `<div class="hd" style="margin-top:22px"><h2>สัญญาของบัญชี ${shortAddr(k)}</h2><span class="pill">${items.length} สัญญา</span></div>
      ${rows.map(x=>`<div style="margin-top:14px">${agrCardHTML(x)}</div>`).join('')}
      ${pages>1?`<div style="display:flex;gap:10px;align-items:center;margin-top:14px;flex-wrap:wrap"><button class="btn ghost" onclick="pgAgr('${k}',${p-1})" ${p<=1?'disabled':''}>‹ ก่อนหน้า</button><span class="mini">หน้า ${p} / ${pages}</span><button class="btn ghost" onclick="pgAgr('${k}',${p+1})" ${p>=pages?'disabled':''}>ถัดไป ›</button></div>`:''}`;
  }).join('');
}

function renderAgr(){
  const sel=$g('a-prop');
  sel.innerHTML=state.props.filter(p=>!roomUsed(p.id)&&(state.role!=='landlord'||eqA(p.owner,me()))).map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');
  if(agrPrefill){
    const r=reqs.find(x=>x.id===agrPrefill.reqId);
    if(r&&r.status===REQ_OPEN&&!roomUsed(r.propId)){sel.value=String(r.propId);$g('a-tenant').value=r.tenantAddr;}
    else agrPrefill=null;
  }
  $g('agr-reqs').innerHTML=state.role==='landlord'?reqPanelHTML():'';
  const lock=state.role!=='landlord'||!ownerOK();
  const avail=sel.options.length>0;
  $g('b-agr').disabled=lock||!avail||!agrPrefill;
  $g('a-tenant').readOnly=!!agrPrefill;
  sel.disabled=!!agrPrefill;
  const msg=lock?lockMsg():(!avail?'ทุกห้องมีสัญญาแล้ว ต้องเพิ่มทรัพย์สินห้องใหม่ก่อนสร้างสัญญา':(!agrPrefill?'สร้างสัญญาได้จากคำขอเช่าของผู้เช่าเท่านั้น กด "สร้างสัญญา" ที่คำขอด้านบน':''));
  note('n-agr',msg,msg?'warn2':'');
  renderAgrList();
  $g('agr-detail').innerHTML=visibleAgrs().length?'':`<div class="card sec" style="margin-top:18px"><div class="note" style="margin-top:0">ยังไม่มีสัญญา</div></div>`;
  const isT=state.role==='tenant';
  $g('agr-create').style.display=isT?'none':'';
  if(isT){
    const pend=visibleAgrs().filter(x=>!x.tenantOk&&x.status==='Draft');
    $g('agr-list').insertAdjacentHTML('afterbegin',`
    <div class="card sec" style="margin-top:0">
      <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10.3 20a2 2 0 0 0 3.4 0"/></svg></span><h2>การแจ้งเตือนสัญญาจากเจ้าของทรัพย์สิน</h2></div>
      ${pend.length?pend.map(x=>`<div class="note warn2" style="margin-top:0">สัญญา #${pad(x.id)} · ${esc(x.propName)} · ${x.start} – ${x.end} · ค่าเช่า ${ethT(x.rent)} รอคุณลงนาม</div>`).join(''):'<div class="note" style="margin-top:0">ยังไม่มีสัญญาใหม่ที่รอการลงนาม เจ้าของทรัพย์สินจะส่งสัญญามาที่หน้านี้</div>'}
      ${reqs.filter(r=>eqA(r.tenantAddr,me())).length?`<div class="mini" style="margin-top:10px">คำขอเช่าของคุณ: ${reqs.filter(r=>eqA(r.tenantAddr,me())).map(r=>esc(r.propName)+' — '+r.status).join(', ')}</div>`:''}
    </div>`);
  }
}
window.createAgr=async()=>{
  if(!agrPrefill){alert('สร้างสัญญาได้จากคำขอเช่าของผู้เช่าเท่านั้น กรุณากด "สร้างสัญญา" ที่คำขอก่อน');return;}
  const pid=+$g('a-prop').value;
  const p=state.props.find(x=>x.id===pid);
  if(!p){alert('ยังไม่มีทรัพย์สิน');return;}
  if(roomUsed(p.id)){alert('ห้องนี้มีสัญญาแล้ว ต้องใช้ห้องใหม่ที่ยังไม่เคยทำสัญญาจึงจะสร้างสัญญาได้');return;}
  const sv=val('a-start'),ev=val('a-end');
  if(!sv||!ev||ev<=sv){alert('วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น');return;}
  const tenant=val('a-tenant');
  if(!isAddr(tenant)){alert('Wallet ผู้เช่าต้องเป็นแอดเดรส 0x ตามด้วย 40 ตัวอักษร');return;}
  const terms=$g('a-terms').value.trim();
  const reqId=agrPrefill?agrPrefill.reqId:null;
  const ok=await sendTx('สร้างสัญญาเช่า',c=>c.createAgreement({propertyId:p.id,tenant,start:tsOf(sv),end:tsOf(ev),totalMonths:monthsBetween(sv,ev),terms,requestId:reqId!==null?reqId:ethers.constants.MaxUint256}));
  if(!ok)return;
  agrPrefill=null;
  $g('a-tenant').value='';
  render();
};
window.signAgr=async id=>{
  const a=state.agr.find(x=>x.id===id);if(!a)return;
  const isT=state.role==='tenant';
  const ok=await sendTx('ลงนามสัญญา',c=>c.sign(a.id));
  if(!ok||!isT)return;
  const now=state.agr.find(x=>x.id===id);
  if(now&&now.status==='Confirmed'){alert('ลงนามครบทั้งสองฝ่ายแล้ว ไปฝากเงินประกันที่หน้าธุรกรรม');go('tx');}
  else alert('ลงนามแล้ว รอเจ้าของทรัพย์สินลงนามก่อน จึงจะฝากเงินประกันได้');
};
window.cancelAgr=id=>{if(confirm('ยกเลิกสัญญาฉบับร่างนี้? การยกเลิกจะบันทึกบนเชน และสัญญานี้จะไม่แสดงในหน้าเว็บอีก'))sendTx('ยกเลิกสัญญา',c=>c.cancelAgreement(id));};
window.claimAgr=id=>{if(confirm('เรียกคืนมัดจำเต็มจำนวนที่เหลือ? ใช้ได้เมื่อเกินกำหนดที่เจ้าของไม่ดำเนินการแล้ว'))sendTx('เรียกคืนมัดจำ',c=>c.claimDeposit(id));};
window.endAgr=id=>{const a=state.agr.find(x=>x.id===id);if(a)sendTx('สิ้นสุดสัญญา',c=>c.endAgreement(a.id));};
window.recordInspection=id=>{
  const a=state.agr.find(x=>x.id===id);if(!a)return;
  const passed=$g('ins-res-'+id).value==='pass';
  const n=$g('ins-note-'+id).value.trim();
  if(!n){alert('กรุณาระบุหมายเหตุหรือเลขรายงานการตรวจห้อง');return;}
  sendTx('บันทึกผลตรวจห้อง',c=>c.recordInspection(a.id,passed,n));
};
window.refundAgr=id=>{const a=state.agr.find(x=>x.id===id);if(a&&a.balance>0)sendTx('คืนเงินประกัน',c=>c.refundDeposit(a.id));};

function renderTx(){
  if(state.role==='landlord'){renderOwnerTx();return;}
  const a=act();
  if(!a){$g('tx-body').innerHTML=`<div class="card"><div class="note" style="margin-top:0">ยังไม่มีสัญญาให้ทำธุรกรรม</div></div>`;return;}
  const total=installments(a),done=a.payments.length;
  const lockT=state.role!=='tenant';
  $g('tx-body').innerHTML=`
  <div class="row1">
    <div class="card">
      <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg></span><h2>ฝากเงินประกัน</h2>${tag(a.status)}</div>
      <div class="kv" style="margin-top:0"><div><small>ยอดที่ต้องฝาก</small><b>${eth(a.deposit)}</b></div><div><small>ยอดที่ล็อกอยู่</small><b>${eth(a.balance)}</b></div></div>
      <div style="margin-top:14px"><button class="btn blue" onclick="depositAgr()" ${(state.role==='tenant'&&a.status==='Confirmed')?'':'disabled'}>ฝากเงินประกัน ${eth(a.deposit)}</button></div>
      ${a.status==='Draft'?'<div class="note">ต้องให้ทั้งสองฝ่ายลงนามสัญญาก่อนจึงจะฝากได้</div>':''}
      ${lockT?'<div class="note warn2">บทบาทนี้ดูได้อย่างเดียว ผู้ดำเนินการคือ ผู้เช่า</div>':''}
    </div>
    <div class="card">
      <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/></svg></span><h2>ค่าเช่ารายเดือน</h2><span class="pill b">${done} / ${total} งวด</span></div>
      <div class="kv" style="margin-top:0"><div><small>ค่าเช่า/เดือน</small><b>${ethT(a.rent)}</b></div><div><small>งวดถัดไปครบกำหนด</small><b>${done<total?'งวดที่ '+(done+1)+' · '+fdate(dueDate(a,done+1)):'ครบแล้ว'}</b></div></div>
      ${done<total&&rentStatus(a).key==='late'?'<div class="note bad" style="margin-top:12px">งวดนี้เลยกำหนดชำระแล้ว กรุณาชำระค่าเช่า</div>':''}
      <div style="margin-top:14px"><button class="btn" onclick="payRent()" ${(state.role==='tenant'&&a.status==='Active'&&done<total)?'':'disabled'}>ชำระค่าเช่างวดที่ ${done+1}</button></div>
    </div>
  </div>
  <div class="card">
    <div class="hd"><h2>ประวัติการชำระค่าเช่า</h2></div>
    ${a.payments.length?`<table><thead><tr><th>งวด</th><th>วันที่</th><th class="r">จำนวน</th><th>อ้างอิง</th><th>สถานะ</th></tr></thead><tbody>
    ${a.payments.map(p=>`<tr><td>${p.period}</td><td>${p.date}</td><td class="r">${ethT(p.amount)}</td><td class="mono">${p.tx}</td><td><span class="pill">ยืนยันแล้ว</span></td></tr>`).join('')}</tbody></table>`:'<div class="note" style="margin-top:0">ยังไม่มีการชำระค่าเช่า</div>'}
  </div>`;
}
window.depositAgr=()=>{const a=act();if(a)sendTx('ฝากเงินประกัน',c=>c.payDeposit(a.id,{value:a.depositWei}));};
window.payRent=()=>{const a=act();if(a)sendTx('ชำระค่าเช่า',c=>c.payRent(a.id,{value:a.rentWei}));};

function renderDispute(){
  const a=act();
  if(!a){$g('dispute-body').innerHTML=`<div class="card"><div class="note" style="margin-top:0">ยังไม่มีสัญญา</div></div>`;return;}
  const d=a.dispute;
  const canOpen=state.role==='landlord'&&a.status==='Ended'&&a.inspected&&!a.inspectionPassed&&!(d&&d.approved!==undefined);
  const canRes=state.role==='admin'&&d&&d.open;
  $g('dispute-body').innerHTML=`
  ${state.role==='tenant'&&d?'<div class="note warn2" style="margin-top:0">เจ้าของทรัพย์สินแจ้งข้อพิพาทเรื่องความเสียหายมาที่คุณ</div>':''}
  ${state.role==='admin'&&d&&d.open?'<div class="note warn2" style="margin-top:0">เจ้าของทรัพย์สินเปิดข้อพิพาทเรื่องความเสียหาย รอคุณพิจารณาและบันทึกผลบนเชน</div>':''}
  ${!d?(state.role!=='landlord'?`<div class="card sec"><div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14"/></svg></span><h2>ข้อพิพาท</h2></div><div class="note" style="margin-top:0">${state.role==='admin'?'ยังไม่มีข้อพิพาทที่เจ้าของทรัพย์สินแจ้งมาให้พิจารณา':'ยังไม่มีการแจ้งข้อพิพาทจากเจ้าของทรัพย์สิน'}</div></div>`:`<div class="card sec">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14"/></svg></span><h2>เปิดข้อพิพาทเรื่องความเสียหาย</h2></div>
    ${state.role==='admin'?'<div class="note" style="margin-top:0">ผู้จัดการข้อพิพาทพิจารณาได้เมื่อเจ้าของทรัพย์สินเปิดข้อพิพาทเท่านั้น</div>':''}
    <div class="fields" style="margin-top:12px">
      <label>ประเภทความเสียหาย<select id="d-type"><option>ผนังชำรุด / สีลอก</option><option>เฟอร์นิเจอร์เสียหาย</option><option>ค่าทำความสะอาด</option></select></label>
      <label>จำนวนที่ขอหัก (ETH)<input id="d-amt" type="number" step="0.001" value="0.012"></label>
    </div>
    <label style="margin-top:14px">เหตุผลและหลักฐาน<textarea id="d-reason" rows="3" placeholder="อธิบายความเสียหาย อ้างอิงรูปภาพหรือรายงานตรวจห้อง"></textarea></label>
    <div style="margin-top:16px"><button class="btn red" onclick="openDispute()" ${canOpen?'':'disabled'}>แจ้งข้อพิพาทไปยังผู้เช่า</button>${a.status!=='Ended'?'<span class="mini" style="margin-left:12px">เปิดได้หลังสัญญาสิ้นสุดและผลตรวจไม่ผ่าน</span>':''}</div>
  </div>`):`<div class="card sec">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14"/></svg></span><h2>ข้อพิพาทสัญญา #${pad(a.id)}</h2>${d.open?'<span class="pill r">รอการตัดสิน</span>':'<span class="pill">ตัดสินแล้ว</span>'}</div>
    <div class="kv"><div><small>ประเภท</small><b style="font-size:15px">${esc(d.type)}</b></div><div><small>ยอดที่ขอหัก</small><b>${eth(d.amount)}</b></div></div>
    <div class="note"><b>เหตุผล:</b> ${esc(d.reason)}</div>
    ${d.open?'':`<div class="note ok"><b>ผลการตัดสิน:</b> ${d.result} · อนุมัติหัก ${eth(d.approved)}<br><b>เหตุผล:</b> ${esc(d.decisionReason)}</div>`}
  </div>`}
  ${canRes?`<div class="card sec">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14"/></svg></span><h2>บันทึกผลการตัดสิน</h2></div>
    <div class="note" style="margin-top:0">ยอดที่อนุมัติต้องไม่เกินยอดที่ขอหัก (${eth(d.amount)}) และยอดคงเหลือ ${eth(a.balance)}</div>
    <div class="fields" style="margin-top:12px">
      <label>ผลการตัดสิน<select id="r-res"><option value="full">อนุมัติตามที่ขอ</option><option value="partial">อนุมัติบางส่วน</option><option value="reject">ปฏิเสธการหัก</option></select></label>
      <label>จำนวนที่อนุมัติ (ETH)<input id="r-amt" type="number" step="0.001" value="${d.amount}"></label>
    </div>
    <label style="margin-top:14px">เหตุผลในการตัดสิน<textarea id="r-reason" rows="2" placeholder="อ้างอิงหลักฐานของทั้งสองฝ่าย"></textarea></label>
    <div style="margin-top:16px"><button class="btn" onclick="resolveDispute()">บันทึกผลบนเชน</button></div>
  </div>`:''}`;
}
window.openDispute=()=>{
  const a=act();if(!a)return;
  const amt=+$g('d-amt').value,reason=$g('d-reason').value.trim();
  if(!reason){alert('ต้องระบุเหตุผลและหลักฐาน');return;}
  if(!(amt>0)){alert('จำนวนที่ขอหักต้องมากกว่า 0');return;}
  if(amt>a.balance){alert('จำนวนที่ขอหักเกินยอดคงเหลือ ('+eth(a.balance)+')');return;}
  sendTx('เปิดข้อพิพาท',c=>c.openDispute(a.id,$g('d-type').value,ethers.utils.parseEther(String(amt)),reason));
};
window.resolveDispute=()=>{
  const a=act();if(!a||!a.dispute)return;
  const d=a.dispute,res=$g('r-res').value,amt=+$g('r-amt').value;
  const reason=$g('r-reason').value.trim();
  if(!reason){alert('ต้องบันทึกเหตุผลในการตัดสิน');return;}
  const approved=res==='reject'?0:res==='full'?d.amount:amt;
  if(!(approved>=0)||approved>a.balance){alert('ยอดที่อนุมัติต้องไม่เกินยอดคงเหลือ ('+eth(a.balance)+')');return;}
  if(approved>d.amount){alert('ยอดที่อนุมัติต้องไม่เกินยอดที่ขอหัก');return;}
  sendTx('ตัดสินข้อพิพาท',c=>c.resolveDispute(a.id,ethers.utils.parseEther(String(approved)),reason));
};

function renderReport(){
  const paid=state.agr.reduce((s,x)=>s+x.payments.reduce((t,p)=>t+p.amount,0),0);
  const sum=k=>state.agr.reduce((s,x)=>s+x[k],0);
  $g('report-body').innerHTML=`
  <div class="row1">
    <div class="card money-hero"><div class="hd"><h2>สรุปยอดเงิน</h2></div><div class="kv" style="margin-top:0"><div><small>ค่าเช่าที่รับแล้ว</small><b>${ethT(paid)}</b></div><div><small>เงินประกันคงเหลือ</small><b>${eth(sum('balance'))}</b></div><div><small>คืนให้ผู้เช่าแล้ว</small><b>${eth(sum('refunded'))}</b></div><div><small>หักจากข้อพิพาท</small><b>${eth(sum('deducted'))}</b></div></div></div>
    <div class="card"><div class="hd"><h2>ประวัติธุรกรรมทั้งหมด</h2></div><p class="mini" style="margin:0">ข้อมูลทุกรายการอ่านจากประวัติบนสมาร์ทคอนแทรกต์</p></div>
  </div>
  <div class="card">
    <div class="hd"><h2>รายการธุรกรรม</h2></div>
    ${state.txs.length?`<table><thead><tr><th>รายการ</th><th>Reference</th><th class="r">จำนวน</th><th>วันที่</th></tr></thead><tbody>
    ${state.txs.map(t=>`<tr><td>${t.label}</td><td class="mono" style="font-size:12px;word-break:break-all">${t.addr||'-'}<br><small style="color:#8A93AD">${t.ref}</small></td><td class="r" style="color:${t.dir>0?'#16A34A':'#E5484D'};font-weight:600">${t.dir>0?'+':'-'} ${t.amount}</td><td>${t.date}</td></tr>`).join('')}</tbody></table>`:'<div class="note" style="margin-top:0">ยังไม่มีธุรกรรม</div>'}
  </div>`;
}

// ===== ผู้ดูแลระบบ: จัดการสิทธิ์บนเชน =====
function renderAccess(){
  const el=$g('pg-access');
  const rows=(list,fn)=>list.length?list.map(x=>`<tr><td>${esc(x.name||'-')}</td><td class="mono">${shortAddr(x.addr)}</td>${fn.doc?`<td>${esc(x.doc||'-')}</td>`:''}<td>${x.date}</td><td class="r"><button class="btn ghost sm" onclick="${fn.revoke}('${x.addr}')">เพิกถอน</button></td></tr>`).join(''):`<tr><td colspan="5">ยังไม่มีรายการ</td></tr>`;
  el.innerHTML=`
  <div class="card sec">
    <div class="hd"><h2>ผู้ดูแลระบบและสัญญา</h2></div>
    <div class="kv" style="margin-top:0"><div><small>ผู้ดูแลระบบ (บัญชีที่ deploy)</small><b class="mono" style="font-size:13px">${SUPER||'-'}</b></div><div><small>Contract Address</small><b class="mono" style="font-size:13px">${RENTAL_CONTRACT}</b></div></div>
    <p class="mini" style="margin:12px 0 0">ผู้ดูแลระบบอนุมัติเจ้าของทรัพย์สินและแต่งตั้งผู้จัดการข้อพิพาทผ่านสัญญา ไม่สามารถตัดสินข้อพิพาทเองได้ และรายการทั้งหมดบันทึกอยู่บนเชน</p>
  </div>
  <div class="card sec" style="margin-top:18px">
    <div class="hd"><h2>เจ้าของทรัพย์สินที่ได้รับอนุมัติ</h2></div>
    <div class="fields" style="margin-top:12px">
      <label>ชื่อเจ้าของ<input id="ac-oname" placeholder="ชื่อบุคคลหรือบริษัท"></label>
      <label>ที่อยู่ Wallet<input id="ac-oaddr" placeholder="0x..."></label>
      <label>เลขเอกสารกรรมสิทธิ์<input id="ac-odoc" placeholder="เช่น โฉนด 12345/2566"></label>
    </div>
    <div style="margin-top:14px"><button class="btn" onclick="addOwner()">อนุมัติเจ้าของทรัพย์สิน</button></div>
    <table style="margin-top:18px"><thead><tr><th>ชื่อ</th><th>Wallet</th><th>เอกสาร</th><th>วันที่</th><th></th></tr></thead><tbody>${rows(acl.owners,{doc:true,revoke:'revokeOwner'})}</tbody></table>
  </div>
  <div class="card sec" style="margin-top:18px">
    <div class="hd"><h2>ผู้จัดการข้อพิพาท</h2></div>
    <div class="fields" style="margin-top:12px">
      <label>ชื่อ<input id="ac-aname" placeholder="ชื่อผู้จัดการข้อพิพาท"></label>
      <label>ที่อยู่ Wallet<input id="ac-aaddr" placeholder="0x..."></label>
    </div>
    <div style="margin-top:14px"><button class="btn" onclick="addArbiter()">แต่งตั้งผู้จัดการข้อพิพาท</button></div>
    <table style="margin-top:18px"><thead><tr><th>ชื่อ</th><th>Wallet</th><th>วันที่</th><th></th></tr></thead><tbody>${rows(acl.arbiters,{doc:false,revoke:'revokeArbiter'})}</tbody></table>
  </div>
  <div class="card sec" style="margin-top:18px">
    <div class="hd"><h2>ประวัติการเปลี่ยนแปลงสิทธิ์</h2></div>
    ${acl.log.length?`<table><thead><tr><th>วันที่</th><th>รายการ</th></tr></thead><tbody>${acl.log.map(l=>`<tr><td>${l.t}</td><td>${esc(l.text)}</td></tr>`).join('')}</tbody></table>`:'<div class="note" style="margin-top:0">ยังไม่มีการเปลี่ยนแปลง</div>'}
  </div>`;
}
window.addOwner=()=>{
  const name=val('ac-oname'),addr=val('ac-oaddr'),doc=val('ac-odoc');
  if(!name||!isAddr(addr)){alert('กรุณากรอกชื่อและที่อยู่ Wallet ให้ถูกต้อง (0x ตามด้วย 40 ตัวอักษร)');return;}
  sendTx('อนุมัติเจ้าของทรัพย์สิน',c=>c.approveOwner(addr,name,doc));
};
window.revokeOwner=addr=>{if(confirm('เพิกถอนสิทธิ์เจ้าของทรัพย์สินนี้?'))sendTx('เพิกถอนเจ้าของ',c=>c.revokeOwner(addr));};
window.addArbiter=()=>{
  const name=val('ac-aname'),addr=val('ac-aaddr');
  if(!name||!isAddr(addr)){alert('กรุณากรอกชื่อและที่อยู่ Wallet ให้ถูกต้อง (0x ตามด้วย 40 ตัวอักษร)');return;}
  sendTx('แต่งตั้งผู้จัดการข้อพิพาท',c=>c.appointArbiter(addr,name));
};
window.revokeArbiter=addr=>{if(confirm('เพิกถอนสิทธิ์ผู้จัดการข้อพิพาทนี้?'))sendTx('เพิกถอนผู้จัดการข้อพิพาท',c=>c.revokeArbiter(addr));};

// ===== ทรัพย์สิน คำขอเช่า และการยืนยันการเช่า =====
function installments(a){return a.totalMonths||monthsBetween(a.start,a.end);}
function dueDate(a,k){const s=parseD(a.start);return new Date(s.getFullYear(),s.getMonth()+(k-1),s.getDate());}
function rentStatus(a){
  const total=installments(a),paid=a.payments.length;
  if(a.status==='Draft')return {key:'draft',label:'รอลงนาม',pill:'n'};
  if(a.status==='Ended'||a.status==='Settled')return {key:'closed',label:'สิ้นสุดแล้ว',pill:'',paid,total};
  if(paid>=total)return {key:'done',label:'ชำระครบแล้ว',pill:'b',paid,total};
  if(a.status!=='Active'&&a.status!=='Disputed')return {key:'wait',label:'ยังไม่เริ่มชำระ',pill:'',paid,total};
  const next=paid+1,due=dueDate(a,next),now=new Date();now.setHours(0,0,0,0);
  const days=Math.round((due-now)/86400000);
  const base={paid,total,next,due};
  if(days<0)return {...base,key:'late',label:'ค้างชำระ',pill:'r'};
  if(days<=3)return {...base,key:'soon',label:'ใกล้ถึงกำหนด',pill:'y'};
  return {...base,key:'ok',label:'ยังไม่ถึงกำหนด',pill:''};
}
function renderOwnerTx(){
  const all=state.agr.filter(a=>a.status!=='Draft').map(a=>({a,st:rentStatus(a)}));
  const late=all.filter(x=>x.st.key==='late').length,soon=all.filter(x=>x.st.key==='soon').length;
  $g('tx-body').innerHTML=`
  <div class="card sec">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/></svg></span><h2>ค่าเช่ารายเดือนทุกห้อง</h2><span class="pill">${all.length} สัญญา</span></div>
    ${late||soon?`<div class="note ${late?'bad':'warn2'}" style="margin-top:0">${late?`มี ${late} สัญญาค้างชำระ`:''}${late&&soon?' และ ':''}${soon?`มี ${soon} สัญญาใกล้ถึงกำหนดภายใน 3 วัน`:''}</div>`:'<div class="note ok" style="margin-top:0">ไม่มีงวดค้างชำระหรือใกล้ถึงกำหนด</div>'}
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 16px">
      <input id="tx-q" placeholder="ค้นหาชื่อห้อง" value="${esc(txQ)}" oninput="txQ=this.value;renderTxRows()" style="flex:1;min-width:200px">
      <select id="tx-f" onchange="txF=this.value;renderTxRows()" style="min-width:180px">
        <option value="all">ทุกสถานะ</option><option value="late">ค้างชำระ</option><option value="soon">ใกล้ถึงกำหนด</option><option value="ok">ยังไม่ถึงกำหนด</option><option value="done">ชำระครบแล้ว</option>
      </select>
    </div>
    <table><thead><tr><th>ห้อง</th><th>สัญญา</th><th>วันที่สร้างสัญญา</th><th>ชำระแล้ว</th><th>งวดถัดไปครบกำหนด</th><th class="r">ค่าเช่า/เดือน</th><th>สถานะ</th></tr></thead><tbody id="tx-rows"></tbody></table>
  </div>`;
  $g('tx-f').value=txF;
  renderTxRows();
}
function renderTxRows(){
  const q=txQ.trim().toLowerCase();
  const rows=state.agr.filter(a=>a.status!=='Draft').map(a=>({a,st:rentStatus(a)})).filter(({a,st})=>(!q||a.propName.toLowerCase().includes(q))&&(txF==='all'||st.key===txF));
  $g('tx-rows').innerHTML=rows.length?rows.map(({a,st})=>`<tr><td>${esc(a.propName)}</td><td class="mono">${pad(a.id)}</td><td>${a.created||'-'}</td><td>${st.paid!==undefined?st.paid+' / '+st.total+' งวด':'-'}</td><td>${st.due?fdate(st.due):'-'}</td><td class="r">${ethT(a.rent)}</td><td><span class="pill ${st.pill}">${st.label}</span></td></tr>`).join(''):'<tr><td colspan="7">ไม่พบรายการ</td></tr>';
}
const agrReqPg={p:1};
function reqPanelHTML(){
  const list=reqs.filter(r=>r.status===REQ_OPEN&&(state.role!=='landlord'||eqA(r.landlordAddr,me())));
  if(!list.length)return '';
  const pend=list.length;
  return `<div class="card sec" style="margin-bottom:18px">
    <div class="hd"><h2>คำขอเช่าจากผู้เช่า</h2><span class="pill ${pend?'y':''}">${pend} รายการรอดำเนินการ</span></div>
    <table style="margin-top:12px"><thead><tr><th>ห้อง</th><th>ผู้ขอ</th><th>วันที่</th><th class="r">เงินประกัน</th><th>สถานะ</th><th></th></tr></thead><tbody>
    ${list.map(r=>`<tr><td>${esc(r.propName)}</td><td class="mono">${shortAddr(r.tenantAddr)}</td><td>${r.date}</td><td class="r">${eth(r.deposit)}</td><td><span class="pill ${r.status===REQ_OPEN?'y':r.status===REQ_NO?'r':'b'}">${r.status}</span></td><td class="r">${r.status===REQ_OPEN?`<button class="btn sm" onclick="useReq(${r.id})">สร้างสัญญา</button> <button class="btn ghost sm" onclick="rejectReq(${r.id})">ปฏิเสธ</button>`:''}</td></tr>`).join('')}
    </tbody></table></div>`;
}
window.useReq=id=>{
  const r=reqs.find(x=>x.id===id);if(!r)return;
  agrPrefill={reqId:id};
  state.page='agr';render();
  alert('กรอกวันเริ่มและวันสิ้นสุดของสัญญา แล้วกดสร้างสัญญา');
};
window.rejectReq=id=>{if(confirm('ปฏิเสธคำขอเช่านี้?'))sendTx('ปฏิเสธคำขอเช่า',c=>c.closeRequest(id,false));};

let rooms_=0; // reserved
function roomBusy(p){return roomUsed(p.id);}
window.setStayFilter=f=>{stayFilter=f;render();};
window.showRoom=id=>{state.roomId=id;state.page='room';render();};
window.closeRoom=()=>{state.page='stay';render();};
function renderRoom(){
  const el=$g('pg-room');
  const p=state.props.find(x=>x.id===state.roomId);
  if(!p){el.innerHTML=`<div class="card sec"><div class="note" style="margin-top:0">ไม่พบห้องนี้</div></div>`;return;}
  const busy_=roomBusy(p);
  const ags=state.agr.filter(x=>x.propId===p.id);
  const paid=ags.reduce((s,x)=>s+x.payments.reduce((t,q)=>t+q.amount,0),0);
  const hist=ags.length?ags.slice().reverse().map(x=>`<tr><td>${pad(x.id)}</td><td>${x.start} – ${x.end}</td><td class="r">${ethT(x.rent)}</td><td>${tag(x.status)}</td></tr>`).join(''):'';
  el.innerHTML=`
  <div style="margin-bottom:16px"><button class="btn ghost sm" onclick="closeRoom()">← กลับไปหน้าที่พัก</button></div>
  <div class="room-grid">
    <div class="card sec">
      <div class="room-pic">${galHTML(p,'')}</div>
      <div class="hd" style="margin-top:18px"><h2 style="font-size:22px">${esc(p.name)}</h2><span class="pill ${busy_||!p.listed?'n':''}">${!p.listed?'ปิดให้เช่า':busy_?'มีผู้เช่า':'ว่าง'}</span></div>
      <div class="mini">${esc(p.addr)}</div>
      <div class="kv" style="margin-top:18px">
        <div><small>พื้นที่</small><b>${p.area} ตร.ม.</b></div>
        <div><small>ห้องนอน / ห้องน้ำ</small><b>${p.bed} / ${p.bath}</b></div>
        <div><small>ค่าเช่าต่อเดือน</small><b>${ethT(p.rent)}</b></div>
        <div><small>เงินประกัน</small><b>${eth(p.deposit)}</b></div>
      </div>
      ${p.desc?`<div class="note" style="margin-top:18px"><b>รายละเอียด</b><br>${esc(p.desc)}</div>`:''}
      ${state.role==='tenant'?`<div class="note" style="margin-top:18px"><b>ขั้นตอนการเช่า</b><br>1. กดขอเช่าห้องนี้<br>2. เจ้าของทรัพย์สินสร้างสัญญาและส่งการแจ้งเตือนมาที่หน้าสัญญาเช่า<br>3. ลงนามสัญญาด้วย Wallet ของคุณ<br>4. ฝากเงินประกันเข้า Smart Contract ก่อนเข้าพัก</div>`:''}
      ${state.role==='landlord'?`<div class="hd" style="margin-top:22px"><h2 style="font-size:17px">ประวัติสัญญาของห้องนี้</h2></div>
        ${hist?`<table><thead><tr><th>สัญญา</th><th>ระยะเวลา</th><th class="r">ค่าเช่า</th><th>สถานะ</th></tr></thead><tbody>${hist}</tbody></table>`:'<div class="note" style="margin-top:0">ยังไม่มีสัญญาสำหรับห้องนี้</div>'}
        <div class="mini" style="margin-top:12px">ค่าเช่าที่รับแล้วทั้งหมด ${ethT(paid)}</div>`:''}
    </div>
    <div class="card sec">
      <div class="stay-price">${ethT(p.rent)} <small>/ เดือน</small></div>
      <div class="mini" style="margin-top:6px">เงินประกัน ${eth(p.deposit)}</div>
      <div class="kv" style="margin-top:16px">
        <div><small>สถานะห้อง</small><b style="font-size:15px">${busy_?'มีผู้เช่าแล้ว':'ว่างให้เช่า'}</b></div>
      </div>
      ${!busy_&&p.listed&&state.role==='tenant'?`<div style="margin-top:18px"><button class="btn blue" style="width:100%" onclick="requestRoom(${p.id})">ขอเช่าห้องนี้</button></div>`:''}
      ${state.role==='landlord'?`<div class="mini" style="margin-top:14px">ห้องนี้เป็นของคุณ สร้างสัญญาได้ที่เมนูสัญญาเช่า</div>`:''}
    </div>
  </div>`;
}
window.requestRoom=id=>{state.roomId=id;state.page='confirm';reqDone=false;render();};
window.askDeposit=()=>{depAsk=true;render();};
window.cancelDeposit=()=>{depAsk=false;render();};
window.backRoom=()=>{state.page='room';render();};
window.submitRequest=async()=>{
  const p=state.props.find(x=>x.id===state.roomId);
  if(!p||!p.listed)return;
  if(reqs.some(r=>r.propId===p.id&&r.status===REQ_OPEN&&eqA(r.tenantAddr,me()))){alert('คุณส่งคำขอห้องนี้ไว้แล้ว รอเจ้าของทรัพย์สินพิจารณา');depAsk=false;render();return;}
  const ok=await sendTx('ส่งคำขอเช่า',c=>c.requestRental(p.id,''));
  if(ok){reqDone=true;depAsk=false;render();}
};
function renderConfirm(){
  const el=$g('pg-confirm');
  const p=state.props.find(x=>x.id===state.roomId);
  if(!p){el.innerHTML=`<div class="card sec"><div class="note" style="margin-top:0">ไม่พบห้องนี้</div></div>`;return;}
  el.innerHTML=`
  <div class="card sec" style="max-width:720px;margin:0 auto">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></span><h2>${reqDone?'ส่งคำขอเช่าแล้ว':'ยืนยันการขอเช่าห้อง'}</h2></div>
    <div class="kv" style="margin-top:12px">
      <div><small>ห้อง</small><b style="font-size:15px">${esc(p.name)}</b></div>
      <div><small>ที่อยู่</small><b style="font-size:15px">${esc(p.addr)}</b></div>
      <div><small>ค่าเช่าต่อเดือน</small><b>${ethT(p.rent)}</b></div>
      <div><small>เงินประกัน</small><b>${eth(p.deposit)}</b></div>
    </div>
    ${reqDone?`
      <div class="note ok">ส่งคำขอถึงเจ้าของทรัพย์สินบนเชนแล้ว เจ้าของจะสร้างสัญญาและส่งการแจ้งเตือนมาที่หน้าสัญญาเช่า เงินประกันจะถูกฝากเข้า Smart Contract เมื่อลงนามสัญญาครบ</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
        <button class="btn" onclick="go('agr')">ไปหน้าสัญญาเช่า</button>
        <button class="btn ghost" onclick="go('stay')">กลับไปหน้าที่พัก</button>
      </div>`:`
      <div class="note" style="margin-top:14px">วันเริ่มต้นและวันสิ้นสุดสัญญาจะกำหนดโดยเจ้าของทรัพย์สินตอนสร้างสัญญา</div>
      <div class="note warn2">คุณไม่สามารถสร้างสัญญาเองได้ เมื่อยืนยันแล้วเจ้าของจะเป็นผู้ส่งสัญญาให้ลงนาม</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
        <button class="btn blue" onclick="askDeposit()">ยืนยันการขอเช่าและเงินประกัน</button>
        <button class="btn ghost" onclick="backRoom()">ย้อนกลับ</button>
      </div>`}
  </div>
  ${depAsk&&!reqDone?`<div class="modal-bg" onclick="if(event.target===this)cancelDeposit()"><div class="card sec modal">
    <div class="hd"><h2>ยืนยันยอดเงินประกัน</h2></div>
    <div style="font-size:28px;font-weight:600;margin:16px 0 6px">${eth(p.deposit)}</div>
    <p class="mini" style="margin:0">ยอดราคานี้ยืนยันใช่ไหม</p>
    <div style="display:flex;gap:10px;margin-top:20px"><button class="btn blue" onclick="submitRequest()">ยืนยัน</button><button class="btn ghost" onclick="cancelDeposit()">ยกเลิก</button></div>
  </div></div>`:''}`;
}
function renderStay(){
  const el=$g('pg-stay');
  const rooms=state.props.map(p=>({p,busy:roomBusy(p)}));
  const shown=rooms.filter(r=>stayFilter==='all'||(stayFilter==='vacant'?!r.busy:r.busy));
  const vacant=rooms.filter(r=>!r.busy).length;
  const filters=[['all','ทั้งหมด'],['vacant','ห้องว่าง'],['busy','มีผู้เช่าแล้ว']];
  el.innerHTML=`
  <div class="card sec">
    <div class="hd"><span class="ico"><svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-5h6v5"/></svg></span><h2>ที่พักทั้งหมด</h2><span class="pill">ห้องว่าง ${vacant} ห้อง</span>${state.role==='landlord'?'<button class="btn" style="margin-left:auto" onclick="go(\'props\')">+ สร้างห้องใหม่</button>':''}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
      ${filters.map(([k,t])=>`<button class="btn ${stayFilter===k?'':'ghost'} sm" onclick="setStayFilter('${k}')">${t}</button>`).join('')}
    </div>
    <div class="stay-grid">
      ${shown.map(({p,busy:b})=>`<div class="stay-card">
        <div class="stay-pic">${galHTML(p,'')}</div>
        <div class="stay-body">
          <div class="stay-top"><b>${esc(p.name)}</b><span class="pill ${b||!p.listed?'n':''}">${!p.listed?'ปิดให้เช่า':b?'มีผู้เช่า':'ว่าง'}</span></div>
          <div class="mini">${esc(p.addr)} · ${p.area} ตร.ม.</div>
          <div class="stay-price">${ethT(p.rent)} <small>/ เดือน</small></div>
          <div class="mini">เงินประกัน ${eth(p.deposit)}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn ghost sm" onclick="showRoom(${p.id})">ดูรายละเอียด</button>${!b&&p.listed&&state.role==='tenant'?`<button class="btn blue sm" onclick="requestRoom(${p.id})">ขอเช่าห้องนี้</button>`:''}</div>
        </div>
      </div>`).join('')||'<div class="note" style="margin-top:0">ไม่มีห้องในหมวดนี้</div>'}
    </div>
  </div>`;
}

// ===== กระเป๋าและการเชื่อมต่อ MetaMask =====
function walletUI(){
  const st=$g('wstat'),b=$g('mm-btn');
  $g('wallet').textContent=mmAccount?shortAddr(mmAccount):'ยังไม่เชื่อมต่อ';
  st.textContent=mmAccount?'● '+(state.chainName||'MetaMask')+' · '+ROLE[state.role]:'○ ยังไม่เชื่อมต่อ MetaMask';
  st.style.color=mmAccount?'#4ADE80':'#FBBF24';
  b.textContent=mmAccount?'ยกเลิกการเชื่อมต่อ':'เชื่อมต่อ MetaMask';
  $g('ethbal').textContent=state.eth.toFixed(4)+' ETH';
}
function applyConnectedRole(){
  if(mmAccount){state.role=roleByAddr(mmAccount)||'tenant';}
  document.querySelectorAll('.roles button').forEach(b=>{b.disabled=!!mmAccount;b.classList.toggle('on',b.dataset.role===state.role);b.style.display=(mmAccount&&b.dataset.role!==state.role)?'none':'';});
  $g('rolename').textContent=ROLE[state.role];
  $g('avt').textContent=NAMES[state.role];
  if(!canUse(state.page))state.page=PAGES.find(p=>p.roles.includes(state.role)).id;
}
async function mmRefresh(){
  try{
    const [hex,cid]=await Promise.all([
      window.ethereum.request({method:'eth_getBalance',params:[mmAccount,'latest']}),
      window.ethereum.request({method:'eth_chainId'})]);
    state.eth=Number(BigInt(hex))/1e18;
    state.chainName=CHAINS[cid]||('Chain '+parseInt(cid,16));
    if(cid!==SEPOLIA_ID)alert('กรุณาเปลี่ยน MetaMask เป็นเครือข่าย Sepolia');
  }catch(e){alert('อ่านข้อมูล Wallet ไม่สำเร็จ: '+(e&&e.message?e.message:e));}
  bindContracts();
  try{await chainSync();}catch(e){console.warn(e);alert('อ่านข้อมูลจากสัญญาไม่สำเร็จ ตรวจสอบว่าอยู่บน Sepolia');}
  applyConnectedRole();walletUI();render();
}
async function mmConnect(){
  if(!window.ethereum){alert('ไม่พบ MetaMask ในเบราว์เซอร์นี้ กรุณาติดตั้งส่วนขยาย MetaMask ก่อน');return;}
  try{
    const acc=await window.ethereum.request({method:'eth_requestAccounts'});
    if(!acc||!acc[0])return;
    mmAccount=acc[0];
    await mmRefresh();
  }catch(e){alert('เชื่อมต่อไม่สำเร็จ: '+(e&&e.message?e.message:e));}
}
function mmDisconnect(){
  mmAccount=null;state.eth=0;state.chainName='';
  bindContracts();
  applyConnectedRole();walletUI();render();
}
window.mmToggle=()=>{if(mmAccount){manualOff=true;mmDisconnect();}else{manualOff=false;mmConnect();}};
async function syncAccount(){
  if(!window.ethereum||manualOff)return;
  try{
    const a=await window.ethereum.request({method:'eth_accounts'});
    const cur=(a&&a[0])||null;
    if((cur||'').toLowerCase()===(mmAccount||'').toLowerCase())return;
    if(!cur){mmDisconnect();return;}
    mmAccount=cur;
    await mmRefresh();
  }catch(e){}
}

// ===== การแจ้งเตือนและรูปทรัพย์ =====
function updateBell(){
  const disputes=visibleAgrs().filter(x=>x.dispute&&x.dispute.open).length;
  let n=disputes;
  if(state.role==='landlord')n+=state.agr.filter(a=>a.status==='Ended'&&!a.inspected).length+state.agr.filter(a=>['late','soon'].includes(rentStatus(a).key)).length+reqs.filter(r=>r.status===REQ_OPEN).length;
  if(state.role==='tenant')n+=visibleAgrs().filter(x=>!x.tenantOk&&x.status==='Draft').length+visibleAgrs().filter(a=>rentStatus(a).key==='late').length;
  $g('bellcount').textContent=n;
}
function readPhoto(file,cb){
  const r=new FileReader();
  r.onload=()=>{const im=new Image();im.onload=()=>{
    const k=Math.min(1,1200/Math.max(im.width,im.height));
    const c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);
    c.getContext('2d').drawImage(im,0,0,c.width,c.height);
    cb(c.toDataURL('image/jpeg',0.85));};im.src=r.result;};
  r.readAsDataURL(file);
}
window.onPhoto=async input=>{
  const fs=[...(input.files||[])].slice(0,6);
  if(!fs.length){pendingImg=null;$g('p-preview').style.backgroundImage='';$g('p-photocount').textContent='';return;}
  if(fs.some(f=>!f.type.startsWith('image/'))){alert('กรุณาเลือกไฟล์รูปภาพเท่านั้น');input.value='';return;}
  const imgs=await Promise.all(fs.map(f=>new Promise(res=>readPhoto(f,res))));
  pendingImg=imgs;
  $g('p-preview').style.backgroundImage="url('"+imgs[0]+"')";
  $g('p-photocount').textContent=imgs.length+' รูป (รูปแรกเป็นรูปหน้าปก)';
};

// ===== ที่พัก: ตรวจหน้าจอและแสดงผล =====
function render(){
  renderNav();
  renderStats();
  $g('ethbal').textContent=state.eth.toFixed(4)+' ETH';
  ['home','stay','room','confirm','access','props','agr','tx','dispute','report'].forEach(id=>{
    const el=$g('pg-'+id);if(el)el.classList.toggle('on',state.page===id);
  });
  document.querySelector('.hero').style.display=state.page==='home'?'flex':'none';
  if(state.page==='home')renderHome();
  if(state.page==='props')renderProps();
  if(state.page==='agr')renderAgr();
  if(state.page==='tx')renderTx();
  if(state.page==='dispute')renderDispute();
  if(state.page==='report')renderReport();
  if(state.page==='stay')renderStay();
  if(state.page==='room')renderRoom();
  if(state.page==='confirm')renderConfirm();
  if(state.page==='access')renderAccess();
  updateBell();
}

// ===== เริ่มทำงาน =====
window.addEventListener('focus',()=>syncAccount());
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncAccount();});
if(window.ethereum){
  window.ethereum.on&&window.ethereum.on('accountsChanged',()=>syncAccount());
  window.ethereum.on&&window.ethereum.on('chainChanged',()=>{if(mmAccount)mmRefresh();});
  setInterval(syncAccount,2000);
}
setInterval(async()=>{
  if(document.hidden||!coveRO)return;
  try{if(await chainSync()){applyConnectedRole();render();}}catch(e){}
},15000);
$g('mm-btn')&&($g('mm-btn').onclick=window.mmToggle);
bindContracts();
setRole('landlord');
if(window.ethereum){syncAccount();refreshChain(true);}
