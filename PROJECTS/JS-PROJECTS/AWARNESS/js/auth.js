document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in (Simple Flag Check)
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();

    // Check if the user is on the login page or the root path
    const isLoginPage = currentPage === 'login.html' || currentPage === ''; 

    if (isLoggedIn !== 'true' && !isLoginPage) {
        // Not logged in and not on the login page, redirect to login
        window.location.href = 'login.html';
    } else if (isLoggedIn === 'true' && isLoginPage) {
        // Logged in but landed on the login page/root, redirect to the Landing Page (index.html)
        window.location.href = 'index.html'; // Redirect to Landing Page
    }
});

/**
 * Handles the logout process.
 * Clears the flag and redirects to the login page.
 */
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

/**
 * Handles the login process (only called from login.html).
 */
function login(event) {
    if (event) {
        event.preventDefault(); // Stop form submission/page reload
    }
    
    const passwordInput = document.getElementById('password').value;
    
    // Simple placeholder password check
    if (passwordInput === 'aware@123') { 
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the Landing Page (index.html) after successful login
        window.location.href = 'index.html'; // Redirect to Landing Page
    } else {
        alert('Invalid Password. Please try again.');
    }
}
