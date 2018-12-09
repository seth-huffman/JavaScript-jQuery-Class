$(document).ready(function() {
	$("#sendForm").click(function() {
		var validate = true;
		var ePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var inputEmail = $("#Email").val();
		$("#EmailError").html("");
		if (!inputEmail) {
			$("#EmailError").html("Please enter an email.");
			validate = false;
		} else {
			console.log(ePattern.test(inputEmail));
		}
		var inPhone = $("#Phone").val();
		$("#PhoneError").html("");
		if (!inPhone) {
			$("#PhoneError").html("Please enter a number.");
			validate = false;
		} else {
			if (!$.isNumeric(inPhone) || (inPhone % 1 != 0)) {
				$("#PhoneError").html("Phone number must be an actual number.");
				validate = false;
			} else {
				if (inPhone.length != 10) {
					$("#PhoneError").html("Phone number must be at least 10 numbers");
					validate = false;
				}
			}
		}
		var inZip = $("#zipCode").val();
		$("#zipCodeError").html("");
		if (!inZip) {
			$("#zipCodeError").html("Please enter a zip code.");
			validate = false;
		} else {
			if (!$.isNumeric(inZip) || (inZip % 1 != 0)) {
				$("#zipCodeError").html("Zip code must be an actual number.");
				validate = false;
			} else {
				if (inZip.length != 5) {
					$("#zipCodeError").html("Zip code must be at least 10 numbers");
					validate = false;
				}
			}
		}
		if (validate) {
			alert("A Valid form will be submitted");
		} else {
			alert("Invalid form. Display form and error messages");
		}
	});
});