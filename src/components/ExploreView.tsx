/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Info, Sparkles, MapPin, Brain, History, Share2, ZoomIn, ZoomOut, Filter, Plus, Search } from 'lucide-react';
import { IMAGES } from '../constants';

const Node = ({ 
  label, 
  sublabel, 
  icon: Icon, 
  imageUrl, 
  size = 'md', 
  position 
}: { 
  label: string; 
  sublabel?: string; 
  icon?: any; 
  imageUrl?: string; 
  size?: 'sm' | 'md' | 'lg'; 
  position: { top: string; left: string } 
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      style={{ top: position.top, left: position.left }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
    >
      <div className={`rounded-full border-2 border-accent-gold/30 bg-paper-white shadow-xl p-1 relative ${sizeClasses[size]}`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-surface-container flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={label} className="w-full h-full object-cover" />
          ) : (
            <Icon size={32} className="text-mandume-primary" />
          )}
        </div>
        {size === 'lg' && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-mandume-primary text-paper-white px-6 py-1 rounded-full shadow-lg whitespace-nowrap">
            <span className="font-heading text-xl">{label}</span>
          </div>
        )}
      </div>
      {size !== 'lg' && (
        <div className="mt-3 text-center">
          <h3 className="font-heading text-lg text-mandume-primary leading-none uppercase">{label}</h3>
          {sublabel && <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">{sublabel}</p>}
        </div>
      )}
    </motion.div>
  );
};

export default function ExploreView() {
  return (
    <div className="w-full h-full relative bg-surface-tan overflow-hidden">
      {/* Search & Filter Header (Mobile view variant) */}
      <div className="px-6 mt-6 relative z-20 max-w-lg lg:hidden">
        <div className="bg-paper-white shadow-sm rounded-lg flex items-center px-4 py-2 border border-surface-tan">
          <Filter size={18} className="text-outline mr-3" />
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full font-sans" placeholder="Historical references..." />
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar">
          {['ALL NODES', 'SPIRITUAL', 'HISTORICAL', 'LYRICAL'].map((cat, i) => (
            <span 
              key={cat} 
              className={`px-4 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ${i === 0 ? 'bg-mandume-primary text-paper-white' : 'bg-paper-white border border-outline-variant text-on-surface-variant'}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Graph Area */}
      <div className="absolute inset-0 z-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#807665 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Connection Lines (SVGs) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block">
          <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="#7a5900" strokeWidth="2" strokeDasharray="8,8" />
          <line x1="85%" y1="35%" x2="50%" y2="50%" stroke="#7a5900" strokeWidth="2" />
          <line x1="18%" y1="72%" x2="50%" y2="50%" stroke="#7a5900" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="75%" y1="70%" x2="50%" y2="50%" stroke="#7a5900" strokeWidth="2" />
        </svg>

        {/* Central Anchor */}
        <Node 
          label="Mandume ya Ndemufayo" 
          imageUrl={IMAGES.mandumeStatue} 
          size="lg" 
          position={{ top: '50%', left: '50%' }} 
        />

        {/* Satellite Nodes */}
        <Node 
          label="Spiritual Roots" 
          sublabel="Ancestral Beliefs"
          imageUrl={IMAGES.beadworkPatterns} 
          position={{ top: '25%', left: '20%' }} 
        />
        
        <Node 
          label="Cunene Lands" 
          sublabel="Geographic Territory"
          imageUrl={IMAGES.aridLandscape} 
          position={{ top: '35%', left: '85%' }} 
        />

        <Node 
          label="Oral Tradition" 
          sublabel="Resistance Songs"
          icon={Sparkles}
          position={{ top: '72%', left: '18%' }} 
        />

        <Node 
          label="Resistance Archive" 
          sublabel="Metadata & Documents"
          imageUrl={IMAGES.wiseElder} 
          position={{ top: '70%', left: '75%' }} 
        />
      </div>

      {/* Floating Info Overlay */}
      <div className="absolute bottom-28 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-sm">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-paper-white/90 backdrop-blur-md p-6 rounded-xl border border-outline-variant/30 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <Info size={20} className="text-mandume-primary" />
            <h4 className="font-heading text-xl text-mandume-primary leading-none">REFERENCE CONTEXT</h4>
          </div>
          <p className="text-xs font-sans text-on-surface-variant leading-relaxed">
            Tap any node to delve into the curated artifacts, songs, and historical maps connected to the Mandume legacy.
          </p>
          <div className="mt-4 flex justify-end">
            <button className="font-sans font-bold text-[10px] text-mandume-primary uppercase tracking-widest border-b border-mandume-primary pb-1">
              VIEW ALL REFERENCES
            </button>
          </div>
        </motion.div>
      </div>

      {/* Desktop Controls */}
      <div className="absolute bottom-12 right-12 z-30 hidden lg:flex flex-col gap-3">
        <button className="w-12 h-12 bg-paper-white shadow-lg rounded-xl flex items-center justify-center text-mandume-primary hover:bg-surface-tan transition-all active:scale-90 border border-outline-variant/20">
          <ZoomIn size={20} />
        </button>
        <button className="w-12 h-12 bg-paper-white shadow-lg rounded-xl flex items-center justify-center text-mandume-primary hover:bg-surface-tan transition-all active:scale-90 border border-outline-variant/20">
          <ZoomOut size={20} />
        </button>
        <button className="w-12 h-12 bg-accent-gold shadow-lg rounded-full flex items-center justify-center text-paper-white mt-4 active:scale-90 transition-all">
          <Plus size={24} />
        </button>
      </div>

      {/* Subtle Bottom Controls (Graph only) */}
      <div className="absolute bottom-12 left-12 z-30 hidden lg:flex items-center bg-paper-white/80 backdrop-blur-md rounded-full shadow-lg border border-outline-variant/30 p-1">
        <button className="p-3 hover:bg-surface-tan rounded-full transition-colors"><Search size={20} className="text-mandume-primary" /></button>
        <div className="w-px h-6 bg-outline-variant/40 mx-1"></div>
        <button className="p-3 hover:bg-surface-tan rounded-full transition-colors"><Filter size={20} className="text-mandume-primary" /></button>
        <div className="w-px h-6 bg-outline-variant/40 mx-1"></div>
        <button className="p-3 hover:bg-surface-tan rounded-full transition-colors"><Share2 size={20} className="text-mandume-primary" /></button>
      </div>
    </div>
  );
}
