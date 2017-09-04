define(['jquery','template','bootstrap'],function($,template){

 //bootstrap这个插件要依赖jquery，但bootstrap这个文件不是标准require的模块。
 //所以要做兼容。既在config.js配置中加兼容垫片。
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


         //给模态框绑定事件(不能写在外面，因为异步，否则根本就没有这个按钮)
         $('.preview').click(function(){
       // alert(123);
             //获取当前ID
             var td=$(this).closest('td');//也可以是parent(父元素)，closest指的离他最近的父元素。
             var tcId=td.attr('data-tcId');
             //console.log(tcId);
             //根据ID查询数据

             //开始调用端口
            $.ajax({
                type:'get',
                url:'/api/teacher/view',
                data:{tc_id:tcId},
                dataType:'json',
                success:function(data){
                    //console.log(data);
                    var html=template('modalTpl',data.result);
                    $('#modalInfo').html(html);
                    //显示弹窗(modal() bootstrap插件的方法(显示弹窗的方法))
                    $('#teacherModal').modal();

                }

            });

         });
  }
});
});











