import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { LandingCopy, Locale } from "@/lib/ota-hub-copy";
import { cn } from "@/lib/utils";

type HeroProps = {
	lang: Locale;
	copy: LandingCopy;
};

export function Hero({ copy }: HeroProps) {
	return (
		<section className="relative overflow-hidden pt-24">
			<div className="absolute inset-0 -z-10">
				<div className="absolute -top-24 left-1/2 h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
				<div className="absolute -bottom-28 left-[-140px] h-[420px] w-[420px] rounded-full bg-chart-1/25 blur-3xl" />
				<div className="absolute -bottom-24 right-[-120px] h-[520px] w-[520px] rounded-full bg-chart-2/20 blur-3xl" />
			</div>

			<div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
				<div>
					<div
						className={cn(
							"inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground",
							"backdrop-blur",
							"animate-hero-in",
						)}
						style={{ animationDelay: "0ms" }}
					>
						<span className="size-1.5 rounded-full bg-primary" />
						{copy.hero.badge}
					</div>

					<h1 className="mt-6 font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl">
						{copy.hero.heading.words.map((w, i) => (
							<span
								key={w}
								className={cn(
									"inline-block animate-hero-in",
									i < copy.hero.heading.words.length - 1 && "mr-2",
								)}
								style={{ animationDelay: `${80 + i * 90}ms` }}
							>
								<span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
									{w}
								</span>
							</span>
						))}
						<span
							className="inline-block animate-hero-in"
							style={{ animationDelay: "420ms" }}
						>
							{" "}
							{copy.hero.heading.rest}
						</span>
					</h1>

					<p
						className="mt-5 max-w-xl text-base leading-7 text-muted-foreground animate-hero-in"
						style={{ animationDelay: "520ms" }}
					>
						{copy.hero.subtitle}
					</p>

					<div
						className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-hero-in"
						style={{ animationDelay: "640ms" }}
					>
						<Button
							asChild
							size="lg"
							className={cn(
								"rounded-full px-10",
								"shadow-lg hover:shadow-xl",
								"transition-all hover:-translate-y-0.5",
							)}
						>
							<a href={copy.hero.primaryCtaHref}>{copy.hero.primaryCta} →</a>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="rounded-full px-10"
						>
							<a href="#media">{copy.hero.secondaryCta}</a>
						</Button>
					</div>

					<div
						className="mt-10 grid gap-3 sm:grid-cols-3 animate-hero-in"
						style={{ animationDelay: "760ms" }}
					>
						{copy.hero.socialProof.items.map((item) => (
							<Card
								key={item.label}
								className="rounded-2xl border bg-card/70 px-5 py-4 backdrop-blur"
							>
								<div className="font-heading text-2xl tracking-tight">
									{item.value}
								</div>
								<div className="mt-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
									{item.label}
								</div>
							</Card>
						))}
					</div>
					<p
						className="mt-3 text-xs leading-5 text-muted-foreground animate-hero-in"
						style={{ animationDelay: "860ms" }}
					>
						{copy.hero.socialProof.caption}
					</p>
				</div>

				<div className="relative">
					<div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.25rem] bg-primary/10 blur-3xl" />
					<div className="rounded-[2.25rem] border bg-card/70 p-4 shadow-xl backdrop-blur">
						<Image
							src={withBasePath("/images/ota-demo-2.gif")}
							alt={copy.media.alt}
							width={1600}
							height={1000}
							priority
							className="h-auto w-full rounded-[1.6rem]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
