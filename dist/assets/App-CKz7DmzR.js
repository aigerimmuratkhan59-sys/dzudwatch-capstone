var e=`import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CloudSnow,
  Database,
  ExternalLink,
  Github,
  MapPin,
  Menu,
  PhoneCall,
  ShieldAlert,
  Snowflake,
  X,
} from 'lucide-react';
import { AimagDetailDrawer } from './components/AimagDetailDrawer';
import { AimagsDirectory } from './components/AimagsDirectory';
import { GithubDeployModal } from './components/GithubDeployModal';
import { HerderAdvisorySection } from './components/HerderAdvisorySection';
import { MongoliaMap } from './components/MongoliaMap';
import { StatisticsOverview } from './components/StatisticsOverview';
import { AIMAGS_DATA } from './data/aimagData';

type Tab = 'home' | 'statistics' | 'aimags' | 'advisory' | 'sources';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedAimag, setSelectedAimag] = useState<(typeof AIMAGS_DATA)[number] | null>(null);
  const [mapMode, setMapMode] = useState('dzudRisk');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    window.setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 border-b border-red-900/40 text-[11px] sm:text-xs py-1.5 px-4 text-center text-slate-300 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <span>
          <strong>Шуурхай мэдээ:</strong> Сүхбаатар, Хэнтий, Завхан, Увс аймгуудад хүйтний ба төмөр зуд нүүрлэж онцгой дэглэмд шилжив.
        </span>
        <button
          className="underline text-amber-300 hover:text-white font-medium ml-1"
          onClick={() => {
            const sukhbaatar = AIMAGS_DATA.find((a) => a.id === 'sukhbaatar');
            if (sukhbaatar) setSelectedAimag(sukhbaatar);
          }}
        >
          Мэдээлэл харах
        </button>
      </div>

      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2.5 text-white font-black text-xl tracking-tight group">
            <div className="p-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition">
              <Snowflake className="w-5 h-5 text-blue-400" />
            </div>
            <span>Dzud Watch</span>
          </button>

          <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-xs font-semibold text-slate-300">
            {[
              ['home', 'Нүүр (Газрын зураг)'],
              ['statistics', 'Статистик'],
              ['aimags', 'Аймгууд'],
              ['advisory', 'Малчны зөвлөмж & Тооцоолуур'],
              ['sources', 'Эх сурвалж'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => navigateTo(id as Tab)}
                className={\`px-3.5 py-1.5 rounded-xl transition \${activeTab === id ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'hover:text-white hover:bg-slate-800'}\`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setIsGithubModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub руу байршуулах</span>
            </button>
            <a href="tel:105" className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/30 transition">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>105</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden p-4 bg-slate-900 border-b border-slate-800 space-y-2 text-xs">
            {[['home', 'Нүүр (Газрын зураг)'], ['statistics', 'Статистик & Хяналт'], ['aimags', '21 Аймаг & Нийслэл'], ['advisory', 'Малчны зөвлөмж & Тооцоолуур'], ['sources', 'Эх сурвалж & Мэдээлэл']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => {
                  navigateTo(id as Tab);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                {label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button onClick={() => { setMobileMenuOpen(false); setIsGithubModalOpen(true); }} className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800 text-white font-medium text-xs border border-slate-700">
                <Github className="w-4 h-4" />
                <span>GitHub руу байршуулах (Заавар & ZIP)</span>
              </button>
              <a href="tel:105" className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-600 text-white font-bold text-xs">
                <PhoneCall className="w-4 h-4" />
                <span>ОБЕГ Шуурхай: 105</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {activeTab === 'home' && (
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-400">
              <span>Монгол орны цаг уурын мэдээлэл</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Таны аймагт зуд ойрхон байна уу?
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Аймгаа газрын зургаас сонгоод, цаг агаарын шинэчилсэн мэдээлэл, малын тоо, бэлчээрийн даац болон сэрэмжлүүлгийг харна уу.
            </p>
          </div>

          <div className="w-full">
            <MongoliaMap
              selectedAimag={selectedAimag}
              onSelectAimag={setSelectedAimag}
              mode={mapMode}
              onModeChange={setMapMode}
              onRefresh={handleRefresh}
              isRefreshing={isRefreshing}
            />
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Системийн үндсэн хэсгүүд</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-normal">сонгож орох</span>
                </h3>
                <p className="text-xs text-slate-400">Нэг хуудсанд шахагдахгүйгээр өөрийн сонирхсон хэсэг рүү дарж дэлгэрэнгүй танилцаарай.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{
                title: 'Статистик & Хяналт',
                icon: BarChart3,
                desc: '64.7 сая малын бүтэц, бэлчээрийн даацын дундаж хэтрэлт, бүс нутгийн харьцуулсан график үзүүлэлтүүд.',
                action: () => navigateTo('statistics'),
                tint: 'blue',
              }, {
                title: 'Аймагын бүртгэл',
                icon: MapPin,
                desc: '21 аймаг + нийслэлийн хураангуй, эрсдэлийн оноо, бэлчээрийн нөхцөл, тэжээлийн мэдээлэл.',
                action: () => navigateTo('aimags'),
                tint: 'cyan',
              }, {
                title: 'Малчны зөвлөмж',
                icon: Calculator,
                desc: 'Тэжээлийн тооцоо, өвлийн бэлэн байдал, төрлийн тусламжийн зөвлөмжүүд.',
                action: () => navigateTo('advisory'),
                tint: 'amber',
              }, {
                title: 'Эх сурвалж',
                icon: Database,
                desc: 'Нийслэлийн статистик, Цаг уур, мал аж ахуйн удирдлагын эх сурвалжууд.',
                action: () => navigateTo('sources'),
                tint: 'slate',
              }].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} onClick={item.action} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-900/90 transition cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                      <span>Үзэх</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      )}

      {activeTab === 'statistics' && <StatisticsOverview onSelectAimag={setSelectedAimag} onBackToMap={() => navigateTo('home')} />}
      {activeTab === 'aimags' && <AimagsDirectory onSelectAimag={setSelectedAimag} onBackToMap={() => navigateTo('home')} />}
      {activeTab === 'advisory' && <HerderAdvisorySection onBackToMap={() => navigateTo('home')} />}
      {activeTab === 'sources' && (
        <section className="py-12 border-t border-slate-800 bg-slate-900/60 text-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Эх сурвалж</p>
                <h2 className="text-3xl font-black text-white mt-2">Мэдээллийн эх сурвалж ба тооцоолол</h2>
              </div>
              <button onClick={() => navigateTo('home')} className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-semibold">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Газрын зураг руу буцах
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['НҮБ-ын Хүнс, хөдөө аж ахуйн байгууллага', 'FAO, livestock vulnerability baseline and pasture stress indicators.'],
                ['Монголын Үндэсний Статистикийн Хороо', 'Аймаг тус бүрийн малын тоо, хүн ам, бүс нутгийн статистик.'],
                ['Байгалийн гамшгаас хамгаалах газар', 'Цаг агаарын сэрэмжлүүлэг, өвлийн эрсдэлийн үзүүлэлтүүд.'],
                ['Open-Meteo API', 'Одоогийн болон 7 хоногийн цаг агаар, цас, салхи, температурын мэдээлэл.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <CloudSnow className="w-5 h-5 text-blue-400" />
                    <h3 className="font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedAimag && <AimagDetailDrawer aimag={selectedAimag} onClose={() => setSelectedAimag(null)} />}
      <GithubDeployModal isOpen={isGithubModalOpen} onClose={() => setIsGithubModalOpen(false)} />
    </div>
  );
}
`;export{e as default};