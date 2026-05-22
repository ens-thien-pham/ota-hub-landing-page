import {
	LayoutGrid,
	LineChart,
	ScanEye,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type FeaturesProps = {
	copy: LandingCopy;
};

const ICONS = [ShieldCheck, LayoutGrid, ScanEye, Sparkles, LineChart] as const;

export function Features({ copy }: FeaturesProps) {
	return (
		<section id="features" className="mt-24 scroll-mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<SectionHeading
						eyebrow="Featured"
						title={copy.features.title}
						subtitle={copy.features.subtitle}
					/>
				</Reveal>

				<div className="mt-10 grid gap-5 lg:grid-cols-12">
					{copy.features.items.map((item, idx) => {
						const Icon = ICONS[idx % ICONS.length];
						const wide = idx === 0 || idx === 3;

						return (
							<Reveal
								key={item.title}
								delayMs={70 + idx * 70}
								className={wide ? "lg:col-span-7" : "lg:col-span-5"}
							>
								<Card className="group h-full rounded-3xl border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
									<div className="flex items-start justify-between gap-6">
										<div>
											<Badge
												className="rounded-full px-3 py-1"
												variant="secondary"
											>
												Core
											</Badge>
											<h3 className="mt-4 font-heading text-xl tracking-tight">
												{item.title}
											</h3>
											<p className="mt-2 text-sm leading-6 text-muted-foreground">
												{item.description}
											</p>
										</div>
										<div className="relative grid size-12 shrink-0 place-items-center rounded-2xl border bg-background/60">
											<span className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
											<Icon className="relative size-5" />
										</div>
									</div>
								</Card>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
