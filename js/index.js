window.onload=function(){
    createElements();
}
const createElements=()=>{
    let body = document.querySelector("body");
    let h1 = document.createElement("h1");
    let textarea = document.createElement("textarea");
    let keyboard = document.createElement("div");
    let p = document.createElement("p");
    h1.innerHTML = "RSS Виртуальная клавиатура";
    textarea.cols = "90";
    textarea.rows = "10";
    p.innerHTML="Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt";
    body.appendChild(h1);
    body.appendChild(textarea);
    body.appendChild(keyboard);
    body.appendChild(p);
}