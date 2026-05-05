const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('display-gif');

/**
 * বাটনটি স্ক্রিনের যেকোনো র‍্যান্ডম জায়গায় সরিয়ে দেওয়ার ফাংশন
 */
function moveButton() {
    // বাটনের উইডথ এবং হাইট বাদ দিয়ে স্ক্রিনের সর্বোচ্চ সীমা বের করা
    // ২০ পিক্সেল মার্জিন রাখা হয়েছে যাতে বাটন একদম কিনারায় না লেগে যায়
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    // ০ থেকে সর্বোচ্চ সীমার মধ্যে র‍্যান্ডম পজিশন তৈরি
    const x = Math.max(10, Math.floor(Math.random() * maxX));
    const y = Math.max(10, Math.floor(Math.random() * maxY));

    // নতুন পজিশন সেট করা
    noBtn.style.position = 'fixed'; // absolute এর বদলে fixed ব্যবহার করা হয়েছে যাতে স্ক্রল করলেও সমস্যা না হয়
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// ১. ডেস্কটপ বা পিসির জন্য (Mouse Hover)
noBtn.addEventListener('mouseover', moveButton);

// ২. মোবাইলের জন্য (Touch Start)
// মোবাইলে টাচ করার সাথে সাথেই বাটনটি সরে যাবে
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // টাচ করলে জুম বা স্ক্রল হওয়া আটকাবে
    moveButton();
});

// ৩. 'Yes' বাটনে ক্লিক করলে যা হবে
yesBtn.addEventListener('click', () => {
    questionText.innerText = "Yes! Love you a lot, My chad ! ❤️";
    // হ্যাপি ক্যাট জিআইএফ (GIF) আপডেট
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0ZzR3bmZqZzR3bmZqZzR3bmZqZzR3bmZqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"; 
    
    // 'No' বাটনটি পুরোপুরি লুকিয়ে ফেলা
    noBtn.style.display = 'none';
});
