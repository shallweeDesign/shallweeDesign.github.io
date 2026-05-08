// var main = window.main || {};
// (function() {
//     for (var a, b = function() {}, c = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeline timelineEnd timeStamp trace warn".split(" "), d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
// })();
// main.IE = "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) ? parseFloat(RegExp.$1) : 99;
// main.isMobile = function() {
//     var a = navigator.userAgent || navigator.vendor || window.opera;
//     return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,
//         4))
// }();
// document.documentElement.className = main.isMobile ? document.documentElement.className + " mobile" : document.documentElement.className + " no-mobile";
// "addEventListener" in document && document.addEventListener("DOMContentLoaded", function() {
//     FastClick.attach(document.body)
// }, !1);
// $(function() {
//     $("body").attr("ontouchstart", "")
// });
// main.getVid = function(a) {
//     return (a = a.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|v=)([^#\&\?]*).*/)) && 11 == a[1].length ? a[1] : !1
// };
// main.getPageY = function() {
//     return window.pageYOffset || ("clientHeight" in document.documentElement ? document.documentElement : document.body).scrollTop
// };
// main.getWinH = function() {
//     return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || $(window).height()
// };
// main.getWinW = function() {
//     return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || $(window).width()
// };
// main.setWrapperWidth = function() {
//     function a() {
//         var a = $(window).width();
//         $("#mWrap").css({
//             width: a,
//             "margin-left": ($("#special-sectionOverview, #sectionOverview").width() - a) / 2
//         })
//     }
//     $(function() {
//         $(window).on("load resize orientationchange", a);
//         a();
//         setTimeout(a, 11);
//         setTimeout(a, 1111)
//     });
//     return a
// }();
// main.waitWrapperWidth = function(a) {
//     /margin/.test($("#mWrap").attr("style")) ? a() : setTimeout(function() {
//         main.waitWrapperWidth(a)
//     }, 100)
// };
// $(function() {
//     function a() {
//         $("#backtop").css("display", 200 < main.getPageY() ? "block" : "")
//     }
//     $('<div id="backtop" class="scrllto"></div>').appendTo("#mWrap");
//     $("#backtop").on("click", function() {
//         main.scrollTo("#")
//     });
//     $(window).on("resize.backtop scroll touchmove orientationchange", a);
//     setTimeout(a, 11);
//     setTimeout(a, 1111)
// });
// main.mobileMenu = function() {
//     var a = {},
//         b;
//     a.opened = !1;
//     a.toggle = function() {
//         a.opened ? a.close() : a.open()
//     };
//     a.open = function() {
//         a.opened = !0;
//         $("#mMobiNavToggle, #mMobiNav").addClass("open");
//         $("html").addClass("nav-open")
//     };
//     a.close = function() {
//         a.opened = !1;
//         $("#mMobiNavToggle, #mMobiNav").removeClass("open");
//         $("html").removeClass("nav-open")
//     };
//     a.update = function() {
//         var a = !!(640 >= $(window).width());
//         a && $("#mNav")[0] && $("#mNav").attr("id", "mMobiNav").removeAttr("style");
//         !a && $("#mMobiNav")[0] && $("#mMobiNav").attr("id", "mNav").removeAttr("style");
//         $("#mMobiNavToggle").css("display", a ? "block" : "none");
//         a = b.hasClass("fixed") ? b.height() : b.offset().top + b.height();
//         $("#mMobiNavToggle, #mMobiNav, #mMobiNavOverlay").css("top", a)
//     };
//     $(function() {
//         b = $($(".navbar-fixed-top, #overview-top-nav")[0] || $('<div id="overview-top-nav"></div>').prependTo("body"));
//         $("#mMobiNavToggle").on("click", a.toggle);
//         $("body").on("click", "#mMobiNav a", a.close);
//         $(window).on("load resize orientationchange scroll touchmove touchend", a.update);
//         setTimeout(a.update, 11);
//         setTimeout(a.update,
//             1111)
//     });
//     return a
// }();
// main.menuState = function() {
//     var a = {},
//         b, c, d;
//     a.update = function() {
//         $("#mWrap").height() != d && (d = $("#mWrap").height(), c = -0.5 * $(window).height(), b.find('[href^="#"]').each(function() {
//             var a, b;
//             a = $($(this).attr("href"));
//             b = $($(this).attr("data-viewto"));
//             if (!a[0]) return !0;
//             b[0] || (b = a);
//             this.view_s = a.offset().top;
//             this.view_e = b.offset().top + b.outerHeight()
//         }), a.inview())
//     };
//     a.inview = function() {
//         var a = main.getPageY(),
//             d = [],
//             f;
//         b.find('[href^="#"]').each(function() {
//             if (isNaN(this.view_s) || isNaN(this.view_e)) return !0;
//             a >= this.view_s +
//                 c && a < this.view_e ? (this.view_active = !0, d.push(this)) : (a < this.view_s + c || a >= this.view_e) && this.view_active && (this.view_active = !1)
//         });
//         f = d.length;
//         0 == f ? b.find(".on").removeClass("on") : (f = d[f - 1], $(f).parent().addClass("on").siblings(".on").removeClass("on"))
//     };
//     $(function() {
//         b = $("#mNav, #mMobiNav");
//         b[0] && ($(window).on("load resize orientationchange", a.update), $(window).on("scroll touchmove", a.inview), setTimeout(a.update, 11), setTimeout(a.update, 3333))
//     });
//     return a
// }();
// main.resizeWith = function(a) {
//     function b(a) {
//         $.each(c, function(a, b) {
//             b()
//         })
//     }
//     var c = [];
//     $(function() {
//         $(window).on("resize orientationchange", b);
//         b();
//         setTimeout(b, 11);
//         setTimeout(b, 1111)
//     });
//     return function(a) {
//         $.isFunction(a) && c.push(a)
//     }
// }();
// main.scrollWith = function(a) {
//     function b(a) {
//         $.each(c, function(a, b) {
//             b()
//         })
//     }
//     var c = [];
//     $(function() {
//         $(window).on("scroll resize orientationchange touchmove touchstart", b);
//         b();
//         setTimeout(b, 11);
//         setTimeout(b, 1111)
//     });
//     return function(a) {
//         $.isFunction(a) && c.push(a)
//     }
// }();
// main.scrollTo = function(a) {
//     function b(a) {
//         if ("#" == a) $.scrollTo(0, {
//             axis: "y",
//             duration: 366,
//             easing: "easeInOutCirc"
//         });
//         else if (a = $(a), a[0]) {
//             var b = Math.abs(a.offset().top - main.getPageY()),
//                 e = -($(".navbar-fixed-top, #overview-top-nav").height() || 0) + (window.scrlltoOffset || 0),
//                 b = Math.round(Math.max(300, 0.1 * b));
//             $.scrollTo(a, {
//                 offset: e,
//                 axis: "y",
//                 duration: b,
//                 easing: "easeInOutCirc"
//             })
//         }
//     }
//     $(function() {
//         $(document).on("click", ".scrllto, [data-scrollto]", function(a) {
//             b($(this).attr("href"));
//             a.preventDefault()
//         })
//     });
//     return b
// }();
// main.playable = function() {
//     function a() {
//         d.fadeOut(250, function() {
//             e.remove();
//             $("html").removeClass("playable-open")
//         });
//         $(document).off("keyup.playable")
//     }
//
//     function b(f) {
//         null == f || 11 > String(f).length || (g ? (f = '<iframe class="player" src="{protocol}//www.youtube.com/embed/{vid}?rel=0&wmode=opaque&autoplay=1&showinfo=0&modestbranding=1&rel=0" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>'.replace(/{protocol}/, /http/.test(location.protocol) ? "" : "http:").replace(/{vid}/, f), e = $(f).prependTo(d),
//             d.fadeIn(250), $("html").addClass("playable-open"), $(document).off("keyup.playable").one("keyup.playable", function(b) {
//                 27 == b.which && c() && a()
//             })) : (g = !0, d = $('<div id="videoplayer" style="display:none;"><div class="close" title="Close video" tabindex="3000"></div></div>').appendTo("body"), d.on("click", ".close", a), b(f)))
//     }
//
//     function c() {
//         return $("html").hasClass("playable-open")
//     }
//     var d, e, g = !1;
//     $(function() {
//         $("[data-playable]").on("click", function(a) {
//             if (!main.isMobile) {
//                 var c = main.getVid($(this).attr("href"));
//                 b(c);
//                 a.preventDefault()
//             }
//         })
//     });
//     return {
//         watch: b,
//         close: a,
//         isActive: c
//     }
// }();
$( window ).resize(function() {
  // $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  // location.reload();
  if($.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))==true){
    if ($('#rog-theat').width() != window.innerWidth) {
      var mar = ($('#rog-theat').width() - window.innerWidth) / 2;
      $('#rog-theat').css({
        'margin-left': mar + 'px',
        'width': window.innerWidth + "px"
      });

      setupAni();

    } else {

    }
  }
  else{
    location.reload();
  }


});
$(window).load(function() {
  // $(function() {
  if ($('#rog-theat').width() != window.innerWidth) {
    var mar = ($('#rog-theat').width() - window.innerWidth) / 2;
    $('#rog-theat').css({
      'margin-left': mar + 'px',
      'width': window.innerWidth + "px"
    });
  } else {

  }

  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //
  // $("#videoBtn").on('click', function() {
  //   vidBtnTF = true;
  // })
  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});
  // $("#videoBtn").fancybox({
  //   // 'padding': 0,
  //   // 'margin': 50,
  //   // 'width': $(window).innerWidth(),
  //   // 'height': $(window).innerWidth() * .56,
  //   // 'autoScale': true,
  //   // 'transitionIn': 'none',
  //   // 'transitionOut': 'none',
  //   // 'type': 'iframe',
  //   // 'autoplay': true,
  //   youtube: {
  //     controls: 0,
  //     showinfo: 0
  //   }
  // });
  $('.player__item__button').click(function(e) {
    // console.log(e.target.id);
    var str = "" + e.target.id;
    var songNum = parseInt(str.replace("button", ""));
    // console.log(songNum);
    //
    if ($(e.target).hasClass('active')) {
      $(e.target).removeClass('active');
      $('#song' + songNum)[0].pause();
    } else {
      for (var i = 0; i < 3; i++) {
        $('#song' + (i + 1))[0].pause();
      }

      $('.player__item__button').removeClass('active');
      $(e.target).addClass('active');
      $('#song' + songNum)[0].play();
    }
  })
  var song1_time = 0;
  var song1_totalTime = $('#song1')[0].duration;
  $('#song1')[0].addEventListener('timeupdate', function() {
    song1_time = $('#song1')[0].currentTime;
    // console.log(parseInt(song1_time/song1_totalTime*100));
    $('#item1 .song-slider').slider("value", (song1_time / song1_totalTime * 100));
    if ((song1_time / song1_totalTime * 100) >= 99) {
      $('.player__item__button').removeClass('active');
      $('#item1 .song-slider').slider("value", 0);
    }
  });
  var song2_time = 0;
  var song2_totalTime = $('#song2')[0].duration;
  // console.log($('#song2')[0]);
  $('#song2')[0].addEventListener('timeupdate', function() {
    song2_time = $('#song2')[0].currentTime;
    // console.log(parseInt(song1_time/song1_totalTime*100));
    $('#item2 .song-slider').slider("value", (song2_time / song2_totalTime * 100));
    if ((song2_time / song2_totalTime * 100) >= 99) {
      $('.player__item__button').removeClass('active');
      $('#item2 .song-slider').slider("value", 0);
    }
  });
  var song3_time = 0;
  var song3_totalTime = $('#song3')[0].duration;
  $('#song3')[0].addEventListener('timeupdate', function() {
    song3_time = $('#song3')[0].currentTime;
    // console.log(parseInt(song1_time/song1_totalTime*100));
    $('#item3 .song-slider').slider("value", (song3_time / song3_totalTime * 100));
    if ((song3_time / song3_totalTime * 100) >= 99) {
      $('.player__item__button').removeClass('active');
      $('#item3 .song-slider').slider("value", 0);
    }
  })
  $('.song-slider').slider({
    orientation: "horizontal",
    range: "min",
    step: 0.01,
    max: 100
  });
  var startPos = $(".song-slider").slider("value");
  var endPos = '';

  $(".song-slider").on("slidestop", function(event, ui) {
    var song = "#song" + (event.currentTarget.parentNode.parentNode.id).replace("item", "");
    endPos = ui.value;
    if (startPos != endPos) {
      $(song)[0].currentTime = endPos / 100 * $(song)[0].duration;
    }
    startPos = endPos;
  });
  var sw = window.innerWidth;
  var ww;
  if (sw < 768) {
    ww = 90;
  } else if (sw < 1300) {
    ww = 130;
  } else if (sw < 1920) {
    ww = 150;
  } else {
    ww = 150;
  }

  $('#colorpicker').farbtastic({
    color: "#e2001d",
    callback: updateColor,
    width: ww
  });

  function updateColor(col) {
    // console.log(col)
    $('#light__bg').css("background-color", col);
  }

  function a(a) {
    c = a;
    "cycle" == a ? TweenMax.to(g, 0.2, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }) : TweenMax.to(g, 0.5, {
      autoAlpha: 1,
      ease: Power1.easeOut
    });
    b.kill();
    TweenMax.killTweensOf(e);
    d = $.farbtastic(g).color || "#e2001d";
    TweenMax.delayedCall(0.06, function() {
      switch (a) {
        case "static":
          TweenMax.to(e, 0.2, {
            backgroundColor: d,
            alpha: 1,
          });
          break;
        case "breathing":
          TweenMax.fromTo(e, 1, {
            // backgroundColor: "#000000"
            backgroundColor: d,
            alpha: 0.3
          }, {
            alpha: 1,
            backgroundColor: d,
            yoyo: !0,
            repeat: -1,
            ease: Power1.easeInOut
          });
          break;
        case "cycle":
          TweenMax.to(e,
            1, {
              alpha: 1,
              backgroundColor: "#ff0000",
              ease: Linear.easeNone,
              onComplete: function() {
                b = (new TimelineMax({
                  repeat: -1
                })).to(e, 1, {
                  backgroundColor: "#ffff00",
                  ease: Linear.easeNone
                }).to(e, 1, {
                  backgroundColor: "#00ff00",
                  ease: Linear.easeNone
                }).to(e, 1, {
                  backgroundColor: "#00ffff",
                  ease: Linear.easeNone
                }).to(e, 1, {
                  backgroundColor: "#0000ff",
                  ease: Linear.easeNone
                }).to(e, 1, {
                  backgroundColor: "#ff00ff",
                  ease: Linear.easeNone
                }).to(e, 1, {
                  backgroundColor: "#ff00ff",
                  ease: Linear.easeNone
                }).to(e, 1, {
                  backgroundColor: "#ff0000",
                  ease: Linear.easeNone
                })
              }
            });
          break;
        case "music":
          TweenMax.to(e, 0.2, {}), b = (new TimelineMax({
            repeat: -1,
            repeatDelay: 0.1
          })).fromTo(e, 0.36, {
            // backgroundColor: "#000000"
            backgroundColor: d,
            alpha: 0.3
          }, {
            // backgroundColor: d,
            backgroundColor: d,
            alpha: 1,
            yoyo: !0,
            repeat: 1,
            ease: Power2.easeOut
          }).fromTo(e, 0.8, {
            // backgroundColor: "#000000"
            backgroundColor: d,
            alpha: 0.3
          }, {
            // backgroundColor: d,
            backgroundColor: d,
            alpha: 1,
            yoyo: !0,
            repeat: 1,
            ease: Power2.easeOut
          }).fromTo(e, 0.1, {
            // backgroundColor: "#000000"
            backgroundColor: d,
            alpha: .2,
          }, {
            alpha: 1,
            // backgroundColor: d,
            backgroundColor: d,
            yoyo: !0,
            repeat: 1,
            ease: Power2.easeOut
          }).fromTo(e, 0.36, {
            // backgroundColor: "#000000"
            backgroundColor: d,
            alpha: .3,
          }, {
            alpha: 1,
            // backgroundColor: d,
            backgroundColor: d,
            ease: Power3.easeOut
          }).to(e, 1, {
            // backgroundColor: "#000000",
            backgroundColor: d,
            alpha: .3,
            ease: Power1.easeOut
          }, "+=.5")
      }
    })
  }
  if ($("#colorpicker")[0]) {
    var b = new TimelineMax,
      c = "static",
      d = "#e2001d",
      e = "#light__bg",
      g = "#colorpicker";

    $.farbtastic(g, {
      callback: e,
      width: ww,
      color: d
    }).setColor(d).linkTo(function(b) {
      a(c)
    });
    $(".rog-theat__btn").on("click", function(b) {
      resetBtn();
      a($(this).attr("data-id"));
      $(this).addClass("on").siblings(".rog-theat__btn.on").removeClass("on");
      if ($(this).hasClass('on')) {
        //console.log($(this).children('img')[0].src);
        var sr = $(this).children('img').attr("src").replace(".png", "-active.png");
        $(this).children('img').attr('src', sr);
      } else {

      }
    })
  }

  function resetBtn() {
    $('a.rog-theat__btn').each(function() {
      // console.log($(this));
      var orgUrl = $(this).children('img').attr('src').replace("-active", "");
      // console.log(orgUrl);
      $(this).children('img').attr('src', orgUrl);
    })
  }
  // a();
  $('.rog-theat__btn[data-id=breathing]').trigger('click');
  //animation
  var controller = new ScrollMagic.Controller();
  setupAni();

})


  function setupAni() {
    $("*[data-ani]").css("opacity", '0');
    $('*[data-ani="0"]').css("opacity", '0.5');
    var controller = new ScrollMagic.Controller();
    $(".img__bg").each(function() {

      var $out_box = $(this).parent().parent();
      $out_box.css("min-height", $(this).innerHeight());
      // console.log($out_box);
      var $this_id = $(this).parent().parent().attr('id');
      var $text_box = $("#" + $this_id + " .text__box");
      // console.log($text_box);
      // console.log(window.innerWidth);
      if($(window).innerWidth() >= 1024){

        if ($(window).innerWidth() >= 1300) {
          // console.log('hello')
          if ($this_id == "rog-theat__soundmix" || $this_id == "rog-theat__expertly" || $this_id == "rog-theat__twotype" || $this_id == "rog-theat__metal-ear" || $this_id == "rog-theat__multi" || $this_id == "rog-theat__light") {

            $text_box.css('position','absolute');
            // console.log($text_box);
            var mrt = ($out_box.innerHeight() - $text_box.innerHeight()) / 2;
            // console.log(mrt,$text_box.outerHeight(),$out_box.innerHeight(),$this_id);
            $text_box.css('margin-top', mrt + 'px');
          }
        }else{
          if ($this_id == "rog-theat__multi") {
            $text_box.css('position','absolute');
            // console.log($text_box);
            var mrt = ($out_box.innerHeight() - $text_box.innerHeight()) / 2;
            // console.log(mrt,$text_box.outerHeight(),$out_box.innerHeight(),$this_id);
            $text_box.css('margin-top', mrt + 'px');
          }
        }

      }
          // console.log($(this).innerHeight());
      // console.log($(this).parent().parent().attr('id'));
      // var $this_id = $(this).parent().parent().attr('id');

      // console.log($("#"+$this_id+" .text__box").innerHeight());
      // .css("min-height",$(this).innerHeight);
      var par = $(this).attr('data-par');
      $(this).load(function() {
        console.log('load', par)
      })
    })
    $('section[id*=rog-theat__]').each(function() {
      // console.log($(this).children(".img__box").children(".rog-theat__img"));
      var $this = $(this);

      $(".img__bg").load(function(e) {

      });
      //
      // if($(this).children(".img__box").innerHeight > $(this).children(".text__box").innerHeight){
      //   $this.css("min-height",$(this).children(".img__box").innerHeight()+"px");
      // }else{
      //   $this.css("min-height",$(this).children(".text__box").innerHeight()+"px");
      //   // $(this).children(".img__box").css({"height":""+$(this).children(".text__box").innerHeight(),"width":"auto"});
      // }
      // $(".rog-theat__img",$(this)).load(function(e){
      //     // $this.css("min-Height",  .innerHeight()+"px");
      //     console.log(e.target);
      // })

    })
    $('*[data-trigger]').each(function(e) {
      // console.log($(this));
      // console.log($(this).attr("data-trigger"));
      // var $img = $('.rog-theat__'+$(this).attr("data-trigger")+" img");
      var sc = '.rog-theat__' + $(this).attr("data-trigger");
      var ani0 = $('.rog-theat__' + $(this).attr("data-trigger") + " [data-ani='0']");
      var ani1 = $('.rog-theat__' + $(this).attr("data-trigger") + " [data-ani='1']");
      var ani2 = $('.rog-theat__' + $(this).attr("data-trigger") + " [data-ani='2']");
      var ani3 = $('.rog-theat__' + $(this).attr("data-trigger") + " [data-ani='3']");
      var dur = $('.rog-theat__' + $(this).attr("data-trigger")).innerHeight() * 1.5 + window.innerHeight / 2;
      //console.log("dur",dur);
      new ScrollMagic.Scene({
          triggerElement: "#trigger__" + $(this).attr("data-trigger"),
          duration: dur,
          triggerHook: .8,
          offset: 0 // start this scene after scrolling for 50px
        })
        .on("enter leave", function(e) {
          // console.log(e.type == "enter" ? "inside" : "outside");
          if (e.type == "enter") {
            // console.log('im here')
            for (var i = 0; i < 4; i++) {
              var $an = $(sc + " [data-ani='" + i + "']");
              if ($an[0] != "undefined") {
                if ($an.hasClass('fade-in-' + i)) {} else {
                  if ($an.hasClass('fade-out')) {
                    $an.removeClass('fade-out');
                  }
                  $an.addClass('fade-in-' + i)
                }
              } else {

              }
            }

          } else {
            for (var i = 0; i < 4; i++) {
              var $anOut = $(sc + " [data-ani='" + i + "']");
              if ($anOut[0] != "undefined") {
                if ($anOut.hasClass('fade-in-' + i)) {
                  $anOut.removeClass('fade-in-' + i);
                  $anOut.addClass('fade-out');
                } else {

                }
              } else {

              }
            }
          }
        })
        .addTo(controller); // assign the scene to the controller
    })
  }
