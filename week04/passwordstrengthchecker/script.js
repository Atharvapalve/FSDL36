function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('strengthIndicator');
    const strengthText = document.getElementById('strengthText');
    
    let strength = 0;
    
    // Check password strength based on various conditions
    if (password.length >= 8) {
        strength += 1;
    }
    if (/[a-z]/.test(password)) {
        strength += 1;
    }
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }
    if (/\d/.test(password)) {
        strength += 1;
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength += 1;
    }

    // Display strength level and style based on strength value
    if (strength === 0) {
        strengthIndicator.className = 'strength-indicator';
        strengthText.innerText = 'Password is too weak';
        strengthText.style.color = 'red';
    } else if (strength <= 2) {
        strengthIndicator.className = 'strength-indicator weak';
        strengthText.innerText = 'Weak Password';
        strengthText.style.color = 'red';
    } else if (strength === 3) {
        strengthIndicator.className = 'strength-indicator medium';
        strengthText.innerText = 'Medium Password';
        strengthText.style.color = 'orange';
    } else if (strength === 4) {
        strengthIndicator.className = 'strength-indicator strong';
        strengthText.innerText = 'Strong Password';
        strengthText.style.color = 'green';
    } else {
        strengthIndicator.className = 'strength-indicator strong';
        strengthText.innerText = 'Very Strong Password';
        strengthText.style.color = 'green';
    }
}
