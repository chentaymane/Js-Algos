export function build(bricks) {
let i = 0
    const intervalID = setInterval(()=> {
        i++
        let block = document.createElement("div")
        block.id = `brick-${i}`
        
        if (i % 2 === 0) {
            block.dataset.foundation = "true"
        }
        block.textContent=i
       document.body.appendChild(block);
        if (i === bricks) {
            clearInterval(intervalID)
        }
    },100)
    
}
export function repair(...ids) {
    ids.forEach(id => {
        let el = document.getElementById(id);

        if (!el) return;

        if (el.hasAttribute('data-foundation')) {
            el.dataset.repaired = 'in progress';
        } else {
            el.dataset.repaired = 'true';
        }
    });
}
export function destroy() {
    let breaks = document.querySelectorAll('[id^=brick-]')
    breaks[breaks.length-1].remove()
}