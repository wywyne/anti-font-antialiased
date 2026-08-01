const smoothingSheet = new CSSStyleSheet();
// 注入和 CSS 文件里一样的高权重规则
smoothingSheet.replaceSync(`
  :not(#__a):not(#__b):not(#__c) *,
  :not(#__a):not(#__b):not(#__c) *::before,
  :not(#__a):not(#__b):not(#__c) *::after { 
    -webkit-font-smoothing: auto !important; 
    text-rendering: auto !important;
  }
`);

const originalAttachShadow = Element.prototype.attachShadow;

Element.prototype.attachShadow = function (init) {
  const shadowRoot = originalAttachShadow.call(this, init);
  shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, smoothingSheet];
  return shadowRoot;
};