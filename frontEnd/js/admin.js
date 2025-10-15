document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
});

function loadUsers() {
    fetch("http://localhost:3000/api/admin/")
    .then(response => {
        if(!response.ok) {
            throw new Error('Loading users failed')
        }
        return response.json();
    })
    .then(data => {
        data.forEach(user => createCard(user));
            
    })
    .catch(error => {
        console.error('Error: ', error);
        alert("Error server to loading users");
    })
}

function createCard(user) {
    const container = document.querySelector('.users');
    const candidateTemplate = document.querySelector('.candidate');
    const companyTemplate = document.querySelector('.company');
    
    if (user.status === 'candidate') {
        const cloneCandidate = candidateTemplate.cloneNode(true);
        cloneCandidate.querySelector('#name').textContent = user.name;
        cloneCandidate.querySelector('#status').textContent = user.status;
        cloneCandidate.style.display = 'block';
        container.appendChild(cloneCandidate);
        
    } else if (user.status === 'company') {
        const cloneCompany = companyTemplate.cloneNode(true);
        cloneCompany.querySelector('#nameCompany').textContent = user.name;
        cloneCompany.querySelector('#statusCompany').textContent = user.status;
        cloneCompany.style.display = 'block';
        container.appendChild(cloneCompany);
    }
}