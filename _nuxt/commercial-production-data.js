import { c as motion } from './DFOCP24b.js';
import { reels, reelMedia } from '../showreel-media.js';
import { films } from '../showreel-films.js';

// Keep the existing layouts while assigning every video to the local reel set.
let nextReel = 6;
const replaceMedia = (value) => {
  if (Array.isArray(value)) return value.map(replaceMedia);
  if (!value || typeof value !== 'object') return value;
  if (value.media?.type === 'video') {
    const index = nextReel++ % reels.length;
    return { ...value, media: reelMedia(index), caption: reels[index].title };
  }
  return Object.fromEntries(Object.entries(value).map(([key, item]) =>
    [key, replaceMedia(item)]));
};

export const c = {
  ...motion,
  title: 'Show Reel Video',
  description: window.sionTranslate('Your story deserves more than content—it deserves to be felt. From the first idea to the final frame, Sion Motion creates commercials and social videos designed to stop the scroll, stay in memory, and move people to act.'),
  components: [{ id: 'fullLengthFilmsLink' }, ...motion.components.map((section) => section.id === 'motionIntro'
    ? { ...section, media: Array.from({ length: 6 }, (_, index) => reelMedia(index)) }
    : replaceMedia(section)), { id: 'fullLengthFilms', items: films }],
};
