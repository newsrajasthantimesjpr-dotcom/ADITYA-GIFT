import { motion } from 'motion/react';
import { RithikAnim, MayankAnim, HimanshuAnim, GauravAnim, AlpeshAnim, HarshitAnim } from './FriendAnimations';

export default function FriendSection({ name, interest, description, icon: Icon, color, accentColor, index }: any) {
  
  const getAnimation = () => {
    switch(name) {
      case 'Rithik': return <RithikAnim />;
      case 'Mayank': return <MayankAnim />;
      case 'Himanshu': return <HimanshuAnim />;
      case 'Gaurav': return <GauravAnim />;
      case 'Alpesh': return <AlpeshAnim />;
      case 'Harshit': return <HarshitAnim />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className={`absolute inset-0 ${color.replace('text-', 'bg-')} opacity-10 blur-[150px]`} />
      
      {/* 16:9 Cinematic Container */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        className="relative w-full max-w-[90vw] md:max-w-[80vw] aspect-[16/9] bg-black/40 backdrop-blur-md rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl"
        style={{ perspective: 1200 }}
      >
        {/* The 3D Animation Layer (Sequence 1) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {getAnimation()}
        </div>

        {/* The Text Layer (Sequence 2) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50, z: -100 },
            visible: { 
              opacity: 1, 
              y: 0, 
              z: 50,
              transition: { delay: 2.5, duration: 1, type: 'spring', bounce: 0.4 } 
            }
          }}
          className="absolute bottom-10 left-10 right-10 z-20 flex flex-col items-start text-left"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { delay: 2.7, duration: 0.8 } }
            }}
            className={`flex items-center gap-4 mb-4 ${accentColor}`}
          >
            <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg`}>
              <Icon size={32} />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase">{interest}</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
            {name}
          </h2>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 3, duration: 1 } }
            }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed drop-shadow-md bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            {description}
          </motion.p>
        </motion.div>
        
        {/* Ambient overlay inside container */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none" />
      </motion.div>
    </div>
  );
}
