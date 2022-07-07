/**
 *
 * @param { HTMLElement } element
 * @param { string | undefined } value
 * @returns
 */
export const $text = (element, value) => {
  if (value === undefined) return element.textContent;

  element.textContent = value;
};

/**
 *
 * @param { string } id
 * @returns { HTMLElement | null }
 */
export const $withId = (id) => document.getElementById(id);
