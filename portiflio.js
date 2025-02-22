document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
      var progress = bar.dataset.progress;
      bar.style.width = progress + '%';
    });
  
    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };
  
      emailjs.send('service_id', 'template_id', formData)
        .then(function(response) {
          alert('Message sent successfully!');
          document.getElementById('contact-form').reset();
          // Send message to shariifbinisimba@gmail.com
          window.location.href = "mailto:shariifbinisimba@gmail.com?subject=New Message from " + formData.name + "&body=" + formData.message;
        }, function(error) {
          alert('Failed to send message. Please try again later.');
        });
    });
  
    // Add like button functionality
    document.querySelectorAll('.like-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        alert('You liked this project!');
      });
    });
  
    // Add comment button functionality
    document.querySelectorAll('.comment-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        var comment = prompt('Enter your comment:');
        if (comment) {
          alert('Comment added: ' + comment);
        }
      });
    });
  });