const cameraButton = document.getElementById('camera__button');
const photoFrame = document.querySelector('.photo-frame');
const photo = document.querySelector('.photo');

const showPhoto = () => {
    photoFrame.classList.add('show');
    photo.classList.add('fade-in');
}

cameraButton.addEventListener('click', showPhoto);