const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const cc = document.getElementById("colorChart");
const mc = document.getElementById("mainContent");

menuBtn.addEventListener("click", () => {
	sidebar.classList.toggle("menuOpened");
	cc.classList.toggle("ccShort");
	mc.classList.toggle("mcShort");
});
