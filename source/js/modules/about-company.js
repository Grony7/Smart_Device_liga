const aboutCompany = document.querySelector('[data-about="button"]');

export const statusOfAboutButton = () => {
  if (aboutCompany) {
    aboutCompany.addEventListener('click', () => {
      if (!aboutCompany.classList.contains('is-open')) {
        aboutCompany.innerHTML = 'Свернуть';
        aboutCompany.classList.add('is-open');
      } else {
        aboutCompany.innerHTML = 'Подробнее';
        aboutCompany.classList.remove('is-open');
      }
    });
  }
};
