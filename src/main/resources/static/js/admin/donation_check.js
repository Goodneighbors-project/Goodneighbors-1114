class DonationMst{
    #category;
    #donationName;
    #donationContents;

    constructor(category, donationName, donationContents){
        this.#category = category;
        this.#donationName = donationName;
        this.#donationContents = donationContents;
    }

    getCategory(){return this.#category;}
    setCategory(category){this.#category = category;}

    getCategory(){return this.#donationName;}
    setCategory(donationName){this.#donationName = donationName;}

    getCategory(){return this.#donationContents;}
    setCategory(donationContents){this.#donationContents = donationContents;}

    getObject(){
        const obj = {
            category: this.#category,
            donationName: this.#donationName,
            donationContents: this.#donationContents
        }

        return obj;
    }
}

class CommonApi{

    getCategoryList(){
        let responseResult = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/donation/category",
            dataType: "json",
            success: (response) => {
                responseResult = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });

        return responseResult;
    }
}

class DonationApi{

    createDonationRequest(DonationMst){

        let responseData = null;

        $.ajax({
            async: false,
            type: "post",
            url: "/api/admin/donation",
            contentType: "application/json",
            data: JSON.stringify(DonationMst),
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

    getDonationListRequest(listRequestParams){

        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/donation/check",
            data: listRequestParams,
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }

        })

        return responseData;
    }
}

class SearchEventService{

    static #instance = null;

    static getInstance(){
        if(this.#instance == null){
            this.#instance = new SearchEventService();
        }
        return this.#instance;
    }

    #categorySelectObj;
    #donationNameInputObj;

    constructor(){
        this.#categorySelectObj = document.querySelectorAll(".donation-inputs")[0];
        this.#donationNameInputObj = document.querySelectorAll(".donation-inputs")[1];
        
        this.init();

        this.addCategorySelectEvent();
        this.addDonationNameInputEvent();
        this.setCategorySelect();
    }

    init(){
        this.#donationNameInputObj.disabled = true;
    }

    addCategorySelectEvent(){

        this.#categorySelectObj.onfullscreenchange = () => {

            if(this.#categorySelectObj.value != "none"){

                this.#donationNameInputObj.disabled = false;
            }else{

                this.#donationNameInputObj.disabled = true;
            }
        }
    }

    setCategorySelect(){
        const CommonApi = new CommonApi();
        const donationCategoryList = CommonApi.getCategoryList();

        const categorySelect = document.querySelector(".category-select");
        categorySelect.innerHTML = `<option value="none">카테고리</option>`;
        donationCategoryList.forEach(donation => {
            categorySelect.innerHTML += `
                <option value="${donation.category_id}">${donation.category_name}</option>
            `;
        });

    }

}

window.onload = () => {
    SearchEventService.getInstance();
}
