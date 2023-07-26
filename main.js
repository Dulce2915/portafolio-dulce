const PI = 3.1416;

let areaCirculo;

let radio = 4;

areaCirculo = PI * (radio * radio);

radio = 10;

areaCirculo = PI * (radio * radio);


/* const myModal = document.getElementById('modal-Contactame');
const myElement = document.getElementById('Contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
}); */



let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Dulce Flores')
  .pauseFor(300)
  .deleteChars(10)
  .start();