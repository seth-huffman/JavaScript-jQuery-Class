$(document).ready(function() {
    var counter = findCookie("counter");
    counter++;
    bakeCookie("counter", counter, 3);
    bakeCookie("prevWeb", document.referrer);
    $('#authButton').click(function() {
        bakeCookie("authentication", 'secure', 180);
    });
});