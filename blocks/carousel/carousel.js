import { createOptimizedPicture } from '../../scripts/aem.js';

function updateCarousel(carousel, index) {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('.carousel-dot')];

  if (!slides.length) return;

  const currentIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    const active = i === currentIndex;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', active ? 'false' : 'true');
  });

  dots.forEach((dot, i) => {
    const active = i === currentIndex;
    dot.classList.toggle('is-active', active);
    dot.setAttribute('aria-current', active ? 'true' : 'false');
    dot.setAttribute('tabindex', active ? '0' : '-1');
  });

  const track = carousel.querySelector('.carousel-track');
  if (track) {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  carousel.dataset.currentIndex = String(currentIndex);
}

function createSlide(row, index) {
  const slide = document.createElement('article');
  slide.className = 'carousel-slide';
  slide.setAttribute('aria-label', `Slide ${index + 1}`);
  slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');

  const slideContent = row.cloneNode(true);
  const media = document.createElement('div');
  media.className = 'carousel-slide-media';
  const copy = document.createElement('div');
  copy.className = 'carousel-slide-copy';

  [...slideContent.children].forEach((child) => {
    if (child.querySelector('picture, img, video')) {
      media.append(child);
    } else {
      copy.append(child);
    }
  });

  if (media.childElementCount === 0 && slideContent.firstElementChild) {
    media.append(slideContent.firstElementChild);
  }
  console.log("COPY CHILD ELEMENT COUNT:", copy.childElementCount);
  if (copy.childElementCount === 0 && slideContent.lastElementChild) {
    copy.append(slideContent.lastElementChild);
  }

  const image = media.querySelector('img, picture');
  if (image) {
    const img = image.tagName === 'IMG' ? image : image.querySelector('img');
    if (img) {
      const optimized = createOptimizedPicture(img.src, img.alt || `Slide ${index + 1}`, index === 0, [{ width: '1600' }]);
      if (image.tagName === 'IMG') {
        image.replaceWith(optimized);
      } else {
        image.replaceWith(optimized);
      }
    }
  }

  if (media.childElementCount > 0) {
    slide.append(media);
  }
  // check to see if div has content .textContent.trim().length > 0
  if (copy.childElementCount > 0 && copy.textContent.trim().length > 0) {
    slide.append(copy);
  }
  console.log("SLIDE ", slide)
  return slide;
}

export default function decorate(block) {
  if (!block || !block.children.length) return;

  const slides = [...block.children].map((row, index) => createSlide(row, index));
  if (!slides.length) return;

  const viewport = document.createElement('div');
  viewport.className = 'carousel-viewport';

  const track = document.createElement('div');
  track.className = 'carousel-track';
  slides.forEach((slide) => track.append(slide));
  viewport.append(track);

  const controls = document.createElement('div');
  controls.className = 'carousel-controls';

  const nav = document.createElement('div');
  nav.className = 'carousel-nav';

  const prevButton = document.createElement('button');
  prevButton.type = 'button';
  prevButton.className = 'carousel-button carousel-prev';
  prevButton.setAttribute('aria-label', 'Previous slide');
  prevButton.textContent = '←';

  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'carousel-button carousel-next';
  nextButton.setAttribute('aria-label', 'Next slide');
  nextButton.textContent = '→';

  nav.append(prevButton, nextButton);

  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `carousel-dot${index === 0 ? ' is-active' : ''}`;
    dot.setAttribute('aria-label', `Show slide ${index + 1}`);
    dot.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    dot.setAttribute('tabindex', index === 0 ? '0' : '-1');
    dot.addEventListener('click', () => updateCarousel(block, index));
    dots.append(dot);
  });

  controls.append(nav, dots);
  block.replaceChildren(viewport, controls);

  let currentIndex = 0;
  const setCurrentIndex = (value) => {
    const maxIndex = slides.length - 1;
    currentIndex = Math.min(Math.max(value, 0), maxIndex);
    updateCarousel(block, currentIndex);
  };

  prevButton.addEventListener('click', () => setCurrentIndex(currentIndex - 1));
  nextButton.addEventListener('click', () => setCurrentIndex(currentIndex + 1));

  block.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      setCurrentIndex(currentIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      setCurrentIndex(currentIndex + 1);
    }
  });

  if (slides.length <= 1) {
    prevButton.setAttribute('disabled', 'true');
    nextButton.setAttribute('disabled', 'true');
    dots.setAttribute('aria-hidden', 'true');
  }

  block.setAttribute('tabindex', '0');
  block.setAttribute('aria-roledescription', 'carousel');
  updateCarousel(block, 0);
}
