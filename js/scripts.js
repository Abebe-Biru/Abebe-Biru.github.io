function showProjectDetails(projectName) {
    let details;
    switch (projectName) {
        case 'HerFil General Trading PLC Website':
            details = 'Developed using React, Tailwind CSS, Laravel, and MySQL. Implemented an image magnifier feature that greatly enhanced user experience and earned commendations from project mentors.';
            break;
        case 'SecuShare':
            details = 'A secure project idea sharing web app built using the MERN stack, Google Captcha, login limiting, CA practices, and encryption. Includes a database backup system to ensure data integrity and facilitate recovery.';
            break;
        case 'LangT':
            details = 'Language translation web app using Google Translate API and PHP to process user inputs. Translates among Amharic, Afaan Oromoo, Tigrigna, and other regional languages in Ethiopia and neighboring countries.';
            break;
        case 'AfaanCheck':
            details = 'Dictionary-based spell-checker developed using PHP and a binary-search algorithm for fast and efficient word validation.';
            break;
        default:
            details = 'Details about ' + projectName;
            break;
    }

    Swal.fire({
        title: projectName,
        text: details,
        icon: 'info',
        confirmButtonText: 'Close'
    });
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to handle form submission, like sending an email

    Swal.fire({
        title: 'Thank you!',
        text: 'Your message has been sent.',
        icon: 'success',
        confirmButtonText: 'Close'
    });

    // Clear the form
    document.getElementById('contactForm').reset();
});