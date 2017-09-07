define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region','validate','form'],
  function($,template,util,CKEDITOR){
       //设置导航菜单选中
       util.setMenu('/main/index');
       //调用后台接口填充表单
       $.ajax({

           type:'get',
           url:'/api/teacher/profile',
           dateType:'json',
           success:function(data){

            // console.log(data);
            //解析数据渲染页面
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            //处理头像上传(ajax是异步的，要写在里面)
            // $('#upfile').uploadify({
            //     width:120,
            //     height:120,
            //     buttonText:'',
            //     itemTemplate:'<span></span>',
            //     // swf:'/public/assets/uploadify/uploadify.swf',
            //     swf:'/public/assets/uploadify/uploadify.swf',
            //     uploader:'/api/uploader/avatar',
            //     fileObjName:'tc_avater',
            //     onUploadSuccess:function(f,data){
            //       console.log(123);
            //       var data=JSON.parse(data);
            //       //重置头像的图片地址
            //       $('.preview img').attr('src',data.result.path);

            //     }

            // });有bug,报错。


      //老师代码：
            $('#upfile').uploadify({
                  width : 120,
                  height : 120,
                  buttonText : '',
                  itemTemplate : '<span></span>',
                  swf : '/public/assets/uploadify/uploadify.swf',
                  uploader : '/api/uploader/avatar',
                  fileObjName : 'tc_avatar',
                  onUploadSuccess : function(f,data){
                    var data = JSON.parse(data.trim());
                    // var data = eval('(' +data+ ')');
                    console.log(data);
                    // 重置头像的图片地址
                    $('.preview img').attr('src',data.result.path);
                  }
                });
            //处理省市县三级联动
            $('#pcd').region({
              url:'/public/assets/jquery-region/region.json'
            });
            //处理富文本
            // replace是提供的一个api.是对象的内部的一个方法。其实他有很多方法。
            CKEDITOR.replace('ckeditor',{
                toolbarGroups : [
                  { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                  { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                  { name: 'links', groups: [ 'links' ] }
              ]
            });
          //处理表单提交
          $('#settingsForm').validate({
             sendForm:false,  //阻止默认提交
             valid:function(){
              //把富文本的数据同步到表单域中
              for(var instance in CKEDITOR.instances){
                CKEDITOR.instances[instance].updateElement();
              }
              //获取家乡数据
              var p=$('#p options:selected').text();
              var c=$('#c options:selected').text();
              var d=$('#d options:selected').text();
               var hometown=p+'|'+c+'|'+d;//三个信息的组合
              //所有验证都通过，提交表单
              $(this).ajaxSubmit({
                   type:'post',
                   url:'/api/teacher/modify',
                   data:{tc_hometown:hometown},//可以添加自定义属性。,额外的添加
                   dataType:'json',//返回值类型
                   //success就是成功之后的回调函数
                   success:function(data){
                    if(data.code==200){
                      //刷新页面
                      location.reload();//reload就是重新加载，是location内部的一个方法

                    }

                   }

              });

             }
          });

           }
       });
});