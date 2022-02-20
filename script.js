var NameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').Value;

    if (name.lenght == 0) {
        NameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        name.Error.innerHTML = 'Write full name';
        return false;
    }
    name.Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone() {
    var name = document.getElementById('contact-phone').Value;

    if (phone.lenght == 0) {
        NameError.innerHTML = 'Phone no is required';
        return false;
    }
    if (phone.lenght !== 8) {
        NameError.innerHTML = 'Phone no should be atleast 8 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{8}[A-Za-z]$/)) {
        phoneError.Error.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateEmail() {
    var name = document.getElementById('contact-email').Value;

    if (email.lenght == 0) {
        NameError.innerHTML = 'Phone no is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.Error.innerHTML = 'Email invalid';
        return false;
    }
    emailError.Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateMessage() {
    var name = document.getElementById('contact-message').Value;
    var required = 30;
    var left = required - message.lenght;

    if (left > 0) {
        messageError.innerHTML = 'more character required';
        return false;
    }
    messageError.Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateForm() {
    if (!validateName() || !validatePhone || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error  to submit';
        return false;
    }
};