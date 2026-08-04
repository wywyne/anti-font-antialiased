(function () {
  'use strict';

  const CSS_RULE = `
    :not(#__a):not(#__b):not(#__c) *,
    :not(#__a):not(#__b):not(#__c) *::before,
    :not(#__a):not(#__b):not(#__c) *::after {
      -webkit-font-smoothing: auto !important;
      text-rendering: auto !important;
    }
  `;

  let smoothingSheet;
  try {
    smoothingSheet = new CSSStyleSheet();
    smoothingSheet.replaceSync(CSS_RULE);
  } catch (e) {
    return;
  }

  const originalAttachShadow = Element.prototype.attachShadow;

  Element.prototype.attachShadow = function (init) {
    const shadowRoot = originalAttachShadow.call(this, init);

    try {
      const currentSheets = Array.from(shadowRoot.adoptedStyleSheets || []);
      if (!currentSheets.includes(smoothingSheet)) {
        currentSheets.push(smoothingSheet);
        shadowRoot.adoptedStyleSheets = currentSheets;
      }
    } catch (e) {
      try {
        const style = document.createElement('style');
        style.textContent = CSS_RULE;
        shadowRoot.appendChild(style);
      } catch (innerErr) {
        // 静默失败
      }
    }

    return shadowRoot;
  };
})();
