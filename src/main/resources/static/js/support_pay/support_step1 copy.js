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
    const donatePay = document.getElementsByName("donationPay");
    const checkValue = document.getElementsByName("regular-");
    const totalPrice = document.querySelector(".totalPay");
    const inputValue = document.getElementsByName("regular-input-1");
    const valueArray = new Array();
    let totalValue = 0;

    if(inputValue != null) {
      for(let i = 0; i < checkValue.length; i++) {
        inputValue[parseInt(i/3)].addEventListener('change', (event) => {
          donatePay[parseInt(i/3)].innerHTML = Number(event.target.value) * Number(30000);
          valueArray[parseInt(i/3)] = Number(event.target.value);
          })
      }
    }
    if(checkValue[i].checked) {
      this.getCheckboxValue();
    }
  totalValue = Number(totalValue) + Number(valueArray[parseInt(i/3)] * 30000);
    totalPrice.innerHTML = Number(totalValue);
    console.log(valueArray)
    console.log(totalValue);
  }

  getInputboxValue() {
    const donatePay = document.getElementsByName("donationPay");
    const inputValue = document.getElementsByName("regular-input-1");
    
    for(let i = 0; i < checkValue.lengh; i++) {
      inputValue[parseInt(i/3)].addEventListener('change', (event) => {
        donatePay[parseInt(i/3)].innerHTML = Number(event.target.value) * Number(30000);
        valueArray[parseInt(i/3)] = Number(event.target.value);
        })
    }
  }

  getCheckboxValue() {
    let donatePay = document.getElementsByName("donationPay");
    let checkValue = document.getElementsByName("regular-");
    let totalValue = 0;
    
    
    for(let i = 0; i < checkValue.length; i++) {
      checkValue[i].onclick = () => {
        if(checkValue[i].checked) {
          totalValue = 0;
          this.getCheckboxValue.valueArray[parseInt(i/3)] = checkValue[i].value;
          donatePay[parseInt(i/3)].innerText = Number(this.getCheckboxValue.valueArray[parseInt(i/3)] * 30000);
          console.log(valueArray[parseInt(i/3)]);
        }
      }
    }
    console.log(this.getCheckboxValue.valueArray)
  }
  

// function totalchange() {
//   let inputValue = document.getElementsByName("regular-input-1");
//   let donationTotal = document.getElementsByName("donationPay");
//   let paytotal = 0;
//   const donaTotalPay = document.querySelector(".totalPay");
//   for (let i = 0; i < donationTotal.length; i++){
//     donationTotal[i].innerHTML = inputValue[i].value * Number(30000);
//     paytotal = Number(paytotal) + (inputValue[i].value * Number(30000));
//     donaTotalPay.innerHTML = paytotal;
//   }
// }

  // getInputBoxValue() {
  //   const donatePay = document.getElementsByName("donationPay");
  //   const inputValue = document.getElementsByName("regular-input-1");

  //   for(let i = 0; i < donatePay.length; i++) {
      
  //     donatePay[i].innerText = Number(inputValue[i]) * Number(30000);
  //   }
  // }

}


window.onload = () => {
  DonationApi.getInstance().getApi();
  new DonationSelect();
  new ValueSum();
}