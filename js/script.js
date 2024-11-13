/* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

header h1 {
    text-align: center;
    font-size: 2.5rem;
}

nav ul {
    list-style-type: none;
    text-align: center;
    margin-top: 10px;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
}

/* Sections */
.section {
    padding: 60px 0;
    text-align: center;
}

.container {
    width: 80%;
    margin: 0 auto;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

ul {
    list-style-type: disc;
    text-align: left;
    margin-top: 20px;
}

ul li {
    margin-bottom: 10px;
}

/* Image Styling */
img {
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 8px;
}

/* Contact form */
form {
    margin-top: 20px;
    text-align: left;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form button {
    background-color: #333;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

form button:hover {
    background-color: #555;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    nav ul li {
        display: block;
        margin-bottom: 10px;
    }
    
    img {
        max-width: 100%;
    }
}

