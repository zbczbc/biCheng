import axios from "axios"

axios.defaults.headers.post['Content-Type'] = 'application/json';

async function fetchData( opts ) {
 
    return await axios({
        method: opts.method || 'get',
        url: '/api'+opts.url,
        //cache:false,
        params: opts.params,
    }).then(res => {
        let data = res.data
        if(data.code == 0) {
            return data.data
        }
    })
}

export const getTechnicalSupport = params => {
    return fetchData({
       url: `/portal/technicalSupport`,
       params
    });
 };

export const getHonor = params  => {
    return fetchData({
        url: `/portal/honor`,
        params,
     });
}
