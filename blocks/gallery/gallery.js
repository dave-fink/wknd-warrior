export default function decorate(block) {
	// get all thumb divs
	const thumbs = block.querySelectorAll(':scope > div > div');

	// add click event to each thumb
	thumbs.forEach((thumb, i) => {
		// add data-index attribute
		thumb.setAttribute('data-index', i);
		thumb.addEventListener('click', function (event) {
			// set current active thumb
			thumb.classList.add('active');
			block.classList.add('fullscreen');
		});
	});

	// add buttons for full screen viewing
	const nextButton = document.createElement('button');
	nextButton.type = 'button';
	nextButton.textContent = '\u25BA';
	nextButton.className = 'next';
	nextButton.addEventListener('click', function () {
		moveSlide('next');
	});
	block.appendChild(nextButton);

	const prevButton = document.createElement('button');
	prevButton.type = 'button';
	prevButton.textContent = '\u25C0';
	prevButton.className = 'prev';
	prevButton.addEventListener('click', function () {
		moveSlide('prev');
	});
	block.appendChild(prevButton);

	const closeButton = document.createElement('button');
	closeButton.type = 'button';
	closeButton.textContent = '\u2715';
	closeButton.className = 'close';
	closeButton.addEventListener('click', function () {
		// remove classes
		const CurrentActive = block.querySelector('.active');
		CurrentActive.classList.remove('active');
		block.classList.remove('fullscreen');
	});
	block.appendChild(closeButton);


	function moveSlide(direction) {
		// find current active thumb and get index
		const active = block.querySelector('.active');
		const index = active.getAttribute('data-index');
		const i = parseFloat(index);
		var n;
		// check direction
		if (direction == 'next') { n = i + 1; }
		if (direction == 'prev') { n = i - 1; }
		// if last slide go to the first
		if (n == thumbs.length) n = 0;
		// if first slide go to the last
		if (n == -1) n = thumbs.length - 1;
		// remove current active slide
		const CurrentActive = block.querySelector('.active');
		CurrentActive.classList.remove('active');
		// show new slide
		thumbs[n].classList.add('active');
	}

}