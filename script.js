

  





// countdown
$(document).ready(function() {
  var currentTimestamp = Math.floor(Date.now() / 1000);
  var endDate = new Date('2024-02-05');
  var endTimestamp = Math.floor(endDate.getTime() / 1000);
  var strDate = new Date('2023-08-31');
  var strTimestamp = Math.floor(strDate.getTime() / 1000);

  $('.countdown').final_countdown({
      start: strTimestamp,  
      end: endTimestamp,   
      now: currentTimestamp,
      selectors: {
          value_seconds: '.clock-seconds .val',
          canvas_seconds: 'canvas_seconds',
          value_minutes: '.clock-minutes .val',
          canvas_minutes: 'canvas_minutes',
          value_hours: '.clock-hours .val',
          canvas_hours: 'canvas_hours',
          value_days: '.clock-days .val',
          canvas_days: 'canvas_days'
      },
      seconds: {
          borderColor: '#E83363',
          borderWidth: '5'
      },
      minutes: {
          borderColor: '#E83363',
          borderWidth: '5'
      },
      hours: {
          borderColor: '#E83363',
          borderWidth: '5'
      },
      days: {
          borderColor: '#E83363',
          borderWidth: '5'
      }
  }, function() {
  });
});


