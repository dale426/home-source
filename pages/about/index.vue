<template>
    <div class="about__me">
        <header class="about-header">这里都是关于我</header>
        <div class="about-main">
            <h3 class="about_title">
                <a href="#">#</a> 身份
            </h3>
            <ul class="about_items-body">
                <li>实习设计师转行的程序猿👨‍💻‍</li>
                <li>专注于前端开发💻‍</li>
            </ul>
            <h3 class="about_title">
                <a href="#">#</a> 慎
            </h3>
            <ul class="about_items-body">
                <li>慧极必伤，情深不寿，强极则辱，谦谦君子，温润如玉。</li>
                <li>不能沉迷和满足于单纯的代码编写中，要有独立的思考，因为他不是我们生活的全部，如果每天的工作成了跟吃饭喝水一样的自然，这将会扼杀我们的想象力、创造力。</li>
            </ul>
            <h3 class="about_title">
                <a href="#">#</a> 规划
            </h3>
            <ul class="about_items-body">
                <li>坚持锻炼，身体永远是第一革命本钱</li>
                <li>世事浮沉、保持好的心态，随波但不逐流</li>
                <li>能持续学习、写博客</li>
            </ul>
            <h3 class="about_title">
                <a href="#">#</a> 兴趣
            </h3>
            <ul class="about_items-body">
                <li>Cooking、做饭也是一种减压的方式</li>
                <li>码代码、户外、羽毛球、台球、爬山</li>
                <li>如果你也是、欢迎加我，一起探讨技术，一起浪</li>
            </ul>
            <h3 class="about_title">
                <a href="#">#</a> 联系我
            </h3>
            <ul class="about_items-body">
                <li>
                    <a href="https://juejin.im/user/5872fbba8d6d81006c36ec7f">掘金关注我</a>
                </li>
                <li>微信、XCZ426</li>
            </ul>
        </div>
        <a class="back-index" title="回到首页" href="\"><i class="iconfont iconshouye"></i></a>
    </div>
</template>
<script>
export default {
    name: 'about-me',
    data() {
        return {

        }
    }
}
</script>
<style lang="less">
.about__me {
    background: #ededed;
    min-height: 100vh;
    .about-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        background-image: linear-gradient(90deg, #222325, #3b3c3f, #222325);
        color: #fff;
        font-size: 24px;
        font-weight: 500;
        position: sticky;
        top: 0;
        box-shadow: 0 2px 10px #666;
    }
    .about_title {
        padding: 20px 10px;
        border-bottom: 1px dashed #999;
    }
    .about-main {
        width: 800px;
        margin: auto;
        padding-bottom: 200px;
        ul {
            padding-top: 15px;
            padding-left: 40px;
            & > li {
                list-style: circle;
                line-height: 2em;
            }
        }
    }
    .back-index {
        position: fixed;
        top: 100px;
        left: -20px;
        padding: 2px 5px;
        border: 1px solid #555;
        border-radius: 4px;
        display: inline-block;
        font-size: 14px;
        color: #555;
        text-decoration: none;
        transition-property: background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        .iconshouye {
          font-size: 20px;
        }
        &:hover{
          background: #222325;
          color: #fff;
          left: 0;
          font-weight: bolder;
        }
    }
}
</style>
