					
$(function(){
	$.get("goodsAndShoppingCart/getShoppingCart.php",function(data){
		//{'vipName':$('adom1').html()},参数
		// console.info(data);

		let arr = JSON.parse(data);
		$.each(arr,function(index,obj){
			let trobj = $("<tr></tr>");
			trobj.addClass("tr tr4");
			$("#t").append(trobj);

			let tdobj = $("<td></td>");
			$(trobj).append(tdobj);
			let indom = $("<input type='checkbox' name='gowu'/>");
			indom.attr("id","gowu");
			$(tdobj).append(indom);
			let adom = $("<a href='xiangqing.html'></a>");
			adom.addClass("as");
			$(tdobj).append(adom);
			let imgDom = $("<img src="+ obj.goodsImg +">");
			$(adom).append(imgDom);

			let tdobj1 = $("<td></td>");
			tdobj1.addClass("tds1");
			$(trobj).append(tdobj1);
			let adom1 = $("<a href='xiangqing.html'></a>");
			adom1.addClass("adom1");
			adom1.html(obj.goodsName);
			$(tdobj1).append(adom1);

			let tdobj2 = $("<td></td>");
			tdobj2.addClass("tds2");
			tdobj2.html(obj.goodsWeight);
			$(trobj).append(tdobj2);

			let tdobj3 = $("<td></td>");
			tdobj3.addClass("tds3");
			tdobj3.html(obj.goodsPrice);
			$(trobj).append(tdobj3);

			let tdobj4 = $("<td></td>");
			tdobj4.addClass("tds4");
			$(trobj).append(tdobj4);
			let divdom = $("<div></div>");
			divdom.addClass("cart_con");
			$(tdobj4).append(divdom);
			let span = $("<span></span>");
			span.addClass("amount_mini");
			span.html("-");
			$(divdom).append(span);
			let input = $("<input type='text' value='1'/>");
			input.addClass("showNumber");
			input.attr("id","showNumber");
			$(divdom).append(input);
			let span1 = $("<span></span>");
			span1.addClass("amount_add");
			span1.html("+");
			$(divdom).append(span1);

			let tdobj5 = $("<td></td>");
			tdobj5.addClass("tds5");
			tdobj5.html(obj.goodsPrice);
			$(trobj).append(tdobj5);

			let tdobj6 = $("<td></td>");
			tdobj6.addClass("tds6");
			$(trobj).append(tdobj6);
			let adom2 = $("<input href='#' type='button' />")
			adom2.addClass("rebtn");
			adom2.val("删除");
			$(tdobj6).append(adom2);
			$(".rebtn").click(remove);

			let trobj1 = $("<tr></tr>");
			trobj1.addClass("tr tr5");
			$("#t").append(trobj1);
			let tdobj7 = $("<td></td>");
			tdobj7.html("全选");
			tdobj7.attr("colspan","7");
			$(trobj1).append(tdobj7);
			let input1 = $("<input type='checkbox'/>");
			input1.addClass("gowu");
			input1.attr("name","gowu");
			$(tdobj7).append(input1);
			let span2 = $("<span></span>");
			span2.addClass("lasts");
			span2.html(obj.goodsCount+"件");
			$(tdobj7).append(span2);

			let span3 = $("<span></span>");
			$(tdobj7).append(span3);
			let adom3 = $("<a href='#'></a>");
			adom3.attr("id","remove");
			adom3.html("删除选中的商品");
			$(span3).append(adom3);
		})
	});

	function remove(){
		if(window.confirm("确定要删除吗？")){
			$.get("goodsAndShoppingCart/deleteGoods.php",{"vipName":$(".adom1").html()},function(data){
			//1：表示删除成功，0：表示删除失败。
				if(data=="1"){
					alert("删除成功");
				}else{
					alert("删除失败");
				}
			});
		};
	};
});
/*
$(function(){
	
});*/