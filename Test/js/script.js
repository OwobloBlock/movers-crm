        let currentStep = 0;
        const steps = ['moving-details', 'room-selection', 'item-details', 'results'];

        function showStep(step) {
            document.querySelectorAll('.form-step').forEach(el => el.style.display = 'none');
            document.getElementById(`step-${steps[step]}`).style.display = 'block';
            updateProgress(step);
        }

        function nextStep() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }

        function prevStep() {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        }

        function updateProgress(step) {
            const progressSteps = document.querySelectorAll('.progress-bar .step');
            progressSteps.forEach((s, index) => {
                if (index <= step) s.classList.add('active');
                else s.classList.remove('active');
            });
        }

        // Initialize the form
        document.addEventListener('DOMContentLoaded', function() {
            showStep(0);
            initializeSearch();

            // Add event listeners to all "Next" and "Previous" buttons
            document.querySelectorAll('.form-step button').forEach(button => {
                if (button.textContent === 'Next') {
                    button.addEventListener('click', nextStep);
                } else if (button.textContent === 'Previous') {
                    button.addEventListener('click', prevStep);
                }
            });
        });

        // Update your form submission handler
        document.getElementById('movingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Process the form data and display results
                // You may want to call a function here to calculate and display the results
                showStep(3); // Show the results step
            }
        });

        // Your existing initializeSearch function here
        function initializeSearch() {
            const searchInput = document.getElementById('item-search');
            const clearButton = document.getElementById('clear-search');
            const items = document.querySelectorAll('.item-input');

            function performSearch() {
                const searchTerm = searchInput.value.toLowerCase();
                
                items.forEach(item => {
                    const itemName = item.querySelector('label').textContent.toLowerCase();
                    if (itemName.includes(searchTerm)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }

            searchInput.addEventListener('input', performSearch);

            clearButton.addEventListener('click', function() {
                searchInput.value = '';
                items.forEach(item => item.style.display = '');
            });
        }

        function calculateTotalCubicFeet() {
            return items.reduce((total, item) => {
                const count = parseInt(document.getElementById(item.id).value) || 0;
                return total + (count * item.cubicFeet);
            }, 0);
        }

        function renderItems() {
            const itemGrid = document.querySelector('.item-grid');
            if (!itemGrid) return;

            const itemsHTML = items.map(item => `
                <div class="item-input">
                    <img src="${item.icon}" alt="${item.name}" class="item-icon">
                    <label for="${item.id}">${item.name}</label>
                    <select id="${item.id}" name="${item.id}">
                        ${[0,1,2,3,4,5,6,7,8,9,10].map(num => 
                            `<option value="${num}">${num}</option>`
                        ).join('')}
                    </select>
                </div>
            `).join('');

            itemGrid.innerHTML = itemsHTML;
        }

        // Call this function when the page loads
        document.addEventListener('DOMContentLoaded', renderItems);
