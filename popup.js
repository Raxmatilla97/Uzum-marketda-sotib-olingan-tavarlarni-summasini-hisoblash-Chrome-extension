document.getElementById('calculate').addEventListener('click', function() {
  chrome.tabs.executeScript({
    code: '(' + updateTotalSum.toString() + ')();'
  });
});
// JavaScript bilan oyna hajmini o'zgartirish
document.addEventListener('DOMContentLoaded', function() {
  window.resizeTo(300, 200); // Oyna hajmini bu yerda sozlang
});

document.addEventListener('DOMContentLoaded', function() {
  // Tashqi havolalar uchun tinglovchini qo'shish
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      chrome.tabs.create({url: this.href});
    });
  });
});
