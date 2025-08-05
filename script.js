if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function enviarNotificacao() {
  Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        reg.showNotification("🔔 Nova Notificação", {
          body: "Essa é uma notificação com ícone fake!",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
          image: "https://i.imgur.com/8Km9tLL.jpg"
        });
      });
    }
  });
}
