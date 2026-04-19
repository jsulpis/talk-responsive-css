const events = {
  mixit: {
    introImg: "/images/intro-mixit.webp",
    outroImg: "/images/outro-mixit.webp",
  },
  rivieraDev: {
    introImg: "/images/intro/riviera.png",
    outroImg: "/images/outro-riviera.png",
  },
  snowcamp: {
    introImg: "/images/intro/snowcamp.webp",
    outroImg: "/images/outro-snowcamp.webp",
  },
  devoxx: {
    introImg: "/images/intro-devoxx.webp",
    outroImg: "/images/outro-devoxx.webp",
  },
};

export const currentEvent = Object.values(events).at(-1);
