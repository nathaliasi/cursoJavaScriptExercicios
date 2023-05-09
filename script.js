// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const nathalia = new Pessoa('Nathália', 'Sardou', 25);
//nathalia.nomeComplet0() = "Nathália Sardou"

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

object.getOwnPropertyNames(NodeList.prototype);
object.getOwnPropertyNames(HTMLAllCollection.prototype);
object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLElement
li.click; //Function
li.innerText; //String
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
