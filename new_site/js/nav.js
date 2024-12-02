document.addEventListener('DOMContentLoaded', function() {
    // Determine the base URL based on the current location
    const baseUrl = window.location.pathname.includes('/') ? '../' : './';
    
    fetch(baseUrl + '/new_site/html/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});
