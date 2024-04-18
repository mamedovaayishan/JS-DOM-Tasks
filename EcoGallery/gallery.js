

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.category.filter h4');
    const cards = document.querySelectorAll('.cards .card');

    cards.forEach(card => {
      const cardCategory = card.querySelector('img').getAttribute('data-category');
      if (cardCategory === 'fruits') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');
        filterCards(category);
      });
    });

    function filterCards(category) {
      cards.forEach(card => {
        const cardCategory = card.querySelector('img').getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
