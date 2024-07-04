// service_worker
import {Kodepay} from "kodepay";
//You can find the application_id in the event callback settings page
//You can find the extension_id in the extension page
const appIds = {
    application_id: 'eb24a79a-0b70-11ef-897b-86d74d3c0885',
    client_id: '04d93e58-0b71-11ef-8175-fea4681a8084',
    plan_id: 'prod_fc86942322bf4c1d',
    mode: 'development',
}

const kodepay_client = Kodepay.kodepay({application_id: appIds.application_id, client_id:appIds.client_id, mode:"development"});
// get user info
kodepay_client.getUserInfo().then((user) => {
   console.log(user);
});

//支付完成的回调
kodepay_client.onPayCompleted.addListener((user, status) => {
    console.log(user, status);
});
// open login in page
// kodepay_client.openLoginPage();
// open user management page
//  kodepay_client.openUserManagementPage();
// open payment page
//You can find the plan_id in the plan page
// kodepay_client.openPaymentPage({plan_id: appIds.plan_id});

// 在background脚本中监听来自popup的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Message received from popup:", message);
    if(message.message === 'payment') {
        // kodepay_client.open_user_management_page();
        kodepay_client.openPaymentPage({plan_id: appIds.plan_id});
    }
});