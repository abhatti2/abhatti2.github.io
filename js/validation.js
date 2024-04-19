document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form input values
        const firstName = document.getElementById('firstNameInput').value.trim();
        const lastName = document.getElementById('lastNameInput').value.trim();
        const age = document.getElementById('ageInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const phone = document.getElementById('phoneInput').value.trim();
        const comments = document.getElementById('commentsInput').value.trim();

        // Reset error messages and field styles
        resetForm();

        // Validate each input field
        let isValid = true;

        // Validate first name
        if (firstName === '') {
            isValid = false;
            displayErrorMessage('firstNameError');
            highlightField('firstNameInput');
        }

        // Validate last name
        if (lastName === '') {
            isValid = false;
            displayErrorMessage('lastNameError');
            highlightField('lastNameInput');
        }

        // Validate age
        if (age === '' || parseInt(age) < 18) {
            isValid = false;
            displayErrorMessage('ageError');
            highlightField('ageInput');
        }

        // Validate email
        if (email === '') {
            isValid = false;
            displayErrorMessage('emailError');
            highlightField('emailInput');
        } else if (!isValidEmail(email)) {
            isValid = false;
            displayErrorMessage('emailError');
            highlightField('emailInput');
        }

        // Validate phone number
        if (phone === '') {
            isValid = false;
            displayErrorMessage('phoneError');
            highlightField('phoneInput');
        } else if (!isValidPhoneNumber(phone)) {
            isValid = false;
            displayErrorMessage('phoneError');
            highlightField('phoneInput');
        }

        // Validate comments
        if (comments === '') {
            isValid = false;
            displayErrorMessage('commentsError');
            highlightField('commentsInput');
        }

        // If all inputs are valid, submit the form
        if (isValid) {
            form.submit();
        }
    });

    // Add event listener for form reset
    form.addEventListener('reset', function () {
        resetForm();
    });

    // Function to reset form
    function resetForm() {
        const errorMessages = document.querySelectorAll('.errorMessage');
        errorMessages.forEach(function (errorMessage) {
            errorMessage.classList.add('hide');
        });

        const inputFields = document.querySelectorAll('input, textarea');
        inputFields.forEach(function (field) {
            field.style.backgroundColor = '';
            field.style.color = '';
        });
    }

    // Function to display error message
    function displayErrorMessage(id) {
        const errorMessage = document.getElementById(id);
        errorMessage.classList.remove('hide');
    }

    // Function to highlight field
    function highlightField(id) {
        const field = document.getElementById(id);
        field.style.backgroundColor = '#F8D7DA';
        field.style.color = '#721C24';
    }

    // Function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number
    function isValidPhoneNumber(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }
});
