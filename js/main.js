{
const AR={brand:"يوسف دوحان",n1:"عنّي",n2:"أعمالي",n3:"المهارات",n4:"المسيرة",n5:"تواصل",status:"متاح لوظائف Backend عن بُعد",hi:"مرحباً، أنا",name:"يوسف دوحان",
intro:"مطوّر Backend. أبني أنظمة Laravel آمنة ومُختبَرة، من مخطط الـ ERD على الورق حتى الـ APIs في بيئة الإنتاج.",
b1:"شاهد أعمالي",b2:"تواصل معي",s1:"اختبار آلي في مشروع واحد",s2:"ساعة تدريب معتمد",s3:"مشاريع Laravel متكاملة",chip1:"متخصص Backend",chip2a:"الاختبارات ناجحة",
a_h:"أصمّم البيانات أولاً، ثم أبني كل شيء فوقها.",a_p1:"معظم الأخطاء تبدأ من قاعدة البيانات. لذلك أبدأ في MySQL Workbench، أصمّم العلاقات بشكل صحيح، ثم أكتب الـ migrations والـ models والـ services وحدةً تلو الأخرى، وكل وحدة تحميها اختبارات.",
a_p2:"أهتم بكود نظيف وآمن وسهل الصيانة: التحقق عبر Form Requests، و API Resources، وصلاحيات قائمة على الأدوار، ولا قاعدة عمل بدون اختبار يحرسها.",
f1:"تصميم البيانات",f1s:"ERD، علاقات، فهارس",f2:"تأمين الأبواب",f2s:"Sanctum و Passport و RBAC و Middleware",f3:"بناء المنطق",f3s:"Service Layer و Eloquent و REST APIs",f4:"إثبات أنه يعمل",f4s:"اختبارات PHPUnit للميزات والوحدات",
w_h:"أعمال مختارة",w_p:"أنظمة حقيقية بقواعد حقيقية: مصادقة، مدفوعات، صلاحيات، واختبارات تثبت ذلك.",cs_tag:"مشروع مميّز · تحدي Huma-volve 2026",
cs_p:"منصة تعاون للفرق بنيتها من الصفر انطلاقاً من تصميم Figma. سُلّمت بثلاث صيغ: REST API، وتطبيق ويب كامل بـ Blade، و API يشغّل واجهة أمامية منفصلة.",
live:"العرض المباشر",video:"شاهد الفيديو",m_h:"مَدار · نظام إدارة التعلّم",m_p:"منصة تعليمية متكاملة صُمّمت من الـ ERD: الأدوار والصلاحيات، الدورات والمنهج، التسجيل، الاختبارات، التقدّم، الكوبونات، السلال، الطلبات والمدفوعات.",
m1:"أكثر من 350 اختبار PHPUnit على SQLite في الذاكرة",m2:"شهادات PDF بنص عربي ورموز QR وصفحة تحقق عامة",m3:"محرك كوبونات بلا ثغرات ولوحة تحكم ثنائية اللغة",
r_h:"لوحة تحكم المطاعم",r_p:"لوحة إدارة و API لإدارة القوائم والتصنيفات وطلبات الزبائن، مع التحقق عبر Form Requests و API Resources لاستجابات JSON منظمة.",code:"عرض الكود",
e_h:"نظام مصادقة لمتجر إلكتروني",e_p:"Backend آمن بمصادقة متعددة الأدوار ومسارات محمية، مع Eloquent models لكتالوج المنتجات وتتبع الطلبات، ومحسّن بالفهارس.",
sk_h:"أدواتي",sk_p:"ما أستخدمه يومياً لتسليم أعمال Backend متينة.",p_h:"المسيرة",edu:"التعليم",u_h:"بكالوريوس هندسة الحاسوب",u_p:"الجامعة الإسلامية بغزة · قواعد البيانات، البرمجة الكائنية، هندسة البرمجيات، هياكل البيانات، الخوارزميات، أمن الحاسوب والشبكات.",
cert:"الشهادات والتدريب",c_h:"لنبنِ شيئاً متيناً معاً.",c_p:"تبحث عن مطوّر Backend لفريق عن بُعد أو لمشروع مستقل؟ أردّ بسرعة.",mail:"البريد الإلكتروني",copy:"نسخ البريد الإلكتروني",copied:"تم النسخ ✓",
foot:"© 2026 يوسف دوحان · مطوّر Backend · غزة، فلسطين"};
const EN={copied:"Copied ✓"};
const roles={en:["Backend Developer","Laravel & PHP Engineer","REST API Builder","Database Designer"],ar:["مطوّر Backend","مهندس Laravel و PHP","باني REST APIs","مصمّم قواعد بيانات"]};
const skills=[
 {c:"#ff2d20",en:"Backend",ar:"Backend",i:["PHP","Laravel","RESTful APIs","MVC","Middleware","Eloquent ORM","API Resources","Form Requests","Service Layer"]},
 {c:"#3d7bff",en:"Databases",ar:"قواعد البيانات",i:["MySQL","SQLite","ERD / MySQL Workbench","Relational schemas","Indexing","Query optimization","Migrations"]},
 {c:"#3ddc97",en:"Security and auth",ar:"الأمان والمصادقة",i:["Authentication","Authorization","Laravel Sanctum","Laravel Passport","RBAC"]},
 {c:"#a9c6ff",en:"Testing and tools",ar:"الاختبار والأدوات",i:["PHPUnit","Git","GitHub","Composer","Postman","VS Code","mPDF"]}];
const certs=[
 {y:"2026",en:["Laravel Development · 70 hrs","GazaTech Builders"],ar:["تطوير Laravel · 70 ساعة","GazaTech Builders"]},
 {y:"2026",en:["Freelancing and Personal Branding · 30 hrs","GazaTech Builders"],ar:["العمل الحر والعلامة الشخصية · 30 ساعة","GazaTech Builders"]},
 {y:"2026",en:["ICDL Training Certification","Learn More Institute"],ar:["شهادة تدريب ICDL","معهد Learn More"]},
 {y:"2025",en:["Web Development Diploma · 230 hrs","MOEHE certified"],ar:["دبلوم تطوير الويب · 230 ساعة","معتمد من وزارة التربية والتعليم العالي"]}];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const root=document.documentElement,tEls=[...document.querySelectorAll("[data-t]")];
tEls.forEach(e=>EN[e.dataset.t]??=e.textContent);
let lang="en";
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px"});
function renderLists(){
 document.getElementById("sk").innerHTML=skills.map((g,k)=>`<div class="sg rv in" style="--c:${g.c}"><h3>${esc(g[lang])}</h3><div class="pills">${g.i.map(x=>`<span>${esc(x)}</span>`).join("")}</div></div>`).join("");
 document.getElementById("certs").innerHTML=certs.map(c=>`<div class="ti"><time>${c.y}</time><h3>${esc(c[lang][0])}</h3><p>${esc(c[lang][1])}</p></div>`).join("");
 const tech=["Laravel","PHP","MySQL","REST APIs","Sanctum","Passport","PHPUnit","Eloquent","Git","Postman","mPDF","RBAC"];
 document.getElementById("track").innerHTML=[...tech,...tech].map(x=>`<span>${x}</span>`).join("");
}
function setLang(l){
 lang=l;root.lang=l;root.dir=l==="ar"?"rtl":"ltr";
 const d=l==="ar"?AR:EN;tEls.forEach(e=>{const v=d[e.dataset.t];if(v)e.textContent=v});
 document.getElementById("lang").textContent=l==="ar"?"English":"العربية";
 renderLists();ri=0;ci=0;del=false;
 try{localStorage.setItem("yd-lang",l)}catch(e){}
}
document.getElementById("lang").addEventListener("click",()=>setLang(lang==="en"?"ar":"en"));

/* typewriter */
const tp=document.getElementById("type");let ri=0,ci=0,del=false;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function tick(){const w=roles[lang][ri%roles[lang].length];
 if(reduce){tp.textContent=roles[lang][0];return}
 ci+=del?-1:1;tp.innerHTML=`<em>&lt;/&gt;</em> ${esc(w.slice(0,ci))}`;
 let t=del?40:85;if(!del&&ci>=w.length){del=true;t=1800}else if(del&&ci<=0){del=false;ri++;t=350}
 setTimeout(tick,t)}

/* counters */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const to=+e.target.dataset.to,t0=performance.now(),dur=reduce?1:1600;
 const step=n=>{const p=Math.min(1,(n-t0)/dur);e.target.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.6});
