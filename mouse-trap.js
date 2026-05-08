let div = null;
let trapped = false;

export function createCircle() {
    document.addEventListener('click', (e) => {

        div = document.createElement('div');
        div.classList.add('circle');

        div.style.background = 'white';
        div.style.left = e.clientX - 25 + 'px';
        div.style.top = e.clientY - 25 + 'px';

        document.body.append(div);
        trapped = false;
    });
}

export function moveCircle() {

    document.addEventListener('mousemove', (e) => {

        if (!div) return;

        const box = document.querySelector('.box').getBoundingClientRect();

        const nextLeft = e.clientX - 25;
        const nextTop = e.clientY - 25;
        const nextRight = e.clientX + 25;
        const nextBottom = e.clientY + 25;

        const inside =
            nextLeft > box.left + 1 &&
            nextRight < box.right - 1 &&
            nextTop > box.top + 1 &&
            nextBottom < box.bottom - 1;

        if (!trapped) {

            div.style.left = nextLeft + 'px';
            div.style.top = nextTop + 'px';

            if (inside) {
                trapped = true;
                div.style.background = 'var(--purple)';
            }

        } else {

            if (inside) {
                div.style.left = nextLeft + 'px';
                div.style.top = nextTop + 'px';
            }
        }
    });
}

export function setBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    document.body.append(box);
}