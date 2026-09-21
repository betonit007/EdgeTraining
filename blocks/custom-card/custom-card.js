import { createOptimizedPicture } from '../../scripts/aem.js';

function isHeaderRow(cell) {
  return (
    !!cell.querySelector('picture')
    && !cell.querySelector('h1,h2,h3,h4,h5,h6')
    && !cell.querySelector('a')
  );
}

function isFooterRow(cell) {
  const children = [...cell.children].filter((el) => el.textContent.trim());
  return (
    children.length > 0
    && children.every(
      (el) => el.tagName === 'P' && [...el.children].every((c) => c.tagName === 'A'),
    )
  );
}

function buildHeader(cell) {
  const picture = cell.querySelector('picture');
  if (!picture) return null;
  const header = document.createElement('div');
  header.className = 'custom-card-header';
  const img = picture.querySelector('img');
  header.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '800' }]));
  return header;
}

function buildContent(cell) {
  const content = document.createElement('div');
  content.className = 'custom-card-content';

  [...cell.children].forEach((el) => {
    // Icon: <p> whose only child is a picture
    if (el.tagName === 'P' && el.childElementCount === 1 && el.querySelector('picture')) {
      const icon = document.createElement('div');
      icon.className = 'custom-card-icon';
      icon.append(el.querySelector('picture'));
      content.append(icon);
      return;
    }

    // Title: any heading
    if (/^H[1-6]$/.test(el.tagName)) {
      el.className = 'custom-card-title';
      content.append(el);
      return;
    }

    // Eyebrow: <p> appearing before the first heading
    if (!content.querySelector('.custom-card-title') && el.tagName === 'P') {
      el.className = 'custom-card-eyebrow';
      content.append(el);
      return;
    }

    // Body copy: everything after the title
    content.append(el);
  });

  return content;
}

function buildFooter(cell) {
  const links = [...cell.querySelectorAll('a')];
  if (!links.length) return null;

  const footer = document.createElement('div');
  footer.className = 'custom-card-footer';

  links.forEach((link, i) => {
    link.className = i === 0 ? 'button primary' : 'button tertiary';
    footer.append(link);
  });

  return footer;
}

export default function decorate(block) {
  const rows = [...block.children];
  const card = document.createElement('div');
  card.className = 'custom-card-inner';

  rows.forEach((row) => {
    const cell = row.firstElementChild;
    if (!cell) return;

    if (isHeaderRow(cell)) {
      const header = buildHeader(cell);
      if (header) card.append(header);
    } else if (isFooterRow(cell)) {
      const footer = buildFooter(cell);
      if (footer) card.append(footer);
    } else {
      card.append(buildContent(cell));
    }
  });

  block.replaceChildren(card);
}