document.querySelectorAll(".cnt").forEach(c=>cio.observe(c));

/* nav, progress, parallax */
const nav=document.getElementById("nav"),prog=document.getElementById("prog"),img=document.querySelector("#frame img");
let raf=0;
addEventListener("scroll",()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;const y=scrollY,h=document.body.scrollHeight-innerHeight;
 nav.classList.toggle("solid",y>20);prog.style.transform=`scaleX(${h>0?y/h:0})`;
 if(!reduce&&y<innerHeight)img.style.transform=`scale(1.04) translateY(${y*.06}px)`})},{passive:true});

/* card spotlight + magnetic buttons */
document.querySelectorAll(".pc").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}));
if(!reduce&&matchMedia("(pointer:fine)").matches)document.querySelectorAll(".mag").forEach(b=>{
 b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3}px)`});
 b.addEventListener("pointerleave",()=>b.style.transform="")});

/* copy */
const cp=document.getElementById("copy");
cp.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("yousefdouhan006@gmail.com");cp.textContent=(lang==="ar"?AR:EN).copied;setTimeout(()=>cp.textContent=(lang==="ar"?AR:EN).copy,1800)}catch(e){cp.textContent="yousefdouhan006@gmail.com"}});

let saved="en";try{saved=localStorage.getItem("yd-lang")||"en"}catch(e){}
setLang(saved);
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
setTimeout(tick,900);
}
