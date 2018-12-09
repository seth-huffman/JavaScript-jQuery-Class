$(document).ready(function() {
    var auth = getCookie("authentication");
    if (auth != "secure") {
        window.location.href = "counter.html";
    }
    var auth = getCookie("authentication");
    var visits = getCookie("counter");
    $('#counter').html(visits + " Cookies");
    var prev = getCookie("prevWeb");
    $('#address').html();
    $('#remove').click(function() {
        remove('counter');
        remove('authentication');
    });
});