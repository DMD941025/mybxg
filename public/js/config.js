require.config({
    baseUrl:'/public/assets',
    paths:{
        // 这里没有顺序之分。
        jquery:'jquery/jquery',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        common:'../js/common',
        login:'../js/login',
        index:'../js/index',
        teacherlist:'../js/teacher-list',
        util:'../js/util'

    },
    //做兼容用的垫片(deps是一个固定的属性，是depends依赖的意思)
    shim:{
        bootstrap:{
            deps :['jquery'],
        }
    }
});