$(document).ready(function () {
    alert(X_Firstname1);

    $("#ser").click(function () {

        var X_Firstname1 = $(".serch").val();
        alert(X_Firstname1);
        $.ajax({
            url: 'http://localhost:4778/ajaxservice.svc?wsdl/serch()',
            data: { X_Firstname: X_Firstname1 },
            success: function (result) {
                console.log(result);
                alert(result);
            }
        });
    });
});