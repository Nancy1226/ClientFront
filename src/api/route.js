import axios from "axios";
export const createUser = async(valores) => {
    return await axios.post("http://localhost:8800/user/",valores,{
    })
}

export const loginUser = async(valores) => {
    return await axios.post("http://localhost:8800/user/loginUser/",valores,{
    })
}

export const getClient = async() => {
    return await axios.get("http://localhost:8800/proyecto/get", {
    })
}

export const searchClient = async(valores) => {
    return await axios.post("http://localhost:8800/proyecto/search/",valores,{
    })
}