<?php
	function _clear($obj){
//		把两头的空格清空
		$obj = trim($obj);
//		把特别的字符不进行解析
		$obj = htmlspecialchars($obj);
		return $obj;
	}
	
//	弹出框函数
	function _alert($info){
		echo "<script>alert('$info');window.history.back()</script>";
		exit;   //相当于JS return
	}
	
//	检查用户名：
	function checkName($str,$min,$max){
//		判断长度
		if(strlen($str) > $max || strlen($str) < $min){
			_alert("用户长度不得小于".$min."位或者大于".$max."位");
		}
//		限制特殊字符
		$pattern = '/[<>\'\"\&]/';
		if(preg_match($pattern, $str)){
			_alert("不得使用特殊字符");
		}
		return $str;
	}
	
	
?>