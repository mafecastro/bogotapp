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
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');