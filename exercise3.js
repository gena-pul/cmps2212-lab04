const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');

filterBar.addEventListener('click', function(event) {
  // Guard: only act if a filter button was clicked
  if (!event.target.matches('.filter-btn')) return;

  const filter = event.target.dataset.filter;

  // Update active button
  filterBar.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Show/hide cards
  cards.forEach(card => {
    if (filter === 'all') {
      card.classList.remove('hidden');
    } else {
      card.classList.toggle('hidden', card.dataset.category !== filter);
    }
  });
});