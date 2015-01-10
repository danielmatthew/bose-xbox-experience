var $container = $( '#container' );
var $menu = $container.find( 'aside' );
var $links = $menu.find( 'nav > a' );

var html = document.getElementsByTagName('html');
var video = document.getElementById('video');
var audio = document.getElementById('audio');

// Load YouTube JS API
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  video = new YT.Player('video', {
    events: {
      // call when video is ready to use
      // 'onReady': onPlayerReady
      'onStateChange': changeMusic
    }
  });
}

function changeMusic(e) {
  console.log(e.data);

  if (e.data === 1) {
    audio.pause();
  } else {
    audio.play();
  }
}


$('.colour').on({
  mouseenter: function() {
    var i = $(this).index();
    $('.colourSwitcherPhoto1Holder img').each(function(){
      $(this).css('opacity', 0);
      // $(this).fadeToggle();
    })

    $('.colourSwitcherPhoto1Holder img').eq(i).css('opacity', 1);
    // $('.colourSwitcherPhoto1Holder img').eq(i).fadeToggle("slow", "linear");    
  }
}); 

$links.eq(0).on('click', function(event){
  $('#backdrop').animate({
    'background-position-x' : "0%"
  });

  $('.content-wrapper').animate({
    'left': "0%"
  });

  $links.eq(0).addClass('selected');
  $links.eq(1).removeClass('selected');
  $links.eq(2).removeClass('selected');

  // Start video 
  video.playVideo();

  return false;
});

$links.eq(1).on('click', function(event){
  $('#backdrop').animate({
    'background-position-x' : "50%"
  });

  $links.eq(0).removeClass('selected');
  $links.eq(1).addClass('selected');
  $links.eq(2).removeClass('selected');

  $('.content-wrapper').animate({
    'left': "-100%"
  });

  // Pause video
  video.pauseVideo();

  return false;
});

$links.eq(2).on('click', function(event){
  $('#backdrop').animate({
    'background-position-x' : "100%"
  });

  $('.content-wrapper').animate({
    'left': "-200%"
  });  

  $links.eq(0).removeClass('selected');
  $links.eq(1).removeClass('selected');
  $links.eq(2).addClass('selected');

  video.pauseVideo();

  return false;
});