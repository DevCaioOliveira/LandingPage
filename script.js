/* ========================================================== */
/* JAVASCRIPT ES6+ - PORTFÓLIO INTERATIVO 2026              */
/* ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa ícones do Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  /* -------------------------------------------------------- */
  /* 1. INDICADOR DE PROGRESSO DE SCROLL                       */
  /* -------------------------------------------------------- */
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  /* -------------------------------------------------------- */
  /* 2. EFEITO DIGITAÇÃO AUTOMÁTICA (TYPEWRITER)              */
  /* -------------------------------------------------------- */
  // ONDE PERSONALIZAR: Adicione ou edite os cargos abaixo
  const roles = [
    'Interfaces Extraordinárias',
    'Aplicações Web de Alta Performance',
    'Experiências de Usuário Centradas em UX',
    'Sistemas Escaláveis com React & Node'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById('typewriter');

  function typeEffect() {
    if (!typewriterElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; // Pausa quando termina de digitar
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  /* -------------------------------------------------------- */
  /* 3. SCROLL REVEAL ANIMATION                               */
  /* -------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Executa na carga inicial

  /* -------------------------------------------------------- */
  /* 4. DESTACAR SEÇÃO ATIVA NO MENU DA NAV                   */
  /* -------------------------------------------------------- */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  /* -------------------------------------------------------- */
  /* 5. MENU MOBILE TOGGLE                                     */
  /* -------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* -------------------------------------------------------- */
  /* 6. FILTRO DINÂMICO DE PROJETOS                           */
  /* -------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza estado ativo dos botões
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-violet-600', 'text-white');
        b.classList.add('bg-slate-900', 'text-slate-400');
      });

      btn.classList.add('active', 'bg-violet-600', 'text-white');
      btn.classList.remove('bg-slate-900', 'text-slate-400');

      const filterValue = btn.getAttribute('data-filter');

      // Aplica o filtro nos cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* -------------------------------------------------------- */
  /* 7. VALIDAÇÃO DINÂMICA DO FORMULÁRIO                      */
  /* -------------------------------------------------------- */
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form) {
    const inputs = form.querySelectorAll('input, textarea');

    // Validação em tempo real no blur/input
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateInput(input));
    });

    function validateInput(input) {
      const errorMsg = input.nextElementSibling;
      let isValid = true;

      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(input.value.trim());
      } else if (input.tagName.toLowerCase() === 'textarea') {
        isValid = input.value.trim().length >= 10;
      } else {
        isValid = input.value.trim() !== '';
      }

      if (!isValid) {
        input.classList.add('border-pink-500');
        if (errorMsg && errorMsg.classList.contains('error-msg')) {
          errorMsg.classList.remove('hidden');
        }
      } else {
        input.classList.remove('border-pink-500');
        if (errorMsg && errorMsg.classList.contains('error-msg')) {
          errorMsg.classList.add('hidden');
        }
      }

      return isValid;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isFormValid = true;
      inputs.forEach(input => {
        if (!validateInput(input)) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Feedback visual de envio bem-sucedido
        formStatus.classList.remove('hidden', 'bg-red-500/10', 'text-red-400');
        formStatus.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border', 'border-emerald-500/20');
        formStatus.textContent = '⚡ Mensagem enviada com sucesso! Entrarei em contato em breve.';

        form.reset();

        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 5000);
      }
    });
  }

  /* -------------------------------------------------------- */
  /* 8. INTERATIVIDADE TILT 3D NO HERO CARD                   */
  /* -------------------------------------------------------- */
  const tiltCard = document.getElementById('tilt-card');
  if (tiltCard) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      tiltCard.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
    });

    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }
});
