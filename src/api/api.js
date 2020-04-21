import { fetchData, baseUrl, submitData } from "./fetch"
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

export const saveOnlineMsg = fetchData('saveOnlineMsg', { method: 'POST' })

//招聘
export const getJoinInfoList = submitData('jobInfoList')
export const jobApply = fetchData('jobApply', { method: 'POST' })

//新闻 /portal/addBrowseCount/{newsId}
export const getNewsTypeList = fetchData('getNewsTypeList')
export const getNewsList = fetchData('getNewsList')
export const addBrowseCount = fetchData('addBrowseCount/{id}')

//友情链接 
export const getLinksList = fetchData(getLinksList)

//留言类别
//export const technicalSupport = fetchData('technicalSupport')


const getImg = (imgName) => {
    let src = imgName
    if(!/static/.test(imgName)) {
        src = `${baseUrl}/portal/getFileStream/${imgName}`
    }
    return src
}

Vue.prototype.$api = {
    technicalSupport, getNewsTypeList,  getNewsList,  addBrowseCount,  getLinksList, 
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
    getImg,
    getJoinInfoList,
    jobApply,
    saveOnlineMsg
}
