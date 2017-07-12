$(document).on('click', 'D', function () {
    var loginId = $(this).data("id");
    // $("#View").click(function () {
    // var serchedname1 = $("#X_mainloginid").val();
   // $(".PF").hide();
    alert(loginId);
    $.ajax({
        type: 'GET',
        dataType: 'Json',
        url: 'Home/ dlte',
        data: { X_loginId: loginId },
        success: function (data) {
        }
    
    });
});

