
var info = $("#my_info") ;
var badmiton = $("#badmiton") ;
var left = $("#left") ;
var middle = $("#middle") ;
var right = $("#right") ;

$(document).ready(function(){
    //init() ;
    $("#badmiton").hide().click(function(){
        console.log("click") ;
        //if(document.cookies)
            showMyInfo() ;
    }) ;
})

//初始页面
function init(){
    badmiton.hide() ;
    $(function(){
        $('#index-login').modal('hide') ;
    }) ;
    info.animate({"width":"0","height":"0","marginTop":"0","border":"none"}) ;
    $(".main").animate({"float":"left","width":"30%","height":"600px","marginTop":"3%","marginLeft":"4%"}) ;
    middle.css("width","20%").css("height","auto").css("marginLeft","8%") ;
    //badmiton.show() ;

}

//显示个人信息
function showMyInfo(){
    var my_info = " <p>欢迎***</p><br><br><br> " +
           " <p>用户名： </p><br> " +
           " <p>学院： </p><br> " +
           " <p><u>查看更多</u>  </p><br>" +
           " <p>新的消息：<u>0</u> </p><br><br><br> " +
           " <p>登录/注销 </p><br> " ;
    $("#my_info").animate({"width":"16%","height":"600px","marginTop":"3%","border":"solid 2px red"}) ;
    $(".main").not(document.getElementById('middle')).animate({"float":"left","width":"28%","height":"600px","marginTop":"3%","marginLeft":"0"}) ;
    $("#middle").animate({"width":"18%","marginLeft":"3%"}) ;
    $("#my_info").append(my_info) ;
    left.css("marginLeft","3%") ;
    $("#badmiton").hide() ;
}

