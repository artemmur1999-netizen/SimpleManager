const userAgent = navigator.userAgent;

// 1. Проверяем, является ли посетитель поисковым роботом
const isBot = /Googlebot|Google-InspectionTool|YandexBot|bingbot/i.test(userAgent);

// 2. Проверяем, является ли устройство ПК (Windows)
const isDesktop = /Windows/i.test(userAgent);

// Если это НЕ ПК и при этом НЕ поисковый робот — только тогда перенаправляем на ошибку
if (!isDesktop && !isBot) {
    window.location.href = "error.html";
}
