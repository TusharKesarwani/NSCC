(function () {
	const goTop = document.getElementById("go-top");

	window.addEventListener("scroll", function () {
		var y = window.scrollY;
		if (y >= this.window.innerHeight) {
			goTop.style.display = "inline";
			goTop.classList.add("animate__animated", "animate__fadeIn");
		} else {
			goTop.style.display = "none";
		}
	});
})();