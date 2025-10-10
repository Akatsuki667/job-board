document.addEventListener('DOMContentLoaded', function () {
    loadAdvertisements();
    
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.querySelector('.modal-card').style.display = 'none';
    });
});

function loadAdvertisements() {
    fetch("http://localhost:3000/api/applicant/offers")
        .then(response => response.json())
        .then(data => {
            data.forEach(offer => createCard(offer));
        });
}

function createCard(offer) {
    const template = document.querySelector('.ads-card');
    const container = document.querySelector('.ads-container');
    const clone = template.cloneNode(true);
    
    clone.querySelector('.ads-title').textContent = offer.title;
    clone.querySelector('.ads-short-description').textContent = offer.short_description;
    clone.style.display = 'block';
    
    // Clic sur Learn More
    clone.querySelector('.learn-more').addEventListener('click', () => {
        showModal(offer.id);
    });
    
    container.appendChild(clone);
}

function showModal(id) {
    fetch(`http://localhost:3000/api/applicant/offer/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log('Data: ', data)
            const ads = data[0];
            document.querySelector('.modal-title').textContent = ads.title;
            document.querySelector('.modal-long-description').textContent = ads.long_description;
            document.querySelector('.modal-wages').textContent = ads.wages;
            document.querySelector('.modal-working-time').textContent = ads.working_time;
            document.querySelector('.modal-place').textContent = ads.place;
            
            // Afficher
            document.querySelector('.modal-card').style.display = 'block';
        });
}