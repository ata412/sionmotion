// Landscape films for the two full-screen opening cards.
export const featuredFilms = {
  0: {
    src: '/assets/showreel/coffee-landscape.mp4',
    poster: '/assets/showreel/coffee-landscape-poster.webp',
    mobile: '/assets/showreel-full/film-22.mp4',
    title: 'Thachang Coffee', width: 1920, height: 1080,
  },
  5: {
    src: '/assets/showreel-full/film-37.mp4',
    poster: '/assets/showreel-full/film-37-poster.webp',
    mobile: '/assets/showreel-full/film-37-mobile.mp4',
    title: 'Thalena', width: 1920, height: 1080,
  },
};

export const featuredMedia = (film) => ({
  type: 'video', desktop: film.src, mobile: film.mobile, tablet: film.src,
  posterDesktop: film.poster, posterMobile: film.poster, alt: film.title,
});

export const featuredDimensions = Object.fromEntries(Object.values(featuredFilms).flatMap((film) =>
  [film.src, film.mobile, film.poster].map((url) => [url, [film.width, film.height]])));
