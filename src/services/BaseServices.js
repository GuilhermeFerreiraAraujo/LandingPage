import axios from 'axios';

const domain = 'https://localhost:7225/';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
}

export function Get(url) {
  return axios.get(`${domain}${url}`, headers)
}

export function Post(url, data) {
  const endpoint = `${domain}${url}`
  return axios.post(endpoint, data, headers);
}

export function Put(url, data) {
  axios.put(url, data, headers)
}

export function SetAuthorizationToken(token){
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}

