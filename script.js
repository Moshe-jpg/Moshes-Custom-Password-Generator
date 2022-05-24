// Assignment code here
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specialChars = ["!@#$%^&*()_<>?|"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomChar(array){
  
}

function generatePassword(){
  var results = "";
  var charSet = "";

  // 1. Prompts for criteria to generate password
    // a. How many characters between 8 & 128?
    const passwordLength = window.prompt("How many characters (8 - 128)?")
    
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters.")
        return ""
    }

    // b. Special characters?
    const specChars = window.confirm("Would you like to include special characters?")

    if (specChars){
       charSet = charSet.concat(specialChars);
       console.log("Confirmed special chars");
     }
    else {
      console.log("Denied special chars");
    }
    // c. Uppercase?
    const upperChars = window.confirm("Would you like to include upper case characters?")

    if (upperChars){
      charSet = charSet.concat(upperCase);
      console.log("Confirmed uppercase");
    }
    else {
      console.log("Denied uppercase");
    }
    // d. Lowercase?
    const lowerChars = window.confirm("Would you like to include lower case characters?")

    if (lowerChars){
      charSet = charSet.concat(lowerCase);
      console.log("Confirmed lowercase");
    }
    else {
      console.log("Denied lowercase");
    }
    // e. Numbers?
    charSet = charSet.concat(numbers);

    const characterSetArray = charSet.split("")

    for ( var i = 0; i < passwordLength; i++ ) {
        results += characterSetArray[Math.floor(Math.random() * characterSetArray.length)];
     }

    return results;

}
  // 2. Validate criteria
  // 3. Return password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
