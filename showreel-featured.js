// Landscape films for the two full-screen opening cards.
export const featuredFilms = {
  0: {
    src: '/assets/showreel/coffee-landscape.mp4',
    poster: '/assets/showreel/coffee-landscape-poster.webp',
    title: 'Thachang Coffee', width: 1920, height: 1080,
  },
  5: {
    src: '/assets/showreel-full/film-37.mp4',
    poster: '/assets/showreel-full/film-37-poster.webp',
    title: 'Thalena', width: 1920, height: 1080,
  },
};

export const featuredMedia = (film) => ({
  type: 'video', desktop: film.src, mobile: film.src, tablet: film.src,
  posterDesktop: film.poster, posterMobile: film.poster, alt: film.title,
});

export const featuredDimensions = Object.fromEntries(Object.values(featuredFilms).flatMap((film) =>
  [[film.src, [film.width, film.height]], [film.poster, [film.width, film.height]]]));
