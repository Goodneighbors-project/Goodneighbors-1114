class Principal {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new Principal();
        }
        return this.#instance;
    }

    getPrincipal() {
        let responseData = null;

        $.ajax({
            async: false,
            type: 'GET',
            url: '/api/account/principal',
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        })

        return responseData;

    }
}