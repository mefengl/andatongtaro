# 安大通Taro版

## 配置

因项目开源，将后端API等敏感数据放入[项目文档库](https://ahuer.yuque.com/docs/share/b7f86141-33ee-4a06-8398-50467eee6f6a)中，需配置。

### @taro/cli

命令行工具升级，默认会更新到最新版本的cli工具，所以本地命令行工具需要及时升级。

```bash
npm -g uninstall @tarojs/cli
npm -g i @tarojs/cli
```

在本地cli升级后，如果项目版本落后，在项目目录下执行以下命令同步，该命令会自动更新 `project.json` 文件(更新后会自动执行yarn install操作，打断，删除package-lock.json和node_modules重新npm install)：

```bash
taro update project
```

## TODO

### 反馈
类似Taro项目，
1. 类issue的反馈页面
2. 通过bot自动周报

## 第三方库

### [Taro 框架](https://docs.taro.zone/docs/GETTING-STARTED)

### [Taroify UI库](https://taroify.gitee.io/taroify.com/quickstart/)

### Hooks

### [ahoooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)
一些通用的请求hooks。

### [taro hooks](https://taro-hooks-innocces.vercel.app/hooks/basic/use-app)

用一些为Taro定制的Hooks。

### Redux

#### [redux toolkit](https://redux-toolkit.js.org/tutorials/quick-start)

#### [redux 持久化](https://github.com/mefengl/redux-persist-taro-storage/tree/patch-1)

即将本地缓存作为redux数据库。

哪些情况下使用redux做状态管理？
1. 跨页面数据
2. 持久化数据

否则用hooks即可，优点是ahooks和taro-hooks提供了很多好用的轮子。

不建议嵌套使用redux和hooks。

## 界面
### [登录 Popup实现](https://taroify.gitee.io/taroify.com/components/popup/)。

## 其他

### dayjs

[dayjs官网](https://dayjs.gitee.io/zh-CN/)

提供很多日期相关的方法，比JS原生库简单许多。
