import { gossips } from './gossip-grid.data.js'

export function grid() {
  // Range controls
  const ranges = document.createElement('div')
  ranges.className = 'ranges'

  const makeRange = (id, min, max, value) => {
    const input = document.createElement('input')
    input.type      = 'range'
    input.className = 'range'
    input.id        = id
    input.min       = min
    input.max       = max
    input.value     = value
    return input
  }

  const widthRange      = makeRange('width',      200, 800, 200)
  const fontSizeRange   = makeRange('fontSize',    20,  40,  20)
  const backgroundRange = makeRange('background',  20,  75,  20)

  ranges.append(widthRange, fontSizeRange, backgroundRange)
  document.body.appendChild(ranges)

  // Grid container
  const gridEl = document.createElement('div')
  gridEl.className = 'grid'
  document.body.appendChild(gridEl)

  // Form card (first slot)
  const formCard = document.createElement('form')
  formCard.className = 'gossip'

  const textarea = document.createElement('textarea')

  const submitBtn = document.createElement('button')
  submitBtn.type        = 'submit'
  submitBtn.textContent = 'Share gossip!'

  formCard.append(textarea, submitBtn)
  gridEl.appendChild(formCard)

  formCard.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = textarea.value.trim()
    if (!text) return
    addCard(text)
    textarea.value = ''
  })

  // Apply current slider values to a card
  const applyStyles = (card) => {
    card.style.width      = `${widthRange.value}px`
    card.style.fontSize   = `${fontSizeRange.value}px`
    card.style.background = `hsl(270, 60%, ${backgroundRange.value}%)`
  }

  // Create and append a gossip card
  const addCard = (text) => {
    const card = document.createElement('div')
    card.className   = 'gossip'
    card.textContent = text
    applyStyles(card)
    gridEl.appendChild(card)
  }

  // Render existing gossips
  gossips.forEach(addCard)
  applyStyles(formCard)

  // Update all cards on slider change
  const updateAll = () => gridEl.querySelectorAll('.gossip').forEach(applyStyles)
  ;[widthRange, fontSizeRange, backgroundRange].forEach(r => {
    r.addEventListener('input', updateAll)
  })
}

grid()