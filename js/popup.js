function updateStatus(){
    $(".entrance-url").each(function(){
        var _this=this;
        $(this).find(".server-status").css("color","#8492A6").text("响应中");
        $.ajax({
        url:$(this).attr("href"),
        success:function(){
            $(_this).find(".server-status").css("color","#13D154").text("正常");
        },
        error:function(xhr){
            $(_this).find(".server-status").css("color","#FF4949").text("错误:"+xhr.status);
        }
        });
    })
}

updateStatus();
$("#update-status").click(updateStatus);