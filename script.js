document.getElementById('reload').addEventListener('click', () => {
    location.reload();
});

const jokes = [
    "What’s a computer’s favorite drink in winter?<br> → Hot Java.",
    "Why was the server shivering?<br> → Because it was in a cold storage.",
    "Why was the IT guy cold?<br> → Because he left his Windows open.",
    "Why don’t programmers like nature?<br> → It has too many bugs.",
    "Why was the function so sad?<br> → Because it didn’t return anything.",
    "Why did the database administrator break up with his girlfriend?<br> → She had too many connections.",
    "Why was the AI model feeling cold?<br> → Because it wasn’t trained properly.",
    "Why don’t programmers go ice fishing?<br> → They don’t like frozen threads.",
    "Why did the Linux user freeze outside?<br> → He refused to use Windows.",
    "Why do programmers love winter?<br> → Because they get to code in layers.",
    "Why did the web developer wear a scarf?<br> → Because he didn’t want to catch a CSS (Cold Style Syndrome).",
    "Why was the Wi-Fi signal so weak in winter?<br> → Too many frozen packets.",
    "Why did the JavaScript function go skiing?<br> → It wanted to avoid a callback avalanche.",
    "Why do cybersecurity experts hate winter?<br> → Too many phishing holes in the ice.",
    "Why did the programmer bring a blanket to work?<br> → Because he was stuck in an infinite loop and couldn’t escape the cold.",
    "Why don’t Python developers get cold easily?<br> → Because they always have a warm interpreter.",
    "Why was the cloud server freezing?<br> → It ran out of hot backups.",
    "What’s the worst winter joke a developer can hear?<br> → 'Our server room’s heating just failed.'",
    "Why did the programmer hate snow days?<br> → Too many crashes in the system.",
    "Why did the computer science student wear gloves in winter?<br> → To prevent pointer errors.",
    "Why was the developer’s coffee always cold?<br> → Too many runtime errors kept him busy."
];


document.getElementById('joke_content').innerHTML = jokes[Math.floor(Math.random() * jokes.length)];