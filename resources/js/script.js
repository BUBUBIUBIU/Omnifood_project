// and this ensures that this code can only run
// after the document has been loaded.
// $(document).ready(function(){
//     // 我们选取元素h1，然后用click事件监听，有click的时候就触发function
//     $('h1').click(function(){
//         // 这里的this代表的是'h1' element, 这行指令会把h1的背景变红
//         $(this).css('background-color', '#ff0000');  
//     })
// })

$(document).ready(function(){

    // 第一步操作，选定js--section--features所管控的元素
    // 这里的function中的parameter会根据页面滑动传入down或up
    // 第二个参数应该是触发偏离值
    // For the sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })

    // Scroll on button
    // 这里的1000是一千毫秒，也就是一秒
    // 一个元素的 scrollTop 值是这个元素的顶部到视口可见内容（的顶部）的距离的度量
    // animate是jQuery的动画效果（一个功能强大的function）, 
    // offset取的是.js--section-plans相对于整个page的垂直偏移值
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })

    /* Navigation scroll */
    // 什么鬼？不太懂，等等回来研究一下
    $(function() {
        // 这里的被选元素应该就是navigation里的那几个
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            // 这个target就是我们要蹦到的地方
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
          }
        });
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction){
        // 使用Animate.css网站上的各种动画效果只要
        // 先加上animate修饰，再加上对应的动画修饰
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        // 整个页面的50%
        offset: '50%'    
    }) 

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    }) 

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    }) 

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    }) 

    /* Mobile nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        // 动画秒数为0.2秒, 神奇的函数，直接制定动画了
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    })
})