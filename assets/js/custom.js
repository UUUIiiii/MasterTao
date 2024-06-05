const hamburger = document.querySelector('.hamburger')
const headerNav = document.querySelector('.header-nav')


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active')
    headerNav.classList.toggle('show')
})


$('#first-screen-slider').slick({
    dots: true,
    appendArrows: $('.first-screen-arrows'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: false,
        }
    }, ]
});
    $(document).ready(function() {
      $('select').niceSelect();
    });

  const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name')

fileInput.addEventListener('change', () => {
   fileName.innerHTML = fileInput.files[0].name;
});

const controledField = document.querySelectorAll('[type="checkbox"]')
const fileField = document.querySelectorAll('[type="file"]')

controledField.forEach(input => {
    input.closest('.input-wrapper').classList.add('controled-wrapped')
    input.closest('.col').classList.add('controled-col')
})

fileField.forEach(input => {
  input.closest('.input-wrapper').classList.add('file-wrapper')
})

// Mobile Only Slider
mobileOnlySlider(".slider-advantages", 1024);

function mobileOnlySlider($slidername, $breakpoint) {
  const slider = $($slidername);
  const settings = {
    mobileFirst: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };
  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}

$('.slider-template').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    },
  ]
});



function addClassCharter(){
const section = document.querySelectorAll('section')
section.forEach(item => item.classList.add('charter'))
}
document.querySelector('.home-page') ? addClassCharter() : null;




const arrayBurgers = document.querySelectorAll('.hamburger')
const nav = document.querySelector('.header__nav');

if (arrayBurgers.length > 0) {
arrayBurgers.forEach(item => {
  item.addEventListener('click', function(){
    item.classList.toggle('is-active');
    nav.classList.toggle('show');
})
})
}
;


