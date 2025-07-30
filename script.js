window.addEventListener('load', function () {
    setTimeout(() => {
        document.querySelector('.loader-container').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-container').style.display = 'none';
        }, 500);
    }, 1500);
});

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-times');
});


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-times');
    });
});


window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    document.querySelector('.hero-bg').style.transform = `translateY(${scrollY * 0.5}px)`;
    document.querySelector('.hero-title').style.transform = `translateY(${scrollY * 0.2}px)`;
    document.querySelector('.hero-subtitle').style.transform = `translateY(${scrollY * 0.1}px)`;
});


function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

       
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;

        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

       
        particle.style.opacity = Math.random() * 0.5 + 0.3;

        
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;

       
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();


gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('section').forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            if (i !== 0) {
                gsap.to(section, {
                    opacity: 0.8,
                    y: 50,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        }
    });
});


gsap.utils.toArray('section:not(#hero)').forEach(section => {
    gsap.set(section, { opacity: 0, y: 50 });
});

gsap.utils.toArray('.skill-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1
    });
});


const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    gsap.to(bar, {
        scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        width: value + '%',
        duration: 1.5,
        ease: 'power2.out'
    });
});

gsap.from('.hero-title span', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
    delay: 2
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 2.6
});

gsap.from('#hero .btn', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 2.8
});

function handleSubmit(event) {
    event.preventDefault(); // Prevents form from submitting
    alert("The data is submitted");
}
