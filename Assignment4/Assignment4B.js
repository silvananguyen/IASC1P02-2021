//The javascript clock was taken from a tutorial called flexiple: https://flexiple.com/javascript-clock/.
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clockRN").innerText = time;
  let t = setTimeout(function(){ currentTime() }, 1000);
  }
currentTime();

//The current date javascript was taken from a tutorial called Phoneix Nap: https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript.
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("dateRN").innerText = date;
