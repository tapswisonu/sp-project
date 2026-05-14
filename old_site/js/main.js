document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");

  // Load the default page (home)
  loadPage("home");

  // Handle navbar link clicks
  document.querySelectorAll("[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    });
  });

  // Function to load content dynamically
  function loadPage(page) {
    fetch(`pages/${page}.html`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Page not found");
        }
        return res.text();
      })
      .then((html) => {
        content.innerHTML = html;
        window.scrollTo(0, 0);
        document.title = `${capitalize(page)} | Packaging Company`;
      })
      .catch(() => {
        loadNotFound();
      });
  }

  // Function to load separate 404 page
  function loadNotFound() {
    fetch("pages/404.html")
      .then((res) => res.text())
      .then((html) => {
        content.innerHTML = html;
        window.scrollTo(0, 0);
        document.title = "404 - Page Not Found | Packaging Company";
      });
  }

  // Capitalize helper
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Auto-update footer year
  document.getElementById("year").textContent = new Date().getFullYear();

// Attach listeners initially for navbar
  attachPageLinks();

  // set year(s)
  const y = new Date().getFullYear();
  const yrs = document.getElementById('year');
  if(yrs) yrs.textContent = y;
  const yr2 = document.getElementById('yr2');
  if(yr2) yr2.textContent = y;

  // Simple sample form handler (replace with real backend or mailto)
  const sampleForm = document.getElementById('sampleForm');
  if(sampleForm) {
    sampleForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you! Your sample request has been received. We will contact you shortly.');
      sampleForm.reset();
    });
  }

  // Improve keyboard accessibility for mega menu
  const productToggle = document.querySelector('#productsDD');
  if(productToggle){
    productToggle.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        productToggle.click();
      }
    });
  }
});
