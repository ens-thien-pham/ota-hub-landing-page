"use client";

import type * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type RevealProps = {
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	delayMs?: number;
};

export function Reveal({
	as: Comp = "div",
	children,
	className,
	delayMs = 0,
}: RevealProps) {
	const { ref, inView } = useInView<HTMLElement>({
		rootMargin: "0px 0px 15% 0px",
		threshold: 0.01,
	});

	return (
		<Comp
			ref={ref}
			data-reveal={inView ? "in" : "out"}
			className={cn("reveal", className)}
			style={{ animationDelay: `${delayMs}ms` }}
		>
			{children}
		</Comp>
	);
}
