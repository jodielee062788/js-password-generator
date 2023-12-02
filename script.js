// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // prompt for password length
  var passwordLength = promptPasswordLength();
  
  // prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // validate character type selection
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type should be selected. Please try again.");
    return;
  }

  // generate password
  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  // display password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to prompt for password length
function promptPasswordLength() {
  var length;
  do {
    length = parseInt(prompt("Please specify the desired length for your password. At least 8 characters and no more than 128 characters."));
  } while (isNaN(length) || length < 8 || length > 128);

  return length;
}

// Function to generate password based on criteria
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var characterSet = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

  if (includeLowercase) {
    characterSet += lowercaseChars;
  }

  if (includeUppercase) {
    characterSet += uppercaseChars;
  }

  if (includeNumeric) {
    characterSet += numericChars;
  }

  if (includeSpecial) {
    characterSet += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
