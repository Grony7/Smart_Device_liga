const mainBlockButton = document.querySelector('#main-block-button');
const productTitle = document.querySelector('#product-title');

const aboutCompanyTextWrapper = document.querySelector('#about-company-text-wrapper');
const aboutCompanyAccordionWrapper = document.querySelector('#about-company-accordion-wrapper');
const aboutCompanyAdaptiveText = document.querySelector('#about-company-adaptive-text');

const MOBILE_BREAKPOINTS = 768;

const MainBlockButtonText = {
  desktop: 'Получить бесплатную консультацию',
  mobile: 'Бесплатная консультация',
};

const productTitleText = {
  desktop: 'Smart Device предлагает следующие товары и услуги',
  mobile: 'Товары и услуги Smart&nbsp;Device',
};

const dynamicAdaptation = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewportWidth < MOBILE_BREAKPOINTS) {
    if (mainBlockButton && mainBlockButton.innerHTML !== MainBlockButtonText.mobile) {
      mainBlockButton.innerHTML = MainBlockButtonText.mobile;
    }

    if (productTitle && mainBlockButton.innerHTML !== productTitleText.mobile) {
      productTitle.innerHTML = productTitleText.mobile;
    }

    if (aboutCompanyTextWrapper && aboutCompanyAccordionWrapper && aboutCompanyAdaptiveText) {
      if (aboutCompanyAdaptiveText.classList.contains('js-desktop-version')) {
        aboutCompanyAccordionWrapper.insertBefore(aboutCompanyAdaptiveText, aboutCompanyAccordionWrapper.children[0]);
        aboutCompanyAdaptiveText.classList.remove('js-desktop-version');
      }
    }

  } else {
    if (mainBlockButton && mainBlockButton.innerHTML !== MainBlockButtonText.desktop) {
      mainBlockButton.innerHTML = MainBlockButtonText.desktop;
    }

    if (productTitle && mainBlockButton.innerHTML !== productTitleText.desktop) {
      productTitle.innerHTML = productTitleText.desktop;
    }

    if (aboutCompanyTextWrapper && aboutCompanyAccordionWrapper && aboutCompanyAdaptiveText) {
      if (!aboutCompanyAdaptiveText.classList.contains('js-desktop-version')) {
        aboutCompanyTextWrapper.insertBefore(aboutCompanyAdaptiveText, aboutCompanyTextWrapper.children[-1]);
        aboutCompanyAdaptiveText.classList.add('js-desktop-version');
      }
    }
  }
};

export const adaptability = () => {
  dynamicAdaptation();
  window.addEventListener('resize', dynamicAdaptation);
};
