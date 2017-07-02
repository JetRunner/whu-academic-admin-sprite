function header(){
    var header='<div class="index-header"><h1>武汉大学教务系统</h1><span>Mod</span></div>'
    $(".greyBg").prepend(header);
}
function footer(){
    $(".greyBg").append($('<div class="mod-footer"><p>WHU教务魔改 ©JetRunner <a href="https://github.com/JetRunner/WHU-curr-mod">Github</a> 本扩展不会上传你的任何个人信息，并完全开源。若对此有任何疑虑，请直接移除本扩展。</p></div>').prepend($("#footer")));
}
header();
footer();
//window.location.pathname