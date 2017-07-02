function updateStatus(){
    $(".entrance-url").each(function(){
        var _this=this;
        $(this).find(".server-status").css("color","red").text("未响应");
        $.ajax({
        url:$(this).attr("href"),
        success:function(){
            $(_this).find(".server-status").css("color","green").text("正常");
        },
        error:function(xhr){
            $(_this).find(".server-status").text("错误:"+xhr.status);
        }
        });
    })
}

updateStatus();
$("#update-status").click(updateStatus);