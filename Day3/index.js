let dot = document.querySelector(".dot");

window.addEventListener('mousemove', function(e){
    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
});
