document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();

        // Fetch data to buil JavaScript object
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create Javascript object
        const loginData = {
            email: email,
            password: password
        }

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error('Login failed.');
            }
            return response.json();
        })
        .then((data) => {
            alert('Login successful!');
            setTimeout(() => {
                window.location.href = data.redirect;
            }, 1000);
        })
        .catch (error => {
            console.error('Error : ', error)
            alert('Server error. Please try again later.')
        })
    });
})