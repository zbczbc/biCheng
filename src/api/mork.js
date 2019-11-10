const companyProfile = {
    bannerPicture: {
        imgName: 'static/about-banner.png',
        content: '帮助以智慧城市为新型可持续发展目标的集团提供全面的智慧城市系统建设及服务',
        imgTitle: "探索未来发展"
    },
    enterpriseInfo: {
        content: '深圳市碧城智慧科技有限公司（简称碧城智慧）是中国首家完成智慧城市、智慧园区、智慧社区、智慧酒店、智慧工地、城市会客厅（展厅）六大主题场景从顶层规划到建设运营的系统平台建设、产业招商运营、系统平台运维、智慧物业服务全产业链智慧化解决方案与建设运营服务提供商。公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、大数据平台），公司依托自研智慧城市系统平35台（包含物联网平台、互联网业务平台、聚合支付平台、大数据平台）公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、 大数据平台）公司依托自研智慧城市系统平台（包含物联网平台、互联网业务平台、聚合支付平台、大数据平台）利用AI人工智能利用AI人工智能利用AI人工智能 利用AI人工智能、物联网IoT、移动互联网、5G等技术实现城市场景中的运营平台化、设备数字化、值守无人化、业务流程化、管理中心化、数据可视化，达到降低建设成本、提升用户体验、管理降本增效等目标。公司目前与百度、思科、华为、小米、依图、阿里等搭建智慧产业生态圈，并与行业知名机构成立联合实验室',
        imgName: 'static/about-pic.jpg',
        imgTitle:  `碧城智慧科技——智慧城市行业领先者 <br/> 全产业链智慧城市解决方案与运营服务提供商`
    },
}

//企业架构
const organizational = {
    PictureName: 'static/org.png',
    title: '公司现有人员150多人，其中100%本科以上学历，博士学历以上4人'
}

const menuList = {
    caseClassifyList: [
        { name: '智慧园区' , path: '/case' },
        { name: '智慧社区' , path: '/case' },
        { name: '智慧酒店' , path: '/case' },
        { name: '智慧商业' , path: '/case' },
    ],
    productList: [
        [
            { name: '物联网IoT平台', path: '/product' },
            { name: '智慧运营服务平台', path: '/product' },
            { name: '大数据分析平台', path: '/product' },
            { name: '智慧安全', path: '/product' },
            { name: '智慧交通', path: '/product' },
            { name: '智慧办公', path: '/product' },
            { name: '智慧家庭', path: '/product' },
            { name: '智慧生活', path: '/product' },
            { name: '智慧环境', path: '/product' },
            { name: '智慧楼宇', path: '/product' },
        ]
    ],
    schemeList: [
        { name: '产业园区', id: '1' , path: '/scene' },
        { name: '智慧社区', id: '1' , path: '/scene' },
        { name: '智慧酒店', id: '1' , path: '/scene' },
        { name: '智慧商业', id: '1' , path: '/scene' },
    ]
}

//资质荣誉
const honor = {
    pictureList: {
        currPage: 1,
        list: [
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
            { src: 'static/honor-pic.jpg' , title: '智慧停车场管理系统' , date: '2009-01' },
        ],
        pageSize: 12,
        totalCount: 3,
        totalPage:1
    },
    title: '公司自研的智慧园区平台荣获2018年APICTA亚太信息通信科技大奖赛奖项。替换下面的专利图片。'
}

//产品页面
const productDetails = {
    content: '小贩机器人结合最新市场趋势及需求研发的针对零售行业的一款全自主移动零售服务机器人,具有专利百余项。能够在复杂环境中主动寻找目标客户进行商品推广及销售,使小贩成为全新的流量平台。',
    title: '无人驾驶汽车',
    introduce: [
        'static/xq.jpg',
    ],
    preview: [
        'static/product-01.png', 'static/product-02.png',
        'static/product-03.png', 'static/product-04.png'
    ],
    solutionResults: [
       '产品这里是解决问题的标题这里是解决问题的标题介绍',
       '产品这里是解决问题的标题这里是解决问题的标题介绍',
       '产品这里是解决问题的标题这里是解决问题的标题介绍',
       '产品这里是解决问题的标题这里是解决问题的标题介绍',
       '产品这里是解决问题的标题这里是解决问题的标题介绍',
       '产品这里是解决问题的标题这里是解决问题的标题介绍',
    ],
    technicalData: [
        'static/product-2.jpg'
    ],
    trait: [
        { imgName: "static/product-icon1.png", imgTitle: '全新、高效的运行方式' },
        { imgName: "static/product-icon2.png", imgTitle: '5大场景需求' },
        { imgName: "static/product-icon3.png", imgTitle: '主动到你身边,给你想要' },
        { imgName: "static/product-icon4.png", imgTitle: '够能装、够好用' }
    ]
}

