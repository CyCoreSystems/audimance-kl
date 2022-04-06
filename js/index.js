import {LoadAgenda,PerformanceTime,SpatialRoom,TrackRoom} from '/app/app.js'

window.onload = function() {
   let performanceTime = new PerformanceTime()

   // Performance redirect
   var performanceURL = 'https://live.kineticlight.org/live'

   performanceTime.addEventListener('30-sec', function() {
      window.location.href = performanceURL
   })
   performanceTime.addEventListener('Top of Act 1', function() {
      window.location.href = performanceURL
   })
   performanceTime.addEventListener('INT-30 sec', function() {
      window.location.href = performanceURL
   })
   performanceTime.addEventListener('Top of Act 2', function() {
      window.location.href = performanceURL
   })
}
