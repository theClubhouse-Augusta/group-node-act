module = {};
module.exports = exports = {};
validateInputs = function(firstName, areaCode, firstThree, lastFour){
    var nameValidator = new RegExp("^[A-Z][^(0-9)#&<>\"~;$^%{}?+=()]{1,40}$");
    var threeValidator = new RegExp("^[0-9]{3}$");
    var fourValidator = new RegExp("^[0-9]{4}$");
    if(!nameValidator.test(firstName)){
        if(firstName.length > 40) {
            alert("Name must be no longer than 40 characters");
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
exports.validateInputs = validateInputs;