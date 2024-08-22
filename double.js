var num = [3, 5, 6, 7, 2, 5, 9, 12, 7];
var dnum = [];

for(var i =0; i < num.length; i++){
    var element = num[i];
    var index = dnum.indexOf(element);
    if (index == -1){
        dnum.push(element);
    }
}
console.log(dnum);