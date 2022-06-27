var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  var code = input.slice(0,3); //pega o codigo inicial que esta em maisculo, pegamos a posição inicial da string e vamos ate seu ponto final, como todos os codigos tem 3 digitos podemos fazer dessa forma
  var ponto = input.indexOf(';'); //pegamos onde o ';' esta presente em cada string, mostra a posição no codigo
  var nome = input.slice(ponto + 1); //pegamos os nomes das estações a partir da posição do ';' + 1 pois se colocarmos apenas a var ponto iremos direto para onde ela ta presente e os textos adiantes e como queremos somente o nome da estaçõa somamos + 1

  var result = `${code}: ${nome}`;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}