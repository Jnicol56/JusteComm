$(document).ready(function() {
  // Function to display a thank you message
  function showThankYouMessage() {
    // Hide the form
    var form = document.getElementById('contact-form');
    form.style.display = 'none';

    // Display the thank you message
    var thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
  }

  // Handle form submission
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    const formData = $(this).serialize();

    // Send form data to your server (replace 'YOUR_SERVER_ENDPOINT' with your actual server endpoint)
    $.ajax({
      type: "POST",
      url: 'YOUR_SERVER_ENDPOINT',
      data: formData,
      success: function(response) {
        // Handle success, e.g., show a success message
        alert("Message sent successfully!");
        showThankYouMessage(); // Display thank you message
      },
      error: function(error) {
        // Handle error, e.g., show an error message
        alert("Error sending message. Please try again later.");
      }
    });
  });
});
