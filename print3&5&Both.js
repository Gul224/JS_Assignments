for ( var numb =1; numb <= 100; numb++){
  if(numb%3 === 0 && numb%5 === 0){
    console.log('fizzbuzz');
  }
  else if(numb%3 === 0){
    console.log('fizz');
  }
  else if(numb%5 === 0){
    console.log('buzz');
  }
  else{
    console.log(numb);
  }
}
