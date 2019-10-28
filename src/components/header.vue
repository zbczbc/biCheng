<template>
    <div class="header-wrap">
        <div class="layout">
            <div class="log fl" >
                <img-box type="logo" m="26 0 0 0"></img-box>
            </div>
            <div class="nav fr">
                <ul class="ul-01">
                    <li class="tra"
                        v-for="(item,index) in navList"
                        :key="item.name"
                        :class="{active: index==activeIndex}"
                        @click="onClick(item)"
                        @mouseleave="onMouseOut"
                        @mouseenter="onMouseOver(index)">
                        <span>{{item.name}}</span>

                        <ul class="ul-02"
                            :class="{'ul-03':item.children&&item.children.length>4}"
                            v-if="item.children&&hoverIndex==index">
                            <li v-for="item02 in item.children">{{item02.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <ul class="down-bg ani-hei" :class="bgClass">
            <!-- <li v-for="item02 in navList[1].children">{{item02.name}}</li> -->
        </ul>

        <div class="icon por">
            <img-icon type="menu" w=28 h=28 m="15 10 0 0"></img-icon>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            isShowChild: false,
            hoverIndex: 0,
        }
    },
    methods: {
        onMouseOver(index) {
            let mouseItem = this.navList[index]
            this.hoverIndex = index
            
            if(mouseItem.children) {
                this.isShowChild = true
            }else{
                this.isShowChild = false
            }
        },
        onMouseOut() {
           
            this.isShowChild = false
            this.hoverIndex = 0
        },
        onClick(item) {   
            
            //console.log(12)
            this.$router.push(item.path)
        },
        _initData() {
            this.navList = [
                { name: '首页', path: '' },
                { name: '走进碧城', path: '',
                    children: [
                        { name: '公司简介', path: '' },
                        { name: '组织架构', path: '' },
                        { name: '资质荣誉', path: '' },
                    ]
                },
                { name: '产品介绍', path: '',
                    children: [
                        { name: '产品1', path: '' },
                        { name: '产品2', path: '' },
                        { name: '产品3', path: '' },
                        { name: '产品4', path: '' },
                        { name: '产品5', path: '' },
                    ]
                },
                { name: '场景方案', path: '/introduce' },
                { name: '合作伙伴', path: '' },
                { name: '项目案例', path: '' },
                { name: '联系我们', path: '' },
            ]
        }
    },
    computed: {
        bgClass() {
            let childNav = this.navList[this.hoverIndex].children
            if( childNav ) {
                return childNav.length > 4 ? 'moreRow' : 'oneRow'
            }else{
                return ""
            }
        }
    },
    created() {
        this._initData()
    }
}
</script>

<style lang="stylus" scoped>
$blue = #17a7da

.header-wrap{
    position: relative; z-index: 10; background:#fff; position: fixed; width: 100%;
    .nav{
        .ul-01>li{
            float:left; padding: 0 3px; margin:0 20px; line-height: 100px; cursor:pointer;
            position: relative;
            &:before{
                content: "";height:3px; width:0%; position:absolute; top:0; left:50%; background: $blue;
                transition: all 0.3s ease; transform: translateX(-50%);
            }
            &.active,&:hover{
                span {
                    color: $blue;
                }
                &:before{
                    width: 100%;
                }
            }
        }
    }
}

.down-bg{
    background:rgba(34,34,34,0.4); color: #fff; width:100%; position: absolute; top: 100px; z-index:1;
    height: 0;
    &.moreRow{
        height: 300px;
    }
    &.oneRow{
        height: 70px;
    }
}

.ul-02{
    top: 100%; width: 400px; left: 0; position: absolute; z-index: 1; color:#fff;
    >li {
        float:left; margin-right: 40px; line-height: 70px; height:70px;

        &.active,&:hover{
           color: $blue;
        }
    }
}

.ul-03 >li{
    width: 160px;
}



</style>
