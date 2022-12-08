class UserApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance == new DonationApi();
        }
        return this.#instance;
    }

    getApi() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "api/user",
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