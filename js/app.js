// wait for the DOM to finish loading
$(document).ready(function() {
  let player = 1;

  $(".box").on('click',function() {
    if($(this).text() === "" && player === 1){
      $(this).text("X");
      player = 2;
    }else if (player === 2 && $(this).text()===""){
      $(this).text("0");
      player = 1;
    }else($('.message').html('Try another square'));


  });
  //reset button
  $('button').on('click',function() {
    $(".box").text("")

  });
});
