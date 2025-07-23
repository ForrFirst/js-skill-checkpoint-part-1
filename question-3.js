// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let length = userPassword.length;
  
    if (length < 6) {
        return "Weak";
    }if (length <= 10) {
        return "Medium";
    }else {
        return "Strong";
    }
  }
  
/*
userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword));
userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword));
userPassword = "abcde"
console.log(checkPasswordStrength(userPassword));*/