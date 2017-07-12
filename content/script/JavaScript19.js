$(document).ready(function () {
    $("#lnk").click(function () {
        var loginId = $(this).data("id");
        //var logid = $("#DD_btn").val();
        // alert(logid);
        $.ajax({
            type: 'POST',
            dataType: 'Json',
            url: 'Home/admin_role',
            data: { loginId: X_id },
            success: function (data) {

                for (var x = 0; x < data.length; x++) {
                    console.log("id:" + data[x].A_loginid + "nme:" + data[x].A_fname + "snme:" + data[x].A_Surname);
                    var html = '<img src="' + data[x].A_propic + '" style="height:35px; margin-left:2px; "/> <label>' + data[x].A_fname + '</label> <label>' + data[x].A_Surname + '</label><input type="button" value="Approve" id="ae" /> <input type="text"id="DD_btn" hidden value=' + data[x].A_loginid + ' /><br/><hr>';
                    $(".listing").append(html);
                }
                $(".listing").show();

            }
        })
    });
});