const schemeDetails = {
    bannerPicture: {
        imgName: 'static/about-banner.png',
        imgTitle: '场景方案',
        content: '智慧资管·智慧物联·智慧服务”全场景一体化解决方案'

    },
    content: "依托自研的智慧园区系统总平台，搭建物联网、互联网运营、支付、大数据、可视化五个子平台，可以实现园区80多个物联网设备系统及30多个业务系统的统一管理，提高管理效能，抓取管理大数据。",
    itemList: [
        { iconImg: 'static/scene-1.png', introduceImg: 'static/scene-c1.jpg', title: '智慧园区运营平台', content: '入驻企业、企业员工、住宅业主、访客、酒店住客、运营人员、游客、合作伙伴' },
        { iconImg: 'static/scene-2.png', introduceImg: 'static/scene-c2.jpg', title: '智慧园区运营平台', desc: '4平台+2中心+N场景应用+资源开放接入' },
        { iconImg: 'static/scene-3.png', introduceImg: 'static/scene-c3.jpg', title: '智慧园区运营平台', desc: '集中监控、统一管控、实时数据分析决策、自动维修派单' }
    ],
    title: "智慧园区场景方案"
}

const cooperativePartner = {
    bannerPicture: {
        imgTitle: '合作伙伴',
        content: '诚信合作 互惠共赢 稳步发展 ',
        imgName: 'static/contact-banner.png'
    },
    logoList: {}
}

const allCaseClassifyDetails = {
    bannerPicture: {
        imgTitle: '项目案例',
        content: '20年园区运营经验，40+大型园区服务经验，解决国家3大新型智慧产业方向，推进产业一体化智慧运营 ',
        imgName: 'static/case-banner.png'
    },
    classifyList: []
}

const contactUs = {
    bannerPicture: {
        imgTitle: '联系我们',
        content: '赋能企业成长 助力产业发展',
        imgName: 'static/contact-banner.png'
    },
    addressInfoList: [
        { addressTitle: '总部地址', contactInfo: {
            addressTitle: '总部地址',
            contacts: '邓经理',
            detailedAddress: '广东省深圳市南山区桑达大厦13楼',
            email: "bczh@bgysmartcity.com",
            phone: "0532-66773517" }  }
    ],
    qcCode: 'static/qr.png'
}

const homeData = {
    bannerList: [],
    copyright: '深圳市碧城智慧科技有限公司',
    videoName: 'static/video.mp4'
}

const legalStatement = {
    content: ""
}

const technicalSupport = {
    content: ""
}

export default {
    companyProfile,
    organizational,
    menuList,
    honor,
    productDetails,
    schemeDetails,
    cooperativePartner,
    allCaseClassifyDetails,
    contactUs,
    homeData,
    legalStatement,
    technicalSupport
}


// tabList: [
//     { name: '惠州潼湖科技小镇', id: "" },
//     { name: '惠州潼湖科学城', id: "" },
//     { name: '广州CBD项目', id: "" },
// ],
// tabContent: [
//     { arr: [
//         { src: 'static/case.jpg', label: '酒店外观' },
//         { src: 'static/case.jpg', label: '科技小镇效果图' },
//     ] },
//     { arr: [
//          { src: 'static/case.jpg', label: '酒店外观' },
//         { src: 'static/case.jpg', label: '科技小镇效果图' },
//     ] },
//     { arr: [
//          { src: 'static/case.jpg', label: '酒店外观' },
//         { src: 'static/case.jpg', label: '科技小镇效果图' },
//     ] }
// ],
// mtabContent: [
//     { src: 'static/case.jpg', label: '酒店外观' },
//     { src: 'static/case.jpg', label: '科技小镇效果图' },
//     { src: 'static/case.jpg', label: '酒店外观' },
//     { src: 'static/case.jpg', label: '科技小镇效果图' },
//     { src: 'static/case.jpg', label: '酒店外观' },
//     { src: 'static/case.jpg', label: '科技小镇效果图' },
// ],