document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', async (e) => {
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

        try {
            // Send registerData to database
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });

            // Response of server
            const data = await response.json();

            if (response.ok) {
                alert('Registration successful! Redirecting to login...');
                // Reidrection client to login
                setTimeout(() => {
                    window.location.href = data.redirect || '/';
                }, 1000);
            } else {
                alert(`Error: ${data.error || 'Registration failed'}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Server error. Please try again later.');
        }
    });
});