var value = 50;
function a() {
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