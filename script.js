document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const successMessage = document.getElementById("success-message");
    if (successMessage) successMessage.remove();

    const fields = [
        { id: "firstname", name: "First name", required: true },
        { id: "phone", name: "Phone", required: true, pattern: /^\d+$/, message: "Phone must contain only digits." },
        { id: "company", name: "Company", required: true },
        { id: "email", name: "Email", required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format." },
        { id: "message", name: "Message", required: false }
    ];

    let valid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorDiv = document.getElementById("error-" + field.id);
        input.classList.remove("error");
        errorDiv.textContent = "";
    });

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorDiv = document.getElementById("error-" + field.id);
        const value = input.value.trim();

        if (field.required && !value) {
            errorDiv.textContent = `${field.name} is required.`;
            input.classList.add("error");
            valid = false;
        } else if (field.pattern && !field.pattern.test(value)) {
            errorDiv.textContent = field.message || `${field.name} is invalid.`;
            input.classList.add("error");
            valid = false;
        }
    });

    if (valid) {
        
        const success = document.createElement("div");
        success.id = "success-message";
        success.textContent = "Form submitted successfully!";
        success.style.color = "green";
        success.style.marginTop = "15px";
        document.getElementById("contactForm").appendChild(success);

        
        fields.forEach(field => {
            document.getElementById(field.id).value = "";
        });
    }
});