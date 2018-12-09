$(document).ready(function() {
	$("#firstStudent").click(function() {
		$.getJSON("900006361.js", function(result) {
			$("#person").html("Student: " + result.student_id + "<br /> Name: " + result.student_first_name + " " + result.student_last_name + "<br /> Major: " + result.student_major + "<br /> Credits: " + result.student_credits + "<br /> GPA: " + result.student_gpa + "<br /> Registration Date: " + result.student_registration_date);
		});
	});
	$("#secondStudent").click(function() {
		$.getJSON("900668871.js", function(result) {
			$("#person").html("Student: " + result.student_id + "<br /> Name: " + result.student_first_name + " " + result.student_last_name + "<br /> Major: " + result.student_major + "<br /> Credits: " + result.student_credits + "<br /> GPA: " + result.student_gpa + "<br /> Registration Date: " + result.student_registration_date);
		});
	});
	$("#thirdStudent").click(function() {
		$.getJSON("903998004.js", function(result) {
			$("#person").html("Student: " + result.student_id + "<br /> Name: " + result.student_first_name + " " + result.student_last_name + "<br /> Major: " + result.student_major + "<br /> Credits: " + result.student_credits + "<br /> GPA: " + result.student_gpa + "<br /> Registration Date: " + result.student_registration_date);
		});
	});
});