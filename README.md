# Nuxt
> yulongLee的个人网站首页

## Build Setup

``` bash
# 安装依赖
$ npm install 或者 yarn install

# 启动项目 & 热更新 at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# 构建静态网站文件
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## core-js报错解决
1. 使用npm install 安装
2. npm i core-js@2.6.5


## git subtree 
> [子仓库关联教程](https://segmentfault.com/a/1190000012002151?utm_source=tag-newest)

- 添加远程地址
              
    git remote add -f dist https://github.com/dale426/home.git

- 执行命令

    npm run github