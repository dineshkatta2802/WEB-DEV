document.addEventListener('DOMContentLoaded', () => {
    const schemeSearch = document.getElementById('scheme-search');
    const stateFilter = document.getElementById('state-filter');
    const beneficiaryFilter = document.getElementById('beneficiary-filter'); 

    const schemeList = document.getElementById('scheme-list');
    const schemeCards = schemeList ? schemeList.querySelectorAll('.scheme-card') : [];

    // --- Core Filtering Function ---
    function filterSchemes() {
        const searchText = schemeSearch.value.toLowerCase().trim();
        const selectedState = stateFilter.value;
        const selectedBeneficiary = beneficiaryFilter.value; 

        schemeCards.forEach(card => {
            const schemeName = card.querySelector('h3').textContent.toLowerCase();
            const schemeSummary = card.querySelector('.summary').textContent.toLowerCase();
            const cardState = card.getAttribute('data-state');
            const cardBeneficiary = card.getAttribute('data-beneficiary'); 

            // 1. Check Search Text
            const matchesSearch = schemeName.includes(searchText) || schemeSummary.includes(searchText);

            // 2. Check State Filter
            const matchesState = selectedState === 'all' || cardState === selectedState;
            
            // 3. Check Beneficiary Filter
            let matchesBeneficiary = false;
            if (selectedBeneficiary === 'all') {
                matchesBeneficiary = true;
            } else if (cardBeneficiary) {
                // Check if the card's beneficiary list (comma-separated) includes the selected filter
                const beneficiaryList = cardBeneficiary.split(',').map(item => item.trim());
                matchesBeneficiary = beneficiaryList.includes(selectedBeneficiary);
            }

            // Show or Hide the card
            if (matchesSearch && matchesState && matchesBeneficiary) {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none';
            }
        });
    }

    // --- Attach Event Listeners (Only if the elements exist on the page) ---
    if (schemeSearch) {
        schemeSearch.addEventListener('input', filterSchemes);
    }

    if (stateFilter) {
        stateFilter.addEventListener('change', filterSchemes);
    }
    
    if (beneficiaryFilter) {
        beneficiaryFilter.addEventListener('change', filterSchemes);
    }
});