var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for(var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  if(greetings[i].indexOf('Christmas') !== -1) { //nessa parte do codigo dentro if eu errei pois so coloquei "greetings[i].indexOf('Christmas')" e dessa forma o programa não consegue definir se é true ou false o que faz a aplicação não funcionar, para isso adicionar o operador de relação !== para obter um resultado true ou false
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}