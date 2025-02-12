document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll effect
    document.querySelector("a[href='#apply']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
    });

    // Form validation
    document.getElementById("leadForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;

        if (name === "" || email === "" || phone === "" || country === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Enter a valid email address.");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        alert("Form submitted successfully!");
        document.getElementById("leadForm").reset();
    });
});
