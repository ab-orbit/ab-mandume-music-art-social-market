/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, ZoomIn, ZoomOut, Navigation2, Layers, Crosshair, X } from 'lucide-react';
import { IMAGES } from '../constants';

const Pin = ({ active = false, color = 'gold', position, label }: { active?: boolean; color?: 'gold' | 'red'; position: { top: string; left: string }; label: string }) => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-full cursor-pointer group z-10" style={{ top: position.top, left: position.left }}>
      <div className="relative flex flex-col items-center">
        <MapPin 
          size={32} 
          className={color === 'red' ? 'text-mandume-secondary fill-mandume-secondary/30' : 'text-accent-gold fill-accent-gold/30'} 
          strokeWidth={active ? 3 : 2}
        />
        {active && <div className="absolute inset-0 w-8 h-8 rounded-full animate-ping bg-accent-gold/50" />}
        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-paper-white px-4 py-1.5 rounded-lg whitespace-nowrap shadow-xl z-50">
          <span className="font-heading tracking-widest text-lg leading-none">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default function MapView() {
  return (
    <div className="w-full h-full relative bg-[#e8e2d2] overflow-hidden">
      {/* Historical Map Background */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src={IMAGES.reliefMap} 
          alt="Historical Map" 
          className="w-full h-full object-cover grayscale-[20%] sepia-[30%] opacity-60" 
        />
        <div className="absolute inset-0 bg-surface-tan/10 mix-blend-multiply" />
      </div>

      {/* Grid Overlay for technical feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Pins */}
      <Pin label="OIHOLE BATTLEFIELD" color="red" active position={{ top: '45%', left: '42%' }} />
      <Pin label="THE ROYAL ENCLOSURE" position={{ top: '65%', left: '60%' }} />
      <Pin label="ANCIENT BAOBAB" position={{ top: '38%', left: '25%' }} />

      {/* Detail Overlay Card */}
      <div className="absolute bottom-28 lg:bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-30">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-paper-white shadow-2xl rounded-2xl overflow-hidden border border-outline-variant/30"
        >
          <div className="flex flex-col sm:flex-row p-6 gap-6">
            <div className="w-full sm:w-24 h-24 bg-surface-tan rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img src={IMAGES.potteryArtifact} alt="Oihole detail" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="bg-mandume-secondary/10 text-mandume-secondary px-3 py-0.5 rounded-full font-sans font-bold text-[8px] uppercase tracking-widest w-fit mb-1">
                    HISTORICAL LANDMARK
                  </span>
                  <h3 className="font-heading text-2xl text-on-surface uppercase leading-none">OIHOLE BATTLEFIELD</h3>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <X size={20} />
                </button>
              </div>
              <p className="text-xs font-sans text-on-surface-variant leading-relaxed mb-4">
                The definitive site where Mandume ya Ndemufayo led his last stand. Cited in the verses as the "Ground of the Sacred Ancestors."
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-mandume-primary text-paper-white px-4 py-2 rounded-lg font-heading tracking-widest text-lg hover:brightness-110 active:scale-95 transition-all">
                  LEARN MORE
                </button>
                <button className="flex-1 border border-outline text-mandume-primary px-4 py-2 rounded-lg font-heading tracking-widest text-lg hover:bg-surface-tan active:scale-95 transition-all flex items-center justify-center gap-2">
                  <Navigation2 size={16} className="fill-current" />
                  NAVIGATE
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-6 top-24 lg:right-12 lg:top-12 z-30 flex flex-col gap-3">
        <button className="w-12 h-12 bg-paper-white shadow-lg rounded-xl flex items-center justify-center text-mandume-primary hover:bg-surface-tan transition-all active:scale-90 border border-outline-variant/20">
          <ZoomIn size={20} />
        </button>
        <button className="w-12 h-12 bg-paper-white shadow-lg rounded-xl flex items-center justify-center text-mandume-primary hover:bg-surface-tan transition-all active:scale-90 border border-outline-variant/20">
          <ZoomOut size={20} />
        </button>
        <button className="w-12 h-12 bg-paper-white shadow-lg rounded-xl flex items-center justify-center text-mandume-primary hover:bg-surface-tan transition-all active:scale-90 border border-outline-variant/20 mt-4">
          <Layers size={20} />
        </button>
        <button className="w-12 h-12 bg-paper-white shadow-lg rounded-xl flex items-center justify-center text-mandume-primary hover:bg-surface-tan transition-all active:scale-90 border border-outline-variant/20">
          <Crosshair size={20} />
        </button>
      </div>

      {/* Scale & Coord display */}
      <div className="absolute bottom-12 left-12 z-30 hidden lg:flex items-center gap-4 bg-paper-white/60 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant/30">
        <div className="flex flex-col">
          <span className="text-[8px] font-bold text-outline uppercase tracking-widest">COORDINATES</span>
          <span className="text-xs font-heading tracking-tight text-on-surface">17.234°S 15.112°E</span>
        </div>
        <div className="w-px h-6 bg-outline-variant/30" />
        <div className="flex flex-col">
          <span className="text-[8px] font-bold text-outline uppercase tracking-widest">SCALE</span>
          <span className="text-xs font-heading tracking-tight text-on-surface">1:50,000</span>
        </div>
      </div>
    </div>
  );
}
