function change(){
    var country = document.getElementById("country");
    var countryvalue = country.value;
    var city = document.getElementById("city");
    switch (countryvalue) {
        case"china": city.innerHTML="<option>--select city--</option><option>Shanghai</option><option>Kunming</option><option>Beijing</option><option>Yantai</option>";break;
        case"japan": city.innerHTML="<option>--select city--</option><option>Tokyo</option><option>Osaka</option><option>Kamakura</option>";break;
        case"italy": city.innerHTML="<option>--select city--</option><option>Roman</option><option>Milan</option><option>Venice</option><option>Florence</option>";break;
        case"america": city.innerHTML="<option>--select city--</option><option>New York</option><option>San Francisco</option><option>Washington</option>";break;
        default:window.alert('error')
    }
}
function move1() {
    var target = document.getElementById('pictures');
    target.innerHTML=" <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/10.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/12.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/13.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/4.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/5.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/16.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/3.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/8.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/7.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/1.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/11.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/2.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/3.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/9.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/20.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/17.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/18.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/6.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/15.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/14.jpg\"></a>" ;
}
function move2() {
    var target = document.getElementById('pictures');
    target.innerHTML=" <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/9.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/8.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/7.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/6.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/5.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/4.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/3.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/2.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/1.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/10.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/11.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/12.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/13.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/19.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/20.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/17.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/18.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/16.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/15.jpg\"></a>\n" +
        "        <a href=\"picture.html\"><img src=\"travel-images/square/square-medium/14.jpg\"></a>" ;

}