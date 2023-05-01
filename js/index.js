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
let mainstrokes=strokes1[0][0],caps=0,shift=0,lang=0;
let keyCode;
let strokeDescription =[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],
["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],
["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"],
["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"]];
let dopstrokes=[{key:"ArrowUp",value: "▲"},{key:"ArrowLeft",value: "◄"},{key:"ArrowDown",value:"▼"},{key:"ArrowRight",value:"►"},{key: "Space", value:" "},{key: "Enter", value:"\n"},{key: "Tab", value:"\t"}];
const createElements=()=>{
    let body = document.querySelector("body");
    let h1 = document.createElement("h1");
    let textarea = document.createElement("textarea");
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
}
const addFunctionalToKeyboard=function(keyboard,textarea){
    keyboard.className="keyboard";
    let strokes =[];
    for(let i=0;i<4;i++){
        strokes[i]=[];
        for(let j=0;j<mainstrokes[i].length;j++){
            strokes[i][j]= document.createElement("div");
            strokes[i][j].className="key";
            strokes[i][j].innerHTML=mainstrokes[i][j];
            strokes[i][j].addEventListener('click',tapStrokes.bind(null,textarea,strokes[i][j].innerHTML));
        }
    }
    let firstEl=document.createElement("div");
    firstEl.className="stroke";
    for(let i=0;i<strokes[0].length;i++){
        firstEl.appendChild(strokes[0][i]);
    }
    let back = funcKey("Backspace");
    firstEl.appendChild(back);
    let secondEl=document.createElement("div");
    secondEl.className="stroke";
    let tab = funcKey("Tab");
    secondEl.appendChild(tab);
    for(let i=0;i<strokes[1].length;i++){
        secondEl.appendChild(strokes[1][i]);
    }
    let del = funcKey("Del");
    secondEl.appendChild(del);

    let thirdEl=document.createElement("div");
    thirdEl.className="stroke";
    let caps = funcKey("CapsLock");
    thirdEl.appendChild(caps);
    for(let i=0;i<strokes[2].length;i++){
        thirdEl.appendChild(strokes[2][i]);
    }
    let enter = funcKey("Enter");
    thirdEl.appendChild(enter);

    let fourthEl=document.createElement("div");
    fourthEl.className="stroke";
    let shift1 = funcKey("Shift");
    fourthEl.appendChild(shift1);
    for(let i=0;i<strokes[3].length;i++){
        fourthEl.appendChild(strokes[3][i]);
    }
    let up = funcKey("▲");
    fourthEl.appendChild(up);
    let shift2 = funcKey("Shift");
    fourthEl.appendChild(shift2);

    let fifthEl=document.createElement("div");
    fifthEl.className="stroke";
    let ctrl1 = funcKey("Ctrl");
    fifthEl.appendChild(ctrl1);
    let win = funcKey("Win");
    fifthEl.appendChild(win);
    let alt1 = funcKey("Alt");
    fifthEl.appendChild(alt1);
    let space = funcKey("","space");
    fifthEl.appendChild(space);
    let alt2 = funcKey("Alt");
    fifthEl.appendChild(alt2);
    let left = funcKey("◄");
    fifthEl.appendChild(left);
    let down = funcKey("▼");
    fifthEl.appendChild(down);
    let right = funcKey("►");
    fifthEl.appendChild(right);
    let ctrl2 = funcKey("Ctrl");
    fifthEl.appendChild(ctrl2);

    keyboard.appendChild(firstEl);
    keyboard.appendChild(secondEl);
    keyboard.appendChild(thirdEl);
    keyboard.appendChild(fourthEl);
    keyboard.appendChild(fifthEl);

    
}
function funcKey(value,...args) {
    let key=document.createElement("div");
    key.className ="functional-key";
    if(args[0]) key.className ="functional-key"+" "+args[0];
    key.innerHTML=value;
    return key;
}
const tapStrokes=function(textarea,word){
    //textarea.innerHTML+= word;
    //console.log(textarea.innerHTML);
}
document.addEventListener('keydown', function(event) {
    let textarea = document.querySelector("textarea");
    let keyboard = document.querySelector(".keyboard");
    if(((keyCode=="ControlLeft" || keyCode == "ControlRight")&& (event.code == "AltLeft" || event.code == "AltRight"))|| ((event.code=="ControlLeft" || event.code == "ControlRight")&& (keyCode == "AltLeft" || keyCode == "AltRight"))){
        lang=1-lang;
    }
    if(event.code == "CapsLock") {
        caps=1-caps;
    }
    if(event.code == "ShiftLeft" || event.code=="ShiftRight"){
        shift=2;
    }
    for (let i=0;i<dopstrokes.length;i++){
        if(event.code==dopstrokes[i].key) textarea.innerHTML+=dopstrokes[i].value;
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
        console.log(textarea.innerHTML[textarea.innerHTML.length-1]);
    }
    mainstrokes = strokes1[lang][shift+caps];
    let keys = document.querySelectorAll(".key");
    //console.log(keys)
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
    keyCode=event.code;
    console.log();
});
document.addEventListener('keyup', function(event) {
    let textarea = document.querySelector("textarea");
    let keyboard = document.querySelector(".keyboard");
    if(event.code == "ShiftLeft" || event.code=="ShiftRight"){
        shift=0;
    }
    mainstrokes = strokes1[lang][shift+caps];
    let keys = document.querySelectorAll(".key");
    //console.log(keys)
    let len= 0;
    for(let i=0;i<4;i++){
        if(i>0) len =mainstrokes[i-1].length+len;
        for(let j=0;j<mainstrokes[i].length;j++){
            //strokes[i][j]= document.createElement("div");
            //strokes[i][j].className="key";
            
            
            keys[len+j].innerHTML=mainstrokes[i][j];
            //strokes[i][j].addEventListener('click',tapStrokes.bind(null,textarea,strokes[i][j].innerHTML));
        }
    }
    //addFunctionalToKeyboard(keyboard,textarea);
});