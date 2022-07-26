import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/";
// const errorMessage = "Generic message";

const getUsers = async() => {

    const { data, status } = await axios.get(url + "users12")
        .then((response) => response);

            console.log("status" + status)
            if (status >= 400)
            {
                console.log("status" + status);
                return [null, status]
            }

        return [data, null];
    } 

const getTodos = async() => {
    const { data, status } = await axios.get(url + "todos")
        .then((response)=> response);

            console.log("status" + status)
            if (status >= 400) 
            {
                console.log("status" + status);
                return [null, status]
            }

        return [data, null];
    }



export  {getUsers, getTodos};