/*
_      _                                                  
| |    | |                                                 
| |__  | |  ___  __  __  ___   ___       ___   _ __   __ _ 
| '_ \ | | / _ \ \ \/ / / __| / _ \     / _ \ | '__| / _` |
| |_) || || (_) | >  < | (__ | (_) | _ | (_) || |   | (_| |
|_.__/ |_| \___/ /_/\_\ \___| \___/ (_) \___/ |_|    \__, |
                                                      __/ |
                                                     |___/ 
                    bloxco.org              
                    countdown.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: countdown.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 25-10-2023 @ 17:08CEST */
/* Use: Count down to specific dates */

var haCountDownDate = new Date("Nov 1, 2023 19:00").getTime();
var hrotmCountDownDate = new Date("Oct 29, 2023 12:00").getTime();

var x = setInterval(function() {
  /*halloween*/
  var now = new Date().getTime();
  var distance = haCountDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("halloweencountdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("halloweencountdown").innerHTML = "no time";
  }

  /*hrotm*/
  var now = new Date().getTime();
  var distance = hrotmCountDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hrotmcountdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hrotmcountdown").innerHTML = "no time";
  }

}, 1000);
