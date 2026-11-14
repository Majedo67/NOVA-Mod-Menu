const data={
player:{title:"Player",section:"PLAYER MOVEMENT & OPTIONS",items:[
["Fly Mode","Toggle concept for free movement","toggle"],["Noclip","Toggle concept for passing through objects","toggle"],["Flight Speed","Select a preview speed preset","speed"],["Super Jump","Movement option concept","toggle"],["Fast Run","Movement option concept","toggle"],["Invincibility","Placeholder — not connected to the game","planned"]
]},
characters:{title:"Characters",section:"CHARACTER SELECTION",items:[
["Michael","Select character concept","select"],["Franklin","Select character concept","select"],["Trevor","Select character concept","select"],["Lamar","Select character concept","select"]
]},
vehicles:{title:"Vehicles",section:"VEHICLE OPTIONS",items:[
["Vehicle Spawner","Vehicle selection interface concept","planned"],["Repair Vehicle","Repair action placeholder","planned"],["Clean Vehicle","Vehicle action placeholder","planned"],["Vehicle God Mode","Vehicle option placeholder","planned"],["Custom Vehicle Name","Preview a vehicle-name entry","input"]
]},
teleport:{title:"Teleport",section:"LOCATION SHORTCUTS",items:[
["Waypoint","Waypoint destination placeholder","planned"],["Michael's Safehouse","Saved location placeholder","planned"],["Franklin's House","Saved location placeholder","planned"],["Trevor's Trailer","Saved location placeholder","planned"],["Custom Coordinates","Enter coordinates for UI preview only","coords"]
]},
files:{title:"File Manager",section:"USB & FILE OPERATIONS — PREVIEW",items:[
["USB Devices","No console connection available","usb"],["Browse USB","Read-only browser concept","planned"],["Copy Selected","Would require source/destination confirmation","planned"],["Cut / Move","Would require source/destination confirmation","planned"],["Delete Selected","Would require separate confirmation","planned"],["Backup Status","No files have been changed","status"]
]},
settings:{title:"Settings",section:"NOVA MENU PREFERENCES",items:[
["Neon Theme","Blue interface accent","toggle-on"],["Startup Sound","Sound preference placeholder","toggle"],["Open Sequence","Konami-code preference placeholder","planned"],["Close Menu Button","Circle button preference placeholder","planned"],["Reset Preview","Reset local preview switches","reset"]
]}
};
let current="player";
const panel=document.querySelector("#panel");
const previewState={};
function makeNote(message,warning=false){const n=document.createElement("div");n.className="note"+(warning?" notice":"");n.textContent=message;panel.append(n)}
function render(){
 const p=data[current];document.querySelector("#title").textContent=p.title;document.querySelector("#crumb").textContent=p.title.toUpperCase();panel.replaceChildren();
 const label=document.createElement("p");label.className="section";label.textContent=p.section;panel.append(label);
 p.items.forEach(([name,desc,type])=>{
  const row=document.createElement("div");row.className="option";const info=document.createElement("div");const strong=document.createElement("strong");strong.textContent=name;const small=document.createElement("small");small.textContent=desc;info.append(strong,small);row.append(info);
  if(type==="toggle"||type==="toggle-on"){
   const key=current+":"+name;const b=document.createElement("button");b.className="toggle"+((previewState[key]??(type==="toggle-on"))?" on":"");b.textContent=b.classList.contains("on")?"ON":"OFF";
   b.addEventListener("click",()=>{previewState[key]=!b.classList.contains("on");b.classList.toggle("on",previewState[key]);b.textContent=previewState[key]?"ON":"OFF"});row.append(b);
  }else if(type==="speed"){
   const group=document.createElement("div");group.className="choices";["SLOW","NORMAL","FAST"].forEach((v,i)=>{const b=document.createElement("button");b.className="choice"+(i===1?" selected":"");b.textContent=v;b.addEventListener("click",()=>{group.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});group.append(b)});row.append(group);
  }else if(type==="select"){
   const b=document.createElement("button");b.className="action";b.textContent="SELECT";b.addEventListener("click",()=>{previewState.selectedCharacter=name;makeNote(name+" selected in the website preview only.")});row.append(b);
  }else if(type==="input"){
   const input=document.createElement("input");input.className="inline-input";input.placeholder="Vehicle name";input.maxLength=30;row.append(input);
  }else if(type==="coords"){
   const input=document.createElement("input");input.className="inline-input";input.placeholder="X, Y, Z";input.maxLength=48;const b=document.createElement("button");b.className="action";b.textContent="PREVIEW";b.addEventListener("click",()=>makeNote("Coordinates saved in this page preview only: "+(input.value.trim()||"none entered")));row.append(input,b);
  }else if(type==="usb"){
   const b=document.createElement("button");b.className="action";b.textContent="CHECK";b.addEventListener("click",()=>makeNote("This browser cannot detect a PS3 USB device. Real USB detection requires a PS3-side plugin; no files were read or changed.",true));row.append(b);
  }else if(type==="status"){
   const tag=document.createElement("span");tag.className="planned";tag.textContent="SAFE · NO CHANGES";row.append(tag);
  }else if(type==="reset"){
   const b=document.createElement("button");b.className="action";b.textContent="RESET";b.addEventListener("click",()=>{Object.keys(previewState).forEach(k=>delete previewState[k]);render()});row.append(b);
  }else{const tag=document.createElement("span");tag.className="planned";tag.textContent="CONCEPT";row.append(tag)}
  panel.append(row);
 });
 makeNote(current==="files"?"Safety design: start read-only, show full paths, back up first, and require confirmation before any write or delete. This preview cannot access your PS3 or USB.":"Preview interactions only. Nothing here changes GTA V, the PS3, or game files.",current==="files");
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{current=b.dataset.tab;document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));render()}));
document.addEventListener("keydown",e=>{if(!["ArrowDown","ArrowUp"].includes(e.key))return;const tabs=[...document.querySelectorAll(".tab")];const i=tabs.findIndex(x=>x.dataset.tab===current);tabs[(i+(e.key==="ArrowDown"?1:tabs.length-1))%tabs.length].click()});
render();