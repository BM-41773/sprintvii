
$(document).on('click', '#postBTn', function () {
    var serchedname1 = $("#X_mainloginid").val();
    alert(serchedname1);
    var status1 = $("#textarea").val();
    alert(status1);
    // var image = $("#Imgsrc").val();
    var image = $(".dp").attr('src');
    alert(image);
    //  var a = parseInt(serchedname1);
    
    alert("aaauyuyyyy");
   
    console.log($("#textarea").val())
    $.ajax({
        type: 'GET',
        dataType: 'Json',
        url: 'Home/pst',
        data: { X_loginid : serchedname1, postingheader : status1, postingimage : image },
        success: function (data) {

         var x = 0;
            // for (var x = 0; x < data.length; x++) {
            //  if (data[x].relation == 0) {
         console.log("ID: " + data[0].logginId + " name: " + data[0].NFFirstname + " picture: " + data[0].NFProfilepic + "pstcontent:" + data[0].headerposting + "pstimage:" + data[0].imageposting);
            //var html = '<img src="' + data[x].Profilepic + '"style="height:35px;" /> <label>' + data[x].Firstname + '</label><label>' + data[x].Surname + '</label><input type="button" id="conformbtn" style="margin-left:90px; margin-top:-5px " data-id="' + data[x].LogginId + '"  value="Conform"/><input type="button" value="Delete Request" id="deletebtn"/><input type="hidden"  value="' + serchedname1 + '"style= margin-top:-1px ;height:28px;/> <br> <br><hr>';

         var html = '<img src="' + data[0].NFProfilepic + '" style="height:35px; "/> <label style="margin-left:5px;">' + data[0].NFFirstname + '</label> <br><label>' + data[0].headerposting + '</label> <img src="' + data[0].imageposting + '"><br/><hr>'
            $(".nws").append(html);
            $(".nws").show();

            // }





        }

    })
});





