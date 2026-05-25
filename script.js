// Script.js - Interactive Logic for Meet Shingala's Portfolio
// Incorporates "Golden Summer Fields" color scheme & advanced UX features

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. CUSTOM MOUSE CURSOR TRAILING
    // ==========================================================================
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('custom-cursor-dot');
    
    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            // Position cursor ring with slight lag
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Position center dot immediately
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        // Add class to scale up ring on hoverable elements
        const hoverables = document.querySelectorAll('a, button, .project-card, .tab-btn, .hobbies-card, .timeline-content, input, textarea');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
            });
        });
    }

    // ==========================================================================
    // 2. THEME SWITCHING (DARK / LIGHT MODE)
    // ==========================================================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Check for local storage preference or default to Dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
    } else {
        body.removeAttribute('data-theme');
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'light') {
                body.removeAttribute('data-theme');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
                showToast('Theme Changed', 'Dark mode activated successfully.', 'success');
            } else {
                body.setAttribute('data-theme', 'light');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
                showToast('Theme Changed', 'Light mode activated successfully.', 'success');
            }
            // Trigger redraw/update of particles on theme change
            if (window.updateParticleColors) {
                window.updateParticleColors();
            }
        });
    }

    // ==========================================================================
    // 3. SCROLL PROGRESS INDICATOR & STICKY NAV
    // ==========================================================================
    const progressBar = document.getElementById('scroll-progress-bar');
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        // Scroll Progress calculation
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }

        // Sticky Navbar Padding contraction
        if (header) {
            if (window.scrollY > 50) {
                header.querySelector('.navbar').classList.add('scrolled');
            } else {
                header.querySelector('.navbar').classList.remove('scrolled');
            }
        }
        
        // Back to top button toggle
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        }
    });

    // Back to top click trigger
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================================================
    // 4. MOBILE HAMBURGER MENU
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile drawer on navigation click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Active state highlighting for navbar sections
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 5. TYPING ROLE ANIMATION
    // ==========================================================================
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const roles = ["AI & Data Science Enthusiast", "Machine Learning Practitioner", "Python Developer", "Tech Innovator"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 40; // Deletes quickly
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Standard typing
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2200; // Stay at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 400; // Quick pause before new word
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // ==========================================================================
    // 6. MOUSE REACTIVE CANVAS PARTICLES (GOLDEN/SAGE THEME)
    // ==========================================================================
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        let mouse = {
            x: null,
            y: null,
            radius: 120
        };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Set dimensions
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }
        window.addEventListener('resize', resizeCanvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Get colors dynamically based on variables
        function getParticleColors() {
            const isLight = body.getAttribute('data-theme') === 'light';
            return {
                primary: isLight ? 'rgba(67, 97, 238, 0.45)' : 'rgba(94, 124, 226, 0.35)', // Royal Blue / Cosmic Blue
                secondary: isLight ? 'rgba(163, 126, 250, 0.35)' : 'rgba(163, 126, 250, 0.3)' // Neon Violet
            };
        }

        let themeColors = getParticleColors();
        window.updateParticleColors = function() {
            themeColors = getParticleColors();
            particlesArray.forEach(p => p.updateColor());
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1.5;
                this.vx = Math.random() * 0.8 - 0.4;
                this.vy = Math.random() * 0.8 - 0.4;
                this.updateColor();
            }

            updateColor() {
                this.color = Math.random() > 0.5 ? themeColors.primary : themeColors.secondary;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wall boundaries
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                // Mouse interaction
                if (mouse.x != null && mouse.y != null) {
                    let dx = this.x - mouse.x;
                    let dy = this.y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let angle = Math.atan2(dy, dx);
                        this.x += Math.cos(angle) * force * 1.5;
                        this.y += Math.sin(angle) * force * 1.5;
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            // Scale count based on screen width
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100);
            for (let i = 0; i < count; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                for (let j = i + 1; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x;
                    const dy = particlesArray[i].y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 110) {
                        const alpha = (110 - distance) / 110 * 0.12;
                        const isLight = body.getAttribute('data-theme') === 'light';
                        ctx.strokeStyle = isLight ? `rgba(67, 97, 238, ${alpha})` : `rgba(94, 124, 226, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    // ==========================================================================
    // 7. CARD SPOTLIGHT & 3D TILT EFFECT
    // ==========================================================================
    const tiltedCards = document.querySelectorAll('.project-card, .skill-category, .stat-card, .cert-card');

    tiltedCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set coordinates variables for spotlights in CSS
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);

            // Apply 3D perspective rotation tilt
            const w = rect.width;
            const h = rect.height;
            const rotateX = -((y - h/2) / h/2) * 5; // Max 5 deg tilt
            const rotateY = ((x - w/2) / w/2) * 5;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            card.style.boxShadow = `0 15px 30px rgba(0,0,0,0.15), var(--shadow-glow)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.setProperty('--x', '50%');
            card.style.setProperty('--y', '50%');
        });
    });

    // Wire up project cards to navigate to details page
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent navigating if user clicked external repository links
            if (e.target.closest('.project-card-links')) {
                return;
            }
            const projectId = card.getAttribute('data-id');
            if (projectId) {
                // Apply a quick scale animation
                card.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    window.location.href = `project.html?id=${projectId}`;
                }, 150);
            }
        });
    });

    // ==========================================================================
    // 8. INTERSECTION OBSERVATIONS (STATS, SKILLS, REVEAL SECTIONS)
    // ==========================================================================
    
    // A. Stats count-up animation
    const statsSection = document.getElementById('about');
    let statsAnimated = false;

    function countUpStats() {
        const numbers = document.querySelectorAll('.stat-number');
        numbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            let current = 0;
            const duration = 1200; // ms
            const stepTime = Math.max(Math.floor(duration / target), 10);
            
            const timer = setInterval(() => {
                current += Math.ceil(target / 40);
                if (current >= target) {
                    num.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    num.textContent = current + '+';
                }
            }, stepTime);
        });
    }

    // B. Progress bars fills animation
    const skillsSection = document.getElementById('skills');
    let skillsAnimated = false;

    function animateProgressBars() {
        const progressFills = document.querySelectorAll('.progress-fill');
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth;
        });
    }

    // Setup intersection observer
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                countUpStats();
                statsAnimated = true;
            }
        });
    }, { threshold: 0.15 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateProgressBars();
                skillsAnimated = true;
            }
        });
    }, { threshold: 0.1 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // C. Scroll elements reveal triggers
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================================================
    // 9. PROJECT SEARCH & FILTERING SYSTEM
    // ==========================================================================
    const searchInput = document.getElementById('project-search');
    const filterTabs = document.querySelectorAll('.tab-btn');
    const cardsContainer = document.getElementById('projects-grid');
    const allProjectCards = document.querySelectorAll('.project-card');

    function filterProjects() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeTab = document.querySelector('.tab-btn.active');
        const activeFilter = activeTab ? activeTab.getAttribute('data-filter') : 'all';

        allProjectCards.forEach(card => {
            const title = card.querySelector('.project-card-title').textContent.toLowerCase();
            const desc = card.querySelector('.project-card-desc').textContent.toLowerCase();
            const techList = Array.from(card.querySelectorAll('.project-card-tech span'))
                .map(span => span.textContent.toLowerCase());
            
            const category = card.getAttribute('data-category');
            
            // Check query match in title, desc, or technology tags
            const matchesSearch = title.includes(query) || 
                                  desc.includes(query) || 
                                  techList.some(tech => tech.includes(query));

            // Check category tab match
            let matchesCategory = false;
            if (activeFilter === 'all') {
                matchesCategory = true;
            } else if (activeFilter === 'ai-ml' && (category === 'ai-ml' || category === 'computer-vision')) {
                matchesCategory = true;
            } else if (activeFilter === 'data-science' && category === 'data-science') {
                matchesCategory = true;
            } else if (activeFilter === 'computer-vision' && category === 'computer-vision') {
                matchesCategory = true;
            } else if (activeFilter === 'web-app' && category === 'web-app') {
                matchesCategory = true;
            }

            // Animate card entries/exits
            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            filterProjects();
        });
    });

    // ==========================================================================
    // 10. CONTACT FORM VALIDATIONS & TOAST SYSTEM
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const fields = [
            { id: 'name', validator: val => val.trim().length > 0, group: 'group-name' },
            { id: 'email', validator: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()), group: 'group-email' },
            { id: 'subject', validator: val => val.trim().length > 0, group: 'group-subject' },
            { id: 'message', validator: val => val.trim().length >= 10, group: 'group-message' }
        ];

        // Wire real-time blur validations
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.addEventListener('blur', () => validateField(field));
                input.addEventListener('input', () => {
                    const group = document.getElementById(field.group);
                    if (group && group.classList.contains('error')) {
                        validateField(field); // revalidate on typing if it was erroring
                    }
                });
            }
        });

        function validateField(field) {
            const input = document.getElementById(field.id);
            const group = document.getElementById(field.group);
            if (!input || !group) return false;

            const isValid = field.validator(input.value);
            if (isValid) {
                group.classList.remove('error');
                group.classList.add('success');
            } else {
                group.classList.remove('success');
                group.classList.add('error');
            }
            return isValid;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let formValid = true;
            fields.forEach(field => {
                const isValid = validateField(field);
                if (!isValid) formValid = false;
            });

            if (formValid) {
                // Mock form submission response
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Dispatching...';

                setTimeout(() => {
                    showToast('Message Sent', 'Your query has been dispatched to Meet. Auto-reply confirmation sent to inbox.', 'success');
                    contactForm.reset();
                    
                    // Clear green validation checks
                    fields.forEach(field => {
                        const group = document.getElementById(field.group);
                        if (group) group.classList.remove('success');
                    });
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 1500);
            } else {
                showToast('Validation Alert', 'Please resolve the highlighted field errors before sending.', 'error');
            }
        });
    }

    // Custom Toast Notification trigger function
    function showToast(title, message, type = 'success') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
        
        toast.innerHTML = `
            <i class="fas ${icon}"></i>
            <div class="toast-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;

        toastContainer.appendChild(toast);
        
        // Trigger reflow for transition
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto remove toast after 4s
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // ==========================================================================
    // 11. AMBIENT LO-FI AUDIO WIDGET
    // ==========================================================================
    const lofiWidget = document.getElementById('lofi-widget');
    const lofiBtn = document.getElementById('lofi-btn');
    const audio = document.getElementById('ambient-audio');

    if (lofiWidget && lofiBtn && audio) {
        lofiBtn.addEventListener('click', () => {
            if (audio.paused) {
                // Play audio (browser triggers playback if interacted)
                audio.play().then(() => {
                    lofiWidget.classList.add('playing');
                    lofiBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    showToast('Ambient Stream On', 'Studio lo-fi stream is active. Adjust system audio.', 'success');
                }).catch(err => {
                    console.log("Audio play blocked by browser policies: ", err);
                    // Trigger animation even if stream blocked for visual feedback
                    lofiWidget.classList.add('playing');
                    lofiBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    showToast('Visual Visualizer Active', 'Sound was blocked by browser. Unmute sound inside tab options.', 'error');
                });
            } else {
                audio.pause();
                lofiWidget.classList.remove('playing');
                lofiBtn.innerHTML = '<i class="fas fa-play"></i>';
                showToast('Ambient Stream Off', 'Studio lofi stream has been paused.', 'success');
            }
        });
    }

    // ==========================================================================
    // 12. INTERACTIVE AI CHATBOT GUIDE WIDGET
    // ==========================================================================
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatToggle = document.getElementById('chatbot-toggle-btn');
    const chatBody = document.getElementById('chatbot-body');
    const chatClose = document.getElementById('chat-close-btn');
    const chatForm = document.getElementById('chat-input-form');
    const chatInput = document.getElementById('chat-input');
    const chatHistory = document.getElementById('chat-history');
    const quickReplies = document.getElementById('chat-quick-replies');

    // Bot Responses Knowledge Base
    const answers = {
        projects: "Meet has built 4 key projects: <br>1. <strong>Data Analysis Agent</strong> (Streamlit platform for autonomous profiling & anomaly detection)<br>2. <strong>CarbonZero 🌱</strong> (Footprint calculator with Altair graphs)<br>3. <strong>Neural Network Viz</strong> (Biological CNN synaptic activation visualizer)<br>4. <strong>Air Drawing 🎨</strong> (Webcam tracking using MediaPipe and OpenCV)<br><br>Click on any card to view detailed setup steps!",
        skills: "Meet's primary expertise includes:<br>- <strong>Languages:</strong> Python, SQL, C++, JavaScript<br>- <strong>AI & ML:</strong> TensorFlow/Keras (CNNs, Deep Learning), Scikit-Learn, OpenCV, MediaPipe<br>- <strong>Analysis:</strong> Pandas, NumPy, Plotly, Altair, Tableau<br>- <strong>DevOps/Web:</strong> Git, Streamlit, Docker, HTML/CSS",
        internships: "Yes, Meet is currently in his final semesters of his B.Tech in <strong>Computer Science (specializing in AI & Data Science)</strong> and is actively seeking <strong>Machine Learning or Data Science internship roles</strong> starting immediately. He is ready to relocate or work remotely.",
        contact: "You can reach out to Meet via:<br>- <strong>Email:</strong> meet.shingala@example.com<br>- <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/meet-shingala-695b742b4/' target='_blank' style='text-decoration: underline; color: var(--accent-primary)'>Meet Shingala Profile</a><br>- <strong>WhatsApp:</strong> Use the floating button on the bottom left!<br><br>Feel free to fill out the form in the Contact section to dispatch a message directly."
    };

    if (chatToggle && chatBody && chatClose) {
        // Toggle open/close body
        chatToggle.addEventListener('click', () => {
            chatBody.classList.toggle('active');
            if (chatBody.classList.contains('active')) {
                chatInput.focus();
            }
        });

        chatClose.addEventListener('click', () => {
            chatBody.classList.remove('active');
        });
        
        // Quick Reply clicks
        if (quickReplies) {
            quickReplies.addEventListener('click', (e) => {
                const button = e.target.closest('.quick-reply-chip');
                if (!button) return;
                
                const questionText = button.getAttribute('data-question');
                const chipLabel = button.textContent;

                // 1. Append User message bubble
                appendMessage(chipLabel, 'user');
                
                // 2. Map label to response keywords
                let key = 'contact';
                if (chipLabel.includes('Projects')) key = 'projects';
                else if (chipLabel.includes('Skills')) key = 'skills';
                else if (chipLabel.includes('Internships')) key = 'internships';

                // 3. Append response with simulation typing delay
                simulateBotResponse(answers[key]);
            });
        }

        // Form submit input text
        if (chatForm && chatInput) {
            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const question = chatInput.value.trim();
                if (question === '') return;

                appendMessage(question, 'user');
                chatInput.value = '';

                // Handle natural language inputs with keyword mappings
                let response = "I'm sorry, I don't quite understand that question. Try clicking on one of the quick replies or email Meet directly at meet.shingala@example.com!";
                const qLower = question.toLowerCase();

                if (qLower.includes('hello') || qLower.includes('hi') || qLower.includes('hey')) {
                    response = "Hello! How can I assist you today? Feel free to ask about Meet's skills, projects, or internship status.";
                } else if (qLower.includes('project') || qLower.includes('work') || qLower.includes('neural') || qLower.includes('drawing')) {
                    response = answers.projects;
                } else if (qLower.includes('skill') || qLower.includes('python') || qLower.includes('tensorflow') || qLower.includes('code')) {
                    response = answers.skills;
                } else if (qLower.includes('intern') || qLower.includes('job') || qLower.includes('hired') || qLower.includes('career')) {
                    response = answers.internships;
                } else if (qLower.includes('contact') || qLower.includes('email') || qLower.includes('linkedin') || qLower.includes('whatsapp')) {
                    response = answers.contact;
                }

                simulateBotResponse(response);
            });
        }

        function appendMessage(text, sender) {
            const msg = document.createElement('div');
            msg.className = `chat-msg ${sender}`;
            msg.innerHTML = text;
            chatHistory.appendChild(msg);
            
            // Auto scroll to bottom
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }

        function simulateBotResponse(replyText) {
            // 1. Append typing animation indicator bubble
            const typingBubble = document.createElement('div');
            typingBubble.className = 'chat-msg bot typing-indicator-bubble';
            typingBubble.innerHTML = `
                <div class="typing-dots">
                    <span class="dot-pulse"></span>
                    <span class="dot-pulse"></span>
                    <span class="dot-pulse"></span>
                </div>
            `;
            chatHistory.appendChild(typingBubble);
            chatHistory.scrollTop = chatHistory.scrollHeight;

            // 2. Remove indicator and reveal message text after 1200ms
            setTimeout(() => {
                typingBubble.remove();
                appendMessage(replyText, 'bot');
            }, 1200);
        }
    }

});
