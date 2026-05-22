"use client";

import * as React from "react";

type UseInViewOptions = IntersectionObserverInit & {
	once?: boolean;
};

export function useInView<T extends Element>(options: UseInViewOptions = {}) {
	const { once = true, root, rootMargin, threshold } = options;
	const [inView, setInView] = React.useState(false);
	const ref = React.useRef<T | null>(null);

	React.useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (!entry) return;
				if (entry.isIntersecting) {
					setInView(true);
					if (once) observer.disconnect();
				} else if (!once) {
					setInView(false);
				}
			},
			{ root, rootMargin, threshold },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [once, root, rootMargin, threshold]);

	return { ref, inView };
}
