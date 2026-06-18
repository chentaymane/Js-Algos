import {  colors} from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    let head = document.querySelector("head")
    let style = document.createElement("style")
    for (let c of colors){
        style.textContent += `.${c} {\n background : ${c} ; \n}`
    }
    head.appendChild(style)
}

export function generateColdShades() {

    for (let color of colors) {

        let div = document.createElement("div");
        div.classList.add(color);
        div.textContent = color;

        if (
            color.includes("aqua") ||
            color.includes("blue") ||
            color.includes("turquoise") ||
            color.includes("green") ||
            color.includes("cyan") ||
            color.includes("navy") ||
            color.includes("purple")
        ) {
            document.body.appendChild(div);
        }
    }
}
export function choseShade (shade){

    let clas = document.querySelectorAll('div') 

   for (let i = 0 ; i< clas.length; i++) {
    clas[i].className=shade
}
}