let number = parseInt(prompt("input number"))
function checkNumber() {
    if (number < 2) {
        alert("Day ko phai la so nguyen to")
    } else if (number == 2) {
        alert("day la so nguyen to")
    }  else {
        let count = 0;
        for (let i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                count++;
            }
        }
        if (count > 0) {
            alert("Day ko phai la so nguyen to")
        } else {
            alert("day la so nguyen to")
        }
    }
}

checkNumber();