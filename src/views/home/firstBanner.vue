<template>
    <div class="first-banner tra">
        <div class="text-box" v-if="item">
            <div class="tit">
                <c-b :content=item.title></c-b>
            </div>
            <div class="sub-desc">
                <c-b :content=item.describe></c-b>
            </div>

            <div class="icons-group">
                <div class="list cp" v-for="(icon,index) in iconesGroup" :key="index" @click="onIconClick(icon)">
                    <img-icon :type=icon.type class="ilm" :w=icon.w :h=icon.h m="0 5 0 0"/>
                    <span class="ilm">{{icon.label}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {}
    },
    data() {
        return {
            iconesGroup: []
        }
    },
    methods: {
        _initData() {
            this.iconesGroup = [
                { type: 'home-zone', w: 29, h: 29, label: '智慧园区',},
                { type: 'home-shequ', w: 31, h: 31, label: '智慧社区' },
                { type: 'home-hotel', w: 28, h: 27, label: '智慧酒店' },
            ]
        },
        onIconClick(icon) {
            let route = `/scene?id=${this.schemeMap[icon.label]}`
            if(route) {
                this.$router.push(route)
            }
        },
        setCanvas() {
            setTimeout(() => {
                    // 画布
                var config = {
                        vx: 4,//点x轴速度,正为右，负为左
                        vy:  4,//点y轴速度
                        height: 2,//点高宽，其实为正方形，所以不宜太大
                        width: 2,
                        count: 50,//点个数
                        color: "170, 170, 170",//点颜色
                        stroke: "127,127,127",//线条颜色
                        dist: 6000,//点吸附距离
                        e_dist: 20000,//鼠标吸附加速距离
                        max_conn: 5//点到点最大连接数
                    }
                CanvasParticle(config);     //调用
            }, 3000);
        }
    },
    created() {
        this._initData()
        this.setCanvas()

        this.$root.$on('getSchemeSuccess', schemeList => {
            this.schemeMap = {}
            schemeList.map(item => this.schemeMap[item.name] = item.id)
        })
    }
}
</script>

<style lang="stylus" scoped>



.text-box
    calcmedia('h', 360px, auto);

    transform: translateY(-50%);top: 50%; pb();
    position absolute; text-align center; width 100%;

    .tit
        font-size: px2vw(62);
        calcmedia('sz', px2vw(62), 30px, 26px)
        calcmedia('lh', px2vw(90), 45px); margin 20px 0 25px;
    .sub-tit
        font-size: px2vw(54); margin 20px 0 25px;
    .sub-desc
        font-size: px2vw(24); padding 0 10px; iconUrl_c("tbg.jpg"); display: inline-block; border-radius: 44px;
        height: 44px; line-height: 44px;


.icons-group{
    calcmedia('m', 50px auto, 20px auto)
    width: 600px; display: flex;
    .list{
        calcmedia('p', 0 0 0 20px, 0 0 0 8%)
        flex:1; t(center); m(0 0 10px 0);
    }
}

.first-banner{
    z-index: 10; height: 100%; width: 100vw; position: absolute; top: 0;
}

</style>
