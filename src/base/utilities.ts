export function AddElementWithClasses(
  container: HTMLElement,
  tag: keyof HTMLElementTagNameMap,
  classes: string[]
): HTMLElement {
  const el = document.createElement(tag);
  el.classList.add(...classes);
  container.appendChild(el);

  return el;
}
