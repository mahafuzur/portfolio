(function ($) {
  "use strict";
  
  jQuery(document).on('ready', function () {

    function initSkills() {
      $('div.skillbar').each(function () {
        $(this).find('div.skillbar-bar').css({
          width: $(this).attr('data-percent')
        });
      });
    }
    initSkills();
    
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
  
  jQuery(window).on('load', function () {
    
    $('div#loading').fadeOut(500);
    
    window.sr = ScrollReveal({
      reset: false
    });
    
    var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' + '.timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card,' + '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title';
    sr.reveal(commonCards, {
      duration: 1100
    });
    
    sr.reveal('#about-card,.map-label', {
      duration: 1400,
      delay: 500
    });
    
    sr.reveal('#v-card-holder', {
      duration: 1400,
      distance: '150px'
    });
    
    sr.reveal('.all_projects', {
      duration: 1400,
      distance: '150px'
    });

    sr.reveal('.skillbar-bar', {
      duration: 1800,
      delay: 300,
      distance: '0'
    });
  });
})(jQuery);
