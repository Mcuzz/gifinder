import './styles/style.css';
import type { Gif } from './models/gif.interface';

const MEDIA_URL = 'https://media.giphy.com/media';

const gifs: Gif[] = [
  {
    id: 'cat-01',
    title: 'Gato programando',
    url: `${MEDIA_URL}/JIX9t2j0ZTN9S/giphy.gif`,
    username: 'gifinder',
    description: 'Un gato programando frente a una computadora.',
    tags: ['gato', 'programación', 'computadora'],
    rating: 'g',
  },
  {
    id: 'celebration-01',
    title: 'Celebración del equipo',
    url: `${MEDIA_URL}/g9582DNuQppxC/giphy.gif`,
    description: 'Un momento de celebración después de conseguir un objetivo.',
    tags: ['equipo', 'éxito', 'celebración'],
    rating: 'g',
  },
  {
    id: 'coding-01',
    title: 'Código en progreso',
    url: `${MEDIA_URL}/13HgwGsXF0aiGY/giphy.gif`,
    username: 'developer',
    description: 'Código en progreso durante una sesión de desarrollo.',
    tags: ['código', 'desarrollo', 'teclado'],
    rating: 'pg',
  },
  {
    id: 'idea-01',
    title: 'Nueva idea',
    url: `${MEDIA_URL}/l0HlRnAWXxn0MhKLK/giphy.gif`,
    description: 'Una nueva idea aparece...',
    tags: ['idea', 'creatividad', 'solución'],
    rating: 'g',
  },
  {
    id: 'success-01',
    title: 'Éxito en programación',
    url: `${MEDIA_URL}/26AHONQ79FdWZhAI0/giphy.gif`,
    username: 'coder',
    description: 'Si se pudo.',
    tags: ['éxito', 'programación', 'código'],
    rating: 'g',
  },
  {
    id: 'debug-01',
    title: 'Depurando código',
    url: `${MEDIA_URL}/W0crByKlXhLlC/giphy.gif`,
    username: 'debugger',
    tags: ['debug', 'error', 'programación'],
    rating: 'pg',
  },
];

/*
 * Comprobación temporal con forEach.
 * Muestra los títulos de los GIFs en la consola.
 */
gifs.forEach((gif, index) => {
  console.log(`${index + 1}. ${gif.title}`);
});

/*
 * Selección y validación del contenedor principal.
 */
const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró el elemento #app.');
}

/*
 * Construcción de la estructura principal.
 */
app.innerHTML = `
  <main class="app-shell">

    <header class="hero">
      <p class="eyebrow">EC1 - Fundamentos de TypeScript</p>

      <h1>GIFinder</h1>

      <p>
        Explora una colección local de GIFs.
      </p>
    </header>

    <form id="search-form" class="search-form">

      <label for="search-input">
        Buscar por título, autor, etiqueta o descripción
      </label>

      <div class="search-row">

        <input
          id="search-input"
          name="query"
          type="search"
          placeholder="Ejemplo: gato"
          autocomplete="off"
        />

        <button type="submit">
          Buscar
        </button>

      </div>

    </form>

    <p
      id="search-status"
      class="status"
      aria-live="polite"
    ></p>

    <section
      id="gif-gallery"
      class="gallery"
      aria-label="Resultados"
    ></section>

  </main>
`;

/*
 * Selección de los elementos de la interfaz.
 */
const formElement = document.querySelector<HTMLFormElement>(
  '#search-form',
);

const inputElement = document.querySelector<HTMLInputElement>(
  '#search-input',
);

const galleryElement = document.querySelector<HTMLElement>(
  '#gif-gallery',
);

const statusElement =
  document.querySelector<HTMLParagraphElement>(
    '#search-status',
  );

if (
  !formElement ||
  !inputElement ||
  !galleryElement ||
  !statusElement
) {
  throw new Error(
    'No se pudo inicializar la interfaz de búsqueda.',
  );
}

const form = formElement;
const input = inputElement;
const gallery = galleryElement;
const status = statusElement;

/*
 * Normaliza el texto:
 * - elimina espacios externos
 * - convierte a minúsculas
 */
function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase('es-MX');
}

/*
 * Comprueba si un GIF coincide con la búsqueda.
 *
 * La búsqueda considera:
 * - título
 * - autor
 * - etiquetas
 * - descripción
 */
function matchesQuery(
  gif: Gif,
  query: string,
): boolean {
  const searchableText = [
    gif.title,
    gif.username ?? '',
    gif.description ?? '',
    ...gif.tags,
  ].join(' ');

  return normalizeText(searchableText).includes(query);
}

/*
 * Filtra la colección según el texto de búsqueda.
 */
function searchGifs(
  collection: Gif[],
  value: string,
): Gif[] {
  const query = normalizeText(value);

  if (!query) {
    return [...collection];
  }

  return collection.filter((gif) =>
    matchesQuery(gif, query),
  );
}

/*
 * Convierte un GIF en una tarjeta HTML.
 */
function createGifCard(gif: Gif): string {
  const {
    title,
    url,
    username = 'Autor no disponible',
    description = 'Sin descripción',
    tags,
    rating,
  } = gif;

  return `
    <article class="gif-card">

      <img
        src="${url}"
        alt="${title}"
        loading="lazy"
      />

      <div class="gif-card__content">

        <h2>${title}</h2>

        <p class="author">
          ${username}
        </p>

        <p class="description">
          ${description}
        </p>

        <p class="rating">
          Clasificación: ${rating.toUpperCase()}
        </p>

        <p class="tags">
          ${tags
      .map((tag) => `#${tag}`)
      .join(' ')}
        </p>

      </div>

    </article>
  `;
}

/*
 * Renderiza una colección de GIFs.
 */
function renderGifs(
  collection: Gif[],
): void {
  const total = collection.length;

  const label =
    total === 1
      ? 'resultado'
      : 'resultados';

  status.textContent =
    `${total} ${label}`;

  /*
   * Estado vacío.
   */
  if (total === 0) {
    gallery.innerHTML = `
      <p class="empty-state">
        No se encontraron GIFs.
        <br />
        Prueba con otra palabra.
      </p>
    `;

    return;
  }

  /*
   * map transforma cada GIF
   * en una tarjeta HTML.
   */
  gallery.innerHTML = collection
    .map(createGifCard)
    .join('');
}

/*
 * Evento submit del formulario.
 */
form.addEventListener(
  'submit',
  (event: SubmitEvent) => {
    event.preventDefault();

    const results = searchGifs(
      gifs,
      input.value,
    );

    renderGifs(results);
  },
);

/*
 * Cuando el usuario borra completamente
 * la consulta, se restauran todos los GIFs.
 */
input.addEventListener('input', () => {
  if (input.value.trim() === '') {
    renderGifs(gifs);
  }
});

/*
 * Uso de find.
 *
 * Busca el primer GIF con clasificación G.
 */
const firstSafeGif = gifs.find(
  (gif) => gif.rating === 'g',
);

console.log(
  `Primer GIF clasificación G: ${firstSafeGif?.title ?? 'Ninguno'
  }`,
);

/*
 * Renderizado inicial.
 */
renderGifs(gifs);