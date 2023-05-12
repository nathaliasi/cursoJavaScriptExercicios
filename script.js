// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(objetosCursos);
console.log(arrayCursos);

// Retorne uma lista com os
// números maiores que 100
let guardaValores;
const numeros = [3, 44, 333, 23, 122, 322, 33];
let maioresQCem = numeros.filter((n) => n > 100);
console.log(maioresQCem);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
let possui = instrumentos.some((item) => {
  return item === 'Baixo';
});
console.log(possui);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];
let totalCompras;
let limpaPreco;
totalCompras = compras.reduce((acumulador, item) => {
  limpaPreco = +item.preco
    .toString()
    .replace('R$', '')
    .replace(',', '.')
    .trim();
  return acumulador + limpaPreco;
}, 0);
console.log(totalCompras);
