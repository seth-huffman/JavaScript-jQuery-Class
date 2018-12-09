$(document).ready(function(e) {
	$("#sendForm").click(function() {
		var validForm = true;
		var namePattern = /^[\w!@#$%^&*(),.?/;: ]+$/g;
		var namePattern2 = /^[^ ]/g;
		var inName = $("#custName").val();
		$("#custNameError").html("");
		if (!inName) {
			$("#custNameError").html("Please enter your name");
			validForm = false;
		} else {
			console.log(namePattern.test(inName) && namePattern2.test(inName));
		}
		var inPhone = $("#custPhone").val();
		$("#custPhoneError").html("");
		if (!inPhone) {
			$("#custPhoneError").html("Please enter your phone number");
			validForm = false;
		} else {
			if (!$.isNumeric(inPhone) || (inPhone % 1 != 0)) {
				$("#custPhoneError").html("Phone number must be a number");
				validForm = false;
			} else {
				if (inPhone.length != 10) {
					$("#custPhoneError").html("Phone number must have 10 numbers");
					validForm = false;
				}
			}
		}
		var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var inEmail = $("#enterEmail").val();
		$("#enterEmailError").html("");
		if (!inEmail) {
			$("#enterEmailError").html("Please enter your email");
			validForm = false;
		} else {
			console.log(emailPattern.test(inEmail));
		}
		if ($('input[name=custProducts]:checked').length <= 0) {
			alert("No radio checked");
			$("#radioButtonError").html("A product group must be selected");
			validForm = false;
		}
		var textPattern = /^[\w!@#$%^&*(),.?/;: ]+$/g;
		var inText = $("#custComplaint").val();
		$("#custComplaintError").html("");
		if (!inText) {
			$("#custComplaintError").html("Please describe the problem");
			validForm = false;
		} else {
			console.log(textPattern.test(inText));
		}
		if (validForm) {
			alert("Valid form will be submitted");
		} else {
			alert("Invalid form. Display form and error messages");
		}
	});
});