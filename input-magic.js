//this creates input magic :)
//validates the phone number...
validateInputs = function(firstName, areaCode, firstThree, lastFour){
    var nameValidator = new RegExp("^[A-Z][^(0-9)#&<>\"~;$^%{}?+=()]{1,40}$");
    var threeValidator = new RegExp("^[0-9]{3}$");
    var fourValidator = new RegExp("^[0-9]{4}$");
    if(!nameValidator.test(firstName)){
        if(firstName.length > 40) {
            alert("Name must be no longer than 40 characters");
        } else if (firstName.length > 0 && (firstName.charAt(0) == firstName.charAt(0).toLowerCase())) {
            alert("First letter of name needs to be capitalized");
        } else {
            alert("Name cannot contain special characters");
        }
        return false;
    }
    if(!threeValidator.test(areaCode) || !threeValidator.test(firstThree) || !fourValidator.test(lastFour)) {
        alert("Please enter a valid phone number");
        return false;
    }
    return true;
}

//get's input from fields and prints them on page...
    document.getElementById("submit").addEventListener("click", function(){
        var firstName = document.getElementById("fullname").value;
        var areaCode = document.getElementById("phone#1").value;
        var firstThree = document.getElementById("phone#2").value;
        var lastFour = document.getElementById("phone#3").value;

        if(validateInputs(firstName, areaCode, firstThree, lastFour)){
            document.getElementById("result").innerHTML = firstName + ": " + "(" + areaCode + ") " + firstThree + "-" + lastFour;
            return;
        }
    });