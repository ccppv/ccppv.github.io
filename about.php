<?php
$title = "О нас - MVP Dev";
$current_page = "about";
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
                    <li><a href="index.php" class="nav-link">Главная</a></li>
                    <li><a href="about.php" class="nav-link <?php echo $current_page == 'about' ? 'active' : ''; ?>">О нас</a></li>
                    <li><a href="contact.php" class="nav-link">Контакты</a></li>
                    <li><button class="nav-cta-btn" onclick="window.modalInstance && window.modalInstance.open()">Связаться</button></li>
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
        <section class="page-hero">
            <div class="container">
                <div class="page-hero-content">
                    <h1 class="page-title">О компании</h1>
                    <p class="page-subtitle">Мы создаем цифровые решения, которые работают</p>
                </div>
            </div>
        </section>

        <section class="about-story">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2>Наша история</h2>
                        <p>MVP Dev — это команда профессионалов, специализирующихся на создании современных веб-решений. Мы объединяем креативность дизайна с технической экспертизой, чтобы создавать сайты, которые не только красиво выглядят, но и эффективно работают.</p>
                        
                        <p>Наш подход основан на принципах минимализма и функциональности. Мы верим, что лучшие решения — это те, которые решают реальные проблемы пользователей, не перегружая их лишними элементами.</p>
                    </div>
                    
                    <div class="about-visual">
                        <div class="visual-element"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tech-stack">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Технологии</h2>
                    <p class="section-subtitle">Современный стек для создания качественных решений</p>
                </div>
                
                <div class="tech-grid">
                    <div class="tech-category">
                        <h3>Frontend</h3>
                        <ul class="tech-list">
                            <li>HTML5 / CSS3</li>
                            <li>JavaScript (ES6+)</li>
                            <li>Responsive Design</li>
                            <li>CSS Animations</li>
                        </ul>
                    </div>
                    
                    <div class="tech-category">
                        <h3>Backend</h3>
                        <ul class="tech-list">
                            <li>PHP 8+</li>
                            <li>MySQL</li>
                            <li>RESTful API</li>
                            <li>Server Administration</li>
                        </ul>
                    </div>
                    
                    <div class="tech-category">
                        <h3>Tools & Design</h3>
                        <ul class="tech-list">
                            <li>Figma</li>
                            <li>Adobe Creative Suite</li>
                            <li>Git Version Control</li>
                            <li>Performance Optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="principles">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Наши принципы</h2>
                </div>
                
                <div class="principles-grid">
                    <div class="principle-item">
                        <div class="principle-number">01</div>
                        <h3>Минимализм</h3>
                        <p>Убираем все лишнее, оставляем только то, что действительно важно для пользователя</p>
                    </div>
                    
                    <div class="principle-item">
                        <div class="principle-number">02</div>
                        <h3>Производительность</h3>
                        <p>Каждый сайт оптимизирован для быстрой загрузки и плавной работы</p>
                    </div>
                    
                    <div class="principle-item">
                        <div class="principle-number">03</div>
                        <h3>Адаптивность</h3>
                        <p>Все решения работают одинаково хорошо на любых устройствах</p>
                    </div>
                    
                    <div class="principle-item">
                        <div class="principle-number">04</div>
                        <h3>Качество кода</h3>
                        <p>Чистый, документированный код, который легко поддерживать и развивать</p>
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
                        <li><a href="index.php#services">Frontend разработка</a></li>
                        <li><a href="index.php#services">Backend разработка</a></li>
                        <li><a href="index.php#services">UI/UX дизайн</a></li>
                        <li><a href="index.php#services">Техническая поддержка</a></li>
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
    <script src="cursor.js"></script>
</body>
</html>