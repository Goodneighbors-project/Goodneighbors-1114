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
    
            const user = {
                "username" : document.querySelectorAll(".account-input")[0].value,
                "password" : document.querySelectorAll(".account-input")[1].value,
                "passwordChk" : document.querySelectorAll(".account-input")[2].value,
                "name" : document.querySelectorAll(".account-input")[3].value,
                "email" : document.querySelectorAll(".account-input")[4].value,
                "phone" : document.querySelectorAll(".account-input")[5].value,
                "postCode" : document.querySelectorAll(".account-input")[6].value,
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
        const errorValues = Object.keys(errors);

        for(let i = 0; i < errorKeys.length; i++){
            
            if(errorKeys[i] == "username"){

                const usernameError = document.querySelectorAll(".account-input")[0];
                usernameError.classList.add("inputs-invisible");

                const usernameErrorMsg = document.querySelectorAll(".error-message")[0];
                usernameErrorMsg.innerHTML = `${errorValues[i]}`;

            }else if(errorKeys[i] == "password"){

                const passwordError = document.querySelectorAll(".account-input")[1];
                passwordError.classList.add("inputs-invisivle");

                const passwordErrorMsg = document.querySelectorAll(".error-message")[1];
                passwordErrorMsg.innerHTML = `${errorValues[i]}`;

            }else if(errorKeys[i] == "passwordChk"){

                const passwordChkError = document.querySelectorAll(".account-input")[2];
                passwordChkError.classList.add("inputs-invisivle");

                const passwordChkErrorMsg = document.querySelectorAll(".error-message")[2];
                passwordChkErrorMsg.innerHTML = `${errorValues[i]}`;

            }else if(errorKeys[i] == "name"){

                const nameError = document.querySelectorAll(".account-input")[3];
                nameError.classList.add("inputs-invisivle");

                const nameErrorMsg = document.querySelectorAll(".error-message")[3];
                nameErrorMsg.innerHTML = `${errorValues[i]}`;

            }else if(errorKeys[i] == "email"){

                const emailError = document.querySelectorAll(".account-input")[4];
                emailError.classList.add("inputs-invisivle");

                const emailErrorMsg = document.querySelectorAll(".error-message")[4];
                emailErrorMsg.innerHTML = `${errorValues[i]}`;

            }else if(errorKeys[i] == "phone"){

                const phoneError = document.querySelectorAll(".account-input")[5];
                phoneError.classList.add("inputs-invisivle");

                const phoneErrorMsg = document.querySelectorAll(".error-message")[5];
                phoneErrorMsg.innerHTML = `${errorValues[i]}`;

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

        usernameError.classList.remove("inputs-invisivle");
        passwordError.classList.remove("inputs-invisivle");
        passwordChkError.classList.remove("inputs-invisivle");
        nameError.classList.remove("inputs-invisivle");
        emailError.classList.remove("inputs-invisivle");
        phoneError.classList.remove("inputs-invisivle");

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
    InputData.getInstance().getRegisterApi();
}




