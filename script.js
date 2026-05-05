const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('display-gif');

/**
 * বাটনটি স্ক্রিনের র‍্যান্ডম জায়গায় সরিয়ে নেওয়ার ফাংশন
 */
function moveButton() {
    // বাটনটিকে স্ক্রিনের একদম বর্ডার থেকে কিছুটা ভেতরে রাখতে ২০ পিক্সেল মার্জিন দেওয়া হয়েছে
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    // ০ থেকে সর্বোচ্চ সীমার মধ্যে র‍্যান্ডম পজিশন তৈরি
    const x = Math.max(10, Math.floor(Math.random() * maxX));
    const y = Math.max(10, Math.floor(Math.random() * maxY));

    // মুভমেন্টের সময় পজিশন 'fixed' করে দেওয়া হচ্ছে যাতে বাটনটি স্ক্রিনে যেকোনো জায়গায় যেতে পারে
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// ১. ডেস্কটপের জন্য: মাউস বাটনের ওপর নিলেই নড়ে যাবে
noBtn.addEventListener('mouseover', moveButton);

// ২. মোবাইলের জন্য: বাটনটি টাচ করলেই নড়ে যাবে
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // টাচ করলে যেন পেজ স্ক্রল না হয়
    moveButton();
});

// ৩. 'Yes' বাটনে ক্লিক করলে যা ঘটবে
yesBtn.addEventListener('click', () => {
    // টেক্সট পরিবর্তন
    questionText.innerText = "Yes! Love you a lot, My chad ! ❤️";
    
    // জিআইএফ পরিবর্তন
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0ZzR3bmZqZzR3bmZqZzR3bmZqZzR3bmZqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"; 
    
    // 'No' বাটনটি পুরোপুরি লুকিয়ে ফেলা
    noBtn.style.display = 'none';
});
