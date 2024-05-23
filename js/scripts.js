function showProjectDetails(projectName) {
    Swal.fire({
        title: projectName,
        text: 'Details about ' + projectName,
        icon: 'info',
        confirmButtonText: 'Close'
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
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
