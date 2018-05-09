const FADE_TIME = 50


/*
 * Funzione che fa il fade out di un oggetto in javascript puro
 */
function fadeOut(fadeTarget) {
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1
      }
    
      if (fadeTarget.style.opacity < 0.1) {
          clearInterval(fadeEffect)
      } else {
          fadeTarget.style.opacity -= 0.1
      }
  }, FADE_TIME)
}

/*
 * Funzione che fa il fade in di un oggetto in javascript puro
 */
function fadeIn(fadeTarget) {
  let opacity = 0.1
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 0
      }
    
      if (fadeTarget.style.opacity == 1) {
          clearInterval(fadeEffect)
      } else {
        opacity += 0.1
        fadeTarget.style.opacity = opacity
      }
  }, FADE_TIME)
}

/*
 * Funzione che cambia la pagina indicata dopo un tot
 * di tempo
 */
function changePage(page) {
  setInterval(()=> {
     document.location.href = page;
  }, 350)
}