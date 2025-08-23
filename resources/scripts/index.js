const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');

function updateClouds () {
    let value = window.scrollY;
    let fade = window.screen.width;
    let opacity = value/fade;

    if (window.innerWidth > 300) {
        cloud1.style.transform = `translateX(${value * 0.5}px)`;
        cloud1.style.opacity = Math.min(opacity, 1);
        cloud2.style.transform = `translateX(${-value * 0.5}px)`;
        cloud2.style.opacity = Math.min(opacity, 1);
    }
}

document.addEventListener('scroll', updateClouds);
window.addEventListener("resize", updateClouds);