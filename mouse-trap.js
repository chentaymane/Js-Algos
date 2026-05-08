
let div = null
let trapped = false 

export function createCircle() {

    document.addEventListener('click', (e) => {

         div = document.createElement('div');

        div.style.left = e.clientX-25 + "px";
        div.style.top = e.clientY-25 + "px";
        div.style.background='white'
          div.dataset.block = "false";
        div.classList.add('circle')

        document.body.append(div);
        trapped = false
    });
    

}
export function moveCircle() {

    document.addEventListener('mousemove', (e) => {
            if (!div) return;

            
           
           const circleRect = div.getBoundingClientRect();
const boxRect = document.querySelector('.box').getBoundingClientRect();

const inside =
    circleRect.left >= boxRect.left + 1 &&
    circleRect.right <= boxRect.right - 1 &&
    circleRect.top >= boxRect.top + 1 &&
    circleRect.bottom <= boxRect.bottom - 1;
            if (!trapped) {
                div.style.left = e.clientX - 25 + 'px';
                div.style.top = e.clientY - 25 + "px";
                if (inside) {
                    div.style.background = 'var(--purple)'
                    trapped = true 
                }
            }else {
                 if (inside) {                  
                    div.style.left = e.clientX - 25 + 'px';
                    div.style.top = e.clientY - 25 + "px";
                }
            }
                
    });
}


export function setBox() {
    let box = document.createElement('div')
    box.classList.add('box')
    document.body.append(box)
    
}