import {PerformanceTime} from '/app/app.js'

var performanceURL = 'https://live.kineticlight.org/live'

performanceTime = new PerformanceTime()

performanceTime.on('30-sec', function() {
   window.location.href = performanceURL
})
performanceTime.on('Top of Act 1', function() {
   window.location.href = performanceURL
})
performanceTime.on('INT-30 sec', function() {
   window.location.href = performanceURL
})
performanceTime.on('Top of Act 2', function() {
   window.location.href = performanceURL
})

/*
performanceTime.once('', function() {
   if( performanceTime.sinceCue('30-sec) >= 0) {
      // If performance has begun but it is before the end of the first act
      window.location.href = performanceURL
   }
})
*/
window.onload = function() {
   LoadAgenda(function(agenda) {
      let room = new Room({
         roomName: "{{ .Room.Name }}",
         agenda: agenda,
      })
   })
}

// FIXME:  HACK***HACK***HACK
// There is an audio context bug in (at least) Chrome which causes the audio
// context to not release audio files from RAM even after they are stopped and
// unloaded.  As a workaround, we reload the page to reset the web audio
// context.
let performanceTime = new PerformanceTime()
performanceTime.on('INT-5 min warning', function() {
   window.location.reload(false)
})
