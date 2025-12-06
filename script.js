import { sections } from './html_page.js';

// ===================================================================
// FUNZIONI
// ===================================================================
function openTechWindow(isButtonClick = false){
    if(isButtonClick && !techSubmenu.classList.contains('open')){
        techArrow.classList.add('open');
        techSubmenu.classList.add('open');
        //console.log("Apro il sottomenu delle tecnologie perché ho cliccato sul pulsante Sensori");
    }
    else if(!isButtonClick){
        const isOpen = techSubmenu.classList.toggle('open');
        techArrow.classList.toggle('open', isOpen); 
    }
}
// ===================================================================
// INFORMAZIONI DELLE SIDEBAR
// ===================================================================
const uiContent = {
    content: {
        'site.title': 'Robotica Aerospaziale',
        'site.subtitle': 'Esplorazione del Futuro',
        'menu.home': 'Home',
        'menu.about': "Cos'è la Robotica Aerospaziale",
        'menu.tech': 'Tecnologie Fondamentali',
        'menu.tech.sensors': 'Sensori',
        'menu.tech.actuators': 'Attuatori',
        'menu.tech.navigation': 'Navigazione',
        'menu.tech.ai': 'IA',
        'menu.tech.materials': 'Materiali',
        'menu.applications': 'Applicazioni nello Spazio',
        'menu.advantages': 'Vantaggi',
        'menu.disadvantages': 'Svantaggi e Questioni Etiche',
        'menu.future': 'Il Futuro',
        'menu.work': 'Impatto sul Mondo del Lavoro',
        'menu.conclusion': 'Conclusione',
        'menu.sitography': 'Sitografia',
        'footer.title': 'Robotica Aerospaziale · Esplorazione del Futuro',
        'footer.subtitle': "Un viaggio attraverso la tecnologia che porta l'umanità oltre la Terra",
        'footer.credit': 'Sviluppato come progetto didattico',
        'footer.year': '2025',
    },
};

// ===================================================================
// CONTENUTI DELLE SEZIONI (BLOCCHI HTML COMPLETI)
// ===================================================================


// ===================================================================
// STATO GLOBALE (TEMA, CONTENUTI, PAGINA CORRENTE)
// ===================================================================
const state = {
    theme: localStorage.getItem('theme') || 'dark',
    content: localStorage.getItem('content') || 'content',
    currentPage: localStorage.getItem('currentPage') || 'home',
};

const rootElement = document.documentElement;
rootElement.setAttribute('data-theme', state.theme);
rootElement.setAttribute('data-content', state.content);
rootElement.content = state.content;

// ===================================================================
// AGGIORNA IL TITOLO DEL DOCUMENTO IN BASE A PAGINA
// ===================================================================
function updateDocumentTitle(pageId) {
    const content = state.content;
    const pack = uiContent[content] || uiContent.content;

    const keyMap = {
        home: 'menu.home',
        about: 'menu.about',
        'tech-sensori': 'menu.tech.sensors',
        'tech-attuatori': 'menu.tech.actuators',
        'tech-navigazione': 'menu.tech.navigation',
        'tech-ia': 'menu.tech.ai',
        'tech-materiali': 'menu.tech.materials',
        applications: 'menu.applications',
        advantages: 'menu.advantages',
        disadvantages: 'menu.disadvantages',
        future: 'menu.future',
        work: 'menu.work',
        conclusion: 'menu.conclusion',
        sitography: 'menu.sitography',
    };

    const baseTitle = pack['site.title'] || 'Aerospace Robotics';
    const sectionKey = keyMap[pageId];
    const sectionTitle = sectionKey ? pack[sectionKey] : '';

    if (sectionTitle) {
        document.title = `${sectionTitle} · ${baseTitle}`;
    } else {
        document.title = baseTitle;
    }
}

// ===================================================================
// APPLICAZIONE CONTENUTI (UI + CONTENUTI SEZIONI)
// ===================================================================
function applyPage(content) {
    const pack = uiContent[content];

    // UI fissa
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (pack && pack[key]) {
            el.textContent = pack[key];
        }
    });

    // Contenuti delle pagine
    const sectionPack = sections[content];
    document.querySelectorAll('.page[data-section]').forEach((pageEl) => {
        const sectionKey = pageEl.getAttribute('data-section');
        if (sectionPack && sectionPack[sectionKey]) {
            pageEl.innerHTML = sectionPack[sectionKey];
        }
    });

    // Ricollega le animazioni on-scroll dopo aver riscritto il DOM
    setupScrollAnimations();

    // Aggiorna titolo documento
    updateDocumentTitle(state.currentPage || 'home');
}

// ===================================================================
// APPLICAZIONE TEMA (CHIARO / SCURO)
// ===================================================================
function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('theme', theme);
    rootElement.setAttribute('data-theme', theme);

    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ===================================================================
