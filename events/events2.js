$(document).ready(function(){
    $("#ticket").click(function(){
        var name=$("#fname").val();
        var email=$("#email").val();
        var address=$("#adr").val();
        var city=$("#city").val();
        var zip=$("#zip").val();
        if (name==""&& email=="" && address=="" && city=="" && zip==""){
            alert("Please fill in your details");
        }
        else {
            alert(" Hello "+name + " Thank you for choosing us, You will receive an email with your billing information shortly. ")

        }

})

    })

