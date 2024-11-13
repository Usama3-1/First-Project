
function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height from cm to meters

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerText = "Please enter valid values for weight and height.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display result
    document.getElementById('bmi-result').innerHTML = `Your BMI is <strong>${roundedBMI}</strong>, which is considered <strong>${category}</strong>.`;
}

// Function to calculate the number of team members
function updateTeamCount() {
    const teamMembers = document.querySelectorAll('.team-member'); // Select all team-member elements
    const count = teamMembers.length; // Count the team members
    const teamCountElement = document.getElementById('teamCount');

    // Update the team count display
    teamCountElement.textContent = `Total Team Members: ${count}`;
}

// Call the function to set the initial count on page load
updateTeamCount();
