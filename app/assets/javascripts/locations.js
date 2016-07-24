$(document).ready(function() {
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
});
