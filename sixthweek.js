//object
// var car ={
//     type:"GMC",
//     model:"2019",
//     color:"black"
// };

// var person = {
//     firstName:"Baabdullah",
//     lastName:"Asmaa",
//     age:30,
//     eyecolor:"brown"
// };

// console.log(person.firstName);

// var person = {
//     firstName:"Asmaa",
//     lastName:"Baabdullah",
//     age:30,
//     eyecolor:"brown"
// };

// console.log(person["firstName"]);

// var person = {
//     firstName:"Asmaa",
//     lastName:"Baabdullah",
//     age:30,
//     eyecolor:"brown",
//     fullName:function(){
//         return this.firstName + " " + this.lasttName;
//     }
// };

// console.log(person["firstName"]);
// console.log(person["fullName"]);

// سيكون استدعاء للـ global object والذي سيكون هنا [object Window]
// var x = this;
// console.log(x);
//

//ما هو كائن المتصفح، باختصار هي التي تظهر object window في المتصفح وأشهرها مع برمجة الجافا سكريبت
//والتي نستخدمها
//console.log(this === window);
// var a = 37;
// console.log(window.a);
// this.b ="Asmaa"
// console.log(b);
// console.log(window.b);
// console.log(b);

// function myFunction(){
//     return this;
// }
// console.log(myFunction());
// function user (id,firstName,lastName)
// {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var saied = new user(1000,"Saied","Ali");
// var khalid = new user(1000,"Khalid","Ali");

// console.log(saied.id,saied.firstName,saied.lastName);

//
// var person = {
//    firstName:"Asma",
//    lastName:"ali",
//    age:34,
//    fullName:function()
//    {return this.firstName + " "+ this.lastName}

// };

// console.log(person.firstName);
// delete person.firstName;
// console.log(person.firstName);
// console.log("firstName" in person );
// console.log( person.hasOwnProperty("firstName") );
//Testing Properties
//property in object
//object.hasOwnProperty(property)

//Property Getters and Setters
// Create an object: var person = {
    // firstName: "Mohammed", lastName: "Alali", language: "EN",
    // get langGet(){
    // ملحوظة: Property Accessors هي التي تعطينا صلاحية الوصول لأي متغير داخل object معين
    // مثال:
    // ￼￼￼￼￼￼￼return this.language; }, set langSet(value) { this.language = value; }
    // ;}
    // إنشاء get //
    // يكون بين الدالتين فاصلة وليس فاصلة منقوطة //
    // إنشاء set //
    // ￼￼￼￼// Set a property using setter
    // person. langSet = "AR";
    //  Display data from the object using getter document.getElementById("demo").innerHTML = person. langGet;
    //أنشئ كائن (Object) يحتوي على الخصائص التالية:
 //Subject – CoordinatorName – NOofHours – NoofStudents
 // ثم عبئ القيم كل مرة بخصائص مختلفة باستخدام getter & setter
// var Student = {
// Subject : "teacher",
// CoordinatorName : "Asmaa",
// NOofHours: "4hr",
// NoofStudents:"1200",
// get teachGet(){
//     return this.name},
// set teachSet(value){
//     this.name = value;
// }

// };
// Student.name = "Bader";
// console.log(Student.teachGet);

// function student (Subject,CoordinatorName,NOofHours,NoofStudents){
// this.Subject = Subject;
// this.CoordinatorName = CoordinatorName;
// this.NOofHours = NOofHours;
// this.NoofStudents = NoofStudents;
// }
// var Taha = new student ("Math","Teacher","4th","32456");
// console.log(Taha.Subject + " " + Taha.CoordinatorName + " " + Taha.NOofHours + " " +Taha.NoofStudents);