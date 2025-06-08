// Basic interactivity for the landing page

// Add to Cart functionality
function addToCart() {
    const color = document.getElementById('color')?.value || document.getElementById('colorSelect')?.value;
    const size = document.getElementById('size')?.value;

    if (!color || (size && !size)) {
        alert('Please select a color and size.');
        return;
    }

    alert(`Added to cart: SHYT KICKERS - Color: ${color}${size ? `, Size: ${size}` : ''}`);
    // Integrate with Shopify PreOrder Now API or cart functionality here
}

// Email Signup Form Submission
document.getElementById('emailForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (email) {
        alert(`Thank you for signing up with ${email}!`);
        // Integrate with Klaviyo API here
        document.getElementById('emailForm').reset();
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});