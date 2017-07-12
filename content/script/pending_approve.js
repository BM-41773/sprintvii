$(document).ready(function () {
    $("#pnd").click(function () {
      //  var loginId = $(this).data("id");
        alert("ssssss");
        $.ajax({
            type: 'POST',
            dataType: 'Json',
            url: 'Home/pendingg',
            data: {  },
            success: function (data) {

                for (var x = 0; x < data.length; x++) {
                    console.log("id:" + data[x].A_loginid + "nme:" + data[x].A_fname + "snme:" + data[x].A_Surname);
                    var html = '<img src="' + data[x].A_propic + '" style="height:35px; margin-left:2px; "/> <label>' + data[x].A_fname + '</label> <label>' + data[x].A_Surname + '</label><input type="button" value="Approve" id="ae" data-id="' + data[x].A_loginid + '"/> <br/><hr>';
                    $(".listing").append(html);
                }
                //  $(".PF").show();

            }
        })
    });
});