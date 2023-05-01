window.onload=function(){
    createElements();
}
let strokes1=["`1234567890-=","qwertyuiop[]\\","asdfghjkl;'","zxcvbnm,./"];
let strokes2=["ё1234567890-=","йцукенгшщзхъ\\","фывапролджэ","ячсмитьбю."];
const createElements=()=>{
    let body = document.querySelector("body");
    let h1 = document.createElement("h1");
    let textarea = document.createElement("textarea");
    textarea.innerHTML="asd";
    let keyboard = document.createElement("div");
    let p = document.createElement("p");
    addFunctionalToKeyboard(keyboard);
    h1.innerHTML = "RSS Виртуальная клавиатура";
    textarea.cols = "90";
    textarea.rows = "10";
    p.innerHTML="Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt";
    body.appendChild(h1);
    body.appendChild(textarea);
    body.appendChild(keyboard);
    body.appendChild(p);
}
const addFunctionalToKeyboard=function(keyboard){
    keyboard.className="keyboard";
    let strokes =[];
    for(let i=0;i<4;i++){
        strokes[i]=[];
        for(let j=0;j<strokes1[i].length;j++){
            strokes[i][j]= document.createElement("div");
            strokes[i][j].className="key";
            strokes[i][j].innerHTML=strokes1[i][j];
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