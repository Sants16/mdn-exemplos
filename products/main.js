var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {

    let produtos = products[i]; //pega todos os itens do array e armazena nessa variavel
    let ponto = produtos.indexOf(':'); //procura a posição do : em cada item
    let nome = produtos.slice(0, ponto); //separa os nomes dos produtos usando o metodo slice, dessa forma pegamos todo o texto desde o primeiro caracter [0] ate a posição onde o : se encontra
    let preço = Number(produtos.slice(ponto + 1)); //pegamos o valor dos produtos usando o slice tambem e convertendo a informação coletado para Number() para que possamos somar mais tarde, com o slice pegamos a posição onde o : esta presente em cada item do array e somamos +1 pois se apenas colocassemos a variavel ponto o texto conteria o :, oq não queremos nesse acaso ai somamos +1

/*
SOLUÇÃO MDN: é menos trabalhoso doq a minha solução acredito eu
 var subArray = products[i].split(':'); //cria subArrays que contem o nome do produto e seu valor baseado nos itens do array products, ele pega cada item do array products e o transforma em um novo array ou seja como cada item no products é uma string ele pega essa string e a separa pelo : usando o .split dps as informações antes e depois do : se trasnformam em itens separados e são guardados dentro de um novo array, cada string do product se torna um novo array contendo 2 itens sendo eles o nome do produto e seu valor
 var name = subArray[0]; //pega somente a posição do nome dos produtos
 var price = Number(subArray[1]); //pega somente a posição do valor dos produtos
 */
 total += preço;

 itemText = `${nome}: $ ${preço}`;

 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);