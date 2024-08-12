// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user = prompt("What's is the day of the week?")
user= user.toLowerCase() // change string to be lower case

if(user === "saturday" || user === "Sunday"){
  console.log("It's the weekend, yay!!!")
}else {
  console.log("It's a week day, yay school!!!!")
}


// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = propmt("What is your age?")
parseInt(age)
//console.log(typeof age)
if (age <= 0){
  console.log("That's not an age")
}else if (age <= 12){
  console.log("You are a child!")
} else if(age <= 18){
  conole.log("You are a teen.")
} else {
  console.log("RIP you had a nice life")
}


// WHILE LOOPS
// Print 1 to 5
let i = 1
while(i <= 5){
  console.log(i)
  i++
}


// Print from a certain number to 1
let user2 = prompt("Enter a number")
user = parseInt(user2)
while(user2 > 0){
  console.log(user2)
  user2-- // USer -= Or user - 1
}


// Summing up to 5
let sum = 0 // We will be adding numbers to this variable
let counter = 1

//sum: 1 + 2 + 3 + 4 +5
while(counter <= 5){
  sum = counter + sum //sum += counter
  counter++
}
console.log("Sum of 1-5", sum)



// Using prompt
let mysteryStudent = "zyair"
let user3 = propmt("Enter a stedents's name")
//While what the user entered ISN'T my mysteryStudent, keep running
while(mysteryStudent !== user3.toLowerCase()){
  //We have to RE-ASSIGN user to be the new value
  user3 = prompt("Try again, guess a different students.")
}
console.log("Good Job")



