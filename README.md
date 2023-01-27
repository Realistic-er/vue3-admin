# admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- 箭头函数return问题 -->

<!-- css部分 -->
(1)cssreset部分：style--commen.scss,然后再app.vue文件中引入
（2）全局引入sass的mixin--参考https://juejin.cn/post/7008351287494311967
    水平垂直居中：封装css


<!-- 路由部分 -->
路由分为管理admin和游客tourist（权限管理）

在utils下的router.ts文件中封装路由区分函数，然后再引入到router文件夹中

<!-- 登录部分 -->
（1）背景图使用来自：assets/index.webp
（2）登录表单是进行组件封装

<1>登陆表单校验规则：
    登录账号：5个字符，是字母
    登录密码：5个字符，字母或者数字的组合
此处校验成功就是登录成功：弹出dialog，提示登录成功--本地存储账号和密码--根据登录账号进行权限分配，分配能看到的路由

路由构成：--首页 

         --文档

         

         --图标

         --组件
         
         --图表

         --table

         --综合实例

         --Tab

         --错误界面

         --错误日志

         --excel

         --zip

         --pdf

         --换肤

         --

权限分配：admax admin admid

admax--（所有都可以看到）

admin--()--权限测试页
            --页面权限
            --指令权限
            --角色权限

         --图标

         --组件
         
         --图表

         --table

         --综合实例

         --Tab

admid--()--文档

         --错误界面

         --错误日志

         --excel

         --zip

         --pdf

         --换肤


路由权限管理基本思路：
（1）导航栏数据的筛选
    路由数组放在vue-x中------layout组件去获取
（2）


store不使用原生的用法，使用插件Pinia

用法：
    （1）取消了mutations，actions既可以同步，也可以异步
    （2）defineStore中的this指生成的store

    安装pina：

        npm install pinia

    定义store：

        import { defineStore } from 'pinia'

        export const useStore = defineStore('main', {
            state: () => ({
                count: 0,
            }),
            getters: {
                // 自动推断出返回类型是一个 number
                doubleCount(state) {
                    return state.count * 2
                },
                // 返回类型**必须**明确设置
                doublePlusOne(): number {
                    // 整个 store 的 自动补全和类型标注 ✨
                    return this.doubleCount + 1
                },
            },
            actions: {
                increment() {
                    this.count++
                },
                randomizeCounter() {
                    this.count = Math.round(100 * Math.random())
                },
            },
        })

    组件内使用store：

vue路由权限管理思路：




<!-- 表格数据格式确定字段 -->
name--名称
image--图片（多图）
inputtime--进货日期
inputnumber--进货数量
buffer--库存
price--价格
sales--销量
notes--备注

<!-- 筛选 -->
(1)对销量，库存进行筛选
<!-- 批量新增/上传图片 -->
<!-- 删 -->
<!-- 改 -->
<!-- 查 -->
