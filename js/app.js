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

setTimeout(fade_out, 5000);

function fade_out() {
  $(".message").fadeOut().empty();
}
// var "row" = ["1","2","3","4","5","6","7","8","9"];
//
// function boardDisplay() {
//     console.log("| "+boardsq[0]+" | "+boardsq[1]+" | "+boardsq[2]+" |");
//     console.log("| "+boardsq[3]+" | "+boardsq[4]+" | "+boardsq[5]+" |");
//     console.log("| "+boardsq[6]+" | "+boardsq[7]+" | "+boardsq[8]+" |");
// }
