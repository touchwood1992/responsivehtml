(function($) {
  const mainHeading = document.querySelector("#site-container");
  const mainContentOffset = mainHeading.offsetTop;

  window.addEventListener("scroll", function() {
    const scrolledValue = window.scrollY;
    if (scrolledValue > mainContentOffset + 50) {
      document.querySelector("#site-header").classList.add("stickme");
    } else {
      document.querySelector("#site-header").classList.remove("stickme");
    }
  });
})(jQuery);

const uiElements = (function() {
  const el = [
    ".icon-container",
    ".contact-container",
    "#home-banner",
    "#site-footer"
  ];

  return {
    allElements: function getElements() {
      return el;
    }
  };
})();

const uiController = function() {};

const appController = (function(uiEl, uiCltr) {
  const allElements = uiEl.allElements();
  const fireEffect = function(el, effect) {
    const actualPosition = el.offsetTop;
    const windowScroll = window.scrollY;
    const windowHeight = window.innerHeight;

    if (windowHeight + windowScroll > actualPosition + 250) {
      el.classList.add(effect);
    }
  };
  function setEffects() {
    allElements.forEach(function(e, i) {
      fireEffect(document.querySelector(e), "fadein");
    });
  }
  return {
    init: function() {
      document.addEventListener("DOMContentLoaded", setEffects);
      window.addEventListener("scroll", setEffects);
    }
  };
})(uiElements, uiController);

appController.init();
