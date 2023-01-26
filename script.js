// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs();

$(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $('.saveBtn').on('click', function () {
    var idKey = $(this).prev().attr("id")
    var enteredText = $(this).prev().val();
    localStorage.setItem(idKey, enteredText);
    console.log(idKey);
    console.log(enteredText);
    console.log($(this).prev().val());
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function checkHourBlocks(){
    // var currentHour= today.format('H');
    var currentHour = 12;
    for(i=0; i<24; i++){
      var plannerTimes = $('#hour-' + i);
      // console.log(plannerTimes);
      // console.log(currentHour);
      if (!plannerTimes){
      } else if(i>currentHour){
        plannerTimes.addClass('future');
      } else if(i == currentHour) {
        plannerTimes.addClass('present');
      } else {
        plannerTimes.addClass('past');
      }
  } }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function getPlannerInputs(){
    // var inputHours = localStorage.getItem(idKey);
    $(".description").each(function(){
      var idKey= $(this).attr("id");
      var getPlannerInfo = localStorage.getItem(idKey)
      console.log(getPlannerInfo);
      $(`#${idKey}`).val(getPlannerInfo);
    }) 
  }


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('MMMM D, YYYY'));
  checkHourBlocks();
  getPlannerInputs();
});

