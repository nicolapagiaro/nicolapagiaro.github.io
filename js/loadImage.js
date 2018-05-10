const images = document.getElementsByClassName('load-image')
for(let i=0; i < images.length; i++) {
  let img = new Image()
  img.src = images[i].dataset.image;
  img.onload = function() {
    images[i].style.backgroundImage = "url('" + img.src + "')"
    console.log("Loaded");
  }
}