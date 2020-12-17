function validateRegex(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

function validateEmail() {
    const email = document.getElementById('email').value;
    if (validateRegex(email)) {
        accept('email');
        return true;
    } else {
        decline('email');
        return false;
    }
    return false;
}

function validate() {
    return validateEmail() & validateNumber();
}
function validateNumber() {
    const number = document.getElementById('number').value;
    if(number>=1 && number<=10) {
        accept('number');
        return true;
    }
    else {
        decline('number');
        return false;
    }
    return false;

}

function accept(element) {
    document.getElementById(element).style.backgroundColor="green";
}
function decline(element) {
    document.getElementById(element).style.backgroundColor="red";
}
