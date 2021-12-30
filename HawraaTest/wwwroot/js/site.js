// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function TellBackend() {

    $.ajax({
        url: 'Home/DateRecorder',
        type: 'POST',
        data: { num1: document.getElementById('num1').value ,num2: document.getElementById('num2').value},
        success: function (result) {
            $('#divContainer').append("<div id='error-message'>&#10060;<i>" + result + "</i></div>");
            console.log(result);
            setTimeout(function () {
                let errmsg = document.getElementById("error-message");
                errmsg.parentElement.removeChild(errmsg);
            },3000)
        }
    });
}