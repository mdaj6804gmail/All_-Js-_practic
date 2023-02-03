var value = 50;
function aa() {
    alert(window.value); //accessing global variable
}

//Javascript Data types
// JavaScript Operators

/*
! / The Nullish Coalescing Operator 
 (সংকেত { ?? }) হলো
  let x=null,undefined; 
  let y=" Mubbin" 
  ওপারেশনটি হলো let z= x ?? y; 
  { যদি প্রথপটির ভেলু(null,undefined)হয় তাহল প্রথমটি একজিকিউট হবেনা, দ্বিতীয়টি একজিকিউট হবে}*/

/*
!Logical Operators
 1 && And
 2 || Or
 3 ! not
 
 1{ && and Operator এখানে
    let x = 6;
    let y = 3;
 (x < 10 && y > 1 && 5 > 6)
!যদি একটি false হয় তাহলে সবগুলো  false হবে
}




*/


//! ES6 practice

//! class=2  var let const

// global scope{বাইরে বেরিয়েবল ডিক্লিয়ার করাকে গ্লোবাল ইসকপ বলে যেমন Var,let,const }

// Funtion scope{ funtion এর ভিতরে বেরিয়েবল ডিক্লিয়ার করাকে  funtion scope বলে যেমন funtion (){ var a=1,let b=2, const c=3,} Funtion scope এর veriables বাইরে কোনো প্রভাব ভেলে না । কিন্তু  global scope থেকে funtion scope এ একসেস করা যায়}

//if scope { var variable এর ভেলুপরি global scope এ পরিবরতন হয় কিন্তু let,const এর ভেলু পরিবরতন হয় না}

// for scope { var variable এর ভেলুপরি global scope এ পরিবরতন হয় কিন্তু let,const এর ভেলু পরিবরতন হয় না}

//কিছু কথা var variable এক নাম বারবার ডিকলিয়ার করা যায়, কিন্তু  let variable এক নাম বারবার ডিকলিয়ার করা যায় না;আবার এদের ভেলু পরিবরতন করা যায়; কিন্তু const এর ভেলুও পরিবরতন করা যায় না আবার এক নামের const variable এক বারের বেশি ডিক্লিয়ার করা যায় না ।


//!Arrow Functions Class----3

number1=[1,2,3,4,5,6,7,8,9,10]

//! Normal function
// function Number(A){
//   console.log(A);
// };

//!Arrow function
// let arrayFunctions =(N,B)=>{
//   console.log(N,B);
// }
// arrayFunctions("All Mubin","02-03-2004");

// let arrayFunctions =N=>console.log(N);
// arrayFunctions("All Mubin");


// let squerNumber=S=>{return S*S}
// let squerNumber=S=> S*S
// console.log(squerNumber(4))

// number1.forEach((val)=>{
// console.log(val);
// })
// let printAll=(val=>{
// console.log(val);
// });

// number1.forEach(printAll)

// let squareNum=number1.map((a)=>{
//   return a*a
// })
// console.log(squareNum)


//! Template literal (ES6)---class4 ( ` name backtic)

// console.log(`Hello world
// Hello Bangladesh!`);


// let age=25;
// console.log(`His age is ${age}`)

// let name="All Mubin";
// let age=25;
// let dob="02-03-1997"
// console.log(`His Name is ${name}
// His age is ${age} 
// Date of Birth: ${dob}`);


// let a= 20;
// let b=65;
// console.log(` ${a} + ${b}= ${a+b} `);
// console.log(a,b);



//! Array Destructing--class__5

// let fruits=["Mango","Apple","Orange","Banana",]

// let [f1,f2,f3,f4]=fruits;
// console.log(f1,f2,f3,f4)
// যদি মনেকরি যে মাঝখানের Apple,Orange নেবনা তাহলে পরপর কমা ব্যবহার করব যেমন=(f1,,,f4)
// console.log(f1,f4)

// let [f6,,,f7]=fruits;
// console.log(f6,f7)


// ! swapping variables class_-_- 6

// let a,b;

// a=5; b=10;

//swapping
// let c=a;
// a=b;
// b=c;

// [a,b]=[b,a]


// console.log(`a= ${a} and b= ${b}`)




//! Object Destructuring class-_-_-07

// let person={
//   fname:"All ",
//   lName:'Mubin',
//   dob:'02-03-1997'
// }
//  normal  উপায়
// let f=person.fname,
// l=person.lName,
// B=person.dob;


//! object এর  poperty যে নামের থাকবে সেই নাম veriable এ ব্যবহার করতে হবে যেমন :let {fname,lName,dob}=person;
// let {fname,lName,dob}=person;
// console.log(fname,lName,dob)

//! function

// function display({fname,lName,dob}){
  
//   console.log(fname,lName,dob)

// }
// display(person)

//!prictis 
// let person2={
//   fN:'Kalid',
//   lN:'Hasan',
//   dob:'03-03-2017'
// }

// let f=person2.fN,
// L=person2.lN,
// B=person2.dob;
// console.log(f,L,B)

// let {fN:F,lN:L,dob:B}=person2;
// console.log(F,L,B)


// function mubin({fN:F,lN:L,dob:B}){
// console.log(F,L,B)

// }
// mubin(person2)


// ! spread Operator class-_-_8

//! fetch api

// let a=()=>{
// fetch('https://randomuser.me/api/?results=5000')
// .then((a)=>{
//   console.log(a)
// })
// }
// a()