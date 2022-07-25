import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/";

const getUsers = async() => {
    const { data } = await axios.get(url + "users12")
        .then(response => response);
        // console.log(data);
        return data;
    } 

const getTodos = async() => {
    const { data } = await axios.get(url + "todos")
        .then(response => response);
        // console.log(data);
        return data;
    }



export  {getUsers, getTodos};