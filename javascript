let consoleForm = document.getElementById('consoleForm');

let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");

let requestMethod = document.getElementById("requestMethod");

let requestBody = document.getElementById("requestBody");

let sendRequestBtn = document.getElementById("sendRequestBtn");

let responseStatus = document.getElementById("responseStatus");

let responseBody = document.getElementById("responseBody");

let formData = {
    id: 123,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "male",
    status: "active"
};


requestMethod.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

requestUrl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});

requestBody.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});

function validateRequestUrl() {
    if (requestUrl.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }

    formData.requestUrl = requestUrl.value;
}



function sendRequest() {
    let options = {
        method: requestMethod.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer b2d8461de1f1eac9ca5df728892265d23f55ebe156521d9ee866aa61132526e6",
        },
        body: requestBody.value,
    };


    fetch(requestUrl.value, options)
        .then(function(response) {
            return response.json();
        })

        .then(function(jsonData) {
            console.log(jsonData);
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData);
        });
}


consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequestUrl();
    sendRequest();
});
