# Age-Calculator

This is a simple web-based age calculator application that allows users to enter their birth date and calculate their current age in years, months, and days. The project includes error handling for invalid dates, responsive design, and subtle animations to enhance the user experience.


Features
Accurate Age Calculation: Displays the user's age in years, months, and days.
Error Handling: Alerts the user if an invalid date (e.g., a future date or empty input) is entered.
Responsive Design: The application is optimized for both desktop and mobile screens.
Animations: Smooth animations for buttons and result display to improve UI interactivity.
Demo
You can try out the application here: Live Demo Link

Technologies Used
HTML5: Basic structure of the web page.
CSS3: Styling, responsiveness, and animations.
JavaScript: Date calculations and error handling.
Setup Instructions
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/age-calculator.git
Navigate to the project directory:

bash
Copy code
cd age-calculator
Open the index.html file: Simply open the index.html file in your preferred browser.

No additional dependencies are required for this project.

Usage
Enter your date of birth in the input field in the format DD-MM-YYYY.
Click on the Calculate Age button.
Your age in years, months, and days will be displayed below the button.
If an invalid date is entered, an alert will notify you to enter a valid date.
Code Overview
JavaScript (script.js)
The JavaScript file contains the logic for calculating the user's age and validating input. It checks for:

Empty date input.
Dates that are in the future.
Accurate year, month, and day calculations.
CSS (style.css)
The CSS file styles the layout and adds responsiveness for different screen sizes. It also includes:

Fade-in animation for the result display.
Button animations for hover effects.
Responsive adjustments for mobile and tablet views.
Folder Structure
plaintext
Copy code
age-calculator/
├── index.html      # Main HTML file
├── style.css       # CSS styling for layout, animations, and responsiveness
├── script.js       # JavaScript for age calculation and error handling
└── README.md       # Project description and setup instructions
License
This project is licensed under the MIT License.

Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

Acknowledgments
Designed and developed by Your Name.
Inspiration from similar age calculator projects.
Special thanks to CSS and JavaScript documentation from MDN Web Docs.
