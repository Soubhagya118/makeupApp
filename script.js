const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  


// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle adding items to the cart
function addToCart(event) {
  const product = event.target.parentElement;
  const productName = product.querySelector('h3').textContent;
  
  // You can customize this function to add the selected product to the cart
  // For now, we will just log the product name to the console
  console.log(`Added ${productName} to the cart`);
}
// =====================================slider======================================

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Perform form validation
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');
  
      var name = nameInput.value.trim();
      var email = emailInput.value.trim();
      var message = messageInput.value.trim();
  
      var isValid = true;
  
      if (name === '') {
        isValid = false;
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
  
      if (email === '') {
        isValid = false;
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
  
      if (message === '') {
        isValid = false;
        messageInput.classList.add('error');
      } else {
        messageInput.classList.remove('error');
      }
  
      // If form is valid, submit the form
      if (isValid) {
        // Perform any necessary actions with the form data
        // For example, you can send the form data to a server using AJAX
        
        // Reset the form
        form.reset();
      }
    });
  });
  
