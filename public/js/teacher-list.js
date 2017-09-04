define(['jquery','template','util','bootstrap'],function($,template,util){
//设置导航菜单选中。

util.setMenu(location.pathname);





 //bootstrap这个插件要依赖jquery，但bootstrap这个文件不是标准require的模块。
 //所以要做兼容。既在config.js配置中加兼容垫片。
//加载依赖
//console.log(123);
//设置导航菜单选中(属性选择器)用属性选择器选中它，然后给他个类。
$('.navs a[href="'+location.pathname+'"]').addClass('active');

// console.log(location.pathname);//   /teacher/list
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

      // 控制启用和注销
      $('.eod').click(function(){
        //获取当前记录ID
        var td=$(this).closest('td');
        var tcId=td.attr('data-tcId');
        var tcStatus=td.attr('data-status');
        //缓存this(按钮)
        var that=this;
        //调用接口
        $.ajax({
            type:'post',
            url:'/api/teacher/handle',
            data:{tc_id:tcId,tc_status:tcStatus},
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    //修改当前状态
                    td.attr('data-status',data.result.tc_status);
                    //修改文字信息
                    if(data.result.tc_status==0){
                        $(that).html('注销');               
                    }else{
                        $(that).html('启用');
                    }
                }
            }
        })
      });
  }
});
});











