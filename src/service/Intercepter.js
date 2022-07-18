import axios from "axios";

const HandleIntercepter = () => {
    // Add a request interceptor
    axios.interceptors.request.use((request) => {
        // Do something before request is sent
        console.log("REQUEST SUCCESS ::>", request);
        return request;
    }, function (error) {
        // Do something with request error
        console.log("REQUEST ERROR ::>", error);
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log("SUCCESS RESPONSE ::>", response);
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log("ERROR RESPONSE ::>", error);
        return Promise.reject(error);
    });   
}

export default HandleIntercepter;