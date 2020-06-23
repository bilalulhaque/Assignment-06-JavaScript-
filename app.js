// CHAPTER 21-25

// Question #1
// var firstName=prompt("Enter first name")
// var lastName=prompt("Enter last name")
// var fullName=firstName+lastName
// document.write(fullName)

// Question 2
// var model=prompt("Enter mobile model:")
// var modelLength=model.length;
// document.write("Length Of string: "+modelLength)

// Question 3
// var text="Pakistan"
// var firstChar=text.indexOf("n");
// document.write("Index of 'n': "+firstChar)

// Question 4
// var text="Hello World"
// var last=text.lastIndexOf("l");
// document.write("Last Index of 'l': "+last)

// Question 5
// var text="Pakistani"
// document.write(text.charAt(3));

// Question 6
// var firstName=prompt("Enter first name")
// var lastName=prompt("Enter last name")
// var fullName = firstName.concat(lastName);
// document.write(fullName);

// Question 7
// var text='Hyderabad'
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 5) === "Hyder") {
//     text = text.slice(0, i) + "Islam" + text.slice(i + 5);
//     document.write(text)
// }
// }

// Question 8
// var message="Ali and Sami are best friends. They play cricket and football together";
// var result=message.replace(/and/g,'&');
// document.write(result);

// Question 9
// var value='472';
// var value2=parseInt(value);

// document.write("Value: "+value+"<br>");
// document.write("Type: "+typeof(value)+"<br>");
// document.write("Value: "+value2+"<br>");
// document.write("Type: "+typeof(value2));

// Question 10
// var word=prompt("Enter word: ");
// var word2=word.toUpperCase();

// document.write("User input: "+word+"<br>" );
// document.write("Upper case: "+word2);

// Question 11
// var word=prompt("Enter word: ");
// var firstChar=word.slice(0,1);
// var otherChar=word.slice(1);
// firstChar=firstChar.toUpperCase();
// otherChar=otherChar.toLowerCase();
// var final=firstChar+otherChar;

// document.write("User input: "+word+"<br>");
// document.write("Title case: "+final);

// Question 12
// var number=35.36;
// var str=number.toString();
// var firstChar=str.slice(0,2);
// var otherChar=str.slice(3,5);
// var final=firstChar+otherChar;

// document.write("Number: "+number+"<br>");
// document.write("Result: "+final);

// Question 13 left

// Question 14
// var desserts=["cake","apple pie","cookie","chips","patties"];
// var user=prompt("Enter: ");
// var user2=user.toLowerCase();

// for (var i=0; i<desserts.length; i++){
//     if (user2==desserts[i]){
//         alert(user2+" is available at index "+desserts.indexOf(user2)+" in our bakkery");
//     }
// }

// Question 15 left 

// Question 16
// var university = "University of Karachi";
// var arr=university.split('');
// console.log(arr);

// Question 17
// var user=prompt("Enter: ");
// var u=user.charAt(user.length-1);
// document.write("Last character of input: "+u);

// Question 18 left



// CHAPTER 26-30

// Question 1
// var number=+prompt("Enter positive  integer: ");
// if (number>0){
//     document.write("number: "+number+"<br>");
//     document.write("round off value: "+Math.round(number)+"<br>");
//     document.write("floor value: "+Math.floor(number)+"<br>");
//     document.write("ceil value: "+Math.ceil(number));
// }
// else{
//     document.write("Try again");
// }

// Question 2
// var number=+prompt("Enter negative  integer: ");
// if (number<0){
//     document.write("number: "+number+"<br>");
//     document.write("round off value: "+Math.round(number)+"<br>");
//     document.write("floor value: "+Math.floor(number)+"<br>");
//     document.write("ceil value: "+Math.ceil(number));
// }
// else{
//     document.write("Try again");
// }

// Question 3
// var number=+prompt("Enter: ");
// document.write("The absolute value of "+number+" is "+Math.abs(number));

// Question 4
// document.write("random dice value: "+(Math.floor(Math.random()*6)+1));

// Question 5
// var coin=(Math.floor(Math.random()*2)+1);
// if (coin==2){
//     document.write(coin+"<br>"+"random coin value: Heads");
// }
// else{
//     document.write(coin+"<br>"+"random coin value: Tails");
// }

// Question 6
// document.write(" random number between 1 and 100: "+(Math.round(Math.random()*100)+1));

// Question 7
// var user=prompt("Enter your weight in kilograms");
// var user2=parseInt(user);

// document.write("The weight of user is "+user2+" kilograms");

// Question 8
// var secretNumber=Math.floor(Math.random()*10)+1;
// var userGuess=+prompt("Enter your guess: ");

// if (userGuess==secretNumber){
//     alert("Congratulation"); 
// }
// else{
//     alert("Try again");
// }

// CHAPTER 31-34

// Question 1
// document.write(new Date());

// Question 2
// var d = new Date();
// var currentMonth = d.getMonth();
// document.write("Current month: "+currentMonth);

// Question 3
// var x=new Date();
// var date=x.toString();
// document.write("Today is "+date.slice(0,3));

// Question 4
// var x=new Date();
// var y=x.toString();

// if ((y.slice(0,2))=='Sat'){
//     document.write("It's Fun day");
// }
// else if ((y.slice(0,2))=='Sun'){
//     document.write("It's Fun day");
// }
// else{
//     document.write("Boring day");
// }

// Question 5
// var x=new Date();
// var date=x.getDate();
// if (date<16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

// Question 6
// var x=new Date();
// var y=x.getTime();
// var z=(y/1000)/60;

// document.write("Current Date: "+x+"<br>");
// document.write("Current milliseconds since January 1, 1970: "+y+"<br>");
// document.write("Elapsed minutes since January 1, 1970: "+z);

// Question 7
// var x=new Date();
// var time=x.getHours();
// if (time>0 && time<=12){
//     document.write("It's AM");
// } 
// else if (time>12 && time<=23){
//     document.write("It's PM");
// }
// else{
//     document.write("Midnight");
// }

// Question 8
// var laterDate=new Date("Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)");
// alert(laterDate);

// Question 9
// var date=new Date("Fri Apr 24 2020 00:00:00 GMT+0500 (PKT)");
// var x=new Date();
// var z=x-date;
// var minutes=((z/1000)/60);
// var days=minutes/ 1440;
// days=Math.round(days);
// document.write(days+ " days have passed since 1st ramzan");

// Question 10
// var date=new Date("Sat Dec 5 2015 22:50:16 GMT+0500 (PKT)");
// var oldDate=new Date("Thu Jan 1 2015 00:00:00 GMT+0500 (PKT)");

// var result=date-oldDate;
// result=result/1000;

// document.write(result+" seconds elapsed between the reference date and the beginning of 2015");

// Question 11
// var currentDate=new Date();
// var hours=currentDate.getHours();
// var result=(hours-1);


// document.write("1 hour ago, it was "+result+" hours");

// Question 12
// var date=new Date();
// var year=date.getFullYear();
// var result=year-100;

// document.write("100 years back it was "+result);

// Question 13
// var user=+prompt("Enter age: ");
// var date=new Date();
// var year=date.getFullYear();
// var result=year-user;

// alert("Your birth year is: "+result);

// Question 14
var name=prompt("Enter name: ");
var month=prompt("Enter month: ");
var units=+prompt("Enter units: ");
var chargesPerUnit=+prompt("Enter charges per unit");
var netAmountPayable=units*chargesPerUnit;
var lateAmountCharges=350;
var grossAmountPayable=netAmountPayable+lateAmountCharges;



document.write("K-Electric Bill"+"<br>"+"<br>"+"<br>"+"<br>");
document.write("Customer Name: "+name+"<br>");
document.write("Month: "+month+"<br>");
document.write("Number of Units: "+units+"<br>");
document.write("Charges per unit: "+chargesPerUnit+"<br>");
document.write("<br>");
document.write("Less Amount Payable (within Due Date): "+netAmountPayable+"<br>");
document.write("Late payment surcharge: "+lateAmountCharges+"<br>");
document.write("Gross Amount Payable (after Due Date): "+grossAmountPayable+"<br>");








