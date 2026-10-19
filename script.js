/**
 * ============================================================================
 * SCRIPT PRINCIPAL - PORTFÓLIO & LANDING PAGE 2026
 * Autor/Customização: [Seu Nome]
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. EFEITO DE DIGITAÇÃO AUTOMÁTICA (TYPEWRITER)
       ========================================== */
    const typewriterElement = document.getElementById('typewriter');
    
    // CONFIGURAÇÃO DO USUÁRIO: Altere os cargos abaixo conforme sua especialidade
    const roles = [
        "Engenheiro Front-End Sênior",
        "Especialista em UI/UX",
        "Arquiteto de Sistemas Web",
        "Criador de Experiências Digitais"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriterEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pausa antes de apagar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriterEffect, typingSpeed);
    }

    if (typewriterElement) {
        typeWriterEffect();
    }


    /* ==========================================
       2. MENU MOBILE & HAMBÚRGUER
       ========================================== */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    /* ==========================================
       3. INDICADOR DE SEÇÃO ATIVA & SCROLL SPY
       ========================================== */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);


    /* ==========================================
       4. FILTRO DE PROJETOS (MODULAR)
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos os botões e adiciona no clicado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });


    /* ==========================================
       5. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
       ========================================== */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Campos
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            // Validação de Nome
            if (nameInput.value.trim() === '') {
                nameInput.parentElement.classList.add('has-error');
                nameInput.classList.add('error');
                isValid = false;
            } else {
                nameInput.parentElement.classList.remove('has-error');
                nameInput.classList.remove('error');
            }

            // Validação de E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('has-error');
                emailInput.classList.add('error');
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove('has-error');
                emailInput.classList.remove('error');
            }

            // Validação de Assunto
            if (subjectInput.value.trim() === '') {
                subjectInput.parentElement.classList.add('has-error');
                subjectInput.classList.add('error');
                isValid = false;
            } else {
                subjectInput.parentElement.classList.remove('has-error');
                subjectInput.classList.remove('error');
            }

            // Validação de Mensagem
            if (messageInput.value.trim() === '') {
                messageInput.parentElement.classList.add('has-error');
                messageInput.classList.add('error');
                isValid = false;
            } else {
                messageInput.parentElement.classList.remove('has-error');
                messageInput.classList.remove('error');
            }

            // Se válido, simula o envio
            if (isValid) {
                // CONFIGURAÇÃO DO USUÁRIO: Aqui você pode integrar com EmailJS, Formspree ou sua API de backend
                contactForm.reset();
                formSuccess.style.display = 'block';
                
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }

});
