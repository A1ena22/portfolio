// JavaScript для интерактивности

// Дожидаемся полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Кнопка "Поменять цвет фона" ---
    let colors = ['#f0f4f8', '#e0f7fa', '#ffe0b2', '#c8e6c9', '#ffccbc'];
    let colorIndex = 0;
    
    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.addEventListener('click', function() {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
            updateCounter();
        });
    }
    
    // --- 2. Кнопка "Показать секретное сообщение" ---
    const textButton = document.getElementById('textButton');
    const secretMessage = document.getElementById('secretMessage');
    
    if (textButton && secretMessage) {
        textButton.addEventListener('click', function() {
            if (secretMessage.style.display === 'none') {
                secretMessage.style.display = 'block';
                textButton.textContent = 'Скрыть сообщение';
            } else {
                secretMessage.style.display = 'none';
                textButton.textContent = 'Показать секретное сообщение';
            }
            updateCounter();
        });
    }
    
    // --- 3. Счётчик нажатий на кнопки (интерактивность) ---
    let clickCount = 0;
    const counterDisplay = document.getElementById('clickCounter');
    
    function updateCounter() {
        clickCount++;
        if (counterDisplay) {
            counterDisplay.textContent = 'Кнопки нажаты: ' + clickCount + ' раз';
            // Добавляем эффект мигания при каждом нажатии
            counterDisplay.style.transition = '0.3s';
            counterDisplay.style.color = '#1a4d8c';
            setTimeout(function() {
                counterDisplay.style.color = '#333333';
            }, 300);
        }
    }
    
    // --- 4. Дополнительная интерактивность: клик по визуальному блоку ---
    const visualBlock = document.getElementById('visualBlock');
    if (visualBlock) {
        visualBlock.addEventListener('click', function() {
            alert('🏫 ИрГУПС — твой путь в профессию!');
            updateCounter();
        });
    }
    
    // --- 5. Предупреждение при клике на ссылку ВК (для демонстрации) ---
    const vkLink = document.getElementById('vkLink');
    if (vkLink) {
        vkLink.addEventListener('click', function(event) {
            // Не блокируем переход, просто показываем сообщение
            console.log('Переход на страницу ИрГУПС ВК');
            // Можно раскомментировать строчку ниже, чтобы добавить подтверждение
            // let answer = confirm('Перейти на страницу ИрГУПС во ВКонтакте?');
            // if (!answer) event.preventDefault();
        });
    }
    
    // Приветствие в консоли (для проверки работы JS)
    console.log('Сайт портфолио Бурлаковой Алены загружен! 🚀');
    
});