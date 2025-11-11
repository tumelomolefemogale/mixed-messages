const theButton = document.getElementById('the-button')
const funnyImage = document.getElementById('funny-image');
const sentence = document.getElementById('sentence');

const surveyLabels = document.querySelectorAll('.survey-label');
const surveyInputs = document.querySelectorAll('.survey-input');

function displayImage() {
    funnyImage.style.display = 'block';
    setTimeout(() => {
        funnyImage.classList.add('show')
    }, 3)

    sentence.innerHTML = 'WARNING: Smiling gorilla may cause spontaneous envy.'
    theButton.style.display = 'none'

    surveyLabels.forEach(label => label.style.display = 'none');
    surveyInputs.forEach(input => input.style.display = 'none');
}

theButton.addEventListener('click', displayImage)
