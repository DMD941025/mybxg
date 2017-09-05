define(['jquery'],function($){
    //工具函数
    //util中有很多的工具方法。每一个工具函数试想一个功能。
  return{
     setMenu :function(path){  //设置导航菜单选中
        $('.navs a[href="'+path+'"]').addClass('active');
     },
     qs:function(key){    //此方法的作用：获取到指定的URL参数值
        var param=location.search.substring(1);
        var result=null;
        // console.log(location);//location是dom对象
        if(param){
            var kvs=param.split('&');
            $.each(kvs,function(i,item){
               var kv=item.split('=');
               if(key==kv[0]){
                result=kv[1];
                return false;//终止循环
               }
            });
        }
        return result;
     }
  }

});