$(document).ready(function(){

  //sticky menu

   $('.js--services-section').waypoint(function(direction){
      if (direction == 'down'){
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
   });
  //mixit up(portfolio section)
  var mixer = mixitup('.items-show');

  //smooth-scroll-for-IE/EDGE/SAFARI

  $("a").on("click", function(even){
     if (this.hash !=="") {
       event.preventDefault();
       var hash = this.hash;
       $("html",body).animate({
         scroolTop:(hash).offset().top
        },800,function(){
          window.location.hash =hash;
        }
   
         )};
  });

});

function openNav() {
   getElementById("myNave").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNave").style.width = "0%";
}