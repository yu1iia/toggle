document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleText = document.getElementById('toggleText');
    const toggleIcon = document.getElementById('toggleIcon');
    const checkboxes = document.querySelectorAll('.product-checkbox');

    // Funkcja aktualizująca wygląd przycisku głównego
    function updateButtonState() {
        // Sprawdzamy czy choć jeden jest zaznaczony
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);

        if (anyChecked) {
            // Tryb: Odznacz wszystko
            toggleText.textContent = "Odznacz";
            toggleIcon.textContent = "❌";
            toggleBtn.classList.add('is-active');
        } else {
            // Tryb: Zaznacz wszystko
            toggleText.textContent = "Zaznacz";
            toggleIcon.textContent = "✅";
            toggleBtn.classList.remove('is-active');
        }
    }

    // Obsługa kliknięcia w przycisk główny (Toggle)
    toggleBtn.addEventListener('click', function() {
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
        
        if (anyChecked) {
            // Jeśli coś zaznaczone -> odznaczamy wszystko
            checkboxes.forEach(cb => cb.checked = false);
        } else {
            // Jeśli nic nie zaznaczone -> zaznaczamy wszystko
            checkboxes.forEach(cb => cb.checked = true);
        }
        
        updateButtonState();
    });

    // Nasłuchiwanie zmian na każdym checkboxie z osobna
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateButtonState);
    });
});