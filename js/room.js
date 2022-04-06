import {LoadAgenda,PerformanceTime,SpatialRoom,TrackRoom} from '/app/app.js'

window.onload = function() {
   LoadAgenda(function(agenda) {
      let room = new SpatialRoom({
         roomName: document.getElementById("roomName").value,
         agenda: agenda,
      })
   })

   let performanceTime = new PerformanceTime()

   // FIXME:  HACK***HACK***HACK
   // There is an audio context bug in (at least) Chrome which causes the audio
   // context to not release audio files from RAM even after they are stopped and
   // unloaded.  As a workaround, we reload the page to reset the web audio
   // context.
   performanceTime.addEventListener('INT-5 min warning', function() {
      window.location.reload(false)
   })
}

