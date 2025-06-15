(() => {
  const burgerRef = document.querySelector('[data-burger]');

  burgerRef.addEventListener('click', () => {
    const expanded =
      burgerRef.getAttribute('aria-expanded') === 'true' || false;

    burgerRef.classList.toggle('is-open');
    burgerRef.setAttribute('aria-expanded', !expanded);
  });
})();
