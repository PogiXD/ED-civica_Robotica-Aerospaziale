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
// TRADUZIONI INTERFACCIA (UI) IT / EN
// ===================================================================
const uiTranslations = {
    it: {
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
    en: {
        'site.title': 'Aerospace Robotics',
        'site.subtitle': 'Exploring the Future',
        'menu.home': 'Home',
        'menu.about': 'What is Aerospace Robotics',
        'menu.tech': 'Core Technologies',
        'menu.tech.sensors': 'Sensors',
        'menu.tech.actuators': 'Actuators',
        'menu.tech.navigation': 'Navigation',
        'menu.tech.ai': 'Artificial Intelligence',
        'menu.tech.materials': 'Materials',
        'menu.applications': 'Applications in Space',
        'menu.advantages': 'Advantages',
        'menu.disadvantages': 'Limits & Ethics',
        'menu.future': 'The Future',
        'menu.work': 'Impact on Work',
        'menu.conclusion': 'Conclusion',
        'menu.sitography': 'References',
        'footer.title': 'Aerospace Robotics · Exploring the Future',
        'footer.subtitle': 'A journey through the technology that carries humanity beyond Earth',
        'footer.credit': 'Developed as an educational project',
        'footer.year': '2024',
    },
};

// ===================================================================
// TRADUZIONI DEI CONTENUTI DELLE SEZIONI (BLOCCHI HTML COMPLETI)
// ===================================================================
const sectionTranslations = {
    // --------------------------------------------------------------
    // ITALIANO
    // --------------------------------------------------------------
    it: {
        home: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Robotica Aerospaziale</p>
                        <h1 class="glow-title">Robotica Aerospaziale</h1>
                        <p class="hero-subtitle">
                            La robotica aerospaziale porta i robot oltre la Terra, in ambienti dove l’uomo non può sopravvivere.
                            È la tecnologia che rende possibili missioni su Marte, la manutenzione dei satelliti e le attività sulla
                            Stazione Spaziale Internazionale (ISS).
                        </p>
                        <div class="hero-badges">
                            <span class="badge"><i class="fas fa-shield"></i> Ridurre i rischi per gli astronauti</span>
                            <span class="badge"><i class="fas fa-arrows-alt"></i> Estendere le capacità umane</span>
                        </div>

                        <div class="planet-nav">
                            <button class="planet-button" type="button" data-jump="about">
                                <i class="fas fa-circle-info"></i>
                                <span class="planet-button-label">Cos'è</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="tech-sensori" id="techBtnSensori">
                                <i class="fas fa-microchip"></i>
                                <span class="planet-button-label">Tecnologie</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="applications">
                                <i class="fas fa-diagram-project"></i>
                                <span class="planet-button-label">Applicazioni</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="advantages">
                                <i class="fas fa-thumbs-up"></i>
                                <span class="planet-button-label">Vantaggi</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="disadvantages">
                                <i class="fas fa-arrow-trend-down"></i>
                                <span class="planet-button-label">Svantaggi</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="future">
                                <i class="fas fa-forward-fast"></i>
                                <span class="planet-button-label">Futuro</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="work">
                                <i class="fas fa-earth-europe"></i>
                                <span class="planet-button-label">Impatto</span>
                            </button>
                        </div>
                        <br>
                        <p class="quote-small">
                            "La robotica aerospaziale rende possibili missioni oltre la Terra, proteggendo gli astronauti ed estendendo le capacità umane."
                        </p>
                    </div>
                    <div class="hero-image">
                        <div class="hero-image-inner image-frame plantet-div" id="sistema-solare">
            
            
            
                            <div class="container">
                                <div class="sun">
                                  <img src="./images/sun.png" alt="sun">
                                </div>
                                <div class="mercury"></div>
                                <div class="venus"></div>
                                <div class="earth">
                                  <div class="moon"></div>
                                </div>
                                <div class="mars"></div>
                                <div class="jupiter"></div>
                                <div class="saturn"></div>
                                <div class="uranus"></div>
                                <div class="neptune"></div>
                                <div class="pluto">
                            </div>

                        </div>



                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-info-circle"></i> Introduzione generale</h2>
                    <p>
                        La robotica aerospaziale combina <strong>ingegneria, informatica e scienze spaziali</strong> per creare sistemi in grado di
                        operare in orbita o su altri corpi celesti. A differenza dei robot industriali, questi sistemi devono sopravvivere a
                        radiazioni, temperature estreme e comunicazioni con ritardo di diversi minuti.
                    </p>
                    <ul class="icon-list">
                        <li>
                            <i class="fas fa-user-shield"></i>
                            <span><strong>Sicurezza:</strong> i robot sostituiscono l’uomo nelle fasi più rischiose di una missione.</span>
                        </li>
                        <li>
                            <i class="fas fa-infinity"></i>
                            <span><strong>Resistenza:</strong> possono lavorare per anni, 24 ore su 24, senza bisogno di riposo.</span>
                        </li>
                    </ul>
                </div>
                <div class="card">
                    <h2><i class="fas fa-gamepad"></i> Modalità videogioco</h2>
                    <p>
                        Questo sito è pensato come un <strong>HUD di una missione spaziale</strong>: il menù laterale funziona come un pannello di bordo,
                        le sezioni sono livelli diversi di gioco e le animazioni richiamano l’interfaccia dei videogiochi sci‑fi.
                    </p>
                    <p>
                        Usa il menù a sinistra per navigare tra le aree: tecnologie fondamentali, applicazioni, vantaggi, limiti, futuro della robotica
                        e impatto sul mondo del lavoro.
                    </p>
                </div>
            </div>
        `,

        about: `
            <div class="hero card-highlight">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Definizione</p>
                        <h1 class="glow-title">Cos'è la Robotica Aerospaziale</h1>
                        <p class="hero-subtitle">
                            La <strong>robotica aerospaziale</strong> è un ramo specializzato dell'ingegneria che progetta, sviluppa e implementa 
                            sistemi robotici destinati all'esplorazione e alle operazioni nello spazio. Questi robot devono operare in condizioni 
                            estreme: temperature che variano da -150°C a +120°C, radiazioni intense, vuoto assoluto, e comunicazioni con ritardi di 
                            diversi minuti.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&auto=format&fit=crop&q=80" alt="Stazione Spaziale Internazionale vista dall'esterno" />
                        </div>
                        <p class="image-caption">
                            La Stazione Spaziale Internazionale è un laboratorio perfetto per testare robotica avanzata in microgravità.
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-lightbulb"></i> Caratteristiche Fondamentali</h2>
                <div class="grid-3">
                    <div class="card">
                        <h3><i class="fas fa-robot"></i> Autonomia</h3>
                        <p>
                            I robot spaziali devono essere in grado di prendere decisioni autonome a causa dei ritardi nelle comunicazioni 
                            con la Terra (fino a 22 minuti per Marte).
                        </p>
                    </div>
                    <div class="card">
                        <h3><i class="fas fa-shield-virus"></i> Resistenza</h3>
                        <p>
                            Materiali e componenti devono resistere a radiazioni cosmiche, micro-meteoriti, variazioni termiche estreme 
                            e assenza di atmosfera.
                        </p>
                    </div>
                    <div class="card">
                        <h3><i class="fas fa-battery-full"></i> Efficienza Energetica</h3>
                        <p>
                            Utilizzo ottimizzato dell'energia proveniente da pannelli solari o generatori termoelettrici a radioisotopi 
                            (RTG) per missioni di lunga durata.
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-history"></i> Storia e Evoluzione</h2>
                <p>
                    La robotica aerospaziale ha radici negli anni '60 con le prime sonde automatizzate. Il programma Luna sovietico 
                    (1959-1976) ha portato i primi robot sulla Luna, mentre il programma Viking della NASA ha inviato i primi lander 
                    su Marte nel 1976.
                </p>
                <p>
                    Dagli anni 2000, la robotica aerospaziale ha vissuto un'evoluzione esponenziale: rover sempre più sofisticati su Marte 
                    (Spirit, Opportunity, Curiosity, Perseverance), bracci robotici sulla ISS (Canadarm2, Dextre), e satelliti autonomi 
                    per riparazione e rifornimento in orbita.
                </p>
            </div>
            </div>
        `,

        'tech-sensori': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Tecnologie</p>
                        <h1 class="glow-title">Sensori avanzati</h1>
                        <p class="hero-subtitle">
                            I sensori sono gli "occhi" e le "orecchie" dei robot spaziali. Permettono di percepire il terreno,
                            misurare l’ambiente e raccogliere dati scientifici.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://static.geoconnexion.com/uploads/images/Metop-Sensors.jpg?w=1200&auto=format&fit=crop&q=80" alt="Satellite con sensori e pannelli solari" />
                        </div>
                        <p class="image-caption">Sensorimontati su satelliti e sonde spaziali.</p>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-camera"></i> Telecamere HD e multispettrali</h2>
                    <p>
                        Telecamere ad alta definizione e sensori multispettrali permettono di vedere in bande diverse dello spettro
                        (visibile, infrarosso, ultravioletto). Questo consente di individuare <strong>minerali, ghiaccio</strong> e tracce
                        di attività geologica.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Mappe dettagliate della superficie planetaria.</span></li>
                        <li><i class="fas fa-check"></i><span>Supporto alla navigazione autonoma del rover.</span></li>
                    </ul>
                </div>
                <div class="card">
                    <h2><i class="fas fa-broadcast-tower"></i> LIDAR e radar</h2>
                    <p>
                        Il LIDAR utilizza impulsi laser per misurare distanze e costruire mappe 3D. I radar penetrano nel sottosuolo,
                        rilevando strati nascosti e possibili sacche di ghiaccio.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Rilevamento ostacoli in tempo reale.</span></li>
                        <li><i class="fas fa-check"></i><span>Analisi della struttura interna del terreno.</span></li>
                    </ul>
                </div>
                <div class="card">
                    <h3><i class="fas fa-thermometer-half"></i> Sensori Termici</h3>
                    <p>
                        Misurano la temperatura superficiale di rocce, terreno e atmosfera. Cruciali per identificare zone con 
                        attività geologica o potenziali depositi di ghiaccio sotterraneo.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Individuano aree con anomalie di temperatura.</span></li>
                        <li><i class="fas fa-check"></i><span>Aiutano a capire se sotto la superficie c’è ghiaccio o attività geologica.</span></li>
                    </ul>
                </div>

                <div class="card">
                    <h3><i class="fas fa-vial"></i> Spettrometri</h3>
                    <p>
                        Analizzano la composizione chimica di rocce, suolo e atmosfera. Identificano elementi e composti attraverso 
                        l'analisi della luce riflessa o emessa.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Rilevano quali elementi chimici sono presenti nelle rocce.</span></li>
                        <li><i class="fas fa-check"></i><span>Permettono di confrontare campioni diversi per capire l’evoluzione del terreno.</span></li>
                    </ul>
                </div>

                <div class="card">
                    <h3><i class="fas fa-wind"></i> Sensori Meteorologici</h3>
                    <p>
                        Monitorano condizioni atmosferiche: pressione, temperatura, velocità del vento, umidità relativa. 
                        Fondamentali per comprendere il clima planetario.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Misurano in tempo reale le condizioni atmosferiche.</span></li>
                        <li><i class="fas fa-check"></i><span>Rilevano variazioni improvvise utili alla sicurezza del rover.</span></li>
                    </ul>
                </div>

                <div class="card">
                    <h3><i class="fas fa-magnet"></i> Magnetometri e Radar</h3>
                    <p>
                        I magnetometri misurano campi magnetici planetari. I radar penetrano nel sottosuolo per identificare 
                        strati geologici, ghiaccio, e acqua sotterranea.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Studiano eventuali campi magnetici residui.</span></li>
                        <li><i class="fas fa-check"></i><span>Mappano strati sotterranei non visibili in superficie.</span></li>
                    </ul>
                </div>
            </div>
        `,

        'tech-attuatori': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Tecnologie</p>
                        <h1 class="glow-title">Attuatori e bracci robotici</h1>
                        <p class="hero-subtitle">
                            Gli attuatori trasformano energia in movimento: sono i "muscoli" del sistema robotico. Permettono a rover e bracci
                            di muoversi, afferrare oggetti e compiere operazioni delicate.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=1200&auto=format&fit=crop&q=80" alt="Braccio robotico spaziale" />
                        </div>
                        <p class="image-caption">Bracci robotici ispirati al Canadarm2 utilizzato sulla ISS.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-hand-rock"></i> Bracci robotici in orbita</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-satellite"></i> Canadarm2</h3>
                        <p>
                            Il <strong>Canadarm2</strong> sulla ISS è lungo 17,6 metri e può manipolare carichi fino a 116.000 kg. 
                            Utilizzato per catturare veicoli spaziali in arrivo, spostare moduli, e assistere in passeggiate spaziali.
                        </p>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> 7 gradi di libertà</li>
                            <li><i class="fas fa-check"></i> Precisione millimetrica</li>
                            <li><i class="fas fa-check"></i> Controllo da Terra o ISS</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-wrench"></i> Dextre (SPDM)</h3>
                        <p>
                            <strong>Dextre</strong> (Special Purpose Dexterous Manipulator) è un robot "tuttofare" a due bracci che 
                            esegue riparazioni e manutenzione esterna della ISS, riducendo la necessità di EVA (passeggiate spaziali).
                        </p>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Due bracci a 7 gradi di libertà ciascuno</li>
                            <li><i class="fas fa-check"></i> Telecamere integrate</li>
                            <li><i class="fas fa-check"></i> Sostituzione batterie e componenti</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="card">
                    <h3><i class="fas fa-circle-notch"></i> Ruote dei rover</h3>
                    <p>
                        Ruote indipendenti, spesso in titanio o alluminio speciale, permettono ai rover di affrontare terreni rocciosi,
                        sabbia e pendenze.
                    </p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-person-running"></i> Gambe e robot camminanti</h3>
                    <p>
                        Prototipi di robot a sei o più zampe studiati per esplorare crateri profondi o grotte su altri pianeti.
                    </p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-rocket"></i> Micro‑propulsori</h3>
                    <p>
                        Utilizzati per robot in orbita o piccoli droni, consentono di eseguire manovre precise in assenza di gravità.
                    </p>
                </div>
            </div>
        `,

        'tech-navigazione': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Tecnologie</p>
                        <h1 class="glow-title">Navigazione autonoma</h1>
                        <p class="hero-subtitle">
                            Su Marte un semplice comando impiega diversi minuti per arrivare. Per questo i rover devono
                            essere capaci di guidare quasi come in un videogioco <strong>in modalità automatica</strong>.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=1200&auto=format&fit=crop&q=80" alt="Rappresentazione grafica di traiettorie e orbite" />
                        </div>
                        <p class="image-caption">Algoritmi di navigazione calcolano percorsi sicuri su terreni sconosciuti.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-route"></i> Sistemi di Navigazione</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-eye"></i> Visual Odometry</h3>
                        <p>
                            Analisi continua di immagini per stimare la posizione del robot. Confronta foto successive per calcolare 
                            distanza percorsa e direzione. Utilizzato da tutti i rover marziani.
                        </p>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-map-marked-alt"></i> SLAM (Simultaneous Localization and Mapping)</h3>
                        <p>
                            Algoritmi che permettono al robot di costruire una mappa dell'ambiente sconosciuto mentre determina 
                            simultaneamente la propria posizione all'interno di quella mappa.
                        </p>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-star"></i> Navigazione Stellare</h3>
                        <p>
                            Utilizza la posizione delle stelle come sistema di riferimento assoluto. Particolarmente utile 
                            nello spazio profondo dove GPS non è disponibile.
                        </p>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-compass"></i> IMU (Inertial Measurement Unit)</h3>
                        <p>
                            Sensori che misurano accelerazione e velocità angolare per determinare orientamento e movimento 
                            del robot nello spazio tridimensionale.
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-road"></i> Path Planning e Evitamento Ostacoli</h2>
                <p>
                    I robot spaziali devono pianificare percorsi ottimali evitando pericoli come rocce appuntite, sabbia profonda, 
                    pendenze eccessive.
                </p>
                <ul class="icon-list">
                    <li>
                        <i class="fas fa-brain"></i>
                        <span><strong>Algoritmi di path planning:</strong> A*, D*, RRT per calcolare percorsi ottimali</span>
                    </li>
                    <li>
                        <i class="fas fa-shield-alt"></i>
                        <span><strong>Hazard avoidance:</strong> Identificazione automatica di pericoli e deviazione del percorso</span>
                    </li>
                    <li>
                        <i class="fas fa-chart-line"></i>
                        <span><strong>Terrain analysis:</strong> Valutazione della navigabilità del terreno in tempo reale</span>
                    </li>
                </ul>
            </div>
        `,

        'tech-ia': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Tecnologie</p>
                        <h1 class="glow-title">Intelligenza Artificiale</h1>
                        <p class="hero-subtitle">
                            L’IA è il "cervello" dei robot aerospaziali moderni. Permette loro di riconoscere ostacoli, scegliere obiettivi
                            scientifici e adattarsi a situazioni impreviste.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80" alt="Visualizzazione astratta di intelligenza artificiale" />
                        </div>
                        <p class="image-caption">Reti neurali e algoritmi di apprendimento automatico guidano l’esplorazione autonoma.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-robot"></i> Applicazioni dell'IA nella Robotica Aerospaziale</h2>
                
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-image"></i> Computer Vision</h3>
                        <p>
                            Analisi automatica di immagini per identificare rocce interessanti, formazioni geologiche, potenziali 
                            campioni da raccogliere. Il rover Perseverance usa reti neurali per analisi autonoma.
                        </p>
                        <span class="badge">Deep Learning</span>
                        <span class="badge">Object Detection</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-lightbulb"></i> Decision Making</h3>
                        <p>
                            Sistemi di IA che prendono decisioni complesse: quale campione raccogliere, dove perforare, 
                            quando cercare riparo da tempesta di sabbia.
                        </p>
                        <span class="badge">Machine Learning</span>
                        <span class="badge">Expert Systems</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-exclamation-triangle"></i> Anomaly Detection</h3>
                        <p>
                            Identificazione automatica di malfunzionamenti o situazioni anomale. Può attivare procedure di sicurezza 
                            o allertare il controllo missione sulla Terra.
                        </p>
                        <span class="badge">AI Monitoring</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-brain"></i> Adaptive Learning</h3>
                        <p>
                            Capacità del robot di migliorare le proprie prestazioni nel tempo, imparando dai successi e dagli errori. 
                            Fondamentale per missioni di lunga durata.
                        </p>
                        <span class="badge">Reinforcement Learning</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-project-diagram"></i> Sistemi di IA Avanzati</h2>
                <p>
                    <strong>AEGIS (Autonomous Exploration for Gathering Increased Science):</strong> Sistema autonomo di 
                    Curiosity che seleziona bersagli scientifici interessanti senza intervento umano, aumentando drasticamente 
                    la produttività scientifica del rover.
                </p>
                <p>
                    <strong>AutoNav:</strong> Sistema di navigazione completamente autonoma che permette ai rover di percorrere 
                    distanze maggiori in sicurezza, pianificando percorsi e evitando ostacoli in tempo reale.
                </p>
            </div>
        `,

        'tech-materiali': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Tecnologie</p>
                        <h1 class="glow-title">Materiali avanzati</h1>
                        <p>
                            I <strong>materiali avanzati</strong> sono essenziali per garantire che i robot spaziali sopravvivano in ambienti 
                            estremi. Devono resistere a temperature estreme, radiazioni, vuoto, e impatti di micro-meteoriti.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://www.bodytech.it/wp-content/uploads/2021/12/tecnologia-fibra-carbonio-carrozzine.png?w=1200&auto=format&fit=crop&q=80" alt="Dettaglio di struttura metallica ad alta tecnologia" />
                        </div>
                        <p class="image-caption">Strutture in titanio, fibra di carbonio e materiali compositi riducono il peso dei veicoli spaziali.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-atom"></i> Materiali Chiave</h2>
                
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-shield-alt"></i> Titanio e Leghe</h3>
                        <p>
                            <strong>Titanio</strong> offre eccellente rapporto resistenza/peso, resistenza alla corrosione e 
                            alle temperature estreme. Utilizzato per strutture portanti, ruote dei rover, e componenti critici.
                        </p>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Resistenza termica: -200°C a +400°C</li>
                            <li><i class="fas fa-check"></i> Bassa densità (4.5 g/cm³)</li>
                            <li><i class="fas fa-check"></i> Resistenza alla fatica</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-feather"></i> Fibra di Carbonio</h3>
                        <p>
                            Materiale composito ultra-leggero e resistente. Utilizzato per strutture che devono essere 
                            rigide ma leggere: pannelli solari, bracci robotici, chassis.
                        </p>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> 5x più resistente dell'acciaio</li>
                            <li><i class="fas fa-check"></i> 70% più leggero</li>
                            <li><i class="fas fa-check"></i> Resistente alle radiazioni</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-thermometer-empty"></i> Aerogel</h3>
                        <p>
                            Materiale ultra-leggero con eccellenti proprietà isolanti. Utilizzato per protezione termica 
                            e isolamento di componenti sensibili.
                        </p>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> 99% aria, 1% silice</li>
                            <li><i class="fas fa-check"></i> Miglior isolante conosciuto</li>
                            <li><i class="fas fa-check"></i> Utilizzato su Perseverance</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-sun"></i> MLI (Multi-Layer Insulation)</h3>
                        <p>
                            Isolamento multi-strato fatto di fogli di mylar alluminizzato. Protegge dall'escursione termica 
                            nello spazio (-150°C a +120°C).
                        </p>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Riflette il 97% della radiazione</li>
                            <li><i class="fas fa-check"></i> Leggerissimo</li>
                            <li><i class="fas fa-check"></i> Standard per veicoli spaziali</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-radiation"></i> Protezione dalle Radiazioni</h2>
                <p>
                    Nello spazio, senza protezione dell'atmosfera terrestre, le radiazioni cosmiche e solari sono una minaccia 
                    costante per l'elettronica. Materiali speciali proteggono i componenti sensibili:
                </p>
                <ul class="icon-list">
                    <li><i class="fas fa-check"></i> <strong>Polietilene ad alta densità:</strong> Scherma radiazioni ad alta energia</li>
                    <li><i class="fas fa-check"></i> <strong>Tantalio:</strong> Protegge circuiti critici</li>
                    <li><i class="fas fa-check"></i> <strong>Piombo:</strong> Per componenti ultra-sensibili</li>
                </ul>
            </div>

            <div class="card">
                <h2><i class="fas fa-industry"></i> Materiali del Futuro</h2>
                <p>
                    La ricerca sta sviluppando nuovi materiali rivoluzionari:
                </p>
                <div class="grid-3">
                    <div class="card">
                        <h3>Grafene</h3>
                        <p>200 volte più resistente dell'acciaio, conduttore eccellente, ultra-leggero.</p>
                    </div>
                    <div class="card">
                        <h3>Nanotubi di Carbonio</h3>
                        <p>Strutture molecolari con proprietà meccaniche ed elettriche straordinarie.</p>
                    </div>
                    <div class="card">
                        <h3>Metamateriali</h3>
                        <p>Materiali artificiali con proprietà non esistenti in natura (es. invisibilità a certe frequenze).</p>
                    </div>
                </div>
            </div>
        `,

        applications: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Applicazioni</p>
                        <h1 class="glow-title">Robot nello spazio</h1>
                        <p class="hero-subtitle">
                            Dalle ruote di un rover su Marte ai piccoli droni che esplorano crateri lunari, la robotica aerospaziale è
                            presente in quasi tutte le missioni moderne.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1630694093867-4b947d812bf0?w=1200&auto=format&fit=crop&q=80" alt="Rover su un paesaggio marziano" />
                        </div>
                        <p class="image-caption">I rover come Curiosity e Perseverance esplorano il Pianeta Rosso da anni.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <h2><i class="fas fa-mars"></i> Rover su Marte</h2>
                <p>
                    I <strong>rover marziani</strong> sono i robot spaziali più iconici. Esplorano la superficie del Pianeta Rosso, 
                    cercano tracce di vita passata, e preparano il terreno per future missioni umane.
                </p>
                <div class="grid-2">
                        <div class="card">
                            <h3><i class="fas fa-microscope"></i> Curiosity</h3>
                            <p>
                                Atterrato nel 2012, <strong>Curiosity</strong> pesa 900 kg ed è grande come un'auto. Ha percorso oltre 
                                28 km sul cratere Gale, analizzando rocce e scoprendo che Marte aveva condizioni favorevoli alla vita 
                                miliardi di anni fa.
                            </p>
                            <span class="badge">Attivo dal 2012</span>
                            <span class="badge">17 telecamere</span>
                            <span class="badge">10 strumenti scientifici</span>
                        </div>

                        <div class="card">
                            <h3><i class="fas fa-dna"></i> Perseverance</h3>
                            <p>
                                Atterrato nel 2021, <strong>Perseverance</strong> rappresenta il culmine della tecnologia robotica. 
                                Raccoglie campioni di roccia marziana che saranno riportati sulla Terra da future missioni. 
                                Include anche Ingenuity, il primo elicottero marziano.
                            </p>
                            <span class="badge">Attivo dal 2021</span>
                            <span class="badge">Sample Return</span>
                            <span class="badge">23 telecamere</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-2">
                <div class="card">
                <h2><i class="fas fa-satellite"></i> Manutenzione Satelliti</h2>
                <p>
                    Robot orbitali eseguono riparazioni, rifornimento, e aggiornamento di satelliti in orbita, estendendone 
                    la vita operativa e riducendo i costi di sostituzione.
                </p>
                <ul class="icon-list">
                    <li>
                        <i class="fas fa-wrench"></i>
                        <span><strong>Satellite Servicing:</strong> Sostituzione batterie, riparazione pannelli solari, aggiornamento software</span>
                    </li>
                    <li>
                        <i class="fas fa-gas-pump"></i>
                        <span><strong>Refueling:</strong> Rifornimento carburante per prolungare vita operativa</span>
                    </li>
                    <li>
                        <i class="fas fa-trash"></i>
                        <span><strong>Debris Removal:</strong> Rimozione satelliti non funzionanti e detriti spaziali</span>
                    </li>
                </ul>
            </div>

            <div class="card">
                <h2><i class="fas fa-space-shuttle"></i> Robot sulla ISS</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-cube"></i> Astrobee</h3>
                        <p>
                            <strong>Astrobee</strong> sono robot volanti cubici che assistono gli astronauti sulla ISS. 
                            Eseguono inventari, monitoraggio ambientale, e test di nuove tecnologie in microgravità.
                        </p>
                        <span class="badge">Volo autonomo</span>
                        <span class="badge">AI assistenza</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-robot"></i> Robonaut 2</h3>
                        <p>
                            Robot umanoide progettato per lavorare fianco a fianco con gli astronauti. Può usare gli stessi 
                            strumenti degli umani grazie a mani articolate.
                        </p>
                        <span class="badge">Umanoide</span>
                        <span class="badge">42 gradi di libertà</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-moon"></i> Esplorazione Lunare</h2>
                <p>
                    La Luna è obiettivo di rinnovato interesse. Robot lunari preparano basi permanenti, estraggono risorse, 
                    e assistono astronauti nelle missioni Artemis.
                </p>
                <ul class="icon-list">
                    <li><i class="fas fa-check"></i> <strong>VIPER:</strong> Rover che cercherà ghiaccio d'acqua ai poli lunari</li>
                    <li><i class="fas fa-check"></i> <strong>Lunar Gateway:</strong> Stazione orbitale con bracci robotici per manutenzione</li>
                    <li><i class="fas fa-check"></i> <strong>Construction Robots:</strong> Robot per costruzione habitat lunari</li>
                </ul>
            </div>
            </div>
        `,

        advantages: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Analisi</p>
                        <h1 class="glow-title">Vantaggi della robotica aerospaziale</h1>
                        <p class="hero-subtitle">
                            I robot non sostituiscono gli astronauti, ma permettono di andare più lontano, più a lungo e con rischi ridotti.
                        </p>
                    </div>
                </div>
            </div>

            <div class="pro-con-grid">
                <div class="pro-box">
                    <h3><i class="fas fa-shield-alt"></i> 1. Sicurezza degli Astronauti</h3>
                    <p>
                        I robot possono operare in ambienti letali per l'uomo: radiazioni intense, vuoto assoluto, temperature 
                        estreme, atmosfere tossiche. Questo riduce drasticamente i rischi per gli astronauti.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i> Eliminazione rischi durante EVA pericolose</li>
                        <li><i class="fas fa-check"></i> Esplorazione ambienti inaccessibili all'uomo</li>
                        <li><i class="fas fa-check"></i> Test di nuove tecnologie senza rischio umano</li>
                    </ul>
                </div>

                <div class="pro-box">
                    <h3><i class="fas fa-clock"></i> 2. Operazioni Continue 24/7</h3>
                    <p>
                        I robot non necessitano di riposo, cibo, o aria. Possono lavorare ininterrottamente per anni, 
                        massimizzando la produttività scientifica delle missioni.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i> Nessuna pausa per riposo o sonno</li>
                        <li><i class="fas fa-check"></i> Operazioni durante tempeste o condizioni estreme</li>
                        <li><i class="fas fa-check"></i> Missioni di durata decennale (Opportunity: 15 anni)</li>
                    </ul>
                </div>

                <div class="pro-box">
                    <h3><i class="fas fa-crosshairs"></i> 3. Precisione Estrema</h3>
                    <p>
                        I bracci robotici possono eseguire operazioni con precisione millimetrica, impossibili per l'uomo 
                        anche con tute spaziali ingombranti.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i> Manipolazione componenti microscopici</li>
                        <li><i class="fas fa-check"></i> Chirurgia robotica nello spazio</li>
                        <li><i class="fas fa-check"></i> Assemblaggio strutture complesse</li>
                    </ul>
                </div>

                <div class="pro-box">
                    <h3><i class="fas fa-dollar-sign"></i> 4. Riduzione Costi</h3>
                    <p>
                        Anche se costosi da sviluppare, i robot sono molto più economici delle missioni umane. 
                        Non richiedono sistemi di supporto vitale, cibo, protezione dalle radiazioni.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i> Nessun costo per ritorno sulla Terra</li>
                        <li><i class="fas fa-check"></i> Sistemi di supporto vitale non necessari</li>
                        <li><i class="fas fa-check"></i> Missioni più lunghe a costo inferiore</li>
                    </ul>
                </div>

                <div class="pro-box">
                    <h3><i class="fas fa-mountain"></i> 5. Accesso a Luoghi Impossibili</h3>
                    <p>
                        I robot possono raggiungere luoghi dove l'uomo non potrebbe mai andare: crateri profondi, 
                        tunnel lavici, atmosfere corrosive di Venere, oceani sotterranei di Europa.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i> Esplorazione grotte e tunnel</li>
                        <li><i class="fas fa-check"></i> Perforazione profonda</li>
                        <li><i class="fas fa-check"></i> Ambienti ad alta pressione/temperatura</li>
                    </ul>
                </div>

                <div class="pro-box">
                    <h3><i class="fas fa-flask"></i> 6. Capacità Scientifiche Avanzate</h3>
                    <p>
                        I robot sono laboratori mobili completi, equipaggiati con strumenti scientifici sofisticati 
                        per analisi chimiche, geologiche, atmosferiche in-situ.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i> Spettrometri di massa</li>
                        <li><i class="fas fa-check"></i> Microscopi elettronici</li>
                        <li><i class="fas fa-check"></i> Analizzatori chimici</li>
                    </ul>
                </div>
            </div>
        `,

        disadvantages: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Analisi critica</p>
                        <h1 class="glow-title">Svantaggi e questioni etiche</h1>
                        <p class="hero-subtitle">
                            Ogni tecnologia porta con sé limiti e sfide. La robotica aerospaziale non fa eccezione: dai costi elevati
                            alla responsabilità delle decisioni prese da sistemi autonomi.
                        </p>
                    </div>
                </div>
            </div>

                        <div class="pro-con-container">
                <div class="con-box">
                    <h3><i class="fas fa-money-bill-wave"></i> 1. Costi Iniziali Altissimi</h3>
                    <p>
                        Lo sviluppo di robot spaziali richiede investimenti miliardari. Il rover Perseverance è costato 
                        2,7 miliardi di dollari, somma che potrebbe finanziare molti progetti terrestri.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-times"></i> R&D estremamente costosa</li>
                        <li><i class="fas fa-times"></i> Test rigorosi e ridondanza</li>
                        <li><i class="fas fa-times"></i> Componenti space-grade ultra-costosi</li>
                    </ul>
                </div>

                <div class="con-box">
                    <h3><i class="fas fa-tools"></i> 2. Manutenzione Difficile o Impossibile</h3>
                    <p>
                        Un guasto su Marte significa fine missione. Non è possibile inviare tecnici per riparazioni. 
                        Questo richiede ridondanza estrema e design ultra-affidabile.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-times"></i> Nessuna riparazione possibile</li>
                        <li><i class="fas fa-times"></i> Guasti catastrofici comuni</li>
                        <li><i class="fas fa-times"></i> Ambiente degrada componenti</li>
                    </ul>
                </div>

                <div class="con-box">
                    <h3><i class="fas fa-microchip"></i> 3. Dipendenza Tecnologica</h3>
                    <p>
                        L'eccessivo affidamento sulla robotica potrebbe ridurre le competenze umane nell'esplorazione diretta. 
                        Inoltre, malfunzionamenti software possono compromettere intere missioni.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-times"></i> Bug software critici</li>
                        <li><i class="fas fa-times"></i> Vulnerabilità cyber</li>
                        <li><i class="fas fa-times"></i> Perdita competenze esplorazione umana</li>
                    </ul>
                </div>

                <div class="con-box">
                    <h3><i class="fas fa-balance-scale"></i> 4. Questioni Etiche</h3>
                    <p>
                        L'automazione spaziale solleva dilemmi etici complessi: chi è responsabile di decisioni autonome? 
                        È giusto inviare robot su mondi potenzialmente abitati? Come gestiamo la contaminazione planetaria?
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-times"></i> Responsabilità decisioni AI</li>
                        <li><i class="fas fa-times"></i> Contaminazione biologica</li>
                        <li><i class="fas fa-times"></i> Diritti su risorse estratte</li>
                    </ul>
                </div>

                <div class="con-box">
                    <h3><i class="fas fa-user-times"></i> 5. Riduzione Ruoli Umani</h3>
                    <p>
                        L'automazione crescente potrebbe ridurre opportunità per astronauti. Missioni completamente robotiche 
                        potrebbero eliminare la componente umana dell'esplorazione.
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-times"></i> Meno missioni umane</li>
                        <li><i class="fas fa-times"></i> Disoccupazione settore spaziale</li>
                        <li><i class="fas fa-times"></i> Perdita aspetto "eroico" esplorazione</li>
                    </ul>
                </div>

                <div class="con-box">
                    <h3><i class="fas fa-bolt"></i> 6. Limitazioni Energetiche</h3>
                    <p>
                        Nello spazio profondo o durante notti planetarie lunghe, l'energia diventa critica. 
                        I pannelli solari sono inefficaci lontano dal Sole, richiedendo RTG costosi e controversi (plutonio).
                    </p>
                    <ul class="icon-list">
                        <li><i class="fas fa-times"></i> Dipendenza da luce solare</li>
                        <li><i class="fas fa-times"></i> RTG costosi e radioattivi</li>
                        <li><i class="fas fa-times"></i> Degrado batterie nel tempo</li>
                    </ul>
                </div>
            </div>
        `,

        future: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Futuro</p>
                        <h1 class="glow-title">Evoluzioni future</h1>
                        <p class="hero-subtitle">
                            Il prossimo passo è una collaborazione sempre più stretta tra sciami di robot autonomi e astronauti umani.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&auto=format&fit=crop&q=80" alt="Illustrazione di più robot che collaborano nello spazio" />
                        </div>
                        <p class="image-caption">Sciami di piccoli robot potrebbero esplorare vaste aree in parallelo.</p>
                    </div>
                </div>
            </div>


            <div class="card">
                <h2><i class="fas fa-project-diagram"></i> Swarm Robotics</h2>
                <p>
                    La <strong>robotica a sciame</strong> prevede l'utilizzo di decine o centinaia di piccoli robot che lavorano 
                    insieme come un organismo unico. Ispirati dal comportamento di api, formiche, e stormi di uccelli.
                </p>
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-users"></i> Vantaggi dello Swarm</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Ridondanza: guasto di un robot non compromette missione</li>
                            <li><i class="fas fa-check"></i> Copertura area vasta simultaneamente</li>
                            <li><i class="fas fa-check"></i> Compiti complessi attraverso collaborazione</li>
                            <li><i class="fas fa-check"></i> Costo singola unità ridotto</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3><i class="fas fa-tasks"></i> Applicazioni Future</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-rocket"></i> Mappatura rapida territori planetari</li>
                            <li><i class="fas fa-rocket"></i> Costruzione habitat collaborativa</li>
                            <li><i class="fas fa-rocket"></i> Ricerca risorse (acqua, minerali)</li>
                            <li><i class="fas fa-rocket"></i> Monitoraggio ambientale distribuito</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-cubes"></i> Robot Modulari</h2>
                <p>
                    I <strong>robot modulari</strong> sono costituiti da unità intercambiabili che possono essere riconfigurate 
                    per diverse missioni. Possono auto-ripararsi sostituendo moduli danneggiati, o combinarsi per formare 
                    strutture più grandi.
                </p>
                <div class="card">
                    <h3><i class="fas fa-puzzle-piece"></i> Concetto Modulare</h3>
                    <p>
                        Immagina robot che possono trasformarsi da rover a braccio robotico, o combinarsi per creare ponti, 
                        strutture di supporto, o configurazioni specializzate. NASA sta sviluppando RAMA (Reconstitutable 
                        Assembly Modular Architecture).
                    </p>
                    <span class="badge">Adattabilità</span>
                    <span class="badge">Auto-riparazione</span>
                    <span class="badge">Multi-missione</span>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-hand-sparkles"></i> Soft Robotics</h2>
                <p>
                    La <strong>soft robotics</strong> utilizza materiali flessibili e deformabili invece di strutture rigide. 
                    Questi robot possono adattarsi a superfici irregolari, comprimere attraverso aperture strette, e manipolare 
                    oggetti delicati senza danneggiarli.
                </p>
                <div class="grid-3">
                    <div class="card">
                        <h3>Materiali Intelligenti</h3>
                        <p>Polimeri che cambiano forma con temperatura, luce, o campo elettrico.</p>
                    </div>
                    <div class="card">
                        <h3>Grip Adattivo</h3>
                        <p>Pinze morbide che si adattano perfettamente a qualsiasi forma.</p>
                    </div>
                    <div class="card">
                        <h3>Sicurezza</h3>
                        <p>Interazione sicura con astronauti e strutture delicate.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-brain"></i> IA Autonoma Avanzata</h2>
                <p>
                    Il futuro vedrà robot spaziali con intelligenza artificiale generale (AGI), capaci di ragionamento complesso, 
                    creatività, e adattamento a situazioni completamente nuove senza programmazione specifica.
                </p>
                <ul class="icon-list">
                    <li>
                        <i class="fas fa-robot"></i>
                        <span><strong>Decision-making autonomo:</strong> Robot che pianificano missioni scientifiche complete</span>
                    </li>
                    <li>
                        <i class="fas fa-comments"></i>
                        <span><strong>Comunicazione naturale:</strong> Interazione vocale fluida con astronauti</span>
                    </li>
                    <li>
                        <i class="fas fa-lightbulb"></i>
                        <span><strong>Problem solving creativo:</strong> Soluzioni innovative a problemi imprevisti</span>
                    </li>
                    <li>
                        <i class="fas fa-graduation-cap"></i>
                        <span><strong>Apprendimento continuo:</strong> Miglioramento costante delle prestazioni</span>
                    </li>
                </ul>
            </div>

            <div class="card">
                <h2><i class="fas fa-industry"></i> Produzione In-Situ</h2>
                <p>
                    Robot che fabbricano altri robot, strutture, e componenti utilizzando risorse locali (regolite lunare, 
                    ghiaccio marziano, minerali asteroidi). Stampa 3D robotica di habitat, pannelli solari, e ricambi.
                </p>
            </div>

            <div class="card">
                <h2><i class="fas fa-water"></i> Esplorazione Oceani Extraterrestri</h2>
                <p>
                    Lune come <strong>Europa</strong> (Giove) ed <strong>Encelado</strong> (Saturno) hanno oceani sotterranei che 
                    potrebbero ospitare vita. Robot sottomarini autonomi esploreranno questi oceani alieni.
                </p>
                <div class="image-container">
                    <img src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200&h=600&fit=crop" alt="Europa Moon">
                    <div class="image-caption">Europa - Luna di Giove con oceano sotterraneo, obiettivo futuro dell'esplorazione robotica</div>
                </div>
            </div>
            </div>
        `,

        work: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Lavoro</p>
                        <h1 class="glow-title">Impatto sul mondo del lavoro</h1>
                        <p class="hero-subtitle">
                            La robotica aerospaziale non elimina posti di lavoro, ma ne crea di nuovi e altamente specializzati.
                        </p>
                    </div>
                </div>
            </div>

                        <div class="card">
                <h2><i class="fas fa-briefcase"></i> Nuove Professioni Emergenti</h2>
                
                <div class="grid-2">
                    <div class="card">
                        <h3><i class="fas fa-robot"></i> Ingegnere Robotico Spaziale</h3>
                        <p>
                            Progettazione, sviluppo e test di sistemi robotici per applicazioni spaziali. Richiede conoscenze 
                            multidisciplinari: meccanica, elettronica, informatica, materiali avanzati.
                        </p>
                        <span class="badge">Laurea Ingegneria</span>
                        <span class="badge">Robotica</span>
                        <span class="badge">120K-200K€/anno</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-brain"></i> Programmatore IA per Robotica Spaziale</h3>
                        <p>
                            Sviluppo algoritmi di intelligenza artificiale per navigazione autonoma, decision-making, 
                            computer vision, e machine learning applicati a missioni spaziali.
                        </p>
                        <span class="badge">Computer Science</span>
                        <span class="badge">AI/ML</span>
                        <span class="badge">100K-180K€/anno</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-chart-line"></i> Analista Dati Missioni Robotiche</h3>
                        <p>
                            Elaborazione e interpretazione enormi quantità di dati scientifici generati da robot spaziali. 
                            Utilizzo di big data analytics e visualizzazione avanzata.
                        </p>
                        <span class="badge">Data Science</span>
                        <span class="badge">Astrofisica</span>
                        <span class="badge">80K-150K€/anno</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-gamepad"></i> Operatore/Pilota Robotico Remoto</h3>
                        <p>
                            Controllo e supervisione di robot spaziali dalla Terra. Richiede addestramento simile a piloti, 
                            con capacità di gestione stress e problem-solving rapido.
                        </p>
                        <span class="badge">Training Specializzato</span>
                        <span class="badge">Controllo Missione</span>
                        <span class="badge">70K-120K€/anno</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-vr-cardboard"></i> Specialista Simulazione e Testing</h3>
                        <p>
                            Creazione ambienti virtuali per test pre-lancio, addestramento operatori, e simulazione missioni. 
                            Utilizzo VR/AR e digital twins.
                        </p>
                        <span class="badge">VR/AR Development</span>
                        <span class="badge">Simulation</span>
                        <span class="badge">75K-140K€/anno</span>
                    </div>

                    <div class="card">
                        <h3><i class="fas fa-shield-alt"></i> Esperto Cybersecurity Spaziale</h3>
                        <p>
                            Protezione sistemi robotici spaziali da minacce cyber. Cruciale dato il controllo remoto e 
                            l'importanza strategica delle missioni.
                        </p>
                        <span class="badge">Cybersecurity</span>
                        <span class="badge">Aerospace</span>
                        <span class="badge">90K-170K€/anno</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-graduation-cap"></i> Competenze Richieste</h2>
                <p>
                    Le professioni nella robotica aerospaziale richiedono un mix unico di competenze tecniche e soft skills:
                </p>
                <div class="grid-3">
                    <div class="card">
                        <h3>Competenze Tecniche</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Programmazione (Python, C++, ROS)</li>
                            <li><i class="fas fa-check"></i> Machine Learning & AI</li>
                            <li><i class="fas fa-check"></i> Sistemi embedded</li>
                            <li><i class="fas fa-check"></i> CAD/CAM 3D</li>
                            <li><i class="fas fa-check"></i> Control theory</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Conoscenze Scientifiche</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Fisica spaziale</li>
                            <li><i class="fas fa-check"></i> Meccanica orbitale</li>
                            <li><i class="fas fa-check"></i> Scienza materiali</li>
                            <li><i class="fas fa-check"></i> Astrogeologia</li>
                            <li><i class="fas fa-check"></i> Termodinamica</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Soft Skills</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-check"></i> Problem solving</li>
                            <li><i class="fas fa-check"></i> Lavoro di squadra</li>
                            <li><i class="fas fa-check"></i> Comunicazione</li>
                            <li><i class="fas fa-check"></i> Gestione stress</li>
                            <li><i class="fas fa-check"></i> Pensiero critico</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-university"></i> Percorsi Formativi</h2>
                <p>
                    Per entrare nel settore della robotica aerospaziale, esistono diversi percorsi accademici e professionali:
                </p>
                <ul class="icon-list">
                    <li>
                        <i class="fas fa-graduation-cap"></i>
                        <span><strong>Laurea Magistrale in Ingegneria Aerospaziale</strong> con specializzazione in robotica</span>
                    </li>
                    <li>
                        <i class="fas fa-graduation-cap"></i>
                        <span><strong>Laurea in Ingegneria Robotica</strong> con focus su applicazioni spaziali</span>
                    </li>
                    <li>
                        <i class="fas fa-graduation-cap"></i>
                        <span><strong>Computer Science</strong> con specializzazione in AI e sistemi autonomi</span>
                    </li>
                    <li>
                        <i class="fas fa-certificate"></i>
                        <span><strong>Master/PhD</strong> in Aerospace Robotics, Autonomous Systems, o Space Engineering</span>
                    </li>
                    <li>
                        <i class="fas fa-laptop-code"></i>
                        <span><strong>Certificazioni professionali:</strong> ROS, AI/ML, Cybersecurity, Project Management</span>
                    </li>
                </ul>
            </div>

            <div class="card">
                <h2><i class="fas fa-building"></i> Principali Datori di Lavoro</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3>Agenzie Spaziali</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-flag-usa"></i> NASA (USA)</li>
                            <li><i class="fas fa-flag"></i> ESA (Europa)</li>
                            <li><i class="fas fa-flag"></i> ASI (Italia)</li>
                            <li><i class="fas fa-flag"></i> JAXA (Giappone)</li>
                            <li><i class="fas fa-flag"></i> Roscosmos (Russia)</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Aziende Private</h3>
                        <ul class="icon-list">
                            <li><i class="fas fa-rocket"></i> SpaceX</li>
                            <li><i class="fas fa-rocket"></i> Blue Origin</li>
                            <li><i class="fas fa-rocket"></i> Northrop Grumman</li>
                            <li><i class="fas fa-rocket"></i> Maxar Technologies</li>
                            <li><i class="fas fa-rocket"></i> Thales Alenia Space</li>
                        </ul>
                    </div>
                </div>
            </div>

        `,

        conclusion: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Conclusione</p>
                        <h1 class="glow-title">Uomo + robot</h1>
                        <p class="hero-subtitle">
                            La robotica aerospaziale non sostituisce l’uomo, ma ne <strong>amplifica le capacità</strong>. I robot esplorano,
                            preparano e proteggono; gli esseri umani prendono le decisioni strategiche e più creative.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80" alt="La Terra vista dallo spazio" />
                        </div>
                        <p class="image-caption">La Terra vista dall’orbita: punto di partenza per l’esplorazione del sistema solare.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-handshake"></i> La sfida principale</h2>
                <p>
                    La vera sfida non è scegliere tra missioni umane o robotiche, ma progettare una <strong>collaborazione efficace</strong>
                    tra astronauti e sistemi autonomi per esplorare sempre più lontano in sicurezza.
                </p>
            </div>
        `,

        sitography: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">IT · Risorse</p>
                        <h1 class="glow-title">Sitografia</h1>
                        <p class="hero-subtitle">
                            Una selezione di siti e risorse per approfondire la robotica aerospaziale, sia in italiano che in inglese.
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-flag"></i> Fonti italiane</h2>
                <ul class="link-list">
                    <li><a class="link-pill" href="https://www.tech4future.info/" target="_blank" rel="noreferrer"><i class="fas fa-globe"></i><span>Tech4Future</span></a></li>
                    <li><a class="link-pill" href="https://www.esa.int/Space_in_Member_States/Italy" target="_blank" rel="noreferrer"><i class="fas fa-rocket"></i><span>ESA Italia</span></a></li>
                    <li><a class="link-pill" href="https://www.asi.it/" target="_blank" rel="noreferrer"><i class="fas fa-satellite"></i><span>ASI - Agenzia Spaziale Italiana</span></a></li>
                    <li><a class="link-pill" href="http://www.inaf.it/it" target="_blank" rel="noreferrer"><i class="fas fa-lightbulb"></i><span>INAF - Istituto Nazionale di Astrofisica</span></a></li>                </ul>
            </div>

            <div class="card">
                <h2><i class="fas fa-globe-americas"></i> Fonti internazionali</h2>
                <ul class="link-list">
                    <li><a class="link-pill" href="https://www.nasa.gov/" target="_blank" rel="noreferrer"><i class="fas fa-rocket"></i><span>NASA</span></a></li>
                    <li><a class="link-pill" href="https://mars.nasa.gov/" target="_blank" rel="noreferrer"><i class="fas fa-mars"></i><span>NASA Mars Exploration</span></a></li>
                    <li><a class="link-pill" href="https://www.jpl.nasa.gov/" target="_blank" rel="noreferrer"><i class="fas fa-satellite-dish"></i><span>JPL - Jet Propulsion Laboratory</span></a></li>
                    <li><a class="link-pill" href="https://www.esa.int/" target="_blank" rel="noreferrer"><i class="fas fa-globe-europe"></i><span>ESA - European Space Agency</span></a></li>
                    <li><a class="link-pill" href="https://www.ieee.org" target="_blank" rel="noreferrer"><i class="fas fa-robot"></i><span>IEEE Robotics</span></a></li>
                </ul>
            </div>
        `,
    },

    // --------------------------------------------------------------
    // INGLESE
    // --------------------------------------------------------------
    en: {
        home: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Aerospace Robotics</p>
                        <h1 class="glow-title">Aerospace Robotics</h1>
                        <p class="hero-subtitle">
                            Aerospace robotics brings robots beyond Earth, into environments where humans cannot survive.
                            It enables missions to Mars, satellite servicing and operations on the International Space Station.
                        </p>
                        <div class="hero-badges">
                            <span class="badge"><i class="fas fa-shield"></i> Protect astronauts</span>
                            <span class="badge"><i class="fas fa-arrows-alt"></i> Extend human capabilities</span>
                        </div>
                        <div class="hero-cta">
                            <button class="btn-primary" data-jump="applications">
                                <span>Applications</span>
                                <i class="fas fa-play"></i>
                            </button>
                            <button class="btn-ghost" data-jump="future">
                                <span>Future</span>
                                <i class="fas fa-forward"></i>
                            </button>
                        </div>
                        <div class="planet-nav">
                            <button class="planet-button" type="button" data-jump="about">
                                <i class="fas fa-rocket"></i>
                                <span class="planet-button-label">Overview</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="applications">
                                <i class="fas fa-satellite"></i>
                                <span class="planet-button-label">Apps</span>
                            </button>
                            <button class="planet-button" type="button" data-jump="future">
                                <i class="fas fa-stars"></i>
                                <span class="planet-button-label">Future</span>
                            </button>
                        </div>
                        <p class="quote-small">
                            "Aerospace robotics enables missions beyond Earth, protecting astronauts and extending human capabilities."
                        </p>
                    </div>
                    <div class="hero-image">
                        <div class="hero-image-inner image-frame">
                            <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&auto=format&fit=crop&q=80" alt="Robotic rover exploring Mars" />
                            <div class="hero-hud-tag">Mars Rover · Perseverance style</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-info-circle"></i> General introduction</h2>
                    <p>
                        Aerospace robotics combines <strong>engineering, computer science and space science</strong> to build systems that
                        operate in orbit or on other planets. They must survive radiation, extreme temperatures and long communication delays.
                    </p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-gamepad"></i> Game‑style interface</h2>
                    <p>
                        This site behaves like a mission HUD: the side menu is your control panel and each section is a different
                        level focused on technology, applications, pros, cons, future and jobs.
                    </p>
                </div>
            </div>
        `,

        about: `
            <div class="hero card-highlight">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Definition</p>
                        <h1 class="glow-title">What is Aerospace Robotics</h1>
                        <p class="hero-subtitle">
                            It is the field that designs robotic systems able to operate in space: in orbit, on the Moon, on Mars or
                            other celestial bodies. Robots must be autonomous, ultra‑reliable and capable of working in harsh conditions.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&auto=format&fit=crop&q=80" alt="International Space Station view from outside" />
                        </div>
                        <p class="image-caption">The ISS is a perfect lab to test advanced robotics in micro‑gravity.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-screwdriver-wrench"></i> Key features</h2>
                <div class="grid-3">
                    <div>
                        <h3><i class="fas fa-robot"></i> Autonomy</h3>
                        <p>Robots must take decisions without waiting for real‑time commands from Earth.</p>
                    </div>
                    <div>
                        <h3><i class="fas fa-shield-virus"></i> Robustness</h3>
                        <p>They face vacuum, radiation, dust and big temperature swings.</p>
                    </div>
                    <div>
                        <h3><i class="fas fa-battery-full"></i> Energy efficiency</h3>
                        <p>Limited energy from solar panels or radioisotope generators must be used carefully.</p>
                    </div>
                </div>
            </div>
        `,

        'tech-sensori': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Technologies</p>
                        <h1 class="glow-title">Advanced sensors</h1>
                        <p class="hero-subtitle">
                            Sensors are the senses of space robots. They perceive terrain, measure the environment and collect science data.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1580674280375-c10aeeb185d2?w=1200&auto=format&fit=crop&q=80" alt="Satellite covered with instruments" />
                        </div>
                        <p class="image-caption">Cameras, spectrometers and radar onboard satellites and probes.</p>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-camera"></i> HD & multispectral cameras</h2>
                    <p>
                        They record high‑resolution images and see in infrared or ultraviolet to detect <strong>minerals and ice</strong>.
                    </p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-broadcast-tower"></i> LIDAR & radar</h2>
                    <p>
                        LIDAR builds 3D maps while radar probes the subsurface to reveal hidden layers or water deposits.
                    </p>
                </div>
            </div>
        `,

        'tech-attuatori': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Technologies</p>
                        <h1 class="glow-title">Actuators & robotic arms</h1>
                        <p class="hero-subtitle">
                            Actuators are the muscles of the robot, enabling movement, manipulation and precise operations in orbit.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=1200&auto=format&fit=crop&q=80" alt="Robotic arm in space" />
                        </div>
                        <p class="image-caption">Robotic arms inspired by Canadarm2 on the ISS.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-hand-rock"></i> Orbital manipulators</h2>
                <p>
                    On the ISS, arms like <strong>Canadarm2</strong> capture spacecraft, move modules and support astronauts during spacewalks.
                </p>
            </div>
        `,

        'tech-navigazione': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Technologies</p>
                        <h1 class="glow-title">Autonomous navigation</h1>
                        <p class="hero-subtitle">
                            Because of long delays, rovers must drive almost by themselves, planning safe routes on unknown terrain.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=1200&auto=format&fit=crop&q=80" alt="Graph of orbits and trajectories" />
                        </div>
                        <p class="image-caption">Trajectory planning and hazard avoidance keep missions safe.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-route"></i> How a rover knows where to go</h2>
                <ul class="icon-list">
                    <li><i class="fas fa-eye"></i><span>Visual odometry and SLAM to estimate position.</span></li>
                    <li><i class="fas fa-star"></i><span>Star trackers in deep‑space missions.</span></li>
                </ul>
            </div>
        `,

        'tech-ia': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Technologies</p>
                        <h1 class="glow-title">Artificial Intelligence</h1>
                        <p class="hero-subtitle">
                            AI is the brain of modern space robots, enabling perception, planning and adaptation to unexpected events.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80" alt="Abstract AI visualization" />
                        </div>
                        <p class="image-caption">Neural networks and machine learning guide exploration.</p>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-image"></i> Computer vision</h2>
                    <p>Automatic analysis of images to detect interesting rocks and obstacles.</p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-lightbulb"></i> Autonomous decisions</h2>
                    <p>Systems decide which targets to analyze and how to react to dust storms or anomalies.</p>
                </div>
            </div>
        `,

        'tech-materiali': `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Technologies</p>
                        <h1 class="glow-title">Advanced materials</h1>
                        <p class="hero-subtitle">
                            Special materials keep robots light, strong and protected from radiation and temperature swings.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1581091870630-f4480f102d08?w=1200&auto=format&fit=crop&q=80" alt="High‑tech metallic structure" />
                        </div>
                        <p class="image-caption">Titanium, carbon fiber and aerogels are common in spacecraft design.</p>
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="card">
                    <h3><i class="fas fa-shield-alt"></i> Titanium</h3>
                    <p>Strong and relatively light, ideal for structural parts of rovers and arms.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-feather"></i> Carbon fiber</h3>
                    <p>Very light and stiff, used for booms, masts and instrument supports.</p>
                </div>
                <div class="card">
                    <h3><i class="fas fa-thermometer-empty"></i> Thermal insulation</h3>
                    <p>Multi‑layer insulation and aerogels protect electronics from extreme cold or heat.</p>
                </div>
            </div>
        `,

        applications: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Applications</p>
                        <h1 class="glow-title">Robots in space</h1>
                        <p class="hero-subtitle">
                            From Mars rovers to orbital servicing vehicles and ISS helpers, robots are key players of modern missions.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1630694093867-4b947d812bf0?w=1200&auto=format&fit=crop&q=80" alt="Rover on Mars" />
                        </div>
                        <p class="image-caption">Curiosity and Perseverance have been exploring Mars for years.</p>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-mars"></i> Mars rovers</h2>
                    <p>Mobile laboratories searching for signs of past life and characterizing Martian geology.</p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-satellite"></i> Orbital robotics</h2>
                    <p>Robotic arms and servicing spacecraft refuel and repair satellites, or remove space debris.</p>
                </div>
            </div>
        `,

        advantages: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Analysis</p>
                        <h1 class="glow-title">Advantages</h1>
                        <p class="hero-subtitle">
                            Robots increase safety, extend mission duration and access places humans cannot reach.
                        </p>
                    </div>
                </div>
            </div>

            <div class="pro-con-grid">
                <div class="pro-box">
                    <h3><i class="fas fa-user-shield"></i> Astronaut safety</h3>
                    <p>Robots take over the riskiest tasks, reducing exposure to radiation and hazards.</p>
                </div>
                <div class="pro-box">
                    <h3><i class="fas fa-clock"></i> 24/7 operations</h3>
                    <p>They can work continuously for years, boosting scientific return.</p>
                </div>
                <div class="pro-box">
                    <h3><i class="fas fa-crosshairs"></i> High precision</h3>
                    <p>Robotic arms and instruments perform extremely accurate maneuvers.</p>
                </div>
                <div class="pro-box">
                    <h3><i class="fas fa-coins"></i> Lower cost per result</h3>
                    <p>No life‑support systems or return trip are required for robots.</p>
                </div>
            </div>
        `,

        disadvantages: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Critical view</p>
                        <h1 class="glow-title">Limits & ethics</h1>
                        <p class="hero-subtitle">
                            High development costs, limited repair options and ethical questions about autonomy and planetary protection.
                        </p>
                    </div>
                </div>
            </div>

            <div class="pro-con-grid">
                <div class="con-box">
                    <h3><i class="fas fa-money-bill-wave"></i> High upfront cost</h3>
                    <p>Space‑qualified hardware and testing are extremely expensive.</p>
                </div>
                <div class="con-box">
                    <h3><i class="fas fa-screwdriver-wrench"></i> Hard to repair</h3>
                    <p>Many failures cannot be fixed once the robot is on Mars or deep space.</p>
                </div>
                <div class="con-box">
                    <h3><i class="fas fa-scale-balanced"></i> Ethics & responsibility</h3>
                    <p>Who is responsible for decisions made by autonomous systems? How do we avoid contaminating other worlds?</p>
                </div>
            </div>
        `,

        future: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Future</p>
                        <h1 class="glow-title">Future evolution</h1>
                        <p class="hero-subtitle">
                            Swarm robots, modular bodies, soft robotics and more capable AI will transform exploration.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&auto=format&fit=crop&q=80" alt="Multiple robots collaborating" />
                        </div>
                        <p class="image-caption">Swarms of robots could map huge areas in a short time.</p>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-layer-group"></i> Swarm robotics</h2>
                    <p>Many small robots cooperate like insects, making missions more resilient and flexible.</p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-cubes"></i> Modular robots</h2>
                    <p>Robots built from modules that reconfigure depending on the task: rover, arm, bridge or structure.</p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-hand-sparkles"></i> Soft robotics</h2>
                    <p>Soft, flexible robots interact safely with astronauts and fragile equipment.</p>
                </div>
                <div class="card">
                    <h2><i class="fas fa-brain"></i> Advanced AI</h2>
                    <p>Increasingly general AI will plan entire science campaigns with minimal human supervision.</p>
                </div>
            </div>
        `,

        work: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Jobs</p>
                        <h1 class="glow-title">Impact on work</h1>
                        <p class="hero-subtitle">
                            Aerospace robotics creates new, highly skilled professions rather than simply replacing existing ones.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h2><i class="fas fa-briefcase"></i> New roles</h2>
                    <ul class="icon-list">
                        <li><i class="fas fa-robot"></i><span>Aerospace robotics engineers.</span></li>
                        <li><i class="fas fa-brain"></i><span>AI and autonomy software developers.</span></li>
                        <li><i class="fas fa-database"></i><span>Mission data analysts.</span></li>
                        <li><i class="fas fa-vr-cardboard"></i><span>Simulation and VR specialists.</span></li>
                    </ul>
                </div>
                <div class="card">
                    <h2><i class="fas fa-graduation-cap"></i> Skills</h2>
                    <ul class="icon-list">
                        <li><i class="fas fa-check"></i><span>Programming (Python, C++, ROS).</span></li>
                        <li><i class="fas fa-check"></i><span>Robotics, control and orbital mechanics.</span></li>
                        <li><i class="fas fa-check"></i><span>Teamwork and problem‑solving.</span></li>
                    </ul>
                </div>
            </div>
        `,

        conclusion: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Conclusion</p>
                        <h1 class="glow-title">Human + robot</h1>
                        <p class="hero-subtitle">
                            Aerospace robotics does not replace humans but <strong>amplifies</strong> what we can do. Robots explore and prepare,
                            humans decide and imagine new goals.
                        </p>
                    </div>
                    <div class="image-container">
                        <div class="image-frame">
                            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80" alt="Earth seen from space" />
                        </div>
                        <p class="image-caption">Earth from orbit: starting point for our journey through the Solar System.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-handshake"></i> The main challenge</h2>
                <p>
                    The real challenge is not choosing between human or robotic missions, but designing a <strong>powerful partnership</strong>
                    where both work together to explore further and safer.
                </p>
            </div>
        `,

        sitography: `
            <div class="hero">
                <div class="hero-inner">
                    <div>
                        <p class="hero-kicker">EN · Resources</p>
                        <h1 class="glow-title">References</h1>
                        <p class="hero-subtitle">
                            A selection of websites and resources to go deeper into aerospace robotics and space exploration.
                        </p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><i class="fas fa-flag"></i> Italian sources</h2>
                <ul class="link-list">
                    <li><a class="link-pill" href="https://www.tech4future.info/" target="_blank" rel="noreferrer"><i class="fas fa-globe"></i><span>Tech4Future</span></a></li>
                    <li><a class="link-pill" href="https://www.esa.int/Space_in_Member_States/Italy" target="_blank" rel="noreferrer"><i class="fas fa-rocket"></i><span>ESA Italy</span></a></li>
                    <li><a class="link-pill" href="https://www.asi.it/" target="_blank" rel="noreferrer"><i class="fas fa-satellite"></i><span>ASI - Italian Space Agency</span></a></li>
                    <li><a class="link-pill" href="https://www.inaf.it/" target="_blank" rel="noreferrer"><i class="fas fa-telescope"></i><span>INAF - National Institute for Astrophysics</span></a></li>
                    <li><a class="link-pill" href="https://www.nasa.gov/international/italy" target="_blank" rel="noreferrer"><i class="fas fa-flag-usa"></i><span>NASA - Italy page</span></a></li>
                </ul>
            </div>

            <div class="card">
                <h2><i class="fas fa-globe-americas"></i> International sources</h2>
                <ul class="link-list">
                    <li><a class="link-pill" href="https://www.nasa.gov/" target="_blank" rel="noreferrer"><i class="fas fa-rocket"></i><span>NASA</span></a></li>
                    <li><a class="link-pill" href="https://mars.nasa.gov/" target="_blank" rel="noreferrer"><i class="fas fa-mars"></i><span>NASA Mars Exploration</span></a></li>
                    <li><a class="link-pill" href="https://www.jpl.nasa.gov/" target="_blank" rel="noreferrer"><i class="fas fa-satellite-dish"></i><span>JPL - Jet Propulsion Laboratory</span></a></li>
                    <li><a class="link-pill" href="https://www.esa.int/" target="_blank" rel="noreferrer"><i class="fas fa-globe-europe"></i><span>ESA - European Space Agency</span></a></li>
                    <li><a class="link-pill" href="https://www.mit.edu/research/space-exploration" target="_blank" rel="noreferrer"><i class="fas fa-university"></i><span>MIT - Space Exploration</span></a></li>
                    <li><a class="link-pill" href="https://www.ieee.org/topics/robotics.html" target="_blank" rel="noreferrer"><i class="fas fa-robot"></i><span>IEEE Robotics</span></a></li>
                </ul>
            </div>
        `,
    },
};

// ===================================================================
// STATO GLOBALE (TEMA, LINGUA, PAGINA CORRENTE)
// ===================================================================
const state = {
    theme: localStorage.getItem('theme') || 'dark',
    lang: localStorage.getItem('lang') || 'it',
    currentPage: localStorage.getItem('currentPage') || 'home',
};

const rootElement = document.documentElement;
rootElement.setAttribute('data-theme', state.theme);
rootElement.setAttribute('data-lang', state.lang);
rootElement.lang = state.lang;

// ===================================================================
// AGGIORNA IL TITOLO DEL DOCUMENTO IN BASE A PAGINA E LINGUA
// ===================================================================
function updateDocumentTitle(pageId) {
    const lang = state.lang;
    const pack = uiTranslations[lang] || uiTranslations.it;

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
// APPLICAZIONE LINGUA (UI + CONTENUTI SEZIONI)
// ===================================================================
function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    rootElement.setAttribute('data-lang', lang);
    rootElement.lang = lang;

    const pack = uiTranslations[lang];

    // UI fissa
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (pack && pack[key]) {
            el.textContent = pack[key];
        }
    });

    // Toggle lingua (accessibilità)
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
        langToggleBtn.title = lang === 'it'
            ? 'Passa alla versione inglese'
            : 'Switch to Italian version';
    }

    // Contenuti delle pagine
    const sectionPack = sectionTranslations[lang];
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
    // Applica tema e lingua iniziali
    applyTheme(state.theme);
    applyLanguage(state.lang);

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