export function generateLetters() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let fontSize = 10;
    let fontWeight = 300;

    for (let i = 1; i <= 120; i++) {

        let char = characters[Math.floor(Math.random() * characters.length)];

        let divo = document.createElement("div");
        divo.textContent = char;

        divo.style.fontSize = fontSize++ + "px";

        if (i > 80) {
            fontWeight = 800;
        } else if (i > 40) {
            fontWeight = 400;
        } else {
            fontWeight = 300;
        }

        divo.style.fontWeight = fontWeight;

        document.body.appendChild(divo);
    }
}