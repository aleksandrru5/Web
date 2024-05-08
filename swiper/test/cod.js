var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

swiper.on('slideChange', function () {
  console.log('Текущий слайд: ' + (swiper.activeIndex + 1));
});

var index12 = 0;
var index20 = 0;
var index22 = 0;

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp') {
    if (swiper.activeIndex + 1 == 1) {
      document.querySelector('.strelochka_cent1').classList.add('fly-out');
      document.querySelector('.palochka_vis1').classList.add('slide-out');
      document.querySelector('.zag_text1').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 2) {
      document.querySelector('.strelochka_cent2').classList.add('fly-out');
      document.querySelector('.palochka_vis2').classList.add('slide-out');
      document.querySelector('.ob_text2').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 3) {
      document.querySelector('.strelochka_cent3').classList.add('fly-out');
      document.querySelector('.palochka_vis3').classList.add('slide-out');
      document.querySelector('.zag_text3').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 4) {
      document.querySelector('.strelochka_cent4').classList.add('fly-out');
      document.querySelector('.palochka_vis4').classList.add('slide-out');
      document.querySelector('.ob_text4').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 5) {
      document.querySelector('.strelochka_cent5').classList.add('fly-out');
      document.querySelector('.palochka_vis5').classList.add('slide-out');
      document.querySelector('.ob_text5').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 6) {
      document.querySelector('.strelochka_cent6').classList.add('fly-out');
      document.querySelector('.palochka_vis6').classList.add('slide-out');
      document.querySelector('.ob_text6').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 7) {
      document.querySelector('.strelochka_cent7').classList.add('fly-out');
      document.querySelector('.palochka_vis7').classList.add('slide-out');
      document.querySelector('.ob_text7').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 8) {
      document.querySelector('.strelochka_cent8').classList.add('fly-out');
      document.querySelector('.palochka_vis8').classList.add('slide-out');
      document.querySelector('.zag_text8').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 9) {
      document.querySelector('.strelochka_cent9').classList.add('fly-out');
      document.querySelector('.palochka_vis9').classList.add('slide-out');
      document.querySelector('.ob_text9').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 10) {
      document.querySelector('.strelochka_cent10').classList.add('fly-out');
      document.querySelector('.palochka_vis10').classList.add('slide-out');
      document.querySelector('.ob_text10').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 11) {
      document.querySelector('.strelochka_cent11').classList.add('fly-out');
      document.querySelector('.palochka_vis11').classList.add('slide-out');
      document.querySelector('.zag_text11').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 12) {
      index12 = index12 + 1;

      if (index12 == 1) {
        document.querySelector('.strelochka_verh12').classList.add('fly-out');
        document.querySelector('.palochka_mal_12_1').classList.add('mal_slide-out');
        document.querySelector('.mal_text_12_1').classList.add('mal_slide-out');
      }

      if (index12 == 2) {
        document.querySelector('.strelochka_cent12').classList.add('cent_fly-out');
        document.querySelector('.palochka_mal_12_2').classList.add('mal_slide-out');
        document.querySelector('.mal_text_12_2').classList.add('mal_slide-out');
      }

      if (index12 == 3) {
        document.querySelector('.strelochka_niz12').classList.add('fly-out');
        document.querySelector('.palochka_mal_12_3').classList.add('mal_slide-out');
        document.querySelector('.mal_text_12_3').classList.add('mal_slide-out');
      }
    }

    if (swiper.activeIndex + 1 == 13) {
      document.querySelector('.strelochka_cent13').classList.add('fly-out');
      document.querySelector('.palochka_vis13').classList.add('slide-out');
      document.querySelector('.zag_text13').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 14) {
      document.querySelector('.strelochka_cent14').classList.add('fly-out');
      document.querySelector('.palochka_vis14').classList.add('slide-out');
      document.querySelector('.zag_text14').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 15) {
      document.querySelector('.strelochka_cent15').classList.add('fly-out');
      document.querySelector('.palochka_vis15').classList.add('slide-out');
      document.querySelector('.ob_text15').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 16) {
      document.querySelector('.strelochka_cent16').classList.add('fly-out');
      document.querySelector('.palochka_vis16').classList.add('slide-out');
      document.querySelector('.ob_text16').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 17) {
      document.querySelector('.strelochka_cent17').classList.add('fly-out');
      document.querySelector('.palochka_vis17').classList.add('slide-out');
      document.querySelector('.ob_text17').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 18) {
      document.querySelector('.strelochka_cent18').classList.add('fly-out');
      document.querySelector('.palochka_vis18').classList.add('slide-out');
      document.querySelector('.ob_text18').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 19) {
      document.querySelector('.strelochka_cent19').classList.add('fly-out');
      document.querySelector('.palochka_vis19').classList.add('slide-out');
      document.querySelector('.zag_text19').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 20) {
      index20 = index20 + 1;

      if (index20 == 1) {
        document.querySelector('.strelochka_verh20').classList.add('fly-out');
        document.querySelector('.palochka_mal_20_1').classList.add('mal_slide-out');
        document.querySelector('.mal_text_20_1').classList.add('mal_slide-out');
      }

      if (index20 == 2) {
        document.querySelector('.strelochka_cent20').classList.add('cent_fly-out');
        document.querySelector('.palochka_mal_20_2').classList.add('mal_slide-out');
        document.querySelector('.mal_text_20_2').classList.add('mal_slide-out');
      }

      if (index20 == 3) {
        document.querySelector('.strelochka_niz20').classList.add('fly-out');
        document.querySelector('.palochka_mal_20_3').classList.add('mal_slide-out');
        document.querySelector('.mal_text_20_3').classList.add('mal_slide-out');
      }
    }

    if (swiper.activeIndex + 1 == 21) {
      document.querySelector('.strelochka_cent21').classList.add('fly-out');
      document.querySelector('.palochka_vis21').classList.add('slide-out');
      document.querySelector('.zag_text21').classList.add('slide-out');
    }

    if (swiper.activeIndex + 1 == 22) {
      index22 = index22 + 1;

      if (index22 == 1) {
        document.querySelector('.strelochka_verh22').classList.add('fly-out');
        document.querySelector('.palochka_mal_22_1').classList.add('mal_slide-out');
        document.querySelector('.mal_text_22_1').classList.add('mal_slide-out');
      }

      if (index22 == 2) {
        document.querySelector('.strelochka_cent22').classList.add('cent_fly-out');
        document.querySelector('.palochka_mal_22_2').classList.add('mal_slide-out');
        document.querySelector('.mal_text_22_2').classList.add('mal_slide-out');
      }

      if (index22 == 3) {
        document.querySelector('.strelochka_niz22').classList.add('fly-out');
        document.querySelector('.palochka_mal_22_3').classList.add('mal_slide-out');
        document.querySelector('.mal_text_22_3').classList.add('mal_slide-out');
      }
    }
  }
});
