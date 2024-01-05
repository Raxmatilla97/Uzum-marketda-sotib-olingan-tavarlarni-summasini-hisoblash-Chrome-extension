function updateTotalSum() {
    // Faqat ma'lum URL uchun ishlaydi
    if (window.location.href !== 'https://uzum.uz/ru/user/orders?filter=all') {
        return;
    }

    const priceElementsSelector = 'span.currency[data-test-id="text__order-price"]';
    const priceElements = document.querySelectorAll(priceElementsSelector);

    const sum = Array.from(priceElements)
        .map(el => parseFloat(el.textContent.replace(/\D/g, '')))
        .reduce((acc, price) => acc + price, 0);

    let totalDiv = document.getElementById('totalSumDisplay');
    if (!totalDiv) {
        totalDiv = document.createElement('div');
        totalDiv.id = 'totalSumDisplay';
        totalDiv.style.position = 'fixed';
        totalDiv.style.bottom = '100px';
        totalDiv.style.right = '10px';
        totalDiv.style.padding = '10px';
        totalDiv.style.background = 'lightgreen';
        totalDiv.style.zIndex = '1000';
        document.body.appendChild(totalDiv);
    }
    totalDiv.textContent = `Umumiy summa: ${sum.toLocaleString()} SOM`;
}

// Sahifani yuklanganda va har 5 soniyada hisob-kitobni yangilash
setInterval(updateTotalSum, 1000);

// Skroll voqeasini kuzatish
window.addEventListener('scroll', updateTotalSum);

// Dastlabki hisoblash uchun funksiyani chaqirish
updateTotalSum();
