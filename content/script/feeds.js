$(document).ready(function () {
    $("#btnpost").click(function () {
        var serchedname1 = $("#X_mainloginid").val();
        var status1 = $("#poststatus").val();
        var a = parseInt(serchedname1);
        console.log($("#poststatus").val())
      //  alert(serchedname1);
        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: 'Home/feeds',
            data: { X_loginid: serchedname1, Status: status1 },
            success: function (data) {
                //   var a=0;
                // for (var x = 0; x < data.length; x++) {
                //  if (data[x].relation == 0) {
                console.log("ID: " + data[0].logginId + " name: " + data[0].NFFirstname + " picture: " + data[0].NFProfilepic + "posting:" + data[0].NFstatus);
                //var html = '<img src="' + data[x].Profilepic + '"style="height:35px;" /> <label>' + data[x].Firstname + '</label><label>' + data[x].Surname + '</label><input type="button" id="conformbtn" style="margin-left:90px; margin-top:-5px " data-id="' + data[x].LogginId + '"  value="Conform"/><input type="button" value="Delete Request" id="deletebtn"/><input type="hidden"  value="' + serchedname1 + '"style= margin-top:-1px ;height:28px;/> <br> <br><hr>';
                var html = '<img src="' + data[0].NFProfilepic + '" style="height:35px; "/> <label style="margin-left:5px;">' + data[0].NFFirstname + '</label> <br><label>' + data[0].NFstatus + '</label><br/><hr>'
                $(".nws").append(html);
                $(".nws").show();

                // }
            }




        })

    });
});





