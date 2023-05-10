// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  let limpapreco = +item.valor.toLocaleUpperCase().replace('R$', '').trim();
  if (item.descricao.toLocaleLowerCase().slice(0, 4) === 'taxa') {
    taxaTotal += limpapreco;
  } else if (item.descricao.toLocaleLowerCase().slice(0, 4) === 'rece') {
    recebimentoTotal += limpapreco;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
let newArray = transportes.split(', ');
console.log(newArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let newHtml = html.split('span').join('a');
// html.forEach((item) => {

// })
console.log(newHtml);
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

let newfrase = frase.slice(length - 1);

console.log(newfrase);

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];
let itemMod;
let soma = 0;
transacoes2.forEach((item) => {
  itemMod = item.toUpperCase().trim().slice(0, 4);
  if (itemMod === 'TAXA') soma++;
});
console.log(soma);
