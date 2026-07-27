// Menú hamburguesa para móviles
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.innerHTML = navMenu.classList.contains('active') 
    ? "<i class='bx bx-x'></i>" 
    : "<i class='bx bx-menu'></i>";
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.innerHTML = "<i class='bx bx-menu'></i>";
  });
});

// Animación al hacer scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Dejar de observar una vez animado
    }
  });
};

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// Simular envío de formulario
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button');
  const originalText = btn.innerText;
  
  btn.innerText = 'Enviando...';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.innerText = '¡Mensaje Enviado!';
    btn.style.background = '#10b981'; // Color verde de éxito
    contactForm.reset();
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = '';
      btn.style.opacity = '1';
    }, 3000);
  }, 1500);
});
