import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

// request, response

axios.interceptors.request.use((req) => {
    console.log(req);
    // edit response 
    return req;
},
(err) => {
    console.log(err);
    return Promise.reject();
})

axios.interceptors.response.use((res) => {
    console.log(res);
    // edit response 
    return res;
},
(err) => {
    console.log(err);
    return Promise.reject();
})

const BaseURL = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
}
export default BaseURL;