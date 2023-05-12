const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const removePrimeiro = comidas.shift();
console.log(removePrimeiro);
// Remova o último valor de comidas e coloque em uma variável
const removeUltimo = comidas.pop();
console.log(removeUltimo);

// Adicione 'Arroz' ao final da array
const addFinal = comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
const addInicio = comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
let ordemAlf = estudantes.sort();
console.log(ordemAlf);
// Inverta a ordem dos estudantes
let ordemAlte = estudantes.reverse();
console.log(ordemAlf);
// Verifique se Joana faz parte dos estudantes
let exist = estudantes.toString().toLowerCase().includes('joana');
console.log(exist);
// Verifique se Juliana faz parte dos estudantes
exist = estudantes.toString().toLowerCase().includes('juliana');
console.log(exist);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
let newHtml = html.split('section').join('ul').split('div').join('li');
console.log(newHtml);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const arrayCopy = carros.slice();
const remove = carros.pop();
console.log(arrayCopy);
console.log(carros);
