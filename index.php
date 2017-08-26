<?php 

$dir ='main';//默认目录名称
$filename='index';//默认文件名称



// 路由：路经的分发，（根据url的不同，返回不同的页面）导航
// index.php的作用就是根据url的不同导航到不同页面




//va_dump($_SERVER);
//判断数组中是否包含指定的属性
if (array_key_exists('PATH_INFO',$_SERVER)) {
    // 路经只是URL的一部分，并不是全部的url
    $path=$_SERVER['PATH_INFO'];//获取URL中的路经:/main/index
    // 去掉路径中的第一个斜杠
    $str=substr($path,1);//  main/index
    // 分隔路经和文件名称
    $arr =explode('/', $str);
    if (count($arr)==2) {
        $dir=$arr[0];//覆盖目录名称
        $filename=$arr[1];//覆盖文件名称
    }else{
        //如果不是两层目录就跳转到登录页面
        $filename='login';
    }


    // echo $path;
}
//路经的格式 /main/index
   //       /main/login
   //       /teacher/list
//          /teacher/add

// 再当前页面嵌入一个子页面
//引入的页面应该是平级
include('./views/'.$dir.'/'.$filename.'.html');


 ?>