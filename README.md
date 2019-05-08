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
> 方式一：
直接添加： git subtree add --prefix=dist https://github.com/dale426/home.git master --squash
> 方式二：
简化命令  git remote add -f dist https://github.com/dale426/home.git
添加 git subtree add --prefix=dist dist master --squash
<!-- 父仓库提交 -->
> 推送
推送 git subtree push --prefix=dist/ sub master