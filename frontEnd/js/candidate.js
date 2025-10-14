document.addEventListener('DOMContentLoaded', function () {

    loadAdvertisements();
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.querySelector('.modal-card').style.display = 'none';
    });
    document.querySelector('.form-card form').addEventListener('submit', function (event) {
        event.preventDefault();
        exportForm();
    });
});

function loadAdvertisements() {
    fetch("http://localhost:3000/api/applicant/offers")
        .then(response => {
            if(!response.ok) {
                throw new Error('Loading advertisements failed.')
            }
            return response.json();
        })
        .then(data => {
            data.forEach(offer => createCard(offer));
        })
        .catch(error => {
            console.error('Error: ', error);
        })
}

function createCard(offer) {
    const template = document.querySelector('.ads-card');
    const container = document.querySelector('.ads-container');
    const clone = template.cloneNode(true);

    clone.querySelector('.ads-title').textContent = offer.title;
    clone.querySelector('.company-name').textContent = offer.company_name;
    clone.querySelector('.ads-short-description').textContent = offer.short_description;
    clone.style.display = 'block';

    // Clic sur Learn More
    clone.querySelector('.learn-more').addEventListener('click', () => {
        showModal(offer.id);
    });

    // Clic sur Apply
    clone.querySelector('.apply').addEventListener('click', () => {
        findUserId().then(userId => {
            fillForm(userId, offer.id);
        })
    });
    container.appendChild(clone);
}

function showModal(id) {
    fetch(`http://localhost:3000/api/applicant/offer/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Loading learn more failed.')
            }
            return response.json();
        })
        .then(data => {
            console.log('Data: ', data)
            const ads = data[0];
            document.querySelector('.modal-title').textContent = ads.title;
            document.querySelector('.modal-company-name').textContent = ads.company_name;
            document.querySelector('.modal-long-description').textContent = ads.long_description;
            document.querySelector('.modal-wages').textContent = ads.wages;
            document.querySelector('.modal-working-time').textContent = ads.working_time;
            document.querySelector('.modal-place').textContent = ads.place;

            // Afficher
            document.querySelector('.modal-card').style.display = 'block';
        })
        .catch(error => {
            console.error('Error: ', error);
            alert('Error when loadinf details');
        })
}

function fillForm(userId, adsID) {
    fetch(`http://localhost:3000/api/applicant/user/${userId}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Error user doesn\'t exist.')
            }
            return response.json();
        })
        .then(data => {
            console.log('Data: ', data)
            document.getElementById('form-name').value = data.name;
            document.getElementById('form-email').value = data.email;
            document.getElementById('form-phone').value = data.phone;
            document.getElementById('form-id-user').value = userId;
            document.getElementById('form-id-ads').value = adsID;

            // Afficher
            document.querySelector('.form-card').style.display = 'block';
        })
        .catch(error => {
            console.error('Error: ', error);
            alert('Error when loading user data')
        })
}

function findUserId() {
    return fetch('http://localhost:3000/api/auth/me', {
        method: 'GET',
        credentials: 'include'
    })
        .then(response => {
            if(!response.ok) {
                throw new Error('Not authenticated');
            }
            return response.json();
        })
        .then(data => {
            if (data.user) {
                return data.user.id;
            } else {
                console.log("User not logged in ");
                return null;
            }
        })
        .catch(error => {
            console.error("Error in findUserId :", error);
            return null;
        });
}


function exportForm() {
    const application = {
        id_people: document.getElementById('form-id-user').value,
        id_advertisement: document.getElementById('form-id-ads').value,
        message: document.getElementById('Message').value
    };

    fetch('http://localhost:3000/api/applicant/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application)
    })
        .then(response => {
            if(!response.ok) {
                throw new Error('Application submission failed');
            }
            return response.json();
        })
        .then(data => {
            alert('Application sent!');
            console.log('Server response:', data);
            document.querySelector('.form-card form').reset();
            document.querySelector('.form-card').style.display = 'none';
        })
        .catch(error => {
            console.error('Submission error :', error);
            alert('An error has occurred. Please try again later.');
        });
}
