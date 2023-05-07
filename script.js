// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nomeAtribuido, idadeAtribuido) {
  this.nome = nomeAtribuido;
  this.idade = idadeAtribuido + 'Anos';
  this.andar = function () {
    console.log(this.nome + 'Andou');
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Joao = new Pessoa('João', '20');
const Maria = new Pessoa('Maria', '25');
const Bruno = new Pessoa('Bruno', '15');

console.log(Joao, Maria, Bruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.removeClass.remove(classe);
    });
  };
}

const listaItens = new Dom('li');
const ul = new Dom('ul');
