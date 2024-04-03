const links = document.querySelectorAll('.sidebar a');
const pages = document.querySelectorAll('.content .page');

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    pages.forEach(page => {
      page.classList.remove('active');
    });
    
    const targetPageId = link.getAttribute('data-target');
    const targetPage = document.getElementById(targetPageId);
    targetPage.classList.add('active');
    
    links.forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    
    link.classList.add('active');
  });
});
