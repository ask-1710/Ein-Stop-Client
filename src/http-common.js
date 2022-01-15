import axios from "axios" ;

export default axios.create({
    baseURL: "https://einstop-sales-managementsystem.herokuapp.com/api/v1/",
    headers: {
        "Content-type":"application/json"
    }
})
