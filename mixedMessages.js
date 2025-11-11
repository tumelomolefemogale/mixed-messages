const days = ['Monday', 'Friday', 'Sunday'];
const placesAndactivities = [
    ' straight to work and finish that one project',
    ' to the mall and spoil myself',
    ' to church and praise God'
];
const moods = ['happy', 'tired', 'motivated'];

const sentenceButton = document.getElementById('sentence-button');
const sentence = document.getElementById('sentence')

function randomSentence() {
    const randomIndex1 = Math.floor(Math.random() * days.length);
    const randomIndex2 = Math.floor(Math.random() * placesAndactivities.length);
    const randomIndex3 = Math.floor(Math.random() * moods.length);

    const randomSentence = `Today is ${days[randomIndex1]}, I feel ${moods[randomIndex3]} but I'd rather go ${placesAndactivities[randomIndex2]}.`;
    sentence.innerHTML = randomSentence;
}

sentenceButton.addEventListener('click', randomSentence)