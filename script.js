document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    try {
        const response = await fetch('https://tu-endpoint.com/contact', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        document.getElementById('responseMessage').innerText = result.message;
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'Error al enviar el mensaje';
    }
});