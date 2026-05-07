export function generateLetters() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let fontSize = 11;

    for (let i = 0; i < 120; i++) {

        let div = document.createElement("div");

        div.textContent =
            characters[Math.floor(Math.random() * characters.length)];

        div.style.fontSize = fontSize++ + "px";

     
        if (i < 40) {
            div.style.fontWeight = 300;
        } else if (i < 80) {
            div.style.fontWeight = 400;
        } else {
            div.style.fontWeight = 600;
        }

        document.body.appendChild(div);
    }
}