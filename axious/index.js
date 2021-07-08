const axios = require('axios')
const qs = require('qs')
const querystring = require('querystring');
const request = require("./request")
const response = require("./response")
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
      // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data, headers) {
      // 对 data 进行任意转换处理
      // data = qs.stringify(data)
      return data
    }],
  
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理
      return data;
    }],
    responseType: 'json',
    responseEncoding: 'utf8', // default
});
instance.interceptors.request.use(request,(err)=>{
  return Promise.reject(error);
})
instance.interceptors.response.use(response,(err)=>{
  return Promise.reject(error);
})

module.exports =  instance
