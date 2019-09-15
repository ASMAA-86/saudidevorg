// while (expression) statement

/*var num = 0;
while(num <= 10)
{
    console.log("Hi");
    num++;
}*/

//do
//statement
//while (expression);
/*var num = 0;
do{
    console.log(num);
    num++;
}while(num < 10)

console.log('********');
var num =0;
do{
    console.log(num);
}
while(num++<10)
//for
/*for (let i = 0;i<=10;i++)
{
    console.log("Hi"); 
}*/

/*var i,j,multi;
for(i=0,j=6; i<4 ;i++,j--)
{
    console.log(multi= i * j);
    
}*/
//Jumps

/*var i = 0;
HowToLable:while(i < 3)
{
    console.log("i =  " +i );
    i++;
}*/
//jump-break
/*for(var i = 0; i<=1000 ; i++)
{
    console.log("Hello");
    if(i == 5)
    break;
}*/

/*var x =0;
var z =0;
labelCancelLoops:while(true){
    console.log("Outer loop" +x);
    x +=1;
    z = 1
    while(true)
    {
    console.log("Inner loop" +z);
    z +=1;
    if(z===3 && x===6){
    break labelCancelLoops;
    }else if(z === 3){
        break;
    }
}}*/
/*var i = 0;
var n = 0;
while(i < 5){
    i++;
if(i === 3){
    continue;
}
n += i;
console.log("n =  " +n+ "  i = " +i);
}*/

/*var i = 0;
var j = 10;
 checkiandj:while(i < 4){

console.log(i)
i++;
checkj:while(j > 4){
console.log(j);
j--;
if(j % 2 === 0){
continue checkj;
}
console.log(j+"is odd");
 }
 console.log("i = " +i);
 console.log("j = " +j);
}*/

//HW
/*var cars = ["BMW", "Volvo", "Saab", "Ford"];
checki:for(let i = 0 ; i <= cars.length - 1 ;i++)
{
    console.log(cars[i]);
    while(i === 2)
    {
        break checki;
    }
    
}*/
checki:for(var i = 0;i<=10;i++)
{

    while(i === 3 || i === 5){

        continue checki;
    }

while(i === 7){
    
    break checki;
     
}
console.log(i);
}
console.log("I break the loop"); 

