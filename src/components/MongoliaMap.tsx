import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { AlertTriangle, Layers, RotateCcw, Search, Sparkles } from 'lucide-react';
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

// Аймгийн төвүүдийн бодит координат [өргөрөг, уртраг], аймгийн нэрээр
const AIMAG_COORDS: Record<string, [number, number]> = {
  'Архангай': [47.47, 101.45],
  'Баян-Өлгий': [48.97, 89.96],
  'Баянхонгор': [46.19, 100.72],
  'Булган': [48.81, 103.53],
  'Говь-Алтай': [46.37, 96.25],
  'Говьсүмбэр': [46.36, 108.36],
  'Дархан-Уул': [49.49, 105.92],
  'Дорноговь': [44.89, 110.12],
  'Дорнод': [48.07, 114.53],
  'Дундговь': [45.76, 106.27],
  'Завхан': [47.74, 96.84],
  'Орхон': [49.03, 104.04],
  'Өвөрхангай': [46.26, 102.78],
  'Өмнөговь': [43.57, 104.43],
  'Сүхбаатар': [46.68, 113.28],
  'Сэлэнгэ': [50.23, 106.21],
  'Төв': [47.71, 106.95],
  'Увс': [49.98, 92.07],
  'Ховд': [48.01, 91.64],
  'Хөвсгөл': [49.64, 100.16],
  'Хэнтий': [47.31, 110.65],
  'Улаанбаатар': [47.92, 106.92],
  'Улаанбаатар хот': [47.92, 106.92],
};

const LEVEL_COLORS: Record<string, string> = {
  critical: '#ef4444',
  high: '#f97316',
  moderate: '#f59e0b',
};

const MONGOLIA_BOUNDS: L.LatLngBoundsExpression = [
  [41.4, 87.5],
  [52.3, 120.2],
];

const TILES = {
  light: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors',
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
  },
};

export const MongoliaMap = ({ selectedAimag, onSelectAimag, mode, onModeChange, onRefresh, isRefreshing = false }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapTheme, setMapTheme] = useState<'light' | 'dark'>('light');

  const mapElRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

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

  // Газрын зургийг нэг удаа үүсгэх
  useEffect(() => {
    if (!mapElRef.current || mapRef.current) return;
    const map = L.map(mapElRef.current, {
      scrollWheelZoom: false,
      minZoom: 4,
      maxBounds: [
        [36, 80],
        [58, 130],
      ],
    });
    map.fitBounds(MONGOLIA_BOUNDS);
    markersRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;
    setTimeout(() => map.invalidateSize(), 100);
    return () => {
      map.remove();
      mapRef.current = null;
      tileRef.current = null;
      markersRef.current = null;
    };
  }, []);

  // Газрын зургийн дэвсгэр (цайвар / харанхуй)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (tileRef.current) map.removeLayer(tileRef.current);
    const t = TILES[mapTheme];
    tileRef.current = L.tileLayer(t.url, { attribution: t.attribution, maxZoom: 10 }).addTo(map);
    tileRef.current.bringToBack();
  }, [mapTheme]);

  // Аймаг бүрийн тэмдэглэгээ
  useEffect(() => {
    const group = markersRef.current;
    if (!group) return;
    group.clearLayers();

    AIMAGS_DATA.forEach((aimag) => {
      const coords = AIMAG_COORDS[aimag.nameMn];
      if (!coords) return;
      const isSelected = selectedAimag?.id === aimag.id;
      const color = LEVEL_COLORS[aimag.dzudRisk.level] ?? '#10b981';
      const bg = isSelected ? '#fbbf24' : mapTheme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(15,23,42,0.92)';
      const fg = isSelected ? '#020617' : mapTheme === 'light' ? '#1e293b' : '#e2e8f0';

      const html = `
        <div style="transform:translate(-50%,-50%);display:inline-block;white-space:nowrap;cursor:pointer;
          background:${bg};color:${fg};border:1px solid #94a3b8;border-left:4px solid ${color};
          border-radius:8px;padding:2px 6px;font:600 10px/1.25 system-ui,sans-serif;
          box-shadow:0 2px 6px rgba(0,0,0,0.35);">
          <div>${aimag.nameMn}</div>
          <div style="font-size:9px;opacity:.75;font-weight:500">${getMapValue(aimag)}</div>
        </div>`;

      const marker = L.marker(coords, {
        icon: L.divIcon({ html, className: '', iconSize: [0, 0] }),
        zIndexOffset: isSelected ? 1000 : 0,
      });
      marker.on('click', () => onSelectAimag(aimag));
      marker.addTo(group);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAimag, mode, mapTheme, onSelectAimag]);

  // Сонгосон аймаг руу төвлөрүүлэх
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedAimag) return;
    const coords = AIMAG_COORDS[selectedAimag.nameMn];
    if (coords) map.flyTo(coords, Math.max(map.getZoom(), 6), { duration: 0.6 });
  }, [selectedAimag]);

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
          <div className="relative h-[420px] rounded-2xl border border-slate-800 overflow-hidden z-0">
            <div ref={mapElRef} className="absolute inset-0" />
            {selectedAimag && (
              <div className="absolute bottom-4 left-4 z-[1000] rounded-2xl border border-blue-500/30 bg-slate-950/85 px-3 py-2 text-sm text-slate-200">
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