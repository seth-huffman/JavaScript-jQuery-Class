    $('#test input:radio').change(function() {
    	var selectedVal = $("#test input:radio:checked").val();
    	if (1 == selectedVal) {
    		var productsList = '<select name="Products"><option>Pen</option><option>Paper</option><option>Pencil</option></select>';
    		$('select').remove();
    		$('#selectList').append(productsList);
    	} else if (2 == selectedVal) {
    		var colorsList = '<select name="Colors"><option>Red</option><option>Yellow</option><option>Green</option></select>';
    		$('select').remove();
    		$('#selectList').append(colorsList);
    	}
    });
    $(document).ready(function() {
    	myJSON = JSON.stringify(json);
    	localStorage.setItem("testJSON", myJSON);
    	text = localStorage.getItem("testJSON");
    	obj = JSON.parse(text);
    	var tr;
    	for (var i = 0; i < obj.length; i++) {
    		tr = $('<tr/>');
    		tr.append("<td>" + obj[i].Product + "</td>");
    		tr.append("<td>" + obj[i].Amount + "</td>");
    		tr.append("<td>" + obj[i].Measurement + "</td>");
    		$('table').append(tr);
    	}
    });
    $(document).ready(function() {
    	$("#half").click(function() {
    		$("tr").remove();
    		var tr;
    		for (var i = 0; i < obj.length; i++) {
    			tr = $('<tr/>');
    			tr.append("<td>" + obj[i].Product + "</td>");
    			tr.append("<td>" + obj[i].Amount / 2 + "</td>");
    			tr.append("<td>" + obj[i].Measurement + "</td>");
    			$('table').append(tr);
    		}
    	});
    });
    $(document).ready(function() {
    	$("#whole").click(function() {
    		$("tr").remove();
    		var tr;
    		for (var i = 0; i < obj.length; i++) {
    			tr = $('<tr/>');
    			tr.append("<td>" + obj[i].Product + "</td>");
    			tr.append("<td>" + obj[i].Amount + "</td>");
    			tr.append("<td>" + obj[i].Measurement + "</td>");
    			$('table').append(tr);
    		}
    	});
    });
    $(document).ready(function() {
    	$("#double").click(function() {
    		$("tr").remove();
    		var tr;
    		for (var i = 0; i < obj.length; i++) {
    			tr = $('<tr/>');
    			tr.append("<td>" + obj[i].Product + "</td>");
    			tr.append("<td id='fart'>" + obj[i].Amount * 2 + "</td>");
    			tr.append("<td>" + obj[i].Measurement + "</td>");
    			$('table').append(tr);
    		}
    	});
    });
    $(document).ready(function() {
    	var prep;
    	var cook;
    	var level;
    	var total;
    	for (var i = 0; i < main.length; i++) {
    		prep = $('#prep');
    		cook = $('#cook');
    		total = $('#total');
    		level = $('#level');
    		prep.append("<h5>" + main[i].Prep + "</h5>");
    		cook.append("<h5>" + main[i].Cook + "</h5>");
    		total.append("<h5>" + main[i].Total + "</h5>");
    		level.append("<h5>" + main[i].Difficulty + "</h5>");
    		$('.timeBox').append(h5);
    	}
    });
    $(document).ready(function() {
    	var p;
    	for (var i = 0; i < pgraph.length; i++) {
    		p = $('<p/>');
    		p.append("<p>" + pgraph[i].Paragraph + "</p>");
    		$('#instructions').append(p);
    	}
    });
    $(document).ready(function() {
    	$("#button1").click(function() {
    		$("#ingredience").toggle();
    	});
    	$("#button2").click(function() {
    		$("#instructions").toggle();
    	});
    	$('p').click(function() {
    		$(this).toggleClass("bold");
    	});
    	$('tr').click(function() {
    		$(this).toggleClass("bold");
    	});
    });
    var JavaBook, x;
    JavaBook = {
    	"ISBN": "0-596-00016-2",
    	"Title": "Java and XML",
    	"Price": 39.95,
    	"Publisher": "O'Reilly and Associates",
         "Copyright": 2000,
    	"Comments": "Update required"
    };
    x = JSON.stringify(JavaBook);
    document.getElementById("first").innerHTML = x;
    var VB6Book, y;
    VB6Book = {
    	"ISBN": "1-861003-32-3",
    	"Title": "Professional Visual Basic 6 XML",
    	"Price": 49.99,
    	"Publisher": "Wrox Press",
    	"Copyright": 2000,
    	"Comments": "Outdated text. Switch to C#"
    };
    y = JSON.stringify(VB6Book);
    document.getElementById("second").innerHTML = y;
    var textbooks, z;
    textbooks = {
    	"Books": [{
    		"ISBN": "0-596-00016-2",
    		"Title": "Java and XML",
    		"Price": 39.95,
    		"Publisher": "O'Reilly and Associates",
    		"Copyright": 2000,
    		"Comments": "Update required"
    	}, {
    		"ISBN": "1-861003-32-3",
    		"Title": "Professional Visual Basic 6 XML",
    		"Price": 49.99,
    		"Publisher": "Wrox Press",
    		"Copyright": 2000,
    		"Comments": "Outdated text. Switch to C#"
    	}]
    }
    z = JSON.stringify(textbooks)
    document.getElementById("third").innerHTML = z;