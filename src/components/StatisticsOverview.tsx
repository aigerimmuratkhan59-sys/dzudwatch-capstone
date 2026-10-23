import { useState } from 'react';
import { AIMAGS_DATA, NATIONAL_TOTALS } from '../data/aimagData';
import { AlertOctagon, ArrowUpDown, BarChart3, Eye, Search, Snowflake, Wind } from 'lucide-react';

export const StatisticsOverview = ({ onSelectAimag, onBackToMap }: { onSelectAimag: (aimag: (typeof AIMAGS_DATA)[number]) => void; onBackToMap?: () => void }) => {
  const [filterLevel, setFilterLevel] = useState('all');
  const [sortField, setSortField] = useState<'risk' | 'livestock' | 'pasture' | 'snow'>('risk');
  const [searchQuery, setSearchQuery] = useState('');
  const totalAimags = NATIONAL_TOTALS.criticalAimagsCount
    + NATIONAL_TOTALS.highRiskAimagsCount
    + NATIONAL_TOTALS.moderateRiskAimagsCount
    + NATIONAL_TOTALS.lowRiskAimagsCount;
  const riskShare = Math.round(
    ((NATIONAL_TOTALS.criticalAimagsCount + NATIONAL_TOTALS.highRiskAimagsCount) / totalAimags) * 100,
  );

  const filtered = AIMAGS_DATA.filter((a) => {
    if (filterLevel !== 'all' && a.dzudRisk.level !== filterLevel) return false;
    if (searchQuery && !a.nameMn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) && !a.centerMn.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortField === 'risk') return b.dzudRisk.score - a.dzudRisk.score;
    if (sortField === 'livestock') return b.livestock.total - a.livestock.total;
    if (sortField === 'pasture') return b.pasture.overloadRatio - a.pasture.overloadRatio;
    if (sortField === 'snow') return b.dzudRisk.snowDepthCm - a.dzudRisk.snowDepthCm;
    return 0;
  });

  return (
    <section id="statistics" className="py-12 border-t border-slate-800 bg-slate-900/60 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {onBackToMap && (
          <button onClick={onBackToMap} className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 transition">
            <span>← Газрын зураг руу буцах</span>
          </button>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Үндэсний нэгдсэн статистик & Эрсдэлийн жагсаалт</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Монгол орны мал сүрэг, бэлчээр ба зудын төлөв</h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">Үндэсний Статистикийн Хороо (ҮСХ) болон ЦУОШГ-ын бодит тоо баримтад суурилсан 21 аймаг, нийслэлийн харьцуулсан үнэлгээ.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300 border border-slate-700 rounded-xl px-3 py-2 bg-slate-950/60">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>2024 оны 12 сар - 2025 оны бодит тооцоолол</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-slate-300 text-xs"> <Snowflake className="w-4 h-4 text-blue-400" /> <span>Нийт мал</span></div>
            <p className="text-3xl font-black text-white mt-3">{NATIONAL_TOTALS.totalLivestock.toLocaleString()}</p>
            <p className="text-xs text-slate-400 mt-1">толгой</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-slate-300 text-xs"><Wind className="w-4 h-4 text-violet-400" /> <span>Даацын хэтрэлт</span></div>
            <p className="text-3xl font-black text-white mt-3">{NATIONAL_TOTALS.averagePastureOverload.toFixed(1)}x</p>
            <p className="text-xs text-slate-400 mt-1">дундаж</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-slate-300 text-xs"><AlertOctagon className="w-4 h-4 text-red-400" /> <span>Зудын эрсдэл</span></div>
            <p className="text-3xl font-black text-white mt-3">{NATIONAL_TOTALS.highRiskAimagsCount}</p>
            <p className="text-xs text-slate-400 mt-1">аймаг</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-slate-300 text-xs"><Eye className="w-4 h-4 text-emerald-400" /> <span>Эрсдэлтэй хувь</span></div>
            <p className="text-3xl font-black text-white mt-3">{riskShare}%</p>
            <p className="text-xs text-slate-400 mt-1">үүсмэл</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="relative block flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-blue-500" placeholder="Аймаг хайх" />
            </label>
            <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="bg-slate-900 border border-slate-800 text-white rounded-xl py-2.5 px-3 text-sm">
              <option value="all">Бүх эрсдэл</option>
              <option value="critical">Нэн их эрсдэлтэй</option>
              <option value="high">Их эрсдэлтэй</option>
              <option value="moderate">Дунд</option>
              <option value="low">Бага</option>
            </select>
            <button onClick={() => setSortField(sortField === 'risk' ? 'snow' : 'risk')} className="flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200">
              <ArrowUpDown className="w-4 h-4" />
              {sortField === 'risk' ? 'Эрсдэлээр' : 'Цасны зузаанаар'}
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="px-4 py-3 font-semibold">Аймаг</th>
                <th className="px-4 py-3 font-semibold">Эрсдэл</th>
                <th className="px-4 py-3 font-semibold">Мал</th>
                <th className="px-4 py-3 font-semibold">Даац</th>
                <th className="px-4 py-3 font-semibold">Цас</th>
                <th className="px-4 py-3 font-semibold">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((aimag) => (
                <tr key={aimag.id} className="border-t border-slate-800 hover:bg-slate-900/80">
                  <td className="px-4 py-3">
                    <div className="font-bold text-white">{aimag.nameMn}</div>
                    <div className="text-xs text-slate-400">{aimag.centerMn}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-bold ${aimag.dzudRisk.level === 'critical' ? 'bg-red-500/20 text-red-300' : aimag.dzudRisk.level === 'high' ? 'bg-orange-500/20 text-orange-300' : aimag.dzudRisk.level === 'moderate' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                      {aimag.dzudRisk.levelLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-200">{(aimag.livestock.total / 1_000_000).toFixed(2)} сая</td>
                  <td className="px-4 py-3 text-slate-200">{aimag.pasture.overloadRatio}x</td>
                  <td className="px-4 py-3 text-slate-200">{aimag.dzudRisk.snowDepthCm} см</td>
                  <td className="px-4 py-3">
                    <button onClick={() => onSelectAimag(aimag)} className="rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1.5 text-xs font-semibold hover:bg-blue-600/30">
                      Дэлгэрэнгүй
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
