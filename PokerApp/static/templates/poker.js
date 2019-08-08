$(document).ready(function(){
  $("#result").click(function(){
    $(".win").slideDown(1000);
    $(".game").hide();
  });
  $("#p1").click(function(){
    $(".u1").animate({
      height: 'show'
    });
    $(".deck1").animate({
      height: 'hide'
    });
  });
  $("#p2").click(function(){
    $(".u2").animate({
      height: 'show'
    });
    $(".deck2").animate({
      height: 'hide'
    });
  });
  $("#p3").click(function(){
    $(".u3").animate({
      height: 'show'
    });
    $(".deck3").animate({
      height: 'hide'
    });
  });
  $("#p4").click(function(){
    $(".u4").animate({
      height: 'show'
    });
    $(".deck4").animate({
      height: 'hide'
    });
  });
  $("#play_again").click(function(){
    location.reload(true);
  });
  $("#Show").click(function(){
    $(".player1").animate({
      height: 'show'
    });
    $(".player2").animate({
      height: 'show'
    });
    $(".player3").animate({
      height: 'show'
    });
    $(".player4").animate({
      height: 'show'
    });
    $(".cover1").animate({
      left: '500px',
      top: '10px'
    });
    $(".cover2").animate({
      left: '585px',
      top: '10px'
    });
    $(".cover3").animate({
      left: '670px',
      top: '10px'
    });
    $(".cover4").animate({
      left: '755px',
      top: '10px'
    });
    $(".cover5").animate({
      left: '840px',
      top: '10px'
    });
    $(".cover6").animate({
      left: '500px',
      bottom: '15px'
    });
    $(".cover7").animate({
      left: '585px',
      bottom: '15px'
    });
    $(".cover8").animate({
      left: '670px',
      bottom: '15px'
    });
    $(".cover9").animate({
      left: '755px',
      bottom: '15px'
    });
    $(".cover10").animate({
      left: '840px',
      bottom: '15px'
    });
    $(".cover11").animate({
      left: '210px',
      top: '130px'
    });
    $(".cover12").animate({
      left: '210px',
      top: '190px'
    });
    $(".cover13").animate({
      left: '210px',
      top: '250px'
    });
    $(".cover14").animate({
      left: '210px',
      top: '310px'
    });
    $(".cover15").animate({
      left: '210px',
      top: '370px'
    });
    $(".cover16").animate({
      left: '1055px',
      top: '130px'
    });
    $(".cover17").animate({
      left: '1055px',
      top: '190px'
    });
    $(".cover18").animate({
      left: '1055px',
      top: '250px'
    });
    $(".cover19").animate({
      left: '1055px',
      top: '310px'
    });
    $(".cover20").animate({
      left: '1055px',
      top: '370px'
    });
  });
});
