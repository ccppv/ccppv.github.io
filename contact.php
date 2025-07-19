<?php
$title = "Контакты - MVP Dev";
$current_page = "contact";
$message = "";

// Обработка формы
if ($_POST) {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $subject = htmlspecialchars($_POST['subject'] ?? '');
    $messageText = htmlspecialchars($_POST['message'] ?? '');
    
    if ($name && $email && $messageText) {
        // Здесь можно добавить отправку email или сохранение в базу данных
        $message = "Спасибо за ваше сообщение, $name! Мы свяжемся с вами в ближайшее время.";
        $messageType = "success";
    } else {
        $message = "Пожалуйста, заполните все обязательные поля.";
        $messageType = "error";
    }
}
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
                    <li><a href="about.php" class="nav-link">О нас</a></li>
                    <li><a href="contact.php" class="nav-link <?php echo $current_page == 'contact' ? 'active' : ''; ?>">Контакты</a></li>
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
        <section class="contact-hero">
            <div class="container">
                <div class="page-hero-content">
                    <h1 class="page-title">Контакты</h1>
                    <p class="page-subtitle">Готовы обсудить ваш проект? Свяжитесь с нами</p>
                </div>
            </div>
        </section>

        <section class="contact-form-section">
            <div class="container">
                <div class="form-container">
                    <?php if ($message): ?>
                        <div class="message <?php echo $messageType; ?>">
                            <?php echo $message; ?>
                        </div>
                    <?php endif; ?>
                    
                    <form method="POST" action="" id="contactForm">
                        <div class="form-group">
                            <label for="name">Имя *</label>
                            <input type="text" id="name" name="name" required value="<?php echo $_POST['name'] ?? ''; ?>">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required value="<?php echo $_POST['email'] ?? ''; ?>">
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">Тема</label>
                            <input type="text" id="subject" name="subject" value="<?php echo $_POST['subject'] ?? ''; ?>">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Сообщение *</label>
                            <textarea id="message" name="message" required><?php echo $_POST['message'] ?? ''; ?></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn">
                            Отправить сообщение
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <section class="contact-info">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-item">
                        <h3>Email</h3>
                        <p>hello@mvp-dev.ru</p>
                    </div>
                    
                    <div class="contact-item">
                        <h3>Телефон</h3>
                        <p>+7 (999) 123-45-67</p>
                    </div>
                    
                    <div class="contact-item">
                        <h3>Время работы</h3>
                        <p>Пн-Пт: 10:00 - 19:00</p>
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
    <script>
        // Дополнительная валидация формы
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                showNotification('Пожалуйста, заполните все обязательные поля', 'error');
                return false;
            }
            
            // Простая проверка email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                showNotification('Пожалуйста, введите корректный email', 'error');
                return false;
            }
        });
    </script>
    <script src="magnetic-cursor.js"></script>
</body>
</html>