// // print values in the console :-
// console.log('this is a log!')
// console.warn('This is a warning')
// console.error('This is an error')
// //data types
// // 1. Primitive data Types (PDTs)
// //a. number
// variable_one = 1000000.0000
// console.log(variable_one);
// console.log(typeof(variable_one));
// //2. String  - '' : "" : ``-> backtick :- use for not we use concatenation easily wright 
// variable_one = "Welcome to JS" //either single quote or double
// console.log((variable_one));
// console.log(typeof(visualViewport));
// //3.Boolean
// variable_two = false
// console.log(variable_two);
// console.log(typeof(variable_two))
// //4.Null
// variable_three = null
// console.log(variable_three);
// console.log(typeof(variable_three)); //object -> this is mistake
// //5.Undefined
// variable_four = undefined
// console.log(variable_four);
// console.log(typeof(variable_four));
// // difference between null and undefined 
// //ecma script :- used for standard web pages
// //Condition Statements:-
// //ES5 Syntax:-
// var demo =10
// if(demo>=0)
// {
// console.log( demo + " is a +ve number");
// }
// else{
//     console.log(demo + "is -ve number");
// }
// //ES6 syntax
// //condition ? TRUE : FALSE
// //Limitation :- TRUE/FALSE statements one-liner statements
// demo2 = -10
// // demo2 >= 0 ? console.log( demo + " is a +ve number") : console.log( demo + " is a -ve number");
// demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`);
// // Loops :-
// // keyword :- let(private) :- use within scope , var(public): also use in block or outside the block , const :- declare it and can't change , it is private element/access
// flag =  true;
//  if(flag)
//  {
//    let a =100; 
//    var b =100;
//    const c =100; //when we defined it then we can't change it 
//   console.log(a , b ,c)  //output is undefined when we don't give value
//    console.log( `The value of a inside if-block is ${a}`)
//  }
// else
//  {
//    b=200;
//  }
//   //console.log(c)
//  //console.log(a) // when use let then this give undefined 
//  // console.log(b) //it is undefined because it never create 
// // ony var is declare outside the block 

//Loops:-
// for loop , while loop , not use do-while
//for loop
for(let i=0;i<5; i++)
{
    console.log(i)
}
let i=0;
while(i<5)
{
    console.log(i)
    i+=1
}
//Research :- symbol 
// let num = 100;
// console.log(num)
// let num1 = "hello"
// num1.
//Non-Primtive data type (Non-PDT's)
// a) Arrays : contiguous | [] means array :-memory alignment
//let numbers =[10, 20, 30, 40, 50]
//first step
// for(let i=0; i<numbers.length;i++)
// {
// console.log(numbers[i])
// }
// console.log(numbers)
//console.log(arr)
//third step
let numbers = [10 , 20 , 30 , 40 , 50]
let arr = [];
let arrObj = new Array(10);
console.log(typeof(numbers))
console.log(typeof(arr))
console.log(typeof(arrObj)) //when not use typeof then we have output
// java is not object oriented language because it have primitive datatypes
//Array Methods:- push 
console.log(numbers)
numbers.push(60)
console.log(numbers)
let myArr1 = [100, 200, 300, 400, 500]
//console.log(myArr1)
let myArr2 = myArr1
myArr2.push(100);
console.log(myArr2) 
// it copy all elements and changes reflects each other arrays to solve this we want that we use different different that not depend 
//operator:-
//Array Spread operators
let myArr3 = [100, 200, 300, 400, 500]
//console.log(myArr1)
// let myArr4 = myArr3 this is not copy element
let myArr4 = [...myArr3]
myArr3.push(-10)
myArr4.push(1000) //end of array add
console.log(myArr3) // [100 , 200 , 300 , 400 , -10]
console.log(myArr4) //[100 , 200 ,300 ,400 , 1000]
//pop
myArr3.pop()
console.log(myArr3) //end of array delete
//remove 0th element and other come there index :- shift :- removes from start
let deletedElement= myArr3.shift()
console.log(myArr3) //comes in first index
let newLength = myArr3.unshift(50);
console.log (newLength)
console.log(myArr3) //unshift use for add element in starting

let num1  = [10, 20, 30, 40]
let num2 = [100, 200 , 300 , 400 , 500]
let combinedArray = num1.concat(num2)
let combinedArray1 =  num2.concat(num1)
console.log(combinedArray) //10,20,30,40,100,200,300,400,500
console.log(combinedArray1) //100 ,200 ,300,400,500,10,20,30,40

let dummyArray = [10 , "String" ,"true" , null, undefined]
console.log(dummyArray)











