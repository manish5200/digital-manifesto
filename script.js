  // script.js
  function loadFooter() {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Footer load failed:", err));
  }
  
  window.addEventListener("DOMContentLoaded", loadFooter);
  

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Optional: Highlight active nav link while scrolling
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || window.pageYOffset;
  
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
  
      if (scrollPos >= top && scrollPos <= bottom) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


  
  // Reveal on scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (const el of reveals) {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);

  // Scroll to top
  window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }