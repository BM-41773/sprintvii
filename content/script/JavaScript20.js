$(document).ready(function () {
    $("#shoopi").click(function () {
        alert("dddd");
        $("#sch").hide();
        $("#Blues").hide();
        var html = '<label>All Footwear</label><br><a href="#"id="b_lik">Been Bag</a><br><a href="#">Flats</a><br><a href="#">Heels</a><br><a href="#">Wedges</a><br><a href="#">Ballerinas</a><br><a href="#">Boots</a><br><a href="#">Pumps</a><br><a href="#">Slippers&Flip-Flops</a><br><a href="#">Sports Shoes</a><br><a href="#">Casual Shoes</a><br><a href="#">Formal Shoes</a><br><a href="#">Ethnic</a><br>';
        $(".f_crt").append(html);
    })
});
//$(document).ready(function () {
//    $("#shoopi").click(function () {
//        alert("dddd");
//        $("#sch").hide();
//        $("#Blues").hide();
//        var html1 = '<label style="margin-top:-284px;margin-left:150px;">All Bags,Belts&Wallets</label><br><a herf="#" style="margin-top:-284px;margin-left:150px;">Hand bags</a><br><a herf="#" >Slling Bags</a><br><a herf="#" >Wallets & Belts</a><br><a herf="#">Hand bags</a><br><a herf="#" >Totes</a><br><a herf="#">Clutches</a><br><a herf="#">Preminum Branches</a><br>';
//        $(".f_crt1").append(html1);
//    })
//});