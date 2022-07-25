import axios from "axios";
// import { Alert } from "bootstrap";
import { alertFunc } from "../components/Alert/Alert";

const ServiceIntercepter = () => {

    const RequestFunc = () => {
        // Add a request interceptor
        axios.interceptors.request.use((request) => {
            // Do something before request is sent
            // console.log("REQUEST SUCCESS ::>", request);
            return request;
        }, function (error) {
            // Do something with request error
            // console.log("REQUEST ERROR ::>", error);
            return Promise.reject(error);
        });
    }

    const ResponseFunc = () => {
        // Add a response interceptor
    axios.interceptors.response.use((response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // console.log("SUCCESS RESPONSE ::>", response);
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // console.log("ERROR RESPONSE ::>", error);
        console.log(error.response.status);
        console.log(window.location.pathname)
        if(error.response.status >= 400){
            // navigate("/error")
            // window.location.pathname = "/error"
            <alertFunc/>
        }
        return Promise.reject(error);
    });
    }

    RequestFunc();
    ResponseFunc();
}

export default ServiceIntercepter;