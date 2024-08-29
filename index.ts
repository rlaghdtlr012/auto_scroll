// 기본 버튼 생성
const scrollButton = document.createElement('button');
scrollButton.id = 'scrollButton';
scrollButton.textContent = 'Start Scroll';
scrollButton.style.position = 'fixed';
scrollButton.style.right = '20px';
scrollButton.style.bottom = '60px';
scrollButton.style.padding = '10px 20px';
scrollButton.style.backgroundColor = '#007bff';
scrollButton.style.color = 'white';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '5px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.zIndex = '1000';
document.body.appendChild(scrollButton);

let isScrolling: boolean = false;
let scrollInterval: number | undefined;

// 스크롤 속도 버튼 생성
const slowButton = createSpeedButton('Slow', '느림');
const normalButton = createSpeedButton('Normal', '보통');
const fastButton = createSpeedButton('Fast', '빠름');

function createSpeedButton(id: string, text: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    button.style.display = 'none';
    button.style.position = 'fixed';
    button.style.right = '20px';
    button.style.bottom = `${100 + (40 * ['Slow', 'Normal', 'Fast'].indexOf(id))}px`;
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

function startAutoScroll(speed: number): void {
    scrollInterval = window.setInterval(() => {
        window.scrollBy(0, speed);

        // 스크롤이 끝까지 갔을 경우, stop scroll
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            stopAutoScroll();
            scrollButton.textContent = 'Start Scroll';
            isScrolling = false;
        }
    }, 10);
}

function stopAutoScroll(): void {
    if (scrollInterval !== undefined) {
        clearInterval(scrollInterval);
    }
}

function hideSpeedButtons() {
    slowButton.style.display = 'none';
    normalButton.style.display = 'none';
    fastButton.style.display = 'none';
}

// 스크롤 속도 버튼 토글
scrollButton.addEventListener('click', () => {
    if (!isScrolling) {
        slowButton.style.display = 'block';
        normalButton.style.display = 'block';
        fastButton.style.display = 'block';
    } else {
        scrollButton.textContent = 'Start Scroll';
        stopAutoScroll();
    }
    isScrolling = !isScrolling;
});

// 스크롤 속도 버튼 이벤트 리스너
slowButton.addEventListener('click', () => {
    stopAutoScroll();
    startAutoScroll(1); // 느림 (10ms 간격으로 1px 스크롤)
    scrollButton.textContent = 'Stop Scroll';
    hideSpeedButtons();
});

normalButton.addEventListener('click', () => {
    stopAutoScroll();
    startAutoScroll(2); // 보통 (10ms 간격으로 2px 스크롤)
    scrollButton.textContent = 'Stop Scroll';
    hideSpeedButtons();
});

fastButton.addEventListener('click', () => {
    stopAutoScroll();
    startAutoScroll(3); // 빠름 (10ms 간격으로 3px 스크롤)
    scrollButton.textContent = 'Stop Scroll';
    hideSpeedButtons();
});
