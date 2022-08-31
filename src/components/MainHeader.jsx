import ThemeBtn from "./ThemeBtn";

let prevScrollpos = window.pageYOffset;

document.addEventListener("scroll", () => {
	let currentScrollPos = window.pageYOffset;
	let topPX = prevScrollpos > currentScrollPos ? "0" : "-200px";
	if (document.body.style.overflow === "hidden") topPX = "0";
	document.getElementById("mainHeader").style.top = topPX;
	prevScrollpos = currentScrollPos;
})

export default function MainHeader() {
	return (
		<header className='bg-white dark:bg-darkblue sticky z-30 top-0 flex items-center justify-between py-5 px-10 transition-all shadow-3xl' id="mainHeader">
			<h1 className="text-xl sm:text-2xl font-extrabold w-[8rem] sm:w-auto"><a href="/">Where in the World?</a></h1>
			<ThemeBtn />
		</header>
	)
}