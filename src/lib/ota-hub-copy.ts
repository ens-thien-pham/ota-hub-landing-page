export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

type NavItem = {
	label: string;
	href: string;
};

export type LandingCopy = {
	meta: {
		title: string;
		description: string;
		keywords: string[];
	};
	brand: {
		name: string;
		tagline: string;
	};
	nav: {
		items: NavItem[];
		cta: string;
		languageLabel: string;
	};
	hero: {
		badge: string;
		heading: {
			words: string[];
			rest: string;
		};
		subtitle: string;
		primaryCta: string;
		secondaryCta: string;
		primaryCtaHref: string;
		socialProof: {
			items: Array<{ label: string; value: string }>;
			caption: string;
		};
	};
	media: {
		eyebrow: string;
		title: string;
		description: string;
		alt: string;
		panelTitle: string;
		panelDescription: string;
		callouts: Array<{ title: string; description: string }>;
	};
	features: {
		title: string;
		subtitle: string;
		items: Array<{ title: string; description: string }>;
	};
	team: {
		title: string;
		subtitle: string;
		people: Array<{
			name: string;
			title: string;
			image?: string;
			scope: string;
		}>;
	};
	roadmap: {
		title: string;
		subtitle: string;
		phases: Array<{
			title: string;
			items: Array<{ label: string; checked: boolean }>;
		}>;
	};
	testimonials: {
		title: string;
		subtitle: string;
		items: Array<{ name: string; role: string; quote: string }>;
	};
	faq: {
		title: string;
		subtitle: string;
		items: Array<{ q: string; a: string }>;
	};
	finalCta: {
		title: string;
		subtitle: string;
		inputPlaceholder: string;
		button: string;
		note: string;
	};
	footer: {
		title: string;
		description: string;
		contactTitle: string;
		contactItems: Array<{ label: string; value: string }>;
		legalTitle: string;
		legalItems: Array<{ label: string; href: string }>;
		copyright: string;
	};
};

