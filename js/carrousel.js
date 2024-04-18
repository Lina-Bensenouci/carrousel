(function(){
  console.log("J'aime pas le Java")
  let carrousel = document.querySelector('.carrousel')
  let bouton = document.querySelector('.bouton__ouvrir')
  let carrousel__x = document.querySelector('.carrousel__x')

  bouton.addEventListener('mousedown', function(){
    carrousel.classList.add('carrousel--ouvrir')
  })

  carrousel__x.addEventListener('mousedown', function(){
    carrousel.classList.remove('carrousel--ouvrir')
  })
  
})()