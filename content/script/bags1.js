$(document).on('click', '#btn_dlt', function () {
    var loginId = $(this).data("id");
    var mail = $(this).data("id");
    // $("#View").click(function () {
    // var serchedname1 = $("#X_mainloginid").val();
    // $(".PF").hide();
    alert(loginId);
    $.ajax({
        type: 'POST',
        dataType: 'Json',
        url: 'Home/ DELT',
        data: { X_loginId: loginId, email: mail },
        success: function (data) {
        }

    });
});