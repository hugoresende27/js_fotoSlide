// Wrap every letter in a span
//TEXTO ANIMADO TITULO
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//////////////////////////////////////////////////////////

const body = document.body
const slides = document.querySelectorAll('.slide')
const btnEsq = document.getElementById('left')
const btnDir = document.getElementById('right')

let slideAtivo = 0

btnDir.addEventListener('click', () => {
  slideAtivo++

  if(slideAtivo > slides.length -1 ) {  //SE SLIDE ATIVO MAIOR DO Q O ULTIMO
    slideAtivo = 0
  }

  setBgToBody()
  setSlideAtivo()
})

btnEsq.addEventListener('click', () => {
  slideAtivo--

  if(slideAtivo < 0 ) {
    slideAtivo = slides.length -1   //ULTIMO SLIDE
  }

  setBgToBody()
  setSlideAtivo()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[slideAtivo].style.backgroundImage
}

function setSlideAtivo() {
  slides.forEach(slide => slide.classList.remove('ativo'))
  slides[slideAtivo].classList.add('ativo')
  }
