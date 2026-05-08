
let div = null
let trapped = false 

export function createCircle() {

    document.addEventListener('click', (e) => {

         div = document.createElement('div');

        div.style.left = e.clientX-25 + "px";
        div.style.top = e.clientY-25 + "px";
        div.style.backgroundColor='white'
          div.dataset.block = "false";
        div.classList.add('circle')

        document.body.append(div);
        trapped = false
    });
    

}
export function moveCircle() {

    document.addEventListener('mousemove', (e) => {
            if (!div) return;

            
           
            let boxRect = document.querySelector('.box').getBoundingClientRect()
            let inside =
            e.clientX-24 > boxRect.left &&
            e.clientX +26 < boxRect.right &&
            e.clientY -24 >boxRect.top &&
            e.clientY+26 < boxRect.bottom
            if (!trapped) {
                div.style.left = e.clientX - 25 + 'px';
                div.style.top = e.clientY - 25 + "px";
                if (inside) {
                    trapped = true 
                    div.style.backgroundColor = 'var(--purple)'
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