
var time=moment().format("dddd, MMMM Do YYYY, h:mm:ss a zz");
console.log("hello", time)
$("#time").text(time);

var dateInputEl = $('#datepicker');
var dateInput = dateInputEl.val();
dateInputEl.val('');

$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });