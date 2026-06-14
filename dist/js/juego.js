const juegos = {
    gtav: {
        banner: "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc4/GTA5Logo.jpg",
        nombre: "GTA V",
        descripcion: "Disfruta de GTA Online, un mundo abierto lleno de acción donde puedes construir tu imperio criminal.",
        graficos: "Gráficos mejorados con iluminación avanzada, texturas HD y trazado de rayos.",
        genero: "Acción / Mundo Abierto",
        lanzamiento: "2013",
        valoracion: "⭐ 4.8",
        relacion:"https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
        text1: "ELDEN RING",
        img2:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/96b8627588997030e5a6b56ca5e9944756c8f288/capsule_616x353.jpg?t=1768303991",
        text2:"Witcher3",
        img3:"https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc4/GTA5Logo.jpg",
        text3:"GTV5",
        tipo:"Sobre RPG",
        infol:"Los RPG se centran en el desarrollo de personajes, historias profundas y exploración de mundos.",
        list: "Desrrollo de personaje",
    },

    witcher3: {
        banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/96b8627588997030e5a6b56ca5e9944756c8f288/capsule_616x353.jpg?t=1768303991",
        nombre: "The Witcher 3",
        descripcion: "Un RPG de mundo abierto con una historia profunda y decisiones que cambian el destino.",
        graficos: "Detalles realistas, clima dinámico y efectos de luz avanzados.",
        genero: "RPG",
        lanzamiento: "2015",
        valoracion: "⭐ 4.9",
        relacion:"https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
        text1: "ELDEN RING",
        img2:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/96b8627588997030e5a6b56ca5e9944756c8f288/capsule_616x353.jpg?t=1768303991",
        text2:"Witcher3",
        img3:"https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc4/GTA5Logo.jpg",
        text3:"GTV5",
        tipo:"Sobre RPG",
        infol:"Los RPG se centran en el desarrollo de personajes, historias profundas y exploración de mundos.",
        list: "Desrrollo de personaje",
    },

    eldenring: {
        banner: "img/eldenring.jpg",
        nombre: "Elden Ring",
        descripcion: "Explora un mundo oscuro lleno de enemigos desafiantes y secretos.",
        graficos: "Ambientes detallados con estilo oscuro y artístico.",
        genero: "RPG / Acción",
        lanzamiento: "2022",
        valoracion: "⭐ 4.8",
        relacion:"https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
        text1: "ELDEN RING",
        img2:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/96b8627588997030e5a6b56ca5e9944756c8f288/capsule_616x353.jpg?t=1768303991",
        text2:"Witcher3",
        img3:"https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc4/GTA5Logo.jpg",
        text3:"GTV5",
        tipo:"Sobre RPG",
        infol:"Los RPG se centran en el desarrollo de personajes, historias profundas y exploración de mundos.",
        list: "Desrrollo de personaje",
    }
};

// 🔥 JUEGO ACTUAL (puedes cambiarlo fácilmente)
const juegoActual = "gtav";

// Cargar datos en HTML
const juego = juegos[juegoActual];

document.getElementById("bannerJuego").src = juego.banner;
document.getElementById("nombreJuego").textContent = juego.nombre;
document.getElementById("descripcionJuego").textContent = juego.descripcion;
document.getElementById("graficosJuego").textContent = juego.graficos;
document.getElementById("generoJuego").textContent = juego.genero;
document.getElementById("lanzamientoJuego").textContent = juego.lanzamiento;
document.getElementById("valoracionJuego").textContent = juego.valoracion;
document.getElementById("relacion").src = juego.relacion;
document.getElementById("text1").textContent = juego.text1;
document.getElementById("text2").textContent = juego.text2;
document.getElementById("text3").textContent = juego.text3;
document.getElementById("img2").src = juego.img2;
document.getElementById("img3").src = juego.img3;
document.getElementById("tipo").textContent = juego.tipo;
document.getElementById("infola").textContent = juego.infol;
document.getElementById("list").textContent = juego.list;