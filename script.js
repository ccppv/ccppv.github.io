// Основной JavaScript файл для MVP Dev

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация счетчиков
    initCounters();
    
    // Инициализация анимаций
    initAnimations();
    
    // Инициализация модального окна
    initModal();
    
    // Настройка кнопок
    setupButtons();
    
    // Добавляем класс loaded для дополнительных анимаций
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Настройка кнопок
function setupButtons() {
    // Кнопка "Наши услуги"
    const servicesBtn = document.getElementById('servicesBtn');
    if (servicesBtn) {
        servicesBtn.addEventListener('click', function() {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = servicesSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Кнопка "Связаться" в навигации
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            if (window.modalInstance) {
                window.modalInstance.open();
            }
        });
    }
    
    // Кнопка "Связаться" в героической секции
    const contactBtns = document.querySelectorAll('.btn-secondary');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (window.modalInstance) {
                window.modalInstance.open();
            }
        });
    });
    
    // Кнопка "Обсудить проект" в секции услуг
    const ctaBtns = document.querySelectorAll('.services-cta .btn-primary');
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (window.modalInstance) {
                window.modalInstance.open();
            }
        });
    });
    
    // Ссылки на модальные окна
    const modalLinks = document.querySelectorAll('[onclick*="openModal"]');
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.getAttribute('onclick').match(/openModal\('(.+?)'\)/)[1];
            if (modalType) {
                openModal(modalType);
            }
        });
    });
}

// Инициализация модального окна
function initModal() {
    const modal = new Modal();
    window.modalInstance = modal;
}

