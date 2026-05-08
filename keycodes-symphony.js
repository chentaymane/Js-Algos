export function compose() {

    function CreateStyle() {

        let style = document.createElement('style');

        let colors = [
            "red", "blue", "green", "purple", "orange", "pink",
            "cyan", "brown", "gold", "navy", "teal", "lime",
            "magenta", "violet", "indigo", "coral", "salmon",
            "khaki", "plum", "olive", "turquoise", "chocolate",
            "crimson", "orchid", "tan", "silver"
        ];

        let css = '';

        for (let i = 0; i < 26; i++) {
            let letter = String.fromCharCode(97 + i);

            css += `
.${letter} { background-color: ${colors[i]}; }
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