import { useQuery } from "@tanstack/react-query";
import { createClient } from "contentful";

type PromptFields = {
	text: string;
	slug: string;
	author: string;
	tags: string[];
};

export default function PromptsSection() {
	const client = createClient({
		space: import.meta.env.VITE_SPACE_ID ?? "",
		accessToken: import.meta.env.VITE_ACCESS_TOKEN ?? "",
	});

	const result = useQuery({
		queryKey: ["prompts"],
		queryFn: () => client.getEntries({ content_type: "prompt" }),
	});

	if (result.isLoading) return <div>Loading...</div>;
	if (result.error) return <div>Error: {result.error.message}</div>;
	if (!result.data) return null;

	return (
		<main className="p-4">
			{result.data.items.map((item) => {
				const fields = item.fields as PromptFields;

				return (
					<div key={item.sys.id} className="p-4 border rounded">
						<h2 className="font-bold">{fields.text}</h2>

						<p>Author: {fields.author}</p>
						<p>Slug: {fields.slug}</p>
						<p>Tags: {fields.tags?.join(", ")}</p>
					</div>
				);
			})}
		</main>
	);
}
