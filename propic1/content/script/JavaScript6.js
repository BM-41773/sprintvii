
$(document).on('click', '#postBTn', function () {
    var serchedname1 = $("#X_mainloginid").val();
    var status1 = $("#textarea").val();
    // var image = $("#Imgsrc").val();
    var image = $(".dp").attr('src');

    //  var a = parseInt(serchedname1);
    console.log($("#poststatus").val())
    alert("aaauyuyyyy");
    alert(image);
    $.ajax({
        type: 'GET',
        dataType: 'Json',
        url: 'Home/pst',
        data: { X_loginid: serchedname1, postingimage: image, postingheader: status1 },
        success: function (data) {
            var a = 0;
            // for (var x = 0; x < data.length; x++) {
            //  if (data[x].relation == 0) {
            console.log("ID: " + data[a].logginId + " name: " + data[a].NFFirstname + " picture: " + data[a].NFProfilepic + "pstimage:" + data[a].imageposting + "pstcontent:" +data[a]. headerposting);
            //var html = '<img src="' + data[x].Profilepic + '"style="height:35px;" /> <label>' + data[x].Firstname + '</label><label>' + data[x].Surname + '</label><input type="button" id="conformbtn" style="margin-left:90px; margin-top:-5px " data-id="' + data[x].LogginId + '"  value="Conform"/><input type="button" value="Delete Request" id="deletebtn"/><input type="hidden"  value="' + serchedname1 + '"style= margin-top:-1px ;height:28px;/> <br> <br><hr>';

            var html = '<img src="' + data[a].NFProfilepic + '" style="height:35px; "/> <label style="margin-left:5px;">' + data[a].NFFirstname + '</label> <br><label>' + data[a].headerposting + '</label><br/><img src="' + data[a].imageposting + '"><br/><hr>'
            $(".nws").append(html);
            $(".nws").show();

            // }





        }

    })
});





