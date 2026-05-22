import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type TeamProps = {
	copy: LandingCopy;
};

export function Team({ copy }: TeamProps) {
	return (
		<section id="team" className="mt-24 scroll-mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<SectionHeading
						eyebrow="Team"
						title={copy.team.title}
						subtitle={copy.team.subtitle}
					/>
				</Reveal>

				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{copy.team.people.map((p, idx) => (
						<Reveal key={p.name} delayMs={70 + idx * 90}>
							<Card className="rounded-3xl border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<div className="flex items-center gap-4">
									<Avatar className="size-12 rounded-2xl">
										{p.image ? (
											<AvatarImage src={p.image} alt="@team" />
										) : (
											<AvatarFallback className="rounded-2xl font-heading">
												{p.name.slice(0, 2).toUpperCase()}
											</AvatarFallback>
										)}
									</Avatar>
									<div>
										<div className="font-heading text-lg tracking-tight">
											{p.name}
										</div>
										<div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
											{p.title}
										</div>
									</div>
								</div>
								<p className="mt-4 text-sm leading-6 text-muted-foreground">
									{p.scope}
								</p>
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
