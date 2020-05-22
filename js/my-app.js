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
  ],
    // ... other parameters
});

<<
<<
<< < HEAD
var mainView = app.views.create('.view-main'); ===
===
=
var mainView = app.views.create('.view-main');

var abrirPopupInicial = app.popup.open(".popup-inicial");
//var cerrarPopup;
//function cerrar_popup(){
//    cerrarPopup = setTimeout(function(){
//        var abrirPopupInicial = app.popup.close(".popup-inicial", true);
//    }, 3000);
//};
//cerrar_popup()
>>>
>>>
> 829 ba96baa2fd3cbd2e08987bea8b042ec6d9712
