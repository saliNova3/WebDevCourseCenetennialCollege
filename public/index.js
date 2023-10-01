 // Function to handle form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Capture form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

     
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Contact Number:', contactNumber);
        console.log('Email:', email);
        console.log('Message:', message);

        
        window.location.href = 'http://127.0.0.1:3000/';
    });