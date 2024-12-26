// Initialize CodeMirror editor
const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: 'java',
    theme: 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    smartIndent: true,
    tabSize: 2
});

let currentStep = 1;

// Show next step and hide current step
function showNextStep() {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step-${currentStep}`).classList.add('active');
}

// Step navigation for each "Next" button
document.getElementById('next-1').addEventListener('click', showNextStep);
document.getElementById('next-2').addEventListener('click', showNextStep);
document.getElementById('next-3').addEventListener('click', showNextStep);
document.getElementById('next-4').addEventListener('click', showNextStep);

document.getElementById('runCode').addEventListener('click', function() {
    const code = document.getElementById('editor').value;
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

