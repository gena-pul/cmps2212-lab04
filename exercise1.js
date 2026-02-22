const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
  // Find closest trigger button; return if click not on trigger
  const trigger = event.target.closest('.accordion-trigger');
  if (!trigger) return;

  const item = trigger.closest('.accordion-item');

  // Close all other items
  document.querySelectorAll('.accordion-item').forEach(i => {
    if (i !== item) i.classList.remove('open');
  });

  // Toggle clicked item
  item.classList.toggle('open');
});