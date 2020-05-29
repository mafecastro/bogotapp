
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'bogotapp',
    // App id
    id: 'com.bogotapp',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [{
            path: '/about/',
            url: 'about.html',
        },
        {
            path: '/index/',
            url: 'index.html',
        },

        {
            path: '/tours/',
            url: 'tours.html',
        },
        {
            path: '/espectaculos/',
            url: 'espectaculos.html',
        },
        {
            path: '/excursiones/',
            url: 'excursiones.html',
        },
        {
            path: '/quever/',
            url: 'quever.html',
        },
        {
            path: '/museos/',
            url: 'museos.html',
        },
        {
            path: '/entretenimiento/',
            url: 'entretenimiento.html',
        },
        {
            path: "/disfruta/",
            url: "disfruta.html"
        },
        {
            path: "/restaurante/",
            url: "restaurante.html"
        },
        {
            path: "/tresestrellas/",
            url: "tresestrellas.html"
        },
        {
            path: "/cuatroestrellas/",
            url: "cuatroestrellas.html"
        },
        {
            path: "/cincoestrellas/",
            url: "cincoestrellas.html"
        },
        {

            path: "/novedadesuno/",
            url: "novedadesuno.html"
        },
        {
            path: "/actividades/",
            url: "actividades.html"

        },
        {

            path: "/hospedarse/",
            url: "hospedarse.html"
        },
        {
            path: "/hoteles/",
            url: "hoteles.html"
        },
        {
            path: "/treses-hoteles/",
            url: "treses-hoteles.html"
        }, {
            path: "/cuatroes-hoteles/",
            url: "cuatroes-hoteles.html"
        }, {
            path: "/cincoes-hoteles/",
            url: "cincoes-hoteles.html"

        }, {
            path: "/primeranovedad/",
            url: "primeranovedad.html"
        },
        {
            path: "/segundanovedad/",
            url: "segundanovedad.html"
        },
        {
            path: "/terceranovedad/",
            url: "terceranovedad.html"
        },
        {
            path: "/vidanocturna/",
            url: "vidanocturna.html"
        },
        {
            path: "/compras/",
            url: "compras.html"
        },
        {
            path: "/airelibre/",
            url: "airelibre.html"
        },
        {
            path: "/rutas/",
            url: "rutas.html"
        },
        {
            path: "/atracciones/",
            url: "atracciones.html"
        },
    ],
    // ... other parameters
});


var mainView = app.views.create('.view-main');

var abrirPopupInicial = app.popup.open(".popup-inicial");
//var cerrarPopup;
//function cerrar_popup(){
//    cerrarPopup = setTimeout(function(){
//        var abrirPopupInicial = app.popup.close(".popup-inicial", true);
//    }, 3000);
//};
//cerrar_popup()

