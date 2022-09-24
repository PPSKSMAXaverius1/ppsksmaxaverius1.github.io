var name1 = document.getElementById('name1');
var myNav = document.getElementById('nav1');
// var empt = document.forms['Portofolio-Contact-Form-vincentf']['name'].value;

window.onscroll = function() {
  'use strict';
  if (document.documentElement.scrollTop >= 120) {
    myNav.classList.add('bg-biru');
    myNav.classList.remove('bg-transparent');
  } else {
    myNav.classList.add('bg-transparent');
    myNav.classList.remove('bg-biru');
  }
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
//var aa = document.getElementsByName("name").value;
//var bb = document.getElementsByName("email").value;
//var cc = document.getElementsByName("pesan").value;

//  let home = document.querySelector('#home');
//let Profil = document.querySelector('#Profil');
//let resume = document.querySelector('#Portfolio');
//let project = document.querySelector('#Projects');
//let contact = document.querySelector('#Contact');

//window.addEventListener('scroll', () => {
//var windo = window.pageYOffset;
//if (home.offsetTop - 800 <= windo && Profil.offsetTop - 100 > windo) {
//document.querySelector('.home').setAttribute('id', 'active');
//document.querySelector('.Profil').removeAttribute('id', 'active');
//document.querySelector('.resume').removeAttribute('id', 'active');
//document.querySelector('.project').removeAttribute('id', 'active');
//document.querySelector('.contact').removeAttribute('id', 'active');
//}
//else if (Profil.offsetTop - 800 <= windo && resume.offsetTop - 500 > windo) {
//document.querySelector('.home').removeAttribute('id', 'active');
//document.querySelector('.Profil').setAttribute('id', 'active');
//document.querySelector('.resume').removeAttribute('id', 'active');
//document.querySelector('.project').removeAttribute('id', 'active');
//document.querySelector('.contact').removeAttribute('id', 'active');
//} else if (resume.offsetTop - 800 <= windo && project.offsetTop - 500 > windo) {
//document.querySelector('.home').removeAttribute('id', 'active');
//document.querySelector('.Profil').removeAttribute('id', 'active');
//document.querySelector('.resume').setAttribute('id', 'active');
//document.querySelector('.project').removeAttribute('id', 'active');
//document.querySelector('.contact').removeAttribute('id', 'active');
//} else if (project.offsetTop - 800 <= windo && contact.offsetTop - 300 > windo) {
//document.querySelector('.home').removeAttribute('id', 'active');
//document.querySelector('.Profil').removeAttribute('id', 'active');
//document.querySelector('.resume').removeAttribute('id', 'active');
//document.querySelector('.project').setAttribute('id', 'active');
//document.querySelector('.contact').removeAttribute('id', 'active');
//} else if (contact.offsetTop - 800 <= windo) {
//document.querySelector('.home').removeAttribute('id', 'active');
//document.querySelector('.Profil').removeAttribute('id', 'active');
//document.querySelector('.resume').removeAttribute('id', 'active');
//document.querySelector('.project').removeAttribute('id', 'active');
//document.querySelector('.contact').setAttribute('id', 'active');
//}
//});