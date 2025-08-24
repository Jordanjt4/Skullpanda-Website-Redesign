const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');

function updateClouds () {
    let value = window.scrollY;
    let width = window.screen.width;
    let shift = Math.min(value * 0.5, width * 0.2);
    let opacity = (value * 2)/width;

    cloud1.style.transform = `translateX(${shift}px)`;
    cloud1.style.opacity = Math.min(opacity, 1);

    if (window.innerWidth > 500) {
        cloud2.style.transform = `translateX(${-shift}px)`;
        cloud2.style.opacity = Math.min(opacity, 1);
    } 
}

document.addEventListener('scroll', updateClouds);
window.addEventListener("resize", updateClouds);