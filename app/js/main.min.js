$(function () {

  var mixer = mixitup('.product__inner');

  $(".product__star").rateYo({
    rating: 5,
    starWidth: '12px',
    readOnly: true
  });
  $('.slider__trending__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1810,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});