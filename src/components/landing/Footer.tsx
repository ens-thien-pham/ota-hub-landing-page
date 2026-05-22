import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";
import { Separator } from "@/components/ui/separator";
import type { LandingCopy, Locale } from "@/lib/ota-hub-copy";

type FooterProps = {
	lang: Locale;
	copy: LandingCopy;
};

export function Footer({ lang, copy }: FooterProps) {
	const otherLang = lang === "vi" ? "en" : "vi";

	return (
		<footer id="contact" className="mt-24 border-t">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
				<Reveal>
					<div className="grid gap-10 md:grid-cols-12">
						<div className="md:col-span-5">
							<div className="font-heading text-2xl tracking-tight">
								{copy.footer.title}
							</div>
							<p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
								{copy.footer.description}
							</p>
							<div className="mt-6">
								<Link
									href={`/ota-hub/${otherLang}`}
									className="text-xs font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground"
								>
									{otherLang.toUpperCase()}
								</Link>
							</div>
						</div>

						<div className="md:col-span-3">
							<div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
								{copy.footer.contactTitle}
							</div>
							<ul className="mt-4 space-y-2 text-sm">
								{copy.footer.contactItems.map((it) => (
									<li key={it.label} className="text-muted-foreground">
										<span className="text-foreground/90">{it.label}: </span>
										{it.value}
									</li>
								))}
							</ul>
						</div>

						<div className="md:col-span-4">
							<div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
								{copy.footer.legalTitle}
							</div>
							<ul className="mt-4 space-y-2 text-sm">
								{copy.footer.legalItems.map((it) => (
									<li key={it.label}>
										<a
											href={it.href}
											className="text-muted-foreground hover:text-foreground transition-colors"
										>
											{it.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Reveal>

				<Separator className="my-10" />
				<p className="text-xs text-muted-foreground">{copy.footer.copyright}</p>
			</div>
		</footer>
	);
}
