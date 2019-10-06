import { Injectable } from '@angular/core';
import { jarallax, jarallaxVideo } from 'jarallax';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  // @ts-ignore
  public $ = window.$;

  public slide: any;
  public slideTotal: any;
  public slideCurrent: any;

  constructor() {
    this.slide = this.$('.slider-single');
    this.slideTotal = this.slide.length - 1;
    this.slideCurrent = -1;
  }

  public index(): void {
    this.loaderInit();
    this.toggleDropdown();
    this.wowInit();
    this.owlCarousalInit(this.$);
    this.skrollr();
    this.jarallax();
    this.accordion(this.$);
    this.magnific(this.$);
    this.progressBar(this.$);
  }

  // Function for toggle page Loader...
  public loaderInit(): void {
    this.$('#load').fadeOut();
    this.$('#loading').delay(1000).fadeOut('slow');
  }

  // Function to toggle Navigation dropdown...
  public toggleDropdown(): void {
    this.$("#main-header .menu-item .toggledrop").off("click");
    if (this.$(window).width() < 992) {
      this.$('#main-header .menu-item .toggledrop').on('click', function(e) {
        e.preventDefault();
        // @ts-ignore
        window.$(this).closest('li').find('.sub-menu').toggle('d-block');
      });
    }

    this.$(window).on('resize', function() { "use strict";
        // @ts-ignore
       window.$('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
        // @ts-ignore
        window.$(this).closest('li').find('.sub-menu').toggle('d-block');
      });
      // @ts-ignore
      window.$("#main-header .menu-item .toggledrop").off("click");
      // @ts-ignore
      if (window.$(window).width() < 992) {
        // @ts-ignore
        window.$('#main-header .menu-item .toggledrop').on('click', function(e) {
          e.preventDefault();
          // @ts-ignore
          window.$(this).closest('li').find('.sub-menu').toggle('d-block');
        });
      }
    });
  }

  public checkElement(type, element): boolean {
    let found = false;
    let elements;
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element);

        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true;
        }
        break;

      case 'id':
        elements = document.getElementById(element);

        if (elements !== undefined && elements !== null) {
          found = true;
        }
        break;
    }


    return found;
  }

  public wowInit(): void {

    const elementExist = this.checkElement('class', 'wow');

    // @ts-ignore
    if (elementExist) {
      // @ts-ignore
      const WOW = window.WOW;
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init();
    }
  }


  public owlCarousalInit($): void {

    const elementExist = this.checkElement('class', 'owl-carousel');
    if (elementExist) {
      this.$('.owl-carousel').each(function() {
        const $carousel = $(this);
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        });
      });
    }
  }

  public skrollr(): void {
    // @ts-ignore
    const $skrollr = window.skrollr;
    $skrollr.init().destroy();
    $skrollr.init({
      forceHeight: false,
      easings: {
        easeOutBack(p, s) {
          s = 1.70158;
          p = p - 1;
          return (p * p * ((s + 1) * p + s) + 1);
        }
      },
      mobileCheck() {
        return false;
      }
    });
  }

  public jarallax(): void {
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    });
  }

  public accordion($) {
    $('.iq-accordion .iq-accordion .accordion-details').hide();
    $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow');
    $('.iq-accordion .iq-accordion').on('click', function() {
      if ($(this).children('div').is(':hidden')) {
        $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow');
        $(this).toggleClass('accordion-active').children('div').slideDown('slow');
      }
    });
  }

  public progressBar($): void {
    const elementExist = this.checkElement('class', 'iq-progress-bar');
    if (elementExist) {
      $('.iq-progress-bar > span').each(function() {
        const $this = $(this);
        const width = $this.data('percent');
        $this.css({
          transition: 'width 2s'
        });
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
          // tslint:disable-next-line:only-arrow-functions
          $this.appear(function() {
            $this.css('width', width + '%');
          });
        }, 500);
      });
    }
  }


  public magnific($): void {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    });
  }

  public revolutionSlider() {
    // @ts-ignore
    window.jQuery('#rev_slider_24_1').show().revolution({
      sliderType: 'standard',
      sliderLayout: 'fullwidth',
      dottedOverlay: 'none',
      delay: 9000,
      navigation: {
        onHoverStop: 'off',
      },
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: 1600,
      gridheight: 1080,
      lazyType: 'none',
      parallax: {
        type: 'mouse',
        origo: 'enterpoint',
        speed: 400,
        levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 49, 50, 51, 55],
      },
      shadow: 0,
      spinner: 'spinner0',
      stopLoop: 'off',
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: 'off',
      autoHeight: 'off',
      disableProgressBar: 'on',
      hideThumbsOnMobile: 'off',
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: 'off',
        nextSlideOnWindowFocus: 'off',
        disableFocusListener: false,
      }
    });
  }
}
