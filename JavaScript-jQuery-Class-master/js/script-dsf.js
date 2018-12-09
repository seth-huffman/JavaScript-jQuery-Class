function menuChange (dropValue) {
  if(dropValue == "C") {
    $("#com").show();
    $("#tech").hide();
    $("#prod").hide();
  }
  else if(dropValue == "T") {
    $("#tech").show();
    $("#com").hide();
    $("#prod").hide();
  }
  else if(dropValue == "P") {
    $("#prod").show();
    $("#tech").hide();
    $("#com").hide();
  }
}