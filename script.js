(function() {

  document.addEventListener('DOMContentLoaded', function() {

      const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

      smoothScrollLinks.forEach(link => {
          link.addEventListener('click', function(event) {
              event.preventDefault();

              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);

              if (targetElement) {
                  targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                  });
              }

              const navMenu = document.querySelector('.nav-menu');
              if (navMenu.classList.contains('active')) {
                  navMenu.classList.remove('active');
              }
          });
      });

      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');

      if(hamburger && navMenu) {
          hamburger.addEventListener('click', function() {
              navMenu.classList.toggle('active');
              hamburger.classList.toggle('active');
          });
      }

  });
})();
