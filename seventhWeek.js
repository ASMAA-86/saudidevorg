//The prototype Attribute


// function Person1}{ )( function Person2}{ )(
// Person1.prototype = Object.create(Person2.prototype);
// const Person3 = new Person2;)(
// console.log(Person1.prototype.isPrototypeOf(Person3)); //expected output: false
// console.log(Person2.prototype.isPrototypeOf(Person3));


//Adding Properties to Propert

// function Person(first, last, age, eye) { this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     }
//     Person.prototype.nationality = "Arabic";
//     var myFather = new Person("Mohammed", "AlAli", 50, "Red"); document.getElementById("demo").innerHTML =
  

//Array

// var nationality = ["Saudi", "English", "Egyption"]; 
// var numbers = [1, 45, 63];

// var nationality = ["Saudi", "English", "Egyption"];
// var nationality = new Array ("Saudi", "English", "Egyption");

// var nationality = ["Saudi", "English", "Egyption"];
// var nat = nationality[2];
/*
أنشئ مصفوفة جديدة الأولى نخزن فيها أسماء خريجي الجامعة "خمسة أسماء كافية" ومصفوفة أخرى نخزن فيها المعدل النهائي GPA "ستكون من نوع double"
ثم قم بإسناد كل طالب لدرجته في متغيرات منفصلة
*/

var names = ["asma1","asma2","asma3","asma4","asma5"];
var GBA = [5,1.5,5,3.5,4.5];

for(var i in names)
    
{
  console.log("Student name  "+names[i]+" with GBA "+ GBA[n]);
}