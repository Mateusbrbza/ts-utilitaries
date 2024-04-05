export function removeOverflowFromBody() {
  // NOTE: Seleciona o elemento <body>
  const bodyElement = document.getElementsByTagName('body')[0];
  // NOTE: Remove as propriedades padding-right e overflow
  bodyElement.style.removeProperty('padding-right');
  bodyElement.style.removeProperty('overflow');
};
