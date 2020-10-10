(function () {
  const baseFontSize = 20
  // var baseWidth = 1916
  const designSize = 1920
  const set = function () {
    const clientWidth = document.documentElement.clientWidth || window.innerWidth

    let rem = 20
    if (clientWidth !== designSize) {
      rem = Math.floor((clientWidth / designSize) * baseFontSize)
    }
    if (rem <= 14) {
      rem = 14
    } else if (rem >= 20) {
      rem = 20
    }
    const html = document.querySelector('html')
    if (html) {
      html.style.fontSize = rem + 'px'
      window.baseFontSize = rem
    }
  }
  set()
  window.addEventListener('resize', set)
})()
