// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// combination of all arrays
var combArr = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters, numericCharacters);

var passCode = [];



// Function to prompt user for password options
function getPasswordOptions() {
// lenQuestion
  var lenQuestion = parseInt(prompt("how many characters do you want in your password?"))

if (lenQuestion > 64) {
  lenQuestion = parseInt(prompt("maximum password length is 64, please select another length"))

} else if (lenQuestion < 10) {
  lenQuestion = parseInt(prompt("minimum password length is 10, please select another length"))

}
var x = lenQuestion
return x
};



// Function for getting a random element from an array
function getRandom(arr) {
  var randNum = Math.floor(Math.random() * arr.length)
  return (arr[randNum])
};


// Function to generate password with user input
function generatePassword() {
  var lenPw = getPasswordOptions();
  for(var i = 0; i < lenPw; i++){
    var val = getRandom(combArr)
    console.log(val)
  
    passCode.push(val)
    combArr.splice(val, 1)

} 
console.log(passCode)
var passCode_ = passCode.join('')
console.log(passCode_)
return passCode_

}
// console.log(passCode)


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
