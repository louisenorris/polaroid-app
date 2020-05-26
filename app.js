const cameraButton = document.getElementById('camera__button');
const photo = document.querySelector('.photo-frame');

const showPhoto = () => {
    photo.classList.add('show');
}

cameraButton.addEventListener('click', showPhoto);