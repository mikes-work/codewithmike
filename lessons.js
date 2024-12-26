document.getElementById('run-button').addEventListener('click', function() {
    const code = document.getElementById('code-editor').value;
    // Simulate running the code - for now, we'll just output the entered message
    let output = "Your output will appear here.";
    if (code.includes("System.out.println")) {
        const startIndex = code.indexOf('"') + 1;
        const endIndex = code.indexOf('"', startIndex);
        const message = code.substring(startIndex, endIndex);
        output = message;
    }
    document.getElementById('output').innerText = output;
});

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');

    if (question1 && question1.value === "a") score++;
    if (question2 && question2.value === "a") score++;

    const result = document.getElementById('quiz-result');
    result.innerText = `You got ${score} out of 2 questions right!`;
});
