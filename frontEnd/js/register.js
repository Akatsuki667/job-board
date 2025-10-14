document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        
        // Fetch data to buil JavaScript object
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const status = document.querySelector('input[name="status"]:checked').value;

        // Create JavaScript object with data
        const registerData = {
            email: email,
            password: password,
            name: name,
            phone: phone,
            status: status
        };

        // Send registerData to database
        fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Conversion JavaScript object to string to send request
            body: JSON.stringify(registerData)
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Error registration');
            }
            return response.json();
        })
        .then(data => {
            alert('Registration successful! Redirecting to login');
            setTimeout(() => {
                window.location.href = data.redirect;
            }, 1000);
        })
        .catch (error => {
        console.error('Error: ', error)
        alert('Server error. Please try again later.');
        });
    });
});