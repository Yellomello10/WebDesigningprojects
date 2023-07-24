let nos = [1, 2, 3, 4, 5];
console.log("the initial array :", nos);
let fno = nos.shift();
console.log("Array after shift ;", nos);
console.log("Array no shift :", fno);
nos.unshift(10);
console.log("Array after unshift :", nos);

let nums = [1, 2, 3, 4, 5];
//nums.splice(1,4);
//console.log("Array after splice deletion :", nums);
nums.splice(5,0,6);
console.log("Array after splice insertion : ", nums);