var show = document.getElementById('postup');
var hidden = document.getElementById('postdown');
var sentences = document.getElementById('text');

hidden.addEventListener('click',function(){
  sentences.style.display = 'none';
});

show.addEventListener('click', function(){
  sentences.style.display = 'block';
});

// La méthode style.display permet de faire apparaitre ou non la zone sélectionnée (ici la div comprenant le paragraphe)
// L'événement 'click' signifie que la méthode se produit lorsque l'on click sur l'élément ciblé (ici, les deux liens Afficher et Masquer)
