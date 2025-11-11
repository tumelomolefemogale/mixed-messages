const theButton = document.getElementById('the-button')
const funnyImage = document.getElementById('funny-image');

function displayImage() {
    funnyImage.style.display = 'block'
}

theButton.addEventListener('click', displayImage)
