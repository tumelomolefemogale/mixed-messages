const theButton = document.getElementById('the-button')
const funnyImage = document.getElementById('funny-image');
const sentence = document.getElementById('sentence');

function displayImage() {
    funnyImage.style.display = 'block';
    sentence.innerHTML = 'WARNING: Smiling gorilla may cause spontaneous envy.'
    theButton.style.display = 'none'
}

theButton.addEventListener('click', displayImage)
