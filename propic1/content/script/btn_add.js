$(document).on('click', '#View', function () {
    var loginId = $(this).data("id");
   // $("#View").click(function () {
        // var serchedname1 = $("#X_mainloginid").val();
        $(".PF").hide();
       // alert(loginId);
        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: 'Home/add',
            data: { X_Loginid: loginId },
            success: function (data) {

                for (var x = 0; x < data.length; x++) {

                    console.log("ID: " + data[x].LogginId + " name: " + data[x].Firstname + " picture: " + data[x].Profilepic + "dmy:" + data[x].day + "m:" + data[x].month + "y:" + data[x].Year + "e:" + data[x].Email)
                    var html = '<img src="' + data[x].Profilepic + '"style="height:35px;" /> <label><br><hr>' + data[x].Firstname + '</label><label><br><hr>' + data[x].Surname + '</label><br><hr><input type="button" value="Suspend" id="btn_spnd" style="background-color:blue;color:white;"/ ><input type="button" value="' + data[x].LogginId + '" id="btn_dlt" style="background-color:blue;color:white;" data-id="' + data[x].LogginId + '"/><br><hr><label>day:-' + data[x].day + '</label><br><hr><label>Month:-' + data[x].month + '</label><br><hr><label>Year:-' + data[x].Year + '</label><br><hr><label>Gender:-' + data[x].Gender + '</label><br><hr><label>Email:-' + data[x].Email + "data-id=" + data[x].Email + '</label><hr>';
                    $(".listing").append(html);
                }
            }
        
        
    });
});