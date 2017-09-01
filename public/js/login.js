
define(['jquery'],function($){
    //实现登录功能
     $('#login').click(function(){
        console.log(123);
        $.ajax({
         type:'post',
         url:'/api/login',
         data:$('#loginForm').serialize(),
         dataType:'json',
         success:function(data){
             if (data.code==200) {
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