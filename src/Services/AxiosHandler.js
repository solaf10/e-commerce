import axios from "axios";

const config = {
  // baseURL: "https://fakestoreapi.com/",
  baseURL: "https://travelde.pythonanywhere.com/travelapp",
  headers: {
    "Content-Type": "application/json",
  },
};
export const PublicAxios = axios.create(config);

// import axios from "axios";
// // import Cookies from 'js-cookie';

// const config = {
//     baseURL: "your base url",
//     // timeout: 10000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// };

// export const AuthAxios = axios.create(config);

// export const PublicAxios = axios.create(config);

// AuthAxios.interceptors.request.use(async (c) => {
//     let token = Cookies.get('token');
//     if (token) c.headers.Authorization = Bearer ${token};
//     return c;
// });

// AuthAxios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response) {
//             console.log(error.response);
//             if (error.response.status === 401 && canGoToSignin) {
//                 canGoToSignin = false;
//                 setTimeout(() => {
//                     canGoToSignin = true;
//                 }, 5000);
//             } else {
//                 return Promise.reject(error);
//             }
//         }

//         return Promise.reject(error);
//     }
// );
