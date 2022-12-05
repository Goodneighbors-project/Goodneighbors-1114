



class DonationApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new DonationApi();
        }
        return this.#instance;
    }

    getApi() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/support",
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });
        return responseData;
    }

    // getDonationData() {
    //     let responseData = null;
    //     const url = location.href;
    //     const category = url.substring(url.lastIndexOf("/") + 1);

    //     $.ajax({
    //         async: false,
    //         type: "get",
    //         url: "/api/surport/" + category,
    //         dataType: "json",
    //         success: response => {
    //             responseData = response.data;
    //         },
    //         error: error => {
    //             console.log(error);
    //         }
    //     });

    //     return responseData;
    // }
}

class DonationSelect {

    constructor() {
        this.addDonationListEvent();
        // this.loadDonationTotal(responseData);
    }

    addDonationListEvent() {
        let responseData = DonationApi.getInstance().getApi();
        console.log(responseData);
        const donates = document.querySelector(".support-donate-table");

        donates.innerHTML = ``;

        responseData.forEach(category => {
            donates.innerHTML += `
            <div class="donate-payInput regular-pay">
                <div class="row1">
                    <div class="check-box">
                        <div class="check">
                            <input type="checkbox" id="regular-${category.categoryId}" class="surport-selects" value="1">
                            <label for="regular-${category.categoryId}">${category.categoryName}</label>
                        </div>
                    </div>
                </div>
                <div class="row2 cf">
                </div>
            </div>
            `;
        });
        // this.loadDonationTotal();

        const selectedAll = document.querySelectorAll(".surport-selects");
        const layer = document.querySelector(".row2");

        selectedAll.onclick = () => {
        layer.classList.toggle("invisible-area");
}
        
    }

    // loadDonationTotal() {
    //     const donationTotal = document.querySelector(".total")
    //     const donationprice = document.querySelector(".donate-total");
    //     let listVar = $('input[name=regular-1]:checked').val();

    //     donationprice.textContent = listVar * 30000;

    //     donationTotal.innerHTML += `
    //         <span></span>
    //     `;
    // }

}


// const selectedAll = document.querySelector(".surport-selects");
// const layer = document.querySelector(".row2");

// selectedAll.onclick = () => {
//     layer.classList.toggle("invisible-area");
// }

window.onload = () => {
    DonationApi.getInstance().getApi();
    new DonationSelect();
}