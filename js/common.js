$(document).ready(function() {
    // 页面滚动顶部导航栏固定事件
    window.onscroll = scroll;
    // 点击登录注册跳转页面
    login();
    // 点击购物车跳转到登录页面
    cart();




    // 方法
    // 点击登录注册跳转页面
    function login() {
        $('.log').click(function() {
            window.open('../pages/login.html', '_blank');
        })
    }
    // 跳转到购物车页面
    function cart() {
        $('.cart').click(function() {
            window.open('../pages/login.html', '_blank');
        });
    }

    // 页面滚动顶部导航栏固定事件
    function scroll() {
        if ($(window).scrollTop() > $('#header').outerHeight(true)) {
            $('#fixhead').css({
                display: 'block'
            });
        } else {
            $('#fixhead').css({
                display: 'none'
            });
        }
    };


})