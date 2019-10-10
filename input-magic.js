//this creates input magic :)
const validation = require('./validationTesting.js');

    document.getElementById("submit").addEventListener("click", function(){
        var firstName = document.getElementById("fullname").value;
        var areaCode = document.getElementById("phoneOne").value;
        var firstThree = document.getElementById("phoneTwo").value;
        var lastFour = document.getElementById("phoneThree").value;

        if(validation.validateInputs(firstName, areaCode, firstThree, lastFour)){
            return document.getElementById("result").innerHTML = firstName + ": " + "(" + areaCode + ") " + firstThree + "-" + lastFour;
            return true;
        }
    });

