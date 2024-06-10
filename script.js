// Функция для создания астероидов
function createAsteroid() {
    const asteroid = document.createElement('div');
    asteroid.classList.add('asteroid');
    asteroid.style.left = Math.random() * container.clientWidth + 'px';
    asteroid.style.top = Math.random() * container.clientHeight + 'px';
    container.appendChild(asteroid);
    asteroids.push(asteroid);
}

// Функция для создания топлива
function createFuel() {
    const f = document.createElement('div');
    f.classList.add('fuel');
    f.style.left = Math.random() * container.clientWidth + 'px';
    f.style.top = Math.random() * container.clientHeight + 'px';
    container.appendChild(f);
    fuel.push(f);
}

// Переменные для движения
let dx = 0;

// Функция для обработки нажатия клавиш
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        dx = -5;
    } else if (event.key === 'ArrowRight') {
        dx = 5;
    }
});

// Функция для обработки отпускания клавиш
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        dx = 0;
    }
});

// Функция обновления игры
function update() {
    requestAnimationFrame(update);

    // Перемещение корабля
    ship.style.left = Math.max(0, Math.min(ship.offsetLeft + dx, container.clientWidth - ship.offsetWidth));

    // Проверка столкновений с астероидами
    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        if (checkCollision(ship, asteroid)) {
            gameOver();
            break;
        }
    }

    // Проверка столкновений с топливом
    for (let i = 0; i < fuel.length; i++) {
        const f = fuel[i];
        if (checkCollision(ship, f)) {
            f.remove();
            fuel.splice(i, 1);
            score += 10;
            document.querySelector('.score').textContent = `Очки: ${score}`;
            createFuel(); // Создать новый элемент топлива
        }
    }

    // Создание новых астероидов
    if (Math.random() < 0.01) {
        createAsteroid();
    }
}

// Функция проверки столкновений
function checkCollision(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return (
        aRect.left < bRect.right &&
        aRect.right > bRect.left &&
        aRect.top < bRect.bottom &&
        aRect.bottom > bRect.top
    );
}

// Функция завершения игры
function gameOver() {
    alert('Игра окончена! Ваш счет: ' + score);
    window.location.reload(); // Перезагрузить страницу
}

// Запуск игры
createAsteroid(); // Создать начальный астероид
createFuel(); // Создать начальный элемент топлива
update(); // Запустить игровой цикл

