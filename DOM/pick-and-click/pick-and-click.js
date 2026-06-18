export function pick() {
  // --- Create and inject the required divs ---
  const hslDiv = document.createElement('div')
  hslDiv.className = 'hsl'
  Object.assign(hslDiv.style, {
    position:  'fixed',
    top:       '50%',
    left:      '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  })

  const hueDiv = document.createElement('div')
  hueDiv.className = 'hue text'
  Object.assign(hueDiv.style, {
    position: 'fixed',
    top:      '0',
    right:    '0',
    pointerEvents: 'none',
  })

  const lumDiv = document.createElement('div')
  lumDiv.className = 'luminosity text'
  Object.assign(lumDiv.style, {
    position: 'fixed',
    bottom:   '0',
    left:     '0',
    pointerEvents: 'none',
  })

  document.body.append(hslDiv, hueDiv, lumDiv)

  // --- Retrieve SVG crosshair lines (provided by the HTML) ---
  const axisX = document.getElementById('axisX')
  const axisY = document.getElementById('axisY')

  // --- Mouse move: update background, labels, and crosshairs ---
  document.addEventListener('mousemove', (e) => {
    const hue = Math.round((e.clientX / window.innerWidth)  * 360)
    const lum = Math.round((e.clientY / window.innerHeight) * 100)
    const hsl = `hsl(${hue}, 100%, ${lum}%)`

    document.body.style.background = hsl

    hslDiv.textContent = hsl
    hueDiv.textContent = hue
    lumDiv.textContent = lum

    // Vertical crosshair follows X
    axisX.setAttribute('x1', e.clientX)
    axisX.setAttribute('x2', e.clientX)

    // Horizontal crosshair follows Y
    axisY.setAttribute('y1', e.clientY)
    axisY.setAttribute('y2', e.clientY)
  })

  // --- Click: copy hsl string to clipboard ---
  document.addEventListener('click', () => {
    navigator.clipboard.writeText(hslDiv.textContent)
  })
}