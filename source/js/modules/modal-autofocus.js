const modalNameField = document.querySelector('[data-modal-form="name"]');
const modalOpenButton = document.querySelector('[data-open-modal="consultation"]');

export const modalAutofocus = () => {
  if (modalNameField && modalOpenButton) {
    modalOpenButton.addEventListener('click', () => {
      setTimeout(() => {
        modalNameField.focus();
      }, 300);
    });
  }
};
