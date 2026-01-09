// 🎀 ZONA DE DATOS 🎀

// Mapa de GIFs de Ejercicios de Fuerza
const exerciseGifMap = {
    // --- DÍA 1 ---
    "Estocada Adelante": "gifs/estocada.gif",
    "Subida al Banco Lateral": "gifs/subidabanco.gif",
    "Hipthrust": "gifs/hiptrust.gif",
    "Sumo": "gifs/sumo.gif",
    "Press Inclinado 1 Brazo": "gifs/press1brazo.gif",
    "Press Plano Barra": "gifs/pressplanobarra.gif",
    
    // --- DÍA 2 ---
    "Camilla Isquiotibial": "gifs/camillaisquiotibial.gif",
    "Peso Muerto Barra": "gifs/pesomuertobarra.gif",
    "Caminata Lateral": "gifs/caminatalateral.gif",
    "Sentadilla Lateral con Barra": "gifs/sentadillalateral.gif",
    "Pullover": "gifs/pullover.gif",
    "Polea Alta Toma Abierta": "gifs/poleaalta.gif",

    // --- DÍA 3 ---
    "Elevación a 1 Pierna": "gifs/elevacionunapierna.gif",
    "Patada Polea": "gifs/patadapolea.gif",
    "Press Militar": "gifs/pressmilitar.gif",
    "Vuelo Lateral": "gifs/vuelolateral.gif",
    "Bíceps Alternado": "gifs/bicepsalternado.gif",
    "Tríceps Trasnuca": "gifs/tricepstrasnuca.gif",
    "HIIT Cargada Core o Barra": "gifs/hiitcargada.gif",

    // --- DÍA 4 ---
    "Sillón Cuádriceps": "gifs/silloncuadriceps.gif",
    "Sentadilla": "gifs/sentadilla.gif",
    "Búlgara": "gifs/bulgara.gif",
    "Cadera con Banda Elástica": "gifs/caderaconbanda.gif",
    "Apertura Inclinado": "gifs/aperturainclinado.gif",
    "Tríceps Polea": "gifs/tricepspolea.gif",

    // --- DÍA 5 ---
    "Isquio con Deslizadores": "gifs/isquiodeslizadores.jpg",
    "P.M. 1 Pierna": "gifs/pesomuertounapierna.gif",
    "Buen Día Barra": "gifs/buendiabarra.gif",
    "Jalón Mentón": "gifs/jalonmenton.gif",
    "Vuelo Escapular": "gifs/vueloescapular.gif",
    
    // 👇 AQUÍ ESTÁ EL TRUCO PARA PONER DOS IMÁGENES 👇
    // Usamos corchetes [ ] y separamos con coma
    "Bíceps Hombro 1 Brazo": [
        "gifs/bicepshombro1.webp", 
        "gifs/bicepshombro2.png"
    ]
};

// Configuración del Calentamiento con GIFs
const warmupData = {
    1: [
        { name: "Abs Toco Talón", gif: "gifs/tocopunta.gif" },
        { name: "Plancha", gif: "gifs/plancha.jpg" },
        { name: "Agrupados", gif: "gifs/agrupados.avif" }
    ],
    2: [
        { name: "Planchas Laterales", gif: "gifs/planchalateral.gif" },
        { name: "Bicicleta", gif: "gifs/bicicleta.gif" },
        { name: "Patada al Cielo", gif: "gifs/patadaalcielo.gif" }
    ],
    3: [
        { name: "Inferior Alternado", gif: "gifs/inferior-alt.gif" },
        { name: "Toco Punta", gif: "gifs/tocopunta.gif" }
    ],
    4: [
        { name: "Espinal Nado", gif: "gifs/espinalnado.gif" },
        { name: "Bisagra", gif: "gifs/bisagra.jpg" },
        { name: "Sit Up", gif: "gifs/situp.gif" }
    ],
    5: [
        { name: "Espinal Alternado", gif: "gifs/espinalalternado.gif" },
        { name: "Sit Up", gif: "gifs/situp.gif" },
        { name: "Barquito", gif: "gifs/barquito.gif" }
    ]
};

// Lista de ejercicios por día (Estructura base)
const exerciseBase = {
    1: ["Estocada Adelante", "Subida al Banco Lateral", "Hipthrust", "Sumo", "Press Inclinado 1 Brazo", "Press Plano Barra"],
    2: ["Camilla Isquiotibial", "Peso Muerto Barra", "Caminata Lateral", "Sentadilla Lateral con Barra", "Pullover", "Polea Alta Toma Abierta"],
    3: ["Elevación a 1 Pierna", "Patada Polea", "Press Militar", "Vuelo Lateral", "Bíceps Alternado", "Tríceps Trasnuca"],
    4: ["Sillón Cuádriceps", "Sentadilla", "Búlgara", "Cadera con Banda Elástica", "Apertura Inclinado", "Tríceps Polea"],
    5: ["Isquio con Deslizadores", "P.M. 1 Pierna", "Buen Día Barra", "Bíceps Hombro 1 Brazo", "Jalón Mentón", "Vuelo Escapular"]
};

