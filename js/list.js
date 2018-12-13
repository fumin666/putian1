$(function(){
	$.get("goodsAndShoppingCart/getGoodsList.php", function(data){
		// console.info(data);

		let arr = JSON.parse(data);
		$.each(arr,function(index,obj){
			let liobj = $("<li></li>");
			liobj.addClass("list_container_li");
			$(".list_container_ul").append(liobj);
			let domobj = $("<div></div>");
			domobj.addClass("list_container");
			$(liobj).append(domobj);
			let adom = $("<a href=xiangqing.html></a>");
			$(domobj).append(adom);
			let imgDom = $("<img src="+ obj.goodsImg +">");
			$(adom).append(imgDom);
			let hDom = $("<h3></h3>");
			$(domobj).append(hDom);
			let adoms = $("<a href=xiangqing.html></a>");
			adoms.html(obj.goodsName);
			$(hDom).append(adoms);
			let pDom = $("<p></p>");
			pDom.html(obj.goodsDesc);
			$(domobj).append(pDom);

			let divDom = $("<div></div>");
			divDom.addClass("food");
			$(domobj).append(divDom);
			let p = $("<p></p>");
			p.addClass("weight");
			p.html(obj.goodsWeight);
			$(divDom).append(p);

			let span = $("<span></span>");
			span.html(obj.address);
			$(divDom).append(span);

			let p1 = $("<p></p>");
			p1.addClass("price");
			p1.html(obj.goodsPrice+"￥");
			$(divDom).append(p1);

			let i = $("<i></i>");
			i.addClass("icon gou");
			$(divDom).append(i);
		})
	});
});