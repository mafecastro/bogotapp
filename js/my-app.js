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
    routes: [
        {
            path: '/about/',
            url: 'about.html',
    },

        {
            path: '/tours/',
            url: 'tours.html',
 },
        {
            path: '/quever/',
            url: 'quever.html',

    },
        {
        path:"/disfruta/",
        url:"disfruta.html"
    },
    {
        path:"/restaurante/",
        url:"restaurante.html"
    },
    {
        path:"/tresestrellas/",
        url:"tresestrellas.html"
    },
      {
        path:"/cuatroestrellas/",
        url:"cuatroestrellas.html"
    },
      {
        path:"/cincoestrellas/",
        url:"cincoestrellas.html"
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
