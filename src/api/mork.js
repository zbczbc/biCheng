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

}


export default {
    companyProfile,
    organizational,
    menuList,
    honor,
    productDetails
}