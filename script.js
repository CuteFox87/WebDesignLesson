document.getElementById('reload').addEventListener('click', () => {
    location.reload();
});

const jokes = [
    "What’s a computer’s favorite drink in winter?<br> → Hot Java.",
    "Why was the server shivering?<br> → Because it was in a cold storage.",
    "Why was the IT guy cold?<br> → Because he left his Windows open.",
    "Why don’t programmers like nature?<br> → It has too many bugs.",
    "Why was the function so sad?<br> → Because it didn’t return anything."
];

document.getElementById('joke_content').innerHTML = jokes[Math.floor(Math.random() * jokes.length)];