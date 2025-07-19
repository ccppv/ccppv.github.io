// Простой и надежный скрипт для кастомного курсора
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    // Отключаем на мобильных устройствах
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }
    
    // Основная функция для обновления позиции курсора
    function updateCursorPosition(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
        
        // Проверяем, находится ли курсор над темным элементом
        checkDarkBackground(e);
    }
    
    // Функция для проверки темного фона
    function checkDarkBackground(e) {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (!element) return;
        
        // Проверяем, находится ли элемент на темном фоне
        const darkElements = ['.footer', '.stats', '.principles', '.services-cta'];
        let isDark = false;
        
        // Проверяем по классам
        for (const selector of darkElements) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                ) {
                    isDark = true;
                }
            });
        }
        
        // Обновляем цвет курсора
        if (isDark) {
            cursor.style.background = '#fff';
            follower.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            cursor.style.background = '#000';
            follower.style.borderColor = 'rgba(0, 0, 0, 0.2)';
        }
    }
    
    // Эффекты при наведении на интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .service-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.2)';
            
            // Проверяем, находится ли элемент на темном фоне
            const isDark = el.closest('.footer') || el.closest('.stats') || el.closest('.principles');
            
            if (isDark) {
                follower.style.borderColor = '#fff';
            } else {
                follower.style.borderColor = '#000';
            }
            
            follower.style.borderWidth = '2px';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.borderWidth = '1px';
        });
    });
    
    // Добавляем обработчик события движения мыши
    document.addEventListener('mousemove', updateCursorPosition);
});