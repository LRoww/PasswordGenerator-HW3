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

