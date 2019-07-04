<template>
    <div class="tools">
        <div class="tools__main-title">在线工具集</div>
        <div class="tools__main-items">
            <!-- 分类工具 -->
            <div class="tools__wrapper" v-for=" (item, index) in menuList" :key="index">
                <div class="tools__title">{{item.title}}</div>
                <div class="tools__content">
                    <div
                        class="tools__item"
                        v-for="(subItem, subIndex) in item.children"
                        :key="subIndex"
                    >
                        <div class="tools__item-container">
                            <div class="tools__item-logo">
                                <a :href="subItem.url" target="_blank">
                                    <img
                                        :src="subItem | imgData"
                                        alt="不支持显示"
                                    >
                                </a>
                            </div>
                            <div class="tools__item-desc">
                                <p class="tools__item-title">
                                    <a :href="subItem.url" target="_blank">{{subItem.title}}</a>
                                </p>
                                <p class="tools__item-sub">{{subItem.desc}}</p>
                                <p class="tools__item-links">
                                    <a href="#">
                                        <i class="iconfont iconcloud"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import categoryList from '@/assets/js/toolsData.js'
export default {
    name: 'tools',
    data() {
        return {
            menuList: []
        }

    },
    created() {
        this.menuList = categoryList;
    },
    filters: {
        imgData(subItem) {
            return subItem.imgUrl || require(`@/assets/img/tool/${subItem.imgName}`)
        }
    }
}
</script>
<style lang="less">
@import "./index.less";
</style>
