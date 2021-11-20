let lowerCaseConfirm = false; 
let upperCaseConfirm = false;
let numberConfirm = false;
let specialCharConfirm =  false;
let passwordLength = 8;
let charList = "";
let password = "";


// get length of password to generate and validate that is a number between 7 and 129
var generatePassword = function() {
  passwordLength = prompt("Enter the length (8 to 128 char) of the password you want to generate: ");
  console.log(passwordLength);
  console.log(lowerCaseConfirm, upperCaseConfirm, numberConfirm, specialCharConfirm);

  extractPasswordChars();
  createPasswordString();
 
};

// create string of characters to use in password
var extractPasswordChars = function() {
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
var createPasswordString= function() {
  console.log("Characters to use in password: " + charList);
  console.log("Password length: " + passwordLength);
  
  const charListLength = charList.length;
  console.log("Character set length: " + charListLength);


  //function to generate password with required parameters
  function generateString() {

    for (var i = 0; i < passwordLength; i++) {
      password += charList.charAt(Math.random()*charListLength);
      console.log(password);
    }
    // return finalPw;
    console.log(" is the generated password" + password);
  }

  generateString();
  window.alert("Your password is : " + password);
};


// Write password to the #password input
 var writePassword = function() {
  generatePassword();
  // passwordText.value = password;
  // var passwordText = document.querySelector(password);
  window.alert("Your password is : " + password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword());
