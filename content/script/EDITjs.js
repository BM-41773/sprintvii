$(document).ready(function () {
    $("#lnk_edit").click(function () {
        var editname = $("#Logid").val();
        var a = parseInt(editname);
        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: 'Home/editing',
            data: { X_Loginid:editname },
            success: function (data) {
                console.log("id:" + LogginId + "nme:" + data[0].Firstname + "snme:" + data[0].Surname + "mail:" + data[0].Email);
                alert("ffffff");
            }



        })

    })
});





