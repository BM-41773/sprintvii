$(document).ready(function () {
    $("#uploding").change(function () {
        alert(imge1);
        var html = '<img src="' + imge1 + '" style="height:30px;width:30px;"/>';
        $(".upload").append(html);


    })
});

