// Проверяем, есть ли в User-Agent упоминание Windows или Macintosh (Mac)
const isDesktop = /Windows/i.test(navigator.userAgent);

if (!isDesktop) {
    window.location.href = "error.html"
}