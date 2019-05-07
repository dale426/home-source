<template>
    <section class="container">
        <div>
            <!-- <logo /> -->
            <h2 class="title">小虫子的个人网站</h2>
            <h4 class="describe">{{juzi}}</h4>
       
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="button--grey"
                >GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
    name: "home",
    data() {
      return {
        juzi: ''
      }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
      const ip = await $axios.$get('/ju/5683749')
      var regexp = /<title>佳句赏析((?!句子迷).*)句子迷/;
      // var regexp = /id="xqtitle">((?!<\/div>)[\s\S]*<\/h1>)/;
      var juzi = regexp.exec(String(ip))[1];

      return { juzi }
    },
    components: {
        Logo
    },
    mounted() {
      
    },

}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding: 40px 0;
}

.links {
    padding-top: 15px;
}
</style>
