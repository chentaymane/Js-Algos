export function compose() {

 
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

        let div = document.createElement("div");
        div.classList.add("note", e.key);
        div.textContent = e.key;

        let index = e.key.charCodeAt(0) - 97;

        div.style.backgroundColor = `rgb(
            ${index * 10 % 255},
            ${index * 20 % 255},
            ${255 - index * 8}
        )`;

        document.body.appendChild(div);
    }
    });
}