const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"];/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import { MongoliaMap } from "/src/components/MongoliaMap.tsx";
import { AimagDetailDrawer } from "/src/components/AimagDetailDrawer.tsx";
import { StatisticsOverview } from "/src/components/StatisticsOverview.tsx";
import { AimagsDirectory } from "/src/components/AimagsDirectory.tsx";
import { HerderAdvisorySection } from "/src/components/HerderAdvisorySection.tsx";
import { GithubDeployModal } from "/src/components/GithubDeployModal.tsx";
import { AIMAGS_DATA } from "/src/data/aimagData.ts";
import { ArrowRight, BarChart3, Calculator, CloudSnow, Database, ExternalLink, Github, MapPin, Menu, PhoneCall, ShieldAlert, Snowflake, X } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export default function App() {
	const [activeTab, setActiveTab] = useState("home");
	const [selectedAimag, setSelectedAimag] = useState(null);
	const [mapMode, setMapMode] = useState("dzudRisk");
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const handleRefresh = () => {
		setIsRefreshing(true);
		setTimeout(() => {
			setIsRefreshing(false);
		}, 800);
	};
	const handleSelectAimagAndOpen = (aimag) => {
		setSelectedAimag(aimag);
	};
	const navigateTo = (tab) => {
		setActiveTab(tab);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 border-b border-red-900/40 text-[11px] sm:text-xs py-1.5 px-4 text-center text-slate-300 flex items-center justify-center gap-2",
				children: [
					/* @__PURE__ */ _jsxDEV("span", {
						className: "flex h-2 w-2 relative",
						children: [/* @__PURE__ */ _jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-red-500" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("span", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Шуурхай мэдээ:" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 11
					}, this), " Сүхбаатар, Хэнтий, Завхан, Увс аймгуудад хүйтний ба төмөр зуд нүүрлэж онцгой дэглэмд шилжив."] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							const sukhbaatar = AIMAGS_DATA.find((a) => a.id === "sukhbaatar");
							if (sukhbaatar) setSelectedAimag(sukhbaatar);
						},
						className: "underline text-amber-300 hover:text-white font-medium ml-1",
						children: "Мэдээлэл харах"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("header", {
				className: "sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => navigateTo("home"),
							className: "flex items-center gap-2.5 text-white font-black text-xl tracking-tight group",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "p-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition",
								children: /* @__PURE__ */ _jsxDEV(Snowflake, { className: "w-5 h-5 text-blue-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Dzud Watch" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("nav", {
							className: "hidden md:flex items-center gap-1 sm:gap-2 text-xs font-semibold text-slate-300",
							children: [
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => navigateTo("home"),
									className: `px-3.5 py-1.5 rounded-xl transition ${activeTab === "home" ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" : "hover:text-white hover:bg-slate-800"}`,
									children: "Нүүр (Газрын зураг)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => navigateTo("statistics"),
									className: `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${activeTab === "statistics" ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" : "hover:text-white hover:bg-slate-800"}`,
									children: [/* @__PURE__ */ _jsxDEV(BarChart3, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Статистик" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => navigateTo("aimags"),
									className: `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${activeTab === "aimags" ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" : "hover:text-white hover:bg-slate-800"}`,
									children: [/* @__PURE__ */ _jsxDEV(MapPin, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 133,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Аймгууд" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => navigateTo("advisory"),
									className: `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${activeTab === "advisory" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "hover:text-amber-300 hover:bg-slate-800"}`,
									children: [/* @__PURE__ */ _jsxDEV(ShieldAlert, { className: "w-3.5 h-3.5 text-amber-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Малчны зөвлөмж & Тооцоолуур" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => navigateTo("sources"),
									className: `px-3.5 py-1.5 rounded-xl transition ${activeTab === "sources" ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" : "hover:text-white hover:bg-slate-800"}`,
									children: "Эх сурвалж"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 149,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "hidden sm:flex items-center gap-2.5",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setIsGithubModalOpen(true),
								className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition",
								title: "GitHub руу оруулах заавар & .ZIP татах",
								children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-3.5 h-3.5 text-slate-300" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub руу байршуулах" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 170,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("a", {
								href: "tel:105",
								className: "flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/30 transition",
								children: [/* @__PURE__ */ _jsxDEV(PhoneCall, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "105" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 174,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white",
							children: mobileMenuOpen ? /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 31
							}, this) : /* @__PURE__ */ _jsxDEV(Menu, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 59
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 9
				}, this), mobileMenuOpen && /* @__PURE__ */ _jsxDEV("div", {
					className: "md:hidden p-4 bg-slate-900 border-b border-slate-800 space-y-2 text-xs",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								navigateTo("home");
								setMobileMenuOpen(false);
							},
							className: "w-full text-left py-2 px-3 rounded-lg text-white font-medium hover:bg-slate-800",
							children: "Нүүр (Газрын зураг)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								navigateTo("statistics");
								setMobileMenuOpen(false);
							},
							className: "w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:bg-slate-800",
							children: "Статистик & Хяналт"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								navigateTo("aimags");
								setMobileMenuOpen(false);
							},
							className: "w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:bg-slate-800",
							children: "21 Аймаг & Нийслэл"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								navigateTo("advisory");
								setMobileMenuOpen(false);
							},
							className: "w-full text-left py-2 px-3 rounded-lg text-amber-300 hover:bg-slate-800",
							children: "Малчны зөвлөмж & Тооцоолуур"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								navigateTo("sources");
								setMobileMenuOpen(false);
							},
							className: "w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:bg-slate-800",
							children: "Эх сурвалж & Мэдээлэл"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 231,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "pt-2 border-t border-slate-800 flex flex-col gap-2",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => {
									setMobileMenuOpen(false);
									setIsGithubModalOpen(true);
								},
								className: "w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800 text-white font-medium text-xs border border-slate-700",
								children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 249,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub руу байршуулах (Заавар & ZIP)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 250,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 242,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("a", {
								href: "tel:105",
								className: "w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-600 text-white font-bold text-xs",
								children: [/* @__PURE__ */ _jsxDEV(PhoneCall, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 256,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "ОБЕГ Шуурхай: 105" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 257,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 252,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 194,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 7
			}, this),
			activeTab === "home" && /* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "max-w-3xl space-y-3",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-400",
								children: /* @__PURE__ */ _jsxDEV("span", { children: "МОНГОЛ ОРНЫ ЦАГ АГААРЫН МЭДЭЭЛЭЛ" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 270,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 269,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h1", {
								className: "text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight",
								children: "Таны аймагт зуд ойрхон байна уу?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 273,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-slate-300 text-sm sm:text-base leading-relaxed",
								children: "Аймгаа газрын зургаас сонгоод, цаг агаарын шинэчилсэн мэдээлэл, малын тоо, бэлчээрийн даац болон сэрэмжлүүлгийг харна уу."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 277,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 268,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "w-full",
						children: /* @__PURE__ */ _jsxDEV(MongoliaMap, {
							selectedAimag,
							onSelectAimag: (aimag) => handleSelectAimagAndOpen(aimag),
							mode: mapMode,
							onModeChange: (m) => setMapMode(m),
							onRefresh: handleRefresh,
							isRefreshing
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 284,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 283,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between mb-4",
							children: /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-lg font-bold text-white flex items-center gap-2",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: "Системийн үндсэн хэсгүүд" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 299,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-normal",
									children: "сонгож орох"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 300,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 298,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-slate-400",
								children: "Нэг хуудсанд шахагдахгүйгээр өөрийн сонирхсон хэсэг рүү дарж дэлгэрэнгүй танилцаарай."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 304,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 297,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 296,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									onClick: () => navigateTo("statistics"),
									className: "p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-900/90 transition cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition",
											children: /* @__PURE__ */ _jsxDEV(BarChart3, { className: "w-5 h-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 318,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 317,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-white group-hover:text-blue-400 transition",
											children: "Статистик & Хяналт"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 320,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-slate-400 leading-relaxed mt-1",
											children: "64.7 сая малын бүтэц, бэлчээрийн даацын дундаж хэтрэлт, бүс нутгийн харьцуулсан график үзүүлэлтүүд."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 323,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 316,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 text-xs text-blue-400 font-semibold",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Статистик харах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 328,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 329,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 327,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 312,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									onClick: () => navigateTo("aimags"),
									className: "p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:bg-slate-900/90 transition cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition",
											children: /* @__PURE__ */ _jsxDEV(MapPin, { className: "w-5 h-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 340,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 339,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-white group-hover:text-emerald-400 transition",
											children: "21 Аймаг & Нийслэл"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 342,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-slate-400 leading-relaxed mt-1",
											children: "Бүх 22 захиргааны нэгжийн зудын эрсдэл, цасны зузаан, малын тооны жагсаалт, шүүлтүүртэй лавлах."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 345,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 338,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 text-xs text-emerald-400 font-semibold",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Аймгуудыг үзэх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 350,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 351,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 349,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 334,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									onClick: () => navigateTo("advisory"),
									className: "p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-900/90 transition cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition",
											children: /* @__PURE__ */ _jsxDEV(Calculator, { className: "w-5 h-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 362,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 361,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-white group-hover:text-amber-400 transition",
											children: "Малчны зөвлөмж & Тооцоолуур"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 364,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-slate-400 leading-relaxed mt-1",
											children: "Малынхаа тоогоор боодол өвс, хүчит тэжээл бодож гаргах тооцоолуур, зудын 5 төрлийн тактик."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 367,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 360,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 text-xs text-amber-400 font-semibold",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Тооцоолуур ашиглах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 372,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 373,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 371,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 356,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									onClick: () => navigateTo("sources"),
									className: "p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/60 hover:bg-slate-900/90 transition cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-105 transition",
											children: /* @__PURE__ */ _jsxDEV(Database, { className: "w-5 h-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 384,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 383,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-white group-hover:text-purple-400 transition",
											children: "Эх сурвалж & Мэдээлэл"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 386,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-slate-400 leading-relaxed mt-1",
											children: "ЦУОШГ, ҮСХ, ОБЕГ болон Open-Meteo цаг агаарын нээлттэй өгөгдлийн арга зүй, албан ёсны эх сурвалжууд."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 389,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 382,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5 text-xs text-purple-400 font-semibold",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Эх сурвалж харах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 394,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 395,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 393,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 310,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 295,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 266,
				columnNumber: 9
			}, this),
			activeTab === "statistics" && /* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 animate-in fade-in",
				children: /* @__PURE__ */ _jsxDEV(StatisticsOverview, {
					onSelectAimag: (aimag) => handleSelectAimagAndOpen(aimag),
					onBackToMap: () => navigateTo("home")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 406,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 405,
				columnNumber: 9
			}, this),
			activeTab === "aimags" && /* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 animate-in fade-in",
				children: /* @__PURE__ */ _jsxDEV(AimagsDirectory, {
					onSelectAimag: (aimag) => handleSelectAimagAndOpen(aimag),
					onBackToMap: () => navigateTo("home")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 416,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 415,
				columnNumber: 9
			}, this),
			activeTab === "advisory" && /* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 animate-in fade-in",
				children: /* @__PURE__ */ _jsxDEV(HerderAdvisorySection, { onBackToMap: () => navigateTo("home") }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 426,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 425,
				columnNumber: 9
			}, this),
			activeTab === "sources" && /* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in",
				children: [
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => navigateTo("home"),
						className: "text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 transition",
						children: /* @__PURE__ */ _jsxDEV("span", { children: "← Газрын зураг руу буцах" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 437,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 433,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "max-w-3xl space-y-2",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-bold uppercase tracking-wider text-blue-400",
								children: "Мэдээллийн ил тод байдал"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 441,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "text-3xl font-black text-white",
								children: "Албан ёсны хамтын ажиллагаа ба эх сурвалж"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 442,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-slate-300 leading-relaxed",
								children: "Dzud Watch систем нь Монгол Улсын Засгийн газар, цаг уурын байгууллага болон олон улсын нээлттэй өгөгдлийн стандарт загваруудыг нэгтгэн ажилладаг."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 443,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 440,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-5",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20",
										children: /* @__PURE__ */ _jsxDEV(Database, { className: "w-5 h-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 452,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 451,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold text-white text-base",
										children: "Үндэсний Статистикийн Хороо (1212.mn)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 455,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-slate-400",
										children: "Мал тооллогын улсын албан ёсны өгөгдөл"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 456,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 454,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 450,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: "21 аймаг, нийслэлийн нийт малын тоо толгой, адуу, үхэр, тэмээ, хонь, ямааны бүтэц, малын нягтрал болон өнгөрсөн оны өсөлт бууралтын тоон үзүүлэлтүүд."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 459,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 449,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
										children: /* @__PURE__ */ _jsxDEV(CloudSnow, { className: "w-5 h-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 467,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 466,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold text-white text-base",
										children: "ЦУОШГ & УЦУОСМХ"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 470,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-slate-400",
										children: "Зудын эрсдэлийн үнэлгээ ба бэлчээрийн даац"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 471,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 469,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 465,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: "Ус цаг уур, орчны судалгаа мэдээллийн хүрээлэнгээс гаргадаг бэлчээрийн даацын ачаалал, зудын эрсдэлийн зураглал, цасны дундаж зузаан."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 474,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 464,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20",
										children: /* @__PURE__ */ _jsxDEV(ShieldAlert, { className: "w-5 h-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 482,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 481,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold text-white text-base",
										children: "Онцгой Байдлын Ерөнхий Газар (ОБЕГ)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 485,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-slate-400",
										children: "Шуурхай сэрэмжлүүлэг & Гамшгийн удирдлага"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 486,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 484,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 480,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: "Цасан болон хүйтний зудын нөхцөл байдалд авч хэрэгжүүлэх зааварчилгаа, зам давааны хаалт, 105 дугаарын шуурхай тусламж."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 489,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 479,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
										children: /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-5 h-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 497,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 496,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold text-white text-base",
										children: "Open-Meteo Global Weather API"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 500,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-slate-400",
										children: "Бодит цагийн нарийвчилсан прогноз"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 501,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 499,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 495,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: "Дэлхийн цаг уурын тоон загварт суурилсан 21 аймгийн төвийн солбицол дээрх бодит температур, мэдрэгдэх хүйтэн, салхи, шинээр орох цасны өгөгдөл."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 504,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 494,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 448,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 432,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("footer", {
				className: "py-8 border-t border-slate-900 bg-black text-slate-400 text-xs mt-auto",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _jsxDEV(Snowflake, { className: "w-4 h-4 text-blue-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 516,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "font-bold text-white",
								children: "Dzud Watch"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 517,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: "— Монгол орны зудын эрсдэл, цаг агаар, бэлчээрийн систем" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 518,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 515,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setIsGithubModalOpen(true),
								className: "text-slate-300 hover:text-white flex items-center gap-1.5 transition",
								children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 526,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub-д байршуулах" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 527,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 522,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: "•" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 529,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-slate-400",
								children: "© 2026 Dzud Watch Mongolia"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 530,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 521,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 514,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 513,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(AimagDetailDrawer, {
				aimag: selectedAimag,
				onClose: () => setSelectedAimag(null)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 536,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(GithubDeployModal, {
				isOpen: isGithubModalOpen,
				onClose: () => setIsGithubModalOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 542,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,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Q0Usd0JBQUMsTUFBRDtVQUFJLFdBQVU7b0JBQWlDO1NBQWlDOzs7O21CQUNoRix3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBNkI7U0FBc0M7Ozs7aUJBQy9FOzs7O2lCQUNGOzs7OztrQkFDTCx3QkFBQyxLQUFEO1NBQUcsV0FBVTttQkFBeUM7UUFFbkQ7Ozs7Z0JBQ0E7Ozs7OztNQUNGOzs7Ozs7SUFDRDs7Ozs7O0dBSVIsd0JBQUMsVUFBRDtJQUFRLFdBQVU7Y0FDaEIsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmO09BQ0Usd0JBQUMsV0FBRCxFQUFXLFdBQVUsd0JBQXlCOzs7OztPQUM5Qyx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBdUI7T0FBZ0I7Ozs7O09BQ3ZELHdCQUFDLFFBQUQsWUFBTSwyREFBOEQ7Ozs7O01BQ2pFOzs7OztlQUVMLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmO09BQ0Usd0JBQUMsVUFBRDtRQUNFLGVBQWUscUJBQXFCLElBQUk7UUFDeEMsV0FBVTtrQkFGWixDQUlFLHdCQUFDLFFBQUQsRUFBUSxXQUFVLFVBQVc7Ozs7a0JBQzdCLHdCQUFDLFFBQUQsWUFBTSxzQkFBeUI7Ozs7Z0JBQ3pCOzs7Ozs7T0FDUix3QkFBQyxRQUFELFlBQU0sSUFBTzs7Ozs7T0FDYix3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBaUI7T0FBZ0M7Ozs7O01BQzlEOzs7OzthQUNGOzs7Ozs7R0FDQzs7Ozs7R0FHUix3QkFBQyxtQkFBRDtJQUNFLE9BQU87SUFDUCxlQUFlLGlCQUFpQixJQUFJO0dBQ3JDOzs7OztHQUdELHdCQUFDLG1CQUFEO0lBQ0UsUUFBUTtJQUNSLGVBQWUscUJBQXFCLEtBQUs7R0FDMUM7Ozs7O0VBQ0U7Ozs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb25nb2xpYU1hcCB9IGZyb20gJy4vY29tcG9uZW50cy9Nb25nb2xpYU1hcCc7XG5pbXBvcnQgeyBBaW1hZ0RldGFpbERyYXdlciB9IGZyb20gJy4vY29tcG9uZW50cy9BaW1hZ0RldGFpbERyYXdlcic7XG5pbXBvcnQgeyBTdGF0aXN0aWNzT3ZlcnZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RhdGlzdGljc092ZXJ2aWV3JztcbmltcG9ydCB7IEFpbWFnc0RpcmVjdG9yeSB9IGZyb20gJy4vY29tcG9uZW50cy9BaW1hZ3NEaXJlY3RvcnknO1xuaW1wb3J0IHsgSGVyZGVyQWR2aXNvcnlTZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlcmRlckFkdmlzb3J5U2VjdGlvbic7XG5pbXBvcnQgeyBHaXRodWJEZXBsb3lNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9HaXRodWJEZXBsb3lNb2RhbCc7XG5pbXBvcnQgeyBBSU1BR1NfREFUQSwgTkFUSU9OQUxfVE9UQUxTIH0gZnJvbSAnLi9kYXRhL2FpbWFnRGF0YSc7XG5pbXBvcnQgeyBBaW1hZ0luZm8sIE1hcFZpZXdNb2RlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBBbGVydFRyaWFuZ2xlLFxuICBBcnJvd1JpZ2h0LFxuICBCYXJDaGFydDMsXG4gIEJvb2tPcGVuLFxuICBDYWxjdWxhdG9yLFxuICBDbG91ZFNub3csXG4gIERhdGFiYXNlLFxuICBFeHRlcm5hbExpbmssXG4gIEZsYW1lLFxuICBHaXRodWIsXG4gIEluZm8sXG4gIE1hcFBpbixcbiAgTWVudSxcbiAgUGhvbmVDYWxsLFxuICBSb3RhdGVDY3csXG4gIFNoaWVsZEFsZXJ0LFxuICBTbm93Zmxha2UsXG4gIFRyZW5kaW5nRG93bixcbiAgV2luZCxcbiAgWCxcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxudHlwZSBBY3RpdmVUYWIgPSAnaG9tZScgfCAnc3RhdGlzdGljcycgfCAnYWltYWdzJyB8ICdhZHZpc29yeScgfCAnc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPEFjdGl2ZVRhYj4oJ2hvbWUnKTtcbiAgY29uc3QgW3NlbGVjdGVkQWltYWcsIHNldFNlbGVjdGVkQWltYWddID0gdXNlU3RhdGU8QWltYWdJbmZvIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttYXBNb2RlLCBzZXRNYXBNb2RlXSA9IHVzZVN0YXRlPE1hcFZpZXdNb2RlPignZHp1ZFJpc2snKTtcbiAgY29uc3QgW2lzUmVmcmVzaGluZywgc2V0SXNSZWZyZXNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzR2l0aHViTW9kYWxPcGVuLCBzZXRJc0dpdGh1Yk1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb2JpbGVNZW51T3Blbiwgc2V0TW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2ggPSAoKSA9PiB7XG4gICAgc2V0SXNSZWZyZXNoaW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNSZWZyZXNoaW5nKGZhbHNlKTtcbiAgICB9LCA4MDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFpbWFnQW5kT3BlbiA9IChhaW1hZzogQWltYWdJbmZvKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBaW1hZyhhaW1hZyk7XG4gIH07XG5cbiAgY29uc3QgbmF2aWdhdGVUbyA9ICh0YWI6IEFjdGl2ZVRhYikgPT4ge1xuICAgIHNldEFjdGl2ZVRhYih0YWIpO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtOTUwIHRleHQtc2xhdGUtMTAwIGZsZXggZmxleC1jb2wgZm9udC1zYW5zIHNlbGVjdGlvbjpiZy1ibHVlLTUwMCBzZWxlY3Rpb246dGV4dC13aGl0ZVwiPlxuICAgICAgey8qIFRPUCBVUkdFTlQgVElDS0VSIEJBUiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC05NTAgdmlhLXNsYXRlLTkwMCB0by1hbWJlci05NTAgYm9yZGVyLWIgYm9yZGVyLXJlZC05MDAvNDAgdGV4dC1bMTFweF0gc206dGV4dC14cyBweS0xLjUgcHgtNCB0ZXh0LWNlbnRlciB0ZXh0LXNsYXRlLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGgtMiB3LTIgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmcgYWJzb2x1dGUgaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctcmVkLTQwMCBvcGFjaXR5LTc1XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgaC0yIHctMiBiZy1yZWQtNTAwXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8c3Ryb25nPtCo0YPRg9GA0YXQsNC5INC80Y3QtNGN0Y06PC9zdHJvbmc+INCh0q/RhdCx0LDQsNGC0LDRgCwg0KXRjdC90YLQuNC5LCDQl9Cw0LLRhdCw0L0sINCj0LLRgSDQsNC50LzQs9GD0YPQtNCw0LQg0YXSr9C50YLQvdC40Lkg0LHQsCDRgtOp0LzTqdGAINC30YPQtCDQvdKv0q/RgNC70Y3QtiDQvtC90YbQs9C+0Lkg0LTRjdCz0LvRjdC80LQg0YjQuNC70LbQuNCyLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWtoYmFhdGFyID0gQUlNQUdTX0RBVEEuZmluZCgoYSkgPT4gYS5pZCA9PT0gJ3N1a2hiYWF0YXInKTtcbiAgICAgICAgICAgIGlmIChzdWtoYmFhdGFyKSBzZXRTZWxlY3RlZEFpbWFnKHN1a2hiYWF0YXIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRleHQtYW1iZXItMzAwIGhvdmVyOnRleHQtd2hpdGUgZm9udC1tZWRpdW0gbWwtMVwiXG4gICAgICAgID5cbiAgICAgICAgICDQnNGN0LTRjdGN0LvRjdC7INGF0LDRgNCw0YVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1BSU4gTkFWQkFSIG1hdGNoaW5nIFNjcmVlbnNob3QgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTQwIGJnLXNsYXRlLTk1MC85MCBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBoLTE2IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVG8oJ2hvbWUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjUgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQteGwgdHJhY2tpbmctdGlnaHQgZ3JvdXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xLjUgcm91bmRlZC14bCBiZy1ibHVlLTUwMC8xMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzIwIGdyb3VwLWhvdmVyOmJnLWJsdWUtNTAwLzIwIHRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgPFNub3dmbGFrZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYmx1ZS00MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5EenVkIFdhdGNoPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgTmF2aWdhdGlvbiBUYWJzICovfVxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHNtOmdhcC0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvKCdob21lJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0xLjUgcm91bmRlZC14bCB0cmFuc2l0aW9uICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnaG9tZSdcbiAgICAgICAgICAgICAgICAgID8gJ2JnLWJsdWUtNjAwLzIwIHRleHQtYmx1ZS00MDAgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgIDogJ2hvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg0J3Sr9Kv0YAgKNCT0LDQt9GA0YvQvSDQt9GD0YDQsNCzKVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGVUbygnc3RhdGlzdGljcycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMS41IHJvdW5kZWQteGwgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnc3RhdGlzdGljcydcbiAgICAgICAgICAgICAgICAgID8gJ2JnLWJsdWUtNjAwLzIwIHRleHQtYmx1ZS00MDAgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgIDogJ2hvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtODAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0MyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPtCh0YLQsNGC0LjRgdGC0LjQujwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVG8oJ2FpbWFncycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMS41IHJvdW5kZWQteGwgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnYWltYWdzJ1xuICAgICAgICAgICAgICAgICAgPyAnYmctYmx1ZS02MDAvMjAgdGV4dC1ibHVlLTQwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwJ1xuICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+0JDQudC80LPRg9GD0LQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvKCdhZHZpc29yeScpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMS41IHJvdW5kZWQteGwgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnYWR2aXNvcnknXG4gICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci0zMDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAnXG4gICAgICAgICAgICAgICAgICA6ICdob3Zlcjp0ZXh0LWFtYmVyLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2hpZWxkQWxlcnQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7QnNCw0LvRh9C90Ysg0LfTqdCy0LvTqdC80LYgJiDQotC+0L7RhtC+0L7Qu9GD0YPRgDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVG8oJ3NvdXJjZXMnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTEuNSByb3VuZGVkLXhsIHRyYW5zaXRpb24gJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdzb3VyY2VzJ1xuICAgICAgICAgICAgICAgICAgPyAnYmctYmx1ZS02MDAvMjAgdGV4dC1ibHVlLTQwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwJ1xuICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQrdGFINGB0YPRgNCy0LDQu9C2XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgIHsvKiBSaWdodCBBY3Rpb24gQnV0dG9ucyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICB7LyogRGVwbG95IHRvIEdpdEh1YiBidXR0b24gKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzR2l0aHViTW9kYWxPcGVuKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0yMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2l0SHViINGA0YPRgyDQvtGA0YPRg9C70LDRhSDQt9Cw0LDQstCw0YAgJiAuWklQINGC0LDRgtCw0YVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtc2xhdGUtMzAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+R2l0SHViINGA0YPRgyDQsdCw0LnRgNGI0YPRg9C70LDRhTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7LyogRW1lcmdlbmN5IEhvdGxpbmUgKi99XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwidGVsOjEwNVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMy41IHB5LTEuNSB0ZXh0LXhzIGZvbnQtYm9sZCByb3VuZGVkLXhsIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctcmVkLTYwMC8zMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBob25lQ2FsbCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPjEwNTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBCdXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oIW1vYmlsZU1lbnVPcGVuKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBwLTIgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge21vYmlsZU1lbnVPcGVuID8gPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+IDogPE1lbnUgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9iaWxlIERyb3Bkb3duICovfVxuICAgICAgICB7bW9iaWxlTWVudU9wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHAtNCBiZy1zbGF0ZS05MDAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBzcGFjZS15LTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnaG9tZScpO1xuICAgICAgICAgICAgICAgIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTMgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXNsYXRlLTgwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINCd0q/Sr9GAICjQk9Cw0LfRgNGL0L0g0LfRg9GA0LDQsylcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnc3RhdGlzdGljcycpO1xuICAgICAgICAgICAgICAgIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTMgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQodGC0LDRgtC40YHRgtC40LogJiDQpdGP0L3QsNC70YJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUbygnYWltYWdzJyk7XG4gICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHB5LTIgcHgtMyByb3VuZGVkLWxnIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDIxINCQ0LnQvNCw0LMgJiDQndC40LnRgdC70Y3Qu1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKCdhZHZpc29yeScpO1xuICAgICAgICAgICAgICAgIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTMgcm91bmRlZC1sZyB0ZXh0LWFtYmVyLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQnNCw0LvRh9C90Ysg0LfTqdCy0LvTqdC80LYgJiDQotC+0L7RhtC+0L7Qu9GD0YPRgFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvKCdzb3VyY2VzJyk7XG4gICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHB5LTIgcHgtMyByb3VuZGVkLWxnIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINCt0YUg0YHRg9GA0LLQsNC70LYgJiDQnNGN0LTRjdGN0LvRjdC7XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgc2V0SXNHaXRodWJNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcHktMiByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQteHMgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWIg0YDRg9GDINCx0LDQudGA0YjRg9GD0LvQsNGFICjQl9Cw0LDQstCw0YAgJiBaSVApPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwidGVsOjEwNVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHB5LTIgcm91bmRlZC14bCBiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBob25lQ2FsbCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7QntCR0JXQkyDQqNGD0YPRgNGF0LDQuTogMTA1PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogVklFVyAxOiBIT01FIFBBR0UgKEZPQ1VTRUQgTUFQICsgQ0xFQU4gUE9SVEFMIE5BVklHQVRJT04gQ0FSRFMpICovfVxuICAgICAge2FjdGl2ZVRhYiA9PT0gJ2hvbWUnICYmIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIG1heC13LTd4bCBteC1hdXRvIHctZnVsbCBweC00IHNtOnB4LTYgbGc6cHgtOCBweS02IHNwYWNlLXktOCBhbmltYXRlLWluIGZhZGUtaW5cIj5cbiAgICAgICAgICB7LyogSGVybyB0ZXh0IHN0cmljdGx5IG1hdGNoaW5nIFNjcmVlbnNob3QgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsxMXB4XSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtYmx1ZS00MDBcIj5cbiAgICAgICAgICAgICAgPHNwYW4+0JzQntCd0JPQntCbINCe0KDQndCrINCm0JDQkyDQkNCT0JDQkNCg0KvQnSDQnNCt0JTQrdCt0JvQrdCbPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJsYWNrIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHQgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICDQotCw0L3RiyDQsNC50LzQsNCz0YIg0LfRg9C0INC+0LnRgNGF0L7QvSDQsdCw0LnQvdCwINGD0YM/XG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAg0JDQudC80LPQsNCwINCz0LDQt9GA0YvQvSDQt9GD0YDQs9Cw0LDRgSDRgdC+0L3Qs9C+0L7QtCwg0YbQsNCzINCw0LPQsNCw0YDRi9C9INGI0LjQvdGN0YfQuNC70YHRjdC9INC80Y3QtNGN0Y3Qu9GN0LssINC80LDQu9GL0L0g0YLQvtC+LCDQsdGN0LvRh9GN0Y3RgNC40LnQvSDQtNCw0LDRhiDQsdC+0LvQvtC9INGB0Y3RgNGN0LzQttC70q/Sr9C70LPQuNC50LMg0YXQsNGA0L3QsCDRg9GDLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1BSU4gSU5URVJBQ1RJVkUgTUFQIENPTlRBSU5FUiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPE1vbmdvbGlhTWFwXG4gICAgICAgICAgICAgIHNlbGVjdGVkQWltYWc9e3NlbGVjdGVkQWltYWd9XG4gICAgICAgICAgICAgIG9uU2VsZWN0QWltYWc9eyhhaW1hZykgPT4gaGFuZGxlU2VsZWN0QWltYWdBbmRPcGVuKGFpbWFnKX1cbiAgICAgICAgICAgICAgbW9kZT17bWFwTW9kZX1cbiAgICAgICAgICAgICAgb25Nb2RlQ2hhbmdlPXsobSkgPT4gc2V0TWFwTW9kZShtKX1cbiAgICAgICAgICAgICAgb25SZWZyZXNoPXtoYW5kbGVSZWZyZXNofVxuICAgICAgICAgICAgICBpc1JlZnJlc2hpbmc9e2lzUmVmcmVzaGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ0xFQU4gSU5URVJBQ1RJVkUgTkFWSUdBVElPTiBQT1JUQUxTIChXSEVSRSBUTyBHTyBORVhUKSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+0KHQuNGB0YLQtdC80LjQudC9INKv0L3QtNGB0Y3QvSDRhdGN0YHQs9Kv0q/QtDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHB4LTIgcHktMC41IHJvdW5kZWQtbWQgYmctc2xhdGUtODAwIHRleHQtc2xhdGUtNDAwIGZvbnQtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgINGB0L7QvdCz0L7QtiDQvtGA0L7RhVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgICAg0J3RjdCzINGF0YPRg9C00YHQsNC90LQg0YjQsNGF0LDQs9C00LDRhdCz0q/QudCz0Y3RjdGAINOp06nRgNC40LnQvSDRgdC+0L3QuNGA0YXRgdC+0L0g0YXRjdGB0Y3QsyDRgNKv0q8g0LTQsNGA0LYg0LTRjdC70LPRjdGA0Y3QvdCz0q/QuSDRgtCw0L3QuNC70YbQsNCw0YDQsNC5LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICAgIHsvKiBDYXJkIDE6IFN0YXRpc3RpY3MgKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvKCdzdGF0aXN0aWNzJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAvNjAgaG92ZXI6Ymctc2xhdGUtOTAwLzkwIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgZ3JvdXAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS00IHNoYWRvdy14bFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ibHVlLTUwMC8xMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzIwIHRleHQtYmx1ZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItMyBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQzIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOnRleHQtYmx1ZS00MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICDQodGC0LDRgtC40YHRgtC40LogJiDQpdGP0L3QsNC70YJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGxlYWRpbmctcmVsYXhlZCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDY0Ljcg0YHQsNGPINC80LDQu9GL0L0g0LHSr9GC0Y3Rhiwg0LHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YbRi9C9INC00YPQvdC00LDQtiDRhdGN0YLRgNGN0LvRgiwg0LHSr9GBINC90YPRgtCz0LjQudC9INGF0LDRgNGM0YbRg9GD0LvRgdCw0L0g0LPRgNCw0YTQuNC6INKv0LfSr9Kv0LvRjdC70YLSr9Kv0LQuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgdGV4dC1ibHVlLTQwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7QodGC0LDRgtC40YHRgtC40Log0YXQsNGA0LDRhTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIENhcmQgMjogMjEgQWltYWdzIERpcmVjdG9yeSAqL31cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVG8oJ2FpbWFncycpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgaG92ZXI6Ym9yZGVyLWVtZXJhbGQtNTAwLzYwIGhvdmVyOmJnLXNsYXRlLTkwMC85MCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGdyb3VwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktNCBzaGFkb3cteGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgYmctZW1lcmFsZC01MDAvMTAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTMgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZSBncm91cC1ob3Zlcjp0ZXh0LWVtZXJhbGQtNDAwIHRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgMjEg0JDQudC80LDQsyAmINCd0LjQudGB0LvRjdC7XG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBsZWFkaW5nLXJlbGF4ZWQgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICDQkdKv0YUgMjIg0LfQsNGF0LjRgNCz0LDQsNC90Ysg0L3RjdCz0LbQuNC50L0g0LfRg9C00YvQvSDRjdGA0YHQtNGN0LssINGG0LDRgdC90Ysg0LfRg9C30LDQsNC9LCDQvNCw0LvRi9C9INGC0L7QvtC90Ysg0LbQsNCz0YHQsNCw0LvRgiwg0YjSr9Kv0LvRgtKv0q/RgNGC0Y3QuSDQu9Cw0LLQu9Cw0YUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgdGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7QkNC50LzQs9GD0YPQtNGL0LMg0q/Qt9GN0YU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTQgaC00IGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBDYXJkIDM6IEhlcmRlciBBZHZpc29yeSAmIENhbGN1bGF0b3IgKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvKCdhZHZpc29yeScpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgaG92ZXI6Ym9yZGVyLWFtYmVyLTUwMC82MCBob3ZlcjpiZy1zbGF0ZS05MDAvOTAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciBncm91cCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTQgc2hhZG93LXhsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJnLWFtYmVyLTUwMC8xMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOnRleHQtYW1iZXItNDAwIHRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAg0JzQsNC70YfQvdGLINC306nQstC706nQvNC2ICYg0KLQvtC+0YbQvtC+0LvRg9GD0YBcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGxlYWRpbmctcmVsYXhlZCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgINCc0LDQu9GL0L3RhdCw0LAg0YLQvtC+0LPQvtC+0YAg0LHQvtC+0LTQvtC7INOp0LLRgSwg0YXSr9GH0LjRgiDRgtGN0LbRjdGN0Lsg0LHQvtC00L7QtiDQs9Cw0YDQs9Cw0YUg0YLQvtC+0YbQvtC+0LvRg9GD0YAsINC30YPQtNGL0L0gNSDRgtOp0YDQu9C40LnQvSDRgtCw0LrRgtC40LouXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgdGV4dC1hbWJlci00MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+0KLQvtC+0YbQvtC+0LvRg9GD0YAg0LDRiNC40LPQu9Cw0YU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTQgaC00IGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBDYXJkIDQ6IFNvdXJjZXMgJiBPcGVuIERhdGEgKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvKCdzb3VyY2VzJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBob3Zlcjpib3JkZXItcHVycGxlLTUwMC82MCBob3ZlcjpiZy1zbGF0ZS05MDAvOTAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciBncm91cCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTQgc2hhZG93LXhsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJnLXB1cnBsZS01MDAvMTAgYm9yZGVyIGJvcmRlci1wdXJwbGUtNTAwLzIwIHRleHQtcHVycGxlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhYmFzZSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZSBncm91cC1ob3Zlcjp0ZXh0LXB1cnBsZS00MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICDQrdGFINGB0YPRgNCy0LDQu9C2ICYg0JzRjdC00Y3RjdC70Y3Qu1xuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgbGVhZGluZy1yZWxheGVkIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAg0KbQo9Ce0KjQkywg0q7QodClLCDQntCR0JXQkyDQsdC+0LvQvtC9IE9wZW4tTWV0ZW8g0YbQsNCzINCw0LPQsNCw0YDRi9C9INC90Y3RjdC70YLRgtGN0Lkg06nQs9Op0LPQtNC70LjQudC9INCw0YDQs9CwINC30q/QuSwg0LDQu9Cx0LDQvSDRkdGB0L3RiyDRjdGFINGB0YPRgNCy0LDQu9C20YPRg9C0LlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXhzIHRleHQtcHVycGxlLTQwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7QrdGFINGB0YPRgNCy0LDQu9C2INGF0LDRgNCw0YU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTQgaC00IGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBWSUVXIDI6IFNUQVRJU1RJQ1MgREVESUNBVEVEIFZJRVcgKi99XG4gICAgICB7YWN0aXZlVGFiID09PSAnc3RhdGlzdGljcycgJiYgKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgYW5pbWF0ZS1pbiBmYWRlLWluXCI+XG4gICAgICAgICAgPFN0YXRpc3RpY3NPdmVydmlld1xuICAgICAgICAgICAgb25TZWxlY3RBaW1hZz17KGFpbWFnKSA9PiBoYW5kbGVTZWxlY3RBaW1hZ0FuZE9wZW4oYWltYWcpfVxuICAgICAgICAgICAgb25CYWNrVG9NYXA9eygpID0+IG5hdmlnYXRlVG8oJ2hvbWUnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L21haW4+XG4gICAgICApfVxuXG4gICAgICB7LyogVklFVyAzOiAyMSBBSU1BR1MgRElSRUNUT1JZIFZJRVcgKi99XG4gICAgICB7YWN0aXZlVGFiID09PSAnYWltYWdzJyAmJiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBhbmltYXRlLWluIGZhZGUtaW5cIj5cbiAgICAgICAgICA8QWltYWdzRGlyZWN0b3J5XG4gICAgICAgICAgICBvblNlbGVjdEFpbWFnPXsoYWltYWcpID0+IGhhbmRsZVNlbGVjdEFpbWFnQW5kT3BlbihhaW1hZyl9XG4gICAgICAgICAgICBvbkJhY2tUb01hcD17KCkgPT4gbmF2aWdhdGVUbygnaG9tZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBWSUVXIDQ6IEhFUkRFUiBBRFZJU09SWSAmIEZFRUQgQ0FMQ1VMQVRPUiBWSUVXICovfVxuICAgICAge2FjdGl2ZVRhYiA9PT0gJ2Fkdmlzb3J5JyAmJiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBhbmltYXRlLWluIGZhZGUtaW5cIj5cbiAgICAgICAgICA8SGVyZGVyQWR2aXNvcnlTZWN0aW9uIG9uQmFja1RvTWFwPXsoKSA9PiBuYXZpZ2F0ZVRvKCdob21lJyl9IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBWSUVXIDU6IERBVEEgU09VUkNFUyBWSUVXICovfVxuICAgICAge2FjdGl2ZVRhYiA9PT0gJ3NvdXJjZXMnICYmIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHB5LTEwIHB4LTQgc206cHgtNiBsZzpweC04IG1heC13LTd4bCBteC1hdXRvIHctZnVsbCBzcGFjZS15LTggYW5pbWF0ZS1pbiBmYWRlLWluXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGVUbygnaG9tZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIGhvdmVyOnRleHQtYmx1ZS0zMDAgZm9udC1zZW1pYm9sZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj7ihpAg0JPQsNC30YDRi9C9INC30YPRgNCw0LMg0YDRg9GDINCx0YPRhtCw0YU8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWJsdWUtNDAwXCI+0JzRjdC00Y3RjdC70LvQuNC50L0g0LjQuyDRgtC+0LQg0LHQsNC50LTQsNC7PC9zcGFuPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZVwiPtCQ0LvQsdCw0L0g0ZHRgdC90Ysg0YXQsNC80YLRi9C9INCw0LbQuNC70LvQsNCz0LDQsCDQsdCwINGN0YUg0YHRg9GA0LLQsNC70LY8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtMzAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBEenVkIFdhdGNoINGB0LjRgdGC0LXQvCDQvdGMINCc0L7QvdCz0L7QuyDQo9C70YHRi9C9INCX0LDRgdCz0LjQudC9INCz0LDQt9Cw0YAsINGG0LDQsyDRg9GD0YDRi9C9INCx0LDQudCz0YPRg9C70LvQsNCz0LAg0LHQvtC70L7QvSDQvtC70L7QvSDRg9C70YHRi9C9INC90Y3RjdC70YLRgtGN0Lkg06nQs9Op0LPQtNC70LjQudC9INGB0YLQsNC90LTQsNGA0YIg0LfQsNCz0LLQsNGA0YPRg9C00YvQsyDQvdGN0LPRgtCz0Y3QvSDQsNC20LjQu9C70LDQtNCw0LMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC14bCBiZy1ibHVlLTUwMC8xMCB0ZXh0LWJsdWUtNDAwIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgIDxEYXRhYmFzZSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtYmFzZVwiPtKu0L3QtNGN0YHQvdC40Lkg0KHRgtCw0YLQuNGB0YLQuNC60LjQudC9INCl0L7RgNC+0L4gKDEyMTIubW4pPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDBcIj7QnNCw0Lsg0YLQvtC+0LvQu9C+0LPRi9C9INGD0LvRgdGL0L0g0LDQu9Cx0LDQvSDRkdGB0L3RiyDTqdCz06nQs9C006nQuzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAyMSDQsNC50LzQsNCzLCDQvdC40LnRgdC70Y3Qu9C40LnQvSDQvdC40LnRgiDQvNCw0LvRi9C9INGC0L7QviDRgtC+0LvQs9C+0LksINCw0LTRg9GDLCDSr9GF0Y3RgCwg0YLRjdC80Y3RjSwg0YXQvtC90YwsINGP0LzQsNCw0L3RiyDQsdKv0YLRjdGGLCDQvNCw0LvRi9C9INC90Y/Qs9GC0YDQsNC7INCx0L7Qu9C+0L0g06nQvdCz06nRgNGB06nQvSDQvtC90Ysg06nRgdOp0LvRgiDQsdGD0YPRgNCw0LvRgtGL0L0g0YLQvtC+0L0g0q/Qt9Kv0q/Qu9GN0LvRgtKv0q/QtC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC14bCBiZy1jeWFuLTUwMC8xMCB0ZXh0LWN5YW4tNDAwIGJvcmRlciBib3JkZXItY3lhbi01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgIDxDbG91ZFNub3cgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWJhc2VcIj7QptCj0J7QqNCTICYg0KPQptCj0J7QodCc0KU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMFwiPtCX0YPQtNGL0L0g0Y3RgNGB0LTRjdC70LjQudC9INKv0L3RjdC70LPRjdGNINCx0LAg0LHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAg0KPRgSDRhtCw0LMg0YPRg9GALCDQvtGA0YfQvdGLINGB0YPQtNCw0LvQs9Cw0LAg0LzRjdC00Y3RjdC70LvQuNC50L0g0YXSr9GA0Y3RjdC70Y3QvdCz0Y3RjdGBINCz0LDRgNCz0LDQtNCw0LMg0LHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YbRi9C9INCw0YfQsNCw0LvQsNC7LCDQt9GD0LTRi9C9INGN0YDRgdC00Y3Qu9C40LnQvSDQt9GD0YDQsNCz0LvQsNC7LCDRhtCw0YHQvdGLINC00YPQvdC00LDQtiDQt9GD0LfQsNCw0L0uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMi41IHJvdW5kZWQteGwgYmctcmVkLTUwMC8xMCB0ZXh0LXJlZC00MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICA8U2hpZWxkQWxlcnQgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWJhc2VcIj7QntC90YbQs9C+0Lkg0JHQsNC50LTQu9GL0L0g0JXRgNOp0L3RhdC40Lkg0JPQsNC30LDRgCAo0J7QkdCV0JMpPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDBcIj7QqNGD0YPRgNGF0LDQuSDRgdGN0YDRjdC80LbQu9Kv0q/Qu9GN0LMgJiDQk9Cw0LzRiNCz0LjQudC9INGD0LTQuNGA0LTQu9Cw0LPQsDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICDQptCw0YHQsNC9INCx0L7Qu9C+0L0g0YXSr9C50YLQvdC40Lkg0LfRg9C00YvQvSDQvdOp0YXRhtOp0Lsg0LHQsNC50LTQsNC70LQg0LDQstGHINGF0Y3RgNGN0LPQttKv0q/Qu9GN0YUg0LfQsNCw0LLQsNGA0YfQuNC70LPQsNCwLCDQt9Cw0Lwg0LTQsNCy0LDQsNC90Ysg0YXQsNCw0LvRgiwgMTA1INC00YPQs9Cw0LDRgNGL0L0g0YjRg9GD0YDRhdCw0Lkg0YLRg9GB0LvQsNC80LYuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMi41IHJvdW5kZWQteGwgYmctZW1lcmFsZC01MDAvMTAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1iYXNlXCI+T3Blbi1NZXRlbyBHbG9iYWwgV2VhdGhlciBBUEk8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMFwiPtCR0L7QtNC40YIg0YbQsNCz0LjQudC9INC90LDRgNC40LnQstGH0LjQu9GB0LDQvSDQv9GA0L7Qs9C90L7QtzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICDQlNGN0LvRhdC40LnQvSDRhtCw0LMg0YPRg9GA0YvQvSDRgtC+0L7QvSDQt9Cw0LPQstCw0YDRgiDRgdGD0YPRgNC40LvRgdCw0L0gMjEg0LDQudC80LPQuNC50L0g0YLTqdCy0LjQudC9INGB0L7Qu9Cx0LjRhtC+0Lsg0LTRjdGN0YDRhSDQsdC+0LTQuNGCINGC0LXQvNC/0LXRgNCw0YLRg9GALCDQvNGN0LTRgNGN0LPQtNGN0YUg0YXSr9C50YLRjdC9LCDRgdCw0LvRhdC4LCDRiNC40L3RjdGN0YAg0L7RgNC+0YUg0YbQsNGB0L3RiyDTqdCz06nQs9C006nQuy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBGT09URVIgKi99XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInB5LTggYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTkwMCBiZy1ibGFjayB0ZXh0LXNsYXRlLTQwMCB0ZXh0LXhzIG10LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8U25vd2ZsYWtlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ibHVlLTQwMFwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPkR6dWQgV2F0Y2g8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7igJQg0JzQvtC90LPQvtC7INC+0YDQvdGLINC30YPQtNGL0L0g0Y3RgNGB0LTRjdC7LCDRhtCw0LMg0LDQs9Cw0LDRgCwg0LHRjdC70YfRjdGN0YDQuNC50L0g0YHQuNGB0YLQtdC8PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0dpdGh1Yk1vZGFsT3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWIt0LQg0LHQsNC50YDRiNGD0YPQu9Cw0YU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuPuKAojwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+wqkgMjAyNiBEenVkIFdhdGNoIE1vbmdvbGlhPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICB7LyogU0xJREUtSU4gREVUQUlMIElOU1BFQ1RJT04gRFJBV0VSICovfVxuICAgICAgPEFpbWFnRGV0YWlsRHJhd2VyXG4gICAgICAgIGFpbWFnPXtzZWxlY3RlZEFpbWFnfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZEFpbWFnKG51bGwpfVxuICAgICAgLz5cblxuICAgICAgey8qIEdJVEhVQiBFWFBPUlQgJiBERVBMT1kgTU9EQUwgKi99XG4gICAgICA8R2l0aHViRGVwbG95TW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc0dpdGh1Yk1vZGFsT3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNHaXRodWJNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==