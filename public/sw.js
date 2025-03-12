self.addEventListener("push", function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/images/192.png",
      badge: "/images/512.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener("notificationclick", function (event) {
  // console.log("Notification click received.");
  event.notification.close();
  event.waitUntil(clients.openWindow(process.env.NEXT_PUBLIC_WEB_URL));
});
