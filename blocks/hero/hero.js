import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
	const picture = block.querySelector('picture');
	if (!picture) return;

	const image = picture.querySelector('img');
	if (image) {
		picture.replaceWith(createOptimizedPicture(image.src, image.alt, true, [{ width: '1600' }]));
	}

	const imageWrapper = picture.closest('div');
	if (imageWrapper && imageWrapper !== block) {
		const imageRow = imageWrapper.parentElement;
		imageWrapper.classList.add('hero-image');
		block.prepend(imageWrapper);
		if (imageRow && imageRow !== block && imageRow.childElementCount === 0) imageRow.remove();
	}

	[...block.children].forEach((child) => {
		if (!child.classList.contains('hero-image')) child.classList.add('hero-content');
	});
}
