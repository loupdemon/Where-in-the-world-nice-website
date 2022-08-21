export default function Cards({ countries, MAX_PAGES }) {

	function handleCard(card) {
		console.log(card);
	}

	return countries.map((item, index) => {
		if (index < MAX_PAGES) {
			return (
				<article key={index + 105} className="bg-white dark:bg-darkblue hover:scale-105 transition-all rounded-md overflow-hidden cursor-pointer shadow-3xl" onClick={() => handleCard(item.name.common)}>
					<img src={item.flags.svg} alt={item.name.common + " flag"} />
					<section className="p-6">
						<h3>{item.name.common}</h3>
						<ul>
							<li>Population: {item.population}</li>
							<li>Region: {item.region}</li>
							<li>Capital: {item.capital || "Without name"}</li>
						</ul>
					</section>
				</article>
			)
		}
	})
}