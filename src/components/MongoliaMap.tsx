const React = __vite__cjsImport0_react; const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"]; const useState = __vite__cjsImport0_react["useState"];const L = __vite__cjsImport1_leaflet;const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import __vite__cjsImport1_leaflet from "/node_modules/.vite/deps/leaflet.js?v=b1781e21";
import mongoliaGeoData from "/src/data/mongolia-aimags.json?import";
import { AIMAGS_DATA } from "/src/data/aimagData.ts";
import { AlertTriangle, Layers, RotateCcw, Search, Sparkles, Wind } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/components/MongoliaMap.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export const MongoliaMap = ({ selectedAimag, onSelectAimag, mode, onModeChange, onRefresh, isRefreshing = false }) => {
	const mapContainerRef = useRef(null);
	const mapInstanceRef = useRef(null);
	const geoJsonLayerRef = useRef(null);
	const markersLayerRef = useRef(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [mapTheme, setMapTheme] = useState("light");
	// Map aimag shapeName to our detailed data
	const getAimagByShapeName = (shapeName) => {
		return AIMAGS_DATA.find((a) => a.shapeName.toLowerCase() === shapeName.toLowerCase() || a.nameEn.toLowerCase() === shapeName.toLowerCase());
	};
	// Determine fill color based on current mode
	const getFeatureColor = (aimag) => {
		if (!aimag) return "#94a3b8";
		if (mode === "dzudRisk") {
			switch (aimag.dzudRisk.level) {
				case "critical": return "#dc2626";
				case "high": return "#f97316";
				case "moderate": return "#eab308";
				case "low": return "#10b981";
				default: return "#64748b";
			}
		}
		if (mode === "pasture") {
			switch (aimag.pasture.status) {
				case "critical_overload": return "#b91c1c";
				case "high_overload": return "#ea580c";
				case "moderate_overload": return "#d97706";
				case "normal": return "#059669";
				default: return "#64748b";
			}
		}
		if (mode === "snow") {
			const depth = aimag.dzudRisk.snowDepthCm;
			if (depth >= 30) return "#0284c7";
			if (depth >= 20) return "#38bdf8";
			if (depth >= 12) return "#93c5fd";
			return "#cbd5e1";
		}
		if (mode === "livestock") {
			const total = aimag.livestock.total;
			if (total >= 5e6) return "#7c3aed";
			if (total >= 35e5) return "#6366f1";
			if (total >= 2e6) return "#3b82f6";
			return "#94a3b8";
		}
		return "#38bdf8";
	};
	// Initialize Leaflet Map
	useEffect(() => {
		if (!mapContainerRef.current) return;
		if (mapInstanceRef.current) return;
		// Mongolia bounding box
		const southWest = L.latLng(41.2, 87);
		const northEast = L.latLng(52.5, 120.5);
		const bounds = L.latLngBounds(southWest, northEast);
		const map = L.map(mapContainerRef.current, {
			center: [46.8625, 103.8467],
			zoom: 5.5,
			minZoom: 4.8,
			maxZoom: 9,
			maxBounds: bounds.pad(.3),
			maxBoundsViscosity: .8,
			zoomControl: true,
			attributionControl: false
		});
		mapInstanceRef.current = map;
		// CartoDB Positron / Voyager or Carto Dark Matter
		const tileUrl = mapTheme === "dark" ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
		const tiles = L.tileLayer(tileUrl, {
			subdomains: "abcd",
			maxZoom: 19
		}).addTo(map);
		markersLayerRef.current = L.layerGroup().addTo(map);
		// Initial fit
		map.fitBounds(bounds, { padding: [20, 20] });
		return () => {
			tiles.remove();
			map.remove();
			mapInstanceRef.current = null;
		};
	}, []);
	// Update Tile Layer if theme changes
	useEffect(() => {
		const map = mapInstanceRef.current;
		if (!map) return;
		map.eachLayer((layer) => {
			if (layer instanceof L.TileLayer) {
				map.removeLayer(layer);
			}
		});
		const tileUrl = mapTheme === "dark" ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
		L.tileLayer(tileUrl, {
			subdomains: "abcd",
			maxZoom: 19
		}).addTo(map);
		// Re-render GeoJSON so it sits above the new tile layer
		if (geoJsonLayerRef.current) {
			geoJsonLayerRef.current.bringToFront();
		}
	}, [mapTheme]);
	// Update GeoJSON & Markers when mode or selectedAimag changes
	useEffect(() => {
		const map = mapInstanceRef.current;
		if (!map) return;
		if (geoJsonLayerRef.current) {
			map.removeLayer(geoJsonLayerRef.current);
		}
		if (markersLayerRef.current) {
			markersLayerRef.current.clearLayers();
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const geoData = mongoliaGeoData;
		const geoJsonLayer = L.geoJSON(geoData, {
			style: (feature) => {
				const shapeName = feature?.properties?.shapeName || "";
				const aimag = getAimagByShapeName(shapeName);
				const isSelected = selectedAimag?.id === aimag?.id;
				const color = getFeatureColor(aimag);
				return {
					fillColor: color,
					weight: isSelected ? 3.5 : 1.5,
					opacity: 1,
					color: isSelected ? "#fbbf24" : "#1e293b",
					dashArray: isSelected ? "" : "1",
					fillOpacity: isSelected ? .85 : .65
				};
			},
			onEachFeature: (feature, layer) => {
				const shapeName = feature?.properties?.shapeName || "";
				const aimag = getAimagByShapeName(shapeName);
				if (!aimag) return;
				// Custom clean tooltip
				const tooltipHtml = `
          <div class="px-3 py-2 text-xs font-sans bg-slate-900/95 text-slate-100 rounded-lg shadow-xl border border-slate-700/80 backdrop-blur-md">
            <div class="font-bold text-sm text-amber-400 mb-1 flex items-center gap-1.5">
              <span>${aimag.nameMn} аймаг</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded font-medium ${aimag.dzudRisk.level === "critical" ? "bg-red-500/30 text-red-300" : aimag.dzudRisk.level === "high" ? "bg-orange-500/30 text-orange-300" : "bg-emerald-500/30 text-emerald-300"}">${aimag.dzudRisk.levelLabel}</span>
            </div>
            <div class="space-y-0.5 text-slate-300 text-[11px]">
              <div>Төв: <span class="text-white">${aimag.centerMn}</span></div>
              <div>Малын тоо: <span class="text-amber-300 font-semibold">${(aimag.livestock.total / 1e6).toFixed(2)} сая</span></div>
              <div>Бэлчээрийн даац: <span class="text-white font-medium">${aimag.pasture.overloadRatio}x (${aimag.pasture.statusLabel})</span></div>
              <div>Цасны зузаан: <span class="text-cyan-300 font-medium">${aimag.dzudRisk.snowDepthCm} см</span></div>
            </div>
          </div>
        `;
				layer.bindTooltip(tooltipHtml, {
					sticky: true,
					direction: "auto",
					className: "leaflet-custom-tooltip"
				});
				layer.on({
					mouseover: (e) => {
						const l = e.target;
						l.setStyle({
							weight: 3,
							color: "#38bdf8",
							fillOpacity: .85
						});
						l.bringToFront();
					},
					mouseout: (e) => {
						const l = e.target;
						const isSel = selectedAimag?.id === aimag.id;
						l.setStyle({
							weight: isSel ? 3.5 : 1.5,
							color: isSel ? "#fbbf24" : "#1e293b",
							fillOpacity: isSel ? .85 : .65
						});
					},
					click: () => {
						onSelectAimag(aimag);
						if (layer instanceof L.Polygon) {
							const bounds = layer.getBounds();
							map.flyToBounds(bounds, {
								padding: [50, 50],
								duration: 1.2
							});
						}
					}
				});
			}
		}).addTo(map);
		geoJsonLayerRef.current = geoJsonLayer;
		// Add Center Markers matching user's screenshot
		if (markersLayerRef.current) {
			AIMAGS_DATA.forEach((aimag) => {
				const [lat, lng] = aimag.centerCoordinates;
				const isSelected = selectedAimag?.id === aimag.id;
				// Custom circular marker badge
				const markerColor = aimag.dzudRisk.level === "critical" ? "#ef4444" : aimag.dzudRisk.level === "high" ? "#f97316" : aimag.dzudRisk.level === "moderate" ? "#eab308" : "#10b981";
				const circle = L.circleMarker([lat, lng], {
					radius: isSelected ? 8 : 6,
					fillColor: markerColor,
					color: "#ffffff",
					weight: 2,
					opacity: 1,
					fillOpacity: .95
				});
				circle.bindTooltip(`<div class="font-semibold text-xs py-0.5 px-1">${aimag.nameMn} (${aimag.dzudRisk.snowDepthCm}см цас)</div>`, {
					direction: "top",
					offset: [0, -6]
				});
				circle.on("click", () => {
					onSelectAimag(aimag);
				});
				markersLayerRef.current?.addLayer(circle);
			});
		}
	}, [mode, selectedAimag]);
	const handleResetView = () => {
		const map = mapInstanceRef.current;
		if (!map) return;
		const southWest = L.latLng(41.2, 87);
		const northEast = L.latLng(52.5, 120.5);
		map.flyToBounds(L.latLngBounds(southWest, northEast), {
			duration: 1.2,
			padding: [20, 20]
		});
	};
	const filteredAimags = AIMAGS_DATA.filter((a) => a.nameMn.toLowerCase().includes(searchQuery.toLowerCase()) || a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || a.centerMn.toLowerCase().includes(searchQuery.toLowerCase()));
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ _jsxDEV("h2", {
						className: "text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: "Монгол Улсын аймгууд" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 323,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium",
							children: "21 аймаг + Нийслэл"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 324,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 322,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 321,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs sm:text-sm text-slate-400 mt-1",
					children: "Аймаг дээр дарж сонгоно уу. Тэмдэглэгээ нь цасны зузаан, бэлчээрийн даац болон зудын эрсдэлийн үнэлгээг харуулна."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 329,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 320,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center flex-wrap gap-2",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ _jsxDEV(Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 338,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									placeholder: "Аймгийн нэрээр хайх...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-44 sm:w-56"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 339,
									columnNumber: 13
								}, this),
								searchQuery && /* @__PURE__ */ _jsxDEV("div", {
									className: "absolute top-full left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 divide-y divide-slate-800",
									children: filteredAimags.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
										className: "p-3 text-xs text-slate-400 text-center",
										children: "Олдсонгүй"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 349,
										columnNumber: 19
									}, this) : filteredAimags.map((aimag) => /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => {
											onSelectAimag(aimag);
											setSearchQuery("");
										},
										className: "w-full text-left px-3 py-2 hover:bg-slate-800 text-xs text-slate-200 flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-semibold text-white",
											children: aimag.nameMn
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 360,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-slate-400",
											children: aimag.dzudRisk.levelLabel
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 361,
											columnNumber: 23
										}, this)]
									}, aimag.id, true, {
										fileName: _jsxFileName,
										lineNumber: 352,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 347,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 337,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: handleResetView,
							title: "Бүх нутгийг харах",
							className: "p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition",
							children: /* @__PURE__ */ _jsxDEV(RotateCcw, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 375,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 370,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setMapTheme(mapTheme === "light" ? "dark" : "light"),
							title: "Газрын зургийн суурь солих",
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition",
							children: [/* @__PURE__ */ _jsxDEV(Layers, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 384,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: mapTheme === "light" ? "Цайвар дэвсгэр" : "Харанхуй дэвсгэр" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 385,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 379,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onRefresh,
							disabled: isRefreshing,
							className: "flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition disabled:opacity-50",
							children: [/* @__PURE__ */ _jsxDEV(RotateCcw, { className: `w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 394,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: isRefreshing ? "Шинэчилж байна..." : "Шинэчлэх" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 395,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 389,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 335,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 319,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "px-4 py-2.5 bg-slate-900/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none",
				children: [
					/* @__PURE__ */ _jsxDEV("span", {
						className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1",
						children: "Зургийн харагдац:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 402,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => onModeChange("dzudRisk"),
						className: `px-3 py-1 text-xs rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${mode === "dzudRisk" ? "bg-red-500 text-white shadow-md shadow-red-500/25" : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"}`,
						children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 413,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Зудын эрсдэл" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 414,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 405,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => onModeChange("pasture"),
						className: `px-3 py-1 text-xs rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${mode === "pasture" ? "bg-amber-600 text-white shadow-md shadow-amber-600/25" : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"}`,
						children: [/* @__PURE__ */ _jsxDEV(Wind, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 425,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Бэлчээрийн даац" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 426,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 417,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => onModeChange("snow"),
						className: `px-3 py-1 text-xs rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${mode === "snow" ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25" : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"}`,
						children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 437,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Цасны зузаан" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 438,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 429,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => onModeChange("livestock"),
						className: `px-3 py-1 text-xs rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${mode === "livestock" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25" : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"}`,
						children: /* @__PURE__ */ _jsxDEV("span", { children: "🐎 Малын тоо толгой" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 449,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 441,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 401,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "relative w-full h-[540px] sm:h-[620px]",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						ref: mapContainerRef,
						className: "w-full h-full z-10"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 455,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "absolute bottom-4 left-4 z-20 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 shadow-2xl text-[11px] text-slate-300 pointer-events-auto max-w-xs",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "font-semibold text-white mb-2 flex items-center justify-between",
								children: /* @__PURE__ */ _jsxDEV("span", { children: [
									mode === "dzudRisk" && "Зудын эрсдэлийн зэрэглэл",
									mode === "pasture" && "Бэлчээрийн даацын ачаалал",
									mode === "snow" && "Цасны зузаан (см)",
									mode === "livestock" && "Малын тоо толгой"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 460,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 459,
								columnNumber: 11
							}, this),
							mode === "dzudRisk" && /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-red-600 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 471,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Нэн их эрсдэлтэй (Критик)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 472,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 470,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-orange-500 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 475,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Их эрсдэлтэй" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 476,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 474,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-amber-500 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 479,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Дунд эрсдэлтэй" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 480,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 478,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-emerald-500 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 483,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Бага эрсдэлтэй / Хэвийн" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 484,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 482,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 469,
								columnNumber: 13
							}, this),
							mode === "pasture" && /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-red-700 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 492,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Даац 3-аас дээш дахин хэтэрсэн" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 493,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 491,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-orange-600 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 496,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Даац 2-3 дахин хэтэрсэн" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 497,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 495,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-amber-600 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 500,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Даац 1-2 дахин хэтэрсэн" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 501,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 499,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-emerald-600 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 504,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Даац хүрэлцээтэй / Хэвийн" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 505,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 503,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 490,
								columnNumber: 13
							}, this),
							mode === "snow" && /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-sky-600 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 513,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "30 см-ээс дээш (Нэн их)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 514,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 512,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-sky-400 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 517,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "20 - 30 см (Их)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 518,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 516,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-blue-300 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 521,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "10 - 20 см (Дунд зэрэг)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 522,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 520,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-slate-400 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 525,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "10 см хүртэл (Бага)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 526,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 524,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 511,
								columnNumber: 13
							}, this),
							mode === "livestock" && /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-violet-600 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 534,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "5 саяас дээш толгой" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 535,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 533,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-indigo-500 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 538,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "3.5 - 5 сая толгой" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 539,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 537,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-blue-500 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 542,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "2 - 3.5 сая толгой" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 543,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 541,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-3.5 h-3.5 rounded bg-slate-400 inline-block shrink-0 shadow-sm" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 546,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "2 сая хүртэл толгой" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 547,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 545,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 532,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 458,
						columnNumber: 9
					}, this),
					selectedAimag && /* @__PURE__ */ _jsxDEV("div", {
						className: "absolute top-4 right-4 z-20 p-3.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-amber-500/40 shadow-2xl text-xs text-white max-w-xs animate-in fade-in slide-in-from-top-2",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between gap-3 mb-1.5",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-base font-bold text-amber-400",
									children: selectedAimag.nameMn
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 557,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: `text-[10px] px-2 py-0.5 rounded font-semibold ${selectedAimag.dzudRisk.level === "critical" ? "bg-red-500/20 text-red-300 border border-red-500/30" : selectedAimag.dzudRisk.level === "high" ? "bg-orange-500/20 text-orange-300 border border-orange-500/30" : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"}`,
									children: selectedAimag.dzudRisk.levelLabel
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 558,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 556,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-slate-300 text-[11px] leading-relaxed line-clamp-2 mb-2",
								children: selectedAimag.dzudRisk.summary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 570,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800 text-slate-400",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: ["Цас: ", /* @__PURE__ */ _jsxDEV("strong", {
									className: "text-cyan-300",
									children: [selectedAimag.dzudRisk.snowDepthCm, " см"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 574,
									columnNumber: 26
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 574,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: ["Малын тоо: ", /* @__PURE__ */ _jsxDEV("strong", {
									className: "text-amber-300",
									children: [(selectedAimag.livestock.total / 1e6).toFixed(1), " сая"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 575,
									columnNumber: 32
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 575,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 573,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 555,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 454,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 317,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUNFLHdCQUFDLFFBQUQsYUFBTSxTQUFLLHdCQUFDLFVBQUQ7U0FBUSxXQUFVO21CQUFsQixDQUFtQyxjQUFjLFNBQVMsYUFBWSxLQUFXOzs7OztnQkFBTzs7OztrQkFDbkcsd0JBQUMsUUFBRCxhQUFNLGVBQVcsd0JBQUMsVUFBRDtTQUFRLFdBQVU7bUJBQWxCLEVBQXFDLGNBQWMsVUFBVSxRQUFRLElBQU8sQ0FBRSxRQUFRLENBQUMsR0FBRSxNQUFZOzs7OztnQkFBTzs7OztnQkFDMUg7Ozs7OztNQUNGOzs7Ozs7SUFFSjs7Ozs7O0VBQ0Y7Ozs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIk1vbmdvbGlhTWFwLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgbW9uZ29saWFHZW9EYXRhIGZyb20gJy4uL2RhdGEvbW9uZ29saWEtYWltYWdzLmpzb24nO1xuaW1wb3J0IHsgQUlNQUdTX0RBVEEgfSBmcm9tICcuLi9kYXRhL2FpbWFnRGF0YSc7XG5pbXBvcnQgeyBBaW1hZ0luZm8sIE1hcFZpZXdNb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnRUcmlhbmdsZSwgTGF5ZXJzLCBSb3RhdGVDY3csIFNlYXJjaCwgU3BhcmtsZXMsIFdpbmQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgTW9uZ29saWFNYXBQcm9wcyB7XG4gIHNlbGVjdGVkQWltYWc6IEFpbWFnSW5mbyB8IG51bGw7XG4gIG9uU2VsZWN0QWltYWc6IChhaW1hZzogQWltYWdJbmZvKSA9PiB2b2lkO1xuICBtb2RlOiBNYXBWaWV3TW9kZTtcbiAgb25Nb2RlQ2hhbmdlOiAobW9kZTogTWFwVmlld01vZGUpID0+IHZvaWQ7XG4gIG9uUmVmcmVzaDogKCkgPT4gdm9pZDtcbiAgaXNSZWZyZXNoaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE1vbmdvbGlhTWFwOiBSZWFjdC5GQzxNb25nb2xpYU1hcFByb3BzPiA9ICh7XG4gIHNlbGVjdGVkQWltYWcsXG4gIG9uU2VsZWN0QWltYWcsXG4gIG1vZGUsXG4gIG9uTW9kZUNoYW5nZSxcbiAgb25SZWZyZXNoLFxuICBpc1JlZnJlc2hpbmcgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgbWFwQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbWFwSW5zdGFuY2VSZWYgPSB1c2VSZWY8TC5NYXAgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZ2VvSnNvbkxheWVyUmVmID0gdXNlUmVmPEwuR2VvSlNPTiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBtYXJrZXJzTGF5ZXJSZWYgPSB1c2VSZWY8TC5MYXllckdyb3VwIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWFwVGhlbWUsIHNldE1hcFRoZW1lXSA9IHVzZVN0YXRlPCdsaWdodCcgfCAnZGFyayc+KCdsaWdodCcpO1xuXG4gIC8vIE1hcCBhaW1hZyBzaGFwZU5hbWUgdG8gb3VyIGRldGFpbGVkIGRhdGFcbiAgY29uc3QgZ2V0QWltYWdCeVNoYXBlTmFtZSA9IChzaGFwZU5hbWU6IHN0cmluZyk6IEFpbWFnSW5mbyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgcmV0dXJuIEFJTUFHU19EQVRBLmZpbmQoXG4gICAgICAoYSkgPT4gYS5zaGFwZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2hhcGVOYW1lLnRvTG93ZXJDYXNlKCkgfHwgYS5uYW1lRW4udG9Mb3dlckNhc2UoKSA9PT0gc2hhcGVOYW1lLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBmaWxsIGNvbG9yIGJhc2VkIG9uIGN1cnJlbnQgbW9kZVxuICBjb25zdCBnZXRGZWF0dXJlQ29sb3IgPSAoYWltYWc6IEFpbWFnSW5mbyB8IHVuZGVmaW5lZCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFhaW1hZykgcmV0dXJuICcjOTRhM2I4JztcblxuICAgIGlmIChtb2RlID09PSAnZHp1ZFJpc2snKSB7XG4gICAgICBzd2l0Y2ggKGFpbWFnLmR6dWRSaXNrLmxldmVsKSB7XG4gICAgICAgIGNhc2UgJ2NyaXRpY2FsJzpcbiAgICAgICAgICByZXR1cm4gJyNkYzI2MjYnOyAvLyBEZWVwIENyaW1zb25cbiAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgcmV0dXJuICcjZjk3MzE2JzsgLy8gVml2aWQgT3JhbmdlXG4gICAgICAgIGNhc2UgJ21vZGVyYXRlJzpcbiAgICAgICAgICByZXR1cm4gJyNlYWIzMDgnOyAvLyBBbWJlciBHb2xkXG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgcmV0dXJuICcjMTBiOTgxJzsgLy8gRW1lcmFsZCBHcmVlblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnIzY0NzQ4Yic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09ICdwYXN0dXJlJykge1xuICAgICAgc3dpdGNoIChhaW1hZy5wYXN0dXJlLnN0YXR1cykge1xuICAgICAgICBjYXNlICdjcml0aWNhbF9vdmVybG9hZCc6XG4gICAgICAgICAgcmV0dXJuICcjYjkxYzFjJzsgLy8gRGVlcCBSZWQgPjN4XG4gICAgICAgIGNhc2UgJ2hpZ2hfb3ZlcmxvYWQnOlxuICAgICAgICAgIHJldHVybiAnI2VhNTgwYyc7IC8vIDItM3hcbiAgICAgICAgY2FzZSAnbW9kZXJhdGVfb3ZlcmxvYWQnOlxuICAgICAgICAgIHJldHVybiAnI2Q5NzcwNic7IC8vIDEtMnhcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgICByZXR1cm4gJyMwNTk2NjknOyAvLyBIZWFsdGh5IGdyZWVuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcjNjQ3NDhiJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ3Nub3cnKSB7XG4gICAgICBjb25zdCBkZXB0aCA9IGFpbWFnLmR6dWRSaXNrLnNub3dEZXB0aENtO1xuICAgICAgaWYgKGRlcHRoID49IDMwKSByZXR1cm4gJyMwMjg0YzcnOyAvLyBEZWVwIGljZSBibHVlXG4gICAgICBpZiAoZGVwdGggPj0gMjApIHJldHVybiAnIzM4YmRmOCc7IC8vIFNreSBibHVlXG4gICAgICBpZiAoZGVwdGggPj0gMTIpIHJldHVybiAnIzkzYzVmZCc7IC8vIExpZ2h0IGJsdWVcbiAgICAgIHJldHVybiAnI2NiZDVlMSc7IC8vIFNsYXRlIHBhbGVcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ2xpdmVzdG9jaycpIHtcbiAgICAgIGNvbnN0IHRvdGFsID0gYWltYWcubGl2ZXN0b2NrLnRvdGFsO1xuICAgICAgaWYgKHRvdGFsID49IDUwMDAwMDApIHJldHVybiAnIzdjM2FlZCc7IC8vID4gNU0gdmlvbGV0XG4gICAgICBpZiAodG90YWwgPj0gMzUwMDAwMCkgcmV0dXJuICcjNjM2NmYxJzsgLy8gMy41IC0gNU0gaW5kaWdvXG4gICAgICBpZiAodG90YWwgPj0gMjAwMDAwMCkgcmV0dXJuICcjM2I4MmY2JzsgLy8gMiAtIDMuNU0gYmx1ZVxuICAgICAgcmV0dXJuICcjOTRhM2I4JzsgLy8gPCAyTVxuICAgIH1cblxuICAgIHJldHVybiAnIzM4YmRmOCc7XG4gIH07XG5cbiAgLy8gSW5pdGlhbGl6ZSBMZWFmbGV0IE1hcFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWFwQ29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpZiAobWFwSW5zdGFuY2VSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgLy8gTW9uZ29saWEgYm91bmRpbmcgYm94XG4gICAgY29uc3Qgc291dGhXZXN0ID0gTC5sYXRMbmcoNDEuMiwgODcuMCk7XG4gICAgY29uc3Qgbm9ydGhFYXN0ID0gTC5sYXRMbmcoNTIuNSwgMTIwLjUpO1xuICAgIGNvbnN0IGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KTtcblxuICAgIGNvbnN0IG1hcCA9IEwubWFwKG1hcENvbnRhaW5lclJlZi5jdXJyZW50LCB7XG4gICAgICBjZW50ZXI6IFs0Ni44NjI1LCAxMDMuODQ2N10sXG4gICAgICB6b29tOiA1LjUsXG4gICAgICBtaW5ab29tOiA0LjgsXG4gICAgICBtYXhab29tOiA5LFxuICAgICAgbWF4Qm91bmRzOiBib3VuZHMucGFkKDAuMyksXG4gICAgICBtYXhCb3VuZHNWaXNjb3NpdHk6IDAuOCxcbiAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIG1hcEluc3RhbmNlUmVmLmN1cnJlbnQgPSBtYXA7XG5cbiAgICAvLyBDYXJ0b0RCIFBvc2l0cm9uIC8gVm95YWdlciBvciBDYXJ0byBEYXJrIE1hdHRlclxuICAgIGNvbnN0IHRpbGVVcmwgPVxuICAgICAgbWFwVGhlbWUgPT09ICdkYXJrJ1xuICAgICAgICA/ICdodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vZGFya19hbGwve3p9L3t4fS97eX17cn0ucG5nJ1xuICAgICAgICA6ICdodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vcmFzdGVydGlsZXMvdm95YWdlcl9ub2xhYmVscy97en0ve3h9L3t5fXtyfS5wbmcnO1xuXG4gICAgY29uc3QgdGlsZXMgPSBMLnRpbGVMYXllcih0aWxlVXJsLCB7XG4gICAgICBzdWJkb21haW5zOiAnYWJjZCcsXG4gICAgICBtYXhab29tOiAxOSxcbiAgICB9KS5hZGRUbyhtYXApO1xuXG4gICAgbWFya2Vyc0xheWVyUmVmLmN1cnJlbnQgPSBMLmxheWVyR3JvdXAoKS5hZGRUbyhtYXApO1xuXG4gICAgLy8gSW5pdGlhbCBmaXRcbiAgICBtYXAuZml0Qm91bmRzKGJvdW5kcywgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aWxlcy5yZW1vdmUoKTtcbiAgICAgIG1hcC5yZW1vdmUoKTtcbiAgICAgIG1hcEluc3RhbmNlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBVcGRhdGUgVGlsZSBMYXllciBpZiB0aGVtZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbWFwSW5zdGFuY2VSZWYuY3VycmVudDtcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xuXG4gICAgbWFwLmVhY2hMYXllcigobGF5ZXIpID0+IHtcbiAgICAgIGlmIChsYXllciBpbnN0YW5jZW9mIEwuVGlsZUxheWVyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aWxlVXJsID1cbiAgICAgIG1hcFRoZW1lID09PSAnZGFyaydcbiAgICAgICAgPyAnaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tL2RhcmtfYWxsL3t6fS97eH0ve3l9e3J9LnBuZydcbiAgICAgICAgOiAnaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tL3Jhc3RlcnRpbGVzL3ZveWFnZXJfbm9sYWJlbHMve3p9L3t4fS97eX17cn0ucG5nJztcblxuICAgIEwudGlsZUxheWVyKHRpbGVVcmwsIHtcbiAgICAgIHN1YmRvbWFpbnM6ICdhYmNkJyxcbiAgICAgIG1heFpvb206IDE5LFxuICAgIH0pLmFkZFRvKG1hcCk7XG5cbiAgICAvLyBSZS1yZW5kZXIgR2VvSlNPTiBzbyBpdCBzaXRzIGFib3ZlIHRoZSBuZXcgdGlsZSBsYXllclxuICAgIGlmIChnZW9Kc29uTGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgZ2VvSnNvbkxheWVyUmVmLmN1cnJlbnQuYnJpbmdUb0Zyb250KCk7XG4gICAgfVxuICB9LCBbbWFwVGhlbWVdKTtcblxuICAvLyBVcGRhdGUgR2VvSlNPTiAmIE1hcmtlcnMgd2hlbiBtb2RlIG9yIHNlbGVjdGVkQWltYWcgY2hhbmdlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG1hcEluc3RhbmNlUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGlmIChnZW9Kc29uTGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgbWFwLnJlbW92ZUxheWVyKGdlb0pzb25MYXllclJlZi5jdXJyZW50KTtcbiAgICB9XG4gICAgaWYgKG1hcmtlcnNMYXllclJlZi5jdXJyZW50KSB7XG4gICAgICBtYXJrZXJzTGF5ZXJSZWYuY3VycmVudC5jbGVhckxheWVycygpO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgZ2VvRGF0YSA9IG1vbmdvbGlhR2VvRGF0YSBhcyBhbnk7XG5cbiAgICBjb25zdCBnZW9Kc29uTGF5ZXIgPSBMLmdlb0pTT04oZ2VvRGF0YSwge1xuICAgICAgc3R5bGU6IChmZWF0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoYXBlTmFtZSA9IGZlYXR1cmU/LnByb3BlcnRpZXM/LnNoYXBlTmFtZSB8fCAnJztcbiAgICAgICAgY29uc3QgYWltYWcgPSBnZXRBaW1hZ0J5U2hhcGVOYW1lKHNoYXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEFpbWFnPy5pZCA9PT0gYWltYWc/LmlkO1xuICAgICAgICBjb25zdCBjb2xvciA9IGdldEZlYXR1cmVDb2xvcihhaW1hZyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxuICAgICAgICAgIHdlaWdodDogaXNTZWxlY3RlZCA/IDMuNSA6IDEuNSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGNvbG9yOiBpc1NlbGVjdGVkID8gJyNmYmJmMjQnIDogJyMxZTI5M2InLFxuICAgICAgICAgIGRhc2hBcnJheTogaXNTZWxlY3RlZCA/ICcnIDogJzEnLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiBpc1NlbGVjdGVkID8gMC44NSA6IDAuNjUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgb25FYWNoRmVhdHVyZTogKGZlYXR1cmUsIGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoYXBlTmFtZSA9IGZlYXR1cmU/LnByb3BlcnRpZXM/LnNoYXBlTmFtZSB8fCAnJztcbiAgICAgICAgY29uc3QgYWltYWcgPSBnZXRBaW1hZ0J5U2hhcGVOYW1lKHNoYXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFhaW1hZykgcmV0dXJuO1xuXG4gICAgICAgIC8vIEN1c3RvbSBjbGVhbiB0b29sdGlwXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIdG1sID0gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LTIgdGV4dC14cyBmb250LXNhbnMgYmctc2xhdGUtOTAwLzk1IHRleHQtc2xhdGUtMTAwIHJvdW5kZWQtbGcgc2hhZG93LXhsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzgwIGJhY2tkcm9wLWJsdXItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LWFtYmVyLTQwMCBtYi0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHthaW1hZy5uYW1lTW59INCw0LnQvNCw0LM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bMTBweF0gcHgtMS41IHB5LTAuNSByb3VuZGVkIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICAgICAgYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdjcml0aWNhbCdcbiAgICAgICAgICAgICAgICAgID8gJ2JnLXJlZC01MDAvMzAgdGV4dC1yZWQtMzAwJ1xuICAgICAgICAgICAgICAgICAgOiBhaW1hZy5kenVkUmlzay5sZXZlbCA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICA/ICdiZy1vcmFuZ2UtNTAwLzMwIHRleHQtb3JhbmdlLTMwMCdcbiAgICAgICAgICAgICAgICAgIDogJ2JnLWVtZXJhbGQtNTAwLzMwIHRleHQtZW1lcmFsZC0zMDAnXG4gICAgICAgICAgICAgIH1cIj4ke2FpbWFnLmR6dWRSaXNrLmxldmVsTGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0wLjUgdGV4dC1zbGF0ZS0zMDAgdGV4dC1bMTFweF1cIj5cbiAgICAgICAgICAgICAgPGRpdj7QotOp0LI6IDxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPiR7YWltYWcuY2VudGVyTW59PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PtCc0LDQu9GL0L0g0YLQvtC+OiA8c3BhbiBjbGFzcz1cInRleHQtYW1iZXItMzAwIGZvbnQtc2VtaWJvbGRcIj4keyhhaW1hZy5saXZlc3RvY2sudG90YWwgLyAxMDAwMDAwKS50b0ZpeGVkKDIpfSDRgdCw0Y88L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YY6IDxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bVwiPiR7YWltYWcucGFzdHVyZS5vdmVybG9hZFJhdGlvfXggKCR7YWltYWcucGFzdHVyZS5zdGF0dXNMYWJlbH0pPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PtCm0LDRgdC90Ysg0LfRg9C30LDQsNC9OiA8c3BhbiBjbGFzcz1cInRleHQtY3lhbi0zMDAgZm9udC1tZWRpdW1cIj4ke2FpbWFnLmR6dWRSaXNrLnNub3dEZXB0aENtfSDRgdC8PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgbGF5ZXIuYmluZFRvb2x0aXAodG9vbHRpcEh0bWwsIHtcbiAgICAgICAgICBzdGlja3k6IHRydWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiAnYXV0bycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnbGVhZmxldC1jdXN0b20tdG9vbHRpcCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxheWVyLm9uKHtcbiAgICAgICAgICBtb3VzZW92ZXI6IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBsLnNldFN0eWxlKHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiAzLFxuICAgICAgICAgICAgICBjb2xvcjogJyMzOGJkZjgnLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC44NSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbC5icmluZ1RvRnJvbnQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdXNlb3V0OiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgaXNTZWwgPSBzZWxlY3RlZEFpbWFnPy5pZCA9PT0gYWltYWcuaWQ7XG4gICAgICAgICAgICBsLnNldFN0eWxlKHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiBpc1NlbCA/IDMuNSA6IDEuNSxcbiAgICAgICAgICAgICAgY29sb3I6IGlzU2VsID8gJyNmYmJmMjQnIDogJyMxZTI5M2InLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogaXNTZWwgPyAwLjg1IDogMC42NSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIG9uU2VsZWN0QWltYWcoYWltYWcpO1xuICAgICAgICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2YgTC5Qb2x5Z29uKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJvdW5kcyA9IGxheWVyLmdldEJvdW5kcygpO1xuICAgICAgICAgICAgICBtYXAuZmx5VG9Cb3VuZHMoYm91bmRzLCB7IHBhZGRpbmc6IFs1MCwgNTBdLCBkdXJhdGlvbjogMS4yIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KS5hZGRUbyhtYXApO1xuXG4gICAgZ2VvSnNvbkxheWVyUmVmLmN1cnJlbnQgPSBnZW9Kc29uTGF5ZXI7XG5cbiAgICAvLyBBZGQgQ2VudGVyIE1hcmtlcnMgbWF0Y2hpbmcgdXNlcidzIHNjcmVlbnNob3RcbiAgICBpZiAobWFya2Vyc0xheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIEFJTUFHU19EQVRBLmZvckVhY2goKGFpbWFnKSA9PiB7XG4gICAgICAgIGNvbnN0IFtsYXQsIGxuZ10gPSBhaW1hZy5jZW50ZXJDb29yZGluYXRlcztcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQWltYWc/LmlkID09PSBhaW1hZy5pZDtcblxuICAgICAgICAvLyBDdXN0b20gY2lyY3VsYXIgbWFya2VyIGJhZGdlXG4gICAgICAgIGNvbnN0IG1hcmtlckNvbG9yID1cbiAgICAgICAgICBhaW1hZy5kenVkUmlzay5sZXZlbCA9PT0gJ2NyaXRpY2FsJ1xuICAgICAgICAgICAgPyAnI2VmNDQ0NCdcbiAgICAgICAgICAgIDogYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdoaWdoJ1xuICAgICAgICAgICAgPyAnI2Y5NzMxNidcbiAgICAgICAgICAgIDogYWltYWcuZHp1ZFJpc2subGV2ZWwgPT09ICdtb2RlcmF0ZSdcbiAgICAgICAgICAgID8gJyNlYWIzMDgnXG4gICAgICAgICAgICA6ICcjMTBiOTgxJztcblxuICAgICAgICBjb25zdCBjaXJjbGUgPSBMLmNpcmNsZU1hcmtlcihbbGF0LCBsbmddLCB7XG4gICAgICAgICAgcmFkaXVzOiBpc1NlbGVjdGVkID8gOCA6IDYsXG4gICAgICAgICAgZmlsbENvbG9yOiBtYXJrZXJDb2xvcixcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIHdlaWdodDogMixcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjk1LFxuICAgICAgICB9KTtcblxuICAgICAgICBjaXJjbGUuYmluZFRvb2x0aXAoXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJmb250LXNlbWlib2xkIHRleHQteHMgcHktMC41IHB4LTFcIj4ke2FpbWFnLm5hbWVNbn0gKCR7YWltYWcuZHp1ZFJpc2suc25vd0RlcHRoQ2190YHQvCDRhtCw0YEpPC9kaXY+YCxcbiAgICAgICAgICB7IGRpcmVjdGlvbjogJ3RvcCcsIG9mZnNldDogWzAsIC02XSB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY2lyY2xlLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBvblNlbGVjdEFpbWFnKGFpbWFnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2Vyc0xheWVyUmVmLmN1cnJlbnQ/LmFkZExheWVyKGNpcmNsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFttb2RlLCBzZWxlY3RlZEFpbWFnXSk7XG5cbiAgY29uc3QgaGFuZGxlUmVzZXRWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG1hcEluc3RhbmNlUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFtYXApIHJldHVybjtcbiAgICBjb25zdCBzb3V0aFdlc3QgPSBMLmxhdExuZyg0MS4yLCA4Ny4wKTtcbiAgICBjb25zdCBub3J0aEVhc3QgPSBMLmxhdExuZyg1Mi41LCAxMjAuNSk7XG4gICAgbWFwLmZseVRvQm91bmRzKEwubGF0TG5nQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KSwgeyBkdXJhdGlvbjogMS4yLCBwYWRkaW5nOiBbMjAsIDIwXSB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZEFpbWFncyA9IEFJTUFHU19EQVRBLmZpbHRlcihcbiAgICAoYSkgPT5cbiAgICAgIGEubmFtZU1uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGEubmFtZUVuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGEuY2VudGVyTW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGJnLXNsYXRlLTk1MCBzaGFkb3ctMnhsXCI+XG4gICAgICB7LyogTWFwIEhlYWRlciBUb29sYmFyIG1hdGNoaW5nIFNjcmVlbnNob3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTUgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMC84MCBiZy1zbGF0ZS05MDAvOTAgYmFja2Ryb3AtYmx1ci1tZCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+0JzQvtC90LPQvtC7INCj0LvRgdGL0L0g0LDQudC80LPRg9GD0LQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDAvMjAgdGV4dC1ibHVlLTMwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgMjEg0LDQudC80LDQsyArINCd0LjQudGB0LvRjdC7XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtNDAwIG10LTFcIj5cbiAgICAgICAgICAgINCQ0LnQvNCw0LMg0LTRjdGN0YAg0LTQsNGA0LYg0YHQvtC90LPQvtC90L4g0YPRgy4g0KLRjdC80LTRjdCz0LvRjdCz0Y3RjSDQvdGMINGG0LDRgdC90Ysg0LfRg9C30LDQsNC9LCDQsdGN0LvRh9GN0Y3RgNC40LnQvSDQtNCw0LDRhiDQsdC+0LvQvtC9INC30YPQtNGL0L0g0Y3RgNGB0LTRjdC70LjQudC9INKv0L3RjdC70LPRjdGN0LMg0YXQsNGA0YPRg9C70L3QsC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUb29sYmFyIEFjdGlvbiBCdXR0b25zICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgIHsvKiBRdWljayBTZWFyY2ggKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc2xhdGUtNDAwIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCQ0LnQvNCz0LjQudC9INC90Y3RgNGN0Y3RgCDRhdCw0LnRhS4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTkgcHItMyBweS0xLjUgdGV4dC14cyByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMC85MCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAvNTAgdy00NCBzbTp3LTU2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7c2VhcmNoUXVlcnkgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIGxlZnQtMCByaWdodC0wIG10LTEgbWF4LWgtNTYgb3ZlcmZsb3cteS1hdXRvIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCByb3VuZGVkLXhsIHNoYWRvdy0yeGwgei01MCBkaXZpZGUteSBkaXZpZGUtc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkQWltYWdzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHRleHQteHMgdGV4dC1zbGF0ZS00MDAgdGV4dC1jZW50ZXJcIj7QntC70LTRgdC+0L3Qs9Kv0Lk8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgZmlsdGVyZWRBaW1hZ3MubWFwKChhaW1hZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXthaW1hZy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEFpbWFnKGFpbWFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgcHgtMyBweS0yIGhvdmVyOmJnLXNsYXRlLTgwMCB0ZXh0LXhzIHRleHQtc2xhdGUtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57YWltYWcubmFtZU1ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPnthaW1hZy5kenVkUmlzay5sZXZlbExhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSZXNldCBab29tICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0Vmlld31cbiAgICAgICAgICAgIHRpdGxlPVwi0JHSr9GFINC90YPRgtCz0LjQudCzINGF0LDRgNCw0YVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQteGwgYmctc2xhdGUtODAwIGhvdmVyOmJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSb3RhdGVDY3cgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogTWFwIEJhc2UgVGlsZSBTd2l0Y2hlciAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNYXBUaGVtZShtYXBUaGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpfVxuICAgICAgICAgICAgdGl0bGU9XCLQk9Cw0LfRgNGL0L0g0LfRg9GA0LPQuNC50L0g0YHRg9GD0YDRjCDRgdC+0LvQuNGFXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGF5ZXJzIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPnttYXBUaGVtZSA9PT0gJ2xpZ2h0JyA/ICfQptCw0LnQstCw0YAg0LTRjdCy0YHQs9GN0YAnIDogJ9Cl0LDRgNCw0L3RhdGD0Lkg0LTRjdCy0YHQs9GN0YAnfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBSZWZyZXNoIERhdGEgYnV0dG9uICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVmcmVzaH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1JlZnJlc2hpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMuNSBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLXhsIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtd2hpdGUgc2hhZG93LWxnIHNoYWRvdy1ibHVlLTYwMC8zMCB0cmFuc2l0aW9uIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSb3RhdGVDY3cgY2xhc3NOYW1lPXtgdy0zLjUgaC0zLjUgJHtpc1JlZnJlc2hpbmcgPyAnYW5pbWF0ZS1zcGluJyA6ICcnfWB9IC8+XG4gICAgICAgICAgICA8c3Bhbj57aXNSZWZyZXNoaW5nID8gJ9Co0LjQvdGN0YfQuNC70LYg0LHQsNC50L3QsC4uLicgOiAn0KjQuNC90Y3Rh9C70Y3RhSd9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9kZSBTd2l0Y2hlciBUYWJzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIuNSBiZy1zbGF0ZS05MDAvNjAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsYmFyLW5vbmVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTQwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgcGwtMVwiPlxuICAgICAgICAgINCX0YPRgNCz0LjQudC9INGF0LDRgNCw0LPQtNCw0YY6XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTW9kZUNoYW5nZSgnZHp1ZFJpc2snKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgdGV4dC14cyByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgbW9kZSA9PT0gJ2R6dWRSaXNrJ1xuICAgICAgICAgICAgICA/ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1yZWQtNTAwLzI1J1xuICAgICAgICAgICAgICA6ICdiZy1zbGF0ZS04MDAvODAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtODAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgPHNwYW4+0JfRg9C00YvQvSDRjdGA0YHQtNGN0Ls8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk1vZGVDaGFuZ2UoJ3Bhc3R1cmUnKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgdGV4dC14cyByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgbW9kZSA9PT0gJ3Bhc3R1cmUnXG4gICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctYW1iZXItNjAwLzI1J1xuICAgICAgICAgICAgICA6ICdiZy1zbGF0ZS04MDAvODAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtODAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8V2luZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgPHNwYW4+0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YY8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk1vZGVDaGFuZ2UoJ3Nub3cnKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgdGV4dC14cyByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgbW9kZSA9PT0gJ3Nub3cnXG4gICAgICAgICAgICAgID8gJ2JnLWN5YW4tNjAwIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1jeWFuLTYwMC8yNSdcbiAgICAgICAgICAgICAgOiAnYmctc2xhdGUtODAwLzgwIHRleHQtc2xhdGUtMzAwIGhvdmVyOmJnLXNsYXRlLTgwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8c3Bhbj7QptCw0YHQvdGLINC30YPQt9Cw0LDQvTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTW9kZUNoYW5nZSgnbGl2ZXN0b2NrJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xIHRleHQteHMgcm91bmRlZC1sZyBmb250LW1lZGl1bSB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgIG1vZGUgPT09ICdsaXZlc3RvY2snXG4gICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LWluZGlnby02MDAvMjUnXG4gICAgICAgICAgICAgIDogJ2JnLXNsYXRlLTgwMC84MCB0ZXh0LXNsYXRlLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPvCfkI4g0JzQsNC70YvQvSDRgtC+0L4g0YLQvtC70LPQvtC5PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFwIFZpZXdwb3J0IENvbnRhaW5lciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzU0MHB4XSBzbTpoLVs2MjBweF1cIj5cbiAgICAgICAgPGRpdiByZWY9e21hcENvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCB6LTEwXCIgLz5cblxuICAgICAgICB7LyogTGVnZW5kIEJveCBmbG9hdGluZyBpbiBib3R0b20tbGVmdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTQgei0yMCBwLTMgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAvODUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC84MCBzaGFkb3ctMnhsIHRleHQtWzExcHhdIHRleHQtc2xhdGUtMzAwIHBvaW50ZXItZXZlbnRzLWF1dG8gbWF4LXcteHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYi0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHttb2RlID09PSAnZHp1ZFJpc2snICYmICfQl9GD0LTRi9C9INGN0YDRgdC00Y3Qu9C40LnQvSDQt9GN0YDRjdCz0LvRjdC7J31cbiAgICAgICAgICAgICAge21vZGUgPT09ICdwYXN0dXJlJyAmJiAn0JHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YbRi9C9INCw0YfQsNCw0LvQsNC7J31cbiAgICAgICAgICAgICAge21vZGUgPT09ICdzbm93JyAmJiAn0KbQsNGB0L3RiyDQt9GD0LfQsNCw0L0gKNGB0LwpJ31cbiAgICAgICAgICAgICAge21vZGUgPT09ICdsaXZlc3RvY2snICYmICfQnNCw0LvRi9C9INGC0L7QviDRgtC+0LvQs9C+0LknfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge21vZGUgPT09ICdkenVkUmlzaycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1yZWQtNjAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCd0Y3QvSDQuNGFINGN0YDRgdC00Y3Qu9GC0Y3QuSAo0JrRgNC40YLQuNC6KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSByb3VuZGVkIGJnLW9yYW5nZS01MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JjRhSDRjdGA0YHQtNGN0LvRgtGN0Lk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1hbWJlci01MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JTRg9C90LQg0Y3RgNGB0LTRjdC70YLRjdC5PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHJvdW5kZWQgYmctZW1lcmFsZC01MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JHQsNCz0LAg0Y3RgNGB0LTRjdC70YLRjdC5IC8g0KXRjdCy0LjQudC9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7bW9kZSA9PT0gJ3Bhc3R1cmUnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHJvdW5kZWQgYmctcmVkLTcwMCBpbmxpbmUtYmxvY2sgc2hyaW5rLTAgc2hhZG93LXNtXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7QlNCw0LDRhiAzLdCw0LDRgSDQtNGN0Y3RiCDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1vcmFuZ2UtNjAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCU0LDQsNGGIDItMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1hbWJlci02MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JTQsNCw0YYgMS0yINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSByb3VuZGVkIGJnLWVtZXJhbGQtNjAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCU0LDQsNGGINGF0q/RgNGN0LvRhtGN0Y3RgtGN0LkgLyDQpdGN0LLQuNC50L08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHttb2RlID09PSAnc25vdycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1za3ktNjAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjMwINGB0Lwt0Y3RjdGBINC00Y3RjdGIICjQndGN0L0g0LjRhSk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1za3ktNDAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjIwIC0gMzAg0YHQvCAo0JjRhSk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgcm91bmRlZCBiZy1ibHVlLTMwMCBpbmxpbmUtYmxvY2sgc2hyaW5rLTAgc2hhZG93LXNtXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj4xMCAtIDIwINGB0LwgKNCU0YPQvdC0INC30Y3RgNGN0LMpPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHJvdW5kZWQgYmctc2xhdGUtNDAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjEwINGB0Lwg0YXSr9GA0YLRjdC7ICjQkdCw0LPQsCk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHttb2RlID09PSAnbGl2ZXN0b2NrJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSByb3VuZGVkIGJnLXZpb2xldC02MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+NSDRgdCw0Y/QsNGBINC00Y3RjdGIINGC0L7Qu9Cz0L7QuTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSByb3VuZGVkIGJnLWluZGlnby01MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+My41IC0gNSDRgdCw0Y8g0YLQvtC70LPQvtC5PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHJvdW5kZWQgYmctYmx1ZS01MDAgaW5saW5lLWJsb2NrIHNocmluay0wIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+MiAtIDMuNSDRgdCw0Y8g0YLQvtC70LPQvtC5PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHJvdW5kZWQgYmctc2xhdGUtNDAwIGlubGluZS1ibG9jayBzaHJpbmstMCBzaGFkb3ctc21cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjIg0YHQsNGPINGF0q/RgNGC0Y3QuyDRgtC+0LvQs9C+0Lk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNlbGVjdGVkIEFpbWFnIEZsb2F0aW5nIFF1aWNrIEJhZGdlICovfVxuICAgICAgICB7c2VsZWN0ZWRBaW1hZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMjAgcC0zLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC80MCBzaGFkb3ctMnhsIHRleHQteHMgdGV4dC13aGl0ZSBtYXgtdy14cyBhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS10b3AtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgbWItMS41XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1hbWJlci00MDBcIj57c2VsZWN0ZWRBaW1hZy5uYW1lTW59PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQgZm9udC1zZW1pYm9sZCAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBaW1hZy5kenVkUmlzay5sZXZlbCA9PT0gJ2NyaXRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICA/ICdiZy1yZWQtNTAwLzIwIHRleHQtcmVkLTMwMCBib3JkZXIgYm9yZGVyLXJlZC01MDAvMzAnXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZWN0ZWRBaW1hZy5kenVkUmlzay5sZXZlbCA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS01MDAvMjAgdGV4dC1vcmFuZ2UtMzAwIGJvcmRlciBib3JkZXItb3JhbmdlLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTMwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQWltYWcuZHp1ZFJpc2subGV2ZWxMYWJlbH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMCB0ZXh0LVsxMXB4XSBsZWFkaW5nLXJlbGF4ZWQgbGluZS1jbGFtcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAge3NlbGVjdGVkQWltYWcuZHp1ZFJpc2suc3VtbWFyeX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdIHB0LTEuNSBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuPtCm0LDRgTogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWN5YW4tMzAwXCI+e3NlbGVjdGVkQWltYWcuZHp1ZFJpc2suc25vd0RlcHRoQ219INGB0Lw8L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPtCc0LDQu9GL0L0g0YLQvtC+OiA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtYW1iZXItMzAwXCI+eyhzZWxlY3RlZEFpbWFnLmxpdmVzdG9jay50b3RhbCAvIDEwMDAwMDApLnRvRml4ZWQoMSl9INGB0LDRjzwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19