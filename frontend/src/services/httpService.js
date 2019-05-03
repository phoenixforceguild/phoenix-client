import axios from "axios";

function getConfigs(authorization) {
  var config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Headers": "Origin, x-requested-with, content-type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Max-Age": "3600"
    }
  };

  if(authorization) {
    const authString = `${authorization.token} ${authorization.email}`;
    config.headers['Authorization'] = authString;
  }

  return config;
}

export const get = function get(url, authorization) {
  // const config = getConfigs(authorization);
  // console.log(config);
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cross-Domain": "true"
  }
  return axios.get(url, headers);
};

export const post = function post(url, data, authorization) {
  return axios.post(url, data);
};

export const put = function put(url, data, authorization) {
  const config = getConfigs(authorization);
  config.data = data;
  return axios.put({
    method: 'put', 
    url: url, 
    headers: config.headers,
    body: config.data
  });
};

export const patch = function patch(url, data, authorization) {
  const config = getConfigs(authorization);
  config.data = data;
  return axios.patch({
    method: 'patch', 
    url: url, 
    headers: config.headers,
    body: config.data
  });
};

export const del = function del(url, authorization) {
  const config = getConfigs(authorization);
  return axios.delete({
    method: 'get', 
    url: url, 
    headers: config.headers
  });
};