import axios from "axios";

export const axiosInstance = axios.create({});


export const apiConnector = (method, url, bodyData, headers, params) => {
    console.log("ApiconnectorMK")
    console.log("BASE_URL:", process.env.REACT_APP_BASE_URL);
    console.log("SENDOTP_API:", process.env.REACT_APP_BASE_URL + "/api/v1/auth/sendotp");
    return axiosInstance({
        method: method,
        url: url,
        data: bodyData?bodyData:null,
        headers: headers?headers:null,
        params: params?params:null
    })
};