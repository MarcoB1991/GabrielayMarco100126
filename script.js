function cambiaLingua(lang) {
            document.querySelectorAll("[data-it]").forEach(el => {
                el.textContent = el.getAttribute(`data-${lang}`);
            });
            localStorage.setItem("lang", lang);
        }

        document.getElementById("btn-it").addEventListener("click", () => cambiaLingua("it"));
        document.getElementById("btn-es").addEventListener("click", () => cambiaLingua("es"));

        const savedLang = localStorage.getItem("lang") || "it";
        cambiaLingua(savedLang);
                
document.addEventListener('DOMContentLoaded', function () {
    // Riferimenti agli elementi del DOM
    const header = document.getElementById('header');
    const menuIcon = document.getElementById('menuIcon');
    const closeMenu = document.getElementById('closeMenu');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links ul li a');

    // Funzione per gestire lo scroll e cambiare lo stile dell'header
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Funzione per aprire il menu mobile
    menuIcon.addEventListener('click', function () {
        navLinks.classList.add('active');
    });

    // Funzione per chiudere il menu mobile
    closeMenu.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });

    // Chiudere il menu quando si clicca su un link
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    // Gestione responsive del menu
    function handleResponsiveMenu() {
        if (window.innerWidth > 768) {
            // Per desktop: assicurati che il menu sia sempre visibile e nella modalità corretta
            navLinks.classList.remove('active');
        }
    }

    // Esegui al caricamento e al ridimensionamento della finestra
    window.addEventListener('resize', handleResponsiveMenu);
    handleResponsiveMenu();

    // Animazione di fade-in per gli elementi quando diventano visibili
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.section-title, .storia-text, .timeline-item, .gallery-item, .detail-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    // Aggiungere classe CSS per animazione fade-in
    const style = document.createElement('style');
    style.innerHTML = `
      .section-title, .storia-text, .timeline-item, .gallery-item, .detail-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in {
          opacity: 1;
          transform: translateY(0);
      }
  `;
    document.head.appendChild(style);

    // Esegui l'animazione quando la pagina carica e quando scrolli
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Esegui all'avvio per gli elementi già visibili

    // Scroll fluido per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('contextmenu', event => event.preventDefault());

    const videoElement = document.querySelector('.video-container video');
    if (videoElement) {
        videoElement.classList.add('fade-in-video');
    }

    // Controllo play/pause del video Save The Date
    const video = document.getElementById('saveTheDateVideo');
    const overlay = document.getElementById('videoOverlay');
    const playPauseIcon = document.getElementById('playPauseButton');

    let musicStarted = false; // flag per evitare riproduzione multipla

    overlay.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            video.setAttribute('controls', '');
            video.parentElement.classList.add('video-playing');

            // Avvia musica solo al primo click
            if (!musicStarted) {
                const playPromise = backgroundMusic.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Musica non avviata:', error);
                    });
                }
                musicStarted = true;
            }

        } else {
            video.pause();
            video.parentElement.classList.remove('video-playing');
        }
    });

function countdown() {
    const countdownDate = new Date("January 10, 2026 12:00:00").getTime(); // Imposta la data di scadenza

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Evento iniziato!";
        }
    }, 1000);
}
countdown();

});