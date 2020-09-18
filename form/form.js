const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault();

    let nameID = document.getElementById('nameID');
    let businessID = document.getElementById('businessID');
    let emailID = document.getElementById('emailID');
    let msgID = document.getElementById('msgID');

    nameID.value = '';
    businessID.value = '';
    emailID.value = '';
    msgID.value = '';
}