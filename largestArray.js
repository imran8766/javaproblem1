var marks = [55, 78, 98, 99, 90, 56, 84, 88, 79, 93, 67];
var max = marks[0];
for(var i = 0, i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);