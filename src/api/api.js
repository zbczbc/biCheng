import { fetchData, baseUrl, submitData, isDev } from "./fetch"
import Vue from "vue"

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

export const technicalSupport = fetchData('technicalSupport')

export const saveOnlineMsg = fetchData('saveOnlineMsg', { method: 'post' })

//招聘
export const getJoinInfoList = fetchData('jobInfoList')
export const jobApply = submitData('jobApply')

//新闻 /portal/addBrowseCount/{newsId}
export const getNewsTypeList = fetchData('getNewsTypeList')
export const getNewsList = fetchData('getNewsList')
export const addBrowseCount = fetchData('addBrowseCount/{id}')

//友情链接
export const getLinksList = fetchData('getLinksList')

//留言类别
export const getMsgTypeList = fetchData('getMsgTypeList')
export const getIndexBanner = fetchData('indexBanner')

export const getNewsDetail = fetchData('getNewsDetail/{id}')

let isBGY = window.location.host.indexOf('bgysmartcity') > -1

const getImg = (imgName) => {

    let host = isBGY ? 'http://www.bgysmartcity.com/' : 'http://120.77.220.34',
        src = imgName
    if(!/static/.test(imgName)) {
        src = `${host}//file/${imgName}`
    }
    return src
}

Vue.prototype.$api = {
    technicalSupport, getNewsTypeList,  getNewsList,  addBrowseCount,  getLinksList,
    schemeDetails, getMsgTypeList, getIndexBanner, getNewsDetail,
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
    getImg,
    getJoinInfoList,
    jobApply,
    saveOnlineMsg
}
