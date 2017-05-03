function displaySky(i2c_index, i2c_address, pwm_ch, red_led, green_led, blue_led, white_led, led_brightness){
 
$.ajax({
      type: "POST",
      url: "python/rgb_control.py",
      data: { index: i2c_index, address: i2c_address, channel: pwm_ch, red: red_led, green: green_led, blue: blue_led, white: white_led, brightness: led_brightness }
}).done(function( o ) {
       });
 
}
