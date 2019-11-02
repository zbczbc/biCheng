<template>
    <div class="contact-page">
        <div class="map" ref="map"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    created() {
        this.$nextTick(() => {
            let map =new BMap.Map(this.$refs.map)
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        })
    }
}
</script>

<style lang="stylus" scoped>
.map{
    width: 100vw; height: 400px;
}
</style>
