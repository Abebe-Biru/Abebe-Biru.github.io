function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        // Add all correct answers here
    };
    

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let [key, value] of Object.entries(answers)) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === value) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}
