const React = __vite__cjsImport0_react; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport3_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import { fetchAimagWeather } from "/src/services/weatherService.ts";
import { AlertOctagon, AlertTriangle, CloudSnow, Droplets, PhoneCall, ShieldAlert, Snowflake, Thermometer, Wind, X } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/components/AimagDetailDrawer.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export const AimagDetailDrawer = ({ aimag, onClose }) => {
	const [weather, setWeather] = useState(null);
	const [loadingWeather, setLoadingWeather] = useState(false);
	const [activeTab, setActiveTab] = useState("weather");
	useEffect(() => {
		if (!aimag) return;
		let isMounted = true;
		setLoadingWeather(true);
		fetchAimagWeather(aimag.centerCoordinates[0], aimag.centerCoordinates[1], aimag.id).then((data) => {
			if (isMounted) {
				setWeather(data);
				setLoadingWeather(false);
			}
		}).catch((err) => {
			console.error("Weather error:", err);
			if (isMounted) setLoadingWeather(false);
		});
		return () => {
			isMounted = false;
		};
	}, [aimag]);
	if (!aimag) return null;
	const totalAnimals = aimag.livestock.total;
	const sheepPct = (aimag.livestock.sheep / totalAnimals * 100).toFixed(1);
	const goatsPct = (aimag.livestock.goats / totalAnimals * 100).toFixed(1);
	const cattlePct = (aimag.livestock.cattle / totalAnimals * 100).toFixed(1);
	const horsesPct = (aimag.livestock.horses / totalAnimals * 100).toFixed(1);
	const camelsPct = (aimag.livestock.camels / totalAnimals * 100).toFixed(1);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl flex flex-col text-slate-100 animate-in slide-in-from-right duration-300",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "p-5 border-b border-slate-800/80 bg-slate-950/60 flex items-start justify-between",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-2xl font-black text-white tracking-tight",
						children: [aimag.nameMn, " аймаг"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: `text-xs px-2.5 py-0.5 rounded-full font-bold border ${aimag.dzudRisk.level === "critical" ? "bg-red-500/20 text-red-300 border-red-500/40" : aimag.dzudRisk.level === "high" ? "bg-orange-500/20 text-orange-300 border-orange-500/40" : aimag.dzudRisk.level === "moderate" ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"}`,
						children: aimag.dzudRisk.levelLabel
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "text-xs text-slate-400 mt-1 flex items-center gap-2",
					children: [
						/* @__PURE__ */ _jsxDEV("span", { children: ["Төв: ", aimag.centerMn] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: "•" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: aimag.region }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: "•" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: [aimag.dzudRisk.totalSoums, " сумтай"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					onClick: onClose,
					className: "p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",
					children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			aimag.dzudRisk.criticalWarning && /* @__PURE__ */ _jsxDEV("div", {
				className: "px-5 py-3 bg-red-950/60 border-b border-red-800/50 flex items-center gap-3 text-red-200 text-xs font-medium",
				children: [/* @__PURE__ */ _jsxDEV(AlertOctagon, { className: "w-5 h-5 text-red-400 shrink-0 animate-pulse" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("span", { children: aimag.dzudRisk.criticalWarning }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex border-b border-slate-800 bg-slate-900 text-xs font-semibold",
				children: [
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveTab("weather"),
						className: `flex-1 py-3 px-2 border-b-2 transition flex items-center justify-center gap-1.5 ${activeTab === "weather" ? "border-blue-500 text-blue-400 bg-blue-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
						children: [/* @__PURE__ */ _jsxDEV(CloudSnow, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Цаг агаар (API)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveTab("livestock"),
						className: `flex-1 py-3 px-2 border-b-2 transition flex items-center justify-center gap-1.5 ${activeTab === "livestock" ? "border-amber-500 text-amber-400 bg-amber-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
						children: /* @__PURE__ */ _jsxDEV("span", { children: "🐎 Малын тоо" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveTab("pasture"),
						className: `flex-1 py-3 px-2 border-b-2 transition flex items-center justify-center gap-1.5 ${activeTab === "pasture" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
						children: [/* @__PURE__ */ _jsxDEV(Wind, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Бэлчээрийн даац" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveTab("advisory"),
						className: `flex-1 py-3 px-2 border-b-2 transition flex items-center justify-center gap-1.5 ${activeTab === "advisory" ? "border-red-500 text-red-400 bg-red-500/10" : "border-transparent text-slate-400 hover:text-slate-200"}`,
						children: [/* @__PURE__ */ _jsxDEV(ShieldAlert, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Малчны зөвлөмж" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex-1 overflow-y-auto p-5 space-y-6",
				children: [
					activeTab === "weather" && /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-5",
						children: loadingWeather ? /* @__PURE__ */ _jsxDEV("div", {
							className: "p-8 text-center text-slate-400 space-y-2",
							children: [/* @__PURE__ */ _jsxDEV(Snowflake, { className: "w-8 h-8 animate-spin mx-auto text-blue-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-sm",
								children: "Цаг уурын шууд мэдээллийг татаж байна..."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 15
						}, this) : weather ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-blue-900/40 shadow-xl relative overflow-hidden",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-xs uppercase tracking-wider text-blue-300 font-semibold",
											children: [
												"Бодит цагийн цаг агаар (",
												weather.current.updatedAt,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 169,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-4xl font-black text-white mt-1",
											children: [weather.current.temperature > 0 ? `+${weather.current.temperature}` : weather.current.temperature, "°C"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 172,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-sm font-medium text-blue-200 mt-1",
											children: weather.current.weatherText
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 175,
											columnNumber: 23
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 168,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-right",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 inline-block",
											children: /* @__PURE__ */ _jsxDEV(Snowflake, { className: "w-10 h-10 text-blue-400" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 179,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 178,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs text-slate-400 mt-2",
											children: ["Мэдрэгдэх: ", /* @__PURE__ */ _jsxDEV("span", {
												className: "font-bold text-white",
												children: [weather.current.feelsLike, "°C"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 182,
												columnNumber: 36
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 177,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-slate-800 text-xs",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "p-2.5 rounded-xl bg-slate-950/60 border border-slate-800",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-slate-400 flex items-center gap-1",
												children: [/* @__PURE__ */ _jsxDEV(Wind, { className: "w-3.5 h-3.5 text-blue-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 191,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Салхи" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 192,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 190,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-white mt-1",
												children: [weather.current.windSpeed, " м/с"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 194,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 189,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "p-2.5 rounded-xl bg-slate-950/60 border border-slate-800",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-slate-400 flex items-center gap-1",
												children: [/* @__PURE__ */ _jsxDEV(Droplets, { className: "w-3.5 h-3.5 text-blue-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 199,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Чийгшил" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 200,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 198,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-white mt-1",
												children: [weather.current.humidity, "%"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 202,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 197,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "p-2.5 rounded-xl bg-slate-950/60 border border-slate-800",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-slate-400 flex items-center gap-1",
												children: [/* @__PURE__ */ _jsxDEV(CloudSnow, { className: "w-3.5 h-3.5 text-cyan-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 207,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Орох цас" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 208,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 206,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-cyan-300 mt-1",
												children: [weather.current.snowfall, " мм"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 210,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 205,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 19
								}, this),
								weather.current.isExtremeCold && /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-4 p-2.5 rounded-xl bg-red-950/70 border border-red-800/60 text-xs text-red-200 flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV(Thermometer, { className: "w-4 h-4 text-red-400 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Хэт хүйтрэлтийн аюул:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 29
									}, this), " Температур -30°C-аас доош байна. Мал амьсгал боогдох эрсдэлтэй."] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 216,
									columnNumber: 21
								}, this),
								weather.current.isBlizzardRisk && /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2.5 p-2.5 rounded-xl bg-amber-950/70 border border-amber-800/60 text-xs text-amber-200 flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-4 h-4 text-amber-400 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Цасан шуурганы эрсдэл:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 29
									}, this), " Салхины хүч ихтэй, цас орж байна. Хээр бэлчээрлэхгүй байх."] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 21
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",
							children: "Ойрын 7 хоногийн урьдчилсан мэдээ"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 232,
							columnNumber: 19
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
							children: weather.forecast.map((day, idx) => /* @__PURE__ */ _jsxDEV("div", {
								className: "p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between text-xs text-slate-300 mb-1",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-white",
											children: day.dayName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 242,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-slate-400",
											children: day.date.slice(5)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 243,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 241,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-blue-300 font-medium truncate mb-2",
										children: day.weatherText
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 245,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between text-xs pt-1 border-t border-slate-800/80",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-red-400 font-bold",
											children: [day.tempMax, "°"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 249,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-blue-400 font-bold",
											children: [day.tempMin, "°"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 250,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 248,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between text-[10px] text-slate-400 mt-1",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: [
											"Цас: ",
											day.snowfallSum,
											"мм"
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 253,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: [day.windSpeedMax, "м/с"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 254,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 252,
										columnNumber: 25
									}, this)
								]
							}, idx, true, {
								fileName: _jsxFileName,
								lineNumber: 237,
								columnNumber: 23
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 231,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 15
						}, this) : null
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 11
					}, this),
					activeTab === "livestock" && /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-800/40 flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs text-amber-300 font-semibold uppercase",
										children: "Нийт мал сүрэг"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 271,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-3xl font-black text-white mt-0.5",
										children: [(aimag.livestock.total / 1e6).toFixed(2), " сая"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 272,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-slate-400 mt-1 flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ _jsxDEV("span", { children: [
												"Нягтрал: ",
												aimag.livestock.densityPerSqKm,
												" толгой/км²"
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 276,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: "•" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 277,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: aimag.livestock.yearChangePercent < 0 ? "text-red-400" : "text-emerald-400",
												children: [
													"Өнгөрсөн оноос ",
													aimag.livestock.yearChangePercent,
													"%"
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 278,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 275,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 270,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-3xl",
									children: "🐎"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 283,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 269,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between text-xs text-slate-300 mb-2",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "font-bold",
									children: "Таван хошуу малын бүтэц"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 291,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-slate-400",
									children: [
										"Хонь ба ямаа: ",
										(Number(sheepPct) + Number(goatsPct)).toFixed(1),
										"%"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 292,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 290,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "h-4 w-full rounded-full overflow-hidden flex bg-slate-800",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										style: { width: `${sheepPct}%` },
										className: "bg-sky-400",
										title: `Хонь: ${sheepPct}%`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 297,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										style: { width: `${goatsPct}%` },
										className: "bg-amber-400",
										title: `Ямаа: ${goatsPct}%`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										style: { width: `${cattlePct}%` },
										className: "bg-red-500",
										title: `Үхэр: ${cattlePct}%`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 299,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										style: { width: `${horsesPct}%` },
										className: "bg-indigo-500",
										title: `Адуу: ${horsesPct}%`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 300,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										style: { width: `${camelsPct}%` },
										className: "bg-orange-600",
										title: `Тэмээ: ${camelsPct}%`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 301,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 296,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 289,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-2xl",
												children: "🐑"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 309,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-xs font-bold text-white",
												children: "Хонь"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 311,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-slate-400",
												children: [sheepPct, "% эзэлж байна"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 312,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 310,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 308,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-right",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-sm text-sky-300",
												children: aimag.livestock.sheep.toLocaleString()
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 316,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400",
												children: "толгой"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 317,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 315,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 307,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-2xl",
												children: "🐐"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 323,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-xs font-bold text-white",
												children: "Ямаа"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 325,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-slate-400",
												children: [goatsPct, "% эзэлж байна"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 326,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 324,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 322,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-right",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-sm text-amber-300",
												children: aimag.livestock.goats.toLocaleString()
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 330,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400",
												children: "толгой"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 331,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 329,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 321,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-2xl",
												children: "🐂"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 337,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-xs font-bold text-white",
												children: "Үхэр"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 339,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-slate-400",
												children: [cattlePct, "% эзэлж байна"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 340,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 338,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 336,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-right",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-sm text-red-300",
												children: aimag.livestock.cattle.toLocaleString()
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 344,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400",
												children: "толгой"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 345,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 343,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 335,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-2xl",
												children: "🐎"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 351,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-xs font-bold text-white",
												children: "Адуу"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 353,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-slate-400",
												children: [horsesPct, "% эзэлж байна"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 354,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 352,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 350,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-right",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-sm text-indigo-300",
												children: aimag.livestock.horses.toLocaleString()
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 358,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400",
												children: "толгой"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 359,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 357,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 349,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between sm:col-span-2",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-2xl",
												children: "🐪"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 365,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "text-xs font-bold text-white",
												children: "Тэмээ"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 367,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-slate-400",
												children: [camelsPct, "% эзэлж байна"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 368,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 366,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 364,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-right",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-sm text-orange-300",
												children: aimag.livestock.camels.toLocaleString()
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 372,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400",
												children: "толгой"
											}, void 0, false, {
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
										lineNumber: 363,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 306,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 267,
						columnNumber: 11
					}, this),
					activeTab === "pasture" && /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-xs text-slate-400 uppercase font-semibold",
											children: "Бэлчээрийн даацын ачаалал"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 387,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-3xl font-black text-amber-400 mt-1",
											children: [aimag.pasture.overloadRatio, "x дахин хэтэрсэн"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 388,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-slate-300 mt-1",
											children: aimag.pasture.statusLabel
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 391,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 386,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: `text-xs px-3 py-1 rounded-full font-bold ${aimag.pasture.status === "critical_overload" ? "bg-red-500/20 text-red-300 border border-red-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"}`,
										children: aimag.pasture.grazingPressure
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 393,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 385,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-[11px] text-slate-400 mb-1",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "Хэвийн даац (1.0x)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 407,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Онцгой хэтрэлт (3.0x+)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 408,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 406,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "w-full bg-slate-800 h-3 rounded-full overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: `h-full rounded-full ${aimag.pasture.overloadRatio >= 3 ? "bg-red-600" : aimag.pasture.overloadRatio >= 2 ? "bg-orange-500" : "bg-amber-500"}`,
										style: { width: `${Math.min(aimag.pasture.overloadRatio / 4 * 100, 100)}%` }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 411,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 410,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 405,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-2 gap-3 pt-2 text-xs",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-3 rounded-xl bg-slate-900 border border-slate-800",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-slate-400",
												children: "Бэлчээрийн ургац"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 427,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-base font-bold text-white mt-1",
												children: [aimag.pasture.yieldCwtHa, " ц/га"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 428,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400 mt-0.5",
												children: "Зуны дундаж гарц"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 429,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 426,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "p-3 rounded-xl bg-slate-900 border border-slate-800",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-slate-400",
												children: "Өвс тэжээлийн бэлтгэл"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 433,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-base font-bold text-emerald-400 mt-1",
												children: [aimag.pasture.fodderPreparedPercent, "%"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 434,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[10px] text-slate-400 mt-0.5",
												children: [aimag.pasture.hayPreparedTons.toLocaleString(), " тн өвс"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 435,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 432,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 425,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 384,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-br from-red-950/30 to-slate-950 border border-red-900/40 space-y-3",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("h4", {
										className: "text-sm font-bold text-white flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-4 h-4 text-red-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 444,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: ["Зудын төрөл: ", aimag.dzudRisk.primaryType] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 445,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 443,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs font-bold text-red-300",
										children: [
											"Эрсдэлийн индекс: ",
											aimag.dzudRisk.score,
											"/100"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 447,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 442,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: aimag.dzudRisk.summary
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 452,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-2 gap-2 pt-2 text-xs",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300",
										children: /* @__PURE__ */ _jsxDEV("div", { children: ["Цасны зузаан: ", /* @__PURE__ */ _jsxDEV("strong", {
											className: "text-cyan-300",
											children: [aimag.dzudRisk.snowDepthCm, " см"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 458,
											columnNumber: 38
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 458,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 457,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300",
										children: /* @__PURE__ */ _jsxDEV("div", { children: ["Нэрвэгдсэн сум: ", /* @__PURE__ */ _jsxDEV("strong", {
											className: "text-amber-300",
											children: [
												aimag.dzudRisk.affectedSoumsCount,
												" / ",
												aimag.dzudRisk.totalSoums
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 461,
											columnNumber: 40
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 461,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 460,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 456,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 441,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 382,
						columnNumber: 11
					}, this),
					activeTab === "advisory" && /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-2.5",
								children: [/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",
									children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-4 h-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 474,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Шуурхай авч хэрэгжүүлэх арга хэмжээ" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 475,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 473,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2",
									children: aimag.herderAdvisories.urgentActions.map((action, i) => /* @__PURE__ */ _jsxDEV("div", {
										className: "p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5 leading-relaxed",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",
											children: i + 1
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 483,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: action }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 486,
											columnNumber: 21
										}, this)]
									}, i, true, {
										fileName: _jsxFileName,
										lineNumber: 479,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 477,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 472,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",
								children: [/* @__PURE__ */ _jsxDEV("h5", {
									className: "text-xs font-bold text-white",
									children: "Бэлчээрлэлтийн тактик:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 494,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: aimag.herderAdvisories.grazingAdvice
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 495,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 493,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",
								children: [/* @__PURE__ */ _jsxDEV("h5", {
									className: "text-xs font-bold text-white",
									children: "Тэжээл, эрдэс хангамж:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 499,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: aimag.herderAdvisories.feedNutritionAdvice
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 500,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 498,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",
								children: [/* @__PURE__ */ _jsxDEV("h5", {
									className: "text-xs font-bold text-white",
									children: "Хашаа хорооны дулаалга, салхи хаалт:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 504,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: aimag.herderAdvisories.shelterColdProtection
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 505,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 503,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-gradient-to-r from-blue-950/30 to-slate-950 border border-blue-900/40",
								children: [/* @__PURE__ */ _jsxDEV("h5", {
									className: "text-xs font-bold text-blue-300 mb-2.5 flex items-center gap-1.5",
									children: [/* @__PURE__ */ _jsxDEV(PhoneCall, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 511,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Шуурхай холбоо барих утас" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 512,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 510,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2",
									children: [aimag.herderAdvisories.emergencyContacts.map((contact, i) => /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between text-xs text-slate-200",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: contact.name }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 517,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("a", {
											href: `tel:${contact.phone}`,
											className: "px-2.5 py-1 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/50 font-bold tracking-wider",
											children: contact.phone
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 518,
											columnNumber: 21
										}, this)]
									}, i, true, {
										fileName: _jsxFileName,
										lineNumber: 516,
										columnNumber: 19
									}, this)), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between text-xs text-red-300 pt-1 border-t border-slate-800",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "ОБЕГ-ын нэгдсэн лавлах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 527,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("a", {
											href: "tel:105",
											className: "px-2.5 py-1 rounded-lg bg-red-600/30 text-red-300 font-bold",
											children: "105"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 528,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 526,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 514,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 509,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 470,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 61,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxNQUFEO1NBQUksV0FBVTttQkFBZCxDQUNFLHdCQUFDLFdBQUQsRUFBVyxXQUFVLGNBQWU7Ozs7bUJBQ3BDLHdCQUFDLFFBQUQsWUFBTSw0QkFBK0I7Ozs7aUJBQ25DOzs7OztrQkFDSix3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNHLE1BQU0saUJBQWlCLGtCQUFrQixLQUFLLFNBQVMsTUFDdEQsd0JBQUMsT0FBRDtVQUFhLFdBQVU7b0JBQXZCLENBQ0Usd0JBQUMsUUFBRCxZQUFPLFFBQVEsS0FBVzs7OztvQkFDMUIsd0JBQUMsS0FBRDtXQUNFLE1BQU0sT0FBTyxRQUFRO1dBQ3JCLFdBQVU7cUJBRVQsUUFBUTtVQUNSOzs7O2tCQUNBO1lBUks7Ozs7Z0JBUUwsQ0FDTixHQUNELHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUFmLENBQ0Usd0JBQUMsUUFBRCxZQUFNLHlCQUE0Qjs7OztvQkFDbEMsd0JBQUMsS0FBRDtXQUFHLE1BQUs7V0FBVSxXQUFVO3FCQUE4RDtVQUV2Rjs7OztrQkFDQTs7Ozs7aUJBQ0Y7Ozs7O2dCQUNGOzs7Ozs7TUFDRjs7Ozs7O0lBRUo7Ozs7OztFQUNGOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJBaW1hZ0RldGFpbERyYXdlci50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaW1hZ0luZm8sIEN1cnJlbnRXZWF0aGVyLCBEYWlseUZvcmVjYXN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZmV0Y2hBaW1hZ1dlYXRoZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy93ZWF0aGVyU2VydmljZSc7XG5pbXBvcnQge1xuICBBbGVydE9jdGFnb24sXG4gIEFsZXJ0VHJpYW5nbGUsXG4gIEFycm93RG93bixcbiAgQXJyb3dVcCxcbiAgQ2xvdWRTbm93LFxuICBEcm9wbGV0cyxcbiAgUGhvbmVDYWxsLFxuICBTaGllbGRBbGVydCxcbiAgU25vd2ZsYWtlLFxuICBUaGVybW9tZXRlcixcbiAgV2luZCxcbiAgWCxcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEFpbWFnRGV0YWlsRHJhd2VyUHJvcHMge1xuICBhaW1hZzogQWltYWdJbmZvIHwgbnVsbDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFpbWFnRGV0YWlsRHJhd2VyOiBSZWFjdC5GQzxBaW1hZ0RldGFpbERyYXdlclByb3BzPiA9ICh7IGFpbWFnLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGU8eyBjdXJyZW50OiBDdXJyZW50V2VhdGhlcjsgZm9yZWNhc3Q6IERhaWx5Rm9yZWNhc3RbXSB9IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nV2VhdGhlciwgc2V0TG9hZGluZ1dlYXRoZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8J3dlYXRoZXInIHwgJ2xpdmVzdG9jaycgfCAncGFzdHVyZScgfCAnYWR2aXNvcnknPignd2VhdGhlcicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhaW1hZykgcmV0dXJuO1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIHNldExvYWRpbmdXZWF0aGVyKHRydWUpO1xuXG4gICAgZmV0Y2hBaW1hZ1dlYXRoZXIoYWltYWcuY2VudGVyQ29vcmRpbmF0ZXNbMF0sIGFpbWFnLmNlbnRlckNvb3JkaW5hdGVzWzFdLCBhaW1hZy5pZClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcbiAgICAgICAgICBzZXRXZWF0aGVyKGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmdXZWF0aGVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYXRoZXIgZXJyb3I6JywgZXJyKTtcbiAgICAgICAgaWYgKGlzTW91bnRlZCkgc2V0TG9hZGluZ1dlYXRoZXIoZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW2FpbWFnXSk7XG5cbiAgaWYgKCFhaW1hZykgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgdG90YWxBbmltYWxzID0gYWltYWcubGl2ZXN0b2NrLnRvdGFsO1xuICBjb25zdCBzaGVlcFBjdCA9ICgoYWltYWcubGl2ZXN0b2NrLnNoZWVwIC8gdG90YWxBbmltYWxzKSAqIDEwMCkudG9GaXhlZCgxKTtcbiAgY29uc3QgZ29hdHNQY3QgPSAoKGFpbWFnLmxpdmVzdG9jay5nb2F0cyAvIHRvdGFsQW5pbWFscykgKiAxMDApLnRvRml4ZWQoMSk7XG4gIGNvbnN0IGNhdHRsZVBjdCA9ICgoYWltYWcubGl2ZXN0b2NrLmNhdHRsZSAvIHRvdGFsQW5pbWFscykgKiAxMDApLnRvRml4ZWQoMSk7XG4gIGNvbnN0IGhvcnNlc1BjdCA9ICgoYWltYWcubGl2ZXN0b2NrLmhvcnNlcyAvIHRvdGFsQW5pbWFscykgKiAxMDApLnRvRml4ZWQoMSk7XG4gIGNvbnN0IGNhbWVsc1BjdCA9ICgoYWltYWcubGl2ZXN0b2NrLmNhbWVscyAvIHRvdGFsQW5pbWFscykgKiAxMDApLnRvRml4ZWQoMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXktMCByaWdodC0wIHotNTAgdy1mdWxsIG1heC13LXhsIGJnLXNsYXRlLTkwMC85NSBiYWNrZHJvcC1ibHVyLXhsIGJvcmRlci1sIGJvcmRlci1zbGF0ZS04MDAgc2hhZG93LTJ4bCBmbGV4IGZsZXgtY29sIHRleHQtc2xhdGUtMTAwIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1yaWdodCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBib3JkZXItYiBib3JkZXItc2xhdGUtODAwLzgwIGJnLXNsYXRlLTk1MC82MCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodFwiPnthaW1hZy5uYW1lTW59INCw0LnQvNCw0LM8L2gzPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC14cyBweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCBmb250LWJvbGQgYm9yZGVyICR7XG4gICAgICAgICAgICAgICAgYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdjcml0aWNhbCdcbiAgICAgICAgICAgICAgICAgID8gJ2JnLXJlZC01MDAvMjAgdGV4dC1yZWQtMzAwIGJvcmRlci1yZWQtNTAwLzQwJ1xuICAgICAgICAgICAgICAgICAgOiBhaW1hZy5kenVkUmlzay5sZXZlbCA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICA/ICdiZy1vcmFuZ2UtNTAwLzIwIHRleHQtb3JhbmdlLTMwMCBib3JkZXItb3JhbmdlLTUwMC80MCdcbiAgICAgICAgICAgICAgICAgIDogYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdtb2RlcmF0ZSdcbiAgICAgICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTMwMCBib3JkZXItYW1iZXItNTAwLzQwJ1xuICAgICAgICAgICAgICAgICAgOiAnYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTMwMCBib3JkZXItZW1lcmFsZC01MDAvNDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YWltYWcuZHp1ZFJpc2subGV2ZWxMYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgbXQtMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHNwYW4+0KLTqdCyOiB7YWltYWcuY2VudGVyTW59PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e2FpbWFnLnJlZ2lvbn08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57YWltYWcuZHp1ZFJpc2sudG90YWxTb3Vtc30g0YHRg9C80YLQsNC5PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBiZy1zbGF0ZS04MDAgaG92ZXI6Ymctc2xhdGUtNzAwIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENyaXRpY2FsIEFsZXJ0IEJhciBpZiBQcmVzZW50ICovfVxuICAgICAge2FpbWFnLmR6dWRSaXNrLmNyaXRpY2FsV2FybmluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0zIGJnLXJlZC05NTAvNjAgYm9yZGVyLWIgYm9yZGVyLXJlZC04MDAvNTAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC1yZWQtMjAwIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICA8QWxlcnRPY3RhZ29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1yZWQtNDAwIHNocmluay0wIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgIDxzcGFuPnthaW1hZy5kenVkUmlzay5jcml0aWNhbFdhcm5pbmd9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uIFRhYnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05MDAgdGV4dC14cyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3dlYXRoZXInKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMyBweC0yIGJvcmRlci1iLTIgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPT09ICd3ZWF0aGVyJ1xuICAgICAgICAgICAgICA/ICdib3JkZXItYmx1ZS01MDAgdGV4dC1ibHVlLTQwMCBiZy1ibHVlLTUwMC8xMCdcbiAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtMjAwJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPENsb3VkU25vdyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICA8c3Bhbj7QptCw0LMg0LDQs9Cw0LDRgCAoQVBJKTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2xpdmVzdG9jaycpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSBweS0zIHB4LTIgYm9yZGVyLWItMiB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgJHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ2xpdmVzdG9jaydcbiAgICAgICAgICAgICAgPyAnYm9yZGVyLWFtYmVyLTUwMCB0ZXh0LWFtYmVyLTQwMCBiZy1hbWJlci01MDAvMTAnXG4gICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTIwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPvCfkI4g0JzQsNC70YvQvSDRgtC+0L48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdwYXN0dXJlJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB5LTMgcHgtMiBib3JkZXItYi0yIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSAke1xuICAgICAgICAgICAgYWN0aXZlVGFiID09PSAncGFzdHVyZSdcbiAgICAgICAgICAgICAgPyAnYm9yZGVyLWVtZXJhbGQtNTAwIHRleHQtZW1lcmFsZC00MDAgYmctZW1lcmFsZC01MDAvMTAnXG4gICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTIwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxXaW5kIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgIDxzcGFuPtCR0Y3Qu9GH0Y3RjdGA0LjQudC9INC00LDQsNGGPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYWR2aXNvcnknKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHktMyBweC0yIGJvcmRlci1iLTIgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdhZHZpc29yeSdcbiAgICAgICAgICAgICAgPyAnYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNDAwIGJnLXJlZC01MDAvMTAnXG4gICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXNsYXRlLTIwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxTaGllbGRBbGVydCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICA8c3Bhbj7QnNCw0LvRh9C90Ysg0LfTqdCy0LvTqdC80LY8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDb250ZW50IEJvZHkgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC01IHNwYWNlLXktNlwiPlxuICAgICAgICB7LyogVEFCIDE6IExJVkUgV0VBVEhFUiAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3dlYXRoZXInICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAge2xvYWRpbmdXZWF0aGVyID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCB0ZXh0LWNlbnRlciB0ZXh0LXNsYXRlLTQwMCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICA8U25vd2ZsYWtlIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIG14LWF1dG8gdGV4dC1ibHVlLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPtCm0LDQsyDRg9GD0YDRi9C9INGI0YPRg9C0INC80Y3QtNGN0Y3Qu9C70LjQudCzINGC0LDRgtCw0LYg0LHQsNC50L3QsC4uLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogd2VhdGhlciA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7LyogQ3VycmVudCBMaXZlIENhcmQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ibHVlLTk1MC80MCB2aWEtc2xhdGUtOTAwIHRvLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLWJsdWUtOTAwLzQwIHNoYWRvdy14bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1ibHVlLTMwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQkdC+0LTQuNGCINGG0LDQs9C40LnQvSDRhtCw0LMg0LDQs9Cw0LDRgCAoe3dlYXRoZXIuY3VycmVudC51cGRhdGVkQXR9KVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ibGFjayB0ZXh0LXdoaXRlIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3ZWF0aGVyLmN1cnJlbnQudGVtcGVyYXR1cmUgPiAwID8gYCske3dlYXRoZXIuY3VycmVudC50ZW1wZXJhdHVyZX1gIDogd2VhdGhlci5jdXJyZW50LnRlbXBlcmF0dXJlfcKwQ1xuICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtMjAwIG10LTFcIj57d2VhdGhlci5jdXJyZW50LndlYXRoZXJUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLWJsdWUtNTAwLzEwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMjAgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U25vd2ZsYWtlIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LWJsdWUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0JzRjdC00YDRjdCz0LTRjdGFOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPnt3ZWF0aGVyLmN1cnJlbnQuZmVlbHNMaWtlfcKwQzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIEluZGljYXRvcnMgR3JpZCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMi41IG10LTUgcHQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYmx1ZS00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KHQsNC70YXQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTFcIj57d2VhdGhlci5jdXJyZW50LndpbmRTcGVlZH0g0Lwv0YE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wbGV0cyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWJsdWUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCn0LjQudCz0YjQuNC7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMVwiPnt3ZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHl9JTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMi41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3VkU25vdyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWN5YW4tNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCe0YDQvtGFINGG0LDRgTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWN5YW4tMzAwIG10LTFcIj57d2VhdGhlci5jdXJyZW50LnNub3dmYWxsfSDQvNC8PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBFeHRyZW1lIFdhcm5pbmdzICovfVxuICAgICAgICAgICAgICAgICAge3dlYXRoZXIuY3VycmVudC5pc0V4dHJlbWVDb2xkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtMi41IHJvdW5kZWQteGwgYmctcmVkLTk1MC83MCBib3JkZXIgYm9yZGVyLXJlZC04MDAvNjAgdGV4dC14cyB0ZXh0LXJlZC0yMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlcm1vbWV0ZXIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXJlZC00MDAgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+0KXRjdGCINGF0q/QudGC0YDRjdC70YLQuNC50L0g0LDRjtGD0Ls6PC9zdHJvbmc+INCi0LXQvNC/0LXRgNCw0YLRg9GAIC0zMMKwQy3QsNCw0YEg0LTQvtC+0Ygg0LHQsNC50L3QsC4g0JzQsNC7INCw0LzRjNGB0LPQsNC7INCx0L7QvtCz0LTQvtGFINGN0YDRgdC00Y3Qu9GC0Y3QuS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge3dlYXRoZXIuY3VycmVudC5pc0JsaXp6YXJkUmlzayAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMi41IHAtMi41IHJvdW5kZWQteGwgYmctYW1iZXItOTUwLzcwIGJvcmRlciBib3JkZXItYW1iZXItODAwLzYwIHRleHQteHMgdGV4dC1hbWJlci0yMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNDAwIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPtCm0LDRgdCw0L0g0YjRg9GD0YDQs9Cw0L3RiyDRjdGA0YHQtNGN0Ls6PC9zdHJvbmc+INCh0LDQu9GF0LjQvdGLINGF0q/RhyDQuNGF0YLRjdC5LCDRhtCw0YEg0L7RgNC2INCx0LDQudC90LAuINCl0Y3RjdGAINCx0Y3Qu9GH0Y3RjdGA0LvRjdGF0LPSr9C5INCx0LDQudGFLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDctRGF5IEZvcmVjYXN0ICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAg0J7QudGA0YvQvSA3INGF0L7QvdC+0LPQuNC50L0g0YPRgNGM0LTRh9C40LvRgdCw0L0g0LzRjdC00Y3RjVxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgIHt3ZWF0aGVyLmZvcmVjYXN0Lm1hcCgoZGF5LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC83MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e2RheS5kYXlOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDBcIj57ZGF5LmRhdGUuc2xpY2UoNSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtYmx1ZS0zMDAgZm9udC1tZWRpdW0gdHJ1bmNhdGUgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF5LndlYXRoZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHB0LTEgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMC84MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDAgZm9udC1ib2xkXCI+e2RheS50ZW1wTWF4fcKwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGZvbnQtYm9sZFwiPntkYXkudGVtcE1pbn3CsDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QptCw0YE6IHtkYXkuc25vd2ZhbGxTdW190LzQvDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RheS53aW5kU3BlZWRNYXh90Lwv0YE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogVEFCIDI6IExJVkVTVE9DSyBTVEFUSVNUSUNTICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnbGl2ZXN0b2NrJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICAgIHsvKiBTdW1tYXJ5IEJhbm5lciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci05NTAvNDAgdG8tc2xhdGUtOTAwIGJvcmRlciBib3JkZXItYW1iZXItODAwLzQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1hbWJlci0zMDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj7QndC40LnRgiDQvNCw0Lsg0YHSr9GA0Y3Qszwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgIHsoYWltYWcubGl2ZXN0b2NrLnRvdGFsIC8gMTAwMDAwMCkudG9GaXhlZCgyKX0g0YHQsNGPXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIG10LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+0J3Rj9Cz0YLRgNCw0Ls6IHthaW1hZy5saXZlc3RvY2suZGVuc2l0eVBlclNxS219INGC0L7Qu9Cz0L7QuS/QutC8wrI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2FpbWFnLmxpdmVzdG9jay55ZWFyQ2hhbmdlUGVyY2VudCA8IDAgPyAndGV4dC1yZWQtNDAwJyA6ICd0ZXh0LWVtZXJhbGQtNDAwJ30+XG4gICAgICAgICAgICAgICAgICAgINOo0L3Qs9Op0YDRgdOp0L0g0L7QvdC+0L7RgSB7YWltYWcubGl2ZXN0b2NrLnllYXJDaGFuZ2VQZXJjZW50fSVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLWFtYmVyLTUwMC8xMCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMCB0ZXh0LTN4bFwiPlxuICAgICAgICAgICAgICAgIPCfkI5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIDUgQW5pbWFsIERpc3RyaWJ1dGlvbiBCYXIgKi99XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7QotCw0LLQsNC9INGF0L7RiNGD0YMg0LzQsNC70YvQvSDQsdKv0YLRjdGGPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0KXQvtC90Ywg0LHQsCDRj9C80LDQsDogeyhOdW1iZXIoc2hlZXBQY3QpICsgTnVtYmVyKGdvYXRzUGN0KSkudG9GaXhlZCgxKX0lPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogUHJvZ3Jlc3MgdmlzdWFsICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCB3LWZ1bGwgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBmbGV4IGJnLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3NoZWVwUGN0fSVgIH19IGNsYXNzTmFtZT1cImJnLXNreS00MDBcIiB0aXRsZT17YNCl0L7QvdGMOiAke3NoZWVwUGN0fSVgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke2dvYXRzUGN0fSVgIH19IGNsYXNzTmFtZT1cImJnLWFtYmVyLTQwMFwiIHRpdGxlPXtg0K/QvNCw0LA6ICR7Z29hdHNQY3R9JWB9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7Y2F0dGxlUGN0fSVgIH19IGNsYXNzTmFtZT1cImJnLXJlZC01MDBcIiB0aXRsZT17YNKu0YXRjdGAOiAke2NhdHRsZVBjdH0lYH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBgJHtob3JzZXNQY3R9JWAgfX0gY2xhc3NOYW1lPVwiYmctaW5kaWdvLTUwMFwiIHRpdGxlPXtg0JDQtNGD0YM6ICR7aG9yc2VzUGN0fSVgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke2NhbWVsc1BjdH0lYCB9fSBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNjAwXCIgdGl0bGU9e2DQotGN0LzRjdGNOiAke2NhbWVsc1BjdH0lYH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEluZGl2aWR1YWwgQnJlYWtkb3duIENhcmRzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvNzAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj7wn5CRPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+0KXQvtC90Yw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMFwiPntzaGVlcFBjdH0lINGN0LfRjdC70LYg0LHQsNC50L3QsDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtc2t5LTMwMFwiPnthaW1hZy5saXZlc3RvY2suc2hlZXAudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDBcIj7RgtC+0LvQs9C+0Lk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC83MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPvCfkJA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj7Qr9C80LDQsDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwXCI+e2dvYXRzUGN0fSUg0Y3Qt9GN0LvQtiDQsdCw0LnQvdCwPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdGV4dC1hbWJlci0zMDBcIj57YWltYWcubGl2ZXN0b2NrLmdvYXRzLnRvTG9jYWxlU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc2xhdGUtNDAwXCI+0YLQvtC70LPQvtC5PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvNzAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj7wn5CCPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+0q7RhdGN0YA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMFwiPntjYXR0bGVQY3R9JSDRjdC30Y3Qu9C2INCx0LDQudC90LA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LXJlZC0zMDBcIj57YWltYWcubGl2ZXN0b2NrLmNhdHRsZS50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPtGC0L7Qu9Cz0L7QuTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzcwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+8J+Qjjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPtCQ0LTRg9GDPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDBcIj57aG9yc2VzUGN0fSUg0Y3Qt9GN0LvQtiDQsdCw0LnQvdCwPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdGV4dC1pbmRpZ28tMzAwXCI+e2FpbWFnLmxpdmVzdG9jay5ob3JzZXMudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDBcIj7RgtC+0LvQs9C+0Lk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTk1MC83MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc206Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+8J+Qqjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPtCi0Y3QvNGN0Y08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMFwiPntjYW1lbHNQY3R9JSDRjdC30Y3Qu9C2INCx0LDQudC90LA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LW9yYW5nZS0zMDBcIj57YWltYWcubGl2ZXN0b2NrLmNhbWVscy50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPtGC0L7Qu9Cz0L7QuTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBUQUIgMzogUEFTVFVSRSAmIERaVUQgUklTSyAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3Bhc3R1cmUnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAgey8qIE92ZXJsb2FkIE1ldHJpYyBCYW5uZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj7QkdGN0LvRh9GN0Y3RgNC40LnQvSDQtNCw0LDRhtGL0L0g0LDRh9Cw0LDQu9Cw0Ls8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7YWltYWcucGFzdHVyZS5vdmVybG9hZFJhdGlvfXgg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbXQtMVwiPnthaW1hZy5wYXN0dXJlLnN0YXR1c0xhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC14cyBweC0zIHB5LTEgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgICAgICAgICBhaW1hZy5wYXN0dXJlLnN0YXR1cyA9PT0gJ2NyaXRpY2FsX292ZXJsb2FkJ1xuICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXJlZC01MDAvMjAgdGV4dC1yZWQtMzAwIGJvcmRlciBib3JkZXItcmVkLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci0zMDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvMzAnXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWltYWcucGFzdHVyZS5ncmF6aW5nUHJlc3N1cmV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogT3ZlcmxvYWQgcHJvZ3Jlc3MgYmFyICovfVxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCl0Y3QstC40LnQvSDQtNCw0LDRhiAoMS4weCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7QntC90YbQs9C+0Lkg0YXRjdGC0YDRjdC70YIgKDMuMHgrKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1zbGF0ZS04MDAgaC0zIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC1mdWxsIHJvdW5kZWQtZnVsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIGFpbWFnLnBhc3R1cmUub3ZlcmxvYWRSYXRpbyA+PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1yZWQtNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBhaW1hZy5wYXN0dXJlLm92ZXJsb2FkUmF0aW8gPj0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWFtYmVyLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtNYXRoLm1pbigoYWltYWcucGFzdHVyZS5vdmVybG9hZFJhdGlvIC8gNCkgKiAxMDAsIDEwMCl9JWAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBLZXkgSW5kaWNhdG9ycyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zIHB0LTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+0JHRjdC70YfRjdGN0YDQuNC50L0g0YPRgNCz0LDRhjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMVwiPnthaW1hZy5wYXN0dXJlLnlpZWxkQ3d0SGF9INGGL9Cz0LA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDAgbXQtMC41XCI+0JfRg9C90Ysg0LTRg9C90LTQsNC2INCz0LDRgNGGPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPtOo0LLRgSDRgtGN0LbRjdGN0LvQuNC50L0g0LHRjdC70YLQs9GN0Ls8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNDAwIG10LTFcIj57YWltYWcucGFzdHVyZS5mb2RkZXJQcmVwYXJlZFBlcmNlbnR9JTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0wLjVcIj57YWltYWcucGFzdHVyZS5oYXlQcmVwYXJlZFRvbnMudG9Mb2NhbGVTdHJpbmcoKX0g0YLQvSDTqdCy0YE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIER6dWQgUmlzayBEZXRhaWxzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1yZWQtOTUwLzMwIHRvLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLXJlZC05MDAvNDAgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1yZWQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCX0YPQtNGL0L0g0YLTqdGA06nQuzoge2FpbWFnLmR6dWRSaXNrLnByaW1hcnlUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtcmVkLTMwMFwiPlxuICAgICAgICAgICAgICAgICAg0K3RgNGB0LTRjdC70LjQudC9INC40L3QtNC10LrRgToge2FpbWFnLmR6dWRSaXNrLnNjb3JlfS8xMDBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAge2FpbWFnLmR6dWRSaXNrLnN1bW1hcnl9XG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgcHQtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTkwMC84MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj7QptCw0YHQvdGLINC30YPQt9Cw0LDQvTogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWN5YW4tMzAwXCI+e2FpbWFnLmR6dWRSaXNrLnNub3dEZXB0aENtfSDRgdC8PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTkwMC84MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj7QndGN0YDQstGN0LPQtNGB0Y3QvSDRgdGD0Lw6IDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1hbWJlci0zMDBcIj57YWltYWcuZHp1ZFJpc2suYWZmZWN0ZWRTb3Vtc0NvdW50fSAvIHthaW1hZy5kenVkUmlzay50b3RhbFNvdW1zfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBUQUIgNDogSEVSREVSIEFEVklTT1JZICYgV0FSTklOR1MgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdhZHZpc29yeScgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XG4gICAgICAgICAgICB7LyogVXJnZW50IEFjdGlvbiBDaGVja2xpc3QgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMi41XCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1hbWJlci00MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCo0YPRg9GA0YXQsNC5INCw0LLRhyDRhdGN0YDRjdCz0LbSr9Kv0LvRjdGFINCw0YDQs9CwINGF0Y3QvNC20Y3RjTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7YWltYWcuaGVyZGVyQWR2aXNvcmllcy51cmdlbnRBY3Rpb25zLm1hcCgoYWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzgwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIHRleHQteHMgdGV4dC1zbGF0ZS0yMDAgZmxleCBpdGVtcy1zdGFydCBnYXAtMi41IGxlYWRpbmctcmVsYXhlZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsxMHB4XSBmb250LWJvbGQgc2hyaW5rLTAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthY3Rpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBHcmF6aW5nICYgRmVlZCBHdWlkYW5jZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwLzgwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPtCR0Y3Qu9GH0Y3RjdGA0LvRjdC70YLQuNC50L0g0YLQsNC60YLQuNC6OjwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkXCI+e2FpbWFnLmhlcmRlckFkdmlzb3JpZXMuZ3JhemluZ0FkdmljZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+0KLRjdC20Y3RjdC7LCDRjdGA0LTRjdGBINGF0LDQvdCz0LDQvNC2OjwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkXCI+e2FpbWFnLmhlcmRlckFkdmlzb3JpZXMuZmVlZE51dHJpdGlvbkFkdmljZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+0KXQsNGI0LDQsCDRhdC+0YDQvtC+0L3RiyDQtNGD0LvQsNCw0LvQs9CwLCDRgdCw0LvRhdC4INGF0LDQsNC70YI6PC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBsZWFkaW5nLXJlbGF4ZWRcIj57YWltYWcuaGVyZGVyQWR2aXNvcmllcy5zaGVsdGVyQ29sZFByb3RlY3Rpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBFbWVyZ2VuY3kgQ29udGFjdHMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTk1MC8zMCB0by1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1ibHVlLTkwMC80MFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1ibHVlLTMwMCBtYi0yLjUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZUNhbGwgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCo0YPRg9GA0YXQsNC5INGF0L7Qu9Cx0L7QviDQsdCw0YDQuNGFINGD0YLQsNGBPC9zcGFuPlxuICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIHthaW1hZy5oZXJkZXJBZHZpc29yaWVzLmVtZXJnZW5jeUNvbnRhY3RzLm1hcCgoY29udGFjdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb250YWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2B0ZWw6JHtjb250YWN0LnBob25lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgcm91bmRlZC1sZyBiZy1ibHVlLTYwMC8zMCB0ZXh0LWJsdWUtMzAwIGhvdmVyOmJnLWJsdWUtNjAwLzUwIGZvbnQtYm9sZCB0cmFja2luZy13aWRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29udGFjdC5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LXJlZC0zMDAgcHQtMSBib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7QntCR0JXQky3Ri9C9INC90Y3Qs9C00YHRjdC9INC70LDQstC70LDRhTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MTA1XCIgY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgcm91bmRlZC1sZyBiZy1yZWQtNjAwLzMwIHRleHQtcmVkLTMwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgMTA1XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=