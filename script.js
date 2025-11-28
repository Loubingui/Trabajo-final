const noiseOverlay = document.getElementById('noise-overlay');
let interferenceTimeout;

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


window.addEventListener('scroll', triggerInterference);


const body = document.body;


body.style.cursor = 'url("RUTA_CURSOR_PUNK.png"), default';