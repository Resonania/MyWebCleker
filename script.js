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
        document.body.removeChild(plusOne);
    }, 1000);

    // Проверка на 100 кликов
    if (clickCount === 100) {
        alert('Вы нажали 100 раз');
        clickCount = 0;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('click-count').innerText = `Clicks: ${clickCount} | Coins: ${coins}`;
}

function buyItem(item, cost) {
    if (coins >= cost) {
        coins -= cost;
        if (item === 'clicker') {
            clickers++;
        } else if (item === 'superClicker') {
            superClickers++;
        }
        updateDisplay();
    } else {
        alert('Недостаточно монет!');
    }
}

setInterval(() => {
    for (let i = 0; i < clickers; i++) {
        click();
    }
}, 1000);

setInterval(() => {
    for (let i = 0; i < superClickers * 10; i++) {
        click();
    }
}, 1000);

@keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
}

