/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, ArrowRight, MessageSquare, Plus, ChevronRight, User, Calendar } from 'lucide-react';
import { IMAGES, ARCHIVE_STATS, LATEST_ANALYSIS, DEBATE_THREADS, TIMELINE_EVENTS } from '../constants';

export default function ArchiveView() {
  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-mandume-primary pb-4 mb-8">
        <div>
          <h1 className="text-4xl lg:text-5xl font-heading text-mandume-primary leading-none">ANALYTICAL ARCHIVE</h1>
          <p className="text-sm font-sans text-on-surface-variant font-medium mt-2">VOLUME 04 / 2024</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 bg-mandume-primary text-paper-white rounded-lg font-heading tracking-widest text-lg hover:brightness-110 active:scale-95 transition-all">
            <Plus size={18} />
            NEW ANALYSIS
          </button>
        </div>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Hero */}
        <div className="lg:col-span-8 group relative overflow-hidden rounded-xl aspect-[16/9] bg-mandume-primary shadow-lg cursor-pointer">
          <img 
            src={IMAGES.heroLibrary} 
            alt="Ancient Library" 
            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
            <span className="bg-accent-gold text-on-primary-fixed font-sans font-bold text-[10px] px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">
              FEATURED ESSAY
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading text-paper-white leading-tight mb-4 max-w-2xl">
              The Geopolitics of Sovereignty: Lessons from the Mandume Era
            </h2>
            <p className="text-sm lg:text-base font-sans text-paper-white/80 max-w-xl leading-relaxed">
              An in-depth analysis of pre-colonial administrative structures and their relevance to modern governance models in the Southern African region.
            </p>
            <div className="mt-8 flex items-center gap-3 text-accent-gold font-heading tracking-widest text-xl group-hover:gap-5 transition-all">
              READ FULL ESSAY <ArrowRight size={20} />
            </div>
          </div>
        </div>

        {/* Sidebar Stats & Contribute */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Stats */}
          <div className="bg-paper-white p-8 rounded-xl shadow-sm border-l-4 border-mandume-primary">
            <h3 className="text-2xl font-heading text-mandume-primary mb-6">ARCHIVE STATS</h3>
            <div className="space-y-4">
              {ARCHIVE_STATS.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center py-2 border-b border-surface-tan last:border-0">
                  <span className="text-sm text-text-secondary font-sans">{stat.label}</span>
                  <span className="text-lg font-heading text-on-surface">{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 w-full bg-surface-tan h-1.5 rounded-full overflow-hidden">
              <div className="bg-accent-gold h-full w-[72%]"></div>
            </div>
          </div>

          {/* Contribute */}
          <div className="bg-surface-container-highest p-8 rounded-xl flex-1 flex flex-col justify-center text-center items-center group cursor-pointer hover:bg-surface-variant transition-colors">
            <div className="w-16 h-16 rounded-full bg-paper-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <BookOpen size={32} className="text-mandume-primary" />
            </div>
            <h3 className="text-2xl font-heading text-mandume-primary">CONTRIBUTE</h3>
            <p className="text-xs font-sans text-on-surface-variant mt-2 mb-6">
              Submit your research papers or debate proposals to our editorial board.
            </p>
            <button className="w-full bg-mandume-primary text-paper-white font-heading tracking-widest text-xl py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all">
              SUBMIT NOW
            </button>
          </div>
        </div>
      </div>

      {/* Latest Analysis Section */}
      <section className="pt-8">
        <div className="flex justify-between items-center mb-8 border-b-2 border-outline-variant/30 pb-4">
          <h2 className="text-3xl font-heading text-mandume-primary">LATEST ANALYSIS</h2>
          <div className="hidden sm:flex gap-2">
            <button className="p-2 bg-paper-white rounded-full shadow-sm hover:bg-surface-container transition-all"><ArrowRight className="rotate-180" size={20} /></button>
            <button className="p-2 bg-paper-white rounded-full shadow-sm hover:bg-surface-container transition-all"><ArrowRight size={20} /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_ANALYSIS.map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ y: -5 }}
              className="bg-paper-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-surface-tan/50"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-mandume-tertiary">
                   <div className={`w-2 h-2 rounded-full ${item.type === 'primary' ? 'bg-mandume-primary' : item.type === 'secondary' ? 'bg-mandume-secondary' : 'bg-mandume-tertiary'}`} />
                   <span className="font-sans font-bold text-[10px] uppercase tracking-widest">{item.category}</span>
                </div>
                <h4 className="text-xl font-heading text-on-surface leading-tight mb-3">{item.title}</h4>
                <p className="text-xs font-sans text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-surface-tan flex justify-between items-center text-[10px] font-sans font-bold text-outline uppercase tracking-wider">
                  <span>{item.author}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="pt-8">
        <div className="flex justify-between items-center mb-8 border-b-2 border-outline-variant/30 pb-4">
          <h2 className="text-3xl font-heading text-mandume-primary uppercase">HISTORICAL TIMELINE</h2>
          <div className="flex items-center gap-2 text-mandume-primary">
            <Calendar size={20} />
            <span className="font-sans font-bold text-[10px] uppercase tracking-widest">Chronological View</span>
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface-tan -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-mandume-primary border-4 border-paper-white shadow-sm -translate-x-1/2 z-10 hidden md:block" />
                
                {/* Content Card */}
                <div className="w-full md:w-[45%] bg-paper-white p-6 rounded-xl shadow-sm border border-surface-tan/50 hover:shadow-md transition-all cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-heading text-mandume-secondary">{event.year}</span>
                    <div className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border ${
                      event.type === 'military' 
                        ? 'bg-red-50 text-red-700 border-red-200' 
                        : event.type === 'political' 
                        ? 'bg-blue-50 text-blue-700 border-blue-200' 
                        : 'bg-accent-gold/10 text-accent-gold border-accent-gold/20'
                    }`}>
                      {event.type}
                    </div>
                  </div>
                  <h4 className="text-xl font-heading text-on-surface mb-2">{event.title}</h4>
                  <p className="text-xs font-sans text-on-surface-variant leading-relaxed">{event.description}</p>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Debates */}
      <section className="pt-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-heading text-mandume-primary leading-none">COMMUNITY DEBATES</h2>
          <a href="#" className="font-sans font-bold text-[10px] text-mandume-primary underline underline-offset-4 uppercase tracking-widest">
            VIEW ALL THREADS
          </a>
        </div>
        <div className="space-y-4">
          {DEBATE_THREADS.map((debate) => (
            <div 
              key={debate.id} 
              className={`bg-paper-white p-6 rounded-xl shadow-sm border-r-4 ${debate.color === 'secondary' ? 'border-mandume-secondary' : debate.color === 'accent-gold' ? 'border-accent-gold' : 'border-mandume-tertiary'} group hover:shadow-md transition-all cursor-pointer`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border ${debate.color === 'secondary' ? 'bg-mandume-secondary/10 text-mandume-secondary border-mandume-secondary/20' : debate.color === 'accent-gold' ? 'bg-accent-gold/10 text-accent-gold border-accent-gold/20' : 'bg-mandume-tertiary/10 text-mandume-tertiary border-mandume-tertiary/20'}`}>
                      {debate.tag}
                    </span>
                    <span className="text-[10px] font-sans text-outline">{debate.time}</span>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-heading text-on-surface group-hover:text-mandume-primary transition-colors">
                    {debate.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-paper-white bg-surface-tan flex items-center justify-center overflow-hidden">
                          <User size={14} className="text-outline" />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-paper-white bg-primary-container/20 flex items-center justify-center text-[10px] font-bold text-mandume-primary">
                        +{debate.participants - 3}
                      </div>
                    </div>
                    <span className="text-[10px] font-sans font-bold text-outline uppercase">{debate.participants} active participants</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center px-8 border-l border-surface-tan hidden md:block">
                    <span className="block text-3xl font-heading text-mandume-primary">{debate.replies}</span>
                    <span className="block text-[10px] font-sans font-bold text-outline uppercase">Replies</span>
                  </div>
                  <ChevronRight size={24} className="text-outline group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
