function main() {
    const title = "Mikon Github.io-sivu";
    document.title = title;
    heading.innerHTML = title;
    const flashingText = document.querySelector("p > span");
    const colors=["red", "orange", "yellow", "green", "blue", "magenta"];
    let i = 0, flashInterval, flash = false;
    triggerFlash();
    flashingText.onclick = triggerFlash;

    function triggerFlash() {
	if(!flash) {
	    flashingText.innerHTML = "tämä vilkkuu, kunnes tätä klikkaa";
	    flashInterval = setInterval(() => {
		flashingText.style.color = colors[(i++) % 6];
	    }, 166);
	    flash = true;
	} else {
	    clearInterval(flashInterval);
	    flashingText.innerHTML = "tämä alkaa vilkkua, kun tätä klikkaa";
	    flashingText.style.color = "black";
	    flash = false;
	}
    }
}

window.onload = main;
