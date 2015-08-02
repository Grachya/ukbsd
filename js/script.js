$(document).ready(function(){
	// OWL CAOUSEL
  $(".owl-carousel, #owl-carousel0").owlCarousel({
  	items:1,
    loop:true,
    nav:true,
    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });

  //FOOTER CAROUSEL
  $('.f-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots: false,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>']
  })

  //Service Animate
  $('.sI').hover(function(){
    $(this).find('.sIline').stop().animate({
      'height':'37px'
    },300);
    $(this).find('.sItitle').stop().animate({
      'margin-bottom':'0',
      'color': '#FFFFFF'
    },300)
  },
  function(){
    $(this).find('.sIline').stop().animate({
      'height':'2px'
    },300);
    $(this).find('.sItitle').stop().animate({
      'margin-bottom':'15',
      'color': '#000000'
    },300)
  })

  //our Projects
  $('.opbliNav').find('li').on('click', function(){
      var navItem = $(this).index();
      console.log("new",navItem);       
      $(this).siblings().removeAttr('id');
      $(this).attr('id','liAct');
      $('.opbli').removeClass('actv');
      $('#opbli'+navItem).addClass('actv');
      $("#owl-carousel"+navItem).owlCarousel({
          items:1,
          loop:true,
          nav:true,
          navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
      });
  })

  // animAngle
  $('.animAngle').hover(function(){
      $(this).find('.fa-angle-double-right').stop().animate({
        'right':'-10'
      })
  },function(){
      $(this).find('.fa-angle-double-right').stop().animate({
        'right':'0'
      })
  })

  //COTTEDGE TABS
  $('.sptRightInner').find('li').on('click',function(){
      var liIndex = $(this).index();
      $('.sptLeftInner').removeAttr('id').eq(liIndex).attr('id','sptlActive');
      var brownA = [95,141,186,229,273,317,362,406];
      console.log("brownA"+liIndex, brownA[liIndex]);
      $('.brownArrow').css({
        'top':brownA[liIndex]+'px'
      });
      $(this).siblings().removeAttr('id').end().attr('id','orangeLi');
  })


});