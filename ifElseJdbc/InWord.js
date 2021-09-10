var digit = Math.floor(Math.random()*10) ;
console.log(digit);

function inWords(){
    if(digit == 1)
    console.log(digit+ " = one");
    else if(digit == 2)
    console.log(digit+ " = two");
    else if(digit == 3)
    console.log(digit+ " = three");
    else if(digit == 4)
    console.log(digit+ " = four");
   else if(digit == 5)
    console.log(digit+ " = five");
   else if(digit == 6)
    console.log(digit+ " = six");
   else if(digit == 7)
    console.log(digit+ " = Seven");
   else if(digit == 8)
    console.log(digit+ " = eight");
    else if(digit == 9)
    console.log(digit+ " = 9");
    if(digit == 0)
    console.log(digit+ " = zero")
}
inWords();