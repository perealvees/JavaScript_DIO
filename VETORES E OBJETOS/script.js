//let array = ['string', 1, true]
//console.log(array);

let array = ['string', 1, true,['array1'],['array2'], ['array3']];
console.log(array[0]);

//array.forEach(function(item, index){console.log(item,index)});
array.push('novo item');
console.log(array);

array.pop()