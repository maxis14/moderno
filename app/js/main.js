$(function () {
  if ($('.product__inner').length) {
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
  };

  if ($('.product__star').length) {
    $(".product__star").rateYo({
      rating: 5,
      starWidth: '12px',
      readOnly: true
    });
  }

  if ($(".price__range").length) {
    $(".price__range").ionRangeSlider({
      min: 0,
      max: 1000,
      prefix: "$",
      type: 'double',
    })
  }
  if ($(".product-page__pagination").length) {
    $(".pagination-list").on("click", function (e) {
      $(".pagination-item").removeClass("active");
      $(e.target).addClass('active');
    })
  }
  if ($(".icon-th-large").length) {
    $(".icon-th-large").on("click", function () {
      $(".icon-th-large").addClass("active");
      $(".product__cart").removeClass("list");
      $(".icon-th-list").removeClass("active");
    })
    $(".icon-th-list").on("click", function(){
      $(".icon-th-large").removeClass("active");
      $(".icon-th-list").addClass("active");
      $(".product__cart").addClass("list");
    })

  }
});