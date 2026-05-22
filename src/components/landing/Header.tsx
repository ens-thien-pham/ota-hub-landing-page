"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";
import type { LandingCopy, Locale } from "@/lib/ota-hub-copy";
import { cn } from "@/lib/utils";

type HeaderProps = {
	lang: Locale;
	copy: LandingCopy;
};

export function Header({ lang, copy }: HeaderProps) {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 8);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const otherLang = lang === "vi" ? "en" : "vi";

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50",
				"transition-all duration-300",
				scrolled
					? "bg-background/80 backdrop-blur-md border-b"
					: "bg-transparent",
			)}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
				<Link
					href={`/ota-hub/${lang}`}
					className="group inline-flex items-center gap-3"
				>
					<span className="relative grid size-9 place-items-center overflow-hidden rounded-full border bg-card shadow-sm">
						<span className="absolute inset-0 rounded-full bg-primary/10" />
						<Image
							src={withBasePath("/images/ota-hub-logo.svg")}
							alt="OTA Hub logo"
							width={36}
							height={36}
							className="relative size-6 dark:invert"
						/>
					</span>
					<span className="leading-tight">
						<span className="block font-heading text-base tracking-tight">
							{copy.brand.name}
						</span>
						<span className="block text-xs text-muted-foreground">
							{copy.brand.tagline}
						</span>
					</span>
				</Link>

				<nav className="hidden items-center gap-6 md:flex">
					{copy.nav.items.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-xs font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<Button
						asChild
						variant="ghost"
						size="sm"
						className="hidden sm:inline-flex"
					>
						<Link
							href={`/ota-hub/${otherLang}`}
							aria-label={`${copy.nav.languageLabel}: ${otherLang.toUpperCase()}`}
						>
							{otherLang.toUpperCase()}
						</Link>
					</Button>
					<Button
						asChild
						variant="default"
						size="sm"
						className={cn(
							"rounded-full px-5",
							"shadow-lg hover:shadow-xl",
							"transition-shadow",
						)}
					>
						<a href={copy.hero.primaryCtaHref}>{copy.nav.cta}</a>
					</Button>
				</div>
			</div>
		</header>
	);
}
