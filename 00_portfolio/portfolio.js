// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===== Form Submission =====
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formInputs = this.querySelectorAll("input, textarea");
  let isValid = true;

  // Validate form inputs
  formInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      input.style.borderColor = "#ff6b6b";
    } else {
      input.style.borderColor = "";
    }
  });

  if (isValid) {
    // Simulate form submission
    showNotification("Message sent successfully! 🎉");
    this.reset();
  } else {
    showNotification("Please fill in all fields", "error");
  }
});

// ===== Notification System =====
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Create styles for notification
  const style = document.createElement("style");
  style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            font-weight: 600;
            z-index: 2000;
            animation: slideIn 0.3s ease-out;
        }

        .notification.success {
            background-color: #4caf50;
            color: white;
        }

        .notification.error {
            background-color: #ff6b6b;
            color: white;
        }

        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .notification {
                top: 10px;
                right: 10px;
                left: 10px;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe project cards and skill categories
document
  .querySelectorAll(".project-card, .skill-category, .stat-item")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

// ===== Active Navigation Link on Scroll =====
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.style.color = "var(--primary-color)";
    } else {
      link.style.color = "";
    }
  });
});

// ===== Navbar Background on Scroll =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ===== Button Ripple Effect =====
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    // Add ripple styles if not already present
    if (!document.querySelector("style[data-ripple]")) {
      const rippleStyle = document.createElement("style");
      rippleStyle.setAttribute("data-ripple", "true");
      rippleStyle.textContent = `
                .btn {
                    position: relative;
                    overflow: hidden;
                }

                .ripple {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: rippleAnimation 0.6s ease-out;
                    pointer-events: none;
                }

                @keyframes rippleAnimation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
      document.head.appendChild(rippleStyle);
    }

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// ===== Typing Animation for Hero Title =====
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }

  // Start typing animation when page loads
  window.addEventListener("load", typeWriter);
}

// ===== Initialize Page =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");
});
