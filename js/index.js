import {PerformanceTime} from '/app/app.js'

window.onload = function() {
   let performanceTime = new PerformanceTime()

   // Performance redirect
   var performanceURL = 'https://live.kineticlight.org/live'

   performanceTime.addEventListener('Speech', function() {
      window.location.href = performanceURL
   })
   performanceTime.addEventListener('1-0-a', function() {
      window.location.href = performanceURL
   })
   performanceTime.addEventListener('INT-30 sec', function() {
      window.location.href = performanceURL
   })
   performanceTime.addEventListener('2-0-c', function() {
      window.location.href = performanceURL
   })
}
