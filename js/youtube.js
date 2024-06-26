// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'EJF919p_hb0',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'EJF919p_hb0' //loop 시 필수
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      }
    }
  });
}