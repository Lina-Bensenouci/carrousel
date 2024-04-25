(function(){
  console.log("Vive Javascript")
  let carrousel = document.querySelector('.carrousel')
  console.log("conteneur carrousel = " + carrousel.tagName)
  let bouton = document.querySelector('.bouton__ouvrir')
  console.log("bouton = " + bouton.tagName)
  let carrousel__x = document.querySelector('.carrousel__x')
  console.log('carrousel__x' + carrousel__x.tagName)
  let galerie = document.querySelector('.galerie')
  console.log('galerie = ' + galerie.tagName)
 
 
  let carrousel__figure = document.querySelector('.carrousel__figure')
  /* Création dynamique d'une image du carrousel */
 
  /* récupère la première image de la galerie */
  // let galerie__img = galerie.querySelector('img')
  /* por créer une collection d'images de la galerie */
  let galerie__img = galerie.querySelectorAll('img')
  console.log( galerie__img)
  let index = 0
  for (const elm of galerie__img)
  {
      creation_image_carrousel(index, elm)
      creer_radio_carrousel(index)
      index = index + 1
  }
 
  /*
  Créer l'image du carrousel de la galerie
  */
 function creation_image_carrousel(index,elm){
  console.log(elm.src)
  let carrousel__img = document.createElement('img')
  carrousel__img.src = elm.src
  carrousel__img.classList.add('carrousel__img')
  carrousel__img.dataset.index = index
  carrousel__figure.appendChild(carrousel__img)
 }
 
  /*
  Créer d'un radio bouton du carrousel (le numéro)
  */
  function creer_radio_carrousel(index){
    let carrousel__radio = document.createElement('input')
    carrousel__radio.classList.add('carrousel__radio')
    carrousel__radio.type = 'radio'
    carrousel__radio.name = 'radio'
    carrousel__radio.dataset.index = index
   
    carrousel.appendChild(carrousel__radio);
   
    carrousel__radio.addEventListener('click', function(){
      let index = parseInt(this.dataset.index);
      let carrousel__img = carrousel__figure.children;
      for (const img of carrousel__img) {
          img.style.opacity = 0;
      }
      carrousel__img[index].style.opacity = 1
    });
  }
 
 
/* écouteur pour ouvrir la boîte modale */
bouton.addEventListener('click', function(){
  carrousel.classList.add('carrousel--ouvrir'); // ouvrir le carrousel
});
 
/* Écouteur pour fermer la boîte modale */
carrousel__x.addEventListener('click', function(){
  carrousel.classList.remove('carrousel--ouvrir'); // fermer le carrousel
});
 
 
 
})()