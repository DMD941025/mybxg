

define(['jquery','template','cookie'],function($,template){

// template不能写在cookie的后面，因为cookie返回值，没有返回值的同意写到后面。











// 注意：在这里引入cookie，不需要接收（不需要传参）
// 因为cookie是jquery的插件，cookie的方法就加到了$上。
// cookie的方法就加到了cookie上。
// 其实cookie插件本身就是规范的AMD的插件
  // NProgress.start();
  // NProgress.done();
  //控制左侧菜单的折叠和展开。。
  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });

    //退出功能
  $('#logoutBtn').click(function(){
    // console.log(123);检验是否绑定。
  $.ajax({
    type:'post',
    url:'/api/logout',
    dataType:'json',
    success:function(data){
        // console.log(data);
        if(data.code==200){
           location.href='/main/login';
        }
    }
  });
  });

// 验证是否登录
var sessionId=$.cookie('PHPSESSID');
if(!sessionId&&location.pathname!='/main/login'){
  // sessionId不存在，重新跳转到登录页面
  location.href='/main/login';

}

// console.log(sessionId);



// 获取登录信息：
// 名字写什么取决于存放的时候取的什么名字。
var loginInfo=$.cookie('loginInfo');
// console.log(loginInfo);//这里打印的是字符串，因为是在cookie里面取的。
// {"tc_name":"admin","tc_avatar":"http://static.botue.com/images/avatar/596832a258e15.png"}

// 再把它转换成对象：
// 还要判断是否有cookie值
var info=loginInfo?JSON.parse(loginInfo):{};
// console.log(info);//{tc_name: "admin", tc_avatar: "http://static.botue.com/images/avatar/596832a258e15.png"}

// 转换成对象之后要把它渲染一下。



// 模板：用的是artTem的late 4.0版本api方法。
var tplstr=' <div class="avatar img-circle">'
            +'    <img src="{{tc_avatar}}">'
            +'</div>'
            +'<h4>{{tc_name}}</h4>';

// 调用artTemplate的api
var html=template.render(tplstr,info);

 $('.aside .profile').html(html);







// $('.profile img').attr('src',info.tc_avatar);
// $('.profile h4').html(info.tc_name);//改内容







});



// 验证：
// 登录和没登录的区别：
// 有sessionid就是登陆过，没sessionid就是没登陆过。



	

