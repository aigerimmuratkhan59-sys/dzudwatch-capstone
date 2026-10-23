import { useEffect, useState } from 'react';
import { AlertOctagon, AlertTriangle, CloudSnow, Droplets, PhoneCall, ShieldAlert, Snowflake, Thermometer, Wind, X } from 'lucide-react';
import { fetchAimagWeather } from '../services/weatherService';

type Aimag = (typeof import('../data/aimagData').AIMAGS_DATA)[number];

export const AimagDetailDrawer = ({ aimag, onClose }: { aimag: Aimag; onClose: () => void }) => {
  const [weather, setWeather] = useState<{ current?: any; forecast?: any[] } | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [activeTab, setActiveTab] = useState<'weather' | 'livestock' | 'pasture' | 'advisory'>('weather');

  useEffect(() => {
    let isMounted = true;
    setWeather(null);
    setLoadingWeather(true);
    fetchAimagWeather(aimag.centerCoordinates[0], aimag.centerCoordinates[1], aimag.id)
      .then((data) => {
        if (isMounted) {
          setWeather(data);
          setLoadingWeather(false);
        }
      })
      .catch((error) => {
        console.error('Weather error:', error);
        if (isMounted) setLoadingWeather(false);
      });

    return () => {
      isMounted = false;
    };
  }, [aimag]);

  const totalAnimals = aimag.livestock.total;
  const sheepPct = ((aimag.livestock.sheep / totalAnimals) * 100).toFixed(1);
  const goatsPct = ((aimag.livestock.goats / totalAnimals) * 100).toFixed(1);
  const cattlePct = ((aimag.livestock.cattle / totalAnimals) * 100).toFixed(1);
  const horsesPct = ((aimag.livestock.horses / totalAnimals) * 100).toFixed(1);
  const camelsPct = ((aimag.livestock.camels / totalAnimals) * 100).toFixed(1);

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl flex flex-col text-slate-100">
      <div className="p-5 border-b border-slate-800/80 bg-slate-950/60 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl font-black text-white tracking-tight">{aimag.nameMn} аймаг</h3>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${aimag.dzudRisk.level === 'critical' ? 'bg-red-500/20 text-red-300 border-red-500/40' : aimag.dzudRisk.level === 'high' ? 'bg-orange-500/20 text-orange-300 border-orange-500/40' : aimag.dzudRisk.level === 'moderate' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'}`}>
              {aimag.dzudRisk.levelLabel}
            </span>
          </div>
          <div className="text-xs text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
            <span>Төв: {aimag.centerMn}</span>
            <span>•</span>
            <span>{aimag.region}</span>
            <span>•</span>
            <span>{aimag.dzudRisk.totalSoums} сумтай</span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition">
          <X className="w-5 h-5" />
        </button>
      </div>

      {aimag.dzudRisk.criticalWarning && (
        <div className="px-5 py-3 bg-red-950/60 border-b border-red-800/50 flex items-center gap-3 text-red-200 text-xs font-medium">
          <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 animate-pulse" />
          <span>{aimag.dzudRisk.criticalWarning}</span>
        </div>
      )}

      <div className="flex border-b border-slate-800 bg-slate-900 text-xs font-semibold">
        {['weather', 'livestock', 'pasture', 'advisory'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`flex-1 py-3 px-2 border-b-2 transition flex items-center justify-center gap-1.5 ${activeTab === tab ? 'border-blue-500 text-blue-400 bg-blue-500/10' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            {tab === 'weather' && <CloudSnow className="w-4 h-4" />}
            {tab === 'livestock' && <span>🐎</span>}
            {tab === 'pasture' && <Wind className="w-4 h-4" />}
            {tab === 'advisory' && <ShieldAlert className="w-4 h-4" />}
            <span>{tab === 'weather' ? 'Цаг агаар (API)' : tab === 'livestock' ? 'Малын тоо' : tab === 'pasture' ? 'Бэлчээрийн даац' : 'Малчны зөвлөмж'}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {activeTab === 'weather' && (
          <div className="space-y-5">
            {loadingWeather ? (
              <div className="p-8 text-center text-slate-400 space-y-2">
                <Snowflake className="w-8 h-8 animate-spin mx-auto text-blue-400" />
                <p className="text-sm">Цаг уурын шууд мэдээллийг татаж байна...</p>
              </div>
            ) : weather ? (
              <>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-blue-300 font-semibold">
                      <Thermometer className="w-4 h-4" />
                      <span>Одоогийн температур</span>
                    </div>
                    <span className="text-xs text-slate-400">{weather.current?.updatedAt}</span>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-black text-white">{weather.current?.temperature}°C</span>
                    <span className="text-slate-400">Хэмжсэн: {weather.current?.feelsLike}°C</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      <span>Чийгшил</span>
                    </div>
                    <p className="text-xl font-bold mt-2 text-white">{weather.current?.humidity}%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Wind className="w-4 h-4 text-violet-400" />
                      <span>Салхи</span>
                    </div>
                    <p className="text-xl font-bold mt-2 text-white">{weather.current?.windSpeed} км/ц</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <h4 className="font-bold text-white mb-3">7 хоногийн таамаглал</h4>
                  <div className="space-y-2">
                    {weather.forecast?.slice(0, 5).map((day: any) => (
                      <div key={day.date} className="flex items-center justify-between rounded-xl bg-slate-900/80 p-2 text-sm">
                        <div>
                          <div className="font-semibold text-white">{day.dayName}</div>
                          <div className="text-slate-400">{day.weatherText}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{day.tempMax}° / {day.tempMin}°</div>
                          <div className="text-slate-400">Цас {day.snowfallSum} см</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-700 text-slate-400 p-8 text-center">
                Цаг агаарын мэдээлэл олдсонгүй.
              </div>
            )}
          </div>
        )}

        {activeTab === 'livestock' && (
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-white">Малын тоо толгой</h4>
                <span className="text-blue-400 text-xs font-semibold">{(totalAnimals / 1_000_000).toFixed(2)} сая</span>
              </div>
              <div className="space-y-3">
                {[
                  ['Хонь', aimag.livestock.sheep, sheepPct],
                  ['Ямаа', aimag.livestock.goats, goatsPct],
                  ['Үхэр', aimag.livestock.cattle, cattlePct],
                  ['Адуу', aimag.livestock.horses, horsesPct],
                  ['Тэмээ', aimag.livestock.camels, camelsPct],
                ].map(([label, value, pct]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{label as string}</span>
                      <span>{Number(value).toLocaleString()} ({pct}%)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" style={{ width: `${Math.min(Number(pct), 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pasture' && (
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <h4 className="font-bold text-white mb-3">Бэлчээрийн даац</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-900 p-3">
                  <div className="text-xs text-slate-400">Даацын хэтрэлт</div>
                  <div className="text-2xl font-black text-amber-300">{aimag.pasture.overloadRatio}x</div>
                </div>
                <div className="rounded-xl bg-slate-900 p-3">
                  <div className="text-xs text-slate-400">Статус</div>
                  <div className="text-sm font-bold text-emerald-300 mt-1">{aimag.pasture.statusLabel}</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4 text-sm text-slate-300">
              <div className="font-semibold text-white mb-2">Товч тайлбар</div>
              <p>{aimag.pasture.grazingPressure}</p>
            </div>
          </div>
        )}

        {activeTab === 'advisory' && (
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <div className="flex items-center gap-2 mb-3 text-amber-300 font-semibold">
                <AlertTriangle className="w-4 h-4" />
                Шуурхай арга хэмжээ
              </div>
              <ul className="space-y-2">
                {aimag.herderAdvisories.urgentActions.map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-400" /> <span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <div className="flex items-center gap-2 mb-3 text-blue-300 font-semibold">
                <PhoneCall className="w-4 h-4" />
                Холбоо барих утас
              </div>
              <div className="space-y-2">
                {aimag.herderAdvisories.emergencyContacts.map((contact) => (
                  <div key={contact.name} className="flex justify-between rounded-xl bg-slate-900 p-2">
                    <span>{contact.name}</span>
                    <span className="font-mono text-xs text-slate-200">{contact.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
