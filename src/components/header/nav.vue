<template>
    <ul class="ul-01">
        <li
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
</template>
