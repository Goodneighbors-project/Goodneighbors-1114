const btnCancel = document.querySelector(".btn-cancel");

btnCancel.onclick = () => {
    location.href = "/account/login"
}

const btnJoin = document.querySelector(".btn-join");

btnJoin.onclick = () => {
    location.href = "/account/complete"
}



class SearchPostcode {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new SearchPostcode();
        }
        return this.#instance;
    }

    #daumApi = null;
    constructor() {
        this.#daumApi = new daum.Postcode({
            oncomplete: function(data) {
                var addr = '';
        
                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }
                
                document.getElementById("zonecode").value = data.zonecode;
                document.getElementById("address").value = addr;
        
                document.getElementById("addressSub").focus();
            }
          })
        this.addAddressButtonEvent();
    }

    setAddressInfo(data) {

    }

    addAddressButtonEvent() {
        document.querySelector(".btn-postsearch").onclick = () => {
            this.#daumApi.open();
        }
    }
}

window.onload = () => {
    SearchPostcode.getInstance();
}