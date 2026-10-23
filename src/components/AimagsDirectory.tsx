const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import { AIMAGS_DATA } from "/src/data/aimagData.ts";
import { Grid, List, MapPin, Search } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/components/AimagsDirectory.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export const AimagsDirectory = ({ onSelectAimag, onBackToMap }) => {
	const [filterLevel, setFilterLevel] = useState("all");
	const [regionFilter, setRegionFilter] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [viewMode, setViewMode] = useState("grid");
	const [sortBy, setSortBy] = useState("risk");
	const filtered = AIMAGS_DATA.filter((a) => {
		if (filterLevel !== "all" && a.dzudRisk.level !== filterLevel) return false;
		if (regionFilter !== "all" && a.region !== regionFilter) return false;
		if (searchQuery && !a.nameMn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.centerMn.toLowerCase().includes(searchQuery.toLowerCase())) {
			return false;
		}
		return true;
	});
	const sorted = [...filtered].sort((a, b) => {
		if (sortBy === "risk") return b.dzudRisk.score - a.dzudRisk.score;
		if (sortBy === "livestock") return b.livestock.total - a.livestock.total;
		if (sortBy === "pasture") return b.pasture.overloadRatio - a.pasture.overloadRatio;
		if (sortBy === "snow") return b.dzudRisk.snowDepthCm - a.dzudRisk.snowDepthCm;
		return 0;
	});
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: onBackToMap,
						className: "text-xs text-blue-400 hover:text-blue-300 font-semibold mb-2 inline-flex items-center gap-1.5 transition",
						children: /* @__PURE__ */ _jsxDEV("span", { children: "← Газрын зураг руу буцах" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl font-black text-white tracking-tight flex items-center gap-3",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: "Монгол Улсын 21 аймаг & Нийслэл" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-normal",
							children: [sorted.length, " аймаг"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-xs sm:text-sm text-slate-400 mt-1",
						children: "Аймаг бүрийн зудын түвшин, малын тоо толгой, цасны зузаан болон шуурхай мэдээллийг сонгон үзнэ үү."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setViewMode("grid"),
							className: `p-2 rounded-lg text-xs font-medium transition ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`,
							title: "Карт харагдац",
							children: /* @__PURE__ */ _jsxDEV(Grid, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setViewMode("table"),
							className: `p-2 rounded-lg text-xs font-medium transition ${viewMode === "table" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`,
							title: "Хүснэгт харагдац",
							children: /* @__PURE__ */ _jsxDEV(List, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center flex-wrap gap-2.5",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "relative",
							children: [/* @__PURE__ */ _jsxDEV(Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								placeholder: "Аймгийн нэрээр хайх...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 w-48 sm:w-60"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("select", {
							value: filterLevel,
							onChange: (e) => setFilterLevel(e.target.value),
							className: "px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500",
							children: [
								/* @__PURE__ */ _jsxDEV("option", {
									value: "all",
									children: "Бүх эрсдэл"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "critical",
									children: "🚨 Нэн их эрсдэлтэй"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "high",
									children: "⚠️ Их эрсдэлтэй"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "moderate",
									children: "🟡 Дунд эрсдэлтэй"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "low",
									children: "🟢 Бага эрсдэлтэй"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("select", {
							value: regionFilter,
							onChange: (e) => setRegionFilter(e.target.value),
							className: "px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500",
							children: [
								/* @__PURE__ */ _jsxDEV("option", {
									value: "all",
									children: "Бүх бүс нутаг"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "Баруун бүс",
									children: "Баруун бүс"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "Хангайн бүс",
									children: "Хангайн бүс"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "Төвийн бүс",
									children: "Төвийн бүс"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "Зүүн бүс",
									children: "Зүүн бүс"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("option", {
									value: "Нийслэл",
									children: "Нийслэл"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2 text-xs",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-slate-400",
						children: "Эрэмбэ:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("select", {
						value: sortBy,
						onChange: (e) => setSortBy(e.target.value),
						className: "px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none",
						children: [
							/* @__PURE__ */ _jsxDEV("option", {
								value: "risk",
								children: "Зудын эрсдэлээр"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("option", {
								value: "livestock",
								children: "Малын тоогоор"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("option", {
								value: "pasture",
								children: "Бэлчээрийн даацаар"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 159,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("option", {
								value: "snow",
								children: "Цасны зузаанаар"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 7
			}, this),
			viewMode === "grid" && /* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: sorted.map((aimag) => /* @__PURE__ */ _jsxDEV("div", {
					onClick: () => onSelectAimag(aimag),
					className: "p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 transition cursor-pointer group flex flex-col justify-between",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-start justify-between gap-2 mb-3",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-xl font-bold text-white group-hover:text-blue-400 transition",
								children: aimag.nameMn
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 177,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "text-xs text-slate-400 flex items-center gap-1.5 mt-0.5",
								children: [
									/* @__PURE__ */ _jsxDEV(MapPin, { className: "w-3.5 h-3.5 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: aimag.centerMn }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 182,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: "•" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: aimag.region }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: `text-[10px] px-2.5 py-1 rounded-full font-bold border ${aimag.dzudRisk.level === "critical" ? "bg-red-500/15 text-red-300 border-red-500/30" : aimag.dzudRisk.level === "high" ? "bg-orange-500/15 text-orange-300 border-orange-500/30" : aimag.dzudRisk.level === "moderate" ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,
								children: aimag.dzudRisk.levelLabel
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4",
							children: aimag.dzudRisk.summary
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] mb-4",
							children: [
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "Малын тоо"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 210,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-amber-300 mt-0.5",
									children: [(aimag.livestock.total / 1e6).toFixed(1), "M"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 211,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "Цасны зузаан"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 216,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-cyan-300 mt-0.5",
									children: [aimag.dzudRisk.snowDepthCm, " см"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 215,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "Бэлчээрийн даац"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 222,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-red-300 mt-0.5",
									children: [aimag.pasture.overloadRatio, "x"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "pt-3 border-t border-slate-800 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-slate-400 text-[11px]",
							children: ["Зудын төрөл: ", /* @__PURE__ */ _jsxDEV("strong", {
								className: "text-white",
								children: aimag.dzudRisk.primaryType
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 232,
								columnNumber: 32
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 231,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-blue-400 font-semibold group-hover:translate-x-0.5 transition inline-flex items-center gap-1",
							children: [/* @__PURE__ */ _jsxDEV("span", { children: "Дэлгэрэнгүй" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "→" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 236,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 230,
						columnNumber: 15
					}, this)]
				}, aimag.id, true, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 167,
				columnNumber: 9
			}, this),
			viewMode === "table" && /* @__PURE__ */ _jsxDEV("div", {
				className: "rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto shadow-xl",
				children: /* @__PURE__ */ _jsxDEV("table", {
					className: "w-full text-left text-xs border-collapse",
					children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", {
						className: "border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px]",
						children: [
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "№"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "Аймгийн нэр"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 251,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "Төв"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 252,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "Зудын түвшин"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 253,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "Цасны зузаан"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 254,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "Бэлчээрийн даац"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 255,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4",
								children: "Малын тоо"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 256,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("th", {
								className: "py-3 px-4 text-right",
								children: "Үйлдэл"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 257,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 249,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 248,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("tbody", {
						className: "divide-y divide-slate-800/60 font-medium",
						children: sorted.map((aimag, idx) => /* @__PURE__ */ _jsxDEV("tr", {
							onClick: () => onSelectAimag(aimag),
							className: "hover:bg-slate-800/60 transition cursor-pointer",
							children: [
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 text-slate-500 font-mono",
									children: idx + 1
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 267,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 font-bold text-white",
									children: aimag.nameMn
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 268,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 text-slate-400",
									children: aimag.centerMn
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 269,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4",
									children: /* @__PURE__ */ _jsxDEV("span", {
										className: `text-[11px] px-2 py-0.5 rounded font-bold ${aimag.dzudRisk.level === "critical" ? "bg-red-500/20 text-red-300" : aimag.dzudRisk.level === "high" ? "bg-orange-500/20 text-orange-300" : "bg-emerald-500/20 text-emerald-300"}`,
										children: aimag.dzudRisk.levelLabel
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 271,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 270,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 text-cyan-300 font-bold",
									children: [aimag.dzudRisk.snowDepthCm, " см"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 283,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 text-amber-300 font-bold",
									children: [aimag.pasture.overloadRatio, "x дахин"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 284,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 text-white font-bold",
									children: [(aimag.livestock.total / 1e6).toFixed(2), " сая"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("td", {
									className: "py-3 px-4 text-right",
									children: /* @__PURE__ */ _jsxDEV("button", {
										onClick: (e) => {
											e.stopPropagation();
											onSelectAimag(aimag);
										},
										className: "px-3 py-1 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition",
										children: "Үзэх"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 287,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 286,
									columnNumber: 19
								}, this)
							]
						}, aimag.id, true, {
							fileName: _jsxFileName,
							lineNumber: 262,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 260,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 247,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 246,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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VUFDckI7VUFDQSxXQUFVO29CQUNYO1NBRU87Ozs7O1FBQ047Ozs7O09BQ0Y7U0FsQ0csTUFBTTs7OzthQWtDVCxDQUNMO0tBQ0k7Ozs7YUFDRjs7Ozs7O0dBQ0o7Ozs7O0VBRUo7Ozs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFpbWFnc0RpcmVjdG9yeS50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQUlNQUdTX0RBVEEgfSBmcm9tICcuLi9kYXRhL2FpbWFnRGF0YSc7XG5pbXBvcnQgeyBBaW1hZ0luZm8sIER6dWRSaXNrTGV2ZWwgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBBbGVydFRyaWFuZ2xlLFxuICBBcnJvd1VwRG93bixcbiAgQnVpbGRpbmcyLFxuICBFeWUsXG4gIEZpbHRlcixcbiAgR3JpZCxcbiAgTGlzdCxcbiAgTWFwUGluLFxuICBTZWFyY2gsXG4gIFNub3dmbGFrZSxcbiAgV2luZCxcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEFpbWFnc0RpcmVjdG9yeVByb3BzIHtcbiAgb25TZWxlY3RBaW1hZzogKGFpbWFnOiBBaW1hZ0luZm8pID0+IHZvaWQ7XG4gIG9uQmFja1RvTWFwOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQWltYWdzRGlyZWN0b3J5OiBSZWFjdC5GQzxBaW1hZ3NEaXJlY3RvcnlQcm9wcz4gPSAoe1xuICBvblNlbGVjdEFpbWFnLFxuICBvbkJhY2tUb01hcCxcbn0pID0+IHtcbiAgY29uc3QgW2ZpbHRlckxldmVsLCBzZXRGaWx0ZXJMZXZlbF0gPSB1c2VTdGF0ZTxEenVkUmlza0xldmVsIHwgJ2FsbCc+KCdhbGwnKTtcbiAgY29uc3QgW3JlZ2lvbkZpbHRlciwgc2V0UmVnaW9uRmlsdGVyXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2FsbCcpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZpZXdNb2RlLCBzZXRWaWV3TW9kZV0gPSB1c2VTdGF0ZTwnZ3JpZCcgfCAndGFibGUnPignZ3JpZCcpO1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGU8J3Jpc2snIHwgJ2xpdmVzdG9jaycgfCAncGFzdHVyZScgfCAnc25vdyc+KCdyaXNrJyk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBBSU1BR1NfREFUQS5maWx0ZXIoKGEpID0+IHtcbiAgICBpZiAoZmlsdGVyTGV2ZWwgIT09ICdhbGwnICYmIGEuZHp1ZFJpc2subGV2ZWwgIT09IGZpbHRlckxldmVsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHJlZ2lvbkZpbHRlciAhPT0gJ2FsbCcgJiYgYS5yZWdpb24gIT09IHJlZ2lvbkZpbHRlcikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChcbiAgICAgIHNlYXJjaFF1ZXJ5ICYmXG4gICAgICAhYS5uYW1lTW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSAmJlxuICAgICAgIWEubmFtZUVuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgJiZcbiAgICAgICFhLmNlbnRlck1uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRlZCA9IFsuLi5maWx0ZXJlZF0uc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChzb3J0QnkgPT09ICdyaXNrJykgcmV0dXJuIGIuZHp1ZFJpc2suc2NvcmUgLSBhLmR6dWRSaXNrLnNjb3JlO1xuICAgIGlmIChzb3J0QnkgPT09ICdsaXZlc3RvY2snKSByZXR1cm4gYi5saXZlc3RvY2sudG90YWwgLSBhLmxpdmVzdG9jay50b3RhbDtcbiAgICBpZiAoc29ydEJ5ID09PSAncGFzdHVyZScpIHJldHVybiBiLnBhc3R1cmUub3ZlcmxvYWRSYXRpbyAtIGEucGFzdHVyZS5vdmVybG9hZFJhdGlvO1xuICAgIGlmIChzb3J0QnkgPT09ICdzbm93JykgcmV0dXJuIGIuZHp1ZFJpc2suc25vd0RlcHRoQ20gLSBhLmR6dWRSaXNrLnNub3dEZXB0aENtO1xuICAgIHJldHVybiAwO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC00IHNtOnB4LTYgbGc6cHgtOCBtYXgtdy03eGwgbXgtYXV0byB3LWZ1bGwgc3BhY2UteS04IGFuaW1hdGUtaW4gZmFkZS1pblwiPlxuICAgICAgey8qIEhlYWRlciB3aXRoIEJhY2sgYnV0dG9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgcGItNiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25CYWNrVG9NYXB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmx1ZS00MDAgaG92ZXI6dGV4dC1ibHVlLTMwMCBmb250LXNlbWlib2xkIG1iLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdHJhbnNpdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+4oaQINCT0LDQt9GA0YvQvSDQt9GD0YDQsNCzINGA0YPRgyDQsdGD0YbQsNGFPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxzcGFuPtCc0L7QvdCz0L7QuyDQo9C70YHRi9C9IDIxINCw0LnQvNCw0LMgJiDQndC40LnRgdC70Y3Quzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgcHgtMi41IHB5LTEgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCBmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICB7c29ydGVkLmxlbmd0aH0g0LDQudC80LDQs1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtNDAwIG10LTFcIj5cbiAgICAgICAgICAgINCQ0LnQvNCw0LMg0LHSr9GA0LjQudC9INC30YPQtNGL0L0g0YLSr9Cy0YjQuNC9LCDQvNCw0LvRi9C9INGC0L7QviDRgtC+0LvQs9C+0LksINGG0LDRgdC90Ysg0LfRg9C30LDQsNC9INCx0L7Qu9C+0L0g0YjRg9GD0YDRhdCw0Lkg0LzRjdC00Y3RjdC70LvQuNC50LMg0YHQvtC90LPQvtC9INKv0LfQvdGNINKv0q8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVmlldyBUb2dnbGUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3TW9kZSgnZ3JpZCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gJHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZSA9PT0gJ2dyaWQnXG4gICAgICAgICAgICAgICAgICA/ICdiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgOiAndGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIHRpdGxlPVwi0JrQsNGA0YIg0YXQsNGA0LDQs9C00LDRhlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpZXdNb2RlKCd0YWJsZScpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gJHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZSA9PT0gJ3RhYmxlJ1xuICAgICAgICAgICAgICAgICAgPyAnYmctYmx1ZS02MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICB0aXRsZT1cItCl0q/RgdC90Y3Qs9GCINGF0LDRgNCw0LPQtNCw0YZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRmlsdGVyIGFuZCBTZWFyY2ggQmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC0yeGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTIuNVwiPlxuICAgICAgICAgIHsvKiBTZWFyY2ggKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc2xhdGUtNDAwIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIiAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQkNC50LzQs9C40LnQvSDQvdGN0YDRjdGN0YAg0YXQsNC50YUuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC05IHByLTMgcHktMS41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNDAwIHRleHQteHMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsdWUtNTAwIHctNDggc206dy02MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFJpc2sgTGV2ZWwgRmlsdGVyICovfVxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJMZXZlbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsdGVyTGV2ZWwoZS50YXJnZXQudmFsdWUgYXMgRHp1ZFJpc2tMZXZlbCB8ICdhbGwnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMS41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQteHMgdGV4dC1zbGF0ZS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+0JHSr9GFINGN0YDRgdC00Y3Quzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNyaXRpY2FsXCI+8J+aqCDQndGN0L0g0LjRhSDRjdGA0YHQtNGN0LvRgtGN0Lk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+4pqg77iPINCY0YUg0Y3RgNGB0LTRjdC70YLRjdC5PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9kZXJhdGVcIj7wn5+hINCU0YPQvdC0INGN0YDRgdC00Y3Qu9GC0Y3QuTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPvCfn6Ig0JHQsNCz0LAg0Y3RgNGB0LTRjdC70YLRjdC5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICB7LyogUmVnaW9uIEZpbHRlciAqL31cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17cmVnaW9uRmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWdpb25GaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj7QkdKv0YUg0LHSr9GBINC90YPRgtCw0LM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLQkdCw0YDRg9GD0L0g0LHSr9GBXCI+0JHQsNGA0YPRg9C9INCx0q/RgTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItCl0LDQvdCz0LDQudC9INCx0q/RgVwiPtCl0LDQvdCz0LDQudC9INCx0q/RgTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItCi06nQstC40LnQvSDQsdKv0YFcIj7QotOp0LLQuNC50L0g0LHSr9GBPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0JfSr9Kv0L0g0LHSr9GBXCI+0JfSr9Kv0L0g0LHSr9GBPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0J3QuNC50YHQu9GN0LtcIj7QndC40LnRgdC70Y3Quzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU29ydCBCeSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QrdGA0Y3QvNCx0Y06PC9zcGFuPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXtzb3J0Qnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvcnRCeShlLnRhcmdldC52YWx1ZSBhcyBhbnkpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC14cyB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJpc2tcIj7Ql9GD0LTRi9C9INGN0YDRgdC00Y3Qu9GN0Y3RgDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpdmVzdG9ja1wiPtCc0LDQu9GL0L0g0YLQvtC+0LPQvtC+0YA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYXN0dXJlXCI+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YbQsNCw0YA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzbm93XCI+0KbQsNGB0L3RiyDQt9GD0LfQsNCw0L3QsNCw0YA8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEdSSUQgVklFVyAqL31cbiAgICAgIHt2aWV3TW9kZSA9PT0gJ2dyaWQnICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAge3NvcnRlZC5tYXAoKGFpbWFnKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17YWltYWcuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0QWltYWcoYWltYWcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctc2xhdGUtOTAwLzkwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGhvdmVyOmJvcmRlci1ibHVlLTUwMC82MCBob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy1ibHVlLTUwMC8xMCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGdyb3VwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0yIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOnRleHQtYmx1ZS00MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthaW1hZy5uYW1lTW59XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1zbGF0ZS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthaW1hZy5jZW50ZXJNbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthaW1hZy5yZWdpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxMHB4XSBweC0yLjUgcHktMSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIGJvcmRlciAke1xuICAgICAgICAgICAgICAgICAgICAgIGFpbWFnLmR6dWRSaXNrLmxldmVsID09PSAnY3JpdGljYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1yZWQtNTAwLzE1IHRleHQtcmVkLTMwMCBib3JkZXItcmVkLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdoaWdoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwMC8xNSB0ZXh0LW9yYW5nZS0zMDAgYm9yZGVyLW9yYW5nZS01MDAvMzAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFpbWFnLmR6dWRSaXNrLmxldmVsID09PSAnbW9kZXJhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci01MDAvMTUgdGV4dC1hbWJlci0zMDAgYm9yZGVyLWFtYmVyLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWVtZXJhbGQtNTAwLzE1IHRleHQtZW1lcmFsZC0zMDAgYm9yZGVyLWVtZXJhbGQtNTAwLzMwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FpbWFnLmR6dWRSaXNrLmxldmVsTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIGxpbmUtY2xhbXAtMiBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAge2FpbWFnLmR6dWRSaXNrLnN1bW1hcnl9XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgey8qIFF1aWNrIEluZGljYXRvcnMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0yIHAtMi41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzcwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIHRleHQtWzExcHhdIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QnNCw0LvRi9C9INGC0L7QvjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWFtYmVyLTMwMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7KGFpbWFnLmxpdmVzdG9jay50b3RhbCAvIDEwMDAwMDApLnRvRml4ZWQoMSl9TVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtCm0LDRgdC90Ysg0LfRg9C30LDQsNC9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY3lhbi0zMDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2FpbWFnLmR6dWRSaXNrLnNub3dEZXB0aENtfSDRgdC8XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YY8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtMzAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthaW1hZy5wYXN0dXJlLm92ZXJsb2FkUmF0aW99eFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgICDQl9GD0LTRi9C9INGC06nRgNOp0Ls6IDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnthaW1hZy5kenVkUmlzay5wcmltYXJ5VHlwZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBmb250LXNlbWlib2xkIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTAuNSB0cmFuc2l0aW9uIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+0JTRjdC70LPRjdGA0Y3QvdCz0q/QuTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPuKGkjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFRBQkxFIFZJRVcgKi99XG4gICAgICB7dmlld01vZGUgPT09ICd0YWJsZScgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBvdmVyZmxvdy14LWF1dG8gc2hhZG93LXhsXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgdGV4dC14cyBib3JkZXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgYmctc2xhdGUtOTUwIHRleHQtc2xhdGUtNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LVsxMHB4XVwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj7ihJY8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj7QkNC50LzQs9C40LnQvSDQvdGN0YA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj7QotOp0LI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj7Ql9GD0LTRi9C9INGC0q/QstGI0LjQvTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPtCm0LDRgdC90Ysg0LfRg9C30LDQsNC9PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00XCI+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YY8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj7QnNCw0LvRi9C9INGC0L7QvjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtNCB0ZXh0LXJpZ2h0XCI+0q7QudC70LTRjdC7PC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLXNsYXRlLTgwMC82MCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7c29ydGVkLm1hcCgoYWltYWcsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAga2V5PXthaW1hZy5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0QWltYWcoYWltYWcpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6Ymctc2xhdGUtODAwLzYwIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTQgdGV4dC1zbGF0ZS01MDAgZm9udC1tb25vXCI+e2lkeCArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTQgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57YWltYWcubmFtZU1ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00IHRleHQtc2xhdGUtNDAwXCI+e2FpbWFnLmNlbnRlck1ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bMTFweF0gcHgtMiBweS0wLjUgcm91bmRlZCBmb250LWJvbGQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFpbWFnLmR6dWRSaXNrLmxldmVsID09PSAnY3JpdGljYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXJlZC01MDAvMjAgdGV4dC1yZWQtMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFpbWFnLmR6dWRSaXNrLmxldmVsID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwMC8yMCB0ZXh0LW9yYW5nZS0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWVtZXJhbGQtNTAwLzIwIHRleHQtZW1lcmFsZC0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YWltYWcuZHp1ZFJpc2subGV2ZWxMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTQgdGV4dC1jeWFuLTMwMCBmb250LWJvbGRcIj57YWltYWcuZHp1ZFJpc2suc25vd0RlcHRoQ219INGB0Lw8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNCB0ZXh0LWFtYmVyLTMwMCBmb250LWJvbGRcIj57YWltYWcucGFzdHVyZS5vdmVybG9hZFJhdGlvfXgg0LTQsNGF0LjQvTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00IHRleHQtd2hpdGUgZm9udC1ib2xkXCI+eyhhaW1hZy5saXZlc3RvY2sudG90YWwgLyAxMDAwMDAwKS50b0ZpeGVkKDIpfSDRgdCw0Y88L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0QWltYWcoYWltYWcpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIHJvdW5kZWQtbGcgYmctc2xhdGUtODAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDSrtC30Y3RhVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=