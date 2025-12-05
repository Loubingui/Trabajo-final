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
    
    noiseOverlay.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    noiseOverlay.style.transform = `translate(${Math.random() * 5 - 2.5}px, ${Math.random() * 5 - 2.5}px)`;
    noiseOverlay.style.opacity = 0.4; 

    clearTimeout(interferenceTimeout);
    interferenceTimeout = setTimeout(() => {
        noiseOverlay.style.filter = 'none';
        noiseOverlay.style.transform = 'translate(0, 0)';
        noiseOverlay.style.opacity = 0.15;
    }, 150); 
}

// Se usa la versión "throttled" de la función en el event listener
const throttledInterference = throttle(triggerInterference, 100); 
window.addEventListener('scroll', throttledInterference);


const body = document.body;


