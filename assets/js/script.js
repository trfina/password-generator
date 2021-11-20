let lowerCaseConfirm = false; 
let upperCaseConfirm = false;
let numberConfirm = false;
let specialCharConfirm =  false;
let passwordLength = 8;
let charList = "";


// get length of password to generate and validate that is a number between 7 and 129
var generatePassword = function() {
  passwordLength = prompt("Enter the length (8 to 128 char) of the password you want to generate: ");
  console.log(passwordLength);
  console.log(lowerCaseConfirm, upperCaseConfirm, numberConfirm, specialCharConfirm);

  extractPassword();
  createString();
};

// create string of characters to use in password
var extractPassword = function() {
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  
  var lowerCaseConfirm = window.confirm("Would you like lowercase letters in your password?");
    console.log("lowercase selected - " + lowerCaseConfirm);
  var upperCaseConfirm = window.confirm("Would you like UPPERCASE letters in your password?");
    console.log("UPPERCASE selected - " + upperCaseConfirm);
  var numberConfirm = window.confirm("Would you like numbers in your password?");
    console.log("numbers selected - " + numberConfirm);
  var specialCharConfirm = window.confirm("Would you like special characters in you password?");
    console.log("special characters selected - " + specialCharConfirm);

  
  console.log(lowerCaseConfirm);
  if (lowerCaseConfirm) {
    charList += lowerCaseChars;
    console.log(charList);
  }

  if (upperCaseConfirm) {
    charList += upperCaseChars;
    console.log(charList);
  }

  if (numberConfirm) {
    charList +=  numberChars;
    console.log(charList);
  } 

  if (specialCharConfirm) {
    charList +=  specialChars;
    console.log(charList);
  }
};

// use string of characters created in extractPassword and create a password the length the user wants
var createString= function() {
  console.log("Characters to use in password: " + charList);
  console.log("Password length: " + passwordLength);
  const charListLength = charList.length;
  console.log("Character set length: " + charListLength);


  //function to generate password with required parameters
  function generateString() {

    for (var i = 0; i < passwordLength; i++) {
      finalPw += charList.charAt(Math.random()*charListLength);
      console.log(finalPw);
    }
    return finalPw;
    console.log(" is the generated password" + finalPw);
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = "peanut";
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate butto
generatePassword();
// generateBtn.addEventListener("click", writePassword);
