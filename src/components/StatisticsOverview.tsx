const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import { AIMAGS_DATA, NATIONAL_TOTALS } from "/src/data/aimagData.ts";
import { AlertOctagon, ArrowUpDown, BarChart3, Eye, Search, Snowflake, Wind } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/components/StatisticsOverview.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export const StatisticsOverview = ({ onSelectAimag, onBackToMap }) => {
	const [filterLevel, setFilterLevel] = useState("all");
	const [sortField, setSortField] = useState("risk");
	const [searchQuery, setSearchQuery] = useState("");
	// Filtering
	const filtered = AIMAGS_DATA.filter((a) => {
		if (filterLevel !== "all" && a.dzudRisk.level !== filterLevel) return false;
		if (searchQuery && !a.nameMn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.centerMn.toLowerCase().includes(searchQuery.toLowerCase())) {
			return false;
		}
		return true;
	});
	// Sorting
	const sorted = [...filtered].sort((a, b) => {
		if (sortField === "risk") return b.dzudRisk.score - a.dzudRisk.score;
		if (sortField === "livestock") return b.livestock.total - a.livestock.total;
		if (sortField === "pasture") return b.pasture.overloadRatio - a.pasture.overloadRatio;
		if (sortField === "snow") return b.dzudRisk.snowDepthCm - a.dzudRisk.snowDepthCm;
		return 0;
	});
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "statistics",
		className: "py-12 border-t border-slate-800 bg-slate-900/60 text-slate-100",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10",
			children: [
				onBackToMap && /* @__PURE__ */ _jsxDEV("button", {
					onClick: onBackToMap,
					className: "text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 transition",
					children: /* @__PURE__ */ _jsxDEV("span", { children: "← Газрын зураг руу буцах" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3",
							children: [/* @__PURE__ */ _jsxDEV(BarChart3, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Үндэсний нэгдсэн статистик & Эрсдэлийн жагсаалт" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl sm:text-4xl font-black tracking-tight text-white",
							children: "Монгол орны мал сүрэг, бэлчээр ба зудын төлөв"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-slate-400 text-sm mt-1 max-w-2xl",
							children: "Үндэсний Статистикийн Хороо (ҮСХ) болон ЦУОШГ-ын бодит тоо баримтад суурилсан 21 аймаг, нийслэлийн харьцуулсан үнэлгээ."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-xs text-slate-400",
						children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "2024 оны 12 сар - 2025 оны бодит тооцоолол" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl relative overflow-hidden",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-slate-400",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold uppercase tracking-wider",
										children: "Нийт малын тоо"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-2xl",
										children: "🐎"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-3xl font-black text-white mt-2",
									children: [(NATIONAL_TOTALS.totalLivestock / 1e6).toFixed(1), " сая"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 mt-2 flex items-center justify-between",
									children: [
										/* @__PURE__ */ _jsxDEV("span", { children: "Хонь: 29.4M" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 98,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", { children: "Ямаа: 24.6M" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 99,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("span", { children: "Бод: 10.7M" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-amber-400 h-full rounded-full",
										style: { width: "85%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-950 border border-red-900/50 shadow-xl",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-red-300",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold uppercase tracking-wider",
										children: "Нэн их эрсдэлтэй аймаг"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV(AlertOctagon, { className: "w-5 h-5 text-red-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-3xl font-black text-red-400 mt-2",
									children: [NATIONAL_TOTALS.criticalAimagsCount, " аймаг"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 mt-2",
									children: "Сүхбаатар, Завхан, Говь-Алтай, Хэнтий зэрэг аймгуудад онцгой анхааруулга зарласан"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-red-500 h-full rounded-full",
										style: { width: "36%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-900/50 shadow-xl",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-amber-300",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold uppercase tracking-wider",
										children: "Бэлчээрийн дундаж даац"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV(Wind, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 126,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-3xl font-black text-amber-400 mt-2",
									children: [NATIONAL_TOTALS.averagePastureOverload, "x дахин"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 mt-2",
									children: "Нийт нутгийн 70 гаруй хувьд даац хэтэрсэн, ургацын гарц дутмаг"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-amber-500 h-full rounded-full",
										style: { width: "68%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-br from-sky-950/40 via-slate-900 to-slate-950 border border-sky-900/50 shadow-xl",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-sky-300",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold uppercase tracking-wider",
										children: "Цасан бүрхүүлийн эзлэхүүн"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV(Snowflake, { className: "w-5 h-5 text-sky-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-3xl font-black text-sky-300 mt-2",
									children: [NATIONAL_TOTALS.averageSnowCoverPercent, "%"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 147,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 mt-2",
									children: "Монгол орны нийт газар нутгийн 74% цасаар хучигдсан байна"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-sky-400 h-full rounded-full",
										style: { width: "74%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 sm:p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-xl font-bold text-white flex items-center gap-2",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: "Бүх аймгийн зуд, мал ба бэлчээрийн үзүүлэлт" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-normal",
									children: [sorted.length, " / 22"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-slate-400 mt-0.5",
								children: "Мөр бүр дээр дарж эсвэл 'Үзэх' товчийг дарж тухайн аймгийн цаг агаар, малчин зөвлөмжийг шууд харна уу."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center flex-wrap gap-2 text-xs",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "relative",
										children: [/* @__PURE__ */ _jsxDEV(Search, { className: "w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 178,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("input", {
											type: "text",
											placeholder: "Хайх...",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											className: "pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 w-36 sm:w-44"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 179,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 177,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setFilterLevel("all"),
										className: `px-3 py-1.5 rounded-xl font-medium transition ${filterLevel === "all" ? "bg-blue-600 text-white shadow-md" : "bg-slate-900 text-slate-300 hover:bg-slate-800"}`,
										children: [
											"Бүгд (",
											AIMAGS_DATA.length,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 189,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setFilterLevel("critical"),
										className: `px-3 py-1.5 rounded-xl font-medium transition ${filterLevel === "critical" ? "bg-red-600 text-white shadow-md" : "bg-slate-900 text-slate-300 hover:bg-slate-800"}`,
										children: [
											"Нэн их эрсдэлтэй (",
											NATIONAL_TOTALS.criticalAimagsCount,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setFilterLevel("high"),
										className: `px-3 py-1.5 rounded-xl font-medium transition ${filterLevel === "high" ? "bg-orange-600 text-white shadow-md" : "bg-slate-900 text-slate-300 hover:bg-slate-800"}`,
										children: [
											"Их эрсдэлтэй (",
											NATIONAL_TOTALS.highRiskAimagsCount,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 211,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setFilterLevel("low"),
										className: `px-3 py-1.5 rounded-xl font-medium transition ${filterLevel === "low" ? "bg-emerald-600 text-white shadow-md" : "bg-slate-900 text-slate-300 hover:bg-slate-800"}`,
										children: [
											"Бага эрсдэлтэй (",
											NATIONAL_TOTALS.lowRiskAimagsCount,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 222,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "px-4 sm:px-6 py-2.5 bg-slate-900/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs text-slate-400",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "font-semibold uppercase text-[10px] tracking-wider text-slate-400",
									children: "Эрэмбэлэх:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 237,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => setSortField("risk"),
									className: `px-2.5 py-1 rounded-lg transition flex items-center gap-1 ${sortField === "risk" ? "bg-slate-800 text-white font-bold" : "hover:text-slate-200"}`,
									children: [/* @__PURE__ */ _jsxDEV(ArrowUpDown, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 246,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Зудын эрсдэлээр" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 247,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => setSortField("livestock"),
									className: `px-2.5 py-1 rounded-lg transition flex items-center gap-1 ${sortField === "livestock" ? "bg-slate-800 text-white font-bold" : "hover:text-slate-200"}`,
									children: [/* @__PURE__ */ _jsxDEV(ArrowUpDown, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 255,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Малын тоогоор" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 256,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 249,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => setSortField("pasture"),
									className: `px-2.5 py-1 rounded-lg transition flex items-center gap-1 ${sortField === "pasture" ? "bg-slate-800 text-white font-bold" : "hover:text-slate-200"}`,
									children: [/* @__PURE__ */ _jsxDEV(ArrowUpDown, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 264,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Бэлчээрийн даацаар" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 265,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 258,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => setSortField("snow"),
									className: `px-2.5 py-1 rounded-lg transition flex items-center gap-1 ${sortField === "snow" ? "bg-slate-800 text-white font-bold" : "hover:text-slate-200"}`,
									children: [/* @__PURE__ */ _jsxDEV(ArrowUpDown, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 273,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Цасны зузаанаар" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 267,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 236,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ _jsxDEV("table", {
								className: "w-full text-left border-collapse text-xs",
								children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", {
									className: "border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px]",
									children: [
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "№"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 283,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "Аймгийн нэр / Төв"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 284,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "Зудын эрсдэл"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 285,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "Зудын төрөл"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 286,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "Цасны зузаан"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 287,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "Бэлчээрийн даац"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 288,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold",
											children: "Малын нийт тоо"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 289,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "py-3.5 px-4 font-semibold text-right",
											children: "Үйлдэл"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 290,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 282,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 281,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("tbody", {
									className: "divide-y divide-slate-800/60 font-medium",
									children: sorted.map((aimag, index) => /* @__PURE__ */ _jsxDEV("tr", {
										onClick: () => onSelectAimag(aimag),
										className: "hover:bg-slate-900/80 transition cursor-pointer group",
										children: [
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4 text-slate-400 font-mono",
												children: index + 1
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 300,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "font-bold text-white text-sm group-hover:text-blue-400 transition",
													children: aimag.nameMn
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 302,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "text-[11px] text-slate-400",
													children: [
														aimag.centerMn,
														" • ",
														aimag.region
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 305,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 301,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4",
												children: /* @__PURE__ */ _jsxDEV("span", {
													className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${aimag.dzudRisk.level === "critical" ? "bg-red-500/15 text-red-300 border-red-500/30" : aimag.dzudRisk.level === "high" ? "bg-orange-500/15 text-orange-300 border-orange-500/30" : aimag.dzudRisk.level === "moderate" ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,
													children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-current" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 319,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
														aimag.dzudRisk.levelLabel,
														" (",
														aimag.dzudRisk.score,
														")"
													] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 320,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 308,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 307,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4 text-slate-300",
												children: /* @__PURE__ */ _jsxDEV("span", {
													className: "px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px]",
													children: aimag.dzudRisk.primaryType
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 324,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 323,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "font-bold text-cyan-300",
													children: [aimag.dzudRisk.snowDepthCm, " см"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 329,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "text-[10px] text-slate-400",
													children: [aimag.dzudRisk.snowCoverPercent, "% бүрхүүл"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 330,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 328,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: `font-bold ${aimag.pasture.overloadRatio >= 3 ? "text-red-400" : aimag.pasture.overloadRatio >= 2 ? "text-orange-400" : "text-amber-400"}`,
													children: [aimag.pasture.overloadRatio, "x дахин"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 333,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "text-[10px] text-slate-400",
													children: aimag.pasture.statusLabel
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 344,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 332,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "font-bold text-amber-300",
													children: [(aimag.livestock.total / 1e6).toFixed(2), " сая"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 347,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "text-[10px] text-slate-400",
													children: [
														"Хонь: ",
														(aimag.livestock.sheep / 1e3).toFixed(0),
														"k • Ямаа: ",
														(aimag.livestock.goats / 1e3).toFixed(0),
														"k"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 350,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 346,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "py-3.5 px-4 text-right",
												children: /* @__PURE__ */ _jsxDEV("button", {
													onClick: (e) => {
														e.stopPropagation();
														onSelectAimag(aimag);
													},
													className: "px-3 py-1 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition font-medium inline-flex items-center gap-1.5",
													children: [/* @__PURE__ */ _jsxDEV(Eye, { className: "w-3.5 h-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 362,
														columnNumber: 25
													}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Үзэх" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 363,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 355,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 354,
												columnNumber: 21
											}, this)
										]
									}, aimag.id, true, {
										fileName: _jsxFileName,
										lineNumber: 295,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 280,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 279,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFFLE1BQzFDOzs7OztzQkFDTix3QkFBQyxPQUFEO2FBQUssV0FBVTt1QkFBZjtjQUE0QztlQUNsQyxNQUFNLFVBQVUsUUFBUSxJQUFJLENBQUUsUUFBUSxDQUFDO2NBQUU7ZUFBWSxNQUFNLFVBQVUsUUFBUSxJQUFJLENBQUUsUUFBUSxDQUFDO2NBQUU7YUFDbkc7Ozs7O29CQUNIOzs7Ozs7V0FDSix3QkFBQyxNQUFEO1lBQUksV0FBVTtzQkFDWix3QkFBQyxVQUFEO2FBQ0UsVUFBVSxNQUFNO2NBQ2QsRUFBRSxnQkFBZ0I7Y0FDbEIsY0FBYyxLQUFLO2FBQ3JCO2FBQ0EsV0FBVTt1QkFMWixDQU9FLHdCQUFDLEtBQUQsRUFBSyxXQUFVLGNBQWU7Ozs7dUJBQzlCLHdCQUFDLFFBQUQsWUFBTSxPQUFVOzs7O3FCQUNWOzs7Ozs7V0FDTjs7Ozs7VUFDRjtZQXRFRyxNQUFNOzs7O2dCQXNFVCxDQUNMO1FBQ0k7Ozs7Z0JBQ0Y7Ozs7OztNQUNKOzs7OztLQUNGOzs7Ozs7R0FDRjs7Ozs7O0NBQ0U7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiU3RhdGlzdGljc092ZXJ2aWV3LnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBSU1BR1NfREFUQSwgTkFUSU9OQUxfVE9UQUxTIH0gZnJvbSAnLi4vZGF0YS9haW1hZ0RhdGEnO1xuaW1wb3J0IHsgQWltYWdJbmZvLCBEenVkUmlza0xldmVsIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgQWxlcnRPY3RhZ29uLFxuICBBbGVydFRyaWFuZ2xlLFxuICBBcnJvd1VwRG93bixcbiAgQmFyQ2hhcnQzLFxuICBDaGVja0NpcmNsZSxcbiAgRXllLFxuICBGaWx0ZXIsXG4gIExheWVycyxcbiAgU2VhcmNoLFxuICBTbm93Zmxha2UsXG4gIFRyZW5kaW5nVXAsXG4gIFdpbmQsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzT3ZlcnZpZXdQcm9wcyB7XG4gIG9uU2VsZWN0QWltYWc6IChhaW1hZzogQWltYWdJbmZvKSA9PiB2b2lkO1xuICBvbkJhY2tUb01hcD86ICgpID0+IHZvaWQ7XG59XG5cbnR5cGUgU29ydEZpZWxkID0gJ3Jpc2snIHwgJ2xpdmVzdG9jaycgfCAncGFzdHVyZScgfCAnc25vdyc7XG5cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzT3ZlcnZpZXc6IFJlYWN0LkZDPFN0YXRpc3RpY3NPdmVydmlld1Byb3BzPiA9ICh7IG9uU2VsZWN0QWltYWcsIG9uQmFja1RvTWFwIH0pID0+IHtcbiAgY29uc3QgW2ZpbHRlckxldmVsLCBzZXRGaWx0ZXJMZXZlbF0gPSB1c2VTdGF0ZTxEenVkUmlza0xldmVsIHwgJ2FsbCc+KCdhbGwnKTtcbiAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IHVzZVN0YXRlPFNvcnRGaWVsZD4oJ3Jpc2snKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gRmlsdGVyaW5nXG4gIGNvbnN0IGZpbHRlcmVkID0gQUlNQUdTX0RBVEEuZmlsdGVyKChhKSA9PiB7XG4gICAgaWYgKGZpbHRlckxldmVsICE9PSAnYWxsJyAmJiBhLmR6dWRSaXNrLmxldmVsICE9PSBmaWx0ZXJMZXZlbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChcbiAgICAgIHNlYXJjaFF1ZXJ5ICYmXG4gICAgICAhYS5uYW1lTW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSAmJlxuICAgICAgIWEubmFtZUVuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgJiZcbiAgICAgICFhLmNlbnRlck1uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIC8vIFNvcnRpbmdcbiAgY29uc3Qgc29ydGVkID0gWy4uLmZpbHRlcmVkXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKHNvcnRGaWVsZCA9PT0gJ3Jpc2snKSByZXR1cm4gYi5kenVkUmlzay5zY29yZSAtIGEuZHp1ZFJpc2suc2NvcmU7XG4gICAgaWYgKHNvcnRGaWVsZCA9PT0gJ2xpdmVzdG9jaycpIHJldHVybiBiLmxpdmVzdG9jay50b3RhbCAtIGEubGl2ZXN0b2NrLnRvdGFsO1xuICAgIGlmIChzb3J0RmllbGQgPT09ICdwYXN0dXJlJykgcmV0dXJuIGIucGFzdHVyZS5vdmVybG9hZFJhdGlvIC0gYS5wYXN0dXJlLm92ZXJsb2FkUmF0aW87XG4gICAgaWYgKHNvcnRGaWVsZCA9PT0gJ3Nub3cnKSByZXR1cm4gYi5kenVkUmlzay5zbm93RGVwdGhDbSAtIGEuZHp1ZFJpc2suc25vd0RlcHRoQ207XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJzdGF0aXN0aWNzXCIgY2xhc3NOYW1lPVwicHktMTIgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAvNjAgdGV4dC1zbGF0ZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggc3BhY2UteS0xMFwiPlxuICAgICAgICB7b25CYWNrVG9NYXAgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQmFja1RvTWFwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIGhvdmVyOnRleHQtYmx1ZS0zMDAgZm9udC1zZW1pYm9sZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj7ihpAg0JPQsNC30YDRi9C9INC30YPRgNCw0LMg0YDRg9GDINCx0YPRhtCw0YU8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiBTZWN0aW9uIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS01MDAvMTAgdGV4dC1ibHVlLTQwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzIwIG1iLTNcIj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0MyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPtKu0L3QtNGN0YHQvdC40Lkg0L3RjdCz0LTRgdGN0L0g0YHRgtCw0YLQuNGB0YLQuNC6ICYg0K3RgNGB0LTRjdC70LjQudC9INC20LDQs9GB0LDQsNC70YI8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1ibGFjayB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgINCc0L7QvdCz0L7QuyDQvtGA0L3RiyDQvNCw0Lsg0YHSr9GA0Y3Qsywg0LHRjdC70YfRjdGN0YAg0LHQsCDQt9GD0LTRi9C9INGC06nQu9Op0LJcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCB0ZXh0LXNtIG10LTEgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgINKu0L3QtNGN0YHQvdC40Lkg0KHRgtCw0YLQuNGB0YLQuNC60LjQudC9INCl0L7RgNC+0L4gKNKu0KHQpSkg0LHQvtC70L7QvSDQptCj0J7QqNCTLdGL0L0g0LHQvtC00LjRgiDRgtC+0L4g0LHQsNGA0LjQvNGC0LDQtCDRgdGD0YPRgNC40LvRgdCw0L0gMjEg0LDQudC80LDQsywg0L3QuNC50YHQu9GN0LvQuNC50L0g0YXQsNGA0YzRhtGD0YPQu9GB0LDQvSDSr9C90Y3Qu9Cz0Y3RjS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0yLjUgaC0yLjUgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNTAwIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgPHNwYW4+MjAyNCDQvtC90YsgMTIg0YHQsNGAIC0gMjAyNSDQvtC90Ysg0LHQvtC00LjRgiDRgtC+0L7RhtC+0L7Qu9C+0Ls8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA0IE5BVElPTkFMIEtQSSBDQVJEUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgey8qIFRvdGFsIExpdmVzdG9jayBDYXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtOTAwIHRvLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBzaGFkb3cteGwgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+0J3QuNC50YIg0LzQsNC70YvQvSDRgtC+0L48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+8J+Qjjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtd2hpdGUgbXQtMlwiPlxuICAgICAgICAgICAgICB7KE5BVElPTkFMX1RPVEFMUy50b3RhbExpdmVzdG9jayAvIDEwMDAwMDApLnRvRml4ZWQoMSl9INGB0LDRj1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIG10LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxzcGFuPtCl0L7QvdGMOiAyOS40TTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+0K/QvNCw0LA6IDI0LjZNPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj7QkdC+0LQ6IDEwLjdNPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1zbGF0ZS04MDAgaC0xLjUgcm91bmRlZC1mdWxsIG10LTMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYW1iZXItNDAwIGgtZnVsbCByb3VuZGVkLWZ1bGxcIiBzdHlsZT17eyB3aWR0aDogJzg1JScgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENyaXRpY2FsIER6dWQgQWltYWdzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcmVkLTk1MC80MCB2aWEtc2xhdGUtOTAwIHRvLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLXJlZC05MDAvNTAgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtcmVkLTMwMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPtCd0Y3QvSDQuNGFINGN0YDRgdC00Y3Qu9GC0Y3QuSDQsNC50LzQsNCzPC9zcGFuPlxuICAgICAgICAgICAgICA8QWxlcnRPY3RhZ29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtcmVkLTQwMCBtdC0yXCI+XG4gICAgICAgICAgICAgIHtOQVRJT05BTF9UT1RBTFMuY3JpdGljYWxBaW1hZ3NDb3VudH0g0LDQudC80LDQs1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIG10LTJcIj5cbiAgICAgICAgICAgICAg0KHSr9GF0LHQsNCw0YLQsNGALCDQl9Cw0LLRhdCw0L0sINCT0L7QstGMLdCQ0LvRgtCw0LksINCl0Y3QvdGC0LjQuSDQt9GN0YDRjdCzINCw0LnQvNCz0YPRg9C00LDQtCDQvtC90YbQs9C+0Lkg0LDQvdGF0LDQsNGA0YPRg9C70LPQsCDQt9Cw0YDQu9Cw0YHQsNC9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNsYXRlLTgwMCBoLTEuNSByb3VuZGVkLWZ1bGwgbXQtMyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGgtZnVsbCByb3VuZGVkLWZ1bGxcIiBzdHlsZT17eyB3aWR0aDogJzM2JScgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFBhc3R1cmUgT3ZlcmxvYWQgQ2FyZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWFtYmVyLTk1MC80MCB2aWEtc2xhdGUtOTAwIHRvLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLWFtYmVyLTkwMC81MCBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1hbWJlci0zMDBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj7QkdGN0LvRh9GN0Y3RgNC40LnQvSDQtNGD0L3QtNCw0LYg0LTQsNCw0YY8L3NwYW4+XG4gICAgICAgICAgICAgIDxXaW5kIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDAgbXQtMlwiPlxuICAgICAgICAgICAgICB7TkFUSU9OQUxfVE9UQUxTLmF2ZXJhZ2VQYXN0dXJlT3ZlcmxvYWR9eCDQtNCw0YXQuNC9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDAgbXQtMlwiPlxuICAgICAgICAgICAgICDQndC40LnRgiDQvdGD0YLQs9C40LnQvSA3MCDQs9Cw0YDRg9C5INGF0YPQstGM0LQg0LTQsNCw0YYg0YXRjdGC0Y3RgNGB0Y3QvSwg0YPRgNCz0LDRhtGL0L0g0LPQsNGA0YYg0LTRg9GC0LzQsNCzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNsYXRlLTgwMCBoLTEuNSByb3VuZGVkLWZ1bGwgbXQtMyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hbWJlci01MDAgaC1mdWxsIHJvdW5kZWQtZnVsbFwiIHN0eWxlPXt7IHdpZHRoOiAnNjglJyB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU25vdyBDb3ZlciBDYXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2t5LTk1MC80MCB2aWEtc2xhdGUtOTAwIHRvLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLXNreS05MDAvNTAgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2t5LTMwMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPtCm0LDRgdCw0L0g0LHSr9GA0YXSr9Kv0LvQuNC50L0g0Y3Qt9C70Y3RhdKv0q/QvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPFNub3dmbGFrZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtc2t5LTQwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LXNreS0zMDAgbXQtMlwiPlxuICAgICAgICAgICAgICB7TkFUSU9OQUxfVE9UQUxTLmF2ZXJhZ2VTbm93Q292ZXJQZXJjZW50fSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0yXCI+XG4gICAgICAgICAgICAgINCc0L7QvdCz0L7QuyDQvtGA0L3RiyDQvdC40LnRgiDQs9Cw0LfQsNGAINC90YPRgtCz0LjQudC9IDc0JSDRhtCw0YHQsNCw0YAg0YXRg9GH0LjQs9C00YHQsNC9INCx0LDQudC90LBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2xhdGUtODAwIGgtMS41IHJvdW5kZWQtZnVsbCBtdC0zIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNreS00MDAgaC1mdWxsIHJvdW5kZWQtZnVsbFwiIHN0eWxlPXt7IHdpZHRoOiAnNzQlJyB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBBTEwgQUlNQUdTIFJJU0sgJiBTVEFUUyBSQU5LSU5HIFRBQkxFICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJnLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgIHsvKiBUYWJsZSBUb29sYmFyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JHSr9GFINCw0LnQvNCz0LjQudC9INC30YPQtCwg0LzQsNC7INCx0LAg0LHRjdC70YfRjdGN0YDQuNC50L0g0q/Qt9Kv0q/Qu9GN0LvRgjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0zMDAgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgIHtzb3J0ZWQubGVuZ3RofSAvIDIyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgINCc06nRgCDQsdKv0YAg0LTRjdGN0YAg0LTQsNGA0LYg0Y3RgdCy0Y3QuyAn0q7Qt9GN0YUnINGC0L7QstGH0LjQudCzINC00LDRgNC2INGC0YPRhdCw0LnQvSDQsNC50LzQs9C40LnQvSDRhtCw0LMg0LDQs9Cw0LDRgCwg0LzQsNC70YfQuNC9INC306nQstC706nQvNC20LjQudCzINGI0YPRg9C0INGF0LDRgNC90LAg0YPRgy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBGaWx0ZXIgQnV0dG9ucyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1zbGF0ZS00MDAgYWJzb2x1dGUgbGVmdC0yLjUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yXCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KXQsNC50YUuLi5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC04IHByLTMgcHktMS41IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIHRleHQteHMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsdWUtNTAwIHctMzYgc206dy00NFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEZpbHRlciBieSBSaXNrIExldmVsICovfVxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyTGV2ZWwoJ2FsbCcpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHJvdW5kZWQteGwgZm9udC1tZWRpdW0gdHJhbnNpdGlvbiAke1xuICAgICAgICAgICAgICAgICAgZmlsdGVyTGV2ZWwgPT09ICdhbGwnXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWJsdWUtNjAwIHRleHQtd2hpdGUgc2hhZG93LW1kJ1xuICAgICAgICAgICAgICAgICAgICA6ICdiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtODAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0JHSr9Cz0LQgKHtBSU1BR1NfREFUQS5sZW5ndGh9KVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyTGV2ZWwoJ2NyaXRpY2FsJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC14bCBmb250LW1lZGl1bSB0cmFuc2l0aW9uICR7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJMZXZlbCA9PT0gJ2NyaXRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICA/ICdiZy1yZWQtNjAwIHRleHQtd2hpdGUgc2hhZG93LW1kJ1xuICAgICAgICAgICAgICAgICAgICA6ICdiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtODAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0J3RjdC9INC40YUg0Y3RgNGB0LTRjdC70YLRjdC5ICh7TkFUSU9OQUxfVE9UQUxTLmNyaXRpY2FsQWltYWdzQ291bnR9KVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyTGV2ZWwoJ2hpZ2gnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSByb3VuZGVkLXhsIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gJHtcbiAgICAgICAgICAgICAgICAgIGZpbHRlckxldmVsID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctc2xhdGUtOTAwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINCY0YUg0Y3RgNGB0LTRjdC70YLRjdC5ICh7TkFUSU9OQUxfVE9UQUxTLmhpZ2hSaXNrQWltYWdzQ291bnR9KVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyTGV2ZWwoJ2xvdycpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHJvdW5kZWQteGwgZm9udC1tZWRpdW0gdHJhbnNpdGlvbiAke1xuICAgICAgICAgICAgICAgICAgZmlsdGVyTGV2ZWwgPT09ICdsb3cnXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWVtZXJhbGQtNjAwIHRleHQtd2hpdGUgc2hhZG93LW1kJ1xuICAgICAgICAgICAgICAgICAgICA6ICdiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtODAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0JHQsNCz0LAg0Y3RgNGB0LTRjdC70YLRjdC5ICh7TkFUSU9OQUxfVE9UQUxTLmxvd1Jpc2tBaW1hZ3NDb3VudH0pXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU29ydCBDb250cm9scyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBweS0yLjUgYmctc2xhdGUtOTAwLzYwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgb3ZlcmZsb3cteC1hdXRvIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtWzEwcHhdIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgINCt0YDRjdC80LHRjdC70Y3RhTpcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U29ydEZpZWxkKCdyaXNrJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSAke1xuICAgICAgICAgICAgICAgIHNvcnRGaWVsZCA9PT0gJ3Jpc2snID8gJ2JnLXNsYXRlLTgwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcgOiAnaG92ZXI6dGV4dC1zbGF0ZS0yMDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dVcERvd24gY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPtCX0YPQtNGL0L0g0Y3RgNGB0LTRjdC70Y3RjdGAPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNvcnRGaWVsZCgnbGl2ZXN0b2NrJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSAke1xuICAgICAgICAgICAgICAgIHNvcnRGaWVsZCA9PT0gJ2xpdmVzdG9jaycgPyAnYmctc2xhdGUtODAwIHRleHQtd2hpdGUgZm9udC1ib2xkJyA6ICdob3Zlcjp0ZXh0LXNsYXRlLTIwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcnJvd1VwRG93biBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+0JzQsNC70YvQvSDRgtC+0L7Qs9C+0L7RgDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0RmllbGQoJ3Bhc3R1cmUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xICR7XG4gICAgICAgICAgICAgICAgc29ydEZpZWxkID09PSAncGFzdHVyZScgPyAnYmctc2xhdGUtODAwIHRleHQtd2hpdGUgZm9udC1ib2xkJyA6ICdob3Zlcjp0ZXh0LXNsYXRlLTIwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcnJvd1VwRG93biBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YbQsNCw0YA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U29ydEZpZWxkKCdzbm93Jyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSAke1xuICAgICAgICAgICAgICAgIHNvcnRGaWVsZCA9PT0gJ3Nub3cnID8gJ2JnLXNsYXRlLTgwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcgOiAnaG92ZXI6dGV4dC1zbGF0ZS0yMDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dVcERvd24gY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPtCm0LDRgdC90Ysg0LfRg9C30LDQsNC90LDQsNGAPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogVGFibGUgQ29udGFpbmVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2UgdGV4dC14c1wiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwIHRleHQtc2xhdGUtNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LVsxMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMuNSBweC00IGZvbnQtc2VtaWJvbGRcIj7ihJY8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMuNSBweC00IGZvbnQtc2VtaWJvbGRcIj7QkNC50LzQs9C40LnQvSDQvdGN0YAgLyDQotOp0LI8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMuNSBweC00IGZvbnQtc2VtaWJvbGRcIj7Ql9GD0LTRi9C9INGN0YDRgdC00Y3QuzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMy41IHB4LTQgZm9udC1zZW1pYm9sZFwiPtCX0YPQtNGL0L0g0YLTqdGA06nQuzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMy41IHB4LTQgZm9udC1zZW1pYm9sZFwiPtCm0LDRgdC90Ysg0LfRg9C30LDQsNC9PC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zLjUgcHgtNCBmb250LXNlbWlib2xkXCI+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YY8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMuNSBweC00IGZvbnQtc2VtaWJvbGRcIj7QnNCw0LvRi9C9INC90LjQudGCINGC0L7QvjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMy41IHB4LTQgZm9udC1zZW1pYm9sZCB0ZXh0LXJpZ2h0XCI+0q7QudC70LTRjdC7PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLXNsYXRlLTgwMC82MCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIHtzb3J0ZWQubWFwKChhaW1hZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBrZXk9e2FpbWFnLmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdEFpbWFnKGFpbWFnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6Ymctc2xhdGUtOTAwLzgwIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTQgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vXCI+e2luZGV4ICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC1ibHVlLTQwMCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWltYWcubmFtZU1ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDBcIj57YWltYWcuY2VudGVyTW59IOKAoiB7YWltYWcucmVnaW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC1bMTFweF0gZm9udC1ib2xkIGJvcmRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhaW1hZy5kenVkUmlzay5sZXZlbCA9PT0gJ2NyaXRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXJlZC01MDAvMTUgdGV4dC1yZWQtMzAwIGJvcmRlci1yZWQtNTAwLzMwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdoaWdoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS01MDAvMTUgdGV4dC1vcmFuZ2UtMzAwIGJvcmRlci1vcmFuZ2UtNTAwLzMwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdtb2RlcmF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAvMTUgdGV4dC1hbWJlci0zMDAgYm9yZGVyLWFtYmVyLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1lbWVyYWxkLTUwMC8xNSB0ZXh0LWVtZXJhbGQtMzAwIGJvcmRlci1lbWVyYWxkLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthaW1hZy5kenVkUmlzay5sZXZlbExhYmVsfSAoe2FpbWFnLmR6dWRSaXNrLnNjb3JlfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTQgdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSByb3VuZGVkIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FpbWFnLmR6dWRSaXNrLnByaW1hcnlUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMuNSBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY3lhbi0zMDBcIj57YWltYWcuZHp1ZFJpc2suc25vd0RlcHRoQ219INGB0Lw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPnthaW1hZy5kenVkUmlzay5zbm93Q292ZXJQZXJjZW50fSUg0LHSr9GA0YXSr9Kv0Ls8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMuNSBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhaW1hZy5wYXN0dXJlLm92ZXJsb2FkUmF0aW8gPj0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtcmVkLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFpbWFnLnBhc3R1cmUub3ZlcmxvYWRSYXRpbyA+PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1vcmFuZ2UtNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtYW1iZXItNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FpbWFnLnBhc3R1cmUub3ZlcmxvYWRSYXRpb314INC00LDRhdC40L1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPnthaW1hZy5wYXN0dXJlLnN0YXR1c0xhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1hbWJlci0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoYWltYWcubGl2ZXN0b2NrLnRvdGFsIC8gMTAwMDAwMCkudG9GaXhlZCgyKX0g0YHQsNGPXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCl0L7QvdGMOiB7KGFpbWFnLmxpdmVzdG9jay5zaGVlcCAvIDEwMDApLnRvRml4ZWQoMCl9ayDigKIg0K/QvNCw0LA6IHsoYWltYWcubGl2ZXN0b2NrLmdvYXRzIC8gMTAwMCkudG9GaXhlZCgwKX1rXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zLjUgcHgtNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBaW1hZyhhaW1hZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIHJvdW5kZWQteGwgYmctc2xhdGUtODAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBmb250LW1lZGl1bSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEV5ZSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7SrtC30Y3RhTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=