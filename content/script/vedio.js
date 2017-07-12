$(document).ready(function () {
    $("#vedioimg").click(function () {
        var serchedname1 = $("#X_mainloginid").val();
        var status1 = $("#poststatus").val();
        var imge1 = $(".Imgsrc").attr('src');
        $("#browsefile").trigger('click');
        alert(imge1);
       $("#imgfeed").dialog({


            model: true,
            autoopen: false,
            title: "add photos/vedios",
            width: "54px",
            height: "34px",
       });
       var html = '<img src="' + imge1 + '" style="height:35px; "/><input type="text" style="margin-left:2px;"/>';
       $("#imgfeed").dialog('open');
       $(".upload").append(html);

    })
});
