document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("https://getform.io/f/anlqxnpa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        document.getElementById("contact-form").reset();
        document.getElementById("success-message").style.display = "block";
    } else {
        alert("Hubo un error al enviar el formulario.");
    }
});