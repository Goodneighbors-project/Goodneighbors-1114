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
      // this.loadDonationTotal();
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
                      <input type="checkbox" id="regular-${category.categoryId}" class="support-selects" value="1">
                      <label for="regular-${category.categoryId}">${category.categoryName}</label>
                  </div>
              </div>
          </div>
          <div id="invisible-${category.categoryId}" class="row2 invisible-area">
            <div class="donate-pay-radio">
              <div>
                <input type="radio" id="regular-${category.categoryId}-1" name="regular-1" class="regular-1" value="1" title="1명">
                <label for="regular-${category.categoryId}-1">1명</label>
              </div>
              <div>
                  <input type="radio" id="regular-${category.categoryId}-2" name="regular-1" class="regular-1" value="2" title="2명">
                  <label for="regular-${category.categoryId}-2">2명</label>
              </div>
              <div>
                  <input type="radio" id="regular-${category.categoryId}-3" name="regular-1" class="regular-1" value="3" title="3명">
                  <label for="regular-${category.categoryId}-3">3명</label>
              </div>
            </div>
            <div class="donate-pay-input input-box outline-box">
                <input type="number" class="maxLengthNext onlyPrice" name="regular-input-1" placeholder="아동 수 직접 입력" title="아동 수를 직접입력해주세요.">
                <label>명</label>
            </div>
            <div class="donate-pay-sinfo">
                후원금액(1명) 월 30,000원
            </div>
            <div class="donate-pay-total">
              총
              <span class="select-donation-pay"></span>
              원
            </div>
          </div>
        </div>
        `;

    });
    const selected = document.querySelectorAll(".support-selects");
    const layer = document.querySelectorAll(".row2");

    selected.forEach((select,index) => {
      select.onclick = () => {
        layer[index].classList.toggle("invisible-area");
      }
    });
    this.loadDonationTotal();
  }
   
  getCheckboxValue() {
    let regular1 = document.getElementsByName("regular-1");
    console.log(regular1[1].value);
    const donatepay = document.querySelector(".donationPay");
    for (let i = 0; i < regular1.length-1; i++) {
      regular1[i].onclick = () => {
        if(regular1[i].checked) {
          document.getElementById('donationPay').innerText = Number(regular1[i].value * 30000);
        }
      }
    }
    
  }


}

window.onload = () => {
    DonationApi.getInstance().getApi();
    new DonationSelect();
}