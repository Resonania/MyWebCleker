const clickArea = document.getElementById('clickArea');
const ball = document.getElementById('ball');
const clickCounter = document.getElementById('clickCounter');
const progress = document.getElementById('progress');
const notification = document.getElementById('notification');

let clicks = 0;

clickArea.addEventListener('click', () => {
    clicks++;
    clickCounter.textContent = clicks;
    updateProgressBar();
    animateClick();
    if (clicks >= 100) {
        showNotification();
        clicks = 0;
        clickCounter.textContent = clicks;
        updateProgressBar();
    }
});

function animateClick() {
    ball.style.transform = 'translate(-50%, -50%) scale(0.9)';
    setTimeout(() => {
        ball.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 200);
}

function updateProgressBar() {
    const progressWidth = (clicks / 100) * 100;
    progress.style.width = `${progressWidth}%`;
}

function showNotification() {
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

