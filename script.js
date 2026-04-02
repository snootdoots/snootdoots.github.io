function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) modal.style.display = "none";
    });
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') modal.style.display = 'none';
        });
    }
});
function toggleProject(id) {
    const el = document.getElementById('proj-' + id);
    el.classList.toggle('open');
}

// Flavor Text Animation
const flavorTexts = [
    "enjoying \"senior\" year...",
    "touching grass...",
    "taking pics with digicam...",
    "eating yummy food...",
    "sleeping in...",
    "aurafarming on main..."
];
let flavorTextIndex = 0;
const typingDelay = 50; // ms per char
const erasingDelay = 30; // ms per char
const pauseAfterTyping = 2000; // 2 seconds before delete
const cycleInterval = 2000; // 5 seconds wait before next type

function typeFlavorText() {
    const textSpan = document.getElementById("flavor-text");
    if (!textSpan) return;
    
    const currentText = flavorTexts[flavorTextIndex];
    let charIndex = 0;
    
    textSpan.textContent = "";
    
    function typeChar() {
        if (charIndex < currentText.length) {
            textSpan.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingDelay);
        } else {
            setTimeout(eraseText, pauseAfterTyping);
        }
    }
    
    function eraseText() {
        if (charIndex > 0) {
            textSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, erasingDelay);
        } else {
            flavorTextIndex = (flavorTextIndex + 1) % flavorTexts.length;
            setTimeout(typeFlavorText, cycleInterval);
        }
    }
    
    typeChar();
}

setTimeout(typeFlavorText, cycleInterval);
