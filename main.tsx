import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, Heart, Gift, Flame, Trophy, Star, Shield, Car, Youtube, Radio, Gamepad2, Paintbrush, Zap } from 'lucide-react';
import { friends, Friend } from '../data';

interface HeroProps {
  onSelectFriend: (friend: Friend) => void;
}

export default function Hero({ onSelectFriend }: HeroProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-[#030308]">
      {/* 3D Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />
      
      {/* Radiant Multicolor Friendship Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-indigo-600/20 to-rose-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating 3D Friendship Bands & Particles Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: '110vh', 
              x: `${(i * 5) % 100}vw`, 
              rotate: 0, 
              scale: 0.4 + (i % 5) * 0.2, 
              opacity: 0.3 
            }}
            animate={{ 
              y: '-10vh', 
              rotate: 360, 
              x: `${((i * 5) % 100) + Math.sin(i) * 10}vw`,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 8 + (i % 6) * 2, 
              repeat: Infinity, 
              delay: i * 0.4, 
              ease: 'linear' 
            }}
            className="absolute flex items-center justify-center"
          >
            {i % 3 === 0 ? (
              <div className="p-3 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.8)] border border-yellow-200">
                <Heart className="size-5 text-white fill-white animate-pulse" />
              </div>
            ) : i % 3 === 1 ? (
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-[10px] font-black text-white shadow-[0_0_20px_rgba(6,182,212,0.8)] uppercase border border-cyan-200 flex items-center gap-1">
                <Sparkles className="size-3 text-yellow-300" /> BAND #{i + 1}
              </div>
            ) : (
              <div className="size-4 rounded-full bg-yellow-400 shadow-[0_0_20px_yellow] blur-[1px]" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-4xl mb-12 mt-6">
        {/* Top Badge: Dedicated by Aditya */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-500/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-[0.25em] mb-6 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.3)]"
        >
          <Sparkles className="size-4 text-amber-300 animate-spin" /> HAPPY FRIENDSHIP DAY • CREATED BY ADITYA <Heart className="size-4 text-rose-400 fill-rose-400 animate-bounce" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight mb-6 drop-shadow-2xl"
        >
          HAPPY FRIENDSHIP DAY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-cyan-400 drop-shadow-[0_0_35px_rgba(245,158,11,0.6)]">
            FROM ADITYA & THE SQUAD
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed bg-black/40 p-5 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
        >
          Celebrating our real brotherhood! Tap any friend card below to launch their 16:9 full 3D cinematic showcase — complete with BMW drifts, YouTube studios, live podcasts, 3D art, superhero shields, and Free Fire Booyah clutches!
        </motion.p>
      </div>

      {/* 3D FRIEND NAME CARDS MATRIX */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ perspective: 1200 }}>
        {friends.map((friend, index) => {
          const Icon = friend.icon;

          return (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 8, rotateX: -6, z: 50 }}
              onHoverStart={() => setHoveredId(friend.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => onSelectFriend(friend)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/15 bg-slate-900/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Real Background Image */}
              <img
                src={friend.realImage}
                alt={friend.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-85 group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950/60 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${friend.bgGlow} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Top Right Floating Friendship Tag */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/30 border border-amber-300/50 backdrop-blur-md text-[10px] font-black text-amber-200 tracking-wider uppercase shadow-[0_0_15px_amber]">
                <Heart className="size-3 fill-amber-300 text-amber-300" /> BAND #{index + 1}
              </div>

              {/* Content Layout */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between" style={{ transform: 'translateZ(40px)' }}>
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 ${friend.textColor}`}>
                    <Icon className="size-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border ${friend.borderColor} ${friend.textColor}`}>
                    {friend.interest}
                  </span>
                </div>

                {/* Bottom Title & Play Trigger */}
                <div>
                  <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {friend.name}
                  </h2>

                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    <Play className="size-4 fill-cyan-400" /> LAUNCH 3D DRIFT & SHOWCASE
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Friendship Greeting Tag */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mt-12 text-center text-xs text-zinc-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2"
      >
        <span>Happy Friendship Day 2026</span> • <span className="text-cyan-400">Created specially by Aditya</span>
      </motion.div>
    </div>
  );
}
