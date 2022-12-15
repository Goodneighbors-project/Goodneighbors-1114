class DonationApi{
    static #instance = null;

    static getInstance(){
        if(this.#instance == null){
            this.#instance = new DonationApi();
        }
        return this.#instance;
    }

    getDonationListRequest(){

        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/donation/check",
            dataType: "json",
            success: (response) => {
                responseData = response.data;
                console.log(responseData);
            },
            error: (error) => {
                console.log(error);
            }

        })

        return responseData;
    }
}

class Check {

    constructor() {
        this.checkEvent();
    }

    checkEvent() {
        let responseData = DonationApi.getInstance().getDonationListRequest();
        console.log(responseData);
        const checkTable = document.querySelector(".checkTable");
        checkTable.innerHTML = "";

        if(responseData != null) {
            responseData.forEach(donation => {
                checkTable.innerHTML += `
                <tr>
                <td>${donation.id}</td>
                <td>${donation.category_id}</td>
                <td>${donation.donation_name}</td>
                <td><button type="button" class="btn">보기</button></td>
                <td><button type="button" class="btn">추가</button></td>
                <td><button type="button" class="btn">수정</button></td>
                <td><button type="button" class="btn">삭제</button></td>
            </tr>
                `;
                
            });
        }
        console.log(responseData);
    }
}

window.onload = () => {
    DonationApi.getInstance().getDonationListRequest();
    new Check();
}
