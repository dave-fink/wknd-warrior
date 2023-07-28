
export default function decorate(block) {

	const defaultPos = 70;

	const right = block.querySelector('div:nth-child(1)');
	right.className = 'image-compare-right';

	const left = block.querySelector('div:nth-child(2)');
	left.className = 'image-compare-left';
	left.style.width = defaultPos + '%';

	const slider = document.createElement('div');
	slider.className = 'image-compare-slider';

	const sliderButton = document.createElement('input');
	sliderButton.type = 'range';
	sliderButton.value = defaultPos;
	slider.appendChild(sliderButton);
	left.parentNode.insertBefore(slider, left.nextSibling);

	const resizeLeft = () => {
		// left.value = 50;
		return e => left.style.width = `${e.target.value}%`;
	};

	sliderButton.addEventListener('input', resizeLeft());
}

