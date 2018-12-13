window.onload = function(){
	
	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}

	function init(username){
		if(username!=null){
			$("#is").innerHTML = username;
			$("#zhu").style.display = "inline-block";
			$("#deng").style.display = "none";
		}else{
			$("#zhu").style.display = "none";
			$("#deng").style.display = "inline-block";
		}
	}
	let username = getCookie("username");
	init(username);

	$("#btn_zhu").onclick = function(){
		deleteCookie("username");
		$("#zhu").style.display = "none";
		$("#deng").style.display = "inline-block";
	}

//	导航栏
	jQuery(".nav").slide({ 
		type:"menu",
		titCell:".m",
		targetCell:".sub",
		delayTime:0, 
		triggerTime:0,
		returnDefault:true  
	});
//  搜索框模糊查询
	let myTimer = null;
	$("#querystr").onkeyup = function(){
		if(myTimer!=null){
			window.clearTimeout(myTimer);
			myTimer = null;
		}
		myTimer = setTimeout(()=>{
			if(this.value==""){
				$("#goodslist").style.display = "none";
				return;
			}
			ajax01(
				"get",
				"goodsAndShoppingCart/getGoodsInfo.php",
				"querystr="+$("#querystr").value,
				true,
				showData
			);	
		},30);
	}
	function showData(data){
		let objs = JSON.parse(data);
		if(objs.length==0){
			$("#goodslist").style.display = "none";
			return;
		}
		let htmlStr="";
		for(let i=0;i<objs.length;i++){
			htmlStr+='<li><a href="#">'+objs[i].goodsName+'</a></li>';		
		}	
		$("#goodslist").innerHTML = htmlStr;
		$("#goodslist").style.display = "block";
		window.onclick = function(){
			$("#goodslist").style.display = "none";
		}
		$("#btn").onclick = function(){
			location.href = "xiangqing.html";
		}
	}
	jQuery("body").delegate('a','click',function(){
		$("#querystr").value = this.innerHTML;
	});
//	购物车	
	$("#con_r").onmouseenter = function(){
		setTimeout(function(){
			$("#shop").style.display = "block";
		},500)
	};
	$("#con_r").onmouseleave = function(){
		setTimeout(function(){
			$("#shop").style.display = "none";
		},500)
	};
//	竖向导航
	jQuery(".me").slide({ 
		type:"menu",
		titCell:".sec",
		targetCell:".menu_con",
		delayTime:0, 
		triggerTime:0,
		defaultPlay:false,
		returnDefault:true  
	});
//	轮播图
	jQuery(".bg").slide({ 
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"left",  
		autoPlay:true, 
		autoPage:true,
		trigger:"click" 
	});
	jQuery(".menu_ld").hover(function(){
		jQuery(".mes").show("normal");
	},function(){
		jQuery(".mes").hide("normal");
	});
//动态创建中间内容
let cards = $(".m_card");
for(let i=0;i<cards.length;i++){
	let ps = document.createElement("p");
	ps.className = "m_card1";
	let imgs = document.createElement("img");
	imgs.src = "img/1 (1).png";
	ps.appendChild(imgs);
	cards[i].appendChild(ps);
	let aDom = document.createElement("a");
	aDom.href = "xiangqing.html";
	aDom.className = "m_card_pic";
	let imgdom = document.createElement("img");
	imgdom.src = "img/" + (i+1) + ".jpg";
	aDom.appendChild(imgdom);
	cards[i].appendChild(aDom);
	let hs = document.createElement("h3");
	let asdom = document.createElement("a");
	asdom.href = "xiangqing.html";
	asdom.innerHTML = "澳洲和牛 M6+组合";
	hs.appendChild(asdom);
	cards[i].appendChild(hs);
	let divs = document.createElement("div");
	divs.className = "m_card_price";
	let pdom = document.createElement("p");
	pdom.innerHTML = "800克";
	let pdoms = document.createElement("p");
	pdoms.innerHTML = "￥199";
	let deldom = document.createElement("del");
	deldom.innerHTML = "425";
	pdoms.appendChild(deldom);
	let idom = document.createElement("i");
	idom.className = "icon icon-cart-mid";
	divs.appendChild(pdom);
	divs.appendChild(pdoms);
	divs.appendChild(idom);
	cards[i].appendChild(divs);
}


	//创建遮罩层 
	let ulDom = $(".mem");
	let arr = ["img/1.png","img/2.png","img/3.png"];
	for(let i=0;i<ulDom.length;i++){
		let liDom = document.createElement('li');
		let aDom = document.createElement('a');
		liDom.className = "men_l";
		let imgs = document.createElement("img");
		imgs.src = arr[i];
		aDom.appendChild(imgs);
		liDom.appendChild(aDom);
		ulDom[i].onmouseenter = function(){
			liDom.style.top = "0px";
			liDom.style.transition = ".4s";
		};
		ulDom[i].onmouseleave = function(){
			liDom.style.top = "270px";
		}
		ulDom[i].appendChild(liDom);
	}
