let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    "C++": 0  // Corrected C++ to be properly recognized
};

let totalVotes = 0;

function submitVote() {
    const options = document.getElementsByName('option');
    let selectedOption = '';
    for (let option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption) {
        // Update the vote count for the selected option
        votes[selectedOption]++;
        totalVotes++;

        // Update the UI
        updateResults();
    } else {
        alert('Please select an option!');
    }
}

function updateResults() {
    // Display total votes
    document.getElementById('totalVotes').innerText = `Total Votes: ${totalVotes}`;

    const voteResultsContainer = document.getElementById('voteResults');
    voteResultsContainer.innerHTML = ''; // Clear previous results

    // Create a simple result display for each option
    for (let option in votes) {
        const voteCount = votes[option];
        const percentage = totalVotes === 0 ? 0 : (voteCount / totalVotes) * 100;

        // Create the vote result section
        const voteResult = document.createElement('div');
        voteResult.classList.add('vote-result');
        
        const voteCountElem = document.createElement('div');
        voteCountElem.classList.add('vote-count');
        voteCountElem.innerText = `${option}: ${voteCount} votes`;

        const votePercentageElem = document.createElement('div');
        votePercentageElem.classList.add('vote-percentage');
        votePercentageElem.innerText = `(${percentage.toFixed(2)}%)`;

        voteResult.appendChild(voteCountElem);
        voteResult.appendChild(votePercentageElem);
        voteResultsContainer.appendChild(voteResult);
    }
}
