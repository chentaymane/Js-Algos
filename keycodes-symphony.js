export function compose() {

function CreateStyle() {

    let style = document.createElement('style');

    let css = '';

    for (let i = 0; i < 26; i++) {

        let letter = String.fromCharCode(97 + i);

        let r = 255;                 // strong red
        let g = 50 + i * 4;          // slowly increases green
        let b = 150 + i * 3;         // slowly increases blue

        css += `
.${letter} {
    background-color: rgb(${r}, ${g}, ${b});
}
`;
    }

    style.textContent = css;
    document.head.appendChild(style);
}

    CreateStyle(); 
    document.addEventListener('keydown', (e) => {

        let divs = document.querySelectorAll('.note');

        if (e.key === 'Escape') {
            divs.forEach(d => d.remove());
            return;
        }

        if (e.key === 'Backspace') {
            let last = divs[divs.length - 1];
            if (last) last.remove();
            return;
        }

        if (/^[a-z]$/.test(e.key)) {

            let div = document.createElement('div');
            div.classList.add('note', e.key);
            div.textContent = e.key;

            document.body.appendChild(div);
        }
    });
}