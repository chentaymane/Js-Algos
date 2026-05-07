import { styles} from "./pimp-my-style.data.js";

let unpimp =false
let i = 0 
export function pimp() {
    let but = document.querySelector('.button')
        if (!unpimp){
             but.classList.remove('unpimp')
            but.classList.add(styles[i])
            i++
            if (i === styles.length) unpimp = true
        }else{
            but.classList.add('unpimp')
            i--
            
            but.classList.remove(styles[i])
            if (i === 0) unpimp =false 
        }
    
    
}