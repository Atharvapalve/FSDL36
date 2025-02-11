function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth.');
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const ageMonths = today.getMonth() - birthDate.getMonth();
    const ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
    }

    const ageMonthsFinal = (ageMonths + 12) % 12; // Adjust for months that may be negative
    const ageDaysFinal = ageDays < 0 
        ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + ageDays
        : ageDays;

    const resultText = `You are ${ageYears} years, ${ageMonthsFinal} months, and ${ageDaysFinal} days old.`;
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
}
