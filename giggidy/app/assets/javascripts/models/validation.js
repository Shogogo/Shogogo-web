function phoneValidator() {
    var inputNumber = document.forms["user"]["phone_number"].value;
    var validNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputNumber.match(validNumber)) {
        return true;
    }
    else
    {
        alert("Please enter a valid 10 digit US phone number.");
        return false;
    }
}