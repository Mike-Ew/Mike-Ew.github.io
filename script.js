// Smooth scrolling for navigation links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and publications
document.querySelectorAll('.project-card, .publication').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-color);
        position: relative;
    }
    .nav-links a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
function initMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Toggle menu on button click
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        menuButton.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    navbar.appendChild(menuButton);
}

initMobileMenu();

// Path Selector Functionality
document.addEventListener('DOMContentLoaded', function() {
    const pathButtons = document.querySelectorAll('.path-btn');
    const modeButtons = document.querySelectorAll('.mode-btn');
    let currentPath = 'all';
    let currentMode = 'corporate';
    
    // Initialize first mode button as active
    if (modeButtons.length > 0) {
        modeButtons[0].classList.add('active');
    }
    
    // Path button click handler
    pathButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            pathButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected path
            currentPath = this.getAttribute('data-path');
            updateContent();
        });
    });
    
    // Mode button click handler
    modeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all mode buttons
            modeButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentMode = this.getAttribute('data-mode');
            updateContent();
        });
    });
    
    // Update content based on selected path and mode
    function updateContent() {
        // Hide all path-specific content
        document.querySelectorAll('[data-path-content]').forEach(el => {
            el.classList.remove('active');
        });
        
        // Show content for selected path
        document.querySelectorAll(`[data-path-content="${currentPath}"]`).forEach(el => {
            el.classList.add('active');
        });
        
        // Update hero stats based on path
        updateHeroStats();
        
        // Filter projects based on path
        filterProjects();
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('path', currentPath);
        if (currentMode !== 'corporate') {
            url.searchParams.set('mode', currentMode);
        }
        window.history.pushState({}, '', url);
    }
    
    // Update hero statistics based on selected path
    function updateHeroStats() {
        const stats = document.querySelectorAll('.hero-stats .stat');
        const pathStats = {
            all: [
                { number: '5', label: 'Certifications' },
                { number: '3+', label: 'Publications' },
                { number: '520', label: 'Requests/sec' }
            ],
            enterprise: [
                { number: '130+', label: 'Users Managed' },
                { number: '99.9%', label: 'Uptime' },
                { number: '3', label: 'AWS Certs' }
            ],
            aiml: [
                { number: '98.4%', label: 'Model Accuracy' },
                { number: '66%', label: 'Improvement' },
                { number: '3+', label: 'Papers' }
            ],
            devops: [
                { number: '5', label: 'Certifications' },
                { number: '24/7', label: 'Monitoring' },
                { number: 'K8s', label: 'Expertise' }
            ],
            research: [
                { number: '3+', label: 'Publications' },
                { number: '1', label: 'IEEE Paper' },
                { number: '2025', label: 'Latest Work' }
            ],
            systems: [
                { number: 'IoT', label: 'Smart Meter' },
                { number: '38ms', label: 'Latency' },
                { number: '24/7', label: 'Availability' }
            ]
        };
        
        const selectedStats = pathStats[currentPath] || pathStats.all;
        stats.forEach((stat, index) => {
            if (selectedStats[index]) {
                stat.querySelector('.stat-number').textContent = selectedStats[index].number;
                stat.querySelector('.stat-label').textContent = selectedStats[index].label;
            }
        });
    }
    
    // Filter projects based on selected path
    function filterProjects() {
        const projects = document.querySelectorAll('.project-card');
        console.log(`Filtering projects for path: ${currentPath}`);
        projects.forEach(project => {
            const projectPaths = project.getAttribute('data-paths')?.split(',') || ['all'];
            if (currentPath === 'all' || projectPaths.includes(currentPath)) {
                project.style.display = '';
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            } else {
                project.style.display = 'none';
            }
        });
    }
    
    // Check URL parameters on load
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('path');
    const modeParam = urlParams.get('mode');
    
    if (pathParam && document.querySelector(`[data-path="${pathParam}"]`)) {
        document.querySelector(`[data-path="${pathParam}"]`).click();
    }
    
    if (modeParam && document.querySelector(`[data-mode="${modeParam}"]`)) {
        document.querySelector(`[data-mode="${modeParam}"]`).click();
    }
});

// Console Easter Egg
console.log('%c🚀 Welcome to David Mike-Ewewie\'s Portfolio!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cBuilding the future, one model at a time.', 'font-size: 14px; color: #6b7280;');
console.log('%c📧 Contact: contact@davidmike.io', 'font-size: 12px; color: #6b7280;');