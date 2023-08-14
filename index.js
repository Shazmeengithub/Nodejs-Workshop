// run `node index.js` in the terminal
//console.log(`Hello Node.js v${process.versions.node}!`);/
// console.log('var');
// let p=5;
// p=3;
// console.log(p)
// {
//   let a=10;
//   console.log(a);
// }
// //console.log(a);
// for(var s=0 ; s<10; s++){
//   console.log(s);
// }
// console.log(s);

// //Normal function
// var sum=function(a,b){
//   return a+b
// }
// //Arrow Function
// var sum=(a,b)=>{
//   return a+b
// }

// const name='Shaz';
// console.log('My name is ', name);
// console.log('My name is $(name)');

// const arr1=[1,2,3,4];
// const arr2=[...arr1,5,6,7,8];
// console.log(arr2)

//rest parameter
//passing spread operator as a parameter
// const sum=(a,...n) =>{
//   console.log(a,...n);

// };
// sum(2,3,4,5,6);

// const [a,b,c]=[1,2,3];
// console.log(a,b,c);
// const arr=['shaz','te',49]
// for (const a of arr)
const arr=[1,2,3,4];
//map
// const arrMap=arr.map((a) =>{
//   return a*a;

// });
// console.log(arrMap);
// //filter
// const arrFilter=arr.filter((a)=>{
//   return a%2==0;
// }
// );
// console.log(arrFilter);
// //reduce

// const arrReuce =arr.reduce((a,c_)=>{
//   return a+c;
// });
//Map
const arrMap=arr.map((a) => a*a);
console.log(arrMap)