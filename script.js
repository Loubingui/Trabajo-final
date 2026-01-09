const noiseOverlay = document.getElementById('noise-overlay');
let interferenceTimeout;

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function triggerInterference() {
    // Generamos valores aleatorios de brillo y contraste para blancos y grises
    const brightness = 0.6 + Math.random(); // Variación de luz
    const contrast = 1 + Math.random(); // Variación de dureza de gris
    
    // Aplicamos solo filtros que no afectan el color (hue)
    noiseOverlay.style.filter = `brightness(${brightness}) contrast(${contrast}) grayscale(1)`;
    noiseOverlay.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    noiseOverlay.style.opacity = 0.3; 

    clearTimeout(interferenceTimeout);
    interferenceTimeout = setTimeout(() => {
        noiseOverlay.style.filter = 'grayscale(1)';
        noiseOverlay.style.transform = 'translate(0, 0)';
        noiseOverlay.style.opacity = 0.15;
    }, 100); 
}

const throttledInterference = throttle(triggerInterference, 80); 
window.addEventListener('scroll', throttledInterference);