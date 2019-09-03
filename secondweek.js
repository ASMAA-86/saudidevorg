//Identifiers using $, _ ,or letters
//Identifiers like function , loop
 add_tow_numbers ;
 $name;
 _printString;
 i;
 var Max = 100;
 
 //Ex
 function _تجربة(){
     document.write("Hello Asmaa");
 }

 _تجربة()

 //Reserved Words
 //كأي لغة برمجة أخرى لايمكن استخدام الكلمات المحجوزة كمعرفات (identifier) ولها استخداماتها الخاصة
 var package;
 package = 5;
 console.log(package);

 //الانواع والارقام (types & numbers)
 //1-primitive types
 var x = 5;
 var text = "Asmaa!";
 var she_is_fat_girl = true;
 var Asmaa = undefined;
 var Max = null;

 //2-object types
 //Ex
 var saudi_dev_org_initive =["week1","week2","week3"]
 for (var i = 0; i <= saudi_dev_org_initive.length - 1; i ++){
     document.write(saudi_dev_org_initive[i])
 }
//Classes&Constructors
//global object
//garbage collection
//Math function
var x = Math.pow(2,3);    
document.write(x );

var y = Math.round(0.6);
document.write(y);

var z = Math.max(3,9,15);
document.write(z);

//Dates and Time
var dateToday = new Date().toUTCString();
document.write(dateToday);

//the end of week 2
document.alert("اهلا بكم في عالم الجافا سكريبت")
//أين نستطيع أن نقرأ نتيجة الأمر التالي
//console.log(new Date());
//في المتصفح
