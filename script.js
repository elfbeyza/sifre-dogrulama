const inputs = document.querySelectorAll('.psswrd-card-inputs input');
const button = document.querySelector('.psswrd-card button');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const nextElement = inputs[index + 1];
        const prevElement = inputs[index - 1];
        
        // Girilen değerin sayısal olup olmadığını kontrol edin ve sayısal değilse temizleyin
        if (!/^[0-9]$/.test(input.value)) {
            input.value = '';
            return;
        }
        
        // Eğer input doluysa bir sonraki input'a geç
        if (input.value && nextElement) {
            nextElement.focus();
        }

        // Tüm input alanları dolduysa, butonu aktif yap
        const allFilled = Array.from(inputs).every(input => input.value);
        button.disabled = !allFilled;
    });

    input.addEventListener('keydown', (e) => {
        const prevElement = inputs[index - 1];

        // Backspace tuşuna basıldığında önceki input'a geç
        if (e.key === 'Backspace' && !input.value && prevElement) {
            prevElement.focus();
        }
    });
});
