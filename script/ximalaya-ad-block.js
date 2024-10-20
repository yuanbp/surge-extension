let headers = $response.headers;
let res = $response.body;

let response = JSON.parse(res);

let data = {
  "isAdShow": false,
  "isNewUser": false,
  "userType": 3,
  "is28DaysRecall": false
};

if(response.data){
	response.data = data;
}
let body = JSON.stringify(response);

$done({ headers, body });