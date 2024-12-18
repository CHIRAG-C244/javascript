// let i = 1;
// while(i<10){
//     console.log(i);
//     i++;
// }

// function sayMyName(){
//     console.log("chirag")
// }

// sayMyName()



// function counting(){
//     for (let i=1;  i<=100; i++){
//         console.log(i)
//     }
// }
// counting();

// function Name(fristName , lastName){
//     let fullNmae = fristName+""+lastName
//     return fullNmae;
// }

// let fullNmae = Name("chirag","chaman")
// console.log(fullNmae)

// const avg = (a,b)=>{
//     return (a+b)/2
// }
// console.log(avg(3,15))

// const chirag ={
//     "name":"chirag",
//     "avg": (a,b)=>{
//         return (a*b)/2
//     }
// }
// console.log(chirag)
// console.log(chirag.avg(15,17))

// let arr = [1, "chirag",true]
// arr.push("bhumi")
// arr.pop("bhumi")
// arr.shift()
// arr.unshift("Alka tlaiyan")
// console.log(arr.slice(1))

// console.log(arr)


//filter function---------------------------------------------------------

// let arr = [10,20,30,17 ,15]
// let len = arr.length
// for (let i =0; i<=len; i++){
//     console.log(arr[i])
// }




//Function return a fuction ------------------------

// let name1= function(){
//     return "chaman"
// }

// let joint = function (name){
//     return name +" "+"Gudheniya"
// }

// m = joint(name1())
// console.log(m)


//usnig functons in array--------------------------------

// const arr = [
//     function (a,b){
//         return a+b
//     },
//     function (a,b){
//         return a-b
//     },
//     function (a,b){
//         return a*b
//     }


// ]

// let ans = arr[0]
// let finalAnser = ans(33,55)
// console.log(finalAnser)


//class ----------------------------

// class human{
//     age =14 ;
//     weight = 61;
//     height = 175



//     walking() {
//         console.log("hey i can walk ")
        
//     }

//     talking() {
//         console.log("hey i can talk  ")
        
//     }

//     singing() {
//         console.log("hey i can sing ")
        
//     }
// }


// let obj = new human();
// console.log(obj.age);

// obj.walking()



// object- cloning --------------------------------------------------

// let src = {
//     age: 44,
//     wt : 30,
//     ht: 4555
// }
// let dest = {...src}
// src.age = 90

// console.log(src)
// console.log(dest)


// object cloning using iteratoion --------------------------------------------

// let obj = {
//     age:44,
//     hejk:44,
//     kdjf:55

// }
// let obj2 ={}
// for(let key in obj){
//     let newKey = key;
//     let newValue = obj[key];

//     obj2[newKey]=newValue
// }

// console.log(obj)
// console.log(obj2)


//ERROR HANDALING -----------------------

// try {
//     console.log(x)
// }
// catch(e){
//     console.log("error aa raha h chaha",e)
// }


// const company = new Map();
// company.set("name", "GFG");
// company.set("no_of_employee", 200);
// company.set("category", "education");
// function print(key, values) {
//     console.log(values + "=>" + key);
// }
// company.forEach(print);



//practice questions of javascript=============================

// Create an array of numbers and write a function to find the sum of all the elements.


// let arr = [1,2,3,4,5,6,4,6,8];
// let sum=0;
// let x = function(arr){
    
//     for(let key of arr){
//           sum+=key
//     }
//     return sum
// }
// x(arr)

// console.log(sum)




//- Write a function that takes an array and returns a new array with all elements doubled.


// let arr1= [1,3,4,6,88,66,44]
// sum =[]
// let func = function(arr1){
//     for(let key of arr1){
//        let m =(key*2)
//        sum.push(m)
// }}
// func(arr1)
// console.log(sum)
// console.log(typeof sum)


//Write a function to reverse the elements of an array without using built-in functions.

// let arr1= [1,3,4,6,88,66,44]
// let len = arr1.length
// let reverse_arr = []
// for (let i=len; i!=(0); i--){
//     let m =arr1[i-1]
//     reverse_arr.push(m)
// }
// console.log(reverse_arr)


//Create a function to remove duplicate elements from an array.


// let arr1= [1,3,4,6,88,66,44]
// let myFunc = function(arr1){

// }


//Write a function to find the index of a specific element in an array. If the element is not present, return `-1`.




// let arr = [1, 2, 3, 4, 5, 6, 76];
// let len = arr.length;

// let myFunc = function (arr, element) {
//     for (let i = 0; i < len; i++) {
//          // This will print on each iteration
//         if (arr[i] === element) {
//             return i; // Return the index of the element
//         }
//     }
//     return -1; // Return -1 if the element is not found
// };

// let x = myFunc(arr, 4);
// console.log(x); // Output: 3



//Create a function to filter out all even numbers from an array.


// let arr = [1, 2, 3, 4, 5, 6, 76];

// let len = arr.length;
// let myFunc = function(arr){
//     for(let i=0; i<  len; i++){
//         if(arr[i]%2==0){
//            console.log(arr[i])
//         }
// }}
// myFunc(arr);


//Write a function to sort an array of numbers in ascending order (without using `sort()`).
// let arr = [1, 5, 3, 8, 5, 6, 76];
// len = arr.length

// let myFunc=function(){for (i=0; i<len; i++){
//     for (j=0; j<len; j++){
//         if (arr[i]<arr[j]){
//             console.log([j])
//         }
    
//     }break
// }}
// myFunc(arr)

// //Implement a function to find the smallest and largest number in an array.
// let arr = [1, 5, 3, 8, 5, 6, 76];
// len = arr.length

// let myFunc=function(){
//     for (i=0; i<len; i++){


//     }}
// myFunc(arr)


//Write a function to merge two arrays and remove duplicates
let arr1 = [1,2,53,33,66,77]
let arr2 = [7,2,54,4,99,43,66]

console.log(arr1+arr2)







