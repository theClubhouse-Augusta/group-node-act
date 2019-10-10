//this creates input magic :)
//var phoneNumber = document.getElementById("phone#").value;


    document.getElementById("submit").addEventListener("click", function(){
        var name = document.getElementById("fullname").value;
        var firDigits = document.getElementById("phoneOne").value;
        var secDigits = document.getElementById("phoneTwo").value;
        var thirDigits = document.getElementById("phoneThree").value;

        
        document.getElementById("result").innerHTML = name;
    });

