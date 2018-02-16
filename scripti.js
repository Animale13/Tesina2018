function trans(obj) {
  document.getElementById("sposta").style.gridColumnStart= "1";
  document.getElementById("sposta").style.fontSize= "10px";
}

$(document).ready(function(){
  $("#sposta").click(function(){
     $(".intern").animate({left: '200px'});
   })
});
