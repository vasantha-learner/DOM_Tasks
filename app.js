// 1)Even or Odd Number – Take a number and check whether it is even or odd.

// let x=10
// if(x%2==0){
//     console.log("Even")
// }

// 2)Positive, Negative, or Zero – Input a number and print whether it is positive, negative, or zero.

// let x=prompt("Enter a number:")
// if(x>0){
//     console.log("Positive")
    
// } else if (x<0){
//     console.log("Negative")
    
// }
// else{
//     console.log("Zero")
// }

// 3)Check Voting Eligibility – Ask for age and display 'Eligible to vote' if age ≥ 18, otherwise 'Not eligible'.

// let age=prompt("Enter Your age:")
// if(age>=18){
//     console.log("You are Eligible for Vote")
// }
// else{
//     console.log("U r not eligible.")
// }

// 4)Find Greater Number – Take two numbers and print which one is greater.

// let num1=prompt("Enter a number:")
// let num2=prompt("Enter another number:")
// if(num1>num2){
//     console.log("Num1 is Greater")
// }else{
//     console.log("Num2 is greater")
// }

// 5)Divisible by 5 or Not – Check if a number is divisible by 5 and display the result.

// let x=25
// if(x%5==0){
//     console.log("Divisible by 5")
// }else{
//    console.log("Not Divisible by 5") 
// }

// 6)Check Leap Year – Input a year and check whether it is a leap year or not.


// 7)Check Vowel or Consonant – Input a single character and check whether it’s a vowel or consonant.

// let x =prompt("enter a charcater:")
// let vowels="aeiouAEIOU"
// if(vowels.includes(x)){
//     console.log("vowel")
// }else{
//     console.log("consonant")
// }

// 1)Student Grade – Input marks (0–100) and print grade: 90–100 → A, 75–89 → B, 50–74 → C, Below 50 → Fail.


// let x=prompt("Enter students marks(0-100):")
// if(x<100 && x>=90){
//     console.log("Grade A")
    
// } else if (x<89 && x>=75){
//     console.log("Grade B")
    
// }
// else if (x<74 && x>=50){
//     console.log("Grade C")
    
// }
// else{
//     console.log("Fail")
// }



// 2)Largest of Three Numbers – Take three numbers and print the largest one.

// let num1=prompt("Enter num1:")
// let num2=prompt("Enter num2:")
// let num3=prompt("Enter num3:")
// if(num1>num2 && num1>num3){
//     console.log("num1 is greater")
    
// } else if (num2>num1 && num2>num3){
//     console.log("num2 is greater")
    
// }
// else{
//     console.log("num3 is greater")
// }


// 3)Traffic Light System – Input a color (red, yellow, green) and display: red → Stop, yellow →  Ready, green → Go.


// let color=prompt("Enter Traffic Light color:")
// if(color=='red'){
//     console.log("Stop")
// }
// else if(color=='Yellow'){
//     console.log(Ready)
// }
// else if(color=='Green'){
//     console.log("Go")
// }else{
//     console.log("Please Enter Proper Traffic signal color")
// }



// 4)Day of the Week – Input a number (1–7) and display the day name using a switch statement.


// let num1=prompt("Enter a number(1-7):")
// num1=Number(num1)
// switch (num1){
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//      case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
        // console.log("Saturday")
   
// }


// 5)Simple Calculator – Take two numbers and an operator (+, -, *, /) and perform the operation using switch.


// let num1=prompt("Enter a symbol(+,-,*,/) which ooperation tou want to perform:")
// let a=Number(prompt("Enter a number:"))
// let b=Number(prompt("Enter a number:"))
// switch (num1){
//     case "+":
//         console.log(a + b)
//         break;
//     case "-":
//         console.log(a-b)
//         break;
//     case "*":
//         console.log(a*b)
//         break;
//     case "/":
//         console.log(a/b)
//         break;
// }



// 6)Pass or Fail (Ternary Operator) – Input marks and use a ternary operator to print 'Pass' if marks ≥ 40, else 'Fail'.


// let x=prompt("Enter Your marks:")
// let result=console.log((x>=40)?"Pass": "Fail")


// 7)Check Number Range – Input a number and check if it is between 1–100.


// let num1=prompt("Enter a number:")
// if(num1>1 && num1<=100){
//     console.log("The number range between(1-100)")
// }
// else{
//      console.log("The number range not between(1-100)")
// }


