// const buttons = document.querySelectorAll('.filter button');
// const images = document.querySelectorAll('.gallery .image');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const category = button.getAttribute('data-category');
//     if (category === 'all') {
//       images.forEach(image => {
//         image.style.display = 'block';
//       });
//     } else {
//       images.forEach(image => {
//         const imageCategory = image.getAttribute('data-category');
//         if (imageCategory === category) {
//           image.style.display = 'block';
//         } else {
//           image.style.display = 'none';
//         }
//       });
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.category h4');
//     const cards = document.querySelectorAll('.gallery .card');

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const category = button.getAttribute('data-category');
//             if (category === 'all') {
//                 cards.forEach(card => {
//                     card.style.display = 'block';
//                 });
//             } else {
//                 cards.forEach(card => {
//                     const cardCategory = card.getAttribute('data-category');
//                     if (cardCategory === category) {
//                         card.style.display = 'block';
//                     } else {
//                         card.style.display = 'none';
//                     }
//                 });
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const filterButtons = document.querySelectorAll('.category.filter h4');
//     const cards = document.querySelectorAll('.cards .card');
  
//     filterButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         const category = button.dataset.category;
//         filterCards(category);
//       });
//     });
  
//     function filterCards(category) {
//       cards.forEach(card => {
//         const cardCategory = card.dataset.category;
//         if (category === 'all' || cardCategory === category) {
//           card.style.display = 'block';
//         } else {
//           card.style.display = 'none';
//         }
//       });
//     }
//   });
  

// document.addEventListener("DOMContentLoaded", function() {
//     const filterButtons = document.querySelectorAll('.category.filter h4');
//     const cards = document.querySelectorAll('.cards .card');

//     filterButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         const category = button.getAttribute('data-category');
//         filterCards(category);
//       });
//     });

//     function filterCards(category) {
//       cards.forEach(card => {
//         const cardCategory = card.querySelector('img').getAttribute('data-category');
//         if (category === 'all' || cardCategory === category) {
//           card.style.display = 'block';
//         } else {
//           card.style.display = 'none';
//         }
//       });
//     }
//   });

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
