function trans(obj) {
  document.getElementById("sposta").style.gridColumnStart= "1";
  document.getElementById("sposta").style.fontSize= "10px";
}

$(document).ready(function(){
  $("#sposta").click(function(){
     $("#sposta").animate({left: '30vw'});
   })
});
