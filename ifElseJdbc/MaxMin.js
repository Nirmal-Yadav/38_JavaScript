var r1 = Math.floor(Math.random() * 900)+100;
console.log("first Random no = " +r1);
var r2 = Math.floor(Math.random() * 900)+100;
console.log("Second Random no = " +r2);
var r3 = Math.floor(Math.random() * 900)+100;
console.log("Third Random no = " +r3);
var r4 = Math.floor(Math.random() * 900)+100;
console.log("Fourth Random no = " +r4);
var r5 = Math.floor(Math.random() * 900)+100;
console.log("Fifth Random no = " +r5);

function getMax(){
    if(r1>r2 && r1>r3 && r1>r4 && r1>r5)
    console.log(r1+ " = r1 is greater");
    else if(r2>r1 && r2>r3 && r2>r4 && r2>r5)
    console.log(r2+ " = r2 is greater");
    else if(r3>r1 && r3>r2 && r3>r4 && r3>r5)
    console.log(r3+ " = r3 is greater");
    else if(r4>r1 && r4>r2 && r4>r3 && r4>r5)
    console.log(r4+ " = r4 is greater");
    else 
    console.log(r5 + " = r5 is greater");
}

function getMin(){
    if(r1<r2 && r1<r3 && r1<r4 && r1<r5)
    console.log(r1+ " = r1 is smaller");
    else if(r2<r1 && r2<r3 && r2<r4 && r2<r5)
    console.log(r2+ "= r2 is smaller");
    else if(r3<r1 && r3<r2 && r3<r4 && r3<r5)
    console.log(r3+ " = r3 is smaller");
    else if(r4<r1 && r4<r2 && r4<r3 && r4<r5)
    console.log(r4+ " = r4 is smaller");
    else 
    console.log(r5 + " = r5 is smaller");
}

console.log(getMax());
console.log(getMin());