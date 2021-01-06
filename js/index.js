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
    // 轮播图
    function swiper() {
        var mySwiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
})