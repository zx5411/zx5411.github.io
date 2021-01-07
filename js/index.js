$(function() {
    // 切换详情页
    $('.detail').click(function() {
        window.open('../pages/detail.html', '_blank');
    });
    // 切换列表页
    $('.list').click(function() {
        window.open('../pages/list.html', '_blank');
    });
    // 轮播图
    swiper();
    // 倒计时
    timeout();

    // 方法
    // 轮播图
    function swiper() {
        var mySwiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
    // 倒计时
    function timeout() {
        clearInterval(timer);
        var timer = setInterval(function() {
            var hoursS = $('.timeout').children().eq(0).text() % 10;
            var hoursF = parseInt($('.timeout').children().eq(0).text() / 10);
            var minutesS = $('.timeout').children().eq(1).text() % 10;
            var minutesF = parseInt($('.timeout').children().eq(1).text() / 10);
            var secondsS = $('.timeout').children().eq(2).text() % 10;
            var secondsF = parseInt($('.timeout').children().eq(2).text() / 10);
            $('.timeout').children().eq(2).text(secondsF * 10 + secondsS - 1);
            if (secondsS <= 0) {
                secondsS = 9;
                secondsF--;
                $('.timeout').children().eq(2).text(secondsF * 10 + secondsS);
            }

            if (secondsF < 0) {
                secondsF = 5;
                minutesS--;
                $('.timeout').children().eq(2).text(secondsF * 10 + secondsS);
                $('.timeout').children().eq(1).text(minutesF * 10 + minutesS);
            }
            if (minutesS < 0) {
                minutesS = 9;
                minutesF--;
                $('.timeout').children().eq(1).text(minutesF * 10 + minutesS);
            }

            if (minutesF < 0) {
                minutesF = 5;
                hoursS--;
                $('.timeout').children().eq(1).text(minutesF * 10 + minutesS);
                $('.timeout').children().eq(0).text(hoursF * 10 + hoursS);
            }
            if (hoursS < 0) {
                hoursS = 9;
                hoursF--;
                $('.timeout').children().eq(0).text(hoursF * 10 + hoursS);
            }

            if (hoursF < 0) {
                hoursF = 2;
                hoursS = 3;
                minutesF = 5;
                minutesS = 9;
                secondsF = 5;
                secondsS = 9;
                $('.timeout').children().eq(0).text(hoursF * 10 + hoursS);
                $('.timeout').children().eq(1).text(minutesF * 10 + minutesS);
                $('.timeout').children().eq(2).text(secondsF * 10 + secondsS);
            }


        }, 1000)
    }
})