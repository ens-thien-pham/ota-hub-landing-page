import type { Metadata } from "next";

import { COPY, isLocale, type Locale } from "@/lib/ota-hub-copy";

type LayoutProps = {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
};

export async function generateMetadata({
	params,
}: LayoutProps): Promise<Metadata> {
	const { lang } = await params;
	const safeLang: Locale = isLocale(lang) ? lang : "vi";
	const copy = COPY[safeLang];

	return {
		title: copy.meta.title,
		description: copy.meta.description,
		keywords: copy.meta.keywords,
		alternates: {
			languages: {
				en: "/ota-hub/en",
				vi: "/ota-hub/vi",
			},
		},
		openGraph: {
			title: copy.meta.title,
			description: copy.meta.description,
			url: `/ota-hub/${safeLang}`,
			images: [
				{
					url: "/images/ota-hub-preview.svg",
					width: 1600,
					height: 1000,
					alt: "OTA Hub preview",
				},
			],
		},
	};
}

export default async function OtaHubLayout({ children, params }: LayoutProps) {
	const { lang } = await params;
	const safeLang: Locale = isLocale(lang) ? lang : "vi";

	return (
		<div lang={safeLang} className="min-h-full">
			{children}
		</div>
	);
}
