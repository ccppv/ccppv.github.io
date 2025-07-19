<?php
$title = "MVP Dev - Разработка сайтов под заказ";
$current_page = "home";
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-text">MVP</span>
                    <span class="logo-accent">DEV</span>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.php" class="nav-link <?php echo $current_page == 'home' ? 'active' : ''; ?>">Главная</a></li>
                    <li><a href="about.php" class="nav-link">О нас</a></li>
                    <li><a href="contact.php" class="nav-link">Контакты</a></li>
                    <li><button class="nav-cta-btn" id="contactBtn">Связаться</button></li>
                </ul>
                <div class="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-bg">
                <div class="hero-shape"></div>
                <div class="hero-shape-2"></div>
            </div>
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <div class="hero-badge">Веб-разработка премиум класса</div>
                        <h1 class="hero-title">
                            <span class="title-line">Создаем</span>
                            <span class="title-line">современные</span>
                            <span class="title-line accent">веб-решения</span>
                        </h1>
                        <p class="hero-description">
                            Профессиональная разработка сайтов под заказ с использованием современных технологий и лучших практик веб-разработки. Мы превращаем ваши идеи в эффективные цифровые решения.
                        </p>
                        <div class="hero-buttons">
                            <button class="btn-primary" id="servicesBtn">
                                <span>Наши услуги</span>
                                <div class="btn-bg"></div>
                            </button>
                            <button class="btn-secondary" onclick="window.modalInstance && window.modalInstance.open()">
                                <span>Связаться</span>
                            </button>
                        </div>
                        <div class="hero-clients">
                            <span>Нам доверяют:</span>
                            <div class="client-logos">
                                <a href="https://riko.su/" target="_blank" class="client-logo">
                                    <img src="riko.png" alt="Riko" class="client-logo-img">
                                </a>
                                <div class="client-logo">Клиент 2</div>
                                <div class="client-logo">Клиент 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="scroll-line"></div>
                <span>Скролл</span>
            </div>
        </section>
        <section class="services" id="services">
            <div class="container">
                <div class="section-header">
                    <div class="section-badge">Наши услуги</div>
                    <h2 class="section-title">Что мы делаем</h2>
                    <p class="section-subtitle">Полный цикл разработки от идеи до запуска</p>
                </div>
                
                <div class="services-grid">
                    <div class="service-card" data-service="frontend">
                        <div class="service-icon">
                            <div class="icon-shape"></div>
                        </div>
                        <div class="service-number">01</div>
                        <h3>Frontend разработка</h3>
                        <p>Современные интерфейсы с анимациями и интерактивными элементами</p>
                        <div class="service-tech">HTML, CSS, JavaScript</div>
                        <a href="#" class="service-link" onclick="openModal('frontend')">Подробнее</a>
                    </div>
                    
                    <div class="service-card" data-service="backend">
                        <div class="service-icon">
                            <div class="icon-shape"></div>
                        </div>
                        <div class="service-number">02</div>
                        <h3>Backend разработка</h3>
                        <p>Надежная серверная логика и интеграция с базами данных</p>
                        <div class="service-tech">PHP, MySQL, API</div>
                        <a href="#" class="service-link" onclick="openModal('backend')">Подробнее</a>
                    </div>
                    
                    <div class="service-card" data-service="design">
                        <div class="service-icon">
                            <div class="icon-shape"></div>
                        </div>
                        <div class="service-number">03</div>
                        <h3>UI/UX дизайн</h3>
                        <p>Минималистичный дизайн с фокусом на пользовательский опыт</p>
                        <div class="service-tech">Figma, Adobe XD</div>
                        <a href="#" class="service-link" onclick="openModal('design')">Подробнее</a>
                    </div>
                </div>
                
                <div class="services-cta">
                    <p>Нужен индивидуальный подход?</p>
                    <button class="btn-primary" onclick="window.modalInstance && window.modalInstance.open()">
                        <span>Обсудить проект</span>
                        <div class="btn-bg"></div>
                    </button>
                </div>
            </div>
        </section>

        <section class="stats">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number" data-target="50">0</div>
                        <div class="stat-label">Проектов</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-target="3">0</div>
                        <div class="stat-label">Года опыта</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-target="100">0</div>
                        <div class="stat-label">% качества</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-target="24">0</div>
                        <div class="stat-label">Часа поддержки</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="footer-section">
                    <div class="footer-logo">
                        <span class="logo-text">MVP</span>
                        <span class="logo-accent">DEV</span>
                    </div>
                    <p class="footer-description">
                        Создаем современные веб-решения с фокусом на качество и производительность
                    </p>
                    <div class="footer-social">
                        <a href="#" class="social-link">Telegram</a>
                        <a href="#" class="social-link">WhatsApp</a>
                        <a href="mailto:hello@mvp-dev.ru" class="social-link">Email</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Услуги</h4>
                    <ul class="footer-links">
                        <li><a href="#services">Frontend разработка</a></li>
                        <li><a href="#services">Backend разработка</a></li>
                        <li><a href="#services">UI/UX дизайн</a></li>
                        <li><a href="#services">Техническая поддержка</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Компания</h4>
                    <ul class="footer-links">
                        <li><a href="about.php">О нас</a></li>
                        <li><a href="contact.php">Контакты</a></li>
                        <li><a href="#" onclick="openModal('portfolio')">Портфолио</a></li>
                        <li><a href="#" onclick="openModal('career')">Карьера</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Контакты</h4>
                    <div class="footer-contact">
                        <p><strong>Email:</strong><br>hello@mvp-dev.ru</p>
                        <p><strong>Телефон:</strong><br>+7 (999) 123-45-67</p>
                        <p><strong>Время работы:</strong><br>Пн-Пт: 10:00 - 19:00</p>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-legal">
                    <p>&copy; <?php echo date('Y'); ?> MVP Dev. Все права защищены.</p>
                    <div class="footer-legal-links">
                        <a href="#" onclick="openModal('privacy')">Политика конфиденциальности</a>
                        <a href="#" onclick="openModal('terms')">Пользовательское соглашение</a>
                        <a href="#" onclick="openModal('cookies')">Использование cookies</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script src="magnetic-cursor.js"></script>
</body>
</html>