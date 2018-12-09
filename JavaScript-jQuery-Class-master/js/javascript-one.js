function bakeCookie(tag, value) {
	var expireDate = new Date()
	var expireString = ""
	expireDate.setTime(expireDate.getTime() + (1000 * 60 * 60 * 24 * 365))
	expireString = "expires=" + expireDate.toGMTString()
	document.cookie = tag + "=" + escape(value) + ";" + expireString + ";"
}

function findCookie(tag) {
	var value = null
	var myCookie = document.cookie + ";"
	var findTag = tag + "="
	var endPos
	if (myCookie.length > 0) {
		var beginPos = myCookie.indexOf(findTag)
		if (beginPos != -1) {
			beginPos = beginPos + findTag.length
			endPos = myCookie.indexOf(";", beginPos)
			if (endPos == -1) endPos = myCookie.length
			value = unescape(myCookie.substring(beginPos, endPos))
		}
	}
	return value
}

function eatCookie(tag) {
	var Yesterday = 24 * 60 * 60 * 1000
	var expireDate = new Date()
	expireDate.setTime(expireDate.getTime() - Yesterday)
	document.cookie = tag + "=nothing; expires=" + expireDate.toGMTString()
}

function showOffCookie() {
	alert("Contents of Cookie: " + document.cookie)
}

function displaySchool() {
	alert("Current School is " + findCookie('school'));
}
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