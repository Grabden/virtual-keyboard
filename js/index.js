window.onload=function(){
    createElements();
    
}
let strokes1=[[["`1234567890-=","qwertyuiop[]\\","asdfghjkl;'","zxcvbnm,./"],//en
["`1234567890-=","QWERTYUIOP[]\\","ASDFGHJKL;'","ZXCVBNM,./"],//en caps
["~!@#$%^&*()_+","QWERTYUIOP{}|","ASDFGHJKL:\"","ZXCVBNM<>?"],//en shift
["~!@#$%^&*()_+","qwertyuiop{}|","asdfghjkl:\"","zxcvbnm<>?"]],//en shift caps
[["ё1234567890-=","йцукенгшщзхъ\\","фывапролджэ","ячсмитьбю."],// ru
["Ё1234567890-=","ЙЦУКЕНГШЩЗХЪ\\","ФЫВАПРОЛДЖЭ","ЯЧСМИТЬБЮ."],//ru caps
["Ё!\"№;%:?*()_+","ЙЦУКЕНГШЩЗХЪ/","ФЫВАПРОЛДЖЭ","ЯЧСМИТЬБЮ,"],//ru shift
["Ё!\"№;%:?*()_+","йцукенгшщзхъ/","фывапролджэ","ячсмитьбю,"],]];//ru shift caps
let keyCode,keyValue;
let strokeDescription =[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],
["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],
["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"],
["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"]];
let back = funcKey("Backspace");
    let tab = funcKey("Tab");
    let del = funcKey("Del");
    let capslock = funcKey("CapsLock");
    let enter = funcKey("Enter");
    let shift1 = funcKey("Shift");
    let up = funcKey("▲");
    let shift2 = funcKey("Shift");
    let ctrl1 = funcKey("Ctrl");
    let win = funcKey("Win");
    let alt1 = funcKey("Alt");
    let space = funcKey("","space");
    let alt2 = funcKey("Alt");
    let left = funcKey("◄");
    let down = funcKey("▼");
    let right = funcKey("►");
    let ctrl2 = funcKey("Ctrl");
    let dopstrokes1=[up,left,down,right,space,enter,tab];
    let strokes =[];
    let mainbut=[];
    let mainstr =[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],
    ["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],
    ["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
    ["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],
    ["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]];
let dopstrokes=[{key:"ArrowUp",value: "▲"},{key:"ArrowLeft",value: "◄"},{key:"ArrowDown",value:"▼"},{key:"ArrowRight",value:"►"},{key: "Space", value:" "},{key: "Enter", value:"\n"},{key: "Tab", value:"\t"}];
let textarea = document.createElement("textarea");
let shift=0,caps,lang; 
if(typeof localStorage.getItem("caps")=="string"){
    caps =+localStorage.getItem("caps");
    if(caps ==1)
        capslock.classList.add('active');
}
else caps=0;
if(typeof localStorage.getItem("lang")=="string")
    lang =+localStorage.getItem("lang");
else lang=0;
let mainstrokes=strokes1[lang][caps+shift];
    back.addEventListener('click',function(event){
        textarea.innerHTML=textarea.innerHTML.slice(0,-1);
    });
const createElements=()=>{
    let body = document.querySelector("body");
    let h1 = document.createElement("h1");
    
    let keyboard = document.createElement("div");
    let p = document.createElement("p");
    addFunctionalToKeyboard(keyboard,textarea);
    h1.innerHTML = "RSS Виртуальная клавиатура";
    textarea.cols = "90";
    textarea.rows = "10";
    textarea.readOnly=true;
    p.innerHTML="Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt";
    body.appendChild(h1);
    body.appendChild(textarea);
    body.appendChild(keyboard);
    body.appendChild(p);
    updateKeys(caps,shift,lang);
}
const addFunctionalToKeyboard=function(keyboard,textarea){
    
    keyboard.className="keyboard";
    
    for(let i=0;i<4;i++){
        strokes[i]=[];
        for(let j=0;j<mainstrokes[i].length;j++){
            strokes[i][j]= document.createElement("div");
            strokes[i][j].className="key";
            strokes[i][j].innerHTML=mainstrokes[i][j];
            strokes[i][j].addEventListener('click',tapStrokes.bind(null,textarea,strokes[i][j].innerHTML));
            strokes[i][j].addEventListener('mousedown',function(event){
                strokes[i][j].classList.add('active');
            }); 
            strokes[i][j].addEventListener('mouseup',function(event){
                strokes[i][j].classList.remove('active');
            });
        }
    }
    let firstEl=document.createElement("div");
    firstEl.className="stroke";
    for(let i=0;i<strokes[0].length;i++){
        firstEl.appendChild(strokes[0][i]);

    }
    firstEl.appendChild(back);
    
    let secondEl=document.createElement("div");
    secondEl.className="stroke";
    secondEl.appendChild(tab);
    for(let i=0;i<strokes[1].length;i++){
        secondEl.appendChild(strokes[1][i]);
    }
    secondEl.appendChild(del);

    let thirdEl=document.createElement("div");
    thirdEl.className="stroke";
    thirdEl.appendChild(capslock);
    for(let i=0;i<strokes[2].length;i++){
        thirdEl.appendChild(strokes[2][i]);
    }
    thirdEl.appendChild(enter);

    let fourthEl=document.createElement("div");
    fourthEl.className="stroke";
    fourthEl.appendChild(shift1);
    for(let i=0;i<strokes[3].length;i++){
        fourthEl.appendChild(strokes[3][i]);
    }
    fourthEl.appendChild(up);
    fourthEl.appendChild(shift2);

    let fifthEl=document.createElement("div");
    fifthEl.className="stroke";
    fifthEl.appendChild(ctrl1);
    fifthEl.appendChild(win);
    fifthEl.appendChild(alt1);
    fifthEl.appendChild(space);
    fifthEl.appendChild(alt2);
    fifthEl.appendChild(left);
    fifthEl.appendChild(down);
    fifthEl.appendChild(right);
    fifthEl.appendChild(ctrl2);

    keyboard.appendChild(firstEl);
    keyboard.appendChild(secondEl);
    keyboard.appendChild(thirdEl);
    keyboard.appendChild(fourthEl);
    keyboard.appendChild(fifthEl);
    mainbut.push(firstEl.children,secondEl.children,thirdEl.children,fourthEl.children,fifthEl.children);
    for (let i=0;i<dopstrokes1.length;i++){
        dopstrokes1[i].addEventListener('mousedown',function(event){
            textarea.innerHTML+=dopstrokes[i].value;
        }); 
    }
}
function funcKey(value,...args) {
    let key=document.createElement("div");
    key.className ="functional-key";
    if(args[0]) key.className ="functional-key"+" "+args[0];
    key.innerHTML=value;
    addAnimation(value,key);
    return key;
}
function addAnimation(value,key){
    if(value=="CapsLock"){
        key.addEventListener('click',function(event){
            key.classList.toggle('active');
            caps=1-caps;
            updateKeys(caps,shift,lang);
        })
    } else{
        key.addEventListener('mousedown',function(event){
            key.classList.add('active');
            if(value=="Shift") {
                shift=2;
                updateKeys(caps,shift,lang);
            }
        }); 
        key.addEventListener('mouseup',function(event){
            key.classList.remove('active');
            if(value=="Shift") {
                shift=0;
                updateKeys(caps,shift,lang);
            }
        });
    }
}
function updateKeys(caps,shift,lang){
    localStorage.setItem("caps", caps);
    localStorage.setItem("lang", lang);
    console.log(localStorage.getItem("caps"));
    mainstrokes = strokes1[lang][shift+caps];
    let keys = document.querySelectorAll(".key");
    let len=0;
    for(let i=0;i<4;i++){
        if(i>0) len =mainstrokes[i-1].length+len;
        for(let j=0;j<mainstrokes[i].length;j++){
            //strokes[i][j]= document.createElement("div");
            //strokes[i][j].className="key";
            
            keys[len+j].innerHTML=mainstrokes[i][j];
            //strokes[i][j].addEventListener('click',tapStrokes.bind(null,textarea,strokes[i][j].innerHTML));
        }
    }
}
const tapStrokes=function(textarea,word){
    textarea.innerHTML+= word;
}
document.addEventListener('keydown', function(event) {
    for(let i=0;i<mainbut.length;i++){
        for(let j=0;j<mainbut[i].length;j++){
            if(event.code == mainstr[i][j]){
                if(event.code=='CapsLock') mainbut[i][j].classList.toggle('active');
                else mainbut[i][j].classList.add('active');
            }
        }
    }
    let textarea = document.querySelector("textarea");
    let keyboard = document.querySelector(".keyboard");
    if(((keyCode=="ControlLeft" || keyCode == "ControlRight")&& (event.code == "AltLeft" || event.code == "AltRight"))|| ((event.code=="ControlLeft" || event.code == "ControlRight")&& (keyCode == "AltLeft" || keyCode == "AltRight"))){
        lang=1-lang;
        keyCode=undefined;
    }
    if(event.code == "CapsLock") {
        caps=1-caps;
    }
    if(event.code == "ShiftLeft" || event.code=="ShiftRight"){
        shift=2;
    }
    for (let i=0;i<dopstrokes.length;i++){
        if(event.code==dopstrokes[i].key) {
            textarea.innerHTML+=dopstrokes[i].value;
        }
    }
    for(let i=0;i<strokeDescription.length;i++){
        for(let j=0;j<strokeDescription[i].length;j++){
            if(event.code == strokeDescription[i][j]) {
                textarea.innerHTML += mainstrokes[i][j];
            }
        }
    }
    if(event.code=="Backspace"){
        textarea.innerHTML=textarea.innerHTML.slice(0,-1);
        console.log(localStorage.getItem("caps"));
    }
    updateKeys(caps,shift,lang);
    keyCode=event.code;
});
document.addEventListener('keyup', function(event) {
    for(let i=0;i<mainbut.length;i++){
        for(let j=0;j<mainbut[i].length;j++){
            if(event.code == mainstr[i][j] && event.code!="CapsLock"){
                mainbut[i][j].classList.remove('active');
            }
        }
    }
    let textarea = document.querySelector("textarea");
    let keyboard = document.querySelector(".keyboard");
    if(event.code == "ShiftLeft" || event.code=="ShiftRight"){
        shift=0;
    }
    updateKeys(caps,shift,lang);
});