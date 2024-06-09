let clickCount = 0;
let coins = 0;
let clickers = 0;
let superClickers = 0;

document.getElementById('click-circle').addEventListener('click', function() {
    click();
});

document.getElementById('shop').addEventListener('click', function() {
    document.getElementById('shop-menu').classList.toggle('hidden');
});

function click() {
    clickCount++;
    coins++;
    updateDisplay();

    // Анимация уменьшения и увеличения круга
    document.getElementById('click-circle').style.transform = 'scale(0.9)';
    setTimeout(() => {
        document.getElementById('click-circle').style.transform = 'scale(1)';
    }, 100);

    // Показ текста +1
    const plusOne = document.createElement('div');
    plusOne.innerText = '+1';
    plusOne.style.position = 'absolute';
    plusOne.style.top = '50%';
    plusOne.style.left = '50%';
    plusOne.style.transform = 'translate(-50%, -50%)';
    plusOne.style.color = 'red';
    plusOne.style.fontSize = '20px';
    plusOne.style.animation = 'fadeOut 1s forwards';
    document.body.appendChild(plusOne);
    setTimeout(() => {
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

