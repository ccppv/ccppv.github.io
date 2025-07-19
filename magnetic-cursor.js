// Магнитный курсор, который огибает кнопки
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы курсора
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Проверяем, существуют ли элементы
    if (!cursor || !follower) return;
    
    // Отключаем на мобильных устройствах
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }
    
    // Скрываем стандартный курсор
    document.body.style.cursor = 'none';
    
    // Переменные для отслеживания состояния
    let buttons = [];
    let currentButton = null;
    
    // Находим все интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .nav-link, .client-logo, .btn-primary, .btn-secondary, .nav-cta-btn');
    
    // Создаем массив с информацией о кнопках
    interactiveElements.forEach(el => {
        buttons.push({
            element: el,
            rect: el.getBoundingClientRect()
        });
        
        // Добавляем обработчики событий
        el.addEventListener('mouseenter', () => {
            currentButton = el;
            
            // Увеличиваем точку
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            
            // Проверяем, находится ли кнопка на темном фоне
            const isDark = isElementDark(el);
            
            if (isDark) {
                cursor.style.backgroundColor = '#fff';
                follower.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            } else {
                cursor.style.backgroundColor = '#000';
                follower.style.borderColor = 'rgba(0, 0, 0, 0.5)';
            }
        });
        
        el.addEventListener('mouseleave', () => {
            currentButton = null;
            
            // Возвращаем обычный размер точки
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            
            // Проверяем, находится ли курсор на темном фоне
            const element = document.elementFromPoint(
                parseInt(cursor.style.left), 
                parseInt(cursor.style.top)
            );
            
            if (element) {
                const isDark = isElementDark(element);
                
                if (isDark) {
                    cursor.style.backgroundColor = '#fff';
                    follower.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                } else {
                    cursor.style.backgroundColor = '#000';
                    follower.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                }
            }
        });
    });
    
    // Обновляем размеры кнопок при изменении размера окна
    window.addEventListener('resize', () => {
        buttons.forEach(button => {
            button.rect = button.element.getBoundingClientRect();
        });
    });
    
    // Функция для проверки, является ли элемент темным
    function isElementDark(element) {
        // Проверяем по классам
        if (
            element.classList.contains('footer') ||
            element.closest('.footer') ||
            element.classList.contains('stats') ||
            element.closest('.stats') ||
            element.classList.contains('principles') ||
            element.closest('.principles')
        ) {
            return true;
        }
        
        // Проверяем по цвету фона
        let current = element;
        while (current && current !== document.body) {
            const style = window.getComputedStyle(current);
            const bgColor = style.backgroundColor;
            
            if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                const rgb = bgColor.match(/\d+/g);
                if (rgb) {
                    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                    if (brightness < 128) {
                        return true;
                    }
                }
            }
            
            current = current.parentElement;
        }
        
        return false;
    }
    
    // Функция для обновления позиции курсора
    function updateCursor(e) {
        // Точка всегда следует за курсором
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Проверяем, находится ли курсор над кнопкой
        if (currentButton) {
            const rect = currentButton.getBoundingClientRect();
            
            // Устанавливаем размер и форму follower, чтобы он огибал кнопку
            follower.style.width = rect.width + 20 + 'px';
            follower.style.height = rect.height + 20 + 'px';
            follower.style.borderRadius = getComputedStyle(currentButton).borderRadius;
            if (parseFloat(follower.style.borderRadius) === 0) {
                follower.style.borderRadius = '4px';
            }
            
            // Центрируем follower на кнопке
            follower.style.left = (rect.left + rect.width / 2) + 'px';
            follower.style.top = (rect.top + rect.height / 2) + 'px';
            
            // Увеличиваем толщину границы
            follower.style.borderWidth = '2px';
        } else {
            // Иначе follower следует за курсором
            follower.style.width = '40px';
            follower.style.height = '40px';
            follower.style.borderRadius = '50%';
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
            follower.style.borderWidth = '1px';
            
            // Проверяем, находится ли курсор над темным элементом
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (element) {
                const isDark = isElementDark(element);
                
                if (isDark) {
                    cursor.style.backgroundColor = '#fff';
                    follower.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                } else {
                    cursor.style.backgroundColor = '#000';
                    follower.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                }
            }
        }
    }
    
    // Добавляем обработчик движения мыши
    document.addEventListener('mousemove', updateCursor);
});