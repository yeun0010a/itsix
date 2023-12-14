$(function () {
    // 로고 클릭 시 최상단으로 이동
    $("h1.logo").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400);
    });
// pc+모바일 버튼 클릭시 애니메이션으로 이동
// .menu와 .m_menu의 a태그 속성 중 herf의 #으로 시작하는 요소 클릭 시 
$(".menu li a[href^='#'],.m_menu li a[href^='#']").on("click", function(){
var target = $(this).attr("href");
var targetPostion = $(target).offset().top;
//애니메이션 설정
$("html,body").animate({
scrollTop:targetPostion
},800);
});




    // 햄버거버튼 클릭시 나오는 모바일 메뉴 보기 가리기
    // ".rightmenu li").eq(2) =.rightmenu li의 2번째
    // >>처음 요소가 0번째<<
$(".rightmenu li").eq(2).click(function(){
    $(".m_menu").show(); /* 보기 */ 
    $(".rightmenu").hide();  /* 가리기 */ 
    $(".m_menu li").eq(3).show(); /* X버튼 */
});

$(".m_menu li").eq(3).click(function(){
    $(".m_menu").hide();
    $(this).hide();
    $(".rightmenu").show();
});



// 배경 스크롤 이벤트
// 스크롤이 위로 올라갈수록 li의 배경 이미지도 동적으로 이동되는 스트립트
// window = 웹 브라우저 창을 뜻함 ]
//-100= 기존의 요소에서 상단으로 100픽셀 올려주기
// (scr/2)현재 스크롤값 나누기 2 스크롤 위치에 따라 동적으계산된 값에 따라 이동이 이루어짐

$(window).scroll(function(){ 
    var scr=$(this).scrollTop();
    $("ul.center_bg li").eq(0).css({
        "top": -100 + (scr/2)
    });
    $("ul.center_bg li").eq(1).css({
        "top": -100 + (scr/1.7)
    });
    $("ul.center_bg li").eq(2).css({
        "top": -80 + (scr/3)
    });
    $("ul.center_bg li").eq(3).css({
        "top": 60 + (scr/5)
    });
    $("ul.center_bg li").eq(4).css({
        "top": 10 + (scr/5)
    });
    $("ul.center_bg li").eq(5).css({
        "top": -60 + (scr/2)
    });
    $("ul.center_bg li").eq(6).css({ 
        "transform": "translate(-50%," + (-50 - (scr / 100)) + "%)"
    });

    // 육각형 위치 이동
    $(".hexagon").css({ 
        "transform": "translate(-50%," + (-50 - (scr / 99.5)) + "%)"
    });

    
        // 레드카펫 위치 이동
        $("#redcarpet").css({
            // 위로 올라가는 효과 구현
            // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
            "transform": "translateY(" + (-200 - (scr / 2.5)) + "px)"
        });



    // 폿폴배경 위치 이동
    $(".port_bg li").eq(0).css({
        "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
    });
    $(".port_bg li").eq(1).css({
        "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
    });
    $(".port_bg li").eq(2).css({
        "transform": "translateY(" + (0 - (scr / 2)) + "px)"
    });

    if (scr > 1630) {
        scr -= 1630;
        $("#redcarpet2").css({
            "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
        });
    }
    });


});


