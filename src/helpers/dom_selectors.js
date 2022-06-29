/**
 *
 * @param { HTMLElement } element
 * @param { string | undefined } value
 * @returns
 */
const $text = (element, value) => {
  if (value === undefined) return element.textContent;

  element.textContent = value;
};

export default $text;
