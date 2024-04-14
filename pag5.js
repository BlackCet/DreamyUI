const container = document.getElementById('container');
const numFireflies = 20; // Number of fireflies

for (let i = 0; i < numFireflies; i++) {
    createlight();
}

function createlight() {
    const light = document.createElement('div');
    light.classList.add('light');
    container.appendChild(light);
    updatePosition(light);
}

function updatePosition(light) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const speed = Math.random() * 1 + 1; // Random speed between 1 and 4 pixels per frame
    const angle = Math.random() * Math.PI * 2; // Random angle in radians

    let x = Math.random() * containerWidth;
    let y = Math.random() * containerHeight;

    const move = () => {
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed;

        // If light goes out of bounds, reset its position
        if (x < 0 || x > containerWidth || y < 0 || y > containerHeight) {
            x = Math.random() * containerWidth;
            y = Math.random() * containerHeight;
        }

        light.style.transform = `translate(${x}px, ${y}px)`;

        // Update position in next animation frame
        requestAnimationFrame(move);
    };

    // Start moving
    move();
}