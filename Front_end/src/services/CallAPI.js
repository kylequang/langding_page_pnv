import axios from "axios";
let API_URL = 'http://localhost:8000/api';
export default function Call_API(endpoint, method = 'GET', body) {
    return axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
// let api = 'https://langdingpagepnv.herokuapp.com/api';
// export default function Call_API(endpoint, method = 'GET', body) {
//     return axios({
//         method,
//         url: `${api}/${endpoint}`,
//         data: body
//     }).catch(err => {
//         console.log(err);
//     });
// }