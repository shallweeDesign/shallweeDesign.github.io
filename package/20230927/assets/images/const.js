var header_H=function(){return DOM(".header")[0].offsetHeight},navObj={_active:!1,_transform:!1};function moveTo(e,t){$(DOM("html,body")).stop().animate({scrollTop:$(e).offset().top-header_H()},500),t&&(navObj.active=!1)}function float_hideOn(e,t){if(!DOM(".float_frame")[0])return!1;function a(){var a=window.innerHeight,r=-window.pageYOffset;e.forEach((function(e){if(!DOM(e.selector)[0])return!1;var t=e.rate?e.rate():1;r+=DOM(e.selector)[0].offsetHeight*t})),DOM(".header_fill")[0]&&(r+=header_H());var n=DOM(".float_frame")[0].offsetHeight+t();a-r>n?$(DOM(".float_frame")).addClass("active"):$(DOM(".float_frame")).removeClass("active")}$(DOM(".float_frame")).addClass("hideOn"),$((function(){$(DOM(".hideOn")).addClass("ready")})),window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1),$((function(){a()}))}if(Object.defineProperty(navObj,"active",{get:function(){return this._active},set:function(e){var t=this;if(this._transform||this._active===e)return!1;this._transform=!0,this._active=e,e?($(DOM(".nav_frame, .nav_ctn, .nav_btn")).addClass("active"),$(DOM("html, body")).addClass("nav_active")):($(DOM(".nav_frame, .nav_ctn, .nav_btn")).removeClass("active"),$(DOM("html, body")).removeClass("nav_active")),setTimeout((function(){t._transform=!1}),500)}}),DOM(".header")[0].hasAttribute("scroll")){var header_scroll=function(){window.pageYOffset>0?$(DOM(".header")).addClass("_scroll"):$(DOM(".header")).removeClass("_scroll")};header_scroll(),window.addEventListener("scroll",header_scroll,!1)}function gotop(e){function t(){var t=window.pageYOffset,a=0;e&&e.forEach((function(e){if(!DOM(e.selector)[0])return!1;a+=DOM(e.selector)[0].offsetHeight})),t>(a||200)?$(DOM("#gotop")).addClass("active"):$(DOM("#gotop")).removeClass("active")}window.addEventListener("scroll",t,!1),window.addEventListener("resize",t,!1),$((function(){t()}))}Array.prototype.slice.call(DOM("ul.cus._num")).forEach((function(e){var t=e.className.indexOf("_gh")>-1;Array.prototype.slice.call(e.children).forEach((function(e,a){var r=a+1;t||(r+="."),e.setAttribute("str",r)}))})),Array.prototype.slice.call(DOM(".midline")).forEach((function(e){var t=createElement();t.appendChild(createElement({innerHTML:e.innerHTML})),e.removeChild(e.firstChild),e.appendChild(t)})),ENV_IE&&$(DOM(".pop_ctn")).addClass("_ie");