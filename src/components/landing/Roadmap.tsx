import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type RoadmapProps = {
	copy: LandingCopy;
};

export function Roadmap({ copy }: RoadmapProps) {
	return (
		<section id="roadmap" className="mt-24 scroll-mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<SectionHeading
						eyebrow="Roadmap"
						title={copy.roadmap.title}
						subtitle={copy.roadmap.subtitle}
					/>
				</Reveal>

				<div className="mt-10 grid gap-5 lg:grid-cols-3">
					{copy.roadmap.phases.map((phase, idx) => (
						<Reveal key={phase.title} delayMs={70 + idx * 90}>
							<Card className="rounded-3xl border bg-card/70 p-6 backdrop-blur">
								<div className="font-heading text-xl tracking-tight">
									{phase.title}
								</div>
								<Separator className="my-5" />
								<ul className="space-y-3">
									{phase.items.map((it) => (
										<li key={it.label} className="flex items-start gap-3">
											<input
												type="checkbox"
												checked={it.checked}
												disabled
												className="mt-1 size-4 accent-foreground"
											/>
											<span className="text-sm leading-6 text-muted-foreground">
												{it.label}
											</span>
										</li>
									))}
								</ul>
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
