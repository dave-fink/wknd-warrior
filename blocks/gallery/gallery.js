export default function decorate(block) {

	const thumbs = block.querySelectorAll(':scope > div > div');

	thumbs.forEach((thumb, i) => {

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
	nextButton.addEventListener('click', function (event) {
		const active = block.querySelector('.active');
		const index = active.getAttribute('data-index');
		const i = parseFloat(index);
		moveSlide(i + 1);
	});
	block.appendChild(nextButton);

	const prevButton = document.createElement('button');
	prevButton.type = 'button';
	prevButton.textContent = '\u25C0';
	prevButton.className = 'prev';
	prevButton.addEventListener('click', function (event) {
		const active = block.querySelector('.active');
		const index = active.getAttribute('data-index');
		const i = parseFloat(index);
		moveSlide(i - 1);
	});
	block.appendChild(prevButton);


	const closeButton = document.createElement('button');
	closeButton.type = 'button';
	closeButton.textContent = '\u2715';
	closeButton.className = 'close';
	closeButton.addEventListener('click', function (event) {
		// remove classes
		const CurrentActive = block.querySelector('.active');
		CurrentActive.classList.remove('active');
		block.classList.remove('fullscreen');
	});
	block.appendChild(closeButton);


	function moveSlide(n) {
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