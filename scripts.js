// Toggle Mobile Menu with smooth animation
const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate menu visibility (smooth transition)
    if (navLinks.classList.contains('active')) {
        navLinks.style.transform = 'translateX(0)';
    } else {
        navLinks.style.transform = 'translateX(-100%)';
    }
});

// Track Course Button Clicks and log the course clicked
const courseBtns = document.querySelectorAll('.course-card .btn');
courseBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const courseName = event.target.closest('.course-card').querySelector('h3').textContent;
        console.log(`User clicked on: ${courseName}`);
    });
});

// Handle the 'Run Code' button click in the interactive code editor section
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

// Initialize the Monaco editor for Java editing
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.37.1/min/vs' }});
require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        language: 'java',
        theme: 'vs-light',
        automaticLayout: true
    });
});

// Handle the "Run Code" button in the Monaco editor
document.getElementById('run-code-btn').addEventListener('click', function () {
    // For now, simulate output since actual Java execution requires a backend.
    const code = editor.getValue();
    document.getElementById('output').textContent = `Executing code...\n\nOutput:\n${code}`;
});

// JavaScript to dynamically load courses into the page with animation
const courses = [
    { title: "JavaScript Basics", description: "Learn the fundamentals of JavaScript.", buttonText: "Start Course" },
    { title: "Advanced CSS", description: "Master CSS animations and grid layouts.", buttonText: "Start Course" },
    { title: "React for Beginners", description: "Get started with React.js and build dynamic UIs.", buttonText: "Start Course" },
    { title: "Node.js and Backend", description: "Learn how to build scalable back-end apps.", buttonText: "Start Course" },
];

// Dynamically populate course cards with a fade-in effect
const courseCardsContainer = document.querySelector('.course-cards');
courses.forEach((course, index) => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button>${course.buttonText}</button>
    `;
    courseCardsContainer.appendChild(card);

    // Add animation delay for a staggered fade-in effect
    setTimeout(() => {
        card.classList.add('fade-in');
    }, index * 200);  // Stagger the animation based on the index
});

// Handle interactive "Run HelloWorld" button (click to show output)
document.getElementById("helloButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
});

// Optional: Close Page Function (useful for popup-style pages)
function closePage() {
    window.close();  // This works if the window was opened by a script (e.g., window.open)
    // Or, to redirect to another page:
    // window.location.href = 'https://www.example.com';
}
