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
	const next = document.createElement('button');
	next.type = 'button';
	next.textContent = '\u25BA';
	next.className = 'next';
	next.addEventListener('click', function () {
		go('next');
	});
	block.appendChild(next);

	const prev = document.createElement('button');
	prev.type = 'button';
	prev.textContent = '\u25C0';
	prev.className = 'prev';
	prev.addEventListener('click', function () {
		go('prev');
	});
	block.appendChild(prev);

	const close = document.createElement('button');
	close.type = 'button';
	close.textContent = '\u2715';
	close.className = 'close';
	close.addEventListener('click', function () {
		// remove fullscreen classes
		block.querySelector('.active').classList.remove('active');
		block.classList.remove('fullscreen');
	});
	block.appendChild(close);

	function go(to) {
		// find current active thumb and get index
		const active = block.querySelector('.active');
		// get current index
		const i = parseFloat(active.getAttribute('data-index'));
		// next n
		var n;
		// check direction
		if (to == 'next') n = i + 1;  
		if (to == 'prev') n = i - 1;
		// if last slide go to the first
		if (n == thumbs.length) n = 0;
		// if first slide go to the last
		if (n == -1) n = thumbs.length - 1;
		// remove current active slide
		active.classList.remove('active');
		// show new slide
		thumbs[n].classList.add('active');
	}

}