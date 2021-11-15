const axios = require("axios");

const starWarsHTTP = axios.create({
    baseURL: "https://swapi.dev/api/"
});

starWarsHTTP.get("planehghjts/4")
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));