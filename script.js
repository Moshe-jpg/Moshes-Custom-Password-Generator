// Assignment code here
var results = "";
var charSet = "";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()_<>?|";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // 1. Prompts for criteria to generate password
    // a. How many characters between 8 & 128?
    const passwordLength = window.prompt("How many characters (8 - 128)?")
    
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters.")
        return
    };

    // if (passwordLength >= 8 && passwordLength <= 128){
      
    // }

    // b. Special characters?
    const specChars = window.confirm("Would you like to include special characters?")

    if (specChars == true){
      charSet = charSet.concat(specialChars) && console.log("Confirmed special chars");
    }
    else {
      console.log("Denied special chars");
    }
    // c. Uppercase?
    const upperChars = window.confirm("Would you like to include upper case characters?")

    if (upperChars == true){
      charSet = charSet.concat(upperCase) && console.log("Confirmed uppercase");
    }
    else {
      console.log("Denied uppercase");
    };
    // d. Lowercase?
    // e. Numbers?
  // 2. Validate criteria
  // 3. Return password





  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
