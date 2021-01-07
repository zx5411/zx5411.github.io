$(function() {
    // 点击登录
    $('.plog').click(function() {
        var tel = $('#tel').val();
        var pwd = $('#pwd').val();
        var short = $('#short').val();

        if (!(tel && pwd && short)) {
            alert('手机号、密码或短信验证码不能为空');
            location.href = '../pages/login.html';
        } else if (tel == localStorage.username && pwd == localStorage.password && short == localStorage.short) {
            alert('登录成功');
            location.href = "../pages/cart.html";
        } else {
            alert('注册成功');
            // 注册成功，信息添加到本地存储
            localStorage.setItem('username', $('#tel').val());
            localStorage.setItem('password', $('#pwd').val());
            localStorage.setItem('short', $('#short').val());
            location.href = "../pages/cart.html";
        }

    })
})