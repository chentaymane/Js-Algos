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
        const r = 25;

        const cx = e.clientX;
        const cy = e.clientY;

        const insideX = cx > box.left + r && cx < box.right - r;
        const insideY = cy > box.top + r && cy < box.bottom - r;
        const inside = insideX && insideY;

        if (!trapped) {
            div.style.left = (cx - r) + 'px';
            div.style.top = (cy - r) + 'px';

            if (inside) {
                trapped = true;
                div.style.background = 'var(--purple)';
            }
        } else {
            const clampedX = Math.min(Math.max(cx, box.left + r), box.right - r);
            const clampedY = Math.min(Math.max(cy, box.top + r), box.bottom - r);

            div.style.left = (clampedX - r) + 'px';
            div.style.top = (clampedY - r) + 'px';
        }
    });
}

export function setBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    document.body.append(box);
}