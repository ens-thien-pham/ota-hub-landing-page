import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type FAQProps = {
	copy: LandingCopy;
};

export function FAQ({ copy }: FAQProps) {
	return (
		<section id="faq" className="mt-24 scroll-mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<SectionHeading
						eyebrow="FAQ"
						title={copy.faq.title}
						subtitle={copy.faq.subtitle}
					/>
				</Reveal>

				<Reveal delayMs={80}>
					<div className="mt-10 rounded-3xl border bg-card/70 p-4 backdrop-blur sm:p-6">
						<Accordion type="single" collapsible className="w-full">
							{copy.faq.items.map((item, idx) => (
								<AccordionItem key={item.q} value={`item-${idx}`}>
									<AccordionTrigger className="text-left font-heading">
										{item.q}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground">
										{item.a}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
