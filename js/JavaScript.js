$(document).ready(function () {

    //SCROLL TOP
    var scroll = 0,
        chatBtn = $('.chat-btn'),
        scrollTop = $('#scroll-top');

    $(window).scroll(function () {
        var $this = $(this),
            scroll = $this.scrollTop();

        if (scroll > 150) {
            chatBtn.addClass('active');
            scrollTop.addClass('active');
        } else if (scroll < 100) {
            chatBtn.removeClass('active');
            scrollTop.removeClass('active');
        }
    });

    scrollTop.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



    /*mob_menu*/
    $(".menu_mob").click(function () {
        $(".menu_mob").toggleClass("active_drop_men");
        $(".header-menu").toggleClass("active");
    });



    /* modal */
    $(".open-modal").click(function () {
        $(".modal-block").hide();
        $(".modal").css("display", "flex");
        var name = "." + $(this).attr("data-openModal");
        $(name).css("display", "block");
    });
    $(".close-modal").click(function () {
        $(".modal").hide();
        $(".modal-block").hide();
    });

    var modal = $('.modal')[0];

    $(window).click(function () {
        if (event.target == modal) {
            $(".modal-block").hide();
            $(".modal").hide();
        }
    });


    // tab 
    $(".tab-nav-btn").click(function () {
        $(".tab-nav-btn").removeClass("active");
        $(this).addClass("active");
        $(".tab-block").removeClass("active");
        $(".tab-block").eq($(this).index()).addClass("active");
    });

    // language
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "img/";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        console.log($state);
        return $state;
    };

    $(".js-language").select2({
        templateResult: formatState
    });
    $(".js-language").change(function () {
        var flag = $(".select2-selection__rendered").attr("title").toLowerCase();
        $(".select-img").attr("src", 'img/' + flag + '.png');
        $(".select-img2").attr("src", 'img/' + flag + '.png');
    });


    // catalog menu
    $(".catalog-btn").click(function () {
        $(".header").toggleClass("catalog-active");
    });

    const width = $(window).width();

    if (width > 767) {
        $(".catalog-block").hover(
            function () {
                $(".catalog-block").removeClass("active");
                $(this).addClass("active");
            }
        );
    }
    else {
        $(".catalog-block").click(function () {
            $(this).toggleClass("active");
        })
    }

    // banner slider    
    var swiperBanner = new Swiper('.swiper-banner', {
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.banner-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.arrow-banner-prev',
            nextEl: '.arrow-banner-next',
        }
    });

    // category slider
    var swiperCategory = new Swiper('.swiper-category', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            prevEl: '.arrow-catalog-prev',
            nextEl: '.arrow-catalog-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2.6
            },
            767: {
                slidesPerView: 1.4
            }
        }
    });

    // product slider
    var swiperProduct = new Swiper('.swiper-product', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        navigation: {
            prevEl: '.arrow-product-prev',
            nextEl: '.arrow-product-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2.6
            },
            767: {
                slidesPerView: 1.2
            }
        }
    });

    // product like
    $(".product-like").click(function () {
        $(this).toggleClass("active");
    });

    // add & minus count
    $(".minus-basket-btn").click(function () {
        var input = $(this).parent(".add-basket-block").find(".sum-count-input")
        var count_minus = input.val();
        if (count_minus != 1) {
            count_minus--;
            input.val(count_minus);
        }
        else {
            $(this).parents(".product-bottom").removeClass("active");
        }
    });

    $(".plus-basket-btn").click(function () {
        var input = $(this).parent(".add-basket-block").find(".sum-count-input");
        input.val(parseInt(input.val()) + 1);
    });

    $('.sum-count-input').on('keydown', function (e) {
        if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
            return false;
        };
    })

    $(".add-basket-btn").click(function () {
        $(this).parent(".product-bottom").addClass("active");
    });


    // partners slider
    var swiperPartners = new Swiper('.swiper-partners', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            prevEl: '.arrow-partners-prev',
            nextEl: '.arrow-partners-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2.6
            },
            767: {
                slidesPerView: 1.6
            }
        }
    });

    // footer menu
    $(".footer-menu-title").click(function () {
        $(this).parents(".footer-menu-block").toggleClass("active");
    });


    // category slider
    var swiperMaterials = new Swiper('.swiper-materials', {
        slidesPerView: 4.4,
        spaceBetween: 18,
        loop: true,
        navigation: {
            prevEl: '.arrow-materials-prev',
            nextEl: '.arrow-materials-next',
        },
        breakpoints: {
            1270: {
                slidesPerView: 3.6
            },
            991: {
                slidesPerView: 2.6
            },
            767: {
                slidesPerView: 2.3,
                spaceBetween: 10
            }
        }
    });

    // sotring catalog
    $(".sorting-btn").click(function () {
        $(".sorting-btn").removeClass("active")
        $(this).addClass("active");
    });


    // add & minus basket
    $(".count-minus").click(function () {
        var input = $(this).next(".input-count");
        var count_minus = input.val();
        if (count_minus != 0) {
            count_minus--;
            input.val(count_minus);
        }
    });

    $(".count-plus").click(function () {
        var input = $(this).prev(".input-count");
        input.val(parseInt(input.val()) + 1);
    });

    $('.input-count').on('keydown', function (e) {
        if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
            return false;
        };
    })

    // close-basket 
    $(".close-basket").click(function () {
        $(this).parent(".basket-block").hide(300);
    });


    // gallery slider
    var swiperMaterials = new Swiper('.swiper-gallery', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            prevEl: '.arrow-gallery-prev',
            nextEl: '.arrow-gallery-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1.5
            }
        }
    });
});

/* google map*/
var ifPageHaveMap = document.querySelector('.map') || false;

if (ifPageHaveMap) {
    function initMap() {
        var uluru = { lat: 46.461206, lng: 30.754038 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: './img/marker.svg'
        });
    }
}