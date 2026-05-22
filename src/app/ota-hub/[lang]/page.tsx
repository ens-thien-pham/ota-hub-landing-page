import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MediaSection } from "@/components/landing/MediaSection";
import { Roadmap } from "@/components/landing/Roadmap";
import { Team } from "@/components/landing/Team";
import { COPY, isLocale, type Locale, locales } from "@/lib/ota-hub-copy";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

type PageProps = {
	params: Promise<{ lang: string }>;
};

export default async function OtaHubLandingPage({ params }: PageProps) {
	/**
	 * OTA Hub landing page (All-in-one)
	 *
	 * Aesthetic direction: Editorial + Tech (clean grids, bold typography, asymmetric sections)
	 * Typography: Playfair Display (headings) + Noto Sans (body) via next/font in root layout
	 * Color palette: Taupe neutrals + teal/green accents (avoid generic purple gradients)
	 * Motion: hero staggered entrance + scroll-based reveal (IntersectionObserver)
	 */
	const { lang } = await params;
	const safeLang: Locale = isLocale(lang) ? lang : "vi";
	const copy = COPY[safeLang];

	return (
		<div className="relative">
			<Header lang={safeLang} copy={copy} />

			<main className="pb-10">
				<Hero lang={safeLang} copy={copy} />
				<MediaSection copy={copy} />
				<Features copy={copy} />
				<Team copy={copy} />
				<Roadmap copy={copy} />
				<FAQ copy={copy} />
				<FinalCTA copy={copy} />
			</main>

			<Footer lang={safeLang} copy={copy} />
		</div>
	);
}
