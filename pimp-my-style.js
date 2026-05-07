import { styles } from "./pimp-my-style.data.js";

let unpimp = false;
let i = 0;

export function pimp() {
    let but = document.querySelector('.button');

    if (!unpimp) {
        // ADD MODE
        but.classList.add(styles[i]);
        i++;

        if (i === styles.length) {
            unpimp = true;
            but.classList.add('unpimp');
        }

    } else {
        // REMOVE MODE
        i--;

        but.classList.remove(styles[i]);

        if (i === 0) {
            unpimp = false;
             but.classList.remove('unpimp');
        }
    }
}