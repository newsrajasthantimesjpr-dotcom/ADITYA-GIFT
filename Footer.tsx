import { Car, Youtube, MessageCircle, Paintbrush, Zap, Gamepad2 } from 'lucide-react';

export interface Friend {
  id: string;
  name: string;
  interest: string;
  tagline: string;
  color: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  description: string;
  icon: any;
  realImage: string;
  stats: { label: string; value: string }[];
}

export const friends: Friend[] = [
  {
    id: "rithik",
    name: "Rithik",
    interest: "BMW & Drift Enthusiast",
    tagline: "Speed, Precision & Apex Drifting",
    color: "bg-slate-900",
    textColor: "text-blue-400",
    accentColor: "text-cyan-400",
    borderColor: "border-blue-500/30",
    bgGlow: "from-blue-600/30 via-cyan-500/20 to-transparent",
    description: "Cruising through life at top speed. Rithik's drive is unmatched — always steering towards the next apex, tearing down tracks with twin-turbo power and precision drifting.",
    icon: Car,
    realImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Top Speed", value: "320 km/h" },
      { label: "Drift Angle", value: "85°" },
      { label: "Engine", value: "3.0L Twin-Turbo" }
    ]
  },
  {
    id: "mayank",
    name: "Mayank",
    interest: "YouTube Content Viewer",
    tagline: "Binge-Watching Trending Content & Creators",
    color: "bg-rose-950",
    textColor: "text-rose-400",
    accentColor: "text-red-400",
    borderColor: "border-rose-500/30",
    bgGlow: "from-rose-600/30 via-red-500/20 to-transparent",
    description: "Always glued to the screen exploring top trending videos, epic creator sagas, tech reviews, and hilarious clips. Mayank never misses a viral video or a moment with the squad!",
    icon: Youtube,
    realImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Watch Time", value: "24/7 Binge" },
      { label: "Videos Watched", value: "50K+" },
      { label: "Subscription", value: "Premium" }
    ]
  },
  {
    id: "himanshu",
    name: "Himanshu",
    interest: "Chatterbox & Master Storyteller",
    tagline: "Endless Conversations & Unstoppable Vibes",
    color: "bg-amber-950",
    textColor: "text-amber-400",
    accentColor: "text-yellow-400",
    borderColor: "border-amber-500/30",
    bgGlow: "from-amber-600/30 via-yellow-500/20 to-transparent",
    description: "Never a dull or quiet moment when Himanshu is around! He fills every room with non-stop jokes, epic stories, spontaneous chats, and endless laughter with the squad.",
    icon: MessageCircle,
    realImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Chat Time", value: "24/7 Non-Stop" },
      { label: "Laughter Rate", value: "100%" },
      { label: "Stories Told", value: "Infinite" }
    ]
  },
  {
    id: "gaurav",
    name: "Gaurav",
    interest: "DIY & Art Master",
    tagline: "Crafting Vision & Painting Masterpieces",
    color: "bg-emerald-950",
    textColor: "text-emerald-400",
    accentColor: "text-teal-400",
    borderColor: "border-emerald-500/30",
    bgGlow: "from-emerald-600/30 via-teal-500/20 to-transparent",
    description: "Crafting artwork and DIY marvels out of raw imagination. Gaurav's creativity has no bounds — painting vivid 3D canvases, assembling custom crafts, and designing visual masterpieces.",
    icon: Paintbrush,
    realImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Artworks Made", value: "200+" },
      { label: "Precision", value: "99.9%" },
      { label: "Creativity", value: "MAX" }
    ]
  },
  {
    id: "alpesh",
    name: "Alpesh",
    interest: "Superhero & Guardian",
    tagline: "Unstoppable Force & High Energy",
    color: "bg-indigo-950",
    textColor: "text-indigo-400",
    accentColor: "text-violet-400",
    borderColor: "border-indigo-500/30",
    bgGlow: "from-indigo-600/30 via-purple-500/20 to-transparent",
    description: "Saving the day with heroic determination. Alpesh is our very own squad protector — charged with high voltage energy and ready to assemble at any moment.",
    icon: Zap,
    realImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Power Level", value: "Over 9000" },
      { label: "Missions", value: "100% Success" },
      { label: "Shield", value: "Titanium" }
    ]
  },
  {
    id: "harshit",
    name: "Harshit",
    interest: "Free Fire Pro Gamer",
    tagline: "Booyah Master & Battle Royale Legend",
    color: "bg-orange-950",
    textColor: "text-orange-400",
    accentColor: "text-amber-500",
    borderColor: "border-orange-500/30",
    bgGlow: "from-orange-600/30 via-amber-500/20 to-transparent",
    description: "Booyah! Always surviving, always clutching victories. Harshit dominates battlegrounds with lightning reflexes, tactical headshots, and unmatched squad leadership.",
    icon: Gamepad2,
    realImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "K/D Ratio", value: "6.8" },
      { label: "Booyahs", value: "500+" },
      { label: "Rank", value: "Grandmaster" }
    ]
  }
];
