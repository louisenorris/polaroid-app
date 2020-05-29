const supported = 'mediaDevices' in navigator;

const cameraButton = document.getElementById('camera__button');
const photoFrame = document.querySelector('.photo-frame');
const photo = document.querySelector('.photo');
const player = document.getElementById('player');
const context = photo.getContext('2d');

const showPhoto = () => {
    photoFrame.classList.add('show');
    photo.classList.add('fade-in');
}

cameraButton.addEventListener('click', showPhoto);

const constraints = {
    video: true,
  };

cameraButton.addEventListener('click', () => {
// Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, photo.width, photo.height);
});

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });