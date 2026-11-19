/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, MessageCircle, Plus, Filter, LayoutGrid } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

export default function GalleryView() {
  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto flex flex-col min-h-full">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-heading text-on-surface leading-none mb-4">EXPRESSION GALLERY</h1>
        <p className="text-base font-sans text-on-surface-variant max-w-xl leading-relaxed">
          Witness the legacy of Mandume through the lens of our global community. Explore artifacts, symbols, and contemporary fan art.
        </p>
      </section>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-center mb-12">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full sm:w-auto pb-2 sm:pb-0">
          {['ALL ART', 'ILLUSTRATIONS', 'ARTIFACTS', 'DIGITAL'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-2 rounded-full font-heading tracking-widest text-lg transition-all ${i === 0 ? 'bg-mandume-primary text-paper-white shadow-md' : 'bg-surface-tan text-on-surface-variant hover:bg-surface-container'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-all text-xs font-bold font-sans uppercase">
            <Filter size={16} /> FILTER
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-all text-xs font-bold font-sans uppercase">
            <LayoutGrid size={16} /> MASONRY
          </button>
        </div>
      </div>

      {/* Gallery Masonry-like Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 pb-32 lg:pb-12">
        {GALLERY_ITEMS.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -8 }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-paper-white shadow-sm hover:shadow-xl transition-all cursor-pointer border border-surface-tan/50"
          >
            <div className="relative overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <div className="flex gap-4 text-paper-white">
                  <div className="flex items-center gap-1">
                    <Heart size={18} className="fill-mandume-secondary text-mandume-secondary" />
                    <span className="text-xs font-bold">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={18} fill="white" />
                    <span className="text-xs font-bold">{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading text-2xl text-on-surface uppercase leading-none">{item.title}</h3>
                  <p className="text-xs font-sans text-on-surface-variant mt-1 italic">by {item.author}</p>
                </div>
                <div className="flex shrink-0 gap-1">
                   {item.tags.map(tag => (
                     <span key={tag} className="text-[8px] font-bold uppercase py-1 px-2 bg-primary-container/10 text-mandume-primary rounded border border-mandume-primary/20">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-8 lg:bottom-12 lg:right-12 w-16 h-16 bg-mandume-primary text-paper-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <Plus size={32} className="group-hover:rotate-90 transition-transform" />
      </button>
    </div>
  );
}
