document.addEventListener('DOMContentLoaded', function() {
    // Select option cards
    const optionCards = document.querySelectorAll('.option-card');
    const optionSelects = document.querySelectorAll('.option-select');
    
    // Set initial selection (option 2 - most popular)
    selectOption(2);
    
    // Add click event to all option cards
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            const optionNumber = parseInt(this.dataset.option);
            selectOption(optionNumber);
        });
    });
    
    // Add click event to radio-like selectors
    optionSelects.forEach(select => {
        select.addEventListener('click', function(e) {
            e.stopPropagation();
            const optionNumber = parseInt(this.id.split('-')[1]);
            selectOption(optionNumber);
        });
    });
    
    // Function to select an option
    function selectOption(optionNumber) {
        // Update option card selection
        optionCards.forEach(card => {
            const cardOption = parseInt(card.dataset.option);
            if (cardOption === optionNumber) {
                card.classList.add('selected');
                document.getElementById(`select-${cardOption}`).classList.add('selected');
            } else {
                card.classList.remove('selected');
                document.getElementById(`select-${cardOption}`).classList.remove('selected');
            }
        });
        
        // Show/hide variant options
        document.querySelectorAll('.variant-options').forEach(variants => {
            variants.style.display = 'none';
        });
        
        const selectedVariants = document.getElementById(`variants-${optionNumber}`);
        if (selectedVariants) {
            selectedVariants.style.display = 'block';
        }
        
        // Update total price based on selection
        updateTotalPrice(optionNumber);
    }
    
    // Function to update total price
    function updateTotalPrice(optionNumber) {
        let price = "0.00";
        
        switch(optionNumber) {
            case 1:
                price = "10.00";
                break;
            case 2:
                price = "18.00";
                break;
            case 3:
                price = "24.00";
                break;
        }
        
        document.querySelector('.total').textContent = `Total : $${price} USD`;
    }
    
    // Handle dropdowns
    const sizeSelects = document.querySelectorAll('.size-select');
    const colorSelects = document.querySelectorAll('.color-select');
    
    // Show dropdown indicator on selects
    sizeSelects.forEach(select => {
        select.addEventListener('change', function() {
            this.style.fontWeight = this.value ? 'bold' : 'normal';
        });
    });
    
    colorSelects.forEach(select => {
        select.addEventListener('change', function() {
            this.style.fontWeight = this.value ? 'bold' : 'normal';
        });
    });
});