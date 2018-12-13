<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1、接收数据
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	
	//2、处理（连接数据库，保存数据）
	//1)、建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{

		mysql_select_db("school",$con);
		//1)、查询
		$sqlstr="select * from stud1 where username='$username'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){		
			//2）、添加	
			$sqlstr="insert into stud1(username,userpass) values('$username','$password')";
			$result = mysql_query($sqlstr,$con);
			mysql_close($con);
			if($result==1){
				echo "0";//注册成功
			}else{
				echo "-1";//注册失败
			}
		}else{
			echo "1";//注册失败：用户名已经存在，
		}
	}
?>
