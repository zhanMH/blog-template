import Vue from "vue";
import axios from "axios";

let ajax={}
let http=axios.create({
    timeou:5000,
    baseURL:'http://localhost:3000/api/',
    withCredentials:true,
})

function processData(data){
    return data
}


// 请求拦截器
http.interceptors.request.use();
// 响应拦截器即异常处理
http.interceptors.response.use(
    response => {
        return response.data
    }
);

ajax.get =function(url, options) {    
    return new Promise((resolve) => {
        http.get(url, {params: processData(options)})
        .then(response => {
            resolve(response)
        })
    })
};

ajax.post =function(url, data, options) {
    console.log(url,data)
    return new Promise((resolve) => {
        http
            .post(url, processData(data), options)
            .then(response => {
                resolve(response)
            })
    })
};

Vue.prototype.$ajax=ajax
