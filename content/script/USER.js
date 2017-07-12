$(document).ready(function(){
    $("#P").click(function () {
        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: 'Home/ADV_post',
            data:{},
            success: function (data) {
                for (var x = 0; x < data.length; x++) {
                    console.log("id:" + LogginId + "nme:" + data[0].Firstname + "snme:" + data[0].Surname);
                    var html = '<img src="' + data[0].Profilepic + '" style="height:35px; "/> <label style="margin-left:5px;">' + data[0].Firstname + '</label> <br><label>' + data[0].Surname + '</label><br/><hr>'
                    $(".USER_P").append(html);

                }
            }



        })

    })
});

    
    