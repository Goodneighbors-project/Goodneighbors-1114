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
}

class DonationSelect {

  constructor() {
    this.addDonationListEvent();
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
                <input type="radio" id="regular-${category.categoryId}-1" name="regular-" class="regular-1" value="1" title="1명">
                <label for="regular-${category.categoryId}-1">1명</label>
              </div>
              <div>
                  <input type="radio" id="regular-${category.categoryId}-2" name="regular-" class="regular-1" value="2" title="2명">
                  <label for="regular-${category.categoryId}-2">2명</label>
              </div>
              <div>
                  <input type="radio" id="regular-${category.categoryId}-3" name="regular-" class="regular-1" value="3" title="3명">
                  <label for="regular-${category.categoryId}-3">3명</label>
              </div>
            </div>
            <div class="donate-pay-input input-box outline-box">
                <input type="number" id="regular-input"  class="maxLengthNext onlyPrice" name="regular-input-1" placeholder="아동 수 직접 입력" title="아동 수를 직접입력해주세요.">
                <label>명</label>
            </div>
            <div class="donate-pay-sinfo">
                후원금액(1명) 월 30,000원
            </div>
            <div class="donate-pay-total">
              총
              <span name="donationPay"></span>
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
  }
}

class ValueSum {

  constructor() {
    this.getTotalValue();
  }

  getTotalValue() {
    let inputValue = document.getElementsByName("regular-input-1");
    let checkValue = document.getElementsByName("regular-");
    let donatePay = document.getElementsByName("donationPay");
    let totalPrice = document.querySelector(".totalPay");
    let valueArray = new Array();
    let totalValue = 0;

    if(inputValue != null) {
      this.getInputboxValue();
    }else
    // if(checkValue.checked) 
    // {
    //   this.getCheckboxValue();
    // }
    for(let i = 0; i < donatePay.length; i++) {
      valueArray[i] = donatePay[i].value;
      totalValue = Number(totalValue) + Number(valueArray[i] * 30000);
    }
    totalPrice.innerHTML = Number(totalValue);
    console.log(valueArray);
    console.log(donatePay.value);
  }

  getInputboxValue() {
    let inputValue = document.getElementsByName("regular-input-1");
    
    for(let i = 0; i < inputValue.lengh; i++) {
      inputValue[i].addEventListener('change', (event) => {
        const donatePay = document.getElementsByName("donationPay");
        donatePay[i].innerHTML = Number(event.target.value * 30000);
        console.log(donatePay[0].value);
        })
    }
  }

  getCheckboxValue() {
    let donatePay = document.getElementsByName("donationPay");
    let checkValue = document.getElementsByName("regular-");
    
    for(let i = 0; i < checkValue.length; i++) {
      checkValue[i].onclick = () => {
        if(checkValue[i].checked) {
          donatePay[parseInt(i/3)].innerText = Number(checkValue[i].value * 30000);
        }
      }
    }
  }
}


window.onload = () => {
  DonationApi.getInstance().getApi();
  new DonationSelect();
  new ValueSum();
}