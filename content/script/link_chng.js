$(document).on('click', '#btn_spnd', function () {
    var loginId = $(this).data("id");
     alert(loginId);
     $.ajax({
         type: 'GET',
         dataType: 'Json',
         url: 'Home/UPDTE',
         data: { loginId: X_Loginid },
         success: function (data) {

         }
     })
});



