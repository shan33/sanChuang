$(document).ready(init) ;
function init(){
    showSticky() ;      //显示便利贴
    /*//添加评论
    var enter = new Vue({
        el: "#my-enter",
        methods: {
            myInfo: function () {
                let my_title = document.getElementById("my-title").value
                let my_content = document.getElementById("my-content").value
                var key = "sticky_" +localStorage.length
                localStorage.setItem(key,my_title+":"+my_content)
            }        
        }
    })*/
}
//显示便利贴
function showSticky(){
    for(let i=0; i<localStorage.length;i++){
        var key = localStorage.key(i) ;
        if(key.substring(0,6) == "sticky"){
                let items = localStorage.getItem(key).split(':') ;      //根据冒号分出 标题和内容
                let my_content = items[1] ;                             //获取内容
                let my_title = items[0] ;                               //获取标题
                addSticky(my_title,my_content) ;
        }
    }    
}
//增加便利贴
function addSticky(my_title,my_content){
                let sticky = document.getElementById("stickies") ;
                var span = document.createElement("span") ;     //span
                span.setAttribute("class","panel panel-info cook") ;
                var div_title = document.createElement('div') ;     //heading
                div_title.setAttribute("class","panel-heading") ;
                var p_title = document.createElement('h3') ;        //title
                p_title.setAttribute("class","panel-title") ;
                var p_content = document.createElement('div') ;     //body
                p_content.setAttribute("class","panel-body") ;
                var p_footer = document.createElement("div") ;      //footer
                p_footer.setAttribute("class","panel-footer") ;
                var li = document.createElement("li") ;
                //监听
                 p_footer.addEventListener("mouseover",function(){
                    this.innerHTML = "支持  <a href='#'><sub>0</sub></a> 评论  <a href='#'><sub>0</sub></a> 反馈  <a href='#'><sub>0</sub></a>" ;
                 }) ;
                p_footer.addEventListener("mouseleave",function(){
                     this.innerHTML="" ;
                 }) ;
                
                p_title.innerHTML = my_title ;
                p_content.innerHTML = my_content ;
                
                div_title.appendChild(p_title) ;
                span.appendChild(div_title) ;
                span.appendChild(p_content) ; 
                span.appendChild(p_footer) ;
                li.appendChild(span) ;
                sticky.appendChild(li) ;
    
}

