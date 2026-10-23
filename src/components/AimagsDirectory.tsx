import { useState } from 'react';
import { Grid, List, MapPin, Search } from 'lucide-react';
import { AIMAGS_DATA } from '../data/aimagData';

export const AimagsDirectory = ({ onSelectAimag, onBackToMap }: { onSelectAimag: (aimag: (typeof AIMAGS_DATA)[number]) => void; onBackToMap: () => void }) => {
  const [filterLevel, setFilterLevel] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'risk' | 'livestock' | 'pasture' | 'snow'>('risk');

  const filtered = AIMAGS_DATA.filter((a) => {
    if (filterLevel !== 'all' && a.dzudRisk.level !== filterLevel) return false;
    if (regionFilter !== 'all' && a.region !== regionFilter) return false;
    if (searchQuery && !a.nameMn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.centerMn.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'risk') return b.dzudRisk.score - a.dzudRisk.score;
    if (sortBy === 'livestock') return b.livestock.total - a.livestock.total;
    if (sortBy === 'pasture') return b.pasture.overloadRatio - a.pasture.overloadRatio;
    if (sortBy === 'snow') return b.dzudRisk.snowDepthCm - a.dzudRisk.snowDepthCm;
    return 0;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <button onClick={onBackToMap} className="text-xs text-blue-400 hover:text-blue-300 font-semibold mb-2 inline-flex items-center gap-1.5 transition">
            <span>← Газрын зураг руу буцах</span>
          </button>
          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span>Монгол Улсын 21 аймаг & Нийслэл</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-normal">{sorted.length} аймаг</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Аймаг бүрийн зудын түвшин, малын тоо толгой, цасны зузаан болон шуурхай мэдээллийг сонгон үзнэ үү.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}><Grid className="w-4 h-4" /></button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}><List className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        <label className="relative block md:col-span-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-blue-500" placeholder="Аймаг, төв, нэрээр хайх" />
        </label>
        <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="bg-slate-900 border border-slate-800 text-white rounded-xl py-2.5 px-3 text-sm">
          <option value="all">Бүх эрсдэл</option>
          <option value="critical">Нэн их эрсдэлтэй</option>
          <option value="high">Их эрсдэлтэй</option>
          <option value="moderate">Дунд зэрэг</option>
          <option value="low">Бага</option>
        </select>
        <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="bg-slate-900 border border-slate-800 text-white rounded-xl py-2.5 px-3 text-sm">
          <option value="all">Бүх бүс</option>
          {[...new Set(AIMAGS_DATA.map((aimag) => aimag.region))].sort().map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'risk' | 'livestock' | 'pasture' | 'snow')} className="bg-slate-900 border border-slate-800 text-white rounded-xl py-2.5 px-3 text-sm">
          <option value="risk">Эрсдэлээр</option>
          <option value="livestock">Малын тоогоор</option>
          <option value="pasture">Даацын хэтрэлтээр</option>
          <option value="snow">Цасны зузаанаар</option>
        </select>
      </div>

      <div className={`grid gap-4 ${viewMode === 'grid' ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
        {sorted.map((aimag) => (
          <button key={aimag.id} onClick={() => onSelectAimag(aimag)} className="text-left rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:border-blue-500/40 transition group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-400">{aimag.region}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${aimag.dzudRisk.level === 'critical' ? 'bg-red-500/20 text-red-300' : aimag.dzudRisk.level === 'high' ? 'bg-orange-500/20 text-orange-300' : aimag.dzudRisk.level === 'moderate' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                {aimag.dzudRisk.levelLabel}
              </span>
            </div>

            <h3 className="text-xl font-black text-white">{aimag.nameMn}</h3>
            <p className="text-xs text-slate-400 mt-1">{aimag.centerMn}</p>

            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between"><span>Мал</span><span>{(aimag.livestock.total / 1_000_000).toFixed(2)} сая</span></div>
              <div className="flex justify-between"><span>Бэлчээр</span><span>{aimag.pasture.overloadRatio}x</span></div>
              <div className="flex justify-between"><span>Цас</span><span>{aimag.dzudRisk.snowDepthCm} см</span></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
