class Option{

    static #instance = null;

    static getInstance(){

        if(this.#instance == null){
            this.#instance = new Option();
        }

        return this.#instance;

    }

    constructor(){

        this.getEmail();
        this.getAddress();
        this.cancel();

    }

    getEmail(){

        const emailSelect = document.querySelector(".emailDomain");

        emailSelect.onchange = () => {

            const inputEmail = document.querySelectorAll(".account-input")[4].value;

            if(inputEmail.includes("@")){

                document.querySelectorAll(".account-input")[4].value = inputEmail.substr(0, inputEmail.indexOf("@")) + emailSelect.value;
            
            }else {
               
                document.querySelectorAll(".account-input")[4].value += emailSelect.value;
            
            }

        }

    }

    getAddress(){

        const postSearchBtn = document.querySelector(".btn-postsearch");

        postSearchBtn.onclick = () => {

            new daum.Postcode({

                oncomplete: function(data) {
                    var addr = '';
            
                    if (data.userSelectedType === 'R'){

                        addr = data.roadAddress;

                    }else {

                        addr = data.jibunAddress;

                    }
                    
                    document.getElementById("postcode").value = data.zonecode;
                    document.getElementById("address").value = addr;
            
                    document.getElementById("addressSub").focus();
                }

            }).open();

        }
    }

    cancel() {

        const cancelButton = document.querySelector(".btn-cancel");
    
        cancelButton.onclick = () => {

            location.href = "/main";

        }

    }

}

class InputData{

    static #instance = null;
    
    static getInstance(){

        if(this.#instance == null){
            this.#instance = new InputData();
        }

        return this.#instance;
    }

    getRegisterApi(){
        const joinButton = document.querySelector(".btn-join");

        joinButton.onclick = () => {

            ErrorMessage.getInstance().nonError();
            ErrorMessage.getInstance().nonErrorMsg();


            const user = {
                "username" : document.querySelectorAll(".account-input")[0].value,
                "password" : document.querySelectorAll(".account-input")[1].value,
                "passwordChk" : document.querySelectorAll(".account-input")[2].value,
                "name" : document.querySelectorAll(".account-input")[3].value,
                "email" : document.querySelectorAll(".account-input")[4].value,
                "phone" : document.querySelectorAll(".account-input")[5].value,
                "postcode" : document.querySelectorAll(".account-input")[6].value,
                "address" : document.querySelectorAll(".account-input")[7].value,
                "addressSub" : document.querySelectorAll(".account-input")[8].value
            }

            $.ajax({
                async: false,
                type: "post",
                url: "/api/account/register",
                contentType: "application/json",
                data: JSON.stringify(user),
                dataType: "json",
                success: (response, textStatus, request) => {
                    alert("회원가입 요청 성공");
                    console.log(response);
                    const successURI = request.getResponseHeader("Location");
                    location.replace(successURI + "?username=" + response.data);
                },
                error: (error) => {
                    console.log(error.responseJSON.data);
                    ErrorMessage.getInstance().loadErrorMessage(error.responseJSON.data);
                }
            });

        }
    }
}

class ErrorMessage{

    static #instance = null;
    
    static getInstance(){

        if(this.#instance == null){
            this.#instance = new ErrorMessage();
        }

        return this.#instance;
    }

    loadErrorMessage(errors){

        const errorKeys = Object.keys(errors);
        const errorValues = Object.values(errors);



        for(let i = 0; i < errorKeys.length; i++){
            
            if(errorKeys[i] == "username"){

                const usernameError = document.querySelectorAll(".account-input")[0];
                usernameError.classList.add("inputs-invisible");

                const usernameErrorMsg = document.querySelectorAll(".error-message")[0];
                usernameErrorMsg.innerHTML = `${errorValues[i]}`;
                console.log(errorValues[i]);
            }else if(errorKeys[i] == "password"){

                const passwordError = document.querySelectorAll(".account-input")[1];
                passwordError.classList.add("inputs-invisible");

                const passwordErrorMsg = document.querySelectorAll(".error-message")[1];
                passwordErrorMsg.innerHTML = `${errorValues[i]}`;
                console.log(errorValues[i]);
            }else if(errorKeys[i] == "passwordChk"){

                const passwordChkError = document.querySelectorAll(".account-input")[2];
                passwordChkError.classList.add("inputs-invisible");

                const passwordChkErrorMsg = document.querySelectorAll(".error-message")[2];
                passwordChkErrorMsg.innerHTML = `${errorValues[i]}`;
                console.log(errorValues[i]);
            }else if(errorKeys[i] == "name"){

                const nameError = document.querySelectorAll(".account-input")[3];
                nameError.classList.add("inputs-invisible");

                const nameErrorMsg = document.querySelectorAll(".error-message")[3];
                nameErrorMsg.innerHTML = `${errorValues[i]}`;
                console.log(errorValues[i]);
            }else if(errorKeys[i] == "email"){

                const emailError = document.querySelectorAll(".account-input")[4];
                emailError.classList.add("inputs-invisible");

                const emailErrorMsg = document.querySelectorAll(".error-message")[4];
                emailErrorMsg.innerHTML = `${errorValues[i]}`;
                console.log(errorValues[i]);
            }else if(errorKeys[i] == "phone"){

                const phoneError = document.querySelectorAll(".account-input")[5];
                phoneError.classList.add("inputs-invisible");

                const phoneErrorMsg = document.querySelectorAll(".error-message")[5];
                phoneErrorMsg.innerHTML = `${errorValues[i]}`;
                console.log(errorValues[i]);
            }

        }
    }

    nonError(){

        const usernameError = document.querySelectorAll(".account-input")[0];
        const passwordError = document.querySelectorAll(".account-input")[1];
        const passwordChkError = document.querySelectorAll(".account-input")[2];
        const nameError = document.querySelectorAll(".account-input")[3];
        const emailError = document.querySelectorAll(".account-input")[4];
        const phoneError = document.querySelectorAll(".account-input")[5];

        usernameError.classList.remove("inputs-invisible");
        passwordError.classList.remove("inputs-invisible");
        passwordChkError.classList.remove("inputs-invisible");
        nameError.classList.remove("inputs-invisible");
        emailError.classList.remove("inputs-invisible");
        phoneError.classList.remove("inputs-invisible");

    }

    nonErrorMsg(){

        const usernameErrorMsg = document.querySelectorAll(".error-message")[0];
        const passwordErrorMsg = document.querySelectorAll(".error-message")[1];
        const passwordChkErrorMsg = document.querySelectorAll(".error-message")[2];
        const nameErrorMsg = document.querySelectorAll(".error-message")[3];
        const emailErrorMsg = document.querySelectorAll(".error-message")[4];
        const phoneErrorMSg = document.querySelectorAll(".error-message")[5];

        usernameErrorMsg.innerHTML = "";
        passwordErrorMsg.innerHTML = "";
        passwordChkErrorMsg.innerHTML = "";
        nameErrorMsg.innerHTML = "";
        emailErrorMsg.innerHTML = "";
        phoneErrorMSg.innerHTML = "";

    }
}

window.onload = () => {

    Option.getInstance();
    InputData.getInstance().getRegisterApi();

}




