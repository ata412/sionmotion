import { c as motion } from './DFOCP24b.js';
import { reels, reelMedia } from '../showreel-media.js';
import { films } from '../showreel-films.js';
import { featuredFilms, featuredMedia } from '../showreel-featured.js';

const copy = (en, th) => document.documentElement.dataset.sionLanguage === 'th' ? th : en;

// Show each local reel once. The opening cards use reels 1-4, so the sections
// below draw from the rest and any layout that cannot be filled is left out.
const reelQueue = reels.map((_, index) => index).filter((index) => index < 1 || index > 4);
reelQueue.push(...reelQueue.splice(0, reelQueue.indexOf(6)));
const countVideos = (value) => {
  if (Array.isArray(value)) return value.reduce((total, item) => total + countVideos(item), 0);
  if (!value || typeof value !== 'object') return 0;
  if (value.media?.type === 'video') return 1;
  return Object.values(value).reduce((total, item) => total + countVideos(item), 0);
};
let unassignedReels = reelQueue.length;
const fittingComponents = motion.components.filter((section) => {
  if (section.id === 'motionIntro') return true;
  const needed = countVideos(section);
  if (needed > unassignedReels) return false;
  unassignedReels -= needed;
  return true;
});
const withSpareSlides = (section) => section.id === 'carouselBasic' ? {
  ...section,
  slides: [...section.slides, ...Array(unassignedReels).fill(section.slides.at(-1))],
} : section;
let nextReel = 0;
const replaceMedia = (value) => {
  if (Array.isArray(value)) return value.map(replaceMedia);
  if (!value || typeof value !== 'object') return value;
  if (value.media?.type === 'video') {
    return { ...value, media: reelMedia(reelQueue[nextReel++]), caption: '' };
  }
  return Object.fromEntries(Object.entries(value).map(([key, item]) =>
    [key, key === 'caption' ? '' : replaceMedia(item)]));
};

const sections = fittingComponents.map(withSpareSlides).map((section) => {
  if (section.id === 'motionIntro') {
    return { ...section, media: Array.from({ length: 6 }, (_, index) =>
      featuredFilms[index] ? featuredMedia(featuredFilms[index]) : reelMedia(index)) };
  }
  if (section.id === 'paragraph') {
    return section.index === 1 ? {
      ...section,
      subtitle: copy('Lifestyle & Places', 'ไลฟ์สไตล์และสถานที่'),
      text: copy('Food, places, and everyday moments told through atmosphere, detail, and rhythm. A selection of short films made for social viewing.', 'อาหาร สถานที่ และช่วงเวลาในชีวิตประจำวัน ถ่ายทอดผ่านบรรยากาศ รายละเอียด และจังหวะภาพ รวมผลงานวิดีโอสั้นสำหรับการรับชมบนโซเชียล'),
    } : {
      ...section,
      subtitle: copy('Brand & Social Stories', 'เรื่องราวแบรนด์บนโซเชียล'),
      text: copy('Short-form brand stories with a distinct mood, from product details to seasonal moments. Each film brings together visuals, editing, and music to suit its story.', 'วิดีโอสั้นที่ถ่ายทอดบุคลิกของแบรนด์ ตั้งแต่รายละเอียดสินค้าไปจนถึงช่วงเวลาพิเศษ เล่าเรื่องด้วยภาพ การตัดต่อ และดนตรีที่เข้ากับอารมณ์ของแต่ละผลงาน'),
    };
  }
  if (section.id === 'notes1') {
    return {
      ...section,
      title: copy('Stories in every frame', 'เล่าเรื่องผ่านภาพและจังหวะ'),
      description: copy('Explore our portrait reels below, then watch the complete commercials, music videos, event films, and wedding stories in the full-length collection.', 'ชมผลงานวิดีโอแนวตั้งด้านล่าง และเลือกดูโฆษณา มิวสิกวิดีโอ ภาพบรรยากาศงาน และเรื่องราวงานแต่งฉบับเต็มได้ในส่วนท้ายของหน้า'),
    };
  }
  const result = replaceMedia(section);
  if (section.id === 'carouselBasic') {
    result.snapAlign = 'center';
    result.itemColumnsDesktop = 3;
    result.itemColumnsMobile = 9;
  }
  return result;
});

export const c = {
  ...motion,
  title: 'Show Reel Video',
  description: copy('A selection of films by Sion Motion, from portrait social reels to commercials, music videos, and event stories. Explore the short clips or watch the complete films with sound below.', 'รวมผลงานวิดีโอของ Sion Motion ตั้งแต่คลิปแนวตั้งสำหรับโซเชียล ไปจนถึงโฆษณา มิวสิกวิดีโอ และภาพบรรยากาศงาน เลือกชมคลิปสั้นหรือดูผลงานฉบับเต็มพร้อมเสียงได้ในหน้านี้'),
  components: [{ id: 'fullLengthFilmsLink' }, ...sections, { id: 'fullLengthFilms', items: films }],
};
