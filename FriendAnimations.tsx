import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/10 mt-20 bg-black/60 backdrop-blur-xl">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="size-4 text-white" />
          </div>
          <span className="font-black text-xl tracking-tight text-white uppercase">SQUAD 3D SHOWCASE</span>
        </div>
        
        <div className="text-zinc-500 text-sm font-semibold">
          © {new Date().getFullYear()} Cinematic 3D Studio Experience. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
