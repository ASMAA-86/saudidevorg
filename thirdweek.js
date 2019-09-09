//string
//quotes
//<button onclick="alert('Thank you')">Click Me</button>
document.write("Asmaa");
document.write('"Asmaa"');
document.write('/"Asmaa/"');
//length
var name = "Asmaa Ali Baabdullah";
document.write(name.length);
document.write(name.charAt(0)); //type the first letter
document.write(name.length-1) //type the last letter
document.write(name.substring(1,4)) //type the last letter
//Applay the concept of string
document.write(name.replace("Asmaa","khalid"));
document.write(name.toUpperCase());


//Variable Scope & Operator
// number and string
var a = 5;
var b = "5";
if (a == b)
{
 document.write("They are equal");   
}
//number and number
var a = 5;
var b = 5;
if (a == b)
{
 document.write("They are equal");   
}
//** power
var x = 4;
var y = 5;
var i = x**y
document.write(i);   

//!==
for (var i=10; i !== 0 ; i--)
{
    document.write("Hello <br>");   
}

//Ex
var age = 50;
var x = (age <= 50)? "you are young" :"you are old";
document.write(x);
//Ex
var grade = 80;
var result = (grade >= 60)?"passed":"failed";
document.write(grade);

//if ...else
const age = 20;
if (age > 18){
document.write("you are good to go!")
} else if (age < 15){
    document.write("you are realy young!")
}
else {
    document.write("you are not old enough!")   
}

//Ex
const salary = 50000;
if (salary > 50000){
document.write("you are ritch");
} 

if (salary == 50000 || salary >= 20000)
{
    document.write("you are good");
}
else {
    document.write("you are poor!");
}

//switch

var days = 7;
switch(days) {
    case 1:
    document.write("Our lunch today Kabsa");
    break;

    case 2:
    document.write("Our lunch today is Fish");
    break;

    case 3:
    document.write("Our lunch today is pasta");
    break;

    case 4:
    document.write("Our lunch today is tuna");
    break;

    case 5:
    document.write("Our lunch today is soup");
    break;

    case 6:
    document.write("Our lunch today is egg");
    break;

    case 7:
    document.write("Our lunch today is shawerma");
    break;

    default:
    document.write("Go resturant");
    break;
}

/* switch (browser) { case 'Edge':
alert( "You've got the Edge!" ); break;
case 'Chrome': case 'Firefox': case 'Safari': case 'Opera':
alert( 'Okay we support these browsers too' ); break;
default:
alert( 'We hope that this page looks ok!' );
} */
var browser = "edge";
if(browser == "edge"){
   console.log("You've got the Edge!");
} else if(browser == "Chrome"|| browser == "Firefo"|| browser == "Safari"|| browser == "Opera")
{
    console.log("Okay we support these browsers too");  
}
else {
    console.log("We hope that this page looks ok!");
}

//Ex
let hour = 10;
if (hour >= 6 && hour < 12){
    console.log("Good Morning");
} else if (hour >= 12 && hour < 18){

    console.log("Good Afternoon");
} else {
    console.log("Good Evning");
}

//Ex
var Day = "Monday";
switch(Day){
    case Sunday:
    case Monday:
    case Teusday:
    case Wednesday:
    case Thursday:
    console.log("It's work day!!")
    break;

    default:
    console.log("Happy weekend!!")
    break;
}