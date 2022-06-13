// Arrays for character types (numbers, spec chars, upper and lowercase alpha)
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "<", ">", "?", "`", "~"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Generate Password
function generatePassword() {

  // Prompt the user for password length and store it in a variable
  var pwdLength; 
  
  // Verify user input for password length is valid according to predefined criteria

  // if(pwdLength < 8 || pwdLength > 128) {
  // alert("You must choose a password length greater than 8 characters and less than 128 in length.")
  // }; 

  // Prompt user for if they want special characters & store it in a variable
  var specBank;

  // Prompt the user if they want numbers and store it in a variable
  var numBank;

  // Prompt the user if they want lower case letters and store it in a variable
  var lowerBank;

  // Prompt the user if they want upper case letters and store it in a variable
  var upperBank;

  // Validate that at least one character choice is true
  // if( !pwdLength && !specBank && !numBank && !lowerBank && !upperBank) {
  //   // Alert the user they had bad data
  // }

  // Declare a new empty array to contain user input data

  // concat things into new container array
  
  // for(var i=0; i < passwordLength; i++)
    
    // Randomly select characters
    // Adding character to a building password string
    // RETURN the completed string

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
