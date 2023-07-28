export default function decorate(block) {

	//TODO: remove image height - play around w/different size images
	// const imgs = block.querySelectorAll('img[height]');
	// imgs.forEach((img) => {
	// 	img.removeAttribute('height');
	// });

	// find large image and add class
	const firstImage = block.querySelector('div:nth-child(1)');
	firstImage.classList.add('active');

	const big = firstImage.cloneNode(true);
	big.removeAttribute('height');
	// replace class with big
	big.className = 'big';

	block.insertBefore(big, block.firstChild);


	// get array of all thumbs, but ignore the first "big" one
	var thumbs = block.querySelectorAll('div');
	thumbs = Array.prototype.slice.call(thumbs, 1);

	thumbs.forEach((thumb) => {
		// only add event to thumbs that are direct children of block 
		// eg. not nested divs
		if (thumb.parentNode === block) {

			thumb.addEventListener('mouseover', function (event) {
				// get current active thumb
				const active = block.querySelector('.active');

				// if element exists remove the class
				if (active) {
					active.classList.remove('active');
				}

				// add class to current thumb
				thumb.classList.add('active');

				// remove the existing big image
				block.querySelector('.big').remove();

				// create new big image
				const newBig = thumb.cloneNode(true);
				// replace class with big
				newBig.className = 'big';

				block.insertBefore(newBig, block.firstChild);
			});

		}
	});



	// var rightAlt = right.querySelector('img').getAttribute('alt');

	// const left = block.querySelector('div:nth-child(2)');
	// left.className = 'image-compare-left';

	// const slider = document.createElement('div');
	// slider.className = 'image-compare-slider';

	// const sliderButton = document.createElement('input');
	// sliderButton.type = 'range';
	// slider.appendChild(sliderButton);
	// left.parentNode.insertBefore(slider, left.nextSibling);

	// const resizeLeft = () => {
	// 	left.value = 50;
	// 	return e => left.style.width = `${e.target.value}%`;
	// };

	// sliderButton.addEventListener('input', resizeLeft());
}




