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

	function initThinMenuToggle() {
		var thin = document.querySelector('#top-menu-items.thin');
		if (!thin) return;

		var title = thin.querySelector('.title');
		if (!title) return;

		function open() { thin.classList.add('open'); }
		function close() { thin.classList.remove('open'); }
		function toggle() { thin.classList.toggle('open'); }

		document.addEventListener('click', function (e) {
			var clickedTitle = e.target.closest('#top-menu-items.thin .title');
			if (clickedTitle) {
				e.preventDefault();
				e.stopPropagation();
				toggle();
				return;
			}
			var clickedAnchor = e.target.closest('#top-menu-items.thin .items a');
			if (clickedAnchor) {
				setTimeout(close, 50);
				return;
			}
			if (!thin.contains(e.target)) close();
		});
		function onPointerMoveClose() { if (thin.classList.contains('open')) close(); }
		window.addEventListener('scroll', onPointerMoveClose, { passive: true });
		window.addEventListener('touchmove', onPointerMoveClose, { passive: true });

		thin.addEventListener('focusout', function () {
			setTimeout(function () {
				if (!thin.contains(document.activeElement)) close();
			}, 0);
		});
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function () {
			initHideOnScroll();
			initThinMenuToggle();
		});
	} else {
		initHideOnScroll();
		initThinMenuToggle();
	}
})();
