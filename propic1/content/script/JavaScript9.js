$(document).ready(function () {
    $("#lnk_edit").click(function () {
        var editname = $("#X_mainloginid").val();
        var a = parseInt(editname);
        alert(a)
        $.ajax({
            type: 'POST',
            dataType: 'Json',
            url: 'editing/Home',
           // url:'@Url.Action("editing", "Home")',
            data: {X_Loginid : editname},
            success: function (data) {
                console.log("id:" + LogginId + "nme:" + data[0].Firstname + "snme:" + data[0].Surname + "mail:" + data[0].Email);
                
            }



        })

    });
});





