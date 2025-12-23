(function () {
	function debounce(fn, wait) {
		let t;
		return function (...args) {
			clearTimeout(t);
			t = setTimeout(() => fn.apply(this, args), wait);
		};
	}

	const input = document.getElementById('search-bar');
	if (!input) return;

	const normalize = (s) => (s || '').toLowerCase().replace(/\s+/g, '');

	function getTimelines() {
		return Array.from(document.querySelectorAll('.timeline'));
	}

	function applyFilter() {
		const q = normalize(input.value);
		getTimelines().forEach((el) => {
			const dataTitle = el.dataset && el.dataset.title ? el.dataset.title : '';
			const title = dataTitle || normalize(el.querySelector('h3')?.textContent || '');
			if (!q || title.indexOf(q) !== -1) {
                el.style.opacity = 1;
                el.style.visibility = "visible";
                el.style.marginTop = 0;
			} else {
				el.style.opacity = 0;
                el.style.visibility = "hidden";
                el.style.marginTop = -el.offsetHeight - 30 + "px";
			}
		});
	}

	const handler = debounce(applyFilter, 150);

	input.addEventListener('input', handler);
	// apply immediately on load in case there's a preset value
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyFilter);
	} else {
		applyFilter();
	}
})();

