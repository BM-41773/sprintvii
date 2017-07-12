$(document).ready(function () {
    $("#postadds").click(function () {
        var serchedname1 = $("#X_mainloginid").val();
       var status1 = $("#poststatus").val();
        var imge1 = $(".Imgsrc").attr('src');
        alert(imge1);
        
        $("#uploding").trigger('click');
       // alert("dsfgh");
        $("#imgfeed").dialog({
            model: true,
            autoopen: false,
            title: "add photos/vedios",
            width: 510,
            height: 230,
            
        });
        alert("ffffff");
        alert(status1);
        //  var html = '<img src="' + imge1 + '" style="height:55px;width:35px; margin-top:3px; "  /><input type="text" /><br>';
        var html = '<img src="' + imge1 + '" style="height:55px;width:35px; margin-top:3px;"/><br>';
        $("#sch").hide();
        $("#imgfeed").show();
        $("#imgfeed").dialog('open');
        $(".upload").append(html);

    })
});
