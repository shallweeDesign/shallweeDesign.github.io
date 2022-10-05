var countryReady = false;
$.getJSON("country.json", function() {}).done(function(data) {
    console.log(data)
    var appendcountryHtml = '<option value="" disabled selected hidden>Change Destination</option>'
    for (var i = 0; i < data.length; i++) {
      appendcountryHtml += '<option value="'+data[i].country+'" data-url="'+data[i].link+'">'+data[i].country+'</option>';
    }

    $('#location').html(appendcountryHtml);
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log("countryReady","complete");
    countryReady = true;
    setcountry()
  });

function setcountry() {
    $('select').niceSelect();
}

var productBannerReady = false;
$.getJSON("product_banner.json", function() {}).done(function(data) {
    // console.log(data)
    var appendproductBannerHtml = "";
    for (var i = 0; i < data.length; i++) {
      appendproductBannerHtml += ''+
      '<div class="product__tab__item product__tab__item--'+data[i].category+'" data-category="'+data[i].category+'">'+
        '<div class="tab__item__img" style="background-image:url('+data[i].image_url+')"></div>'+
        '<p class="tab__item__text">'+data[i].category_text+'</p>'+
      '</div>';
    }
    $('.product__tab').html(appendproductBannerHtml);
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log("complete");
    productBannerReady = true;
    setproductBannerSlider()
  });

function setproductBannerSlider() {

    $('.product__tab').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      dots: false,
      speed: 300,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    })


}
var productReady = false;
$.getJSON("products.json", function() {}).done(function(data) {
    // console.log(data)
    var appendHtml = "";
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].category);
      appendHtml += '<div class="product__content__item attr_' + data[i].category + '">' +
        '<a href="' + data[i].link + '" target="_blank">' +
        '<div class="content__item__img" style="background-image:url(' + data[i].image_url + ')"></div>' +
        '<h6 class="content__item__title">' + data[i].title + '</h6>' +
        '<p class="content__item__text">' + data[i].desc + '</p>' +
        '</a>' +
        '</div>';
    }
    $('.product__content').html(appendHtml);
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log("complete");
    productReady = true;
    setProductSlider()
  });

function setProductSlider() {
  $('.product__content').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    variableWidth: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          variableWidth: false,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  })
  var cate = "";
  $('.product__tab__item').on('click', function(e) {
    $('.product__tab__item').removeClass('active');
    if ($(this).hasClass('active')) {

    } else {
      $(this).addClass('active');
    }
    cate = $(this).data('category');

    // console.log(cate);
    $('.product__content').slick('slickUnfilter');
    switch (cate) {
      case "attractions":
        $('.product__content').slick('slickFilter', '.attr_attractions');
        break;
      case "essentials":
        $('.product__content').slick('slickFilter', '.attr_essentials');
        break;
      case "dining":
        $('.product__content').slick('slickFilter', '.attr_dining');
        break;
      case "experience":
        $('.product__content').slick('slickFilter', '.attr_experience');
        break;
    }
  })
  console.log('hello');
  $('.product__tab__item--attractions').trigger('click');
}
var recommandReady = false;
$.getJSON("recomand_city.json", function() {}).done(function(data) {
    // console.log(data)
    var appendRecommandHtml = "";
    for (var i = 0; i < data.length; i++) {
      appendRecommandHtml += '<a href="'+data[i].link+'" target="_blank">'+
      '<div class="recommend__slider__item">'+
      '<h4 class="recommend__title">'+data[i].title+'</h4>'+
      '<div class="recommend__img" style=background-image:url("'+data[i].image_url+'")></div>'+
      '</div></a>';
    }
    $('.recommend__slider').html(appendRecommandHtml);
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log("complete");
    recommandReady = true;
    setRecommandSlider()
  });

function setRecommandSlider() {
  $('.recommend__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
    variableWidth: true,
    centerMode: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          variableWidth: true,
          arrows: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          arrows: false
        }
      }
    ]
  })
  $('.recommend__slider').slick('slickGoTo',1);
}

var travelReady = false;
$.getJSON("travel.json", function() {}).done(function(data) {
    // console.log(data)
    var appendTravelHtml = "";
    for (var i = 0; i < data.length; i++) {
      appendTravelHtml += ''+
      '<div class="article__slider__item">'+
        '<a href="'+data[i].link+'" target="_blank">'+
          '<div class="article__img" style="background-image: url('+data[i].image_url+')"></div>'+
          '<div class="article__txt">'+
            '<h6 class="article__feature color-red">'+data[i].category_text+'</h6>'+
            '<h5 class="article__title">'+data[i].title+'</h5>'+
            '<p class="article__text">'+data[i].desc+'</p>'+
          '</div></a></div>';
    }
    $('.article__slider').html(appendTravelHtml);
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log("complete");
    travelReady = true;
    setTravelSlider()
  });

function setTravelSlider() {
  $('.article__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    variableWidth: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          variableWidth: false,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  })
}
