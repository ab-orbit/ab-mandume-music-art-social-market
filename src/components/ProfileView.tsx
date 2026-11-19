/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { User, Shield, Award, Clock, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

export default function ProfileView() {
  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <div className="bg-paper-white rounded-3xl overflow-hidden shadow-sm border border-surface-tan/50">
        <div className="h-32 bg-mandume-primary relative">
          <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-2xl border-4 border-paper-white bg-surface-tan overflow-hidden shadow-lg">
             <img src={IMAGES.wiseElder} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="pt-16 p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-heading text-on-surface leading-none">MANDUME EXPLORER</h2>
              <p className="text-sm font-sans text-on-surface-variant font-medium mt-1">Heritage Curator • Cuanhama Region</p>
            </div>
            <button className="px-6 py-2 bg-mandume-primary text-paper-white rounded-full font-heading tracking-widest text-lg active:scale-95 transition-all">
              EDIT PROFILE
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Shield, label: 'CURATION SCORE', value: '840' },
              { icon: Award, label: 'CONTRIBUTIONS', value: '12' },
              { icon: Clock, label: 'ACTIVE SINCE', value: 'FEB 2024' },
              { icon: User, label: 'LEVEL', value: 'EXP 4' },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-tan p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <stat.icon size={20} className="text-mandume-primary mb-2" />
                <span className="text-[8px] font-bold text-outline uppercase tracking-widest">{stat.label}</span>
                <span className="text-lg font-heading text-mandume-primary">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="font-heading text-2xl text-on-surface border-b border-surface-tan pb-2">PREFERENCES</h3>
            {[
              'Content Languages (Quanyama, Portuguese, English)',
              'Notifications Settings',
              'Offline Cache Manager',
              'Privacy & Visibility'
            ].map((pref) => (
              <div key={pref} className="flex justify-between items-center p-4 rounded-xl hover:bg-surface-tan group cursor-pointer transition-colors">
                <span className="font-sans text-sm text-on-surface-variant">{pref}</span>
                <ChevronRight size={18} className="text-outline group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
