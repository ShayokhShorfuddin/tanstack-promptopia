import Logo from "@/assets/logo.svg";

export default function Header() {
	return (
		<header>
			<nav className="flex justify-between items-center py-4 px-6">
				{/* Logo */}
				<div className="flex items-center gap-x-3">
					<img src={Logo} alt="Logo" className="size-7" />
					<p className="text-lg font-semibold">Promptopia</p>
				</div>

				{/* Add Prompt Button */}
				<button
					type="button"
					className="text-white text-sm font-semibold rounded-full bg-neutral-900 py-2 px-4 hover:cursor-pointer focus:ring-4 focus:ring-yellow-500 focus:outline-none"
				>
					Add Prompt
				</button>
			</nav>
		</header>
	);
}
