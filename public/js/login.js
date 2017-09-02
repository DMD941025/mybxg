
define(['jquery','cookie'],function($){
    //先把登录成功获得的数据存放到cookie里面。因为cookie就相当于存到了内存里面，
    // 在别的页面就可以得到。
    //实现登录功能
     $('#login').click(function(){
        // console.log(123);
        $.ajax({
         type:'post',
         url:'/api/login',
         data:$('#loginForm').serialize(),
         dataType:'json',
         success:function(data){
             if (data.code==200) {
                console.log(JSON.stringify(data.result));
                // 

/*
返回来的数据：

{
  "code": 200,
  "msg": "登录成功!",
  "result": {
    "tc_name": "前端学院",
    "tc_avatar": "http://static.botue.com/images/avatar/58613845e749c.jpg"
  },
  "time": 1482213239
}
1.2.2. 退出登录

*/

                // 先保存cookie，保存的方式如下：
                // 名字是随便起的
                // data.result是对象。而cookie里面的值只能存字符串。所以要把他转成字符串。
                // 还要加第3个参数，因为把它设到根目录，所有的页面都可以得到。
                $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});

                // 保存完之后要跳转到主页面，这个时候在主页面可以拿到cookie
                // 在主页面中在cookie里面也访问了。
                // 登录成功。跳转到主页面
                location.href='/main/index'
             }else{
               alert('用户名或者密码错误');
             }
         }
        });
        return false;
    });
   
});