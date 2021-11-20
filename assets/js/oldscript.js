
// get length of password to generate
var generatePassword = function() {
  passwordLength = prompt("Enter the length (8 to 128 char) of the password you want to generate: ");
  console.log(passwordLength);

// choose which character type options to include in password
  chooseCharType ();
   
};

var chooseCharType = function() {
  
  var charTypePrompt = window.prompt("Choose Character Type: Enter 1 for lowercase, 2 for UPPERCASE, 3 for numeric, or 4 for special characters.");
 
  charTypePrompt = parseInt(charTypePrompt);
  
  do 
    switch  (charTypePrompt) {
      case 1:
        window.alert("You have chosen to include lowercase characters.");
        lowerCaseInclude = true;
        charTypeConfirmAnother = window.confirm("Add another option?");
      
        break;
      case 2:
        window.alert("You have chosen to include UPPERCASE characters.");
        var upperCaseInclude = true;
        charTypeConfirmAnother = window.confirm("Add another option?");
        break;
      case 3:
        window.alert("You have chosen to include numbers.");
        var numberInclude = true;
        charTypeConfirmAnother = window.confirm("Add another option?");
        break;
      case 4:
        window.alert("You have chosen to include special characters.");
        var specialCharInclude = true;
        charTypeConfirmAnother = window.confirm("Add another option?");
      break;
    default:
      window.alert("you need to choose at least one character option");
      chooseCharType();
      break;
    }
  while (charTypeConfirmAnother);
    
  
      // repeat the process of choosing options for the password until user cancels
    //do {
    //  chooseCharType()
    //}
    //while (charTypeConfirmAnother);
    console.log("exiting switch " + " lc " + lowerCaseInclude + " uc " + upperCaseInclude + " ni " + numberInclude +  " sc " + specialCharInclude);

    if ((lowerCaseInclude) & (upperCaseInclude) & (numberInclude) & (specialCharInclude)) {
      window.alert("Your password will include lowercase, UPPERCASE, numbers and Special Characters.");
      console.log("all 4 options message success... add logic for other options");
    }

  };
  
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
var lowerCaseInclude, upperCaseInclude, numberInclude, specialCharInclude =  false;
generatePassword();
// generateBtn.addEventListener("click", writePassword);
