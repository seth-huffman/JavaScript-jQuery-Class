$(document).ready(function() {
    var auth = findCookie("authentication");
    if (auth != "secure") {
        window.location.href = "home.html";
    }
    var auth = findCookie("authentication");
    var visits = findCookie("counter");
    $('#displayCounter').html("You've Had " + visits + " Visits!");
    var prev = findCookie("prevWeb");
    $('#displayWeb').html("You came from: " + prev);
    $('#eatCookie').click(function() {
        eatCookie('counter');
        eatCookie('authentication');
    });
});