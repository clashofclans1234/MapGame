const countries = [
    { name: "Algeria", former_colonial_power: "France" },
    { name: "Angola", former_colonial_power: "Portugal" },
    { name: "Benin", former_colonial_power: "France" },
    { name: "Botswana", former_colonial_power: "Britain" },
    { name: "Burkina Faso", former_colonial_power: "France" },
    { name: "Burundi", former_colonial_power: "Belgium" },
    { name: "Cameroon", former_colonial_power: "Germany/France/Britain" },
    { name: "Cape Verde", former_colonial_power: "Portugal" },
    { name: "Central African Republic", former_colonial_power: "France" },
    { name: "Chad", former_colonial_power: "France" },
    { name: "Comoros", former_colonial_power: "France" },
    { name: "Democratic Republic of the Congo", former_colonial_power: "Belgium" },
    { name: "Djibouti", former_colonial_power: "France" },
    { name: "Egypt", former_colonial_power: "Britain" },
    { name: "Equatorial Guinea", former_colonial_power: "Spain" },
    { name: "Eritrea", former_colonial_power: "Italy" },
    { name: "Eswatini", former_colonial_power: "Britain" },
    { name: "Ethiopia", former_colonial_power: "Independent (briefly occupied by Italy)" },
    { name: "Gabon", former_colonial_power: "France" },
    { name: "Gambia", former_colonial_power: "Britain" },
    { name: "Ghana", former_colonial_power: "Britain" },
    { name: "Guinea", former_colonial_power: "France" },
    { name: "Guinea-Bissau", former_colonial_power: "Portugal" },
    { name: "Ivory Coast", former_colonial_power: "France" },
    { name: "Kenya", former_colonial_power: "Britain" },
    { name: "Lesotho", former_colonial_power: "Britain" },
    { name: "Liberia", former_colonial_power: "Independent" },
    { name: "Libya", former_colonial_power: "Italy" },
    { name: "Madagascar", former_colonial_power: "France" },
    { name: "Malawi", former_colonial_power: "Britain" },
    { name: "Mali", former_colonial_power: "France" },
    { name: "Mauritania", former_colonial_power: "France" },
    { name: "Mauritius", former_colonial_power: "Britain" },
    { name: "Morocco", former_colonial_power: "France/Spain" },
    { name: "Mozambique", former_colonial_power: "Portugal" },
    { name: "Namibia", former_colonial_power: "Germany/South Africa" },
    { name: "Niger", former_colonial_power: "France" },
    { name: "Nigeria", former_colonial_power: "Britain" },
    { name: "Rwanda", former_colonial_power: "Germany/Belgium" },
    { name: "Sao Tome and Principe", former_colonial_power: "Portugal" },
    { name: "Senegal", former_colonial_power: "France" },
    { name: "Seychelles", former_colonial_power: "Britain" },
    { name: "Sierra Leone", former_colonial_power: "Britain" },
    { name: "Somalia", former_colonial_power: "Italy/Britain" },
    { name: "South Africa", former_colonial_power: "Britain" },
    { name: "South Sudan", former_colonial_power: "Britain" },
    { name: "Sudan", former_colonial_power: "Britain" },
    { name: "Tanzania", former_colonial_power: "Germany/Britain" },
    { name: "Togo", former_colonial_power: "Germany/France" },
    { name: "Tunisia", former_colonial_power: "France" },
    { name: "Uganda", former_colonial_power: "Britain" },
    { name: "Zambia", former_colonial_power: "Britain" },
    { name: "Zimbabwe", former_colonial_power: "Britain" }
];

let remainingCountries = [...countries];
let correctAnswers = 0;
let totalQuestions = 0;

const mapImage = document.createElement("img");
mapImage.src = "Africa_1914.jpg";
mapImage.alt = "Map of Africa in 1914";
document.body.appendChild(mapImage);

const promptText = document.createElement("p");
document.body.appendChild(promptText);

const colonialPowers = ["France", "Britain", "Portugal", "Spain", "Italy", "Germany", "Belgium"];
const buttonContainer = document.createElement("div");
const feedback = document.createElement("p");
const scoreDisplay = document.createElement("p");
document.body.appendChild(feedback);
document.body.appendChild(scoreDisplay);

document.body.appendChild(buttonContainer);

function updateScore() {
    scoreDisplay.innerText = `Score: ${(correctAnswers / totalQuestions * 100).toFixed(2)}%`;
}

function nextQuestion() {
    if (remainingCountries.length > 0) {
        targetCountry = remainingCountries.splice(Math.floor(Math.random() * remainingCountries.length), 1)[0];
        promptText.innerText = `Which colonial power ruled over ${targetCountry.name}?`;
    } else {
        alert(`Game Over! Final Score: ${(correctAnswers / totalQuestions * 100).toFixed(2)}%`);
    }
}

colonialPowers.forEach(power => {
    const button = document.createElement("button");
    button.innerText = power;
    button.addEventListener("click", function () {
        checkAnswer(power);
    });
    buttonContainer.appendChild(button);
});

document.body.appendChild(buttonContainer);

function checkAnswer(userAnswer) {
    totalQuestions++;
    if (userAnswer === targetCountry.former_colonial_power) {
        correctAnswers++;
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Wrong! The correct answer is ${targetCountry.former_colonial_power}.`;
        feedback.style.color = "red";
    }
    updateScore();
    setTimeout(nextQuestion, 1000);
}

nextQuestion();
