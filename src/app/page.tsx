"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/ota-hub/vi");
	}, [router]);

	return (
		<main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
			<p className="text-sm text-muted-foreground">
				Redirecting… If it doesn’t happen, open the landing page:
			</p>
			<Link href="/ota-hub/vi" className="underline">
				/ota-hub/vi
			</Link>
		</main>
	);
}
