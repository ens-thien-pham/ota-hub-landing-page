import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Card } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type MediaSectionProps = {
	copy: LandingCopy;
};

export function MediaSection({ copy }: MediaSectionProps) {
	return (
		<section id="media" className="mt-20 scroll-mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<SectionHeading
						eyebrow={copy.media.eyebrow}
						title={copy.media.title}
						subtitle={copy.media.description}
					/>
				</Reveal>

				<div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
					<Reveal delayMs={80} className="h-full">
						<Card className="h-full rounded-3xl border bg-card/70 p-6 backdrop-blur">
							<div className="font-heading text-2xl tracking-tight">
								{copy.media.panelTitle}
							</div>
							<p className="mt-3 text-sm leading-6 text-muted-foreground">
								{copy.media.panelDescription}
							</p>
							<div className="mt-6 grid gap-3">
								{copy.media.callouts.map((item) => (
									<div
										key={item.title}
										className="rounded-2xl border bg-background/60 px-4 py-3"
									>
										<p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
											{item.title}
										</p>
										<p className="mt-1 text-sm">{item.description}</p>
									</div>
								))}
							</div>
						</Card>
					</Reveal>

					<Reveal delayMs={140}>
						<Card className="rounded-3xl border bg-card/70 p-4 backdrop-blur">
							<Image
								src={withBasePath("/images/ota-hub-preview.svg")}
								alt={copy.media.alt}
								width={1600}
								height={1000}
								className="h-auto w-full rounded-2xl"
								loading="lazy"
							/>
						</Card>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
