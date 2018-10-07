jQuery(document).ready(function(){
  
jQuery(".menu_toggle").click(function (e) {
  e.preventDefault();
  jQuery(this).toggleClass('menu-open');
  jQuery(".navigation").toggleClass('menu-open');
  jQuery(".box").toggleClass('margin-left40');
});
  
var typed = new Typed('#typed', {
  strings: ["Landing Pages.", "Commercial Websites.", "Jekyll Site.", "Wordpress Customization."],
  typeSpeed: 40,
  loop: true
});

  
});




