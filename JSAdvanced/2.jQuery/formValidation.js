function validate() {
 $("#submit").click(valid)

    $("#company").click(function(){

        if( !$("#company").attr("checked")) {
            $("#companyInfo").css("display", "inline")
            $("#company").attr("checked", "true")
        }
        else{
            $("#companyInfo").css("display", "none")
            $("#company").removeAttr("checked")
        }
    })

    function valid() {
        let valid = 0;

        let username = $("#username").val()
        if(validUsername(username) == false){
            $("#username").css("border-color","red")
        }
        else{
            $("#username").css("border-color","none")
            valid++;
        }

        let email = $("#email").val()
        if(validEmail(email) == false){
            $("#email").css("border-color","red")
        }
        else{
            $("#email").css("border-color","none")
            valid++;
        }

        let password = $("#password").val()
        if(validPassword(password) == false){
            $("#password").css("border-color","red")
        }
        else{
            $("#password").css("border-color","none")
            valid++;
        }

        let confirmPass = $("#confirm-password").val()
        if(validPassword(confirmPass) == false){
            $("#confirm-password").css("border-color","red")
        }
        else{
            $("#confirm-password").css("border-color","none")
            valid++;
        }

        if(passwordEqual(password, confirmPass) == false){
            $("#password").css("border-color","red")
            $("#confirm-password").css("border-color","red")
        }
        else{
            $("#password").css("border-color","none")
            $("#confirm-password").css("border-color","none")
            valid++;
        }

        if($("#company").attr("checked")) {
            let companyNumber = $("#companyNumber").val();

            if(validCompanyNum(companyNumber) == false){
                $("#companyNumber").css("border-color","red")
            }
            else{
                $("#companyNumber").css("border-color","none")
                valid++;
            }
        }
        else{
            valid++;
        }

        if(valid == 6){
            $("#valid").css("display", "inline")
        }

    }

    function validUsername(username) {
        let regExp = /^[A-Za-z0-9]{3,20}$/
      if(regExp.test(username)){
          return true;
      }
        return false;
    }

    function validPassword(password) {
        let regExp = /^[A-Za-z0-9_]{5,15}$/
        if(regExp.test(password)){
            return true;
        }
        return false;
    }

    function passwordEqual(password, confirmPass) {
        if(password==confirmPass){
            return true;
        }
        return false;
    }

    function validEmail(email) {
        if(email.indexOf("@")>=0){
            if(email.indexOf(".", email.indexOf("@"))>=0)
            return true;
        }
        return false;
    }

    function validCompanyNum(companyNum) {
        if(Number(companyNum)>=1000 && Number(companyNum)<=9999){
                return true;
        }
        return false;
    }
}
