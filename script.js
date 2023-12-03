// assignment Code
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
  // prompt for password length
  var passwordLength = promptPasswordLength();
  
  // prompt for character types
  var passwordLowercase = confirm("Include lowercase characters?");
  var passwordUppercase = confirm("Include uppercase characters?");
  var passwordNumeric = confirm("Include numeric characters?");
  var passwordSpecial = confirm("Include special characters?");

  // validate character type selection
  if (!passwordLowercase && !passwordUppercase && ! passwordNumeric && !passwordSpecial) {
    alert("At least one character type should be selected. Please try again.");
    return;
  }

  // generate password
  var password = generatePassword(passwordLength, passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial);

  // display password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to prompt for password length
function promptPasswordLength() {
  var length;

  // parseInt is used to convert user input to integer
  while (true) {
    length = parseInt(prompt("Please specify the desired length for your password. Enter a number between 8 and 128."));

    // validate input
    if (!isNaN(length) && length >= 8 && length <= 128) {
      break;  // Break the loop if the input is valid
    } else {
      alert("Invalid input. Please enter a number between 8 and 128.");
    }
  }
  return length;
}

// function to generate password based on criteria
function generatePassword(length, passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial) {
  var passwordChar = ""; // To store the set of characters based on user's preference
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

  // if true, character will be added to passwordChar
  if (passwordLowercase) {
    passwordChar += lowercaseChar;
  }

  if (passwordUppercase) {
    passwordChar += uppercaseChar;
  }

  if (passwordNumeric) {
    passwordChar += numericChar;
  }

  if (passwordSpecial) {
    passwordChar += specialChar;
  }

  var password = ""; // To store generated password

  // Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive)
  // Math.floor() rounds it down to the nearest integer
  // The charAt() method is a String method that returns the character at a specified index in a string.
  for (var i = 0; i < length; i++) {
    password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
