// Function to initialize the circle's movement
function startCircleMovement() {
  const circle = document.querySelector(".hero-circle");
  const heroSection = document.getElementById("home");

  // Get the dimensions of the hero section and the circle
  const heroRect = heroSection.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();

  console.log(`Hero Section Height: ${heroRect.height}px`);

  // Initial position of the circle (centered)
  let posX = (heroRect.width - circleRect.width) / 2;
  let posY = (heroRect.height - circleRect.height) / 2;

  // Initial velocity (speed and direction)
  let velocityX = 1; // Horizontal speed
  let velocityY = 1; // Vertical speed

  // Function to update the circle's position
  function updatePosition() {
    // Update the circle's position based on velocity
    posX += velocityX;
    posY += velocityY;

    // Check for collisions with the edges of the hero section
    if (posX <= 0 || posX + circleRect.width >= heroRect.width) {
      velocityX = -velocityX; // Reverse horizontal direction
      velocityX *= 0.9 + Math.random() * 0.2; // Add some randomness to the bounce
    }
    if (posY <= 0 || posY + circleRect.height >= heroRect.height) {
      velocityY = -velocityY; // Reverse vertical direction
      velocityY *= 0.9 + Math.random() * 0.2; // Add some randomness to the bounce
    }

    // Ensure the circle stays within bounds
    posX = Math.max(0, Math.min(posX, heroRect.width - circleRect.width));
    posY = Math.max(0, Math.min(posY, heroRect.height - circleRect.height));

    // Update the circle's CSS position
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;

    // Request the next animation frame
    requestAnimationFrame(updatePosition);
  }

  // Start the animation
  updatePosition();
}

// Initialize the circle's movement on page load
window.addEventListener("load", startCircleMovement);
