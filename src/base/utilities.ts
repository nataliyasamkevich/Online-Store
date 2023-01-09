import { Filter, URLParameters } from '../base/base';

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

export function updateFilter(filter: Filter) {
  const params = new URLSearchParams(window.location.search);

  filter.categories = params.getAll(URLParameters['categories']);
  filter.brands = params.getAll(URLParameters['brands']);
  filter.price = [
    +params.getAll(URLParameters['priceMin']),
    +params.getAll(URLParameters['priceMax']),
  ];
  filter.stock = [
    +params.getAll(URLParameters['stockMin']),
    +params.getAll(URLParameters['stockMax']),
  ];

  const searchTerm = params.get(URLParameters['search']);
  if (searchTerm) {
    filter.search = searchTerm;
  }
}
