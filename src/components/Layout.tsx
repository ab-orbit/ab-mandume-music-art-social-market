/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Menu, Search, Shield, Network, Map, BookOpen, Image as ImageIcon, User, Bell, Settings } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { NavItem, ViewType } from '../types';

const iconMap: Record<string, LucideIcon> = {
  hub: Network,
  map: Map,
  inventory_2: BookOpen,
  palette: ImageIcon,
  account_circle: User,
};

interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Layout({ children, activeView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen flex text-on-surface">
      {/* Sidebar for Desktop */}
      <aside className="fixed left-0 top-0 h-full w-64 z-50 bg-surface-container-highest hidden lg:flex flex-col py-8 px-4 gap-6 overflow-y-auto shadow-md">
        <div className="mb-12 px-2">
          <h1 className="text-3xl font-heading text-mandume-primary uppercase tracking-widest leading-none">Mandume</h1>
          <p className="text-sm font-sans text-on-surface-variant font-medium mt-1">Cultural Explorer</p>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as ViewType)}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'bg-primary-container/20 text-mandume-primary font-bold border-r-4 border-mandume-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-mandume-primary' : 'text-outline'} />
                <span className="font-heading text-xl">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant/30 flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
            <Shield size={20} className="text-on-primary-container" />
          </div>
          <div>
            <p className="text-sm font-bold text-mandume-primary">M. Heritage</p>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70">Active Session</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 flex flex-col bg-surface overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 w-full z-40 bg-surface-tan/90 backdrop-blur-md shadow-sm flex justify-between items-center px-6 h-16">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 hover:bg-surface-container rounded-full active:scale-95 transition-all">
              <Menu size={24} className="text-mandume-primary" />
            </button>
            <h2 className="text-2xl font-heading tracking-wider text-mandume-primary uppercase truncate max-w-[200px] sm:max-w-none">
              {NAV_ITEMS.find((n) => n.id === activeView)?.label || 'Mandume'}
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative hidden sm:block max-w-xs w-full">
              <input
                type="text"
                placeholder="Search archive..."
                className="w-full bg-paper-white border border-surface-tan focus:border-accent-gold rounded-full px-10 py-2 text-sm transition-all outline-none"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            </div>

            <div className="flex items-center gap-2">
              <button className="relative p-2 text-mandume-primary hover:bg-surface-container rounded-full active:scale-95 transition-all">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-mandume-secondary rounded-full border border-paper-white"></span>
              </button>
              <button className="p-2 text-mandume-primary hover:bg-surface-container rounded-full active:scale-95 transition-all">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic View Section */}
        <section className="flex-1 relative overflow-auto hide-scrollbar pb-20 lg:pb-0">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </section>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="fixed bottom-0 left-0 w-full z-50 lg:hidden flex justify-around items-center px-4 pb-6 pt-3 bg-paper-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] rounded-t-2xl">
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-300 ${
                isActive
                  ? 'bg-primary-container/20 text-mandume-primary rounded-xl scale-110'
                  : 'text-on-surface-variant'
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] font-bold uppercase mt-1 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
