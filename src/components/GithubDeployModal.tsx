const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const JSZip = __vite__cjsImport2_jszip;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b1781e21";
import { Check, Copy, Download, Github, Globe, HelpCircle, X } from "/node_modules/.vite/deps/lucide-react.js?v=b1781e21";
import __vite__cjsImport2_jszip from "/node_modules/.vite/deps/jszip.js?v=b1781e21";
var _jsxFileName = "/app/applet/src/components/GithubDeployModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b1781e21";
export const GithubDeployModal = ({ isOpen, onClose }) => {
	const [copiedIndex, setCopiedIndex] = useState(null);
	const [isExportingZip, setIsExportingZip] = useState(false);
	const [repoName, setRepoName] = useState("dzud-watch-mongolia");
	const [githubUsername, setGithubUsername] = useState("your-username");
	if (!isOpen) return null;
	const copyToClipboard = (text, index) => {
		navigator.clipboard.writeText(text);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2e3);
	};
	const gitCommands = [
		`git init`,
		`git add .`,
		`git commit -m "feat: Dzud Watch Mongolia complete platform"`,
		`git branch -M main`,
		`git remote add origin https://github.com/${githubUsername}/${repoName}.git`,
		`git push -u origin main`
	].join("\n");
	// Client-side ZIP generator for instantaneous export!
	const handleDownloadZip = async () => {
		setIsExportingZip(true);
		try {
			const zip = new JSZip();
			// Core files to export
			const filesToFetch = [
				"/package.json",
				"/index.html",
				"/vite.config.ts",
				"/tsconfig.json",
				"/metadata.json",
				"/.env.example",
				"/.gitignore",
				"/README.md",
				"/src/main.tsx",
				"/src/App.tsx",
				"/src/index.css",
				"/src/types/index.ts",
				"/src/data/aimagData.ts",
				"/src/data/mongolia-aimags.json",
				"/src/services/weatherService.ts",
				"/src/components/MongoliaMap.tsx",
				"/src/components/AimagDetailDrawer.tsx",
				"/src/components/AimagsDirectory.tsx",
				"/src/components/HerderAdvisorySection.tsx",
				"/src/components/StatisticsOverview.tsx",
				"/src/components/GithubDeployModal.tsx"
			];
			for (const filePath of filesToFetch) {
				try {
					const res = await fetch(filePath);
					if (res.ok) {
						const content = await res.text();
						// remove leading slash for zip paths
						zip.file(filePath.replace(/^\//, ""), content);
					}
				} catch (e) {
					console.warn(`Could not add ${filePath} to ZIP:`, e);
				}
			}
			const blob = await zip.generateAsync({ type: "blob" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `${repoName}.zip`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (err) {
			console.error("ZIP generation error:", err);
		} finally {
			setIsExportingZip(false);
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-2.5 rounded-2xl bg-slate-800 border border-slate-700 text-white",
							children: /* @__PURE__ */ _jsxDEV(Github, { className: "w-6 h-6" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "text-xl font-bold text-white",
							children: "GitHub руу байршуулах (Deploy) заавар"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-slate-400 mt-0.5",
							children: "Энэхүү төслийг өөрийн GitHub хаягтаа хадгалж, Vercel эсвэл GitHub Pages-д үнэгүй байршуулах"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 overflow-y-auto space-y-6 text-xs text-slate-300",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 flex items-start gap-3",
							children: [/* @__PURE__ */ _jsxDEV(HelpCircle, { className: "w-5 h-5 text-blue-400 shrink-0 mt-0.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-bold text-white text-sm",
									children: "Яагаад шууд GitHub-руу автоматаар түлхэгддэггүй вэ?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-slate-300 leading-relaxed text-xs",
									children: "GitHub нь хувийн нууцлал, аюулгүй байдлын үүднээс хэрэглэгчийн өөрийн Token эсвэл SSH түлхүүрийг шаарддаг. Тиймээс та доорх хоёр энгийн аргын аль нэгийг ашиглан 1 минутад GitHub-д байршуулах боломжтой:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 130,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] uppercase font-bold text-emerald-400 tracking-wider",
										children: "Арга 1 (Хамгийн хялбар - Командын мөр шаардахгүй)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("h4", {
										className: "text-base font-bold text-white mt-0.5",
										children: "Төслийн бүх кодыг .ZIP болгон татаж аваад GitHub-д чирж оруулах"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-slate-400 text-xs",
									children: "Доорх товч дээр дарахад таны веб аппликэйшний бүх эх код (React, Leaflet, өгөгдөл, загвар) бүтнээрээ .ZIP файл болон татагдана. Дараа нь GitHub.com дээр 'Upload files' дарахад л хангалттай!"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 154,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: handleDownloadZip,
									disabled: isExportingZip,
									className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 disabled:opacity-50",
									children: [/* @__PURE__ */ _jsxDEV(Download, { className: `w-4 h-4 ${isExportingZip ? "animate-bounce" : ""}` }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 163,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: isExportingZip ? "ZIP файл үүсгэж байна..." : "Төслийг .ZIP хэлбэрээр татах (Download Code)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 164,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] uppercase font-bold text-amber-400 tracking-wider",
										children: "Арга 2 (Хөгжүүлэгчийн арга - Git CLI)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("h4", {
										className: "text-base font-bold text-white mt-0.5",
										children: "Git команд ашиглан түлхэх (Push)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 170,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-[11px] text-slate-400 block mb-1",
										children: "Таны GitHub хэрэглэгчийн нэр:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: githubUsername,
										onChange: (e) => setGithubUsername(e.target.value),
										className: "w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white font-mono text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 182,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-[11px] text-slate-400 block mb-1",
										children: "Репозиторын нэр:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: repoName,
										onChange: (e) => setRepoName(e.target.value),
										className: "w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-white font-mono text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 192,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "relative mt-2",
									children: [/* @__PURE__ */ _jsxDEV("pre", {
										className: "p-4 rounded-xl bg-black border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto select-all leading-relaxed",
										children: gitCommands
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => copyToClipboard(gitCommands, 1),
										className: "absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-[11px] flex items-center gap-1 border border-slate-700 transition",
										children: [copiedIndex === 1 ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 211,
											columnNumber: 38
										}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 211,
											columnNumber: 91
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedIndex === 1 ? "Хуулагдлаа!" : "Хуулах" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 212,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 207,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 to-slate-950 border border-purple-900/40 space-y-2",
							children: [/* @__PURE__ */ _jsxDEV("h4", {
								className: "text-sm font-bold text-white flex items-center gap-2",
								children: [/* @__PURE__ */ _jsxDEV(Globe, { className: "w-4 h-4 text-purple-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Үнэгүй сервер дээр ажиллуулах (Vercel / Netlify)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-slate-300 text-xs leading-relaxed",
								children: [
									"GitHub-д оруулсны дараа та ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Vercel.com" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 42
									}, this),
									" эсвэл ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Netlify.com" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 76
									}, this),
									" руу орж 'Import GitHub Repository' дарахад таны Dzud Watch систем 30 секундийн дотор интернэтэд бүрэн ажиллаж эхэлнэ. Build command: ",
									/* @__PURE__ */ _jsxDEV("code", {
										className: "bg-slate-900 px-1 py-0.5 rounded text-amber-300",
										children: "npm run build"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 238
									}, this),
									", Output directory: ",
									/* @__PURE__ */ _jsxDEV("code", {
										className: "bg-slate-900 px-1 py-0.5 rounded text-amber-300",
										children: "dist"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 344
									}, this),
									"."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 218,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-slate-400",
						children: "Dzud Watch Capstone Project"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 231,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition",
						children: "Хаах"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 232,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 230,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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O01BQU0sV0FBVTtnQkFBaUI7S0FBaUM7Ozs7ZUFDbEUsd0JBQUMsVUFBRDtNQUNFLFNBQVM7TUFDVCxXQUFVO2dCQUNYO0tBRU87Ozs7YUFDTDs7Ozs7O0dBQ0Y7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkdpdGh1YkRlcGxveU1vZGFsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDaGVjayxcbiAgQ29weSxcbiAgRG93bmxvYWQsXG4gIEV4dGVybmFsTGluayxcbiAgR2l0aHViLFxuICBHbG9iZSxcbiAgSGVscENpcmNsZSxcbiAgVGVybWluYWwsXG4gIFgsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuXG5pbnRlcmZhY2UgR2l0aHViRGVwbG95TW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEdpdGh1YkRlcGxveU1vZGFsOiBSZWFjdC5GQzxHaXRodWJEZXBsb3lNb2RhbFByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjb3BpZWRJbmRleCwgc2V0Q29waWVkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0V4cG9ydGluZ1ppcCwgc2V0SXNFeHBvcnRpbmdaaXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVwb05hbWUsIHNldFJlcG9OYW1lXSA9IHVzZVN0YXRlKCdkenVkLXdhdGNoLW1vbmdvbGlhJyk7XG4gIGNvbnN0IFtnaXRodWJVc2VybmFtZSwgc2V0R2l0aHViVXNlcm5hbWVdID0gdXNlU3RhdGUoJ3lvdXItdXNlcm5hbWUnKTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKHRleHQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIHNldENvcGllZEluZGV4KGluZGV4KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZEluZGV4KG51bGwpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBnaXRDb21tYW5kcyA9IFtcbiAgICBgZ2l0IGluaXRgLFxuICAgIGBnaXQgYWRkIC5gLFxuICAgIGBnaXQgY29tbWl0IC1tIFwiZmVhdDogRHp1ZCBXYXRjaCBNb25nb2xpYSBjb21wbGV0ZSBwbGF0Zm9ybVwiYCxcbiAgICBgZ2l0IGJyYW5jaCAtTSBtYWluYCxcbiAgICBgZ2l0IHJlbW90ZSBhZGQgb3JpZ2luIGh0dHBzOi8vZ2l0aHViLmNvbS8ke2dpdGh1YlVzZXJuYW1lfS8ke3JlcG9OYW1lfS5naXRgLFxuICAgIGBnaXQgcHVzaCAtdSBvcmlnaW4gbWFpbmAsXG4gIF0uam9pbignXFxuJyk7XG5cbiAgLy8gQ2xpZW50LXNpZGUgWklQIGdlbmVyYXRvciBmb3IgaW5zdGFudGFuZW91cyBleHBvcnQhXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkWmlwID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRXhwb3J0aW5nWmlwKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKTtcblxuICAgICAgLy8gQ29yZSBmaWxlcyB0byBleHBvcnRcbiAgICAgIGNvbnN0IGZpbGVzVG9GZXRjaCA9IFtcbiAgICAgICAgJy9wYWNrYWdlLmpzb24nLFxuICAgICAgICAnL2luZGV4Lmh0bWwnLFxuICAgICAgICAnL3ZpdGUuY29uZmlnLnRzJyxcbiAgICAgICAgJy90c2NvbmZpZy5qc29uJyxcbiAgICAgICAgJy9tZXRhZGF0YS5qc29uJyxcbiAgICAgICAgJy8uZW52LmV4YW1wbGUnLFxuICAgICAgICAnLy5naXRpZ25vcmUnLFxuICAgICAgICAnL1JFQURNRS5tZCcsXG4gICAgICAgICcvc3JjL21haW4udHN4JyxcbiAgICAgICAgJy9zcmMvQXBwLnRzeCcsXG4gICAgICAgICcvc3JjL2luZGV4LmNzcycsXG4gICAgICAgICcvc3JjL3R5cGVzL2luZGV4LnRzJyxcbiAgICAgICAgJy9zcmMvZGF0YS9haW1hZ0RhdGEudHMnLFxuICAgICAgICAnL3NyYy9kYXRhL21vbmdvbGlhLWFpbWFncy5qc29uJyxcbiAgICAgICAgJy9zcmMvc2VydmljZXMvd2VhdGhlclNlcnZpY2UudHMnLFxuICAgICAgICAnL3NyYy9jb21wb25lbnRzL01vbmdvbGlhTWFwLnRzeCcsXG4gICAgICAgICcvc3JjL2NvbXBvbmVudHMvQWltYWdEZXRhaWxEcmF3ZXIudHN4JyxcbiAgICAgICAgJy9zcmMvY29tcG9uZW50cy9BaW1hZ3NEaXJlY3RvcnkudHN4JyxcbiAgICAgICAgJy9zcmMvY29tcG9uZW50cy9IZXJkZXJBZHZpc29yeVNlY3Rpb24udHN4JyxcbiAgICAgICAgJy9zcmMvY29tcG9uZW50cy9TdGF0aXN0aWNzT3ZlcnZpZXcudHN4JyxcbiAgICAgICAgJy9zcmMvY29tcG9uZW50cy9HaXRodWJEZXBsb3lNb2RhbC50c3gnLFxuICAgICAgXTtcblxuICAgICAgZm9yIChjb25zdCBmaWxlUGF0aCBvZiBmaWxlc1RvRmV0Y2gpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChmaWxlUGF0aCk7XG4gICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgICAgICAgICAvLyByZW1vdmUgbGVhZGluZyBzbGFzaCBmb3IgemlwIHBhdGhzXG4gICAgICAgICAgICB6aXAuZmlsZShmaWxlUGF0aC5yZXBsYWNlKC9eXFwvLywgJycpLCBjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYENvdWxkIG5vdCBhZGQgJHtmaWxlUGF0aH0gdG8gWklQOmAsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJyB9KTtcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9IGAke3JlcG9OYW1lfS56aXBgO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdaSVAgZ2VuZXJhdGlvbiBlcnJvcjonLCBlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0V4cG9ydGluZ1ppcChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItbWQgYW5pbWF0ZS1pbiBmYWRlLWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy0yeGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzgwIHJvdW5kZWQtM3hsIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC1jb2wgbWF4LWgtWzkwdmhdXCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXNsYXRlLTk1MC83MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC0yeGwgYmctc2xhdGUtODAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5HaXRIdWIg0YDRg9GDINCx0LDQudGA0YjRg9GD0LvQsNGFIChEZXBsb3kpINC30LDQsNCy0LDRgDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAg0K3QvdGN0YXSr9KvINGC06nRgdC70LjQudCzINOp06nRgNC40LnQvSBHaXRIdWIg0YXQsNGP0LPRgtCw0LAg0YXQsNC00LPQsNC70LYsIFZlcmNlbCDRjdGB0LLRjdC7IEdpdEh1YiBQYWdlcy3QtCDSr9C90Y3Qs9Kv0Lkg0LHQsNC50YDRiNGD0YPQu9Cw0YVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENvbnRlbnQgQm9keSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgb3ZlcmZsb3cteS1hdXRvIHNwYWNlLXktNiB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgey8qIEV4cGxhbmF0aW9uIEJhbm5lciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBiZy1ibHVlLTk1MC80MCBib3JkZXIgYm9yZGVyLWJsdWUtODAwLzUwIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxIZWxwQ2lyY2xlIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ibHVlLTQwMCBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXNtXCI+0K/QsNCz0LDQsNC0INGI0YPRg9C0IEdpdEh1Yi3RgNGD0YMg0LDQstGC0L7QvNCw0YLQsNCw0YAg0YLSr9C70YXRjdCz0LTQtNGN0LPQs9Kv0Lkg0LLRjT88L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICBHaXRIdWIg0L3RjCDRhdGD0LLQuNC50L0g0L3Rg9GD0YbQu9Cw0LssINCw0Y7Rg9C70LPSr9C5INCx0LDQudC00LvRi9C9INKv0q/QtNC90Y3RjdGBINGF0Y3RgNGN0LPQu9GN0LPRh9C40LnQvSDTqdOp0YDQuNC50L0gVG9rZW4g0Y3RgdCy0Y3QuyBTU0gg0YLSr9C70YXSr9Kv0YDQuNC50LMg0YjQsNCw0YDQtNC00LDQsy5cbiAgICAgICAgICAgICAgICDQotC40LnQvNGN0Y3RgSDRgtCwINC00L7QvtGA0YUg0YXQvtGR0YAg0Y3QvdCz0LjQudC9INCw0YDQs9GL0L0g0LDQu9GMINC90Y3Qs9C40LnQsyDQsNGI0LjQs9C70LDQvSAxINC80LjQvdGD0YLQsNC0IEdpdEh1Yi3QtCDQsdCw0LnRgNGI0YPRg9C70LDRhSDQsdC+0LvQvtC80LbRgtC+0Lk6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1FVEhPRCAxOiBET1dOTE9BRCBBUyBaSVAgKEZBU1RFU1QgJiBFQVNJRVNUKSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1zbGF0ZS05NTAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTQwMCB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAg0JDRgNCz0LAgMSAo0KXQsNC80LPQuNC50L0g0YXRj9C70LHQsNGAIC0g0JrQvtC80LDQvdC00YvQvSDQvNOp0YAg0YjQsNCw0YDQtNCw0YXQs9Kv0LkpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICDQotOp0YHQu9C40LnQvSDQsdKv0YUg0LrQvtC00YvQsyAuWklQINCx0L7Qu9Cz0L7QvSDRgtCw0YLQsNC2INCw0LLQsNCw0LQgR2l0SHViLdC0INGH0LjRgNC2INC+0YDRg9GD0LvQsNGFXG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICDQlNC+0L7RgNGFINGC0L7QstGHINC00Y3RjdGAINC00LDRgNCw0YXQsNC0INGC0LDQvdGLINCy0LXQsSDQsNC/0L/Qu9C40LrRjdC50YjQvdC40Lkg0LHSr9GFINGN0YUg0LrQvtC0IChSZWFjdCwgTGVhZmxldCwg06nQs9Op0LPQtNOp0LssINC30LDQs9Cy0LDRgCkg0LHSr9GC0L3RjdGN0YDRjdGNIC5aSVAg0YTQsNC50Lsg0LHQvtC70L7QvSDRgtCw0YLQsNCz0LTQsNC90LAuINCU0LDRgNCw0LAg0L3RjCBHaXRIdWIuY29tINC00Y3RjdGAICdVcGxvYWQgZmlsZXMnINC00LDRgNCw0YXQsNC0INC7INGF0LDQvdCz0LDQu9GC0YLQsNC5IVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkWmlwfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHBvcnRpbmdaaXB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtNSBweS0yLjUgcm91bmRlZC14bCBiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHNoYWRvdy1sZyBzaGFkb3ctZW1lcmFsZC02MDAvMzAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9e2B3LTQgaC00ICR7aXNFeHBvcnRpbmdaaXAgPyAnYW5pbWF0ZS1ib3VuY2UnIDogJyd9YH0gLz5cbiAgICAgICAgICAgICAgPHNwYW4+e2lzRXhwb3J0aW5nWmlwID8gJ1pJUCDRhNCw0LnQuyDSr9Kv0YHQs9GN0LYg0LHQsNC50L3QsC4uLicgOiAn0KLTqdGB0LvQuNC50LMgLlpJUCDRhdGN0LvQsdGN0YDRjdGN0YAg0YLQsNGC0LDRhSAoRG93bmxvYWQgQ29kZSknfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1FVEhPRCAyOiBHSVQgVEVSTUlOQUwgQ09NTUFORFMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctc2xhdGUtOTUwLzgwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtYW1iZXItNDAwIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICDQkNGA0LPQsCAyICjQpdOp0LPQttKv0q/Qu9GN0LPRh9C40LnQvSDQsNGA0LPQsCAtIEdpdCBDTEkpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICBHaXQg0LrQvtC80LDQvdC0INCw0YjQuNCz0LvQsNC9INGC0q/Qu9GF0Y3RhSAoUHVzaClcbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBibG9jayBtYi0xXCI+0KLQsNC90YsgR2l0SHViINGF0Y3RgNGN0LPQu9GN0LPRh9C40LnQvSDQvdGN0YA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtnaXRodWJVc2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2l0aHViVXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCByb3VuZGVkLXhsIHB4LTMgcHktMS41IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQteHMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBibG9jayBtYi0xXCI+0KDQtdC/0L7Qt9C40YLQvtGA0YvQvSDQvdGN0YA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXBvTmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwb05hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCByb3VuZGVkLXhsIHB4LTMgcHktMS41IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQteHMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTJcIj5cbiAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1lbWVyYWxkLTQwMCBvdmVyZmxvdy14LWF1dG8gc2VsZWN0LWFsbCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICB7Z2l0Q29tbWFuZHN9XG4gICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVRvQ2xpcGJvYXJkKGdpdENvbW1hbmRzLCAxKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMi41IHJpZ2h0LTIuNSBweC0yLjUgcHktMSByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAgZm9udC1tZWRpdW0gdGV4dC1bMTFweF0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29waWVkSW5kZXggPT09IDEgPyA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1lbWVyYWxkLTQwMFwiIC8+IDogPENvcHkgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPn1cbiAgICAgICAgICAgICAgICA8c3Bhbj57Y29waWVkSW5kZXggPT09IDEgPyAn0KXRg9GD0LvQsNCz0LTQu9Cw0LAhJyA6ICfQpdGD0YPQu9Cw0YUnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBERVBMT1lNRU5UIFRPIFZFUkNFTCAvIEdJVEhVQiBQQUdFUyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTk1MC8zMCB0by1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1wdXJwbGUtOTAwLzQwIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEdsb2JlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wdXJwbGUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+0q7QvdGN0LPSr9C5INGB0LXRgNCy0LXRgCDQtNGN0Y3RgCDQsNC20LjQu9C70YPRg9C70LDRhSAoVmVyY2VsIC8gTmV0bGlmeSk8L3NwYW4+XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgdGV4dC14cyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgR2l0SHViLdC0INC+0YDRg9GD0LvRgdC90Ysg0LTQsNGA0LDQsCDRgtCwIDxzdHJvbmc+VmVyY2VsLmNvbTwvc3Ryb25nPiDRjdGB0LLRjdC7IDxzdHJvbmc+TmV0bGlmeS5jb208L3N0cm9uZz4g0YDRg9GDINC+0YDQtiAnSW1wb3J0IEdpdEh1YiBSZXBvc2l0b3J5JyDQtNCw0YDQsNGF0LDQtCDRgtCw0L3RiyBEenVkIFdhdGNoINGB0LjRgdGC0LXQvCAzMCDRgdC10LrRg9C90LTQuNC50L0g0LTQvtGC0L7RgCDQuNC90YLQtdGA0L3RjdGC0Y3QtCDQsdKv0YDRjdC9INCw0LbQuNC70LvQsNC2INGN0YXRjdC70L3RjS4gQnVpbGQgY29tbWFuZDogPGNvZGUgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHB4LTEgcHktMC41IHJvdW5kZWQgdGV4dC1hbWJlci0zMDBcIj5ucG0gcnVuIGJ1aWxkPC9jb2RlPiwgT3V0cHV0IGRpcmVjdG9yeTogPGNvZGUgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHB4LTEgcHktMC41IHJvdW5kZWQgdGV4dC1hbWJlci0zMDBcIj5kaXN0PC9jb2RlPi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBiZy1zbGF0ZS05NTAvODAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMFwiPkR6dWQgV2F0Y2ggQ2Fwc3RvbmUgUHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQteGwgYmctc2xhdGUtODAwIGhvdmVyOmJnLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRyYW5zaXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgINCl0LDQsNGFXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19