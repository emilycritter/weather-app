$(document).ready(function() {
  // Hide venues on page load
  $('#names').closest('.row').hide();

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
});
