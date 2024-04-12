document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;

    // Send registration info via email (replace with your own logic)
    var emailBody = 'Name: ' + name + '\nEmail: ' + email;
    window.location.href = 'mailto:your-email@example.com?subject=New Registration&body=' + encodeURIComponent(emailBody);
});

// // Array of testimonial image URLs
// const testimonialImages = [
//     "testimonial1.jpg",
//     "testimonial2.jpg",
//     "testimonial3.jpg",
//     "testimonial4.jpg",
//     "testimonial5.jpg",
//     "testimonial6.jpg"
//   ];
  
//   // Dynamically generate the testimonial images
//   const testimonialImagesContainer = document.querySelector(".testimonial-images");
  
//   testimonialImages.forEach(imageURL => {
//     const testimonialImage = document.createElement("img");
//     testimonialImage.src = imageURL;
//     testimonialImage.alt = "Testimonial Image";
//     testimonialImagesContainer.appendChild(testimonialImage);
//   });