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
    var lat_lng = $(map_div).html();
    if (lat_lng.length > 0) {
      var api_key = 'pk.eyJ1IjoiZW1pbHljcml0dGVyIiwiYSI6ImNpbWdmZXhmYzAyMDV1NGx2bHM0MTNzNGYifQ.7KYzLItfXBfg5Zs-757BGw';
      var mapbox_anchor = '<div class="map-box-links">©<a href="https://www.mapbox.com/map-feedback/"> Mapbox</a> ©<a href="http://www.openstreetmap.org/copyright"> OpenStreetMap contributors</a></div>';
      var map_img = '<div><img width="300" src="https://api.mapbox.com/v4/mapbox.high-contrast/pin-m-circle+285A98(' + lat_lng + ')/' + lat_lng + ',13/400x400.png?access_token=' + api_key + '">' + mapbox_anchor + '</div>';
      $(map_div).html(map_img);
      var width = $(map_div).children('img').width();
      $(map_div).children('img').css('height', width);
    }
    $(closest_map_container).show();
  });
});
