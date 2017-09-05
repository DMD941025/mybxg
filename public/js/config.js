require.config({
    baseUrl:'/public/assets',
    paths:{
        // 这里没有顺序之分。  
        jquery:'jquery/jquery',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
        // datepicker是jquery插件；是标准的模块。可以查看插件中有没有define,有的话就是标准的。
        //不需要再加define.
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        //language不是jquery标准的插件，需要加垫片。
        common:'../js/common',
        login:'../js/login',
        index:'../js/index',
        teacherlist:'../js/teacher-list',
        teacheradd:'../js/teacher-add',
        util:'../js/util'

    },
    //做兼容用的垫片(deps是一个固定的属性，是depends依赖的意思)
    shim:{
        bootstrap:{
            deps :['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        }
    }
});






