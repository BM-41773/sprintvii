$(document).ready(function () {
    $("#Link_adv").click(function () {
        var lll = $("#Link_adv").text();
        alert(lll);
        if (lll == "Applay to advertiesment") {
            $("#Link_adv").empty();
            $("#Link_adv").append("Advertiser role approve pending ");
            if

            // $("#Link_adv").append("Advertiser role approve pending ");



            return;



            var name = $("#X_mainloginid").val();
            $.ajax({
                type: 'GET',
                dataType: 'Json',
                url: 'Home/adverting_user',
                data: { X_id: name },
                success: function (data) {
                }

            })
        }

    })

});