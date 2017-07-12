
$(document).ready(function () {
    $("#IMG").click(function () {
        alert("ss");
        // var serchedname1 = $("#X_mainloginid").val();
        //  var a = parseInt(serchedname1);

        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: 'dt_cntnt',
            data: {},
            success: function (data) {


                for (var x = 0; x < data.length; x++) {
               
                    console.log("ID: " + data[x].id + " name: " + data[x].imges);
                    
                    
                    var html = '<img src="' + data[x].imges + '" style="height:35px; "/> <label style="margin-left:5px;">comfert beenbag XL beenbag  </label>'
                 
                     $("#div1").hide();
                    $("#div2").hide();
                    $("#div3").hide();
                    $(".adds").append(html);
                }
            }
        })
    })
});