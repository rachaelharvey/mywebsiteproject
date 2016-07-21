$(document).ready(function(){
    
    // Hero // 
    
    var $heroContainer = $('.hero');
    
    $hero.Container.height(window.innerHeight);
    
    $(window).resize(funtion(){
                     $heroContainer.height(window.innerHeight)
});

    // Isotope Filters //

    var $workFilterLinks = $('.work-filters li'),
        $container = $('.work-items');

    $workFilterLinks.find('a').click(function(){
        
        $workFilterLinks.removeclass('active');
        
        $container.isotope({
            
            filter: $(this).attr('data-filter'),
            itemSelector: '.isotope-item',
            animationEngine : "best-available",
            masonry: {
                columnWidth: '.isotope-item'
            }
        })
        
        $(this).parent().addclass('active');
        
        return false;
        
    });

    // Menu initialization //

  var $menuIcon = $('.menu-icon'),
      $navigation = $('.navigation'),
      $mainNavigation = $('.main-navigation'),  
      $navigationLink = $('.main-navigation a');

  $(window).scroll(function() {
    if(window.scrollY > window.outerHeight) {
      $menuIcon.addClass('active');
    } else {
      $menuIcon.removeClass('active');
    }
  });

  $menuIcon.click(function(e) {
    e.preventDefault();

    $navigation.toggleClass('active');
  });

  $mainNavigation.singlePageNav({
      filter: ':not(.external)',
      speed: 1000,
      currentClass: 'current',
      easing: 'swing',
      updateHash: false,
      beforeStart: function() {
      },
      onComplete: function() {
        $navigation.removeClass('active');
      }
  });

    // Scrollreveal initialize

var config = {
    
    easing: 'hustle',
    reset: false,
    delay: 'onload',
    opacity: .2,
    vFactor: 0.2,
    mobile: false
}

window.sr = new scrollReveal( config );

//Fancybox

$(".video-play").fancybox({
    fitToView : true,
    width :'100%'
    autoSize : true,
    openEffect : 'none'

});

    