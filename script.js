// Wait until the DOM (Document Object Model) is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the element with the class "logo" from the document
  const logo = document.querySelector(".logo");

  // Add a click event listener to the logo element
  logo.addEventListener("click", () => {
    // Add the "pulse" class to the logo element to trigger the animation
    logo.classList.add("pulse");

    // Use setTimeout to remove the "pulse" class after 600 milliseconds
    // This allows the animation to complete and be ready to play again on the next click
    setTimeout(() => {
      logo.classList.remove("pulse");
    }, 600); // duration in milliseconds (0.6 seconds)
  });
});
