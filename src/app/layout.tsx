import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin", "latin-ext"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ?? "https://ota-hub.example.com",
	),
	title: "OTA Hub | Landing",
	description:
		"OTA Hub landing page (EN/VI) — online English testing platform.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn("h-full", "antialiased", poppins.variable, "font-sans")}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
