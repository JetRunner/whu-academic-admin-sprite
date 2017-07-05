function header(){
    var header='<div class="index-header"><h1>武汉大学教务系统</h1><span>Mod</span></div>'
    $(".greyBg").prepend(header);
}
function footer(){
    $(".greyBg").append($('<div class="mod-footer"><p>Modified by WHU教务魔改 ©JetRunner <a href="https://github.com/JetRunner/WHU-curr-mod">Github</a></p></div>').prepend($("#footer")));
}
function button(){
    $("#loginBtn").addClass("mod-btn").attr("value","登陆");
    $("#captcha-img").click(function(){
        $(".change-captcha").click();
    });
    $(".course_shift").addClass("mod-btn").attr("value","列表模式");
}
header();
footer();
button();
//window.location.pathname