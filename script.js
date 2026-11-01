const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.lang').forEach(button => button.addEventListener('click', () => {
  const lang = button.dataset.lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang').forEach(item => item.classList.toggle('active', item === button));
  document.querySelectorAll('[data-en]').forEach(item => {
    const value = item.dataset[lang];
    if (value) item.textContent = value;
  });
}));
