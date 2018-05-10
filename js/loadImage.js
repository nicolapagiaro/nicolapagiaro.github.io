const images = document.getElementsByClassName('load-image')
for(let i=0; i < images.length; i++) {
  if(images[i].dataset.image == undefined)
    continue;
  
  let img = new Image()
  img.src = images[i].dataset.image;
  img.onload = function() {
    images[i].style.opacity = "0.1"
    images[i].style.backgroundImage = "url('" + img.src + "')"
    fadeIn(images[i])
  }
}

/**
 * Metodo che carica un immagine su un div
 */
function loadImage(divImg, srcImage) {
  divImg.style.backgroundImage = "none"
  divImg.classList.add("load-image")
  let img = new Image()
  img.src = srcImage;
  img.onload = function() {
     divImg.style.opacity = "0.1"
     divImg.style.backgroundImage = "url('" + srcImage + "')"
     fadeIn(divImg)
  }
}