(() => {
  'use strict';

  const CSS_RULE = `
    :not(#__a):not(#__b):not(#__c) *,
    :not(#__a):not(#__b):not(#__c) *::before,
    :not(#__a):not(#__b):not(#__c) *::after {
      -webkit-font-smoothing: auto !important;
      text-rendering: auto !important;
    }
  `;

  const smoothingSheet = new CSSStyleSheet();
  smoothingSheet.replaceSync(CSS_RULE);

  const originalAttachShadow = Element.prototype.attachShadow;

  Element.prototype.attachShadow = function (init) {
    const shadowRoot = originalAttachShadow.call(this, init);

    try {
      if (!shadowRoot.adoptedStyleSheets.includes(smoothingSheet)) {
        shadowRoot.adoptedStyleSheets = [
          ...shadowRoot.adoptedStyleSheets,
          smoothingSheet,
        ];
      }
    } catch (_) {
      // 保证任何异常都不会影响页面创建 Shadow DOM
    }

    return shadowRoot;
  };
})();
