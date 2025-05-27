export default function HeroText() {
	return (
		<section className="mt-10">
			<h1 className="text-center text-5xl font-semibold leading-13">
				Discover & Share
				<br />
				<span className="bg-gradient-to-r from-yellow-500 to-red-400 bg-clip-text text-transparent">
					Generative AI Prompts
				</span>
			</h1>

			<p className="text-center text-neutral-600 mt-4 max-w-lg mx-auto">
				Promptopia is an open-source AI prompting tool for modern world to
				discover, create and share creative prompts.
			</p>

			<div className="mt-8 flex justify-center">
				<div className="w-full max-w-xl">
					<input
						type="text"
						placeholder="Search for prompts..."
						className="w-full px-4 py-3 rounded-lg border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
					/>
				</div>
			</div>
		</section>
	);
}
