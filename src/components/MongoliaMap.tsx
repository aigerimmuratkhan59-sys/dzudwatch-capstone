import { useState } from 'react';
import { AlertTriangle, Layers, RotateCcw, Search, Sparkles, Wind } from 'lucide-react';
import { AIMAGS_DATA } from '../data/aimagData';

type Aimag = (typeof AIMAGS_DATA)[number];

type Props = {
  selectedAimag?: Aimag | null;
  onSelectAimag: (aimag: Aimag) => void;
  mode: string;
  onModeChange: (mode: string) => void;
  onRefresh: () => void;
  isRefreshing?: boolean;
};

export const MongoliaMap = ({ selectedAimag, onSelectAimag, mode, onModeChange, onRefresh, isRefreshing = false }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapTheme, setMapTheme] = useState('light');

  const filteredAimags = AIMAGS_DATA.filter((aimag) => {
    const q = searchQuery.toLowerCase();
    return !q || aimag.nameMn.toLowerCase().includes(q) || aimag.nameEn.toLowerCase().includes(q) || aimag.centerMn.toLowerCase().includes(q);
  });

  const getMapValue = (aimag: Aimag) => {
    if (mode === 'pasture') return `${aimag.pasture.overloadRatio}x`;
    if (mode === 'snow') return `${aimag.dzudRisk.snowDepthCm} см`;
    if (mode === 'livestock') return `${(aimag.livestock.total / 1_000_000).toFixed(1)} сая`;
    return `${aimag.dzudRisk.score} оноо`;
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
      <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Монгол Улсын аймгууд</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">21 аймаг + Нийслэл</span>
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">Танд ойр байгаа аймгуудыг сонгож, эрсдэлийг харна.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500" placeholder="Аймаг хайх" />
          </div>
          <button onClick={onRefresh} className="flex items-center gap-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 px-3 py-2 text-sm hover:bg-slate-700">
            <RotateCcw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Сэргээх
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
          <div className={`relative h-[320px] rounded-2xl border border-slate-800 overflow-hidden ${mapTheme === 'light' ? 'bg-slate-200' : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_20%),linear-gradient(rgba(15,23,42,0.8),rgba(15,23,42,0.95))]'}`}>
            <div className={`absolute inset-0 ${mapTheme === 'light' ? 'opacity-50' : 'opacity-30'}`} style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            {AIMAGS_DATA.map((aimag, index) => {
              const x = 10 + ((index * 13) % 70);
              const y = 20 + ((index * 17) % 60);
              const isSelected = selectedAimag?.id === aimag.id;
              return (
                <button
                  key={aimag.id}
                  onClick={() => onSelectAimag(aimag)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border px-2 py-1 text-[10px] font-semibold ${isSelected ? 'bg-amber-400 text-slate-950 border-amber-200' : mapTheme === 'light' ? 'bg-white/90 text-slate-800 border-slate-400' : 'bg-slate-900/90 text-slate-200 border-slate-700'} shadow-lg`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="block">{aimag.nameMn}</span>
                  <span className="block text-[9px] opacity-75">{getMapValue(aimag)}</span>
                </button>
              );
            })}
            {selectedAimag && (
              <div className="absolute bottom-4 left-4 rounded-2xl border border-blue-500/30 bg-slate-950/80 px-3 py-2 text-sm text-slate-200">
                <div className="text-xs text-blue-300">Сонгосон аймаг</div>
                <div className="font-bold text-white">{selectedAimag.nameMn}</div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
              <div className="flex items-center gap-2 text-slate-200 font-semibold mb-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Газрын зургийн горим</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['dzudRisk', 'pasture', 'snow', 'livestock'].map((option) => (
                  <button
                    key={option}
                    onClick={() => onModeChange(option)}
                    className={`rounded-xl border px-2 py-2 text-xs font-medium ${mode === option ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' : 'bg-slate-950 border-slate-700 text-slate-300'}`}
                  >
                    {option === 'dzudRisk' ? 'Зуд' : option === 'pasture' ? 'Бэлчээр' : option === 'snow' ? 'Цас' : 'Мал'}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
              <div className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Гар утсан тохиргоо</span>
              </div>
              <button onClick={() => setMapTheme(mapTheme === 'light' ? 'dark' : 'light')} className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-200">
                {mapTheme === 'light' ? 'Цайвар дэвсгэр' : 'Харанхуй дэвсгэр'}
              </button>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
              <div className="flex items-center gap-2 text-slate-200 font-semibold mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>Идэвхтэй онцлол</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between"><span>Нэн их эрсдэлтэй</span><span className="text-red-300">{AIMAGS_DATA.filter((a) => a.dzudRisk.level === 'critical').length}</span></div>
                <div className="flex justify-between"><span>Их эрсдэлтэй</span><span className="text-orange-300">{AIMAGS_DATA.filter((a) => a.dzudRisk.level === 'high').length}</span></div>
                <div className="flex justify-between"><span>Дунд</span><span className="text-amber-300">{AIMAGS_DATA.filter((a) => a.dzudRisk.level === 'moderate').length}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAimags.map((aimag) => (
            <button key={aimag.id} onClick={() => onSelectAimag(aimag)} className="text-left rounded-2xl border border-slate-800 bg-slate-900/60 p-3 hover:border-blue-500/40 transition">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-white">{aimag.nameMn}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${aimag.dzudRisk.level === 'critical' ? 'bg-red-500/20 text-red-300' : aimag.dzudRisk.level === 'high' ? 'bg-orange-500/20 text-orange-300' : aimag.dzudRisk.level === 'moderate' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                  {aimag.dzudRisk.levelLabel}
                </span>
              </div>
              <div className="mt-2 text-xs text-slate-400">{aimag.centerMn}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
