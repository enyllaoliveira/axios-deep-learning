var xrh = null;
var url = "https://api.axios.react.dev.br/v1/users/1";
if (window.XMLHttpRequest) {
  // Mozilla 1.0+, Netscape 8.0, Firefox 1.0+, Safari 1.2+, Internet Explorer 7.0+
  xrh = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // Internet Explorer 6.0 and older
  xrh = new ActiveXObject("Microsoft.XMLHTTP");
}

if (xrh) {
  xrh.onreadystatechange = function () {
    if (xrh.readyState == 4 && xrh.status == 200) {
      var data = JSON.parse(xrh.responseText);
      console.log(data);
    }
  };
  xrh.open("GET", url, true);
  xrh.send();
}
