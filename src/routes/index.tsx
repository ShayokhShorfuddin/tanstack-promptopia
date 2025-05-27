import HeroText from "@/components/HeroText";
import PromptsSection from "@/components/PromptsSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main>
			<HeroText />
			<PromptsSection />
		</main>
	);
}
