$(document).ready(function() {
    var counter = getCookie("counter");
    counter++;
    addCookie("counter", counter, 3);
    addCookie("prevWeb", document.referrer);
    $('#authButton').click(function() {
        addCookie("authentication", 'secure', 180);
    });
});