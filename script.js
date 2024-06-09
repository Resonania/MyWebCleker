const clickArea = document.getElementById('clickArea');
const ball = document.getElementById('ball');
const clickCounter = document.getElementById('clickCounter');

let clicks = 0;

clickArea.addEventListener('click', () => {
    clicks++;
    clickCounter.textContent = clicks;
    animateClick();
});

function animateClick() {
    ball.style.transform = 'scale(0.9)';
    setTimeout(() => {
        ball.style.transform = 'scale(1)';
    }, 200);
}

