var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  minusculo = input.toLowerCase();
  maisculo = input.toUpperCase();
  input = minusculo.replace(minusculo[0], maisculo[0]) 

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}