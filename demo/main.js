let words = ["tiger", "щеке", "amet", "sit"],
			definitions = ["За словесными в стране.",
										"Lorem ipsum dolor.", "Lorem ipsum dolor sit amet.", "Далеко-далеко за словесными горами."];

	$("p, span").underlineDef({
		words: words,
		definitions: definitions,
		search: 'google'
	});