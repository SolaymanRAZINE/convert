document.addEventListener('DOMContentLoaded', () => {
    const convertEuroBtn = document.getElementById('convertEuroBtn');
    const euroInput = document.getElementById('euroInput');
    const resultEuroDiv = document.getElementById('resultEuro');

    const convertDollarBtn = document.getElementById('convertDollarBtn');
    const dollarInput = document.getElementById('dollarInput');
    const resultDollarDiv = document.getElementById('resultDollar');

    convertEuroBtn.addEventListener('click', () => {
        const euroValue = parseFloat(euroInput.value);
        if (!isNaN(euroValue)) {
            const convertedValue = euroValue * 220;
            resultEuroDiv.textContent = `${euroValue.toLocaleString()} € = ${convertedValue.toLocaleString()} DA`;
        } else {
            resultEuroDiv.textContent = 'Please enter a valid number';
        }
    });

    convertDollarBtn.addEventListener('click', () => {
        const dollarValue = parseFloat(dollarInput.value);
        if (!isNaN(dollarValue)) {
            const convertedValue = dollarValue / 220;
            resultDollarDiv.textContent = `${dollarValue.toLocaleString()} DA = ${convertedValue.toFixed(2).toLocaleString()} €`;
        } else {
            resultDollarDiv.textContent = 'Please enter a valid number';
        }
    });
});
