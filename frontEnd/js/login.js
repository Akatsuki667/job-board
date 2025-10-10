document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', async (e) => {
        e.preventDefault();

        // Fetch data to buil JavaScript object
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create Javascript object
        const loginData = {
            email: email,
            password: password
        }

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(loginData)
            })

            const data = await response.json();

            if (response.ok) {
                console.log('User is connected');
                // Redirection to candidat, company or admin view
                setTimeout(() => {
                    window.location.href = data.redirect;
                }, 1000);
            }
        } catch (error) {
            console.error('Error server', error);
        }
    });
})