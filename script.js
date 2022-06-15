// Arrays for character types (special characters, numbers, upper and lowercase letters)
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "<", ">", "?", "`", "~"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Generate Password
function generatePassword() {
  // Stores the user input for password length
  var pwdLength; 
  // Prompts user to enter a password length
  pwdLength = window.prompt("Please enter the desired length of your password (More than 8 characters, less than 128)");

  // : Verify user input for password length is valid according to predefined criteria
  if(pwdLength < 8 || pwdLength > 128) {
  alert("You must choose a password length greater than 8 characters and less than 128 in length.");
  return null;
  }

  // Prompt user for if they want special characters & store it in a variable
  var useSpec = window.confirm("Would you like to use special characters?");
  // Prompt the user if they want numbers and store it in a variable
  var useNum = window.confirm("Would you like to use numbers?");
  // Prompt the user if they want lower case letters and store it in a variable
  var useLower = window.confirm("Would you like to use lower case letters?");
  // Prompt the user if they want upper case letters and store it in a variable
  var useUpper = window.confirm("Would you like to use upper case letters?");
  
  // : Validate that at least one character choice is true
  if( !useSpec && !useNum && !useLower && !useUpper ) {
    window.alert("You must select at least one character set to generate a password.");
    return null;
  }

  // Declare a new empty array to contain user input data
  var selectedChars = [];
  // : concat things into new container array
  if (useSpec) {
    selectedChars = selectedChars.concat(specChars);
  }
  if (useNum) {
    selectedChars = selectedChars.concat(numChars);
  }
  if (useLower) {
    selectedChars = selectedChars.concat(lowerChars);
  }
  if (useUpper) {
    selectedChars = selectedChars.concat(upperChars);
  }
  
  // : Add characters to a password container string
  var generatedPwd = "";

  for(var i=0; i < pwdLength; i++) {
    // : Randomly select characters
    generatedPwd += selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }
  return generatedPwd;
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