export const COPY: Record<Locale, LandingCopy> = {
	vi: {
		meta: {
			title: "OTA Hub | Nền tảng thi tiếng Anh trực tuyến",
			description:
				"OTA Hub giúp giáo viên tạo đề, quản lý lớp và tổ chức kiểm tra tiếng Anh trực tuyến với theo dõi trung thực và phân tích năng lực.",
			keywords: [
				"thi tiếng anh trực tuyến",
				"nền tảng kiểm tra online",
				"quản lý lớp học",
				"AI tạo đề",
				"OTA Hub",
			],
		},
		brand: {
			name: "OTA Hub",
			tagline: "Online English Testing Platform",
		},
		nav: {
			items: [
				{ label: "Tính năng", href: "#features" },
				{ label: "Đội ngũ", href: "#team" },
				{ label: "Roadmap", href: "#roadmap" },
				{ label: "FAQ", href: "#faq" },
				{ label: "Liên hệ", href: "#contact" },
			],
			cta: "Bắt đầu",
			languageLabel: "Ngôn ngữ",
		},
		hero: {
			badge: "Bài thi kiểm tra tiếng Anh trực tuyến",
			heading: {
				words: ["Thi", "Tiếng", "Anh"],
				rest: "trực tuyến — minh bạch, hiện đại, đáng tin cậy.",
			},
			subtitle:
				"Tự động tạo đề kiểm tra tiếng Anh đúng chuẩn chương trình — nhanh chóng và chính xác. Giúp giáo viên tiết kiệm thời gian, học sinh có đề luyện tập chất lượng.",
			primaryCta: "Bắt đầu ngay",
			secondaryCta: "Xem tổng quan",
			primaryCtaHref: "https://ota-hub.me/",
			socialProof: {
				items: [
					{ value: "99.9%", label: "Uptime mục tiêu" },
					{ value: "2m", label: "Tạo đề nhanh" },
					{ value: "RBAC", label: "Phân quyền chuẩn" },
				],
				caption: "",
			},
		},
		media: {
			eyebrow: "Media",
			title: "Giao diện rõ ràng — Trải nghiệm làm Test trực quan",
			description: "",
			alt: "OTA Hub dashboard preview",
			panelTitle: "OTA Hub",
			panelDescription:
				"Giao diện tương tác trực quan cho giáo viên và học sinh, mọi hoạt động ra đề, tham gia lớp và kiểm tra bài test đều được thực hiện trên hệ thống, an toàn, bảo mật và tin cậy",
			callouts: [
				{
					title: "Integrity signals",
					description: "Theo dõi giúp tăng tính công bằng và độ tin cậy.",
				},
				{
					title: "AI-assisted generation",
					description: "Tạo đề nháp từ tài liệu & nguồn học liệu của bạn.",
				},
			],
		},

		features: {
			title: "Tính năng nổi bật",
			subtitle:
				"Tập trung vào tính trung thực, quản trị lớp, và phân tích năng lực.",
			items: [
				{
					title: "RBAC: Giáo viên & học sinh cùng một hệ thống",
					description:
						"Phân quyền rõ ràng theo vai trò, luồng tương tác mạch lạc, dễ quản trị.",
				},
				{
					title: "Quản lý lớp hiện đại",
					description:
						"Tổ chức lớp, học sinh, lịch kiểm tra và bài tập theo cấu trúc nhất quán.",
				},
				{
					title: "Tracking bài kiểm tra trung thực",
					description:
						"Theo dõi hành vi làm bài theo cách tin cậy để tăng độ công bằng và minh bạch.",
				},
				{
					title: "AI generator: tạo đề từ tài liệu có sẵn",
					description:
						"Tự động hoá tạo đề dựa trên tài liệu/nguồn dữ liệu của giáo viên.",
				},
				{
					title: "Phân tích năng lực & điểm số",
					description:
						"Tổng hợp kết quả, xu hướng, và gợi ý cải thiện theo kỹ năng.",
				},
			],
		},
		team: {
			title: "Đội ngũ",
			subtitle: "",
			people: [
				{
					name: "Tai Vo",
					title: "Coordinate / Developer",
					image: "/images/team/tai-vo.png",
					scope:
						"Track progress across classes and teams, and ensure every test is delivered on time",
				},
				{
					name: "Nguyen Tran",
					title: "Developer",
					image: "/images/team/nguyen-tran.png",
					scope:
						"Build on top of a flexible, optimize and scalability exam generation API",
				},
				{
					name: "Ba Le",
					title: "Developer",
					image: "/images/team/ba-le.png",
					scope:
						"Create user friendly UI/UX, reponsive design with amazing animation.",
				},
			],
		},
		roadmap: {
			title: "Roadmap",
			subtitle: "",
			phases: [
				{
					title: "Giai đoạn 1 — Nền tảng",
					items: [
						{ label: "Thiết kế luồng quản lý lớp", checked: true },
						{ label: "Chuẩn hoá RBAC và phân quyền", checked: true },
						{ label: "Tối ưu trải nghiệm làm bài", checked: false },
					],
				},
				{
					title: "Giai đoạn 2 — Tự động hoá",
					items: [
						{ label: "AI generator từ tài liệu", checked: false },
						{ label: "Kho câu hỏi / ngân hàng đề", checked: false },
						{ label: "Báo cáo nâng cao", checked: false },
					],
				},
				{
					title: "Giai đoạn 3 — Phân tích năng lực",
					items: [
						{ label: "Dashboard năng lực theo kỹ năng", checked: false },
						{ label: "Gợi ý học tập cá nhân hoá", checked: false },
						{ label: "Chuẩn hoá xuất dữ liệu", checked: false },
					],
				},
			],
		},
		testimonials: {
			title: "Khách hàng nói gì?",
			subtitle: "Placeholder — thay bằng phản hồi thật để tăng độ tin cậy.",
			items: [
				{
					name: "Giáo viên A",
					role: "English Teacher",
					quote:
						"OTA Hub giúp mình tạo đề nhanh, quản lý lớp gọn, và theo dõi bài thi rõ ràng.",
				},
				{
					name: "Giáo viên B",
					role: "Academic Lead",
					quote:
						"Báo cáo kết quả dễ đọc, học sinh cũng làm bài mượt hơn nhiều.",
				},
				{
					name: "Học sinh C",
					role: "Student",
					quote:
						"Giao diện dễ dùng, vào làm bài nhanh, ít lỗi. Mình thích phần tổng kết điểm.",
				},
				{
					name: "Quản trị D",
					role: "Admin",
					quote:
						"Phân quyền rõ ràng, dễ kiểm soát quy trình thi. Setup nhanh cho nhiều lớp.",
				},
			],
		},
		faq: {
			title: "Câu hỏi thường gặp",
			subtitle: "",
			items: [
				{
					q: "OTA Hub phù hợp cho đối tượng nào?",
					a: "Phù hợp cho giáo viên, trung tâm, và trường muốn tổ chức kiểm tra tiếng Anh trực tuyến.",
				},
				{
					q: "Có hỗ trợ nhiều lớp và nhiều bài thi không?",
					a: "Có. Hệ thống được thiết kế để quản lý lớp/học sinh/bài kiểm tra theo mô hình mở rộng.",
				},
				{
					q: "Tracking trung thực hoạt động như thế nào?",
					a: "Placeholder: bạn có thể mô tả các cơ chế theo dõi phù hợp với phạm vi dự án.",
				},
				{
					q: "AI generator lấy dữ liệu từ đâu?",
					a: "Placeholder: từ tài liệu có sẵn, ngân hàng câu hỏi, hoặc nguồn dữ liệu do giáo viên cung cấp.",
				},
				{
					q: "Có thể tuỳ chỉnh thang điểm và kỹ năng?",
					a: "Có thể thiết kế để linh hoạt theo nhu cầu; bạn sẽ cập nhật chi tiết triển khai sau.",
				},
			],
		},
		finalCta: {
			title: "Sẵn sàng triển khai bài thi online?",
			subtitle: "Nhập email để nhận bản demo / cập nhật tiến độ",
			inputPlaceholder: "Email của bạn",
			button: "Nhận cập nhật",
			note: "",
		},
		footer: {
			title: "OTA Hub",
			description:
				"Nền tảng thi kiểm tra tiếng Anh trực tuyến — tối ưu quản lý, tăng độ tin cậy.",
			contactTitle: "Liên hệ",
			contactItems: [
				{ label: "Email", value: "contact@ota-hub.example" },
				{ label: "Địa chỉ", value: "280 Tran Hung Dao Street" },
			],
			legalTitle: "Pháp lý",
			legalItems: [
				{ label: "Điều khoản", href: "#" },
				{ label: "Chính sách", href: "#" },
			],
			copyright: `© ${new Date().getFullYear()} OTA Hub. All rights reserved.`,
		},
	},
	en: {
		meta: {
			title: "OTA Hub | Online English Testing Platform",
			description:
				"OTA Hub helps teachers generate exams, manage classes, proctor tests, and analyze student performance — all in one modern system.",
			keywords: [
				"online english testing",
				"exam platform",
				"class management",
				"AI exam generator",
				"OTA Hub",
			],
		},
		brand: {
			name: "OTA Hub",
			tagline: "Online English Testing Platform",
		},
		nav: {
			items: [
				{ label: "Features", href: "#features" },
				{ label: "Team", href: "#team" },
				{ label: "Roadmap", href: "#roadmap" },
				{ label: "FAQ", href: "#faq" },
				{ label: "Contact", href: "#contact" },
			],
			cta: "Get started",
			languageLabel: "Language",
		},
		hero: {
			badge: "Online English assessment",
			heading: {
				words: ["Modern", "online", "English"],
				rest: "testing — fair, reliable, and fast.",
			},
			subtitle:
				"Generate customized English tests aligned to curriculum standards — instantly. Designed for teachers who want to save time, and students who deserve well-structured practice.",
			primaryCta: "Get started",
			secondaryCta: "Explore overview",
			primaryCtaHref: "https://ota-hub.me/",
			socialProof: {
				items: [
					{ value: "99.9%", label: "Target uptime" },
					{ value: "2m", label: "Exam setup" },
					{ value: "RBAC", label: "Role-based access" },
				],
				caption: "",
			},
		},
		media: {
			eyebrow: "Media",
			title: "Clean UI — smooth test flow",
			description:
				"Custom UI illustration (not stock). Swap with real screenshots when ready.",
			alt: "OTA Hub dashboard preview",
			panelTitle: "OTA Hub",
			panelDescription:
				"An intuitive, interactive interface for teachers and students — exam creation, class enrollment, and test-taking all happen within the platform, securely and reliably.",
			callouts: [
				{
					title: "Integrity signals",
					description: "Tracking that supports fairness and trust.",
				},
				{
					title: "AI-assisted generation",
					description: "Draft exams from your documents & materials.",
				},
			],
		},

		features: {
			title: "Featured capabilities",
			subtitle:
				"Designed for integrity, modern class operations, and actionable insights.",
			items: [
				{
					title: "RBAC for teachers & students",
					description:
						"Clear roles, consistent workflows, and safe collaboration in one system.",
				},
				{
					title: "Modern class management",
					description:
						"Organize classes, learners, schedules, and assignments with a scalable structure.",
				},
				{
					title: "Trustworthy test tracking",
					description:
						"Proctoring-friendly signals to improve fairness and transparency.",
				},
				{
					title: "AI generator from your materials",
					description:
						"Generate exams automatically from documents and curated content.",
				},
				{
					title: "Skill & score analytics",
					description:
						"Summaries, trends, and insights to support better learning outcomes.",
				},
			],
		},
		team: {
			title: "Team",
			subtitle: "",
			people: [
				{
					name: "Tai Vo",
					title: "Coordinate / Developer",
					image: "/images/team/tai-vo.png",
					scope:
						"Track progress across classes and teams, and ensure every test is delivered on time",
				},
				{
					name: "Nguyen Tran",
					title: "Developer",
					image: "/images/team/nguyen-tran.png",
					scope:
						"Build on top of a flexible, optimize and scalability exam generation API",
				},
				{
					name: "Ba Le",
					title: "Developer",
					image: "/images/team/ba-le.png",
					scope:
						"Create user friendly UI/UX, reponsive design with amazing animation.",
				},
			],
		},
		roadmap: {
			title: "Roadmap",
			subtitle: "",
			phases: [
				{
					title: "Phase 1 — Foundation",
					items: [
						{ label: "Class management flows", checked: true },
						{ label: "RBAC hardening", checked: true },
						{ label: "Test-taking UX", checked: false },
					],
				},
				{
					title: "Phase 2 — Automation",
					items: [
						{ label: "AI generator from docs", checked: false },
						{ label: "Question bank", checked: false },
						{ label: "Advanced reports", checked: false },
					],
				},
				{
					title: "Phase 3 — Analytics",
					items: [
						{ label: "Skill dashboards", checked: false },
						{ label: "Personalized suggestions", checked: false },
						{ label: "Export & integrations", checked: false },
					],
				},
			],
		},
		testimonials: {
			title: "What people say",
			subtitle:
				"Placeholder testimonials — swap with real reviews for credibility.",
			items: [
				{
					name: "Teacher A",
					role: "English Teacher",
					quote:
						"OTA Hub makes exam creation fast, class ops clean, and tracking transparent.",
				},
				{
					name: "Teacher B",
					role: "Academic Lead",
					quote:
						"Reports are easy to read. Students have a smoother test experience now.",
				},
				{
					name: "Student C",
					role: "Student",
					quote:
						"The interface is simple. I can start tests quickly and see my results clearly.",
				},
				{
					name: "Admin D",
					role: "Admin",
					quote:
						"Roles are clear and onboarding many classes is straightforward.",
				},
			],
		},
		faq: {
			title: "FAQ",
			subtitle: "",
			items: [
				{
					q: "Who is OTA Hub for?",
					a: "Teachers, centers, and schools that want modern online English assessment.",
				},
				{
					q: "Does it support multiple classes and exams?",
					a: "Yes — it is designed to scale across classes, learners, and tests.",
				},
				{
					q: "How does test tracking work?",
					a: "Placeholder: describe your proctoring/tracking scope and signals.",
				},
				{
					q: "Where does the AI generator get its data?",
					a: "Placeholder: documents, question banks, and teacher-provided sources.",
				},
				{
					q: "Can I customize scoring and skills?",
					a: "Yes — can be built to match your rubric; implementation details come next.",
				},
			],
		},
		finalCta: {
			title: "Ready to launch online testing?",
			subtitle: "Leave your email to get a demo / progress updates",
			inputPlaceholder: "Your email",
			button: "Get updates",
			note: "",
		},
		footer: {
			title: "OTA Hub",
			description:
				"Online English testing — streamlined operations, higher trust, better insights.",
			contactTitle: "Contact",
			contactItems: [
				{ label: "Email", value: "contact@ota-hub.com" },
				{ label: "Address", value: "280 Tran Hung Dao Street" },
			],
			legalTitle: "Legal",
			legalItems: [
				{ label: "Terms", href: "#" },
				{ label: "Privacy", href: "#" },
			],
			copyright: `© ${new Date().getFullYear()} OTA Hub. All rights reserved.`,
		},
	},
};
