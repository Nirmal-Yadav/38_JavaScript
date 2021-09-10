const ps = require("prompt-sync");

const prompt = ps();
const number = prompt("Enter Number for unit = ");

console.log(number+ " : ");
let num = number.length;
switch(num){
    case 1:
        console.log("Unit");
        break;
    case 2:
        console.log("Ten");
        break;  
    case 3:
        console.log("Hundred");
        break;
    case 4:
        console.log("Thousand");
        break; 
    case 5:
        console.log("TenThousand");
        break;
     case 6:
        console.log("Lakhs");
        break;
    default:
        console.log("wrong input");
} 