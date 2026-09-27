// Awesome Nokia - Search Card Target Focus & Smooth Navigation
(function () {
  function highlightTargetCard() {
    const hash = window.location.hash;
    // Clear any previous focus
    document.querySelectorAll('.card-target-focus').forEach(el => {
      el.classList.remove('card-target-focus');
    });

    if (!hash || hash.length <= 1) return;

    try {
      const targetId = decodeURIComponent(hash.slice(1));
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const card = targetEl.closest('li');
        if (card) {
          card.classList.add('card-target-focus');
          // Smoothly scroll the card into view, vertically centered
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 80);
        }
      }
    } catch (e) {
      // Ignore invalid selector / hash
    }
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightTargetCard);
  } else {
    highlightTargetCard();
  }

  // Run on hash changes (e.g., clicking search results or browser navigation)
  window.addEventListener('hashchange', highlightTargetCard);

  // Material for MkDocs / Zensical instant navigation hook
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      highlightTargetCard();
    });
  }
  document.addEventListener('DOMContentSwitch', highlightTargetCard);
})();
