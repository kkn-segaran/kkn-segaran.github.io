document.addEventListener('DOMContentLoaded', function() {
  const navigationLinks = document.querySelectorAll('.nav-link');
  const indicator = document.createElement('div');
  indicator.className = 'nav-indicator';

  document.querySelector('.navbar-nav').appendChild(indicator);

  navigationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-target');
      showContent(target);
      setActiveLink(link);
      moveIndicator(link);
    });
  });

  function showContent(target) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (target) {
      case 'home':
        content = '<h2>Home Content</h2><p>This is the Home page content.</p>';
        break;
      case 'about':
        content = '<h2>About Content</h2><p>This is the About page content.</p>';
        break;
      case 'services':
        content = '<h2>Services Content</h2><p>This is the Services page content.</p>';
        break;
      case 'contact':
        content = '<h2>Contact Content</h2><p>This is the Contact page content.</p>';
        break;
    }

    contentDiv.innerHTML = content;
  }

  function setActiveLink(activeLink) {
    navigationLinks.forEach(link => link.parentElement.classList.remove('active'));
    activeLink.parentElement.classList.add('active');
  }

  function moveIndicator(link) {
    const indicator = document.querySelector('.nav-indicator');
    const offsetLeft = link.offsetLeft;
    const width = link.offsetWidth;
    indicator.style.transform = `translateX(${offsetLeft}px)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = 1;
  }

  showContent('home');
  moveIndicator(document.querySelector('.nav-link[data-target="home"]'));
});
