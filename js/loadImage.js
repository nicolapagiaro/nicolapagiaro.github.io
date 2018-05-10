const images = document.getElementsByClassName('load-image')
for(let i=0; i < images.length; i++) {
  if(images[i].dataset.image == undefined)
    continue;
  
  let img = new Image()
  img.src = images[i].dataset.image;
  img.onload = function() {
    images[i].style.backgroundImage = "url('" + img.src + "')"
  }
}

/**
 * Metodo che carica un immagine su un div
 */
function loadImage(divImg, srcImage) {
  divImg.style.backgroundImage = "none"
  if(!divImg.classList.contains("load-image"))
    divImg.classList.add("load-image")
  let img = new Image()
  img.src = srcImage;
  img.onload = function() {
    divImg.style.backgroundImage = "url('" + srcImage + "')"
  }
}