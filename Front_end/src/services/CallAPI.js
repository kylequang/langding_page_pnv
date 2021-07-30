import axios from "axios";
// let API_URL = 'http://127.0.0.1:8000/api';
// export default function Call_API(endpoint, method = "GET", body) {
//     return axios({
//         method,
//         url: `${API_URL}/${endpoint}`,
//         data: body
//     }).catch(err => {
//         console.log(err);
//     });
// }
let api = 'https://600a50df778d1a0017793a0d.mockapi.io';
export default function Call_API(endpoint, method = 'GET', body) {
    return axios({
        method,
        url: `${api}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
//Mã Đo Lường
//G-VJYG2XV1MW