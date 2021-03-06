const supported = 'mediaDevices' in navigator;

const cameraButton = document.getElementById('camera__button');
const photoFrame = document.querySelector('.photo-frame');
const photo = document.querySelector('.photo');
const player = document.getElementById('player');
const context = photo.getContext('2d');
const filterContainer = document.querySelector('.filter__div');
const filterPhotoInstructions = document.querySelector('.filter_instructions');
const filterBtns = document.querySelectorAll('.container__filters div');
const filterBtnsArr = Array.from(filterBtns);
const cameraBtnArrow = document.querySelector('.arrow__take_pic');

for (let i = 0; i < filterBtnsArr.length; i++) {
  filterBtnsArr[i].addEventListener('click', function(event) {
      photo.classList.add(event.target.className)
    });
};

const showPhoto = () => {
    photoFrame.classList.add('show');
    photo.classList.add('fade-in');
    filterPhotoInstructions.innerText = 'Watch your polaroid develop, then re-take or save.';
    cameraBtnArrow.classList.add('hide');
}

cameraButton.addEventListener('click', showPhoto);

const constraints = {
    video: { width: 165, height: 240 },
  };

cameraButton.addEventListener('click', () => {
// Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, photo.width, photo.height);

    // Stop all video streams.
    player.srcObject.getVideoTracks().forEach(track => track.stop());
});

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });


