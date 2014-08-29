/**
 * Created by Galit Schayek on 26/08/14.
 */
(function()
{
  var xhr = new XMLHttpRequest();
  xhr.open ("GET", "http://127.0.0.1:1400", false);
  xhr.onreadystatechange = function()
  {
    if (xhr.readyState == 4 && xhr.status == 200)
    {
      var list = document.getElementById('list');
      var data = xhr.responseText;
      var vec = JSON.parse(data);
      vec.forEach
      (
        function(ob)
        {
          var li = document.createElement("li");
          var a = document.createElement("a");
          var head_div = document.createElement("div");
          var content_div = document.createElement("div");
          var business_image = document.createElement("img");

          // Set Business Image
          business_image.setAttribute("src",ob.image);
          a.appendChild(business_image);

          // Set coupons business name
          var business_name = document.createTextNode(ob.name);
          head_div.appendChild(business_name);
          a.appendChild(head_div);

          // Set coupons description
          var coupons_description = document.createTextNode(ob.description);
          content_div.appendChild(coupons_description);
          a.appendChild(content_div);

          // השלמת הרשימה - צריך לשנות את ההערה הזאת!!!!!
          a.setAttribute("href", ob.link);
          li.appendChild(a);
          list.appendChild(li);

        }
      );
        $('#list').listview('refresh');
    }
  }
  xhr.send();
}) ();

