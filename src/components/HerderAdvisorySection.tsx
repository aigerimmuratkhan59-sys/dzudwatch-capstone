const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import { AlertTriangle, Calculator, CheckCircle2, Snowflake } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/components/HerderAdvisorySection.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export const HerderAdvisorySection = ({ onBackToMap }) => {
	// Feed Calculator State
	const [horses, setHorses] = useState(30);
	const [cattle, setCattle] = useState(25);
	const [camels, setCamels] = useState(5);
	const [sheep, setSheep] = useState(250);
	const [goats, setGoats] = useState(180);
	const [winterDays, setWinterDays] = useState(135);
	// Expansion toggles
	const [expandedDzudType, setExpandedDzudType] = useState("white");
	// Standard Zootechnical Feeding norms in Mongolia:
	// 1 Sheep unit (Хонь толгой):
	// 1 Camel = 5.0 sheep units
	// 1 Horse = 6.0 sheep units (grazes more but supplemental feeding needed during heavy snow)
	// 1 Cattle = 6.0 sheep units
	// 1 Sheep = 1.0 sheep unit
	// 1 Goat = 0.9 sheep unit
	const sheepUnits = horses * 6 + cattle * 6 + camels * 5 + sheep * 1 + goats * .9;
	// Supplementary winter feeding standard: ~1.5 - 2.0 kg of hay per sheep unit per day during harsh conditions,
	// or assuming 60% pasture grazing and 40% supplemental hay/feed in wintering:
	// Hay: ~0.8 kg/sheep-unit/day * winterDays -> 1 bale is ~20kg
	const totalHayKg = Math.round(sheepUnits * .85 * winterDays);
	const hayBales = Math.ceil(totalHayKg / 20);
	// Concentrated feed (хивэг, тэжээл): ~0.25 kg per sheep unit per day
	const feedKg = Math.round(sheepUnits * .22 * winterDays);
	const feedBags = Math.ceil(feedKg / 25);
	// Mineral salt (хужир, давс): ~0.02 kg per sheep unit per day
	const saltKg = Math.round(sheepUnits * .025 * winterDays);
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "advisory",
		className: "py-12 border-t border-slate-800 bg-slate-950 text-slate-100",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",
			children: [
				onBackToMap && /* @__PURE__ */ _jsxDEV("button", {
					onClick: onBackToMap,
					className: "text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 transition",
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
				/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-3",
							children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Малчдад зориулсан шуурхай зөвлөмж & бэлтгэл" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl sm:text-4xl font-black tracking-tight text-white",
							children: "Өвлийн хахир хүйтэн, зудыг хохирол багатай даван туулах нь"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-slate-400 text-sm sm:text-base mt-2",
							children: "Цаг уурын онц аюултай үзэгдэл, зудын эрсдэлийн үед мал сүрэг, гэр бүлээ хамгаалах практик зааварчилгаа ба өвс тэжээлийн тооцоолуур."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ _jsxDEV(Calculator, { className: "w-6 h-6 text-amber-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("h3", {
								className: "text-xl sm:text-2xl font-bold text-white",
								children: "Малчны өвс, тэжээлийн хэрэгцээ тооцоолуур"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs sm:text-sm text-slate-400 mt-1",
							children: [
								"Өөрийн малын тоо толгойг оруулж өвөл-хаврын ",
								winterDays,
								" хоногт шаардлагатай боодол өвс, хүчит тэжээл, хужрын хэмжээгээ бодож үзнэ үү."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-3 bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-slate-800",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-xs text-slate-300 font-medium",
									children: "Тэжээх хоног:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "range",
									min: "90",
									max: "180",
									step: "5",
									value: winterDays,
									onChange: (e) => setWinterDays(Number(e.target.value)),
									className: "w-28 sm:w-36 accent-amber-500 cursor-pointer"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-sm font-bold text-amber-400 min-w-[50px]",
									children: [winterDays, " хоног"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs text-slate-400 flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "🐎 Адуу" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 117,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-indigo-400",
											children: "бод"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 118,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										min: "0",
										value: horses,
										onChange: (e) => setHorses(Math.max(0, parseInt(e.target.value) || 0)),
										className: "w-full text-lg font-bold bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs text-slate-400 flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "🐂 Үхэр" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 131,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-red-400",
											children: "бод"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 132,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										min: "0",
										value: cattle,
										onChange: (e) => setCattle(Math.max(0, parseInt(e.target.value) || 0)),
										className: "w-full text-lg font-bold bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs text-slate-400 flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "🐪 Тэмээ" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 145,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-orange-400",
											children: "бод"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 146,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										min: "0",
										value: camels,
										onChange: (e) => setCamels(Math.max(0, parseInt(e.target.value) || 0)),
										className: "w-full text-lg font-bold bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs text-slate-400 flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "🐑 Хонь" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 159,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-sky-400",
											children: "бог"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 160,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 158,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										min: "0",
										value: sheep,
										onChange: (e) => setSheep(Math.max(0, parseInt(e.target.value) || 0)),
										className: "w-full text-lg font-bold bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 162,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs text-slate-400 flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "🐐 Ямаа" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-amber-400",
											children: "бог"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 174,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										min: "0",
										value: goats,
										onChange: (e) => setGoats(Math.max(0, parseInt(e.target.value) || 0)),
										className: "w-full text-lg font-bold bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 176,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 171,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-center",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-slate-400",
										children: "Нийт хонин толгойд шилжүүлснээр:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-lg font-black text-amber-400 mt-1",
										children: [Math.round(sheepUnits).toLocaleString(), " хонь"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/90 border border-amber-500/30",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs uppercase font-bold text-amber-400 tracking-wider",
								children: "Тооцоолсон нөөцийн хэмжээ"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "mt-3 space-y-3",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs font-semibold text-white",
											children: "Боодол өвс (20кг)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 202,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-[10px] text-slate-400",
											children: [
												"Нийт: ",
												(totalHayKg / 1e3).toFixed(1),
												" тонн"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 203,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-xl font-black text-emerald-400",
											children: [hayBales.toLocaleString(), " боодол"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 205,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs font-semibold text-white",
											children: "Хүчит тэжээл (25кг)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 210,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-[10px] text-slate-400",
											children: [
												"Хивэг, багсармал: ",
												(feedKg / 1e3).toFixed(1),
												" тонн"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 211,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 209,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-xl font-black text-amber-400",
											children: [feedBags.toLocaleString(), " шуудай"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 213,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 208,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs font-semibold text-white",
											children: "Хужир, шүү, давс"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-[10px] text-slate-400",
											children: "Эрдсийн дутагдлаас сэргийлэх"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 219,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 217,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-xl font-black text-sky-400",
											children: [saltKg.toLocaleString(), " кг"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 221,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 216,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 195,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: "* Нэмэлт тэжээл 40-50% хэмжээгээр тооцов." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 227,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-amber-300 font-semibold",
									children: "Улсын стандарт хэмжээ"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 228,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 226,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
					className: "text-2xl font-bold text-white mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV(Snowflake, { className: "w-5 h-5 text-blue-400" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 237,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Зудын төрлүүд ба мал маллах тактик" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 236,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-lg font-bold text-cyan-300 flex items-center gap-2",
										children: /* @__PURE__ */ _jsxDEV("span", { children: "❄️ Цагаан зуд" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 246,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 245,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold",
										children: "Цас > 25см"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 248,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 244,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed mb-3",
									children: "Хэт их цас орж өвсний толгойг далдалснаар мал өвсөө малтах чадваргүй болж турах үзэгдэл."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 252,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 space-y-1.5 border-t border-slate-800/80 pt-2.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-amber-400 font-medium",
											children: "Шийдэл:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 256,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Трактор, адуугаар цас зүсэж зам татах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 257,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Хонь, ямааг адууны мөрөөр бэлчээрлүүлэх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 258,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Хашаанд байнгын өвс тэжээл өгөх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 259,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 255,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 243,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-lg font-bold text-amber-300 flex items-center gap-2",
										children: /* @__PURE__ */ _jsxDEV("span", { children: "🧊 Төмөр зуд" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 267,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 266,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold",
										children: "Мөсөн бүрхүүл"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 269,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 265,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed mb-3",
									children: "Дулаарч цас хайлсны дараа огцом хүйтэрснээс газрын хөрсөнд зузаан мөс тогтож, малын хөл цус шүүрч өвсөндөө хүрч чадахгүй болох аюул."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 273,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 space-y-1.5 border-t border-slate-800/80 pt-2.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-amber-400 font-medium",
											children: "Шийдэл:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 277,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Мөсөн царцдасыг бул, төмөр чирэгчээр эвдэх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 278,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Хөл гэмтсэн малд антибиотик, халуун зутан" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 279,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Бэлчээрт огт гаргахгүй 100% тэжээх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 280,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 276,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 264,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 transition",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-lg font-bold text-red-300 flex items-center gap-2",
										children: /* @__PURE__ */ _jsxDEV("span", { children: "🌑 Хар зуд" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 288,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 287,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-semibold",
										children: "Цасгүй, усгүй"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 290,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 286,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed mb-3",
									children: "Цас орохгүй хэрнээ хэт хүйтэрч, булаг шанд, худаг хөлдөж, мал ундаагүй болж харангадах."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 294,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 space-y-1.5 border-t border-slate-800/80 pt-2.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-amber-400 font-medium",
											children: "Шийдэл:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 298,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Худаг усны дулаалгыг цаг алдалгүй хийх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 299,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Усыг халааж бүлээнээр өдөр бүр услах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 300,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Давс, хужир шингээсэн ус өгч шингэн нөхөх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 301,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 297,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 285,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-lg font-bold text-indigo-300 flex items-center gap-2",
										children: /* @__PURE__ */ _jsxDEV("span", { children: "🥶 Хүйтний зуд" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 309,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 308,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold",
										children: "-40°C-аас доош"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 311,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 307,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed mb-3",
									children: "Олон хоног дараалан -40°C -50°C хүрч хүйтэрснээр малын амьсгалын зам хөлдөж, хот хороондоо хорогдох аюул."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 315,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 space-y-1.5 border-t border-slate-800/80 pt-2.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-amber-400 font-medium",
											children: "Шийдэл:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 319,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Салхин талын нөмөр, эсгий хөшиг бэхлэх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 320,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Малын нөмрөг нэмэх, хуурай бууц дэвсэх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 321,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Илчлэг ихтэй өөх тос, шар буурцаг өгөх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 322,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 318,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 306,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 transition md:col-span-2",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-lg font-bold text-rose-300 flex items-center gap-2",
										children: /* @__PURE__ */ _jsxDEV("span", { children: "🌪️ Хавсарсан ба шуурганы зуд" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 330,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 329,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold",
										children: "Хүчтэй салхи 20+ м/с"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 332,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 328,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed mb-3",
									children: "Хүйтэн жавар, цасан шуурга, бэлчээрийн хомсдол зэрэг давхацсан үед мал олноор уруудаж, эзэнтэйгээ хээр осгох аюул маш өндөр байдаг."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 336,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-400 space-y-1.5 border-t border-slate-800/80 pt-2.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-amber-400 font-medium",
											children: "Онцгой анхаарах дүрэм:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 340,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Салхины хүч 15 м/с давбал малыг хээр бэлчээрт огт гаргахгүй байх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 341,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Төөрөхөөс сэргийлж гэр, хорооны хооронд чиглүүлэгч олс татах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 342,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: "• Хүн малын байршлын мэдээллийг сумын онцгой штабт өдөр бүр бүртгүүлэх" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 343,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 339,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 327,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 241,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-xl font-bold text-white mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-5 h-5 text-emerald-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 352,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Малчны өвлийн аюулгүй байдлын шалгах хуудас" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 353,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 351,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 358,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-white mb-0.5",
									children: "Харилцаа холбоо & Батарей"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 362,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "Гар утас, радио холбоо, зөөврийн зай (powerbank), генераторын шатахууныг 14 хоногийн нөөцтэй байлгах."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 361,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 357,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 368,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-white mb-0.5",
									children: "Эмийн анхны тусламжийн хайрцаг"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 372,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "Хүн болон малын түргэн тусламжийн антибиотик, халуун бууруулах, шархны тос, боолтыг бэлэн байлгах."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 373,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 371,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 367,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-white mb-0.5",
									children: "Хүнс ба түлшний нөөц"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 382,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "Өвөлжөөндөө гурил, будаа, мах, түлээ нүүрсний нөөцийг зам хаагдахаас өмнө 2 сараар базаах."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 383,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 381,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 377,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 388,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-white mb-0.5",
									children: "Шуурхай холбоо & Тусламж 105"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 392,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-400",
									children: "ОБЕГ болон сумын онцгой комиссын утасны дугаарыг гэрийн хананд тод тэмдэглэн үлдээх."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 393,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 391,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 387,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 356,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 350,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUssV0FBVTtrQkFBZixDQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE4RztRQUV4SDs7OztrQkFDTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQThCO1FBQXlCOzs7O2tCQUN0RSx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBaUI7UUFBK0Y7Ozs7Z0JBQzVIOzs7O2dCQUNGOzs7Ozs7T0FFTCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZixDQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE4RztRQUV4SDs7OztrQkFDTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQThCO1FBQWlDOzs7O2tCQUM5RSx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBaUI7UUFBeUY7Ozs7Z0JBQ3RIOzs7O2dCQUNGOzs7Ozs7TUFDRjs7Ozs7YUFDRjs7Ozs7O0dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkhlcmRlckFkdmlzb3J5U2VjdGlvbi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQWxlcnRUcmlhbmdsZSxcbiAgQ2FsY3VsYXRvcixcbiAgQ2hlY2tDaXJjbGUyLFxuICBDaGV2cm9uRG93bixcbiAgQ2hldnJvblVwLFxuICBIZWFydFB1bHNlLFxuICBQaG9uZUNhbGwsXG4gIFNoaWVsZENoZWNrLFxuICBTbm93Zmxha2UsXG4gIFN1bixcbiAgVHJ1Y2ssXG4gIFdpbmQsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBIZXJkZXJBZHZpc29yeVNlY3Rpb25Qcm9wcyB7XG4gIG9uQmFja1RvTWFwPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEhlcmRlckFkdmlzb3J5U2VjdGlvbjogUmVhY3QuRkM8SGVyZGVyQWR2aXNvcnlTZWN0aW9uUHJvcHM+ID0gKHsgb25CYWNrVG9NYXAgfSkgPT4ge1xuICAvLyBGZWVkIENhbGN1bGF0b3IgU3RhdGVcbiAgY29uc3QgW2hvcnNlcywgc2V0SG9yc2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMzApO1xuICBjb25zdCBbY2F0dGxlLCBzZXRDYXR0bGVdID0gdXNlU3RhdGU8bnVtYmVyPigyNSk7XG4gIGNvbnN0IFtjYW1lbHMsIHNldENhbWVsc10gPSB1c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbc2hlZXAsIHNldFNoZWVwXSA9IHVzZVN0YXRlPG51bWJlcj4oMjUwKTtcbiAgY29uc3QgW2dvYXRzLCBzZXRHb2F0c10gPSB1c2VTdGF0ZTxudW1iZXI+KDE4MCk7XG4gIGNvbnN0IFt3aW50ZXJEYXlzLCBzZXRXaW50ZXJEYXlzXSA9IHVzZVN0YXRlPG51bWJlcj4oMTM1KTsgLy8gc3RhbmRhcmQgd2ludGVyLXNwcmluZyBkdXJhdGlvblxuXG4gIC8vIEV4cGFuc2lvbiB0b2dnbGVzXG4gIGNvbnN0IFtleHBhbmRlZER6dWRUeXBlLCBzZXRFeHBhbmRlZER6dWRUeXBlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KCd3aGl0ZScpO1xuXG4gIC8vIFN0YW5kYXJkIFpvb3RlY2huaWNhbCBGZWVkaW5nIG5vcm1zIGluIE1vbmdvbGlhOlxuICAvLyAxIFNoZWVwIHVuaXQgKNCl0L7QvdGMINGC0L7Qu9Cz0L7QuSk6XG4gIC8vIDEgQ2FtZWwgPSA1LjAgc2hlZXAgdW5pdHNcbiAgLy8gMSBIb3JzZSA9IDYuMCBzaGVlcCB1bml0cyAoZ3JhemVzIG1vcmUgYnV0IHN1cHBsZW1lbnRhbCBmZWVkaW5nIG5lZWRlZCBkdXJpbmcgaGVhdnkgc25vdylcbiAgLy8gMSBDYXR0bGUgPSA2LjAgc2hlZXAgdW5pdHNcbiAgLy8gMSBTaGVlcCA9IDEuMCBzaGVlcCB1bml0XG4gIC8vIDEgR29hdCA9IDAuOSBzaGVlcCB1bml0XG4gIGNvbnN0IHNoZWVwVW5pdHMgPVxuICAgIGhvcnNlcyAqIDYuMCArIGNhdHRsZSAqIDYuMCArIGNhbWVscyAqIDUuMCArIHNoZWVwICogMS4wICsgZ29hdHMgKiAwLjk7XG5cbiAgLy8gU3VwcGxlbWVudGFyeSB3aW50ZXIgZmVlZGluZyBzdGFuZGFyZDogfjEuNSAtIDIuMCBrZyBvZiBoYXkgcGVyIHNoZWVwIHVuaXQgcGVyIGRheSBkdXJpbmcgaGFyc2ggY29uZGl0aW9ucyxcbiAgLy8gb3IgYXNzdW1pbmcgNjAlIHBhc3R1cmUgZ3JhemluZyBhbmQgNDAlIHN1cHBsZW1lbnRhbCBoYXkvZmVlZCBpbiB3aW50ZXJpbmc6XG4gIC8vIEhheTogfjAuOCBrZy9zaGVlcC11bml0L2RheSAqIHdpbnRlckRheXMgLT4gMSBiYWxlIGlzIH4yMGtnXG4gIGNvbnN0IHRvdGFsSGF5S2cgPSBNYXRoLnJvdW5kKHNoZWVwVW5pdHMgKiAwLjg1ICogd2ludGVyRGF5cyk7XG4gIGNvbnN0IGhheUJhbGVzID0gTWF0aC5jZWlsKHRvdGFsSGF5S2cgLyAyMCk7XG5cbiAgLy8gQ29uY2VudHJhdGVkIGZlZWQgKNGF0LjQstGN0LMsINGC0Y3QttGN0Y3Quyk6IH4wLjI1IGtnIHBlciBzaGVlcCB1bml0IHBlciBkYXlcbiAgY29uc3QgZmVlZEtnID0gTWF0aC5yb3VuZChzaGVlcFVuaXRzICogMC4yMiAqIHdpbnRlckRheXMpO1xuICBjb25zdCBmZWVkQmFncyA9IE1hdGguY2VpbChmZWVkS2cgLyAyNSk7IC8vIDI1a2cgYmFnc1xuXG4gIC8vIE1pbmVyYWwgc2FsdCAo0YXRg9C20LjRgCwg0LTQsNCy0YEpOiB+MC4wMiBrZyBwZXIgc2hlZXAgdW5pdCBwZXIgZGF5XG4gIGNvbnN0IHNhbHRLZyA9IE1hdGgucm91bmQoc2hlZXBVbml0cyAqIDAuMDI1ICogd2ludGVyRGF5cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImFkdmlzb3J5XCIgY2xhc3NOYW1lPVwicHktMTIgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggc3BhY2UteS0xMlwiPlxuICAgICAgICB7b25CYWNrVG9NYXAgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQmFja1RvTWFwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIGhvdmVyOnRleHQtYmx1ZS0zMDAgZm9udC1zZW1pYm9sZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj7ihpAg0JPQsNC30YDRi9C9INC30YPRgNCw0LMg0YDRg9GDINCx0YPRhtCw0YU8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiBTZWN0aW9uIEhlYWRpbmcgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1zZW1pYm9sZCBiZy1yZWQtNTAwLzEwIHRleHQtcmVkLTQwMCBib3JkZXIgYm9yZGVyLXJlZC01MDAvMjAgbWItM1wiPlxuICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgPHNwYW4+0JzQsNC70YfQtNCw0LQg0LfQvtGA0LjRg9C70YHQsNC9INGI0YPRg9GA0YXQsNC5INC306nQstC706nQvNC2ICYg0LHRjdC70YLQs9GN0Ls8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgINOo0LLQu9C40LnQvSDRhdCw0YXQuNGAINGF0q/QudGC0Y3QvSwg0LfRg9C00YvQsyDRhdC+0YXQuNGA0L7QuyDQsdCw0LPQsNGC0LDQuSDQtNCw0LLQsNC9INGC0YPRg9C70LDRhSDQvdGMXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZSBtdC0yXCI+XG4gICAgICAgICAgICDQptCw0LMg0YPRg9GA0YvQvSDQvtC90YYg0LDRjtGD0LvRgtCw0Lkg0q/Qt9GN0LPQtNGN0LssINC30YPQtNGL0L0g0Y3RgNGB0LTRjdC70LjQudC9INKv0LXQtCDQvNCw0Lsg0YHSr9GA0Y3Qsywg0LPRjdGAINCx0q/Qu9GN0Y0g0YXQsNC80LPQsNCw0LvQsNGFINC/0YDQsNC60YLQuNC6INC30LDQsNCy0LDRgNGH0LjQu9Cz0LDQsCDQsdCwINOp0LLRgSDRgtGN0LbRjdGN0LvQuNC50L0g0YLQvtC+0YbQvtC+0LvRg9GD0YAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRkVFRCBDQUxDVUxBVE9SIFRPT0wgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zbGF0ZS05MDAgdmlhLXNsYXRlLTkwMCB0by1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgcC02IHNtOnAtOCBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgcGItNiBib3JkZXItYiBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPENhbGN1bGF0b3IgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgINCc0LDQu9GH0L3RiyDTqdCy0YEsINGC0Y3QttGN0Y3Qu9C40LnQvSDRhdGN0YDRjdCz0YbRjdGNINGC0L7QvtGG0L7QvtC70YPRg9GAXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LXNsYXRlLTQwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAg06jTqdGA0LjQudC9INC80LDQu9GL0L0g0YLQvtC+INGC0L7Qu9Cz0L7QudCzINC+0YDRg9GD0LvQtiDTqdCy06nQuy3RhdCw0LLRgNGL0L0ge3dpbnRlckRheXN9INGF0L7QvdC+0LPRgiDRiNCw0LDRgNC00LvQsNCz0LDRgtCw0Lkg0LHQvtC+0LTQvtC7INOp0LLRgSwg0YXSr9GH0LjRgiDRgtGN0LbRjdGN0LssINGF0YPQttGA0YvQvSDRhdGN0LzQttGN0Y3Qs9GN0Y0g0LHQvtC00L7QtiDSr9C30L3RjSDSr9KvLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFdpbnRlciBEdXJhdGlvbiBTbGlkZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJnLXNsYXRlLTk1MC84MCBweC00IHB5LTIuNSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIGZvbnQtbWVkaXVtXCI+0KLRjdC20Y3RjdGFINGF0L7QvdC+0LM6PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjkwXCJcbiAgICAgICAgICAgICAgICBtYXg9XCIxODBcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCI1XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17d2ludGVyRGF5c31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFdpbnRlckRheXMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yOCBzbTp3LTM2IGFjY2VudC1hbWJlci01MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWFtYmVyLTQwMCBtaW4tdy1bNTBweF1cIj57d2ludGVyRGF5c30g0YXQvtC90L7Qszwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtOCBwdC02XCI+XG4gICAgICAgICAgICB7LyogSW5wdXQgQ29sdW1ucyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNyBncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGdhcC0zLjVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05NTAvNjAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7wn5COINCQ0LTRg9GDPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1pbmRpZ28tNDAwXCI+0LHQvtC0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2hvcnNlc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SG9yc2VzKE1hdGgubWF4KDAsIHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwKSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBmb250LWJvbGQgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHJvdW5kZWQteGwgcHgtMyBweS0xLjUgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYW1iZXItNTAwLzUwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTk1MC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkIIg0q7RhdGN0YA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXJlZC00MDBcIj7QsdC+0LQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2F0dGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDYXR0bGUoTWF0aC5tYXgoMCwgcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDApKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcm91bmRlZC14bCBweC0zIHB5LTEuNSB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1hbWJlci01MDAvNTBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC0yeGwgYmctc2xhdGUtOTUwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+8J+QqiDQotGN0LzRjdGNPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1vcmFuZ2UtNDAwXCI+0LHQvtC0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhbWVsc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2FtZWxzKE1hdGgubWF4KDAsIHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwKSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBmb250LWJvbGQgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHJvdW5kZWQteGwgcHgtMyBweS0xLjUgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYW1iZXItNTAwLzUwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTk1MC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkJEg0KXQvtC90Yw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNreS00MDBcIj7QsdC+0LM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2hlZXB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNoZWVwKE1hdGgubWF4KDAsIHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwKSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBmb250LWJvbGQgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHJvdW5kZWQteGwgcHgtMyBweS0xLjUgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYW1iZXItNTAwLzUwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTk1MC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkJAg0K/QvNCw0LA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWFtYmVyLTQwMFwiPtCx0L7Qszwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtnb2F0c31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R29hdHMoTWF0aC5tYXgoMCwgcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDApKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcm91bmRlZC14bCBweC0zIHB5LTEuNSB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1hbWJlci01MDAvNTBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC0yeGwgYmctc2xhdGUtOTUwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwXCI+0J3QuNC50YIg0YXQvtC90LjQvSDRgtC+0LvQs9C+0LnQtCDRiNC40LvQttKv0q/Qu9GB0L3RjdGN0YA6PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoc2hlZXBVbml0cykudG9Mb2NhbGVTdHJpbmcoKX0g0YXQvtC90YxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFJlc3VsdHMgQ29sdW1uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHAtNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05NTAvOTAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1hbWJlci00MDAgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgINCi0L7QvtGG0L7QvtC70YHQvtC9INC906nTqdGG0LjQudC9INGF0Y3QvNC20Y3RjVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTMgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+0JHQvtC+0LTQvtC7INOp0LLRgSAoMjDQutCzKTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDBcIj7QndC40LnRgjogeyh0b3RhbEhheUtnIC8gMTAwMCkudG9GaXhlZCgxKX0g0YLQvtC90L08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJsYWNrIHRleHQtZW1lcmFsZC00MDBcIj57aGF5QmFsZXMudG9Mb2NhbGVTdHJpbmcoKX0g0LHQvtC+0LTQvtC7PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0zIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPtCl0q/Rh9C40YIg0YLRjdC20Y3RjdC7ICgyNdC60LMpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPtCl0LjQstGN0LMsINCx0LDQs9GB0LDRgNC80LDQuzogeyhmZWVkS2cgLyAxMDAwKS50b0ZpeGVkKDEpfSDRgtC+0L3QvTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDBcIj57ZmVlZEJhZ3MudG9Mb2NhbGVTdHJpbmcoKX0g0YjRg9GD0LTQsNC5PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0zIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPtCl0YPQttC40YAsINGI0q/Srywg0LTQsNCy0YE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc2xhdGUtNDAwXCI+0K3RgNC00YHQuNC50L0g0LTRg9GC0LDQs9C00LvQsNCw0YEg0YHRjdGA0LPQuNC50LvRjdGFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ibGFjayB0ZXh0LXNreS00MDBcIj57c2FsdEtnLnRvTG9jYWxlU3RyaW5nKCl9INC60LM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcHQtMyBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiog0J3RjdC80Y3Qu9GCINGC0Y3QttGN0Y3QuyA0MC01MCUg0YXRjdC80LbRjdGN0LPRjdGN0YAg0YLQvtC+0YbQvtCyLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTMwMCBmb250LXNlbWlib2xkXCI+0KPQu9GB0YvQvSDRgdGC0LDQvdC00LDRgNGCINGF0Y3QvNC20Y3RjTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDUgVFlQRVMgT0YgRFpVRCAmIFRBQ1RJQ1MgKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxTbm93Zmxha2UgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWJsdWUtNDAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPtCX0YPQtNGL0L0g0YLTqdGA0LvSr9Kv0LQg0LHQsCDQvNCw0Lsg0LzQsNC70LvQsNGFINGC0LDQutGC0LjQujwvc3Bhbj5cbiAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICB7LyogV2hpdGUgRHp1ZCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMC84MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAvNTAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1jeWFuLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+4p2E77iPINCm0LDQs9Cw0LDQvSDQt9GD0LQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQgYmctY3lhbi01MDAvMjAgdGV4dC1jeWFuLTMwMCBib3JkZXIgYm9yZGVyLWN5YW4tNTAwLzMwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgINCm0LDRgSAmZ3Q7IDI10YHQvFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICDQpdGN0YIg0LjRhSDRhtCw0YEg0L7RgNC2INOp0LLRgdC90LjQuSDRgtC+0LvQs9C+0LnQsyDQtNCw0LvQtNCw0LvRgdC90LDQsNGAINC80LDQuyDTqdCy0YHTqdOpINC80LDQu9GC0LDRhSDRh9Cw0LTQstCw0YDQs9Kv0Lkg0LHQvtC70LYg0YLRg9GA0LDRhSDSr9C30Y3Qs9C00Y3Quy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIHNwYWNlLXktMS41IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODAgcHQtMi41XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMCBmb250LW1lZGl1bVwiPtCo0LjQudC00Y3Quzo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQotGA0LDQutGC0L7RgCwg0LDQtNGD0YPQs9Cw0LDRgCDRhtCw0YEg0LfSr9GB0Y3QtiDQt9Cw0Lwg0YLQsNGC0LDRhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+4oCiINCl0L7QvdGMLCDRj9C80LDQsNCzINCw0LTRg9GD0L3RiyDQvNOp0YDTqdOp0YAg0LHRjdC70YfRjdGN0YDQu9Kv0q/Qu9GN0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQpdCw0YjQsNCw0L3QtCDQsdCw0LnQvdCz0YvQvSDTqdCy0YEg0YLRjdC20Y3RjdC7INOp0LPTqdGFPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJcm9uIC8gSWNlIER6dWQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05MDAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgaG92ZXI6Ym9yZGVyLWFtYmVyLTUwMC81MCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWFtYmVyLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+8J+niiDQotOp0LzTqdGAINC30YPQtDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gcHgtMiBweS0wLjUgcm91bmRlZCBiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci0zMDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAg0JzTqdGB06nQvSDQsdKv0YDRhdKv0q/Qu1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICDQlNGD0LvQsNCw0YDRhyDRhtCw0YEg0YXQsNC50LvRgdC90Ysg0LTQsNGA0LDQsCDQvtCz0YbQvtC8INGF0q/QudGC0Y3RgNGB0L3RjdGN0YEg0LPQsNC30YDRi9C9INGF06nRgNGB06nQvdC0INC30YPQt9Cw0LDQvSDQvNOp0YEg0YLQvtCz0YLQvtC2LCDQvNCw0LvRi9C9INGF06nQuyDRhtGD0YEg0YjSr9Kv0YDRhyDTqdCy0YHTqdC90LTTqdOpINGF0q/RgNGHINGH0LDQtNCw0YXQs9Kv0Lkg0LHQvtC70L7RhSDQsNGO0YPQuy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIHNwYWNlLXktMS41IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODAgcHQtMi41XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMCBmb250LW1lZGl1bVwiPtCo0LjQudC00Y3Quzo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQnNOp0YHTqdC9INGG0LDRgNGG0LTQsNGB0YvQsyDQsdGD0LssINGC06nQvNOp0YAg0YfQuNGA0Y3Qs9GH0Y3RjdGAINGN0LLQtNGN0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQpdOp0Lsg0LPRjdC80YLRgdGN0L0g0LzQsNC70LQg0LDQvdGC0LjQsdC40L7RgtC40LosINGF0LDQu9GD0YPQvSDQt9GD0YLQsNC9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7igKIg0JHRjdC70YfRjdGN0YDRgiDQvtCz0YIg0LPQsNGA0LPQsNGF0LPSr9C5IDEwMCUg0YLRjdC20Y3RjdGFPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBCbGFjayBEenVkICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctc2xhdGUtOTAwLzgwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGhvdmVyOmJvcmRlci1yZWQtNTAwLzUwIHRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtcmVkLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+8J+MkSDQpdCw0YAg0LfRg9C0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBweC0yIHB5LTAuNSByb3VuZGVkIGJnLXJlZC01MDAvMjAgdGV4dC1yZWQtMzAwIGJvcmRlciBib3JkZXItcmVkLTUwMC8zMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICDQptCw0YHQs9Kv0LksINGD0YHQs9Kv0LlcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIGxlYWRpbmctcmVsYXhlZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAg0KbQsNGBINC+0YDQvtGF0LPSr9C5INGF0Y3RgNC90Y3RjSDRhdGN0YIg0YXSr9C50YLRjdGA0YcsINCx0YPQu9Cw0LMg0YjQsNC90LQsINGF0YPQtNCw0LMg0YXTqdC70LTTqdC2LCDQvNCw0Lsg0YPQvdC00LDQsNCz0q/QuSDQsdC+0LvQtiDRhdCw0YDQsNC90LPQsNC00LDRhS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIHNwYWNlLXktMS41IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODAgcHQtMi41XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMCBmb250LW1lZGl1bVwiPtCo0LjQudC00Y3Quzo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQpdGD0LTQsNCzINGD0YHQvdGLINC00YPQu9Cw0LDQu9Cz0YvQsyDRhtCw0LMg0LDQu9C00LDQu9Cz0q/QuSDRhdC40LnRhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+4oCiINCj0YHRi9CzINGF0LDQu9Cw0LDQtiDQsdKv0LvRjdGN0L3RjdGN0YAg06nQtNOp0YAg0LHSr9GAINGD0YHQu9Cw0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQlNCw0LLRgSwg0YXRg9C20LjRgCDRiNC40L3Qs9GN0Y3RgdGN0L0g0YPRgSDTqdCz0Ycg0YjQuNC90LPRjdC9INC906nRhdOp0YU8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbGQgRHp1ZCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTkwMC84MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBob3Zlcjpib3JkZXItaW5kaWdvLTUwMC81MCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWluZGlnby0zMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPvCfpbYg0KXSr9C50YLQvdC40Lkg0LfRg9C0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBweC0yIHB5LTAuNSByb3VuZGVkIGJnLWluZGlnby01MDAvMjAgdGV4dC1pbmRpZ28tMzAwIGJvcmRlciBib3JkZXItaW5kaWdvLTUwMC8zMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAtNDDCsEMt0LDQsNGBINC00L7QvtGIXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBsZWFkaW5nLXJlbGF4ZWQgbWItM1wiPlxuICAgICAgICAgICAgICAgINCe0LvQvtC9INGF0L7QvdC+0LMg0LTQsNGA0LDQsNC70LDQvSAtNDDCsEMgLTUwwrBDINGF0q/RgNGHINGF0q/QudGC0Y3RgNGB0L3RjdGN0YAg0LzQsNC70YvQvSDQsNC80YzRgdCz0LDQu9GL0L0g0LfQsNC8INGF06nQu9C006nQtiwg0YXQvtGCINGF0L7RgNC+0L7QvdC00L7QviDRhdC+0YDQvtCz0LTQvtGFINCw0Y7Rg9C7LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDAgc3BhY2UteS0xLjUgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMC84MCBwdC0yLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYW1iZXItNDAwIGZvbnQtbWVkaXVtXCI+0KjQuNC50LTRjdC7OjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+4oCiINCh0LDQu9GF0LjQvSDRgtCw0LvRi9C9INC906nQvNOp0YAsINGN0YHQs9C40Lkg0YXTqdGI0LjQsyDQsdGN0YXQu9GN0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQnNCw0LvRi9C9INC906nQvNGA06nQsyDQvdGN0LzRjdGFLCDRhdGD0YPRgNCw0Lkg0LHRg9GD0YYg0LTRjdCy0YHRjdGFPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7igKIg0JjQu9GH0LvRjdCzINC40YXRgtGN0Lkg06nTqdGFINGC0L7RgSwg0YjQsNGAINCx0YPRg9GA0YbQsNCzINOp0LPTqdGFPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb21iaW5lZCBEenVkICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctc2xhdGUtOTAwLzgwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGhvdmVyOmJvcmRlci1yb3NlLTUwMC81MCB0cmFuc2l0aW9uIG1kOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtcm9zZS0zMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPvCfjKrvuI8g0KXQsNCy0YHQsNGA0YHQsNC9INCx0LAg0YjRg9GD0YDQs9Cw0L3RiyDQt9GD0LQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQgYmctcm9zZS01MDAvMjAgdGV4dC1yb3NlLTMwMCBib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzMwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgINCl0q/Rh9GC0Y3QuSDRgdCw0LvRhdC4IDIwKyDQvC/RgVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICDQpdKv0LnRgtGN0L0g0LbQsNCy0LDRgCwg0YbQsNGB0LDQvSDRiNGD0YPRgNCz0LAsINCx0Y3Qu9GH0Y3RjdGA0LjQudC9INGF0L7QvNGB0LTQvtC7INC30Y3RgNGN0LMg0LTQsNCy0YXQsNGG0YHQsNC9INKv0LXQtCDQvNCw0Lsg0L7Qu9C90L7QvtGAINGD0YDRg9GD0LTQsNC2LCDRjdC30Y3QvdGC0Y3QudCz0Y3RjSDRhdGN0Y3RgCDQvtGB0LPQvtGFINCw0Y7Rg9C7INC80LDRiCDTqdC90LTTqdGAINCx0LDQudC00LDQsy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIHNwYWNlLXktMS41IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODAgcHQtMi41XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMCBmb250LW1lZGl1bVwiPtCe0L3RhtCz0L7QuSDQsNC90YXQsNCw0YDQsNGFINC00q/RgNGN0Lw6PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj7igKIg0KHQsNC70YXQuNC90Ysg0YXSr9GHIDE1INC8L9GBINC00LDQstCx0LDQuyDQvNCw0LvRi9CzINGF0Y3RjdGAINCx0Y3Qu9GH0Y3RjdGA0YIg0L7Qs9GCINCz0LDRgNCz0LDRhdCz0q/QuSDQsdCw0LnRhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+4oCiINCi06nTqdGA06nRhdOp06nRgSDRgdGN0YDQs9C40LnQu9C2INCz0Y3RgCwg0YXQvtGA0L7QvtC90Ysg0YXQvtC+0YDQvtC90LQg0YfQuNCz0LvSr9Kv0LvRjdCz0Ycg0L7Qu9GBINGC0LDRgtCw0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PuKAoiDQpdKv0L0g0LzQsNC70YvQvSDQsdCw0LnRgNGI0LvRi9C9INC80Y3QtNGN0Y3Qu9C70LjQudCzINGB0YPQvNGL0L0g0L7QvdGG0LPQvtC5INGI0YLQsNCx0YIg06nQtNOp0YAg0LHSr9GAINCx0q/RgNGC0LPSr9Kv0LvRjdGFPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBXSU5URVIgUFJFUEFSRURORVNTIENIRUNLTElTVCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc206cC04IHJvdW5kZWQtM3hsIGJnLXNsYXRlLTkwMC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPtCc0LDQu9GH0L3RiyDTqdCy0LvQuNC50L0g0LDRjtGD0LvQs9Kv0Lkg0LHQsNC50LTQu9GL0L0g0YjQsNC70LPQsNGFINGF0YPRg9C00LDRgTwvc3Bhbj5cbiAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00IHRleHQteHMgdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMyBwLTMuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNTAwLzIwIHRleHQtZW1lcmFsZC00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAg4pyTXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMC41XCI+0KXQsNGA0LjQu9GG0LDQsCDRhdC+0LvQsdC+0L4gJiDQkdCw0YLQsNGA0LXQuTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7Qk9Cw0YAg0YPRgtCw0YEsINGA0LDQtNC40L4g0YXQvtC70LHQvtC+LCDQt9Op06nQstGA0LjQudC9INC30LDQuSAocG93ZXJiYW5rKSwg0LPQtdC90LXRgNCw0YLQvtGA0YvQvSDRiNCw0YLQsNGF0YPRg9C90YvQsyAxNCDRhdC+0L3QvtCz0LjQudC9INC906nTqdGG0YLRjdC5INCx0LDQudC70LPQsNGFLjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgcC0zLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvNjAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTUwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIOKck1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTAuNVwiPtCt0LzQuNC50L0g0LDQvdGF0L3RiyDRgtGD0YHQu9Cw0LzQttC40LnQvSDRhdCw0LnRgNGG0LDQszwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj7QpdKv0L0g0LHQvtC70L7QvSDQvNCw0LvRi9C9INGC0q/RgNCz0Y3QvSDRgtGD0YHQu9Cw0LzQttC40LnQvSDQsNC90YLQuNCx0LjQvtGC0LjQuiwg0YXQsNC70YPRg9C9INCx0YPRg9GA0YPRg9C70LDRhSwg0YjQsNGA0YXQvdGLINGC0L7RgSwg0LHQvtC+0LvRgtGL0LMg0LHRjdC70Y3QvSDQsdCw0LnQu9Cz0LDRhS48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zIHAtMy41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICDinJNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0wLjVcIj7QpdKv0L3RgSDQsdCwINGC0q/Qu9GI0L3QuNC5INC906nTqdGGPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtOo0LLTqdC70LbTqdOp0L3QtNOp06kg0LPRg9GA0LjQuywg0LHRg9C00LDQsCwg0LzQsNGFLCDRgtKv0LvRjdGNINC90q/Sr9GA0YHQvdC40Lkg0L3TqdOp0YbQuNC50LMg0LfQsNC8INGF0LDQsNCz0LTQsNGF0LDQsNGBINOp0LzQvdOpIDIg0YHQsNGA0LDQsNGAINCx0LDQt9Cw0LDRhS48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zIHAtMy41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICDinJNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0wLjVcIj7QqNGD0YPRgNGF0LDQuSDRhdC+0LvQsdC+0L4gJiDQotGD0YHQu9Cw0LzQtiAxMDU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0J7QkdCV0JMg0LHQvtC70L7QvSDRgdGD0LzRi9C9INC+0L3RhtCz0L7QuSDQutC+0LzQuNGB0YHRi9C9INGD0YLQsNGB0L3RiyDQtNGD0LPQsNCw0YDRi9CzINCz0Y3RgNC40LnQvSDRhdCw0L3QsNC90LQg0YLQvtC0INGC0Y3QvNC00Y3Qs9C70Y3QvSDSr9C70LTRjdGN0YUuPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdfQ==