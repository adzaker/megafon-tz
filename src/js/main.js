import Swiper from 'swiper';

const tabSliderInit = () => {
  const slider = document.querySelectorAll('.main__tabSlider');
  slider.forEach((s) => {
    s.querySelectorAll('.tabSlide').forEach((slide) => {
      slide.querySelector('.tabSlide__information').addEventListener('click', () => {
        if (!slide.classList.contains('-active')) {
          slide.parentElement.querySelector('.tabSlide.-active').classList.remove('-active');
          slide.classList.add('-active');
        }
      });
    });
  });
};

tabSliderInit();

const faqTabsInit = () => {
  const tabs = document.querySelectorAll('.faqContainer__questionBlock');
  tabs.forEach((tab) => {
    const q = tab.querySelector('.questionBlock__question');
    q.addEventListener('click', () => {
      if (q.classList.contains('-active')) {
        q.classList.remove('-active');
        q.parentElement.querySelector('.questionBlock__answer').classList.remove('-active');
      } else {
        q.classList.add('-active');
        q.parentElement.querySelector('.questionBlock__answer').classList.add('-active');
      }
    });
  })
};

faqTabsInit();

const ratesTabsInit = () => {
  const container = document.querySelector('.ratesContainer__switcherBlock');
  const buttonList = document.querySelector('.switcherButtons__list');
  const buttons = container.querySelectorAll('.switcherButtons__button');
  const tabs = container.querySelector('.switcherBlock__switcherTabs');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!button.classList.contains('-active')) {
        buttonList.querySelector('.-active').classList.remove('-active');
        tabs.querySelector('.-active').classList.remove('-active');
        tabs.querySelector(`.${button.className.slice(24)}`).classList.add('-active');
        button.classList.add('-active');
      }
    })
  })
};

ratesTabsInit();

const footerTabsInit = () => {
  const menus = document.querySelectorAll('.footerBlock__footerMenu');
  menus.forEach((menu) => {
    menu.addEventListener('click', () => {
      if (menu.classList.contains('-active')) {
        menu.classList.remove('-active');
      } else {
        menu.classList.add('-active');
      }
    })
  })
};

footerTabsInit();

const mobileSwiperInit = () => {
  if (window.outerWidth < 720) {
    const mobileSwiper = new Swiper('.tabSliderContainer', {
      loop: true,
      pagination: {
        el: '.tabSliderContainer .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.tabSliderContainer .swiper-button-next',
        prevEl: '.tabSliderContainer .swiper-button-prev',
      },
    });
  }
};

mobileSwiperInit();

window.onresize = () => {
  mobileSwiperInit();
};
