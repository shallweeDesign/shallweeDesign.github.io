$(document).ready(function() {

  checkDomReady();
  $('.partner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
  })
  makeRequest();
});

function getQueryVariable(variable) {
	var u = window.location.href,e = u.indexOf('?') + 1,query = '';
	for(i=e;i<u.length;i++){
		if(/[#!@$%^*]/g.test(u.charAt(i))) break;
		else query += u.charAt(i);
	}
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
     	var pair = vars[i].split('=');
     	if (decodeURIComponent(pair[0]) == variable) {
	        return decodeURIComponent(pair[1]);
	    }
 	}
}
var isDom = false;
function checkDomReady(){
  if(productBannerReady && productReady && recommandReady && travelReady ){
    if(isDom == false){
      clearTimeout(timer);
      var cid = parseInt(getQueryVariable('cid') || getQueryVariable('CID') || 0);
      if(cid!==0){
        $('a').each(function(){
          var addr = $(this).attr('href');
          $(this).attr('href',addr+"?cid="+cid);
        })
        $('.nice-select .list li').on('click',function(){

          if($(this)[0].innerText !== "Change Destination"){
            var addr= $('option[value='+$(this)[0].innerText+']').data('url');

            window.open(addr+"?cid="+cid);
          }else{

          }
        })
      }
      else{
        $('.nice-select .list li').on('click',function(){

          if($(this)[0].innerText !== "Change Destination"){
            var addr= $('option[value='+$(this)[0].innerText+']').data('url');
            window.open(addr);
          }else{

          }
        })
      }
      isDom = true;
      return;
    }
    else{

    }
  }
  else{
    var timer=setTimeout(checkDomReady,50);
  }
}
function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    console.log(response);
    var city = response.city.name + ", " + response.city.country;
    var weatherTitle = response.list[0].weather[0].main;
    var tempC = response.list[0].main.temp;
    var tempF = response.list[0].main.feels_like;
    // console.log(response.list[0].weather[0].icon);
    var timeZone = response.city.timezone;
    var imgUrl = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png"
    // console.log(imgUrl);
    $('.destination__weather__icon').attr("src", imgUrl);
    $('.weather__info__c').html(tempC + "°C");
    $('.weather__info__f').html(tempF + "°C");
    // var weatherContainer = document.querySelector("#weather");
    // weatherContainer.innerHTML = city + "<br/>" + weatherTitle + "<br/>" + temp;
    let now = new Date(Date.now());
    var offsetTime = (now.getTime() + timeZone);
    // console.log(offsetTime);
  };
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/forecast?q=Osaka,jp&APPID=9c39fa3ce9d953fdd507d7d9f77093ef&lang=zh_tw&units=metric",
    true
  );
  xhr.send();
}
