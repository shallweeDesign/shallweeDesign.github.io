$(function() {
  var picSize = "";
  if (window.innerWidth < 720) {
    picSize = "";
  } else if (window.innerWidth < 1169) {
    picSize = "2x";
  } else if (window.innerWidth < 2000) {
    picSize = "3x";
  } else {
    picSize = "4x";
  }
  $('#rogpink-photographic .imgbox').paroller();
  //
  var headset_img = $('#rogpink-headset .imgbox');
  var headset_text_title = $('#rogpink-headset .title');
  var headset_text_description = $('#rogpink-headset .description');
  var headset_text_btn = $('#rogpink-headset .btn');
  TweenMax.set(headset_img, {
    x: "-200",
    alpha: 0
  });
  TweenMax.set(headset_text_title, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(headset_text_description, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(headset_text_btn, {
    y: "200",
    alpha: 0
  });
  //
  var keyboard_img = $('#rogpink-keyboard .imgbox');
  var keyboard_text_title = $('#rogpink-keyboard .title');
  var keyboard_text_description = $('#rogpink-keyboard .description');
  var keyboard_text_btn = $('#rogpink-keyboard .btn');
  TweenMax.set(keyboard_img, {
    x: "200",
    alpha: 0
  });
  TweenMax.set(keyboard_text_title, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(keyboard_text_description, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(keyboard_text_btn, {
    y: "200",
    alpha: 0
  });
  //
  var mouse_img = $('#rogpink-mouse .imgbox');
  var mouse_text_title = $('#rogpink-mouse .title');
  var mouse_text_description = $('#rogpink-mouse .description');
  var mouse_text_btn = $('#rogpink-mouse .btn');
  TweenMax.set(mouse_img, {
    x: "-200",
    alpha: 0
  });
  TweenMax.set(mouse_text_title, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(mouse_text_description, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(mouse_text_btn, {
    y: "200",
    alpha: 0
  });
  //
  var mousepad_img = $('#rogpink-mousepad .imgbox');
  var mousepad_text_title = $('#rogpink-mousepad .title');
  var mousepad_text_description = $('#rogpink-mousepad .description');
  var mousepad_text_btn = $('#rogpink-mousepad .btn');
  TweenMax.set(mousepad_img, {
    x: "200",
    alpha: 0
  });
  TweenMax.set(mousepad_text_title, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(mousepad_text_description, {
    y: "200",
    alpha: 0
  });
  TweenMax.set(mousepad_text_btn, {
    y: "200",
    alpha: 0
  });

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
      triggerElement: "#rogpink-headset",
      duration: ($('#rogpink-cover').height() * 1.5)
    })
    .on("enter", function() {
      var tween_img_headset_fadein = TweenMax.to(headset_img, 0.5, {
        x: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_headset_fadein2 = TweenMax.to(headset_text_title, 1, {
        delay: 0.2,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_headset_fadein3 = TweenMax.to(headset_text_description, 1, {
        delay: 0.5,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_headset_fadein4 = TweenMax.to(headset_text_btn, 1, {
        delay: 0.8,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
    })
    .on("leave", function() {
      var tween_img_headset_fadeOut = TweenMax.to(headset_img, 0.5, {
        x: "-200",
        ease: Power3.easeOut,
        alpha: 0
      });
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#rogpink-keyboard",
      duration: ($('#rogpink-cover').height() * 1.5)
    })
    .on("enter", function() {
      var tween_img_keyboard_fadein = TweenMax.to(keyboard_img, 0.5, {
        x: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_keyboard_fadein2 = TweenMax.to(keyboard_text_title, 1, {
        delay: 0.2,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_keyboard_fadein3 = TweenMax.to(keyboard_text_description, 1, {
        delay: 0.5,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_keyboard_fadein4 = TweenMax.to(keyboard_text_btn, 1, {
        delay: 0.8,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });


    })
    .on("leave", function() {
      var tween_img_keyboard_fadeOut = TweenMax.to(keyboard_img, 0.5, {
        x: "-200",
        ease: Power3.easeOut,
        alpha: 0
      });
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
      triggerElement: "#rogpink-mouse",
      duration: ($('#rogpink-cover').height() * 1.5)
    })
    .on("enter", function() {
      var tween_img_mouse_fadein = TweenMax.to(mouse_img, 0.5, {
        x: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_mouse_fadein2 = TweenMax.to(mouse_text_title, 1, {
        delay: 0.2,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_mouse_fadein3 = TweenMax.to(mouse_text_description, 1, {
        delay: 0.5,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_mouse_fadein4 = TweenMax.to(mouse_text_btn, 1, {
        delay: 0.8,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
    })
    .on("leave", function() {
      var tween_img_mouse_fadeOut = TweenMax.to(mouse_img, 0.5, {
        x: "-200",
        ease: Power3.easeOut,
        alpha: 0
      });
    })
    .addTo(controller);
  //
  var scene = new ScrollMagic.Scene({
      triggerElement: "#rogpink-mousepad",
      duration: ($('#rogpink-cover').height() * 1.5)
    })
    .on("enter", function() {
      var tween_img_mousepad_fadein = TweenMax.to(mousepad_img, 0.5, {
        x: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_mousepad_fadein2 = TweenMax.to(mousepad_text_title, 1, {
        delay: 0.2,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_mousepad_fadein3 = TweenMax.to(mousepad_text_description, 1, {
        delay: 0.5,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
      var tween_img_mousepad_fadein4 = TweenMax.to(mousepad_text_btn, 1, {
        delay: 0.8,
        y: "0",
        ease: Power2.easeOut,
        alpha: 1
      });
    })
    .on("leave", function() {
      var tween_img_mousepad_fadeOut = TweenMax.to(mousepad_img, 0.5, {
        x: "-200",
        ease: Power3.easeOut,
        alpha: 0
      });
    })
    .addTo(controller);
  //
  // headset animate
  var tween_img_headset = TweenMax.to($('#rogpink-headset .imgbox .headset'), 2, {
    y: "-15",
    yoyo: true,
    repeat: -1
  });
  TweenMax.set($('#rogpink-headset .imgbox .headset_shadow'),{scale:1,alpha:1});
  var tween_img_headset_shadow = TweenMax.to($('#rogpink-headset .imgbox .headset_shadow'), 2, {
    scale: 1.2,
    alpha: 0.8,
    yoyo: true,
    repeat: -1
  });
  // keyboard animate
  var tween_img_keyboard = TweenMax.to($('#rogpink-keyboard .imgbox .keyboard'), 2, {
    y: "-15",
    yoyo: true,
    repeat: -1
  })
  var tween_img_keyboard_shadow = TweenMax.to($('#rogpink-keyboard .imgbox .keyboard_shadow'), 2, {
    scale: 1.2,
    alpha: 0.8,
    yoyo: true,
    repeat: -1
  })
  //mousepad animate
  var tween_img_mousepad = TweenMax.to($('#rogpink-mousepad .imgbox .mousepad'), 2, {
    y: "-15",
    yoyo: true,
    repeat: -1
  })
  var tween_img_mousepad_shadow = TweenMax.to($('#rogpink-mousepad .imgbox .mousepad_shadow'), 2, {
    alpha:0.8,
    scale:1.2,
    yoyo: true,
    repeat: -1
  })

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    dots: true
  });
  // Listen to owl events:
  owl.on('changed.owl.carousel', function(event) {})
  //
  $('.ig_btn').hover(function(e) {
    TweenMax.set($(this).find(".ig_cover"), {
      alpha: 0,
      scaleY: 0
    })
    TweenMax.set($(this).find(".ig_cover .icon"), {
      alpha: 0
    })
    TweenMax.set($(this).find(".ig_cover .text"), {
      alpha: 0
    })
    TweenMax.set($(this).find(".ig_cover .hashtag"), {
      alpha: 0
    })
    var tween = TweenMax.to($(this).find(".ig_cover"), 0.5, {
      alpha: 1,
      scaleY: 1,
      ease: Power2.easeOut,
      onComplete: function() {
        tween.kill();
      }
    })
    var tweenI = TweenMax.to($(this).find(".ig_cover .icon"), 0.5, {
      delay: 0.2,
      alpha: 1,
      ease: Power2.easeOut,
      onComplete: function() {
        tweenI.kill();
      }
    })

    var tweenT = TweenMax.to($(this).find(".ig_cover .text"), 0.5, {
      delay: 0.3,
      alpha: 1,
      ease: Power2.easeOut,
      onComplete: function() {
        tweenT.kill();
      }
    })

    var tweenH = TweenMax.to($(this).find(".ig_cover .hashtag"), 0.5, {
      delay: 0.4,
      alpha: 1,
      ease: Power2.easeOut,
      onComplete: function() {
        tweenH.kill();
      }
    })
  }, function(e) {
    var etween = TweenMax.to($(this).find(".ig_cover"), 0.8, {
      alpha: 0,
      scaleY: 0,
      onComplete: function() {
        etween.kill();
      }
    })
  });
  var tween_neon = TweenMax.to($('.neon-on'), .01, {
    delay: 1,
    alpha: 0.8,
    repeat: -1,
    yoyo: true
  });
})
