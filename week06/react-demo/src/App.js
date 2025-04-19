import React, { useState } from 'react';

function MarksCalculator() {
  const [totalMarks, setTotalMarks] = useState('');
  const [obtainedMarks, setObtainedMarks] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [grade, setGrade] = useState('');

  // Calculate percentage and grade
  const calculatePercentage = () => {
    const total = parseFloat(totalMarks);
    const obtained = parseFloat(obtainedMarks);

    if (total && obtained) {
      const calculatedPercentage = (obtained / total) * 100;
      setPercentage(calculatedPercentage);
      setGrade(getGrade(calculatedPercentage));
    } else {
      alert("Please enter valid marks!");
    }
  };

  // Determine the grade based on percentage
  const getGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    else if (percentage >= 80) return 'A';
    else if (percentage >= 70) return 'B+';
    else if (percentage >= 60) return 'B';
    else if (percentage >= 50) return 'C';
    else return 'F';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Student Marks Percentage Calculator</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Total Marks: </label>
        <input
          type="number"
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
          placeholder="Enter total marks"
          style={{ padding: '5px', width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Obtained Marks: </label>
        <input
          type="number"
          value={obtainedMarks}
          onChange={(e) => setObtainedMarks(e.target.value)}
          placeholder="Enter obtained marks"
          style={{ padding: '5px', width: '100%' }}
        />
      </div>
      <button
        onClick={calculatePercentage}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Calculate Percentage
      </button>

      {percentage !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          <p>Percentage: {percentage.toFixed(2)}%</p>
          <p>Grade: {grade}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MarksCalculator />
    </div>
  );
}

export default App;
