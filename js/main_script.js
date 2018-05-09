/*  
 * Variabili
 */
const WAIT_ANIM_TIME = 250
const WAIT_ANIM_TIME_2 = 200
const btnProgetti = document.getElementById("btnProgetti")
const btnInfo = document.getElementById("btnInfo")
const btnBackLogin = document.getElementById('backLogin')
const socialContainer = document.getElementsByClassName('social-container')[0]
const mainTextContainer = document.getElementsByClassName("text-container")[0]
const infoContainer = document.getElementsByClassName("info-container")[0]
const divEffetto = document.getElementsByClassName("effetto-figo")[0]
const divImg = document.getElementsByClassName('img-full-height')[0]

/*
 * Animazione del fadeIn
 */
// nascondo l'immagine
divEffetto.classList.add("nascondi-effetto-figo")
setTimeout(() => {
  fadeIn(mainTextContainer)
  fadeIn(socialContainer)
  divEffetto.classList.remove("nascondi-effetto-figo")
}, WAIT_ANIM_TIME_2)


/*
 * Gestione dell'anno di nascita
 */
const annoNascita = 1998
const anni = new Date().getFullYear() - annoNascita
document.getElementById("anno").innerHTML = anni

/*
 * Button "Progetti"
 */
btnProgetti.addEventListener('click', (e) => {
  e.preventDefault()
  
  setTimeout(() => {
    // nascondo il testo
    fadeOut(mainTextContainer)
    fadeOut(socialContainer)
    
    // nascondo l'immagine
    divEffetto.classList.add("nascondi-effetto-figo")
    
    // cambio pagina
    changePage("progetti.html")
  }, WAIT_ANIM_TIME)
  
})


/*
 * Button "Altre info"
 */
btnInfo.addEventListener('click', (e)=> {
  e.preventDefault()
  
  setTimeout(() => {
    // nascondo il testo
    fadeOut(mainTextContainer)
    fadeOut(socialContainer)
    
    // nascondo l'immagine
    divEffetto.classList.add("nascondi-effetto-figo")
    
    setTimeout(()=> {
      // cambio il contenuto della pagina
      mainTextContainer.style.display = "none"
      infoContainer.style.display = "block"
      fadeIn(infoContainer)
      
      // metto l'altra immagine
      divImg.style.backgroundImage = "url('./images/background-info.jpg')"
      
      // mostro l'immagine
     divEffetto.classList.remove("nascondi-effetto-figo")
    }, WAIT_ANIM_TIME*3)
    
  }, WAIT_ANIM_TIME)
})

/*
 * Button torna al login
 */
btnBackLogin.addEventListener('click', (e)=> {
  e.preventDefault()
  
  setTimeout(() => {
    // nascondo il testo
    fadeOut(infoContainer)
    
    // nascondo l'immagine
    divEffetto.classList.add("nascondi-effetto-figo")
    
    setTimeout(()=> {
      // cambio il contenuto della pagina
      mainTextContainer.style.display = "block"
      infoContainer.style.display = "none"
      fadeIn(mainTextContainer)
      fadeIn(socialContainer)
      
      // metto l'altra immagine
      divImg.style.backgroundImage = "url('./images/background.jpg')"
      
      // mostro l'immagine
     divEffetto.classList.remove("nascondi-effetto-figo")
    }, WAIT_ANIM_TIME*3)
    
  }, WAIT_ANIM_TIME)
})