/**
 * Created by Galit Schayek on 26/08/14.
 */
function sendDataToServer(area) {
    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1:1400',
        data: {area: area},
        success: function(id) {
            doStuff(id);
        },
        error: function(jqXHR, textstatus, errorThrown) {
            alert('text status ' + textstatus + ', err ' + errorThrown);
        }
    });
};