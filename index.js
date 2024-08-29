"use strict";
// Create the main scroll button element and style it
const scrollButton = document.createElement('button');
scrollButton.id = 'scrollButton';
scrollButton.textContent = 'Start Scroll';
scrollButton.style.position = 'fixed';
scrollButton.style.right = '20px';
scrollButton.style.bottom = '20px';
scrollButton.style.padding = '10px 20px';
scrollButton.style.backgroundColor = '#007bff';
scrollButton.style.color = 'white';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '5px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.zIndex = '1000';
document.body.appendChild(scrollButton);
let isScrolling = false;
let scrollInterval;
// Create speed control buttons
const slowButton = createSpeedButton('Slow', '느림');
const normalButton = createSpeedButton('Normal', '보통');
const fastButton = createSpeedButton('Fast', '빠름');
function createSpeedButton(id, text) {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    button.style.display = 'none'; // Initially hidden
    button.style.position = 'fixed';
    button.style.right = '20px';
    button.style.bottom = `${60 + (40 * ['Slow', 'Normal', 'Fast'].indexOf(id))}px`;
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    document.body.appendChild(button);
    return button;
}
function startAutoScroll(speed) {
    scrollInterval = window.setInterval(() => {
        window.scrollBy(0, speed);
    }, 10);
}
function stopAutoScroll() {
    if (scrollInterval !== undefined) {
        clearInterval(scrollInterval);
    }
}
function hideSpeedButtons() {
    slowButton.style.display = 'none';
    normalButton.style.display = 'none';
    fastButton.style.display = 'none';
}
// Toggle scroll button and show speed buttons
scrollButton.addEventListener('click', () => {
    if (!isScrolling) {
        slowButton.style.display = 'block';
        normalButton.style.display = 'block';
        fastButton.style.display = 'block';
    }
    else {
        scrollButton.textContent = 'Start Scroll';
        stopAutoScroll();
    }
    isScrolling = !isScrolling;
});
// Event listeners for speed buttons
slowButton.addEventListener('click', () => {
    stopAutoScroll();
    startAutoScroll(2); // 느림 (10ms 간격으로 2px 스크롤)
    scrollButton.textContent = 'Stop Scroll';
    hideSpeedButtons();
});
normalButton.addEventListener('click', () => {
    stopAutoScroll();
    startAutoScroll(4); // 보통 (10ms 간격으로 4px 스크롤)
    scrollButton.textContent = 'Stop Scroll';
    hideSpeedButtons();
});
fastButton.addEventListener('click', () => {
    stopAutoScroll();
    startAutoScroll(8); // 빠름 (10ms 간격으로 8px 스크롤)
    scrollButton.textContent = 'Stop Scroll';
    hideSpeedButtons();
});
