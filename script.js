// Assignment Code
var generateBtn = document.querySelector("#generate");
var charTypes = {lower: false, upper: false, numeric: false, special: false}; 
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbChars = "1234567890";
var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passLength = getLength();
  console.log(passLength);

  var charsSelected = getCharTypes();
  console.log(charsSelected);
  
  var pass ="";
  for (i = 0; i < passLength; i++) {
    pass += charsSelected.charAt(Math.floor(Math.random() * charsSelected.length));
  }

  return pass;
}

function getLength() {
  var passLength = Number(prompt("How long would you like the password to be? \nPassword must be at least 8 characters and no more than 128 characters."));
  // validate if length is number and acceptable length

  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  } else {
    alert("Password must be at least 8 characters and no more than 128 characters.");
    getLength();
  }
}

function getCharTypes() {
  var passChars = "";

  charTypes.lower = confirm("Would you like to include lowercase characters?");
  console.log(charTypes.lower);
  charTypes.upper = confirm("Would you like to include uppercase characters?");
  console.log(charTypes.upper);
  charTypes.numeric = confirm("Would you like to include numeric characters?");
  console.log(charTypes.numeric);
  charTypes.special = confirm("Would you like to include special characters?");
  console.log(charTypes.special);

  // validate at least on has been selected
  if (!charTypes.lower && !charTypes.upper && !charTypes.numeric && !charTypes.special) {
    alert("You must select at least one character type to include.");
    getCharTypes();
  } else {
    if (charTypes.lower) {
      passChars += lowerChar;
    }
    if (charTypes.upper) {
      passChars += upperChar;
    }
    if (charTypes.numeric) {
      passChars += numbChars; 
    }
    if (charTypes.special) {
      passChars += specialChars;
    }
    return passChars;
  }
}




//Functionality:
  // Click button -> given critera prompts:
  // criteria selected -> input validated -> length prompts
  // length selected -> input validated -> char type's prompted
  // selected -> input validated 

  // all prompts answered -> password is generated -> password is displayed as alert 



  //GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

