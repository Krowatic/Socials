document.addEventListener("DOMContentLoaded", function() {
  const krownlyfansLink = document.getElementById("krownlyfans-link");
  const krownlyfansContent = document.getElementById("krownlyfans-content");

  krownlyfansLink.addEventListener("click", function(event) {
    event.preventDefault();
    krownlyfansContent.style.display = "flex"; // Show the hidden content
  });

  // Close the hidden content when clicked outside
  document.addEventListener("click", function(event) {
    if (!krownlyfansLink.contains(event.target) && !krownlyfansContent.contains(event.target)) {
      krownlyfansContent.style.display = "none";
    }
  });
});
