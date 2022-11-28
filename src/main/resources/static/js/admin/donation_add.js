class Option{

    static #instance = null;

    static getInstance(){
        if(this.#instance == null){
            this.#instance = new Option();
        }

        return this.#instance;
    }

    constructor(){
        this.setCategorySelectOptions();
    }

    setCategorySelectOptions(){

        const categorySelect = document.querySelector(".cagetory-select");

        categorySelect.innerHTML = `<option value="none">카테고리</option>`;

        const responseData = CommonApi.getInstance().getCategoryList();

        if(responseData != null){
            
            responseData.forEach(donation => {

                categorySelect.innerHTML = `<option value="${donation.id}">${donation.name}</option>`;
            });
        }
    }
}



// 카테고리 리스트, api연결
class CommonApi{

    static #instance = null;

    static getInstance(){
        if(this.#instance == null){
            this.#instance = new CommonApi();
        }

        return this.#instance;
    }

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

    registerApi(formData){
        $.ajax({
            async: false,
            type: "post",
            url: "/api/admin/donation/register",
            enctype: "multipart/form-data",
            contentType: false,
            processData: false,
            data: formData,
            dataType: "json",
            success: (response) => {
                alert("후원 등록 완료");
                location.replace("/admin/donation/register");
            },
            error: (error) => {
                alert("후원 등록 실패\n" + error.responseJSON.msg);
                console.log(error);
            }
        });
    }
}

// 이미지 파일 업로드
class DonationImgFile {

    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new DonationImgFile();
        }

        return this.#instance;    
    }
  
    newImgList = new Array();
  
  
    constructor() {
        this.addFileInputEvent();
        this.sumbit();
    }

    
    addFileInputEvent() {

        const filesInput = document.querySelector(".files-input");
        const imgAddButton = document.querySelector(".img-add-button");

        imgAddButton.onclick = () => {

            filesInput.click(); // 버튼 클릭시 input 이벤트 발생

        }

        filesInput.onchange = () => {

            const formData = new FormData(document.querySelector("form"));
            let changeFlag = false;
  
            formData.forEach(value => {

                if(value.size != 0) { // 취소하면 사이즈가 0이 나와서 그 경우를 제외
                    
                    this.newImgList.push(value);

                    changeFlag = true;
                }

            });
  
            if(changeFlag) {

                this.loadImgs();

                filesInput.value = null;
            }
        }
    }


    loadImgs() {
        const fileList = document.querySelector(".file-list");
        fileList.innerHTML = "";
  
        this.newImgList.forEach((imgFile, i) => {
            const reader = new FileReader();
  
            reader.onload = (e) => {

                fileList.innerHTML += `
                    <li class="file-info">
                    <div class="file-img">
                        <img src="${e.target.result}" alt="">
                    </div>
                    <div class="file-name">${imgFile.name}</div>
                    <button type="button" class="btn delete-button">삭제</button>
                    </li>
                `;
            }

            //readAsDataURL(); 비동기처리... 순서대로 들어오지 않음.
            setTimeout(() => {

                reader.readAsDataURL(imgFile);

            }, i * 300); // 처리를 i * 200 늦게
        });
  
        setTimeout(() => {

            this.addDeleteEvent();

        }, this.newImgList.length * 300);
    }
    
    
    addDeleteEvent() {
        const deleteButtons = document.querySelectorAll(".delete-button");
  
        deleteButtons.forEach((deleteButton, i) => {

            deleteButton.onclick = () => {

                if (confirm("상품이미지를 지우시겠습니까?")) {

                    this.newImgList.splice(i, 1);
                    this.loadImgs();
                }
            }
        });
    }
    
    sumbit() {
        const registerButton = document.querySelector(".upload-button");
        registerButton.onclick = () => {

            const donationInputs = document.querySelectorAll(".donation-inputs");
            let formData = new FormData();
            
            formData.append("categoryId", donationInputs[0].value);
            formData.append("name", donationInputs[1].value);
            formData.append("contents", donationInputs[2].value);
            
            this.newImgList.forEach((file) => {
                formData.append("files", file);
            });
    
            CommonApi.getInstance().registerApi(formData);
        }        
    }
}
  
  
window.onload = () => {

    Option.getInstance();
    DonationImgFile.getInstance();
}