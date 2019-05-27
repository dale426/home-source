<template>
  <div class="tools">
    <h2 class="title">在线工具集</h2>
    <div class="tools-main">
      <ul>
        <li v-for="(item, index) in menuList" :key="index">
          <img :src="item.imgPath" alt="不支持显示">
          <a href="">{{item.name}}</a>
          <span>{{item.text}}</span>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tools',
  data() {
    return {
      menuList: [{
        imgPath: 'ss',
        name: 'regexper',
        text: '正则表达式在线验证'
      }]
    }
  }  
}
</script>
<style lang="less">
.tools{
  max-width: 960px;
  margin: 0 auto;
  color: #333;
  .title{
    text-align: center;
  }
}
</style>
