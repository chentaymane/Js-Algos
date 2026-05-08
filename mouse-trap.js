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

        const circleRect = {
            left: nextLeft,
            right: nextLeft + 50,
            top: nextTop,
            bottom: nextTop + 50
        };

        const inside =
            circleRect.left > box.left + 1 &&
            circleRect.right < box.right - 1 &&
            circleRect.top > box.top + 1 &&
            circleRect.bottom < box.bottom - 1;

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