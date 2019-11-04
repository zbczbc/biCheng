//GET /portal/technicalSupport
import axios from "axios"


// async function fetchData(method, url, params ) {
//     await axios({
//         method,
//         url,
//         //cache:false,
//         params,
//     }).then(data => {
//         console.log(data)
//     })
// }

async function fetchData( opts ) {
    console.log(opts)
    return await axios({
        method: opts.method || 'get',
        url: opts.url,
        //cache:false,
        params: opts.params,
    }).then(data => {
        console.log(data)
    })
}

// function request(params, detail) {
//     console.log(params, detail)
//     return fetchData( {
//         method: detail.method || 'get',
//         url: detail.url
//     } )
// }


export const getTechnicalSupport = params => {
    console.log(params)
    return fetchData({
       url: `/portal/technicalSupport`,
       params
    });
 };
