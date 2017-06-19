$(document).ready(function(){
    console.log('ready') ;
    init(); 
}) ;
function init(){
    var $login = $('#login_rel') ;
    var $register = $('#register_rel') ;
    var $visiter = $('#visitor') ;
    $login.click(function( event ){
        changePage(event) ;
    }) ;
    $register.click(function(event){
        changePage(event) ;
    }) ;
    $('.panel-footer a').click(function(event){
        changePage(event) ;
    });
    $visiter.click(function(event){
        changePage(event) ;
    }) ;
    $('#my_login').click(function(){
        child() ;
    }) ;
}
function child(){
    var username = $("#login_panel input:first").val() ;
    var userpass = $("#login_panel input:last").val();
    console.log("name: " +username +"---password: " +userpass) ;
    /*
    $.ajax({
        url: "",
        method: "POST",
        async: false,
        data: {
            name: username,
            password: userpass
        },
        dataType:"",
        contentType: "application/x-www-form-urlencoded",
        success: function(){
                
        },
        error: function(){
            
        }
    });*/

	console.log("登录账号") ;
	//top.showMyInfo() ;
	
}
function changePage(event){
    var $this = event.target.parentNode ;
    console.log( $this) ;
    switch($this.id){
        case 'login_rel':
            $($this).addClass("active") ;
            $("#register_rel").removeClass('active') ;
            $("#register_panel").hide() ;
            $("#login_panel").show() ;
            break;
        case 'register_rel':
            $($this).addClass("active") ;
            $("#login_rel").removeClass('active') ;
            $("#register_panel").show() ;
            $("#login_panel").hide() ;
            break;
        default:
            $("#register_rel").addClass("active") ;
            $("#login_rel").removeClass('active') ;
            $("#register_panel").show() ;
            $("#login_panel").hide() ;
            break;
    }
}
