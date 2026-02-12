// Tab Switching Function
function switchTab(tabId, button) {
  // Remove active class from all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.nav-tab');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to selected section and button
  document.getElementById(tabId).classList.add('active');
  button.classList.add('active');
  
  // Smooth scroll to top of content
  document.querySelector('.content-wrapper').scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });
}

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.style.width || '0%';
          const width = bar.getAttribute('style').match(/width:\s*(\d+)%/);
          if (width) {
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = width[1] + '%';
            }, 50);
          }
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observe skills section
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
  
  // Add stagger animation to cards
  const animateCards = (selector, delay = 100) => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * delay);
    });
  };
  
  // Animate elements on page load
  setTimeout(() => {
    animateCards('.highlight-card', 150);
  }, 500);
  
  // Re-animate cards when switching tabs
  const originalSwitchTab = window.switchTab;
  window.switchTab = function(tabId, button) {
    originalSwitchTab(tabId, button);
    
    setTimeout(() => {
      if (tabId === 'projects') {
        animateCards('.project-card', 150);
      } else if (tabId === 'skills') {
        animateCards('.skill-category', 100);
      } else if (tabId === 'about') {
        animateCards('.highlight-card', 150);
      }
    }, 100);
  };
  
  // Smooth scroll for CTA button
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.querySelector('[href="#contact"]');
      if (contactSection) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Add ripple effect to buttons
  const addRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  };
  
  // Add parallax effect to orbs
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
  });
  
  const animate = () => {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;
    
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 20;
      orb.style.transform = `translate(${currentX * speed}px, ${currentY * speed}px)`;
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();
  
  // Add floating animation to particles
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    const duration = 20 + Math.random() * 10;
    const delay = Math.random() * 5;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
  });
  
  // Typewriter effect for name (optional - can be enabled)
  const enableTypewriter = false;
  if (enableTypewriter) {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
      const text = nameElement.textContent;
      nameElement.textContent = '';
      nameElement.style.opacity = '1';
      
      let index = 0;
      const typeWriter = () => {
        if (index < text.length) {
          nameElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 500);
    }
  }
  
  // Add hover sound effect (optional - disabled by default)
  const enableSounds = false;
  if (enableSounds) {
    const hoverSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0PVqvn77BdGAg+ltryxXElBi2Czs');
  }
  
  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll('.timeline-item, .education-card');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        setTimeout(() => {
          entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  fadeElements.forEach(el => fadeObserver.observe(el));
  
  // Add custom cursor trail effect (optional - can be enabled)
  const enableCursorTrail = false;
  if (enableCursorTrail) {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    
    if (circles.length === 0) {
      // Create circles for cursor trail
      for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        document.body.appendChild(circle);
      }
    }
    
    document.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });
    
    const allCircles = document.querySelectorAll('.circle');
    allCircles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = `hsl(${index * 18}, 70%, 50%)`;
    });
    
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;
      
      allCircles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.transform = `scale(${(allCircles.length - index) / allCircles.length})`;
        
        circle.x = x;
        circle.y = y;
        
        const nextCircle = allCircles[index + 1] || allCircles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      
      requestAnimationFrame(animateCircles);
    };
    
    if (allCircles.length > 0) {
      animateCircles();
    }
  }
});

// Scroll reveal animation
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.timeline-item, .project-card');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
});

// Add console message
console.log('%c🚀 Portfolio by Shiva Bodduna', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c💼 Full Stack Developer | AI/ML Specialist', 'color: #ec4899; font-size: 14px;');
console.log('%c📧 Contact: shivabodduna5@gmail.com', 'color: #10b981; font-size: 12px;');