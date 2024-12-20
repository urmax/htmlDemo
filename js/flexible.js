/*
 * @Author: cwx
 * @Date: 2022-04-11 14:49:37
 * @FilePath: \ningxia\lib\js\flexible.js
 * @Description: 
 */
$(document).ready(function(){
    resize();
    $(window).resize(function () {
        resize();
    })//比如设计稿的字体是16px,那么样式就变成font-size:0.16rem;

    function resize() {
        var width = document.documentElement.getBoundingClientRect().width;
        // if (width / dpr > 540) {
        //     width = 540 * dpr;
        if(width>765) {
            document.documentElement.style.fontSize = ''
            return;
        }
        var rem = width / 7.5;
        window.rem = rem;
        $("html").css({'fontSize':rem});
    }
});
