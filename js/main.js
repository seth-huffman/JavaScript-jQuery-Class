    //DYNAMIC DROP DOWN FORM
    $('#test input:radio').change(function() {
        var selectedVal = $("#test input:radio:checked").val();
            
            if(1 == selectedVal){
                var productsList = '<select name="Products"><option>Pen</option><option>Paper</option><option>Pencil</option></select>';
                $('select').remove();
                $('#selectList').append(productsList);
                
                
            }else if(2 == selectedVal){
                var colorsList = '<select name="Colors"><option>Red</option><option>Yellow</option><option>Green</option></select>';
                $('select').remove();
                $('#selectList').append(colorsList);
            }
        });


    //RECIPE INSIDER   
        $(document).ready(function(){

        $("#button1").click(function(){
            $("#ingredience").toggle();
            });
        $("#button2").click(function(){
            $("#instructions").toggle();
            });
        $('p').click(function(){
            $(this).toggleClass("bold");
            });
        $('tr').click(function(){
            $(this).toggleClass("bold");
            });
        });


    //JSON CREATE
    var JavaBook, x;
        JavaBook = {"ISBN":"0-596-00016-2", "Title":"Java and XML", "Price":39.95, "Publisher":"O'Reilly and Associates", "Copyright":2000, "Comments":"Update required" };
        x = JSON.stringify(JavaBook);
         document.getElementById("first").innerHTML = x;

    var VB6Book, y;
        VB6Book = {"ISBN":"1-861003-32-3", "Title":"Professional Visual Basic 6 XML", "Price":49.99, "Publisher":"Wrox Press", "Copyright":2000, "Comments":"Outdated text. Switch to C#" };
        y = JSON.stringify(VB6Book);
        document.getElementById("second").innerHTML = y;

    var textbooks, z;
        textbooks = {"Books":[
        { "ISBN":"0-596-00016-2", "Title":"Java and XML", "Price":39.95, "Publisher":"O'Reilly and Associates", "Copyright":2000, "Comments":"Update required" },
        { "ISBN":"1-861003-32-3", "Title":"Professional Visual Basic 6 XML", "Price":49.99, "Publisher":"Wrox Press", "Copyright":2000, "Comments":"Outdated text. Switch to C#"}
        ]}
	    z = JSON.stringify(textbooks)
        document.getElementById("third").innerHTML = z;