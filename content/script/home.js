$(document).ready(function () {
    $("#Link_adv").hover(function () {
        var status = $("#Sts").val();{
            var status = $("#Sts").val();
            //alert(status);
            {
                if (status == 1) {
                    $("#Link_adv").empty();
                    $("#Link_adv").append("Advertiser role approve pending ");
                }
                else
                {
                    $("#Link_adv").empty();
                    $("#Link_adv").append("Apply to advertiesment");

                }
            }
           
        }

    })
});