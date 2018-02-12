$(document).ready(function() {

// // show section
// function showSection(section, isAnimate) {
//     var
//          direction = section.replace(/#/, ''),
//          reqSection = $('section').filter('[data-section="' + direction + '"]'),
//          reqSectionPos = reqSection.offset().top;

//      if (isAnimate) {
//          $('body, html').animate({ scrollTop: reqSectionPos }, 500);
//      } else {
//          $('body, html').scrollTop(reqSectionPos);
//      }
// }

// // section showed
// function checkSection() {
//     $('section').each(function() {
//         var
//             $this = $(this),
//             topEdge = $this.offset().top - 400, // top edge
//             bottomEdge = topEdge + $this.height(), // bottom edge
//             wScroll = $(window).scrollTop();

//         if (topEdge < wScroll && bottomEdge > wScroll) {
//             var
//                 currentId = $this.data('section');
//             //console.log(currentId);
//             reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');

//             reqLink.closest('.nav__item').addClass('active').siblings().removeClass('active');

//             window.location.hash = currentId;
//         }

//     });
// }
// scroll on arrow
$('.arrowBtnDown').on('click', function(event) {
        event.preventDefault();
        var nextSection = $('.hotOfferWrap').offset().top;
        $('body, html').animate({ scrollTop: nextSection }, 500);
});
 //    // scroll on arrow end
 //    // pages with hash script
 //    $('.button').on('click', function(event) {
 //        event.preventDefault();
 //        var section = $(this).attr('href');
 //        showSection(section, true);
 //    });
 //    showSection(window.location.hash, false);

 // // $(window).scroll(function() {
 // //    checkSection();
 // // });

// pages with hash script end
// slick slider - about section
    $('.mainSlider').slick({
        infinite: true,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    autoplay: false
                }
            }
        ]
    });
// slick slider - about section end
// slick slider - about section
    $('.aboutSlider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
// slick slider - about section end
// slick slider - manufacturers section
    $('.manufacturersSlider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            }
        ]
    });
// slick slider - manufacturers section end
});