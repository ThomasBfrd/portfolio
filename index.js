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

const txtAnim = document.querySelector('.txtAnim');

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 10
})
.changeDelay(30)
.typeString('Thomas Bouffard')
.pauseFor(2000)
.deleteChars(15)
.pauseFor(1000)
.typeString('<strong>Développeur Web</strong>')
.pauseFor(2000)
.deleteChars(15)
.start();