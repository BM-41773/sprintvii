$(document).ready(function () {
    $("#P").click(function () {
        alert("hdghgd");
        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: 'Home/ADV_post',
            data: {},
            success: function (data) {
                for (var x = 0; x < data.length; x++) {
                    console.log("id:" + LogginId + "nme:" + data[x].Firstname + "snme:" + data[x].Surname);
                    var html = '<img src="' + data[x].Profilepic + '" style="height:35px; "/> <label style="margin-left:5px;">' + data[x].Firstname + '</label> <br><label>' + data[x].Surname + '</label><input type="button" value="View Profile"><br/><hr>'
                    $(".PF").append(html);

                }
                $(".PF").show();
            }



        })

    })
});


