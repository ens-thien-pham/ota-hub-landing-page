import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	className?: string;
};

export function SectionHeading({
	eyebrow,
	title,
	subtitle,
	className,
}: SectionHeadingProps) {
	return (
		<div className={cn("max-w-2xl", className)}>
			{eyebrow ? (
				<p className="text-xs font-semibold tracking-[0.26em] uppercase text-muted-foreground">
					{eyebrow}
				</p>
			) : null}
			<h2 className="mt-3 font-heading text-3xl leading-tight tracking-tight sm:text-4xl">
				{title}
			</h2>
			{subtitle ? (
				<p className="mt-3 text-base leading-7 text-muted-foreground">
					{subtitle}
				</p>
			) : null}
		</div>
	);
}