// 🎀 LÓGICA DE LA APP 🎀

function updateView() {
    const week = document.getElementById('week-select').value;
    const day = document.getElementById('day-select').value;
    
    renderWarmup(day);
    renderExercises(day, week);
}

// Renderizar Calentamiento
function renderWarmup(day) {
    const container = document.getElementById('warmup-container');
    container.innerHTML = ""; 

    container.innerHTML += `
        <div class="card fixed-warmup">
            <h3>⚡ Movilidad Inicial (Siempre)</h3>
            <p>👇 ¡Dale play al timer de 5 min!</p>
            <p>🧘 Balanceos (Cadera, Tobillo, Rodilla)</p>
        </div>`;

    let zmContent = "";
    
    if(warmupData[day]) {
        warmupData[day].forEach(item => {
            const uniqueId = 'warmup-' + Math.random().toString(36).substr(2, 5);
            const gifSrc = item.gif || "gifs/placeholder.png"; 

            zmContent += `
                <div style="margin-top:10px; border-top:1px solid #eee; padding-top:5px;">
                    <div class="ex-header">
                        <span style="font-size:0.9rem;">${item.name}</span>
                        <button class="toggle-gif-btn" onclick="toggleGif('${uniqueId}')" style="padding:2px 8px; font-size:0.7rem;">Ver 🔽</button>
                    </div>
                    <div id="${uniqueId}" class="gif-container">
                        <img src="${gifSrc}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">
                    </div>
                </div>
            `;
        });
    }

    container.innerHTML += `
        <div class="card dynamic-warmup">
            <h3>🔥 Zona Media (Día ${day})</h3>
            <p style="margin-bottom:10px;">✨ 5 Series x 10 Reps</p>
            ${zmContent}
        </div>`;
}

// Renderizar Ejercicios Principales
function renderExercises(day, week) {
    const list = document.getElementById('exercise-list');
    list.innerHTML = "";

    if(exerciseBase[day]) {
        exerciseBase[day].forEach(name => {
            let sets = 4;
            let reps = "10"; 

            if (name === "Bíceps Alternado") reps = "12";
            if (name.includes("HIIT")) { sets = 6; reps = "30 seg"; }

            if (week == 2) { 
                reps = "25 seg"; 
                if (name.includes("HIIT")) reps = "30 seg"; 
            }
            if (week == 3) { sets = 5; reps = "8"; }
            if (week == 4) { sets = 5; reps = "12"; }

            // Lógica para detectar si es una imagen o una lista
            const rawGifSource = exerciseGifMap[name] || `gifs/${name.toLowerCase().replace(/ /g, "-")}.gif`;
            let imagesHtml = '';

            // Si es una lista (Array), recorremos y creamos varias imágenes
            if (Array.isArray(rawGifSource)) {
                rawGifSource.forEach(src => {
                    imagesHtml += `<img src="${src}" alt="${name}" loading="lazy" style="margin-bottom: 5px;" onerror="this.style.display='none'">`;
                });
            } else {
                // Si es una sola imagen (Texto normal)
                imagesHtml = `<img src="${rawGifSource}" alt="${name}" loading="lazy" onerror="this.style.display='none'">`;
            }

            const uniqueId = 'gif-' + Math.random().toString(36).substr(2, 5);

            list.innerHTML += `
                <div class="ex-card">
                    <div class="ex-header">
                        <span class="ex-name">${name}</span>
                        <button class="toggle-gif-btn" onclick="toggleGif('${uniqueId}')">Ver GIF 🔽</button>
                    </div>
                    <div id="${uniqueId}" class="gif-container">
                        ${imagesHtml}
                    </div>
                    <div class="ex-stats">
                        <div class="stat">SERIES<br>${sets}</div>
                        <div class="stat">REPS<br>${reps}</div>
                        <div class="stat">KG<input type="number" placeholder="0"></div>
                    </div>
                </div>
            `;
        });
    }
}

function toggleGif(id) {
    document.getElementById(id).classList.toggle('show');
}

// --- Cronómetro (5 Minutos) ---
const INITIAL_TIME = 300; 
let time = INITIAL_TIME; 
let timerId = null;

function toggleTimer() {
    const btn = document.getElementById('btn-play');
    if (timerId) { 
        clearInterval(timerId); timerId = null; btn.innerText = "▶"; 
    } else {
        btn.innerText = "⏸";
        timerId = setInterval(() => {
            if (time > 0) { time--; updateTimerDisplay(); } 
            else { resetTimer(); alert("¡Movilidad lista! 🔥"); }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerId); timerId = null; time = INITIAL_TIME;
    updateTimerDisplay(); document.getElementById('btn-play').innerText = "▶";
}

function updateTimerDisplay() {
    const mins = Math.floor(time / 60).toString().padStart(2, '0');
    const secs = (time % 60).toString().padStart(2, '0');
    document.getElementById('time').innerText = `${mins}:${secs}`;
}

updateView();