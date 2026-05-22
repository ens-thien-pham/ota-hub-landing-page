import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type TestimonialsProps = {
	copy: LandingCopy;
};

export function Testimonials({ copy }: TestimonialsProps) {
	return (
		<section id="testimonials" className="mt-24 scroll-mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<SectionHeading
						eyebrow="Social proof"
						title={copy.testimonials.title}
						subtitle={copy.testimonials.subtitle}
					/>
				</Reveal>

				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{copy.testimonials.items.map((t, idx) => (
						<Reveal key={t.name} delayMs={70 + idx * 70}>
							<Card className="group rounded-3xl border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<div className="flex items-start justify-between gap-6">
									<div>
										<p className="font-heading text-[28px] leading-none text-muted-foreground">
											“
										</p>
										<p className="mt-3 text-sm leading-6 text-foreground/90">
											{t.quote}
										</p>
									</div>
									<Avatar className="size-12 rounded-2xl">
										<AvatarFallback className="rounded-2xl font-heading">
											{t.name.slice(0, 2).toUpperCase()}
										</AvatarFallback>
									</Avatar>
								</div>
								<div className="mt-5 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
									{t.name} • {t.role}
								</div>
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