// GESTIONE PAGINE (PSEUDO-NAVIGAZIONE)
// ===================================================================
function pages() {
    return Array.from(document.querySelectorAll('.page'));
}

function showPage(pageId) {
    const pageList = pages();
    let target = pageList.find((p) => p.id === pageId);
    if (!target) {
        pageId = 'home';
        target = pageList.find((p) => p.id === 'home');
    }

    pageList.forEach((pageEl) => {
        if (pageEl.id === pageId) {
            pageEl.classList.add('active');
        } else {
            pageEl.classList.remove('active');
        }
    });

    // Evidenziazione nel menù laterale e nel sottomenu
    const navButtons = document.querySelectorAll('.menu-item[data-page], .submenu-item[data-page]');
    navButtons.forEach((btn) => {
        if (btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
            btn.setAttribute('aria-current', 'page');
        } else {
            btn.classList.remove('active');
            btn.removeAttribute('aria-current');
        }
    });

    state.currentPage = pageId;
    localStorage.setItem('currentPage', pageId);
    updateDocumentTitle(pageId);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================================================
// ANIMAZIONI ON-SCROLL (INTERSECTION OBSERVER)
// ===================================================================
let scrollObserver = null;

function setupScrollAnimations() {
    if (scrollObserver) scrollObserver.disconnect();

    scrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.16,
            rootMargin: '0px 0px -60px 0px',
        },
    );

    document
        .querySelectorAll('.card, .image-container, .hero-image, .glow-title')
        .forEach((el) => {
            el.classList.add('reveal-on-scroll');
            scrollObserver.observe(el);
        });
}

// ===================================================================
// SFONDO STARFIELD SU CANVAS
// ===================================================================
function initStarfield() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const STAR_COUNT = 130;
    const stars = [];

    function createStar() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * width,
            size: Math.random() * 1.4 + 0.4,
        };
    }

    for (let i = 0; i < STAR_COUNT; i += 1) {
        stars.push(createStar());
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);

    function animate() {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = 'rgba(148, 163, 184, 0.9)';

        for (let i = 0; i < STAR_COUNT; i += 1) {
            const star = stars[i];
            star.z -= 0.8;
            if (star.z <= 0) {
                stars[i] = createStar();
                continue;
            }

            const k = 128 / star.z;
            const px = star.x * k + width / 2;
            const py = star.y * k + height / 2;

            if (px < 0 || px >= width || py < 0 || py >= height) continue;

            const size = star.size * (1 - star.z / width);
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// ===================================================================
// INIZIALIZZAZIONE GENERALE
// ===================================================================
window.addEventListener('DOMContentLoaded', () => {
    // Applica tema e contenuti iniziali
    applyTheme(state.theme);
    applyPage(state.content);

    // Inizializza starfield
    initStarfield();

    // Mostra la pagina salvata
    showPage(state.currentPage || 'home');

    // Toggle tema
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = state.theme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    // Navigazione menu laterale
    document.querySelectorAll('.menu-item[data-page], .submenu-item[data-page]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-page');
            if (!targetId) return;
            showPage(targetId);

            // Chiudi sidebar su mobile
            if (window.innerWidth <= 960) {
                const sidebar = document.getElementById('sidebar');
                const menuToggle = document.getElementById('menuToggle');
                sidebar.classList.remove('open');
                if (menuToggle) {
                    const icon = menuToggle.querySelector('i');
                    if (icon) icon.className = 'fas fa-bars';
                }
            }
        });
    });

    // Sottomenu tecnologie
    const techMenu = document.getElementById('techMenu');
    const techSubmenu = document.getElementById('techSubmenu');
    const techArrow = document.getElementById('techArrow');
    const btnSensori = document.getElementById('techBtnSensori');
    if (techMenu && techSubmenu && techArrow) {
        if ((state.currentPage || 'home').startsWith('tech-')) {
            techSubmenu.classList.add('open');
            techArrow.classList.add('open');
        }

        techMenu.addEventListener('click', () => openTechWindow());
        btnSensori.addEventListener('click', () => openTechWindow(true));
    }
    
    // Menù mobile (apertura/chiusura sidebar)
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.className = sidebar.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
            }
        });

        document.addEventListener('click', (event) => {
            if (window.innerWidth > 960) return;
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    // Link interni data-jump (pulsanti nella hero)
    document.addEventListener('click', (event) => {
        const jumpTarget = event.target.closest('[data-jump]');
        if (!jumpTarget) return;
        const pageId = jumpTarget.getAttribute('data-jump');
        if (pageId) {
            showPage(pageId);
        }
    });

    // Bottone scroll-to-top
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 260) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Prima inizializzazione animazioni on-scroll
    setupScrollAnimations();

    console.log('%cAerospace Robotics HUD', 'color:#38bdf8;font-size:18px;font-weight:bold;');
    console.log('%cTema space‑age attivo. Usa i toggle in alto a destra per cambiare tema e lingua.', 'color:#818cf8;');
});