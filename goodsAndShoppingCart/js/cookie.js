function setCookie(cname,cvalue,timelog){
	let d = new Date();
	d.setDate(d.getDate()+timelog);
	document.cookie = cname + "=" + escape(cvalue) + ";expires=" + d.toGMTString();
}
function getCookie(cname){
	let arr = unescape(document.cookie).split(";");
	for(let i in arr){
		if(arr[i].indexOf(cname+"=")==0){
			return arr[i].substring((cname+"=").length);
		}
	}
	return null;
}
function deleteCookie(cname){
	setCookie(cname,'',-1);
}