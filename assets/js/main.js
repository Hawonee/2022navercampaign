$(function () { //시작

  //e.preventDefault(); 새로고침

  window.scrollTo()


  var swiper = new Swiper(".keyword-wrap .swiper", {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    Infinity: true,
  });


  // 카드 리스트
  $('.card-item:first-child').addClass('active');
  $('.card-item').hover(function(e) {
  e.preventDefault();
    $('.card-item').removeClass('active');
    $(this).addClass('active');
  }, function() {
    $(this).addClass('active');
  });

  // 하단 유의 사항
  $('.notice-item .btn-notice').click(function() {
    $(this).toggleClass('on'); 
    $(this).siblings('.group-notice').toggleClass('on');
  });


  // 상단 버튼 스크롤 영역
  var btnTop = $('.btn-top');
  var target = $('.sc-main');
  var white = $('.sc-yearbook')
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > target.offset().top) {
      btnTop.addClass('on');
    } else {
      btnTop.removeClass('on');
    }

    if ($(window).scrollTop() > white.offset().top) {
      btnTop.addClass('white');
    } else {
      btnTop.removeClass('white');
    }
  });
  $(window).trigger('scroll'); //강제 실행



  //////////////////  반응형  /////////////////




}); //끝 지우지 말 것
