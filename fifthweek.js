//jumps
//return
// var x;
// function sqaure(x)
// {
// console.log("Hi");
// return x * x;
// console.log("Hi 2");
// }

// console.log(sqaure(3));

// function counter() {
//     for(var counter = 1; ;counter++)
//     {
//     console.log(counter + "A");
//     if (counter === 5){
//         return;
//     }
//     console.log(counter + "B");
// }
//     console.log(counter + "C");
// }
// console.log(counter());

//Throw err
//  var x;
// function positive(x) {
// if (x >= 0) 
// document.write("the number is positive"); 
// else throw "x must not be negative";
// }
// positive(-1);
//try and catch
// var x;
// function positive(x) {
// if (x >= 0) 
// return x;
// else 
// throw "x must not be negative";
// }
// try {
// var n =Number(prompt("Please enter a positive integer", ""));
// positive(n);
// console.log(n + " is positive");
//  } 
// catch (e) {
// console.log(e); 

// }
// finally{
// console.log("Finally, I got it");
// }
var x=4,y=2;
function division(x,y){
return x/y;
}

try{
   if (y > 0){
   var result = division(x,y);
   console.log("The right answer is " +result+ " 👍🏻" );
   }else throw "can not divide by 0 🤯";
}
catch(e){
    console.log(e);
}

finally{
     console.log("I'm working all the time 🤪");
     }

division(15,5);
