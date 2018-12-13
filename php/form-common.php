<?php header('Content-Type: text/html; charset=utf-8')?>
<?php
	/*if(!define('AAA')){
		echo "<script>alert('您非法登录，请重新登录');window.location.href='register.php';</script>";
	}*/
	
//	设置常量，用于设定服务器之类的
	define('DB_HOST', 'localhost');
	define('DB_USER', 'root');
	define('DB_PWD', 'root');
	define('DB_NAME', 'school');
	define('DB_FORM', 'stud1');
	
//	第一步：创建链接DB服务器
	$conn = new mysqli(DB_HOST,DB_USER,DB_PWD,DB_NAME);
	
//	第二步：设置字符集，防止乱码
	$conn->query("SET NAMES UTF8");    //数据库中不写utf-8
	
//	第三步:检测链接
	if($conn->connect_error){
		die("连接失败: " . $conn->connect_error);
	}
?>