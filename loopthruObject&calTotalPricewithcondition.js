fruits = [
  {"fruit":"strawberry","quantity":15,"ppu":10},
  {"fruit":"pineapple","quantity":10,"ppu":40},
  {"fruit":"apple","quantity":6,"ppu":20},
  {"fruit":"mango","quantity":12,"ppu":50},
  {"fruit":"pear","quantity":10,"ppu":80}
  ]

for(var i=0; i<fruits.length; i++){
  sum = 0;
  sum += fruits[i].ppu * fruits[i].quantity;
  if(sum >= 250){
    console.log(sum);
  }
}