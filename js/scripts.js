(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

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

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then((response) => {
        Swal.fire({
            title: 'Thank you!',
            text: 'Your message has been sent.',
            icon: 'success',
            confirmButtonText: 'Close'
        });
        document.getElementById('contactForm').reset();
    }, (error) => {
        Swal.fire({
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
            icon: 'error',
            confirmButtonText: 'Close'
        });
    });
});
