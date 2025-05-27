document.addEventListener("DOMContentLoaded", () => {
    const iconContainer = document.querySelector(".floating-icons");
    const icons = [
      "fa-lock",
      "fa-shield-alt",
      "fa-user-secret",
      "fa-key",
      "fa-fingerprint",
      "fa-bug",
      "fa-network-wired",
      "fa-laptop-code",
      "fa-virus",
      "fa-eye"
    ];
  
    const numIcons = 10; // Set number of icons to show
  
    for (let i = 0; i < numIcons; i++) {
      const icon = document.createElement("i");
      icon.className = `fas ${icons[Math.floor(Math.random() * icons.length)]} floating-icon`;
  
      // Randomize position, size, and animation delay
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.fontSize = `${1 + Math.random() * 2}rem`;
      icon.style.animationDelay = `${Math.random() * 8}s`;
  
      iconContainer.appendChild(icon);
    }
  });
  