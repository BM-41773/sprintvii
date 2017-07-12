$(document).ready(function () {
    $("#vedioimg").click(function () {
        var serchedname1 = $("#X_mainloginid").val();
        var status1 = $("#poststatus").val();
        var imge1 = $(".Imgsrc").attr('src');
        $("#uploding").trigger('click');
        // alert(imge1);
        $("#imgfeed").dialog({
            model: true,
            autoopen: false,
            title: "add photos/vedios",
            width: 510,
            height: 230,
        });
        var html = '<img src="' + imge1 + '" style="height:55px;width:35px; margin-top:3px; "  /><input type="text" id="textarea" style="margin-left:3px;" /><br>';
        $("#imgfeed").dialog('open');
        $(".upload").append(html);

    })
});
