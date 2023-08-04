//Q1 write a program that allow to user enter number then print it 

var usernumber=prompt(" please Enter Number  Q1");
console.log(usernumber);


// Q2 Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no 

var number= prompt("Enter a number:  Q2");

if (number % 3 == 0 && number % 4 == 0) {
  console.log("yes");
} else {
  console.log("no");
}

//Q3 Write a program that allows the user to insert 2 integers then print the max 

var Num1=prompt("enter first number ");
var Num2=prompt("enter second number ");
if(Num1>=Num2){
    console.log("the max", Num1);
}else{
    console.log("the max",Num2);
}

// Q4 Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive
var Numbers =prompt("Enter number positive or negative");
if(Numbers>=0){
    console.log("positive");
}else{
    console.log("negative");
}

// Q5 Write a program that take 3 integers from user then print the max element and the min element. 
var x=prompt("enter first number ");
var y=prompt("enter second number ");
var z=prompt("enter therd number ");

var max = x;
var min = x;

if (y > max) {
  max = y;
}
if (z > max) {
  max = z;
}
if (y< min) {
  min = y;
}
if (z < min) {
  min = z;
}
console.log("The max is " + max);
console.log("The min is " + min);

//Q6 Write a program that allows the user to insert integer number then  check If a number is oven or odd 

var number=prompt("integer number ");
    
if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }

// Q7 Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant 

var char=prompt("enter character");
if(char=='i'||char=='e'||char=='a'||char=='o'||char=='u'){
    console.log("vowel");
    }else{
        console.log("Consonant");
    }

//Q8 Write a program that allows user to insert integer then print all numbers between 1 to that’s number 

var numbers=prompt("enter any number");
for(var i=1; i<=numbers; i++){
    console.log(i);
}

// Q9Write a program that allows user to insert integer then print a multiplication table up to 12. 

var numbers=prompt("Enter any number");
for(i=1; i<=12;i++){
    console.log(numbers*i);
}

//Q10 Write a program that allows to user to insert number then print all even numbers between 1 to this number 

var numbers=prompt("Enter any number");
for (var i=1; i<=numbers;i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

// Q11 Write a program that take two integers then print the power

var num1=prompt("Enter num1 number");
var num2=prompt("Enter num2 number");
var result=1;
for (var i=0; i < num2; i++) {
    result *= num1;
  }
  console.log(result);

// Q12 Write a program to enter marks of five subjects and calculate total, average and percentage.

var sum=0,avg,pre;
for(var i=1;i<=5;i++){
var sub =Number(prompt(`Enter sub${i}`));
if(sub>=0&& sub<=100){
    sum+=sub;
}
}
console.log(sum);
console.log(sum/5);
console.log((sum/500)*100);


// Q13-Write a program to input month number and print number of days in that month.


var month = prompt("enter month number");
if (month == 2) {
    console.log('Number of days: 28 or 29 (leap year)');
  } else {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      console.log('Number of days: 30');
    } else {
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        console.log('Number of days: 31');
      } else {
        console.log('Invalid month number');
      }
    }
  }

//   Q14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

var physics = prompt('Enter marks for Physics: ');
var chemistry = prompt('Enter marks for Chemistry: ');
var biology = prompt('Enter marks for Biology: ');
var mathematics =prompt('Enter marks for Mathematics: ');
var computer = prompt('Enter marks for Computer: ');

var totalMarks = physics + chemistry + biology + mathematics + computer;
var percentage = (totalMarks / 500) * 100;

var grade;
if (percentage >= 90) {
  grade = 'A+';
} else {
  if (percentage >= 80) {
    grade = 'A';
  } else {
    if (percentage >= 70) {
      grade = 'B';
    } else {
      if (percentage >= 60) {
        grade = 'C';
      } else {
        if (percentage >= 50) {
          grade = 'D';
        } else {
          grade = 'F';
        }} } }}
console.log(`Grade: ${grade}`);

// Q15- Write a program to print total number of days in month

var month = prompt("Enter the month (1-12):");
var year=2023;
switch(month){
  case '1': 
  case '3': 
  case '5': 
  case '7': 
  case '8': 
  case '10': 
  case '12': 
 console.log(month,'31 days');
break;
  case '4': 
  case '6': 
  case '9':
  case '11': 
    console.log(month,'30 days');
break;
  case '2': 
if ((year %4==0 && year % 100!=0) || year % 400==0) {
      console.log(month,'29 days');
} else {
console.log(month,'28 days');
}
break;
default:
console.log("Invalid month");
}

// Q16- Write a program to check whether an alphabet is vowel or consonant  

var alphabet = prompt("Enter an alphabet:");

switch (alphabet) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(alphabet + " is a vowel.");
    break;
  default:
    console.log(alphabet + " is a consonant.");
}

// Q17- Write a program to find maximum between two numbers

var num1 = prompt("Enter Num1");
var num2 = prompt("Enter Num2");
switch(true) {
  case num1 > num2:
    console.log(num1); 
    break;
  case num2 > num1:
    console.log(num2); 
    break;
  default:
    result = 'The two numbers are equal.';
}

// Q18- Write a program to check whether a number is even or odd 

var number = prompt("Enter Number");

switch(number){
    case number %2==0 :
        console.log(numbers +  ' is even');
        break;
        default:
            console.log(numbers +  ' is odd');
}

// Q19- Write a program to check whether a number is positive or negative or zero

var number = prompt("check whether a number is positive or negative or zero");

switch (true) {
case number>0:
    console.log("positive");
   break;
case number<0 :
console.log("negative");
 break;
 case number==0:
    console.log("zero");
    break;
default:
console.log("not number");
}

// Q20- Write a program to create Simple Calculator 

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operator = prompt("Enter the operator (+, -, *, /):");
switch (operator) {
  case '+':
    console.log(num1+num2);
    break;
  case '-':
    console.log(num1-num2);
    break;
  case '*':
    console.log( num1*num2);
    break;
  case '/':
    if (num2 !== 0) {
      console.log(num1/num2);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
    break;
  default:
    console.log("Invalid operator.");
    break;
}















