document.addEventListener('DOMContentLoaded', function() {
    // Determine the base URL based on the current location
    let baseUrl = './';
    const pathArray = window.location.pathname.split('/');
    if (pathArray.length > 2) {
        baseUrl = '../'.repeat(pathArray.length - 2);
    }
    
    fetch(baseUrl + 'html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});