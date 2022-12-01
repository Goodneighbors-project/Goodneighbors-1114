


const selectedAll = document.querySelector(".surport-selects");
const layer = document.querySelector(".row2");

selectedAll.onclick = () => {
    layer.classList.toggle("invisible-area");
}



class DonationApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new DonationApi();
        }
        return this.#instance;
    }

    getDonationData() {
        let responseData = null;
        const url = location.href;
        const donaId = user.substring(url.lastIndexOf("/") + 1);

        $.ajax({
            async: false,
            type: "get",
            url: "/api/surport/" + category,
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        });

        return responseData;
    }
}

class DonationSelect {

    constructor() {
        const responseData = DonationApi.getInstance().getDonationData();
        this.addDonationListEvent(responseData);
        this.addDonationDetail(responseData);
    }

    addDonationListEvent(responseData) {
        const donates = document.querySelector(".support-donate-table");
        donates.innerHTML = '';

        responseData.forEach(donation => {
            this.donaId.push(donation.donaId);
            donates.innerHTML += `
            <div class="donate-payInput regular-pay">
                <div class="row1">
                    <div class="check-box">
                        <div class="check">
                            <input type="checkbox" id="regular-1" class="surport-selects" value="1">
                            <label for="regular-1">해외아동 1:1결연</label>
                        </div>
                    </div>
                </div>
                <div class="row2 cf">
                    <h6>후원아동 수</h6>
                    <div class="donate-pay-radio">
                        <div>
                            <input type="radio" id="regular-1-1" name="regular-1" value="1" title="1명" checked>
                            <label for="regular-1-1">1명</label>
                        </div>
                        <div>
                            <input type="radio" id="regular-1-2" name="regular-1" value="2" title="2명" checked>
                            <label for="regular-1-2">2명</label>
                        </div>
                        <div>
                            <input type="radio" id="regular-1-3" name="regular-1" value="3" title="3명" checked>
                            <label for="regular-1-3">3명</label>
                        </div>
                    </div>
                    <div class="donate-pay-input input-box outline-box">
                        <input type="number" class="maxLengthNext onlyPrice" name="regular-1" placeholder="아동 수 직접 입력" title="아동 수를 직접입력해주세요.">
                        <label>명</label>
                    </div>
                    <div class="donate-pay-sinfo">
                        후원금액(1명) 월 30,000원
                    </div>
                    <div class="donate-pay-total">
                        총
                        <span>30,000</span>
                        원
                    </div>
                </div>
            </div>
            `;
        });
    }

    addDonationDetail() { 
        const checkbox = document.getElementById("regular-1");
        const donateList = document.querySelector(".row2");

        const is_checked = checkbox.checked;

        donateList.classList.toggle(".cf") = is_checked;
    }
}

window.onload = () => {
    new DonationSelect();
}