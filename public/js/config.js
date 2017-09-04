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
        teacherlist:'../js/teacher-list'
    },
    //做兼容用的垫片(deps是depends依赖的意思)
    shim:{
        bootstrap:{
            deps :['jquery'],
        }
    }
});