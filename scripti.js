function trans(obj) {
  document.getElementById("sposta").style.gridColumnStart= "1";
  document.getElementById("sposta").style.fontSize= "10px";
}

$(document).ready(function(){
  $("#sposta").click(function(){
     $("#sposta").animate({
       left: '42vw',
       top: '40vh',
       fontSize: '10vh',
       width: '16vw',

     }, 300, "linear");
   })
});
