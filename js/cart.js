$(function() {

    function getCart() {
        var list = localStorage.getItem('cart') || "[]"; //字符串
        return JSON.parse(list);
    }

    function setCart(arr) {

        localStorage.setItem('cart', JSON.stringify(arr))
    }
    // 展示购物车商品列表
    showList()

    function showList() {
        var productList = getCart();
        if (productList.length < 1) {
            $('tbody').hide();
            $('h2').show();
            return;
        }
        $('tbody').empty();
        $('table').show();
        $('h2').hide();

        $.each(productList, function(index, product) {
            $('tbody').append(`<tr>
            <td>${product.product_id}</td>
            <td>${product.product_name}</td>
            <td>
                <img src="${product.product_img}" alt="">
            </td>
            <td class="price">${product.product_price}</td>
            <td class="count">${product.product_price*product.product_num}</td>
            <td>
                <span class="add">+</span>
                <input type="text" value="${product.product_num}" class = "num"></input>
                <span class="cut">-</span>
            </td>
            <td>
                <button class="del">删除</button>
            </td>
        </tr>`);
            $('.number').html(index + 1);
        });

    }

    //  点击+或者-修改当前商品的数量
    $('.add').click(function() {
        var num = parseInt($(this).siblings('.num').val()) + 1;
        $(this).siblings('.num').val(num);
        var count = $(this).parent().siblings('.price').html() * num;
        $(this).parent().siblings('.count').html(count);

    });
    $('.cut').click(function() {
        var num = parseInt($(this).siblings('.num').val()) - 1;
        if (num < 0) { num = 0 }
        $(this).siblings('.num').val(num);
        var count = $(this).parent().siblings('.price').html() * num;
        $(this).parent().siblings('.count').html(count);

    });
    //  直接修改输入框中的数值
    $('.num').change(function() {
        var count = $(this).parent().siblings('.price').html() * $(this).val();
        $(this).parent().siblings('.count').html(count);
    })

    //  点击删除,删除当前商品,删除完成后重新渲染
    $('.del').click(function() {
        $(this).parent().parent().remove();
        var number = $('.number').html() - 1;
        $('.number').html(number);
        var index = $(this).parent().parent().index();
        var arr = JSON.parse(localStorage.cart);
        arr.splice(index, 1);
        localStorage.cart = JSON.stringify(arr);
        showList();
    })
})