// Инициализация счетчиков
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Анимация счетчика
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Инициализация анимаций
function initAnimations() {
    // Параллакс эффекты
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Элементы для анимации
    const animatedElements = document.querySelectorAll('.service-card, .section-header');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
    
    // Анимация сервисных карточек
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            setTimeout(() => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            }, index * 50);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Эффект изменения хедера при скролле
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Мобильное меню
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav-menu');
    
    if (burger) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
}

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff4444' : '#000'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 350px;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Класс модального окна
class Modal {
    constructor() {
        this.modal = null;
        this.overlay = null;
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay';
        
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Закрыть">
                    <span></span>
                    <span></span>
                </button>
                
                <div class="modal-header">
                    <h2>Связаться с нами</h2>
                    <p>Расскажите о вашем проекте</p>
                </div>
                
                <form class="modal-form" id="modalForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="modal-name">Имя *</label>
                            <input type="text" id="modal-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="modal-email">Email *</label>
                            <input type="email" id="modal-email" name="email" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="modal-company">Организация</label>
                        <input type="text" id="modal-company" name="company">
                    </div>
                    
                    <div class="form-group">
                        <label for="modal-project">Расскажите о проекте *</label>
                        <textarea id="modal-project" name="project" rows="4" required placeholder="Опишите ваш проект, цели и требования..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="modal-budget">Бюджет</label>
                        <select id="modal-budget" name="budget">
                            <option value="">Выберите диапазон</option>
                            <option value="50000-100000">50 000 - 100 000 ₽</option>
                            <option value="100000-300000">100 000 - 300 000 ₽</option>
                            <option value="300000-500000">300 000 - 500 000 ₽</option>
                            <option value="500000+">500 000+ ₽</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="modal-submit-btn">
                        <span>Отправить заявку</span>
                        <div class="btn-bg"></div>
                    </button>
                </form>
            </div>
        `;
        
        this.overlay.appendChild(this.modal);
        document.body.appendChild(this.overlay);
    }

    bindEvents() {
        const closeBtn = this.modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.close());
        
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
        
        const form = this.modal.querySelector('#modalForm');
        form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    open() {
        if (this.isOpen) return;
        
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        
        this.overlay.style.display = 'flex';
        
        requestAnimationFrame(() => {
            this.overlay.classList.add('active');
            this.modal.classList.add('active');
        });
    }

    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        document.body.style.overflow = '';
        
        this.overlay.classList.remove('active');
        this.modal.classList.remove('active');
        
        setTimeout(() => {
            this.overlay.style.display = 'none';
            this.resetForm();
        }, 300);
    }

    resetForm() {
        const form = this.modal.querySelector('#modalForm');
        form.reset();
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        if (!data.name || !data.email || !data.project) {
            showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Пожалуйста, введите корректный email', 'error');
            return;
        }
        
        const submitBtn = e.target.querySelector('.modal-submit-btn');
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = 'Отправляем...';
        submitBtn.disabled = true;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            showNotification(`Спасибо, ${data.name}! Мы свяжемся с вами в ближайшее время.`);
            this.close();
        } catch (error) {
            showNotification('Произошла ошибка при отправке. Попробуйте еще раз.', 'error');
        } finally {
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

// Функция для открытия модальных окон с документами
function openModal(type) {
    const documents = {
        privacy: {
            title: 'Политика конфиденциальности',
            content: `
                <h3>1. Общие положения</h3>
                <p>Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта MVP Dev.</p>
                
                <h3>2. Сбор информации</h3>
                <p>Мы собираем только ту информацию, которую вы предоставляете добровольно при заполнении форм обратной связи.</p>
                
                <h3>3. Использование информации</h3>
                <p>Ваши данные используются исключительно для связи с вами по вопросам сотрудничества.</p>
                
                <h3>4. Защита данных</h3>
                <p>Мы принимаем все необходимые меры для защиты ваших персональных данных.</p>
            `
        },
        terms: {
            title: 'Пользовательское соглашение',
            content: `
                <h3>1. Предмет соглашения</h3>
                <p>Настоящее соглашение регулирует отношения между пользователем и компанией MVP Dev.</p>
                
                <h3>2. Права и обязанности</h3>
                <p>Пользователь обязуется использовать сайт в соответствии с его назначением.</p>
                
                <h3>3. Ответственность</h3>
                <p>Компания не несет ответственности за любые убытки, возникшие в результате использования сайта.</p>
                
                <h3>4. Изменения соглашения</h3>
                <p>Компания оставляет за собой право изменять условия соглашения.</p>
            `
        },
        cookies: {
            title: 'Использование cookies',
            content: `
                <h3>1. Что такое cookies</h3>
                <p>Cookies - это небольшие файлы, которые сохраняются на вашем устройстве при посещении сайта.</p>
                
                <h3>2. Как мы используем cookies</h3>
                <p>Мы используем cookies для улучшения работы сайта и анализа посещаемости.</p>
                
                <h3>3. Управление cookies</h3>
                <p>Вы можете отключить cookies в настройках вашего браузера.</p>
                
                <h3>4. Типы cookies</h3>
                <p>Мы используем только технические cookies, необходимые для работы сайта.</p>
            `
        },
        portfolio: {
            title: 'Портфолио',
            content: `
                <h3>Наши проекты</h3>
                <p>В данный момент мы работаем над обновлением портфолио. Скоро здесь появятся примеры наших лучших работ.</p>
                
                <h3>Что мы создаем</h3>
                <ul>
                    <li>Корпоративные сайты</li>
                    <li>Интернет-магазины</li>
                    <li>Веб-приложения</li>
                    <li>Лендинги</li>
                </ul>
                
                <p>Для просмотра актуальных проектов свяжитесь с нами любым удобным способом.</p>
            `
        },
        career: {
            title: 'Карьера',
            content: `
                <h3>Работа в MVP Dev</h3>
                <p>Мы всегда ищем талантливых специалистов для нашей команды.</p>
                
                <h3>Открытые вакансии</h3>
                <ul>
                    <li>Frontend разработчик (React/Vue)</li>
                    <li>Backend разработчик (PHP/Node.js)</li>
                    <li>UI/UX дизайнер</li>
                </ul>
                
                <h3>Что мы предлагаем</h3>
                <ul>
                    <li>Интересные проекты</li>
                    <li>Гибкий график</li>
                    <li>Возможность удаленной работы</li>
                    <li>Профессиональное развитие</li>
                </ul>
                
                <p>Отправьте ваше резюме на hello@mvp-dev.ru</p>
            `
        },
        frontend: {
            title: 'Frontend разработка',
            content: `
                <h3>Что включает Frontend разработка</h3>
                <p>Frontend разработка — это создание пользовательского интерфейса сайта или приложения, с которым непосредственно взаимодействует пользователь.</p>
                
                <h3>Наш подход</h3>
                <p>Мы создаем современные, отзывчивые и интуитивно понятные интерфейсы, которые обеспечивают отличный пользовательский опыт на всех устройствах.</p>
                
                <h3>Технологии</h3>
                <ul>
                    <li><strong>HTML5/CSS3</strong> — семантическая разметка и современные стили</li>
                    <li><strong>JavaScript (ES6+)</strong> — интерактивность и динамический контент</li>
                    <li><strong>React/Vue</strong> — создание сложных интерфейсов и SPA</li>
                    <li><strong>GSAP/Motion</strong> — продвинутые анимации и переходы</li>
                    <li><strong>Responsive Design</strong> — адаптивность для всех устройств</li>
                </ul>
                
                <h3>Преимущества</h3>
                <ul>
                    <li>Высокая производительность и оптимизация</li>
                    <li>Кроссбраузерная совместимость</li>
                    <li>Современный дизайн и анимации</li>
                    <li>Доступность (a11y) и SEO-оптимизация</li>
                </ul>
            `
        },
        backend: {
            title: 'Backend разработка',
            content: `
                <h3>Что включает Backend разработка</h3>
                <p>Backend разработка — это создание серверной части сайта или приложения, которая отвечает за логику, базы данных и обработку данных.</p>
                
                <h3>Наш подход</h3>
                <p>Мы разрабатываем надежные, масштабируемые и безопасные серверные решения, которые обеспечивают стабильную работу вашего проекта.</p>
                
                <h3>Технологии</h3>
                <ul>
                    <li><strong>PHP</strong> — основной язык для серверной разработки</li>
                    <li><strong>MySQL/PostgreSQL</strong> — работа с базами данных</li>
                    <li><strong>RESTful API</strong> — создание интерфейсов для взаимодействия</li>
                    <li><strong>Node.js</strong> — для высоконагруженных приложений</li>
                    <li><strong>Docker</strong> — контейнеризация и развертывание</li>
                </ul>
                
                <h3>Преимущества</h3>
                <ul>
                    <li>Высокая производительность и оптимизация запросов</li>
                    <li>Безопасность и защита от уязвимостей</li>
                    <li>Масштабируемость под растущие нагрузки</li>
                    <li>Интеграция с внешними сервисами и API</li>
                </ul>
            `
        },
        design: {
            title: 'UI/UX дизайн',
            content: `
                <h3>Что включает UI/UX дизайн</h3>
                <p>UI/UX дизайн — это создание визуального облика и пользовательского опыта для сайта или приложения, который будет удобен и понятен пользователям.</p>
                
                <h3>Наш подход</h3>
                <p>Мы создаем минималистичные, функциональные и эстетически привлекательные интерфейсы, которые решают бизнес-задачи и удовлетворяют потребности пользователей.</p>
                
                <h3>Процесс работы</h3>
                <ul>
                    <li><strong>Исследование</strong> — анализ целевой аудитории и конкурентов</li>
                    <li><strong>Прототипирование</strong> — создание структуры и логики взаимодействия</li>
                    <li><strong>UI дизайн</strong> — разработка визуального стиля и компонентов</li>
                    <li><strong>Тестирование</strong> — проверка удобства использования</li>
                    <li><strong>Дизайн-система</strong> — создание библиотеки компонентов</li>
                </ul>
                
                <h3>Преимущества</h3>
                <ul>
                    <li>Интуитивно понятные интерфейсы</li>
                    <li>Современный минималистичный дизайн</li>
                    <li>Повышение конверсии и вовлеченности</li>
                    <li>Единый визуальный язык для всего проекта</li>
                </ul>
            `
        }
    };

    if (!documents[type]) return;

    const doc = documents[type];
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay document-modal';
    
    const modal = document.createElement('div');
    modal.className = 'modal document-modal-content';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Закрыть">
                <span></span>
                <span></span>
            </button>
            
            <div class="document-header">
                <h2>${doc.title}</h2>
            </div>
            
            <div class="document-content">
                ${doc.content}
            </div>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    });
}