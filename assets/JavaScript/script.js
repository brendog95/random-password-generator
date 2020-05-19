// Grabs the Id from the html document and assigns it a variable
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "123456789"
var symbol = "!@#$%^&*(){}<>/?"
var charNum = document.getElementById("charNum");
var number = document.getElementById("number");
var symbol = document.getElementById("symbol");
var genPassword = document.getElementById("generatebtn");
var yourPassword = document.getElementById("newPassword");

// randomizes the password for whatever characters are passed in
 function password(l,characters) {
    var pwd = ""
        for(var i = 0; i<l; i++) {
            pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
};
// Listens to the generate button and checks if num box and symbox are checked and then passes those values in
genPassword.addEventListener("click", function() {
    var characters = alpha;
        (number.checked) ? characters += num : '';
        (symbol.checked) ? characters += symbol : '';
             yourPassword.value = password(charNum.value, characters)
});

    


