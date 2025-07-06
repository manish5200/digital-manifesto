// blog/blogScript.js

document.addEventListener("DOMContentLoaded", () => {
    // ✅ Load Navbar
    fetch("blogComponents/blogNavbar.html")
      .then(res => res.text())
      .then(data => {
        const nav = document.getElementById("nav-placeholder");
        nav.innerHTML = data;
  
        // Wait for DOM to insert, then add scroll styles if needed
        highlightActiveLink();
        applyStickyFix();
      })
      .catch(err => console.error("Navbar load failed:", err));
  
    // ✅ Load Footer
    fetch("blogComponents/blogFooter.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Footer load failed:", err));
  
    // ✅ Scroll Reveal Animation for blog cards
    const cards = document.querySelectorAll(".blog-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => observer.observe(card));
  
    // ✅ Smooth Scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  });
  
  // ✅ Highlight Active Link
  function highlightActiveLink() {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  }
  
  // ✅ Fix sticky navbar edge cases
  function applyStickyFix() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.style.position = "sticky";
      navbar.style.top = "0";
      navbar.style.zIndex = "1000";
    }
  }
  