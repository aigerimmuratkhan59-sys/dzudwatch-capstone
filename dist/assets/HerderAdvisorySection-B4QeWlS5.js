var e=`import { useState } from 'react';
import { AlertTriangle, Calculator, CheckCircle2, Snowflake } from 'lucide-react';

export const HerderAdvisorySection = ({ onBackToMap }: { onBackToMap?: () => void }) => {
  const [horses, setHorses] = useState(30);
  const [cattle, setCattle] = useState(25);
  const [camels, setCamels] = useState(5);
  const [sheep, setSheep] = useState(250);
  const [goats, setGoats] = useState(180);
  const [winterDays, setWinterDays] = useState(135);

  const sheepUnits = horses * 6 + cattle * 6 + camels * 5 + sheep * 1 + goats * 0.9;
  const totalHayKg = Math.round(sheepUnits * 0.85 * winterDays);
  const hayBales = Math.ceil(totalHayKg / 20);
  const feedKg = Math.round(sheepUnits * 0.22 * winterDays);
  const feedBags = Math.ceil(feedKg / 25);
  const saltKg = Math.round(sheepUnits * 0.025 * winterDays);

  return (
    <section id="advisory" className="py-12 border-t border-slate-800 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {onBackToMap && (
          <button onClick={onBackToMap} className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 transition">
            <span>← Газрын зураг руу буцах</span>
          </button>
        )}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Малчдад зориулсан шуурхай зөвлөмж & бэлтгэл</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Өвлийн хахир хүйтэн, зудыг хохирол багатай даван туулах нь</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">Тооцооллыг ашиглан, малын төрөл, бэлчээрийн нөхцөл, өвлийн тэжээлийн хэрэгцээг урьдчилан тооцоолъё.</p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Тэжээлийн тооцоолуур</h3>
                <p className="text-xs text-slate-400">Малчинд шаардлагатай өвс, тэжээл, давсны хэмжээг тооцоолох</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[['Адуу', horses, setHorses], ['Үхэр', cattle, setCattle], ['Тэмээ', camels, setCamels], ['Хонь', sheep, setSheep], ['Ямаа', goats, setGoats]].map(([label, value, setter]) => (
                <div key={label as string} className="rounded-2xl bg-slate-950/70 border border-slate-800 p-3">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <label className="font-medium text-slate-300">{label as string}</label>
                    <span className="text-slate-400">{Number(value)}</span>
                  </div>
                  <input type="range" min="0" max="500" value={Number(value)} onChange={(e) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(e.target.value))} className="w-full accent-amber-500" />
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <label className="flex items-center justify-between text-sm font-medium text-slate-300">
                <span>Өвлийн хоног</span>
                <span>{winterDays} хоног</span>
              </label>
              <input type="range" min="30" max="220" value={winterDays} onChange={(e) => setWinterDays(Number(e.target.value))} className="w-full accent-amber-500 mt-3" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Тоон үр дүн</h3>
                  <p className="text-xs text-slate-400">Хамгийн бага шаардлагатай бэлтгэл</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-950 p-3">
                  <div className="text-slate-400">Хонь толгой</div>
                  <div className="text-xl font-black text-white mt-1">{sheepUnits.toLocaleString()}</div>
                </div>
                <div className="rounded-2xl bg-slate-950 p-3">
                  <div className="text-slate-400">Нийт өвс</div>
                  <div className="text-xl font-black text-white mt-1">{totalHayKg.toLocaleString()} кг</div>
                </div>
                <div className="rounded-2xl bg-slate-950 p-3">
                  <div className="text-slate-400">Нийт тэжээл</div>
                  <div className="text-xl font-black text-white mt-1">{feedKg.toLocaleString()} кг</div>
                </div>
                <div className="rounded-2xl bg-slate-950 p-3">
                  <div className="text-slate-400">Тосгуур давс</div>
                  <div className="text-xl font-black text-white mt-1">{saltKg.toLocaleString()} кг</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3 mb-3 text-blue-300 font-semibold">
                <Snowflake className="w-4 h-4" />
                Бэлтгэл зөвлөмж
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• {hayBales} модон/багын бэлэн өвс шаардлагатай.</li>
                <li>• {feedBags} уут тэжээл, тэжээлийн хольц бэлтгэх.</li>
                <li>• Малын хашааг салхинаас хамгаалсан, дулаан, хуурай нөхцөлд байлгах.</li>
                <li>• Нялх, өвчинд өртөмтгий малыг өдөр бүр хянах.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`;export{e as default};