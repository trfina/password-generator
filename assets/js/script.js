let lowerCaseConfirm = false; 
let upperCaseConfirm = false;
let numberConfirm = false;
let specialCharConfirm =  false;
let passwordLength = "";
let charList = "";
let password = "";
let selectAtLeastOne = false;

// create string of characters to use in random password based on user selection
var extractPasswordChars = function() {
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  
  var lowerCaseConfirm = window.confirm("Would you like lowercase letters in your password?");
    //console.log("lowercase selected - " + lowerCaseConfirm);
  var upperCaseConfirm = window.confirm("Would you like UPPERCASE letters in your password?");
    //console.log("UPPERCASE selected - " + upperCaseConfirm);
  var numberConfirm = window.confirm("Would you like numbers in your password?");
    //console.log("numbers selected - " + numberConfirm);
  var specialCharConfirm = window.confirm("Would you like special characters in you password?");
    //console.log("special characters selected - " + specialCharConfirm);

  // charList starts as an  empty string; charList+= concatenates each string type that the user wants to use in the passwor generator    
  if (lowerCaseConfirm) {
    charList += lowerCaseChars;
    //console.log(charList);
  }

  if (upperCaseConfirm) {
    charList += upperCaseChars;
    //console.log(charList);
  }

  if (numberConfirm) {
    charList +=  numberChars;
    //console.log(charList);
  } 

  if (specialCharConfirm) {
    charList +=  specialChars;
    //console.log(charList);
  }

  //check to make sure at least one string option is selected for the password generation
if ((!lowerCaseConfirm) & (!upperCaseConfirm) & (!numberConfirm) & (!specialCharConfirm)) {
    window.alert("Please select at least one character option");
    extractPasswordChars();
  } 

};

// use string of characters created in extractPasswordChars  and create a password the length the user wants
var createPasswordString= function() {
  //console.log("Characters to use in password: " + charList);
  //console.log("Password length: " + passwordLength);
  
  // get the length of the possible characters for the password
  const charListLength = charList.length;
  //console.log("Character set length: " + charListLength);


  //function to generate password with required parameters
  function generateString() {

    // this for loop randomly chooses a character from the selected desired string characters and  concatenates it character by character into the final password string
    for (var i = 0; i < passwordLength; i++) {
      password += charList.charAt(Math.random()*charListLength);
      console.log(password);
    }
    // return password;
    console.log(" is the generated password" + password);
  }

  generateString();

};

// Write password to the #password input
function writePassword() {

  // get length of password to generate and validate that it is a number between 7 and 129 AND is an integer
  var invalidPassword = true; 

  while (invalidPassword) {
    passwordLength = prompt("Enter a number from 8 to 128 for the length of the password you want to create.");
    //console.log(passwordLength);

    if (!isNaN(passwordLength)) {
      if (passwordLength < 8) {
        window.alert("Enter a password at least 8 characters long.");
        //console.log("length less than 8");
        //console.log(invalidPassword);
      } 
      else if (passwordLength > 128) {
        window.alert("Enter a password no more than 128 characters long");
        //console.log("length greater than128");
        //console.log(invalidPassword);
      } 
      else {
        invalidPassword = false;
        /console.log(invalidPassword);
      }
    }
    else {
      window.alert("Enter a valid number");
      //console.log("not a number");
    }
  } //end while loop
  //console.log("exiting while");
  extractPasswordChars();
  createPasswordString();
  //password = charList;
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
  //console.log(password); 
}; //end writePassword function

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

