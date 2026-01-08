const answers = [
    "Yes, definitely!",
    "No, not right now.",
    "Maybe, try again later.",
    "Absolutely!",
    "I don't think so.",
    "Ask again tomorrow.",
    "It is possible.",
    "Better not now."
];

document.getElementById('askBtn').addEventListener('click', function() {
    const questionInput = document.getElementById('question').value.trim();
    const answerDiv = document.getElementById('answer');

    if (questionInput === "") {
        answerDiv.innerText = "Please ask a question first!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * answers.length);
    answerDiv.innerText = answers[randomIndex];
});
