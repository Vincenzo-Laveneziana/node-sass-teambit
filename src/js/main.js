console.log("Js ok");


$(document).ready(function () {
  console.log("Js jquery Ok");


  var iconHamburger = $(".hamburger");
  var hamburgerMenu = $(".hamburger-menu");
  var close = $(".close");


  iconHamburger.click(function(){
   hamburgerMenu.toggle();
   close.toggle();
   iconHamburger.toggle();
  });

  close.click(function(){
    close.toggle();
    hamburgerMenu.toggle();
    iconHamburger.toggle();
  });

  
});