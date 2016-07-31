# Weather or Not

*Weather or Not* is a simple application that provides users with the current weather (based on current location or user input) and venues that are popular in the given.

![landing_page](/screenshots/landing.png?raw=true)
![landing_page](/screenshots/foursquare.png?raw=true)

### Purpose
The purpose of this Rails application is to demonstrate an understanding of jQuery.
In retrospect, Rails was not the ideal framework for this single page application; however, Rails is used to store users' requests.

### Technologies
Weather or Not is a Rails application.
#### Gems
* forecast_io : weather data
* geocode : user location
* bootstrap : basic styling


#### APIs
* forecast_io : weather data - used in the location model
* geocode : user location - used in the location model
* foursquare : popular venues - used in the view (ideally, this API call would not be done in the view since it uses keys; however, it was kept in the view to demonstrate an understanding of jQuery)
* mapbox : map venues - used in the view
