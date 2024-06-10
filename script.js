const gameArea = document.getElementById('gameArea');
const cube = document.getElementById('cube');

function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameArea.clientWidth - cube.clientWidth));
    const y = Math.floor(Math.random() * (gameArea.clientHeight - cube.clientHeight));
    return { x, y };
}

function moveCube() {
    const { x, y } = getRandomPosition();
    cube.style.left = `${x}px`;
    cube.style.top = `${y}px`;
}

cube.addEventListener('click', () => {
    moveCube();
});

moveCube();
