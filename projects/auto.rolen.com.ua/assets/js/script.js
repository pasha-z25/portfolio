$(document).ready(function () {
    var stepsThumbs = new Swiper('.gallery-thumbs.step', {
        // slidesPerView: 9,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        lazy: true,
        breakpoints: {
            320: {
                slidesPerView: 2,

            },

            550: {
                slidesPerView: 4,
            },

            992: {
                slidesPerView: 8,
            }
        }
    });
    var stepsTop = new Swiper('.gallery-top.step', {
        lazy: true,
        navigation: {
            nextEl: '.next-step',
            // prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: stepsThumbs
        }
    });
    var aboutThumbs = new Swiper('.gallery-thumbs.swiper-about', {
        // slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        lazy: true,
        navigation: {
            nextEl: '.next-about',
            // prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },

            768: {
                slidesPerView: 3,
            }
        }
    });
    var aboutTop = new Swiper('.gallery-top.swiper-about', {
        lazy: true,
        navigation: {},
        thumbs: {
            swiper: aboutThumbs
        }
    });
    var slider = new Swiper('.swiper-container.select-items', {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1550: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
        pagination: {
            el: '.swiper-pagination.select-items',
        },
        navigation: {
            nextEl: '.select-items .swiper-button-next',
            prevEl: '.select-items .swiper-button-prev',
        },
    });
    $('.step .next-slide').click(function(){
        event.preventDefault();
        $('.next-step').trigger("click");
    });
    $(".scroll-to").click(function() {
        event.preventDefault();
        var id_section = $(this).attr("href");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id_section).offset().top
        }, 1000);
    });
    $('.modal-btn').click(function () {
        event.preventDefault();
        $('.modal-wrapper').addClass('active');
    });
    $('.modal-wrapper, .modal-wrapper .close').click(function (e) {
        if(e.target == this) {
            $('.modal-wrapper').removeClass('active');
        }
    });
    $('.faq .item .question').click(function () {
        $('.faq .item').removeClass('open');
        $(this).closest('.item').toggleClass('open');
    });
    $('#calc-form').submit(function () {
        event.preventDefault();
    });
    $('.burger-menu').click(function () {
        $('.header .nav').toggleClass('open');
        $(this).toggleClass('open');
        if ( $(this).hasClass("open")){
            $('body').css('overflow', 'hidden');
        }
        else {
            $('body').css('overflow', 'auto');
        }
    });
    $('.radio-group .motor').click(function () {
        if ($(this).attr("data-engine") == "electric") {
            $('#fuel_engine').css('display', 'none');
            $('#eletric_engine').css('display', 'block');
        } else {
            $('#fuel_engine').css('display', 'block');
            $('#eletric_engine').css('display', 'none');
        }

    });
    $(function($) {
        $(".lazy").Lazy();
    });
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
    if ($(window).width() <= '992') {
        $('.menu_link').click(function () {
            $('.header .nav').removeClass('open');
            $('.burger-menu').removeClass('open');
            $('body').css('overflow', 'auto');
        });
    };
    $('#calc').click(function () {
        event.preventDefault();
        var price = +($('#price').val());
        // var type = $('#select_category').val();
        var year = +($('#year').val());
        var volume = +($('#volume').val());
        var engine = $('input:radio[name ="motor_type"]:checked').val();
        var fixedCost = 2275;
        var currencyCourse = 26.9
        var currencyEuro = 30.4

        {
            console.log('Входные данные');
            console.log('Цена на аукционе: ', price);
            // console.log('Тип авто: ', type);
            console.log('Год выпуска: ', year);
            console.log('Объём двигателя: ', volume);
            console.log('Тип двигателя: ', engine);
        }

        var auction = 0;
        switch (true) {
            case price >= 0 && price <= 99.99:
                auction = 1;
                break;
            case price >= 100 && price <= 199.99:
                auction = 40 + 29;
                break;
            case price >= 200 && price <= 299.99:
                auction = 60 + 29;
                break;
            case price >= 300 && price <= 349.99:
                auction = 75 + 29;
                break;
            case price >= 350 && price <= 399.99:
                auction = 90 + 29;
                break;
            case price >= 400 && price <= 499.99:
                auction = 100 + 29;
                break;
            case price >= 500 && price <= 599.99:
                auction = 130 + 39;
                break;
            case price >= 600 && price <= 699.99:
                auction = 145 + 39;
                break;
            case price >= 700 && price <= 799.99:
                auction = 160 + 39;
                break;
            case price >= 800 && price <= 899.99:
                auction = 175 + 39;
                break;
            case price >= 900 && price <= 999.99:
                auction = 190 + 39;
                break;
            case price >= 1000 && price <= 1099.99:
                auction = 205 + 59;
                break;
            case price >= 1100 && price <= 1199.99:
                auction = 220 + 59;
                break;
            case price >= 1200 && price <= 1299.99:
                auction = 230 + 59;
                break;
            case price >= 1300 && price <= 1399.99:
                auction = 240 + 59;
                break;
            case price >= 1400 && price <= 1499.99:
                auction = 255 + 59;
                break;
            case price >= 1500 && price <= 1599.99:
                auction = 270 + 69;
                break;
            case price >= 1600 && price <= 1699.99:
                auction = 290 + 69;
                break;
            case price >= 1700 && price <= 1799.99:
                auction = 300 + 69;
                break;
            case price >= 1800 && price <= 1999.99:
                auction = 310 + 69;
                break;
            case price >= 2000 && price <= 2199.99:
                auction = 325 + 79;
                break;
            case price >= 2200 && price <= 2399.99:
                auction = 330 + 79;
                break;
            case price >= 2400 && price <= 2499.99:
                auction = 345 + 79;
                break;
            case price >= 2500 && price <= 2999.99:
                auction = 360 + 79;
                break;
            case price >= 3000 && price <= 3499.99:
                auction = 400 + 79;
                break;
            case price >= 3500 && price <= 3999.99:
                auction = 450 + 79;
                break;
            case price >= 4000 && price <= 4499.99:
                auction = 475 + 89;
                break;
            case price >= 4500 && price <= 4999.99:
                auction = 500 + 89;
                break;
            case price >= 5000 && price <= 5999.99:
                auction = 525 + 89;
                break;
            case price >= 6000 && price <= 7499.99:
                auction = 550 + 99;
                break;
            case price >= 7500 && price <= 19999.99:
                auction = 500 + (price * 0.01) + 119;
                break;
            default:
                auction = (price * 0.04) + 119;
        }
        auction += 104

        var autoPrice = price + auction;
        var strahovka = autoPrice * 0.01
        var pensia = (autoPrice + 400) * 0.03;
        var priceInUah = (autoPrice + 400) * currencyCourse;
        if ((priceInUah > 346830) && (priceInUah <= 609580)) {
            console.log('0.4');
            pensia = (autoPrice + 400) * 0.04;
        } else if ((priceInUah > 609580)) {
            console.log('0.5')
            pensia = (autoPrice + 400) * 0.05;
        }
        var age = 2020 - year -1
        if (age == 0) {
            age = 1;
        }
        var akcyz = 0;
        if ((engine == 'benzine') || (engine == 'hybrid')) {
            akcyz = (50 * (currencyEuro / currencyCourse)) * volume * (age / 1000);
            if (volume > 3000) {
                akcyz = (100 * (currencyEuro / currencyCourse)) * volume * (age / 1000);
            }
        } else if (engine == 'diesel') {
            akcyz = (75 * (currencyEuro / currencyCourse)) * volume * (age / 1000);
            if (volume > 3500) {
                akcyz = (150 * (currencyEuro / currencyCourse)) * volume * (age / 1000);
            }
        } else if (engine == 'electric') {
            akcyz = volume * (currencyEuro / currencyCourse)
        }
        var poshlina = 0;
        var NDS = 0;
        if (engine !== "electric") {
            poshlina = (autoPrice + 400) * 0.1;
            NDS = (autoPrice + 400 + poshlina + akcyz) * 0.2;
        }

        {
            console.log('Расчётные тарифы');
            console.log('Сбор аукциона: ', auction);
            console.log('Пошлина: ', poshlina);
            console.log('Акциз: ', akcyz);
            console.log('НДС: ', NDS);
            console.log('Пенсионный фонд: ', pensia);
            console.log('Страховка: ', strahovka);
        }

        var result = Math.round(price + auction + poshlina + akcyz + NDS + pensia + strahovka + fixedCost);
        var tamojnya = Math.round(poshlina + akcyz + NDS);
        console.log('Налоги: ', auction + poshlina + akcyz + NDS + pensia + strahovka);

        $('#firstPrice').html(price);
        $('#auctionComision').html(auction);
        $('#calcStrahov').html(Math.round(strahovka));
        $('#vamePrice').html(Math.round(tamojnya));
        $('#calcPoslina').html(Math.round(poshlina));
        $('#calcAkciz').html(Math.round(akcyz));
        $('#calcNDS').html(Math.round(NDS));
        $('#calcPensia').html(Math.round(pensia));

        $('#result').html(result);
    });
});
