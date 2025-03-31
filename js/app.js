  /* Menu*/

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  /* Filter */

    let filter = $("[data-filter]");

      filter.on("click", function(event) {
          event.preventDefault();

          let cat = $(this).data('filter');

          if(cat == 'all') {
              $("[data-cat]").removeClass("hide");
          } else {
              $("[data-cat]").each(function() {
                  let workCat = $(this).data('cat');

                  if(workCat != cat) {
                      $(this).addClass('hide');
                  } else {
                      $(this).removeClass('hide');
                  }
              });
          }
      });

  /* Swiper */

  window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      }

      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener('change', checker);
      checker();
    }

    const someFunc = (instance) => {
      if (instance) {
        instance.on('slideChange', function (e) {
          console.log('*** mySwiper.activeIndex', instance.activeIndex);
        });
      }
    };

    resizableSwiper(
      '(max-width: 578px)',
      '.slider-1',
      {
        loop: true,
        spaceBetween: 32,
        slidesPerView: 1,
      },
      someFunc
    );
  });


  const slider = document.querySelector('.projects__slider');

  let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    slideClass: 'projects__slide',
    wrapperClass: 'projects__slides-wrap',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1025: {
        slidesPerView: 2,
      },
      840: {
        slidesPerView: 2,
      }
    }
  })

  /* Video */

  let videoBtn = document.querySelector(".js-video-btn");
      let video = document.querySelector(".js-video");

      videoBtn.onclick = function () {
        
        video.play();
        this.classList.add("hide");
      }

      video.onclick = function() {
        if (this.paused) {
          this.play();
        } else {
          this.pause();
          videoBtn.classList.remove("hide");
        }
      }

      video.addEventListener('ended', videoHandler, false);

      function videoHandler() {
        videoBtn.classList.remove("hide");
      }


    /* Tabs */

      function openTab(evt, myTab) {
      let i, tabcontent, tablink;

      tabcontent = document.getElementsByClassName("contact__top");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablink = document.getElementsByClassName("contactlink");
      for(i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace("active", '');
      }

      document.getElementById(myTab).style.display = "block";
      evt.currentTarget.className += "active";
      }

      document.getElementById("defaultOpen").click();