const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('display-gif');

// 1. Make the "No" button move away when hovered
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. What happens when they finally click "Yes"
yesBtn.addEventListener('click', () => {
    questionText.innerText = "Yes! Love you a lot, My chad ! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0ZzR3bmZqZzR3bmZqZzR3bmZqZzR3bmZqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"; // Happy cat gif
    noBtn.style.display = 'none'; // Hide the No button
});