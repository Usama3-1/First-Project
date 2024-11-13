document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    fetch("http://localhost:5000/submit", { // Adjust URL based on your backend setup
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form-message").textContent = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("form-message").textContent = "An error occurred. Please try again.";
    });
});
