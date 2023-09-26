$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });

  
  $(document).ready(function() {
   // Handle form submission
   $("#contact-form").submit(function(e) {
     e.preventDefault();
     const formData = $(this).serialize();
 
     // Send form data to your server
     $.ajax({
       type: "POST",
       url: 'YOUR_SERVER_ENDPOINT', // Replace with your server endpoint
       data: formData,
       success: function(response) {
         // Handle success, e.g., show a success message
         alert("Message sent successfully!");
       },
       error: function(error) {
         // Handle error, e.g., show an error message
         alert("Error sending message. Please try again later.");
       }
     });
   });
 });
