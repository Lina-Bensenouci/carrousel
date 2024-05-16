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
  let carrousel__radio = document.createElement('input');
 
  carrousel__radio.classList.add('carrousel__radio');
  carrousel__radio.type = 'radio';
  carrousel__radio.name = 'radio';
  carrousel__radio.dataset.index = index;
 
  let carrousel__form = document.querySelector('.carrousel__action'); // Select the form
  carrousel__form.appendChild(carrousel__radio); // Append the radio button to the form
 
  carrousel__radio.addEventListener('click', function(){
    let index = parseInt(this.dataset.index); // Get the selected image index
    let carrousel__img = carrousel__figure.children; // Target the children of carrousel_radio
    for (const img of carrousel__img) {
      if (img.tagName !== 'BUTTON') {
        img.style.opacity = 0; // Use style.opacity to set opacity
      }
    }
    carrousel__img[index].style.opacity = 1; // Set the opacity of the selected image to 1
  });
}
 
// Récupérer les dimensions de l'image
const image = document.querySelector('.carrousel__img');
const imageWidth = image.naturalWidth;
const imageHeight = image.naturalHeight;

// Récupérer les dimensions de la fenêtre du navigateur
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Calculer les dimensions souhaitées de la boîte modale en maintenant le ratio de l'image

const modalWidth = Math.min(imageWidth, windowWidth * 0.55); // Utilisez 50% de la largeur de la fenêtre si c'est plus petit que l'image
const modalHeight = (modalWidth / imageWidth) * imageHeight;

// Adapter la taille de la boîte modale en conséquence

const modal = document.querySelector('.carrousel');
modal.style.width = modalWidth + 'px';
modal.style.height = modalHeight + 'px';

// Centrer la boîte modale horizontalement et verticalement
modal.style.top = (windowHeight - modalHeight) / 2 + 'px';
modal.style.left = (windowWidth - modalWidth) / 2 + 'px';
 
 
/* écouteur pour ouvrir la boîte modale */
bouton.addEventListener('click', function(){
  carrousel.classList.add('carrousel--ouvrir'); // ouvrir le carrousel
});
 
/* Écouteur pour fermer la boîte modale */
carrousel__x.addEventListener('click', function(){
  carrousel.classList.remove('carrousel--ouvrir'); // fermer le carrousel
});
 
 
// ajouter des boutons de navigation au carrousel
let prevButton = document.createElement('button');
prevButton.innerText = 'Précédent';
prevButton.classList.add('carousel__prev');
carrousel__figure.appendChild(prevButton);
 
let nextButton = document.createElement('button');
nextButton.innerText = 'Suivant';
nextButton.classList.add('carousel__next');
carrousel__figure.appendChild(nextButton);
 
prevButton.addEventListener('click', function() {
  console.log('Précédent cliqué, index avant: ', index);
  index = (index - 1 + galerie__img.length) % galerie__img.length;
  console.log('Index après: ', index);
  updateCarousel();
});

nextButton.addEventListener('click', function() {
  console.log('Suivant cliqué, index avant: ', index);
  index = (index + 1) % galerie__img.length;
  console.log('Index après: ', index);
  updateCarousel();
});
 
// ajouter un écouteur d'événement à chaque image de la galerie
for (let i = 0; i < galerie__img.length; i++) {
  galerie__img[i].addEventListener('click', function() {
    index = i;
    carrousel.classList.add('carrousel--ouvrir');
    updateCarousel();
  });
}
 
// fonction pour mettre à jour le carrousel
function updateCarousel() {
  let carrousel__img = carrousel__figure.children;
  for (const img of carrousel__img) {
    if (img.tagName !== 'BUTTON') {
      img.style.opacity = 0;
    }
  }
  carrousel__img[index].style.opacity = 1;
}
 
 
})()