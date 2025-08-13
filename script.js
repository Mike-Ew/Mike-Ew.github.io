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

// Role Selector Functionality
document.addEventListener('DOMContentLoaded', function() {
    const roleButtons = document.querySelectorAll('.role-btn');
    const pathButtons = document.querySelectorAll('.path-btn');
    const modeButtons = document.querySelectorAll('.mode-btn');
    let currentRole = 'all';
    let currentPath = 'all';
    let currentMode = 'corporate';
    
    // Initialize first mode button as active
    if (modeButtons.length > 0) {
        modeButtons[0].classList.add('active');
    }
    
    // Role button click handler
    roleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            roleButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected role
            currentRole = this.getAttribute('data-role');
            updateContent();
        });
    });
    
    // Path button click handler (for backward compatibility)
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
    
    // Update content based on selected role and mode
    function updateContent() {
        // Use role if available, otherwise fall back to path
        const activeFilter = currentRole || currentPath;
        
        // Hide all path-specific content
        document.querySelectorAll('[data-path-content]').forEach(el => {
            el.classList.remove('active');
        });
        
        // Show content for selected path/role
        document.querySelectorAll(`[data-path-content="${activeFilter}"]`).forEach(el => {
            el.classList.add('active');
        });
        
        // Update hero stats based on role/path
        updateHeroStats();
        
        // Filter projects based on role/path
        filterProjects();
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('filter', activeFilter);
        if (currentMode !== 'corporate') {
            url.searchParams.set('mode', currentMode);
        }
        window.history.pushState({}, '', url);
    }
    
    // Update hero statistics based on selected role/path
    function updateHeroStats() {
        const stats = document.querySelectorAll('.stat-card');
        const activeFilter = currentRole || currentPath;
        const roleStats = {
            all: [
                { number: '8', label: 'AWS & CompTIA Certs' },
                { number: '4', label: 'Publications' },
                { number: '130+', label: 'Team Managed' },
                { number: '<10ms', label: 'P99 Latency' }
            ],
            infrastructure: [
                { number: '130+', label: 'Users Managed' },
                { number: '99.9%', label: 'Uptime' },
                { number: '$200K', label: 'Annual Savings' },
                { number: '3', label: 'AWS Certs' }
            ],
            aiml: [
                { number: '98.4%', label: 'Model Accuracy' },
                { number: '1M+', label: 'Daily Predictions' },
                { number: '66%', label: 'Error Reduction' },
                { number: '4', label: 'Papers' }
            ],
            research: [
                { number: '4', label: 'Publications' },
                { number: 'IEEE', label: 'FIE 2025' },
                { number: '500GB+', label: 'Dataset Size' },
                { number: '224', label: 'HPC Cores' }
            ]
        };
        
        const selectedStats = roleStats[activeFilter] || roleStats.all;
        stats.forEach((stat, index) => {
            if (selectedStats[index]) {
                stat.querySelector('.stat-number').textContent = selectedStats[index].number;
                stat.querySelector('.stat-label').textContent = selectedStats[index].label;
            }
        });
    }
    
    // Filter projects based on selected role/path
    function filterProjects() {
        const projects = document.querySelectorAll('.project-card');
        const activeFilter = currentRole || currentPath;
        console.log(`Filtering projects for: ${activeFilter}`);
        
        projects.forEach(project => {
            const projectRoles = project.getAttribute('data-roles')?.split(',') || [];
            const projectPaths = project.getAttribute('data-paths')?.split(',') || ['all'];
            const relevantTags = [...projectRoles, ...projectPaths];
            
            if (activeFilter === 'all' || relevantTags.includes(activeFilter)) {
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