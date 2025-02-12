// Facebook Pixel Initialization
!function(f,b,e,v,n,t,s) {
    if(f.fbq) return; 
    n=f.fbq=function() {
        n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)
    };
    if(!f._fbq) f._fbq=n; 
    n.push=n; n.loaded=!0; 
    n.version='2.0';
    n.queue=[]; 
    t=b.createElement(e); 
    t.async=!0;
    t.src=v; 
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1330381201617525'); 
fbq('track', 'PageView'); 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("a[href='#apply']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("leadForm").addEventListener("submit", function (e) {
        e.preventDefault();      
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;

        // Validation checks
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
        // Storing the form data into the local storage 
        const formData = {
            name: name,
            email: email,
            phone: phone,
            country: country
        };

        localStorage.setItem("leadFormData", JSON.stringify(formData));
        fbq('track', 'Lead', {
            content_name: 'Study MBBS Abroad Lead',  
            value: 1.00,  
            currency: 'USD'  
        });

        alert("Form submitted successfully!");
        document.getElementById("leadForm").reset(); 
    });
});
