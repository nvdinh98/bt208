let number = parseInt(prompt("input number"))
function checkNumber() {
    if (number < 2) {
        alert("Day ko phai la so nguyen to")
    } else if (number == 2) {
        alert("day la so nguyen to")
    }  else {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                alert("Day ko phai la so nguyen to")
                break;
            } else {
                alert("day la so nguyen to")
            }
        }
    }
}
checkNumber();