//	回到顶部点击事件
	jQuery("#returnTop").click(function(){
		jQuery('html').animate({scrollTop:0},500);
		return false;
	});
//	获取滚动条的距离
	jQuery(window).scroll(function(){
		let scrollTop = jQuery(window).scrollTop();
		if(scrollTop>200){
			jQuery(".foot_ce").css("display","block");
			jQuery(".con").addClass("container");
			jQuery(".container menu_l").css("display","block");
		}else{
			jQuery(".foot_ce").css("display","none");
			jQuery(".con").removeClass("container");
		}

		if(scrollTop>100){
			jQuery(".con").addClass("container");
			jQuery(".menu_ls").css("display","block");
			jQuery(".con_l_img").css("display","none");
			jQuery(".search_hot").css("display","none");
		}else{
			jQuery(".con").removeClass("container");
			jQuery(".menu_ls").css("display","none");
			jQuery(".con_l_img").css("display","block");
			jQuery(".search_hot").css("display","block");
		}
	})
	
//	放大镜部分
	let lis = $('li');
	for(let i=0;i<lis.length;i++){
		lis[i].onclick = function(){
			let bg = getStyle(this,'background');
			$("#bigBox").style.background = bg;
			$("#showBigBox").style.background = bg;
		}
	}
	$("#bigBox").onmouseover = function(){
		$("#mask").style.display = 'block';
		$("#showBigBox").style.display = 'block';
	}
	
	$("#bigBox").onmouseout = function(){
		$("#mask").style.display = 'none';
		$("#showBigBox").style.display = 'none';
	}
	$("#bigBox").onmousemove = function(event){
		let ev = event || window.event;
		scale(ev);
	}
	function scale(ev){
		//数据改变 clientX不包括滚动条 pagex包括滚动条的影响
		let x = ev.pageX - $("#bigBox").offsetLeft - $("#mask").offsetWidth/2 - 80;
		let y = ev.pageY - $("#bigBox").offsetTop - $("#mask").offsetHeight/2 - 250;
		//边界处理
		if(x<0){
			x = 0;
		}else if(x>$("#bigBox").offsetWidth - $("#mask").offsetWidth){
			x = $("#bigBox").offsetWidth - $("#mask").offsetWidth;
		}
		
		if(y<0){
			y = 0;
		}else if(y>$("#bigBox").offsetHeight - $("#mask").offsetHeight){
			y = $("#bigBox").offsetHeight - $("#mask").offsetHeight;
		}
		//外观样式
		$("#mask").style.left = x + 'px';
		$("#mask").style.top = y + 'px';
		//计算比例
		$("#showBigBox").style.backgroundPosition = (-1*2*x) +'px ' + (-1*2*y) + 'px';
	}
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,false)[attr];
		}
	}

	// 加入购物车的加减按钮
	$(".amount_mini")[0].onclick = function(){	
		let count = parseInt($("#showNumber").value);
		count--;
		if(count<0){
			return;
		}
		$("#showNumber").value = count;
	}
	$(".amount_add")[0].onclick = function(){
		let count = parseInt($("#showNumber").value);
		count++;
		$("#showNumber").value = count;
	}
	$("#btns").onclick = function(){
		$("#shopping").innerHTML = $("#showNumber").value;
	}
}