$(function () {

    // 메인비쥬얼 다음페이지 자동
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인비쥬얼 다음페이지 화살표
    $('.main_visual .main_arrow .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .main_arrow .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })


});