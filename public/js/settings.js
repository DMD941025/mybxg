define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region'],
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
           }
       });
});