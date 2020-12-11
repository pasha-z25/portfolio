$(document).ready(function(){
    $('#masters-slider').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:true, //Отключение навигационных «стрелок»
        dots:false, //Отключение навигационных «точек»
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1500, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.menu').slideToggle();
    });
    $('.show-modal').click(function () {
        event.preventDefault();
        $('.modal-wrapper').addClass('active');
        if ($('.modal-wrapper').hasClass('active')){
            $('body').css('overflow', 'hidden');
        }
        else {
            $('body').css('overflow', 'auto');
        }
    });
    $('.modal-wrapper, .modal-wrapper .close').click(function (e) {
        if(e.target == this) {
            $('.modal-wrapper').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });
    $(".menu_link").click(function() {
        event.preventDefault();
        var id_section = jQuery(this).attr("href");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id_section).offset().top
        }, 1000);
    });
    $('.image-popup').magnificPopup({type:'image'});
    $('.popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });
    $('.popup-gallery-nails').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by «Easy to remember»</small>';
            }
        }
    });
    $('.popup-gallery-womens_haircuts').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by «Easy to remember»</small>';
            }
        }
    });
    $('.popup-gallery-mens_haircuts').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by «Easy to remember»</small>';
            }
        }
    });
    $('.popup-gallery-cosmetology').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by «Easy to remember»</small>';
            }
        }
    });
    $('.popup-gallery-makeup').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by «Easy to remember»</small>';
            }
        }
    });
    $('.popup-gallery-eyelash_extensions').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by «Easy to remember»</small>';
            }
        }
    });
});
$(window).on('load resize', function () {
    if ($(window).width() <= '992') {
        $(".menu_link").click(function() {
            event.preventDefault();
            $('.burger').removeClass('open');
            $('.menu').hide();
        });
    }
});