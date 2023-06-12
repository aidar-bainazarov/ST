
$(function() {

    // fixed header
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function()
    {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH ) 
        {
            header.addClass("fixed");
        }
        else
        {
            header.removeClass("fixed");
        }
    });

    
    // smooth scroll

    $("[data-scroll]").on("click", function(event)
    {
        event.preventDefault();

        let elementid = $(this).data('scroll');
        let elementOffset = $(elementid).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 1000)
        console.log(elementOffset);
    });

    // navToggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});


// UP

(function(jq) {
  jq.autoScroll = function(ops) {
    ops = ops || {};
    ops.styleClass = ops.styleClass || 'logo';
    var t = jq('<a class="'+ops.styleClass+'"></a>'),
   d = jq(ops.target || document);
   jq(ops.container || 'body').append(t);
 
  t.css({
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0
 }).on('click', function() {
	 jq('html,body').animate({
	    scrollTop: 0
   }, ops.scrollDuration || 1000);
 });
 
  d.scroll(function() {
    var sv = d.scrollTop();
    if (sv < 300) {
      t.clearQueue().fadeOut(ops.hideDuration || 200);
	 return;
  }
 
  t.css('display', '').clearQueue().animate({
   top: sv,
   opacity: 0.8
   }, ops.showDuration || 500);
  });
  };
})(jQuery);
 
$(document).ready(function(){
 $.autoScroll({
 scrollDuration: 600, 
 showDuration: 600, 
 hideDuration: 300
 });
});




// SLIDER


$(function() {
    $('.slider').each(function() {    
        let $th = $(this);
        $th.attr('data-pos', 1);
        let slide = $th.find('.slider-slide');
        let num = $th.find('.slider-slide').length;
        let dots = $th.find('.slider-dots');
        dots.prepend('<span class="slider-indicator"></span>');
        for( let i = 1; i <= num; i++ ){ 
            dots.append('<span style="width:' + 100 / num + '%" class="slider-dot" data-pos="'+ i +'"></span>');    
        }
        $th.find('.slider-slides').css('width', 100 * num + '%');
        slide.css('width', 100 / num + '%');
        $th.find('.slider-dot').on('click', function(){
            let currentPos = $th.attr('data-pos');
            let newPos = $(this).attr('data-pos');
            let newDirection = (newPos > currentPos ? 'right' : 'left');
            let currentDirection = (newPos < currentPos ? 'right' : 'left');
            $th.find('.slider-indicator').removeClass('slider-indicator-' + currentDirection);
            $th.find('.slider-indicator').addClass('slider-indicator-' + newDirection);        
            $th.attr('data-pos', newPos);    
            $th.find('.slider-slides').css('transform', 'translateX(-' + 100 / num * (newPos - 1) + '%)');            
            $th.find('.slider-indicator').css({'left': 100 / num * (newPos - 1) + '%','right':100 - (100 / num) - 100 / num * (newPos - 1) + '%'});
        });        
        $th.find('.slider-indicator').css({'left': 0,'right': 100 - (100 / num) + '%'});
    });
});