// Assignment Code
function init() {

var generateBtn = document.querySelector("#generate");
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "123456789"
var symbol = "!@#$%^&*(){}<>/?"

var charNum = document.getElementById(charNum);
var number = document.getElementById(number);
var symbol = document.getElementById(symbol);
var genPassword = document.getElementById(generateBtn);
var yourPassword = document.getElementById(newPassword);

// Write password to the #password input

 function password(l,characters) {

    var pwd = ""

    for(var i = 0; i<l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

genPassword.addEventListener("click", function(event) {
    var characters = alpha;
    (number.checked) ? characters += num : ""
    (symbol.checked) ? characters += symbol : ""
     yourPassword.value = password(charNum.value, characters)

});

}








      


// Add event listener to generate button