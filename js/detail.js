$(function() {
    // 点击小图片，大图片切换为对应图片
    $('.smallPic').click(function() {
        var add = $(this).attr('src');
        $('.bigPic').attr('src', add);
    })
})