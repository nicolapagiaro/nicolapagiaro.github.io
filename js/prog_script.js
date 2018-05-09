/*
 * Variabili
 */
const container = document.getElementsByClassName("container")[0]
const bgDark = document.getElementsByClassName('bg-dark')[0]
const specsCard = document.getElementsByClassName('card-descr')[0]

/*
 * Animazione di fade in di entrata
 */
fadeIn(container)

/* click listener sulla card
const cards = document.getElementsByClassName("card")
for(let i=0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    bgDark.style.display = "block"
    setTimeout(()=> {
      specsCard.style.width = "500px"
      specsCard.style.height = "500px"
    }, 50)
  })
}

// click listener sullo sfondo nero
bgDark.addEventListener('click', () => {
  specsCard.style.width = "0px"
  specsCard.style.height = "0px"
  setTimeout(()=>{
    bgDark.style.display = "none"
  }, 50)
}) */