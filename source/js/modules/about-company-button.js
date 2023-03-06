const aboutCompanyButton = document.querySelector('#about-company-button');

export const statusOfAboutButton = () => {
  if (aboutCompanyButton) {
    aboutCompanyButton.addEventListener('click', () => {
      if (!aboutCompanyButton.classList.contains('js-open-state')) {
        aboutCompanyButton.innerHTML = 'Свернуть';
        aboutCompanyButton.classList.add('js-open-state');
      } else {
        aboutCompanyButton.innerHTML = 'Подробнее';
        aboutCompanyButton.classList.remove('js-open-state');
      }
    });
  }
};
