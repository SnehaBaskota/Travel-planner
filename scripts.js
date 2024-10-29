function applyFilter() {
    const dateInput = document.getElementById('date').value;
    const priceInput = parseFloat(document.getElementById('price').value);

    // Get all cruises
    const cruises = document.querySelectorAll('.cruise');

    cruises.forEach(cruise => {
        const cruisePrice = parseFloat(cruise.getAttribute('data-price'));
        const cruiseDate = cruise.getAttribute('data-date');

        // Show or hide cruises based on date and price
        if ((isNaN(priceInput) || cruisePrice <= priceInput) && 
            (!dateInput || cruiseDate >= dateInput)) {
            cruise.style.display = 'block';
        } else {
            cruise.style.display = 'none';
        }
    });
}
