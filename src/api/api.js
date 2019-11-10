import axios from "axios"

import Vue from "vue"
import mork from "./mork"
import { isArray } from "common/js/util"

axios.defaults.headers.post['Content-Type'] = 'application/json';

function fetchData( path , opts ) {
    return async (params) => {
        let ret = {},
            url = '/api/portal/'+path,
            n_path = path

        if(/{id}/.test(path)) {
            url = url.replace('/{id}', '')
            n_path = path.replace('/{id}', '')
            url = url+'/'+params
        }

        await axios({
            method: opts && opts.method || 'get',
            url,
            //cache:false,
            params: params,
        }).then(res => {
            let data = res.data
            if(data.code == 0) {
                let morkData = mork[n_path],
                    sqlData = data.data,
                    realData = sqlData.organizational || sqlData
                
                //console.log(realData, morkData, path)
                for(let key in morkData) {
                    let realValue = realData[key] || morkData[key]

                    if(isArray(realValue)) {
                        if(realValue.length == 0 ){
                            realValue = morkData[key]
                        }
                    }
                    ret[key] = realValue
                }
            }
            //ret = mork[n_path]
        }).catch(err => {
            ret = mork[url]
        })
        
        return ret
    }
    // return 
}

//技术支持 

//公司简介
export const getCompanyProfile = fetchData('companyProfile')

//项目案例
export const getCaseList = fetchData('allCaseClassifyDetails')

//联系我们
export const getContactUs = fetchData('contactUs')

//合作伙伴 
export const cooperativePartner = fetchData('cooperativePartner')

//合作伙伴  GET /portal/
export const homeData = fetchData('homeData')

export const honor = fetchData('honor')
 
export const legalStatement = fetchData('legalStatement')

export const menuList = fetchData('menuList')
export const organizational = fetchData('organizational')

export const productDetails = fetchData('productDetails/{id}')

export const schemeDetails = fetchData('schemeDetails/{id}')

export const technicalSupport = fetchData('technicalSupport/{id}')


const getImg = (imgName) => {
    let src = imgName
    if(!/static/.test(imgName)) {
        src = `/api/portal/getFileStream/${imgName}`
    }
    return src
}

Vue.prototype.$api = {
    technicalSupport, 
    schemeDetails,  
    productDetails,  
    organizational,
    menuList, 
    legalStatement, 
    honor, 
    homeData, 
    cooperativePartner, 
    getContactUs,
    getCaseList, 
    getCompanyProfile, 
    getImg
}

 



