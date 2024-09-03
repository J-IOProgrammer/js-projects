const video_player = document.querySelector("#videoPlayer");
const video_box = document.querySelector("#video-box");

function changeVideoSource(video_path) {
    video_box.src = video_path;
  video_player.style.display = "block";

}
