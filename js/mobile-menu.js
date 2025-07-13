(() => {
  const refs = {
    burger: document.querySelector('[data-burger]'),
    mobileMenu: document.querySelector('[data-menu]'),
    pageHeader: document.querySelector('.page-header'),
    root: document.querySelector(':root'),
  };

  const { height: pageHeaderHeight } = refs.pageHeader.getBoundingClientRect();
  refs.root.style.setProperty('--page-header-height', `${pageHeaderHeight}px`);

  refs.burger.addEventListener('click', () => {
    const expanded =
      refs.burger.getAttribute('aria-expanded') === 'true' || false;

    refs.burger.classList.toggle('is-open');
    refs.burger.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });
})();
