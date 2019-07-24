// $(function(){
// //     $('#myModal').modal('show');
// // })
$(function () {
    $(window).on("resize", function () {
        let clientW = $(window).width()
        // console.log(clientW);
        // 设置临界值
        let isShowBigImage = clientW >= 750

        let $allitems = $("#lk_carousel .item")

        $allitems.each(function (index, item) {
            let src = isShowBigImage?$(item).data("lg-img"):$(item).data("sm-img")
            let imgUrl = 'url("' + src +'")'
            // console.log(imgUrl);
            $(item).css({
                'backgroundImage': imgUrl
            })
            if (!isShowBigImage) {
                let $img = "<img src='"+src+"'>"
                $(item).empty().append($img)
            } else {
                $(item).empty()
            }
        })
    })
    $(window).trigger("resize")

    // 开启工具提示
    $('[data-toggle="tooltip"]').tooltip()
    // 开启提示框
    $('[data-toggle="popover"]').popover()

    // 根据宽度修改 滑动栏
    $(window).on("resize", function () {
        let $ul = $("#lk_product .nav")
        let $allList = $("[role='presentation']", $ul)
        // 遍历长度
        let totalW = 0
        $allList.each(function (idnex, item) {
            totalW += $(item).width()
        })

        let parentW = $ul.parent().width()
        if (totalW > parentW) {
            $ul.css({
                width: totalW +"px"
            })
        } else {
            $ul.css({
                width: "100%"
            })
        }

    })

    // 导航的处理
    let allLis = $("#bs_nav li")
    $(allLis[0]).on("click", function () {
        $("html, body").animate({
            scrollTop: $("#lk_aboutus").offset().top
        }, 1000)
    })
    $(allLis[1]).on("click", function () {
        $("html, body").animate({
            scrollTop: $("#lk_product").offset().top
        }, 1000)
    })
    $(allLis[2]).on("click", function () {
        $("html, body").animate({
            scrollTop: $("#lk_hot").offset().top
        }, 1000)
    })


    $(window).trigger("resize")
})