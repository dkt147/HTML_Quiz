function showq1(){
  $(".question1").fadeIn();
  $(".question2").hide();
}
function showq2(){
  $(".question2").fadeIn();
  $(".question1").hide();
  $(".question3").hide();
}
function showq3(){
  $(".question3").fadeIn();
  $(".question2").hide();
  $(".question4").hide();
}
function showq4(){
  $(".question4").fadeIn();
  $(".question3").hide();
  $(".question5").hide();
}
function showq5(){
  $(".question5").fadeIn();
  $(".question4").hide();
  $(".question6").hide();
}
function showq6(){
  $(".question6").fadeIn();
  $(".question5").hide();
}
function showq7(){
  $(".question7").fadeIn();
  $(".question6").hide();
  $(".question8").hide();
}
function showq8(){
  $(".question8").fadeIn();
  $(".question7").hide();
  $(".question9").hide();
}
function showq9(){
  $(".question9").fadeIn();
  $(".question8").hide();
  $(".question10").hide();
}
function showq10(){
  $(".question10").fadeIn();
  $(".question9").hide();
  $(".question11").hide();
}
function showq11(){
  $(".question11").fadeIn();
  $(".question10").hide();
  $(".question12").hide();
}
function showq12(){
  $(".question12").fadeIn();
  $(".question11").hide();
  $(".question13").hide();
}
function showq13(){
  $(".question13").fadeIn();
  $(".question12").hide();
  $(".question14").hide();
}
function showq14(){
  $(".question14").fadeIn();
  $(".question13").hide();
  $(".question15").hide();
}
function showq15(){
  $(".question15").fadeIn();
  $(".question14").hide();
}
function endExam(){
  $(".container").hide();
  $(".result").fadeIn();
  $(".terms").hide();
}

$(document).ready(function(){
  
  $("#qbtn1next").click(function(event){
    showq2();
  });
  $("#qbtn2next").click(function(event){
    showq3();
  });
  $("#qbtn3next").click(function(event){
    showq4();
  });
  $("#qbtn4next").click(function(event){
    showq5();
  });
  $("#qbtn5next").click(function(event){
    showq6();
  });
  $("#qbtn6next").click(function(event){
    showq7();
  });
  $("#qbtn7next").click(function(event){
    showq8();
  });
  $("#qbtn8next").click(function(event){
    showq9();
  });
  $("#qbtn9next").click(function(event){
    showq10();
  });
  $("#qbtn10next").click(function(event){
    showq11();
  });
  $("#qbtn11next").click(function(event){
    showq12();
  });
  $("#qbtn12next").click(function(event){
    showq13();
  });
  $("#qbtn13next").click(function(event){
    showq14();
  });
  $("#qbtn14next").click(function(event){
    showq15();
  });
  $("#submit").click(function(event){
    endExam();
  });
  $("form").submit(function(event){
    event.preventDefault();
    var result = 0;

    var button13 = document.getElementById('q13');
    var button21 = document.getElementById('q21');
    var button34 = document.getElementById('q34');
    var button43 = document.getElementById('q43');
    var button52 = document.getElementById('q52');

    var button63 = document.getElementById('q63');
    var button71 = document.getElementById('q71');
    var button84 = document.getElementById('q84');
    var button93 = document.getElementById('q93');
    var button102 = document.getElementById('q102');

    var button113 = document.getElementById('q113');
    var button121 = document.getElementById('q121');
    var button134 = document.getElementById('q134');
    var button143 = document.getElementById('q143');
    var button152 = document.getElementById('q152');
    var button163 = document.getElementById('q163');
    

   if (button13.checked) {
     result += 2
   }
   if (button21.checked) {
     result += 2
   }
   if (button34.checked) {
     result += 2
   }
   if (button43.checked) {
     result += 2
   }
   if (button52.checked) {
    result += 2
  }

  if (button63.checked) {
    result += 2
  }
  if (button71.checked) {
    result += 2
  }
  if (button84.checked) {
    result += 2
  }
  if (button93.checked) {
    result += 2
  }
  if (button102.checked) {
   result += 2
 }
 
 if (button113.checked) {
  result += 2
}
if (button121.checked) {
  result += 2
}
if (button134.checked) {
  result += 2
}
if (button143.checked) {
  result += 2
}
if (button152.checked) {
 result += 2
}
   else {
     result == 0
   }
   $("#marks").append(result);

  });
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
});
