const prenom = document.querySelector('.prenom');
const nom = document.querySelector('.nom');
const textHover = document.querySelector('.textHover')
prenom.innerText = "Thomas".toUpperCase();
nom.innerText = "Bouffard".toUpperCase();


textHover.addEventListener('mouseover', function() {
  prenom.style.transform = "translateX(-10px)";
  nom.style.transform = "translateX(10px)";
})

textHover.addEventListener('mouseout', function() {
  prenom.style.transform = "";
  nom.style.transform = "";
})