# vue-ssr

> ssr

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## core-js报错解决
1. 使用npm install 安装
2. npm i core-js@2.6.5


## git subtree

[子仓库关联教程](https://segmentfault.com/a/1190000012002151?utm_source=tag-newest)

添加 git subtree add --prefix=sub https://github.com/dale426/nuxt-home.io.git master --squash
<!-- 父仓库提交 -->
推送 git subtree push --prefix=dist/ sub master