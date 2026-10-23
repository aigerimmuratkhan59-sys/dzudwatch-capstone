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

