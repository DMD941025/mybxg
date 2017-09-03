define(['jquery','template'],function($,template){
//加载依赖
//console.log(123);


$.ajax({
  type:'get',
  url:'/api/teacher',
  dataType:'json',
  success:function(data){
         console.log(data);//会得到和数据库中的数据
         //解析数据渲染页面
         var html=template('teacherTpl',{list:data.result});//这个list是给模板用的（自己起的名字）；
         $('#teacherInfo').html(html);
  }
});
});











