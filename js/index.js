var phone = document.getElementById("phone");

function validate() {
    //using regex
    var num = /^\d{10}$/;
    if (!(phone.value).match(num)) {
        window.alert("Enter correct 10 digit number")
        phone.focus();
        return false;
    }
}