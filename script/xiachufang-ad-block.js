let headers = $response.headers;
let res = $response.body;

let response = JSON.parse(res);

let recipe_ad = {};
let splash_ad_req_time = 1;
let splash_sdk_ad_req_time = 1;
let wakeup_white_list = [];
let splash_ad_lifecycle_interval = 1;

if(response?.content?.recipe_ad){
	response.content.recipe_ad = recipe_ad;
}
if(response?.content?.splash_ad_req_time){
	response.content.splash_ad_req_time = splash_ad_req_time;
}
if(response?.content?.splash_sdk_ad_req_time){
	response.content.splash_sdk_ad_req_time = splash_sdk_ad_req_time;
}
if(response?.content?.wakeup_white_list){
	response.content.wakeup_white_list = wakeup_white_list;
}
if(response?.content?.splash_ad_lifecycle_interval){
	response.content.splash_ad_lifecycle_interval = splash_ad_lifecycle_interval;
}

let body = JSON.stringify(response);

$done({ headers, body });