export default {
	// 判断是否 ios
	is_ios: function is_ios() {
	    let browserName = navigator.userAgent.toLowerCase();
	    return /(iphone|ipod|ipad)/i.test(browserName);
	},
	// 判断是否 安卓
	is_android: function is_android() {
	    let browserName = navigator.userAgent.toLowerCase();
	    return /(android)/i.test(browserName);
	},
	// 判断是否 微信浏览器
	is_wechat: function is_wechat() {
	    let browserName = navigator.userAgent.toLowerCase();
	    return /(MicroMessenger)/i.test(browserName);
	},
	// 普通页面回退
	back: function native_back() {
		let _json = JSON.stringify({
            event: "back",
            params: ""
        });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 普通页面进入
	jump: function native_jump(url) {
		let _json = JSON.stringify({
            event: "to_jump",
            params: {"url": url}
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 退出登入
	logout: function native_jump() {
		let _json = JSON.stringify({
            event: "logout",
            params:''
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},	
	// 微信支付
	wx_pay: function wx_pay(val) {
		let _json = JSON.stringify({
            event: "wx_pay",
            params:val
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 支付宝支付
	ali_pay: function ali_pay(val) {
		let _json = JSON.stringify({
            event: "ali_pay",
            params:val
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	//及时聊天
	chat: function chat(val) {
		let _json = JSON.stringify({
            event: "chat",
            params:val
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},	
	//上传头像
	upheadimg: function upheadimg() {
		let _json = JSON.stringify({
            event: "upheadimg",
            params:''
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},	
	//上传图片
	native_upload_img: function native_upload_img() {
		let _json = JSON.stringify({
            event: "native_upload_img",
            params:''
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	//分享
	share_it: function share_it(val) {
		let _json = JSON.stringify({
            event: "share",
            params:val
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},	
	// 销毁当前页
	jump_and_finish: function(url) {
		let _json = JSON.stringify({
            event: "jump_and_finish",
            params: {"url": url}
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 页面有弹层显示
	show_alert: function() {
		let _json = JSON.stringify({
            event: "show_alert",
            params: ""
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 页面没有弹层
	no_alert: function() {
		let _json = JSON.stringify({
            event: "no_alert",
            params: ""
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 通知APP支付
	pay: function (payInfo) {
		let _json = JSON.stringify({
            event: "native_pay",
            params: payInfo
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 返回时关闭多页,pageName: 页面路由
	close_multy_page: function(pageName) {
		let _json = JSON.stringify({
            event: "close_multy_page",
            params: pageName     // 数据格式，Array
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 点击扫码
	// scan_type, 1: 
	normal_scan: function(scan_type,role_type,app_scan_type) {
		let _json = JSON.stringify({
	        event: "normal_scan",
	        params: {
	        	scan_type: scan_type,
	        	role_type: role_type,
	        	app_scan_type: app_scan_type
	        }
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 调用内置浏览器
	open_browser: function(url) {
		let _json = JSON.stringify({
	        event: "native_browser",
	        params: {"url": url}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	}
}
