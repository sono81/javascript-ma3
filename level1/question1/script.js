// Phone Verification: 

function checkNumber(numberInput) {
    var regPhone = /^\d{8}$/;
    if (numberInput.value.match(regPhone)) {
        console.log(numberInput.value + ' Is a valid number.');
    } else {
        console.log(numberInput.value + ', Not a valid number.');
    }
};


// E-mail verification:

function checkMail(emailInput) {
    var regMail = /^[a-zA-Z0-9-_.]+@[a-zA-Z-.]+\.[a-zA-Z]{2,5}$/;
    if (emailInput.value.match(regMail)) {
        console.log(emailInput.value + 'Is a valid email');
    } else {
        console.log(emailInput.value + 'Is not a valid email')
    }
};