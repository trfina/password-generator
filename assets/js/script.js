// Assignment code here
var generatePassword = function() {
  passwordLength = prompt("Enter the length (8 to 128 char) of the password you want to generate: ");
  console.log(passwordLength);

  chooseCharType ()
}

var chooseCharType = function() {
  
  var charTypePrompt = window.prompt("Choose Caracter Type: Enter 1 for lowercase, 2 for UPPERCASE, 3 for numeric, or 4 for special characters.");

  charTypePrompt = parseInt(charTypePrompt);
  
  switch  (charTypePrompt) {
    case 1:
      var lowerCase = true;
      console.log(lowerCase);
      break;
    case 2:
      var upperCase = true;
      console.log(upperCase);
      break;
    case 3:
      var numberType = true;
      console.log(numberType);
      break;
    case 4:
      var specialChar = true;
      console.log(specialChar)
      break;
    default:
      window.alert("you need to choose at least one character option");
      chooseCharType();
      break;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  generatePassword();
  var password = "peanut";
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generatePassword();
// generateBtn.addEventListener("click", writePassword);
