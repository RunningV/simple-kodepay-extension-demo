### first step
去[kodepay官网](https://kodepay.io)注册账号，完成新手引导，这时你就具备在沙盒模式接入kodepay支付的能力了；
### second step
参考[官网文档](https://v0kc0b6j3jr.feishu.cn/wiki/IZ49wp8rWiWVUykkBBocfIf8nvd)，在你的插件中安装kodepay包
```npm install kodepay```

### third step
在自己插件的 manifest文件中添加存储权限：```permissions: ['storage'], ```
如果你需要处理登录成功或支付成功的回调，需要在在manifest中添加配置：
```
   "content_scripts": [
    {
    // your content-scripts
    },
    {
        "js": [
        "js/kodepayContent.js"
        ],
        "matches": [
        "https://kodepay.io/*",
        "https://fronted.kodepay.io/*"
        ],
        "run_at": "document_start"
        }
    ]
```
### fourth step
在kodepay官网后台获取如下参数：
```
const appIds = {
    application_id: 'your sanbox application_id',
    client_id: 'your sanbox client_id',
    plan_id: 'your sanbox plan_id',
    mode: 'development',
}
```
在background.js添加kodepay支付代码：
```
// service_worker
import {Kodepay} from "kodepay";
//You can find the application_id in the event callback settings page
//You can find the extension_id in the extension page
const kodepay_client = Kodepay.kodepay({application_id:"your application_id", "client_id":"your client_id", mode:"development"});
// get user info
kodepay_client.getUserInfo().then((user) => {
   console.log(user);
});

```
在插件页面添加button,页面到background.js的消息通讯需要您自己实现; 你可以通过按钮绑定触发不同的事件，如打开支付页面：
```
// open payment page
//You can find the plan_id in the plan page
kodepay_client.openPaymentPage({plan_id:"your plan_id"});
```

### one more step
通过以上步骤你可以完整的接入一个kodepay支付demo，如果你的支付流程开发完毕需要发布上线，您需要在kodepay后台切换到【正式模式】，然后再创建项目和套餐，替换对应的id和mode即可。
```
const appIds = {
    application_id: 'your production application_id',
    client_id: 'your production client_id',
    plan_id: 'your production plan_id',
    mode: 'production',
}
```