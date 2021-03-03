$(document).ready(function(){
   //메뉴 버튼
    $('.menu_btn').click(function(){
       $('.navi').stop().animate({
           left:0
       },500); 
    });
    //닫기 버튼
    $('.close').click(function(){
       $('.navi').stop().animate({
          left:'-100vw' 
       },500);
    });
    //내비게이션
    $('.sub').hide();
    //첫번째 메뉴의 서브메뉴만 보임
    $('nav ul li:first-child .sub').show();
    //첫번째 메뉴에 active설정
    $('nav ul li:first > a').addClass('active');
    //주메뉴 클릭하면 각 메뉴에 해당하는 서브메뉴 나타남.
    $('nav ul li a').click(function(){
       $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('.sub').hide();
        $(this).next().show();
    });
    
    //swiper slide(메인)
    var swiper = new Swiper('.swiper-container', {
          autoplay:{
              delay:4000,
          },
          loop:true,
          pagination:{
        el: '.swiper-pagination',
          clickable:true
      }
    });
    
    //탭메뉴
    $('.t1').addClass('active');
    $('.tab_content div').hide();
    $('.con1').show();
    $('.t1').click(function(e){ 
        //(e)e.preventDefault - 탭메뉴 클릭했을 때 화면이 움직이는걸 방지(a태그의 기본값을 없애주는 것)
        e.preventDefault();
       $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.t3').removeClass('active');
        $('.con1').show();
        $('.con2').hide();
        $('.con3').hide();
    });
    $('.t2').click(function(e){
        e.preventDefault();
       $('.t2').addClass('active');
        $('.t1').removeClass('active');
        $('.t3').removeClass('active');
        $('.con2').show();
        $('.con1').hide();
        $('.con3').hide();
    });
    $('.t3').click(function(e){
        e.preventDefault();
       $('.t3').addClass('active');
        $('.t1').removeClass('active');
        $('.t2').removeClass('active');
        $('.con3').show();
        $('.con1').hide();
        $('.con2').hide();
    });
    
    //family site
    var sw=0;
    $('.family_btn').click(function(e){
        e.preventDefault();
        if(sw==0){
            sw=1;
            $('.site').addClass('active');
            $('.family_btn span').addClass('active');
        }else{
            sw=0;
            $('.site').removeClass('active');
            $('.family_btn span').removeClass('active');
        }
    });
    
    //TOP버튼
    $('.top').click(function(){
       $('html,body').animate({
           scrollTop:0
       });
    });
    
    
    
    
    
    
});