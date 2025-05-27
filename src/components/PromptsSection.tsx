import { useQuery } from "@tanstack/react-query";
import { createClient } from "contentful";
import { useState } from "react";

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
		<section className="p-4 mt-14">
			<div className="grid grid-cols-3 gap-6">
				{result.data.items.map((item) => {
					const fields = item.fields as PromptFields;

					return <PromptCard key={fields.slug} {...fields} />;
				})}
			</div>
		</section>
	);
}

function PromptCard({ text, author, tags }: PromptFields) {
	const [isCopied, setIsCopied] = useState(false);

	return (
		<div className="rounded-lg border border-neutral-300 hover:border-amber-400 p-5">
			<p className="font-semibold text-neutral-600 mb-4">{text}</p>

			<div className="flex flex-wrap gap-2 mb-4">
				{tags.map((tag) => (
					<span
						key={tag}
						className="bg-yellow-200 text-yellow-700 text-xs font-medium px-2.5 py-0.5 rounded"
					>
						{tag}
					</span>
				))}
			</div>

			<div className="flex items-center justify-between">
				<p className="text-sm text-neutral-600">By {author}</p>
				<button
					type="button"
					onClick={() => {
						navigator.clipboard.writeText(text);
						setIsCopied(true);
						setTimeout(() => setIsCopied(false), 2000);
					}}
					className="text-sm font-medium text-neutral-500 flex items-center gap-1 hover:cursor-pointer"
				>
					<CopyIcon />
					<p>{isCopied ? "Copied!" : "Copy"}</p>
				</button>
			</div>
		</div>
	);
}

function CopyIcon() {
	return (
		<svg
			className="fill-neutral-400 size-5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Copy icon"
			role="img"
		>
			<title>Copy icon</title>
			<path d="M17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Z" />
		</svg>
	);
}
