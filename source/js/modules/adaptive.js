const mainBlockButton = document.querySelector('[data-adaptive="main-block-button"]');
const productTitle = document.querySelector('[data-adaptive="products-title"]');

const aboutCompanyTextWrapper = document.querySelector('[data-adaptive="about-company-text-wrapper"]');
const aboutCompanyAccordionWrapper = document.querySelector('[data-adaptive="about-company-accordion-wrapper"]');
const aboutCompanyAdaptiveText = document.querySelector('[data-adaptive="about-company-adaptive-text"]');


const breakpoint = window.matchMedia('(min-width:768px)');

const MainBlockButtonText = {
  desktop: 'Получить бесплатную консультацию',
  mobile: 'Бесплатная консультация',
};

const productTitleText = {
  desktop: 'Smart Device предлагает следующие товары и услуги',
  mobile: 'Товары и услуги Smart&nbsp;Device',
};

const breakpointChecker = () => {

  if (breakpoint.matches) {
    if (mainBlockButton && mainBlockButton.innerHTML !== MainBlockButtonText.desktop) {
      mainBlockButton.innerHTML = MainBlockButtonText.desktop;
    }

    if (productTitle && mainBlockButton.innerHTML !== productTitleText.desktop) {
      productTitle.innerHTML = productTitleText.desktop;
    }

    if (aboutCompanyTextWrapper && aboutCompanyAccordionWrapper && aboutCompanyAdaptiveText) {
      if (aboutCompanyAdaptiveText.classList.contains('is-mobile')) {
        aboutCompanyTextWrapper.insertBefore(aboutCompanyAdaptiveText, aboutCompanyTextWrapper.children[-1]);
        aboutCompanyAdaptiveText.classList.remove('is-mobile');
      }
    }

  } else {
    if (mainBlockButton && mainBlockButton.innerHTML !== MainBlockButtonText.mobile) {
      mainBlockButton.innerHTML = MainBlockButtonText.mobile;
    }

    if (productTitle && mainBlockButton.innerHTML !== productTitleText.mobile) {
      productTitle.innerHTML = productTitleText.mobile;
    }

    if (aboutCompanyTextWrapper && aboutCompanyAccordionWrapper && aboutCompanyAdaptiveText) {
      if (!aboutCompanyAdaptiveText.classList.contains('is-mobile')) {
        aboutCompanyAccordionWrapper.insertBefore(aboutCompanyAdaptiveText, aboutCompanyAccordionWrapper.children[0]);
        aboutCompanyAdaptiveText.classList.add('is-mobile');
      }
    }
  }
};

export const adaptability = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};
