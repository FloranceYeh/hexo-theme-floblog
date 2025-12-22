(function () {
	function initHideOnScroll() {
		var lastScroll = 0;
		var menu = document.getElementById('menu');
		if (!menu) return;

		if (menu.classList.contains('side')) return;
		var tick = false;

		function onScroll() {
			if (tick) return;
			tick = true;
			window.requestAnimationFrame(function () {
				var current = window.scrollY || window.pageYOffset;
				if (current > lastScroll && current > 100) {
					menu.classList.add('hidden');
				} else {
					menu.classList.remove('hidden');
				}
				lastScroll = current <= 0 ? 0 : current;
				tick = false;
			});
		}

		window.addEventListener('scroll', onScroll, { passive: true });
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initHideOnScroll);
	} else {
		initHideOnScroll();
	}
})();
