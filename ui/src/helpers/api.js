// export default class Api {

//   constructor() {
//     this.api_token = null;
//     this.client = null;
//     this.api_url = process.env.API_CLIENT_GET_ALL;
//   }

//   init = () => {
//     let headers = {
//       Accept: "application/json"
//     };

//     this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
//     return this.client;
//   }

//   getClientList = (params) => {
//     return this.init().get(process.env.API_CLIENT_GET_ALL, {params: params});
//   };

//   addNewClient = (data) => {
//     return this.init().post(process.env.API_CLIENT_CREATE, data);
//   };
// }

// Example POST method implementation:
export default async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
