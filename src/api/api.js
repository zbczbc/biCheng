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

//技术支持
export const getTechnicalSupport = params => {
    return fetchData({
       url: `/portal/technicalSupport`,
       params
    });
 };

//荣耀资质
export const getHonor = params  => {
    return fetchData({
        url: `/portal/honor`,
        params,
     });
}

//项目案例
export const getCaseList = params  => {
    return fetchData({
        url: `/portal/allCaseClassifyDetails`,
        params,
     });
}
