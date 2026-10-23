import { useState } from 'react';
import { Check, Copy, Download, Github, Globe, HelpCircle, X } from 'lucide-react';
import packageJson from '../../package.json?raw';
import indexHtml from '../../index.html?raw';
import readme from '../../README.md?raw';
import tsconfig from '../../tsconfig.json?raw';
import viteConfig from '../../vite.config.ts?raw';

const sourceFiles = import.meta.glob('/src/**/*', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

export const GithubDeployModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isExportingZip, setIsExportingZip] = useState(false);
  const [repoName, setRepoName] = useState('dzud-watch-mongolia');
  const [githubUsername, setGithubUsername] = useState('your-username');

  if (!isOpen) return null;

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    window.setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = [
    'git init',
    'git add .',
    'git commit -m "feat: Dzud Watch Mongolia complete platform"',
    'git branch -M main',
    `git remote add origin https://github.com/${githubUsername}/${repoName}.git`,
    'git push -u origin main',
  ].join('\n');

  const handleDownloadZip = async () => {
    setIsExportingZip(true);
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      zip.file('package.json', packageJson);
      zip.file('index.html', indexHtml);
      zip.file('README.md', readme);
      zip.file('tsconfig.json', tsconfig);
      zip.file('vite.config.ts', viteConfig);
      await Promise.all(Object.entries(sourceFiles).map(async ([filePath, loadSource]) => {
        zip.file(filePath.replace(/^\//, ''), await loadSource());
      }));

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${repoName}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error('ZIP generation error:', error);
    } finally {
      setIsExportingZip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
              <Github className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">GitHub руу байршуулах</h3>
              <p className="text-xs text-slate-400">Эх сурвалж, заавар, ZIP export</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-100">
            <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <span>Энэ төсөл нь Vite + React + Tailwind-тай ажилладаг. GitHub-руу байршуулж, сайтээ шууд эхлүүлээрэй.</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="space-y-2 text-sm text-slate-300">
              <span>GitHub username</span>
              <input value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:border-blue-500 outline-none" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Repository name</span>
              <input value={repoName} onChange={(e) => setRepoName(e.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:border-blue-500 outline-none" />
            </label>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Globe className="w-4 h-4 text-blue-400" />
                Git commands
              </div>
              <button onClick={() => copyToClipboard(gitCommands, 0)} className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1.5">
                {copiedIndex === 0 ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                Copy
              </button>
            </div>
            <pre className="whitespace-pre-wrap text-xs text-slate-300 bg-slate-900 rounded-xl p-3">{gitCommands}</pre>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Download className="w-4 h-4 text-emerald-400" />
                ZIP export
              </div>
              <button onClick={handleDownloadZip} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-3 py-2 text-sm font-semibold hover:bg-emerald-500">
                {isExportingZip ? 'Бэлтгэж байна...' : 'ZIP татах'}
              </button>
            </div>
            <p className="text-xs text-slate-400">Энэ function нь ажиллаж буй төслийн файлуудыг Zip-ээр баглааж татаж авна.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
