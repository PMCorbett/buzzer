/* eslint-disable */
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or
// deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting
// see https://firebase.google.com/docs/web/setup

// * Here is is the code snippet to initialize Firebase Messaging in the Service
// * Worker when your app is not hosted on Firebase Hosting.

// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

importScripts('./api/environment');
importScripts('./syncWorker.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: '853833037639',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );

  self.triggerUpdateNotifications(self.registration);

  // Customize notification here
  const notificationTitle = payload.data.message;
  const notificationOptions = {
    body: payload.data.message,
    icon: '/api/icon',
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('notificationclick called', event);

  event.notification.close();
  event.waitUntil(
    self.clients.openWindow('/notifications').then(() => {
      const channel = new BroadcastChannel('notifications');

      channel.postMessage({
        action: 'fetchNotifications',
        result: {},
      });
    })
  );
});
// [END background_handler]
/* eslint-enable */
