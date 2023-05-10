// Assignment code here
var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split("")
var enter;
var confirmNum;
var confirmChar;
var confirmUppercase;
var confirmLowercase;

// prompt:length of password 8 characters to 128 characters
// prompt: series of prompts to include lowercase, uppercase, numeric, and or special characters
//at least one charcter type should be selected
// password generated



function generatePassword() {
  enter = (prompt("Please choose between 8 and 128!"));


  if(!enter) {
    alert ("This needs a value");
    return generatePassword();
  } else if (enter < 8 || enter > 128) {
enter = (prompt("You must choose between 8 and 128 characters!"));
  } else {
      confirmNum = confirm("Will this contain numbers?");
      confirmChar = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  }


  if (!confirmChar && !confirmNum && !confirmUppercase && !confirmLowercase) {
    choices =alert("Must choose a criteria!");
    return generatePassword();
  }
  
var password = "";
var characterPool = [];

if (confirmNum) {
  characterPool = characterPool.concat('0123456789'.split(""));
}
if (confirmChar) {
  characterPool = characterPool.concat('!@#$%^&*()'.split(""));
}
if (confirmUppercase) {
  characterPool = characterPool.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""));
}
if (confirmLowercase) {
  characterPool = characterPool.concat('abcdefghijklmnopqrstuvwxyz'.split(""));
}

for (var i = 0; i < enter; i++) {
  var randomIndex = Math.floor(Math.random() * characterPool.length);
  password += characterPool[randomIndex];
}

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

