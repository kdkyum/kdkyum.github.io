document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-publication-views]');
  if (!root) return;

  const buttons = root.querySelectorAll('[data-publication-view-button]');
  const panels = root.querySelectorAll('[data-publication-view-panel]');

  const activateView = (view) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.publicationViewButton === view;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive.toString());
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.publicationViewPanel !== view;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activateView(button.dataset.publicationViewButton);
    });
  });
});
