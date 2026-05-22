"use client";

import * as React from "react";

import { Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { LandingCopy } from "@/lib/ota-hub-copy";

type FinalCTAProps = {
	copy: LandingCopy;
};

export function FinalCTA({ copy }: FinalCTAProps) {
	const [email, setEmail] = React.useState("");

	return (
		<section className="mt-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<Reveal>
					<Card className="relative overflow-hidden rounded-[2.25rem] border bg-card/70 p-8 backdrop-blur sm:p-10">
						<div className="absolute inset-0 -z-10 bg-primary/10" />
						<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
							<div>
								<h2 className="font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
									{copy.finalCta.title}
								</h2>
								<p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
									{copy.finalCta.subtitle}
								</p>
							</div>

							<form
								className="grid gap-3"
								onSubmit={(e) => {
									e.preventDefault();
								}}
							>
								<div className="flex flex-col gap-3 sm:flex-row">
									<Input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder={copy.finalCta.inputPlaceholder}
										className="h-11 rounded-full"
									/>
									<Button
										type="submit"
										size="lg"
										className="h-11 rounded-full px-8"
									>
										{copy.finalCta.button}
									</Button>
								</div>
								<p className="text-xs leading-5 text-muted-foreground">
									{copy.finalCta.note}
								</p>
							</form>
						</div>
					</Card>
				</Reveal>
			</div>
		</section>
	);
}
