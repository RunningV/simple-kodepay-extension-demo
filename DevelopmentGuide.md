### first step
Go to the [kodepay official website](https://kodepay.io) to register an account and complete the novice guide. Then you will have the ability to access kodepay payment in sandbox mode.
### second step
Refer to the [official website documentation](https://v0kc0b6j3jr.feishu.cn/wiki/IZ49wp8rWiWVUykkBBocfIf8nvd) and install the kodepay package in your plugin
```npm install kodepay```

### third step
Add storage permissions to your plugin's manifest file:```permissions: ['storage'], ```
If you need to handle callbacks for successful login or payment, you need to add configuration in the manifest:
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
Get the following parameters in the background of kodepay official website:
```
const appIds = {
    application_id: 'your sanbox application_id',
    client_id: 'your sanbox client_id',
    plan_id: 'your sanbox plan_id',
    mode: 'development',
}
```
Add kodepay payment code in background.js:
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
Add a button to the plugin page. You need to implement the message communication from the page to background.js yourself. You can trigger different events through button binding, such as opening the payment page:
```
// open payment page
//You can find the plan_id in the plan page
kodepay_client.openPaymentPage({plan_id:"your plan_id"});
```

### one more step
Through the above steps, you can fully access a kodepay payment demo. If your payment process is developed and needs to be released online, you need to switch to [Official Mode] in the kodepay background, and then create projects and packages, and replace the corresponding id and mode.
```
const appIds = {
    application_id: 'your production application_id',
    client_id: 'your production client_id',
    plan_id: 'your production plan_id',
    mode: 'production',
}
```