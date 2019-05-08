<template>
    <section class="home__page">
        <div>
            <!-- <logo /> -->
            <h2 class="title">李玉龙的个人网站</h2>
            <p class="describe">{{juzi}}</p>

            <div class="links">
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                >
                <nav>
                    <div class="menu">
                        <ul class="clear">
                            <li>
                                <a href="https://blog.52yulong.cn" target="_blank" title="Blog">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <span class="link-text">网络日志</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Tool">
                                    <i class="far fa-lightbulb" aria-hidden="true"></i>
                                    <span class="link-text">在线工具集</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Portfolio">
                                    <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                                    <span class="link-text">暂未开放</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Blog">
                                    <i class="far fa-comment" aria-hidden="true"></i>
                                    <span class="link-text">暂未开放</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Contact">
                                    <i class="far fa-envelope" aria-hidden="true"></i>
                                    <span class="link-text">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            juzi: ''
        }
    },
    async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error, $axios }) {
        const ip = await $axios.$get('/ju/5683749')
        var regexp = /<title>佳句赏析((?!句子迷).*)句子迷/;
        // var regexp = /id="xqtitle">((?!<\/div>)[\s\S]*<\/h1>)/;
        var juzi = regexp.exec(String(ip))[1];

        return { juzi }
    },
    components: {
    },
    mounted() {

    },

}
</script>

<style lang="less">
@import "./index.less";
</style>
