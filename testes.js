var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
 var subArray = products[i].split(':');
 var name = subArray[0];
 var price = Number(subArray[1]);
 console.log(subArray)
 //console.table(subArray)
}