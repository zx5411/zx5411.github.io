$(function() {
    // 点击小图片，大图片切换为对应图片
    $('.smallPic').click(function() {
        var add = $(this).attr('src');
        $('.bigPic').attr('src', add);
        $('#bigImg').attr('src', add);

    });
    // 放大镜
    change();

    // 放大镜
    function change() {
        //获取元素
        var small = $id("small"); //小盒子
        var mask = $id("mask"); //遮罩层
        var smallImg = $id("smallImg"); //小图片
        var big = $id("big"); //大盒子
        var bigImg = $id("bigImg"); //大图片
        var box = $id("box");
        //1.鼠标移入small，mask显示，big显示
        small.onmouseenter = function() {
                mask.style.display = 'block';
                big.style.display = 'block';
            }
            //2.鼠标位置处于mask正中心
            //获取位置
        small.onmousemove = function(e) {
            e = e || window.event;
            //获取当前元素
            var dom = this;
            //获取当前元素的偏移量
            var left = dom.offsetLeft;
            var otop = dom.offsetTop;
            //mask的位置
            var x = e.clientX + getScroll().left - left - mask.offsetWidth / 2;
            var y = e.clientY + getScroll().top - otop - mask.offsetHeight / 2;

            //边界值判断
            if (x <= 0) {
                x = 0;

            }
            if (x >= box.offsetWidth - mask.offsetWidth) {
                x = box.offsetWidth - mask.offsetWidth;
            }
            if (y <= 0) {
                y = 0;
            }
            if (y >= 216) {
                y = 216;
            }
            mask.style.left = x + 'px';
            mask.style.top = y + 'px';
            //3.big中bigImg按同比例移动，左移和上移
            var bigImgLeft = x / box.offsetWidth * bigImg.offsetWidth;
            var bigImgTop = y / box.offsetHeight * bigImg.offsetHeight;
            bigImg.style.left = -bigImgLeft + 'px';
            bigImg.style.top = -bigImgTop + 'px';
        }

        //4.鼠标移出small，mask隐藏，big隐藏
        small.onmouseleave = function() {
            mask.style.display = "none";
            big.style.display = "none";
        }
    }


    // 添加到购物车
    // 购物车公共方法
    function getCart() {
        var list = localStorage.getItem('cart') || "[]"; //字符串
        return JSON.parse(list);
    }

    function setCart(arr) {
        localStorage.setItem('cart', JSON.stringify(arr))
    }
    // 点击添加到购物车

    $('#addCart').click(function() {

        var newProduct = {
            product_id: parseInt(Math.random() * 100000),
            product_name: $('#addCart').data('name'),
            product_img: $('#addCart').data('img'),
            product_price: $('#addCart').data('price'),
            product_count: $('#addCart').data('price') * $('#addCart').data('num'),
            product_num: 1,

        };
        // 先获取原来的商品列表数组
        var productList = getCart();
        // 把新商品添加进去
        productList.push(newProduct);
        // 存回本地存储
        setCart(productList)
            // 购物车商品数量加一
        var number = parseInt($('.number').html()) + 1;
        $('.number').html(number);
    })

    //  点击+或者-修改当前商品的数量
    $('.add').click(function() {
        var num = parseInt($(this).siblings('.num').val()) + 1;
        $(this).siblings('.num').val(num);
    });
    $('.cut').click(function() {
        var num = parseInt($(this).siblings('.num').val()) - 1;
        if (num < 1) { num = 1 }
        $(this).siblings('.num').val(num);
    });
    //  输入框中的数值默认为1
    $('.num').change(function() {
        if (!$(this).val() || $(this).val() < 1) {
            $(this).val(1);
        }
    })

})