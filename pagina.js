const h1 = document.createElement('h1');
h1.innerHTML = 'Minha primeira pagina';
h1.setAttribute('id', 'titulo');
h1.setAttribute('data-test', 'test-title');
h1.classList.add('titulo-pagina', 'titulo-princial');
h1.style.color = 'maroon';
h1.style.fontFamily = 'arial';



const h2 = document.createElement('h2');
h2.innerHTML = 'Esta pagina esta sendo gerada dinamicamente';

const p1 = document.createElement('p1');
p1.innerHTML - 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim accusamus, magnam saepe est iste sequi earum reprehenderit architecto nisi nulla ipsa praesentium exercitationem labore, in vitae voluptatum autem dolores?';


document.body.appendChild(h1);
document.body.appendChild(h2);