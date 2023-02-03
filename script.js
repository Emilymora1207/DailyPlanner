
//used to get the date at the top of the page and grab the current hour
var today = dayjs();

$(function() {

  //saves the text written on that hour to the local storage when the save button is clocked on
  $('.saveBtn').on('click', function () {
    var idKey = $(this).prev().attr("id")
    var enteredText = $(this).prev().val();
    localStorage.setItem(idKey, enteredText);
    console.log(idKey);
    console.log(enteredText);
    console.log($(this).prev().val());
  });

//function to change the colors of  the hour blocks 
  function checkHourBlocks(){
    var currentHour= today.format('H');
    for(i=0; i<24; i++){
      var plannerTimes = $('#hour-' + i);
      console.log(plannerTimes);
      console.log(currentHour);
      if (!plannerTimes){
      } else if(i>currentHour){
        plannerTimes.addClass('future');
      } else if(i == currentHour) {
        plannerTimes.addClass('present');
      } else {
        plannerTimes.addClass('past');
      }
  } }

  //pulls the text from local starage
  function getPlannerInputs(){
    // var inputHours = localStorage.getItem(idKey);
    $(".description").each(function(){
      var idKey= $(this).attr("id");
      var getPlannerInfo = localStorage.getItem(idKey)
      console.log(getPlannerInfo);
      $(`#${idKey}`).val(getPlannerInfo);
    }) 
  }


  //displays the current date
  $('#currentDay').text(today.format('MMMM D, YYYY'));
  checkHourBlocks();
  getPlannerInputs();
});

