<template>
    <section class="home__page">
        <canvas id="test"></canvas>
        <div>
            <!-- <logo /> -->
            <h2 class="title">小虫子的网络空间</h2>
            <p class="describe">{{juzi}}</p>

            <div class="links">
                <nav>
                    <div class="menu">
                        <ul class="clear">
                            <li>
                                <a href="https://blog.52yulong.cn" target="_blank" title="Blog">
                                    <i class="iconfont iconedit-square" aria-hidden="true"></i>
                                    <span class="link-text">网络日志</span>
                                </a>
                            </li>
                            <li>
                                <a href="/tools" title="Tool">
                                    <i class="iconfont iconwrench" aria-hidden="true"></i>
                                    <span class="link-text">在线工具集</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://music.163.com/#/user/home?id=289526154"
                                    title="Portfolio"
                                >
                                    <i class="iconfont iconcustomerservice" aria-hidden="true"></i>
                                    <span class="link-text">音乐天地</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://zhimap.com/gallery" title="Blog">
                                    <i class="iconfont iconheart" aria-hidden="true"></i>
                                    <span class="link-text">知识地图</span>
                                </a>
                            </li>
                            <li>
                                <a href="/about" title="AboutMe">
                                    <i class="iconmail iconfont" aria-hidden="true"></i>
                                    <span class="link-text">AboutMe</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="bottom-text">Space webSite ©2019 Created by yulonglee</div>
    </section>
</template>

<script>
import canvasE from '@/assets/js/ribbon_canvas.js';
import canvasC from '@/assets/js/circle_canvans.js';
export default {
    name: "home",
    data() {
        return {
            juzi: '“你是神明不渡的苦 却偏偏是我的救赎”'
        }
    },
    /*     async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error, $axios }) {
          try {
    
            const ip = await $axios.$get('/ju/5683749')
            var regexp = /<title>佳句赏析((?!句子迷).*)句子迷/;
            // var regexp = /id="xqtitle">((?!<\/div>)[\s\S]*<\/h1>)/;
            var juzi = regexp.exec(String(ip))[1];
    
            return { juzi }
          } catch (err) {
            
          }
        }, */
    components: {
    },
    mounted() {
        canvasE();
        canvasC();
    },
    methods: {    
    },

}
</script>

<style lang="less">
@import "./index.less";
canvas {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    // background-color: black;
}
</style>


