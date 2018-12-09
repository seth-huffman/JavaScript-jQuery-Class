var student = {
	student_id: 332443,
	student_gpa: 3.6,
	student_courses: ["WDV101", "WDV131", "WDV105"]
};
var studentJSON = JSON.stringify(student);
localStorage.setItem("student1", studentJSON);
var student = JSON.parse(localStorage.getItem("student1"));
for (i = 0; i < student.student_courses.length; i++) {
	$("#myUL").append("<li>" + student.student_courses[i] + "</li>");
}
$("#studentID").html(student.student_id);
$("#studentGPA").html(student.student_gpa);