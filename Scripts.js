/**
 * Created by Galit Schayek on 27/08/14.
 */
function send_data(area) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST","127.0.0.1:1400?area=" + area,true);
  xhr.send();

}