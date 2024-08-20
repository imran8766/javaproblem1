var a = 50;
var b= 60;
var c = 55;

if(a > b){
    console.log("a is biggeer");
}
else{
    console.log("b is bigger");
}


if(a > b){
    if(a > c){
        console.log("a is bigger");
    }
        else{
            console.log("c is bigger");
        }
}
else{
    if(b > c){
        console.log("b is bigger");
    }
    else{
        console.log("c is bigger");
    }
}

var max = Math.max(a, b, c);
console.log(max);
