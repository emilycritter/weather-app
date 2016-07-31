$(document).ready(function() {
  // Geolocate
  $('#basic-addon1').click(function(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/locations',
      data: {location: {geolocate: true, location_input: 'geolocate'}},
      success: function(data){
        console.log(data);
        return false;
      },
      error: function(data){
        return false;
      }
    });
  });


  // Resize window pane when image changes or the browser window is resized
  var resizeWindow = function(){
    var height = $("img.display-image").height();
    var width = $("img.display-image").width();
    console.log(height);
    $(".window").css("height", height).css("width", width);
  }
  resizeWindow();
  $('img').load(resizeWindow);
  $(window).resize(resizeWindow);
  $(window).load(resizeWindow);

  // Hide venues on page load
  $('#names').closest('.row').hide();

  // Show map
  $('.show-contact').click(function(event){
    $(this).hide();
    var closest_map_container = $(this).next();
    var map_div = $(closest_map_container).children('.map');
    var lng_lat = $(map_div).html();
    if (lng_lat.length > 0) {
      var lat_lng = lng_lat.split(',').reverse().toString();
    }
    if (lng_lat.length > 0 && lat_lng) {
      var api_key = 'pk.eyJ1IjoiZW1pbHljcml0dGVyIiwiYSI6ImNpbWdmZXhmYzAyMDV1NGx2bHM0MTNzNGYifQ.7KYzLItfXBfg5Zs-757BGw';
      var mapbox_anchor = '<div class="map-box-links">©<a href="https://www.mapbox.com/map-feedback/"> Mapbox</a> ©<a href="http://www.openstreetmap.org/copyright"> OpenStreetMap contributors</a></div>';
      var map_img = '<div><a href="https://www.google.com/maps/dir/Current+Location/' + lat_lng + '" target="_blank"><img width="300" src="https://api.mapbox.com/v4/mapbox.high-contrast/pin-m-circle+285A98(' + lng_lat + ')/' + lng_lat + ',13/400x400.png?access_token=' + api_key + '">' + mapbox_anchor + '</a></div>';
      $(map_div).html(map_img);
      var width = $(map_div).children('img').width();
      $(map_div).children('img').css('height', width);
    }
    $(closest_map_container).show();
  });

  // Change window image
    var weather = $('.weather-currently').text().toLowerCase();
    if (weather.indexOf("clear") >= 0) {
      $('.display-image').attr('src', 'assets/clear.jpg');
    } else if (weather.indexOf("partly cloudy") >= 0) {
      $('.display-image').attr('src', 'assets/partly_cloudy.jpg');
    } else if (weather.indexOf("rain") >= 0) {
      $('.display-image').attr('src', 'assets/rainy.jpg');
    } else if (weather.indexOf("drizzle") >= 0) {
      $('.display-image').attr('src', 'assets/drizzle.jpg');
    } else if (weather.indexOf("snow") >= 0) {
      $('.display-image').attr('src', 'assets/snowy.jpg');
    } else if (weather.indexOf("sleet") >= 0) {
      $('.display-image').attr('src', 'assets/sleet.jpg');
    } else if (weather.indexOf("fog") >= 0) {
      $('.display-image').attr('src', 'assets/foggy.jpg');
    } else if (weather.indexOf("cloudy") >= 0 || weather.indexOf("overcast") >= 0) {
      $('.display-image').attr('src', 'assets/cloudy.jpg');
    } else if (weather.indexOf("windy") >= 0) {
      $('.display-image').attr('src', 'assets/windy.jpg');
    } else {
      $('.display-image').attr('src', 'assets/unknown.jpg');
    }

});
